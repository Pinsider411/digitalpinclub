#!/usr/bin/env node
/**
 * Sync pin_editions + mint_totals from Atlas public SearchEditions API.
 *
 * Prefers POST /public/atlas.v1.EditionService/SearchEditions (paginated).
 * Falls back to seed-editions.json totals if API returns fewer editions than
 * the current mint_totals.edition_count (incomplete page pass).
 *
 * Usage: DATABASE_URL=... node scripts/sync-mint-supplies.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { neon } from "@neondatabase/serverless";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ATLAS_URL =
  "https://api.production.atlas.dapperlabs.com/public/atlas.v1.EditionService/SearchEditions";
const SOURCE_API =
  "Unofficial estimate from Atlas SearchEditions (Disney Pinnacle public catalog · not every possible reward/off-archive pin)";
const SOURCE_SEED =
  "Unofficial estimate from Disney Pinnacle Releases archive (not every possible reward/off-archive pin)";

const url = process.env.DATABASE_URL;
if (!url) {
  console.error("DATABASE_URL is required");
  process.exit(1);
}
const sql = neon(url);

async function fetchPage(offset, limit) {
  const res = await fetch(ATLAS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Connect-Protocol-Version": "1",
      Origin: "https://disneypinnacle.com",
      Referer: "https://disneypinnacle.com/",
    },
    body: JSON.stringify({
      product: "disney",
      limit: String(limit),
      offset: String(offset),
      sortByOption: "RELEASE_DATE",
      sortByDirection: "DESC",
    }),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Atlas ${res.status}: ${text.slice(0, 200)}`);
  }
  return res.json();
}

function mapEdition(e) {
  const tmpl = e.editionTemplate || {};
  const numMinted = Number(e.numMinted ?? 0);
  const maxMintSize =
    e.maxMintSize != null && e.maxMintSize !== ""
      ? Number(e.maxMintSize)
      : null;
  const effectiveSupply =
    e.effectiveSupply != null && e.effectiveSupply !== ""
      ? Number(e.effectiveSupply)
      : null;
  return {
    editionId: Number(e.id),
    numMinted,
    maxMintSize: Number.isFinite(maxMintSize) ? maxMintSize : null,
    effectiveSupply: Number.isFinite(effectiveSupply) ? effectiveSupply : null,
    // TODO: enrich name — Atlas editionTemplate.name is often an asset label
    // (e.g. Set_Franchise_Pincard_Logo). Prefer collector title when available.
    name: tmpl.name || null,
    parallel: e.parallel || null,
    editionType: tmpl.editionType || null,
  };
}

async function upsertEditions(editions) {
  const BATCH = 80;
  for (let i = 0; i < editions.length; i += BATCH) {
    const chunk = editions.slice(i, i + BATCH);
    const params = [];
    const placeholders = chunk.map((e, idx) => {
      const base = idx * 7;
      params.push(
        e.editionId,
        e.numMinted,
        e.maxMintSize,
        e.effectiveSupply,
        e.name,
        e.parallel,
        e.editionType
      );
      return `($${base + 1}, $${base + 2}, $${base + 3}, $${base + 4}, $${base + 5}, $${base + 6}, $${base + 7}, now())`;
    });
    await sql.query(
      `INSERT INTO pin_editions (
        edition_id, num_minted, max_mint_size, effective_supply, name, parallel, edition_type, updated_at
      ) VALUES ${placeholders.join(", ")}
      ON CONFLICT (edition_id) DO UPDATE SET
        num_minted = EXCLUDED.num_minted,
        max_mint_size = EXCLUDED.max_mint_size,
        effective_supply = EXCLUDED.effective_supply,
        name = EXCLUDED.name,
        parallel = EXCLUDED.parallel,
        edition_type = EXCLUDED.edition_type,
        updated_at = now()`,
      params
    );
  }
}

async function writeTotals({ minted, supply, count, source }) {
  await sql`
    INSERT INTO mint_totals (
      id, estimated_total_minted, estimated_total_effective_supply, edition_count, source, updated_at
    ) VALUES (
      1, ${minted}, ${supply}, ${count}, ${source}, now()
    )
    ON CONFLICT (id) DO UPDATE SET
      estimated_total_minted = EXCLUDED.estimated_total_minted,
      estimated_total_effective_supply = EXCLUDED.estimated_total_effective_supply,
      edition_count = EXCLUDED.edition_count,
      source = EXCLUDED.source,
      updated_at = now()
  `;
}

function loadSeedFallback() {
  const candidates = [
    path.resolve(__dirname, "../../mockups/mint-count/seed-editions.json"),
    path.resolve(__dirname, "data/seed-editions.json"),
  ];
  for (const p of candidates) {
    if (fs.existsSync(p)) {
      return JSON.parse(fs.readFileSync(p, "utf8"));
    }
  }
  return null;
}

async function main() {
  const existing =
    (
      await sql`SELECT edition_count, estimated_total_minted FROM mint_totals WHERE id = 1`
    )[0] || null;

  const byId = new Map();
  let offset = 0;
  const limit = 50;
  let reportedTotal = null;
  let pages = 0;

  console.log("Fetching Atlas SearchEditions…");
  for (;;) {
    const data = await fetchPage(offset, limit);
    const editions = data.editions || [];
    const pag = data.pagination || {};
    if (reportedTotal == null && pag.totalCount != null) {
      reportedTotal = Number(pag.totalCount);
      console.log(`pagination.totalCount=${reportedTotal}`);
    }
    for (const raw of editions) {
      const mapped = mapEdition(raw);
      if (Number.isFinite(mapped.editionId)) byId.set(mapped.editionId, mapped);
    }
    pages += 1;
    if (pages % 10 === 0 || editions.length === 0) {
      console.log(
        `page ${pages} offset=${offset} unique=${byId.size} hasMore=${pag.hasMore}`
      );
    }
    if (!editions.length || pag.hasMore === false) break;
    offset += limit;
    // soft cap to avoid runaway if hasMore stays true forever
    if (reportedTotal != null && offset >= reportedTotal + limit) break;
    if (pages > 200) {
      console.warn("page cap reached; stopping");
      break;
    }
    await new Promise((r) => setTimeout(r, 80));
  }

  const list = [...byId.values()].sort((a, b) => a.editionId - b.editionId);
  const apiMinted = list.reduce((s, e) => s + e.numMinted, 0);
  const apiSupply = list.reduce((s, e) => s + (e.effectiveSupply || 0), 0);
  console.log(
    `API unique=${list.length} minted=${apiMinted} supply=${apiSupply}`
  );

  const priorCount = existing ? Number(existing.edition_count) : 0;
  const incomplete =
    list.length === 0 ||
    (priorCount > 0 && list.length < priorCount * 0.9) ||
    (reportedTotal != null && list.length < reportedTotal * 0.9);

  if (list.length > 0) {
    await upsertEditions(list);
    console.log(`upserted ${list.length} pin_editions`);
  }

  if (incomplete) {
    console.warn(
      `API pass looks incomplete (got ${list.length}, prior=${priorCount}, reported=${reportedTotal}). Keeping seeded crawl totals as fallback.`
    );
    const seed = loadSeedFallback();
    if (seed) {
      await writeTotals({
        minted: seed.estimatedTotalMinted,
        supply: seed.estimatedTotalEffectiveSupply,
        count: seed.editionCount,
        source: SOURCE_SEED,
      });
      // Also ensure seed editions are present if API was empty
      if (list.length === 0 && Array.isArray(seed.editions)) {
        await upsertEditions(seed.editions);
      }
    } else if (existing) {
      console.warn("No seed file; leaving mint_totals row unchanged.");
    } else {
      await writeTotals({
        minted: apiMinted,
        supply: apiSupply,
        count: list.length,
        source: SOURCE_API,
      });
    }
  } else {
    await writeTotals({
      minted: apiMinted,
      supply: apiSupply,
      count: list.length,
      source: SOURCE_API,
    });
  }

  const rows = await sql`SELECT * FROM mint_totals WHERE id = 1`;
  const count = await sql`SELECT count(*)::int AS n FROM pin_editions`;
  console.log("mint_totals:", rows[0]);
  console.log("pin_editions count:", count[0]?.n);
  console.log("DONE");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
