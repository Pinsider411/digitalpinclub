#!/usr/bin/env node
/**
 * Seed pin_editions + mint_totals from seed-editions.json.
 * Usage: DATABASE_URL=... node scripts/seed-mint-totals.mjs [path-to-seed.json]
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { neon } from "@neondatabase/serverless";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const seedPath =
  process.argv[2] ||
  path.resolve(__dirname, "../../mockups/mint-count/seed-editions.json");

const url = process.env.DATABASE_URL;
if (!url) {
  console.error("DATABASE_URL is required");
  process.exit(1);
}

const raw = JSON.parse(fs.readFileSync(seedPath, "utf8"));
const editions = raw.editions || [];
const sql = neon(url);

const SOURCE =
  "Unofficial estimate from Disney Pinnacle Releases archive (not every possible reward/off-archive pin)";

console.log(
  `Seeding ${editions.length} editions; totals minted=${raw.estimatedTotalMinted} supply=${raw.estimatedTotalEffectiveSupply}`
);

const BATCH = 80;
for (let i = 0; i < editions.length; i += BATCH) {
  const chunk = editions.slice(i, i + BATCH);
  const params = [];
  const placeholders = chunk.map((e, idx) => {
    const base = idx * 7;
    params.push(
      e.editionId,
      e.numMinted,
      e.maxMintSize ?? null,
      e.effectiveSupply ?? null,
      e.name ?? null,
      e.parallel ?? null,
      e.editionType ?? null
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
  console.log(`upserted ${Math.min(i + BATCH, editions.length)}/${editions.length}`);
}

await sql`
  INSERT INTO mint_totals (
    id, estimated_total_minted, estimated_total_effective_supply, edition_count, source, updated_at
  ) VALUES (
    1,
    ${raw.estimatedTotalMinted},
    ${raw.estimatedTotalEffectiveSupply},
    ${raw.editionCount},
    ${SOURCE},
    now()
  )
  ON CONFLICT (id) DO UPDATE SET
    estimated_total_minted = EXCLUDED.estimated_total_minted,
    estimated_total_effective_supply = EXCLUDED.estimated_total_effective_supply,
    edition_count = EXCLUDED.edition_count,
    source = EXCLUDED.source,
    updated_at = now()
`;

const rows = await sql`SELECT * FROM mint_totals WHERE id = 1`;
const count = await sql`SELECT count(*)::int AS n FROM pin_editions`;
console.log("mint_totals:", rows[0]);
console.log("pin_editions count:", count[0]?.n);
console.log("DONE");
