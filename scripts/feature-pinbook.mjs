#!/usr/bin/env node
/**
 * Rotate the homepage "Featured collector" Pinbook.
 *
 * Picks the next approved board_submissions row:
 *   1. never featured (featured_at IS NULL), oldest approved first
 *      (reviewed_at, then created_at), else
 *   2. the row featured longest ago.
 * Skips the currently featured row and any row whose Pinbook OG image 404s in
 * both forms (/og/pinbook/pinbook-<uuid> and /og/pinbook/<uuid>).
 * Sets featured_at = now() on the chosen row (unless --dry-run).
 *
 * Usage:
 *   npm run feature:pinbook              # rotate for real
 *   npm run feature:pinbook -- --dry-run # print the pick, write nothing
 *
 * Needs DATABASE_URL (read from env, or .env.local / .env if present).
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { neon } from "@neondatabase/serverless";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const dryRun = process.argv.includes("--dry-run");

function loadEnvFile(file) {
  const p = path.join(root, file);
  if (!fs.existsSync(p)) return;
  for (const line of fs.readFileSync(p, "utf8").split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (!m || process.env[m[1]]) continue;
    process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
}
if (!process.env.DATABASE_URL) {
  loadEnvFile(".env.local");
  loadEnvFile(".env");
}
if (!process.env.DATABASE_URL) {
  console.error("DATABASE_URL is required");
  process.exit(1);
}

const sql = neon(process.env.DATABASE_URL);
const UUID_RE = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i;

/** Returns the first OG URL form that responds 200, or null if both fail. */
async function workingOgImage(pinbookUrl) {
  const m = String(pinbookUrl).match(UUID_RE);
  if (!m) return null;
  const id = m[0].toLowerCase();
  const prefixed = `https://disneypinnacle.com/og/pinbook/pinbook-${id}`;
  const bare = `https://disneypinnacle.com/og/pinbook/${id}`;
  // Homepage (ogImageFromPinbookUrl) uses pinbook-<uuid> only when the share URL has it.
  const homepageForm = /pinbook-[0-9a-f]{8}-/i.test(pinbookUrl) ? prefixed : bare;
  const forms = homepageForm === prefixed ? [prefixed, bare] : [bare, prefixed];
  for (const url of forms) {
    try {
      const res = await fetch(url, {
        method: "GET",
        headers: { "User-Agent": "Mozilla/5.0 (digitalpinclub feature-pinbook)" },
        signal: AbortSignal.timeout(20000),
      });
      await res.body?.cancel();
      if (res.ok && (res.headers.get("content-type") || "").startsWith("image/")) {
        if (url !== homepageForm) {
          console.warn(`WARN ${pinbookUrl}: homepage OG form fails; only ${url} works`);
        }
        return url;
      }
    } catch {
      /* try next form */
    }
  }
  return null;
}

const rows = await sql`
  SELECT id, handle, pinbook_url, reviewed_at, created_at, featured_at
  FROM board_submissions
  WHERE status = 'approved'
  ORDER BY
    (featured_at IS NOT NULL),
    featured_at ASC NULLS FIRST,
    reviewed_at ASC NULLS LAST,
    created_at ASC
`;

const current = await sql`
  SELECT id, handle FROM board_submissions
  WHERE status = 'approved' AND featured_at IS NOT NULL
  ORDER BY featured_at DESC LIMIT 1
`;
const currentId = current[0]?.id ?? null;

console.log(`Current featured: ${current[0]?.handle ?? "(none)"}`);
console.log("Approved queue (rotation order):");
for (const [i, r] of rows.entries()) {
  const when = r.featured_at ? `featured ${new Date(r.featured_at).toISOString()}` : "never featured";
  console.log(`  ${i + 1}. ${r.handle}  ${when}${r.id === currentId ? "  [current]" : ""}`);
}

let chosen = null;
for (const r of rows) {
  if (r.id === currentId && rows.length > 1) continue;
  const og = await workingOgImage(r.pinbook_url);
  if (!og) {
    console.warn(`SKIP ${r.handle} (${r.pinbook_url}): OG image 404s in both forms`);
    continue;
  }
  chosen = { ...r, og };
  break;
}

if (!chosen) {
  console.error("No eligible approved submission found; nothing changed.");
  process.exit(1);
}

console.log(`\nNext pick: ${chosen.handle}`);
console.log(`  id:      ${chosen.id}`);
console.log(`  pinbook: ${chosen.pinbook_url}`);
console.log(`  og:      ${chosen.og}`);

if (dryRun) {
  console.log("\n--dry-run: no changes written.");
} else {
  const updated = await sql`
    UPDATE board_submissions SET featured_at = now()
    WHERE id = ${chosen.id} AND status = 'approved'
    RETURNING handle, featured_at
  `;
  console.log(`\nFeatured ${updated[0].handle} at ${new Date(updated[0].featured_at).toISOString()}`);
  console.log("Homepage picks it up within ~10 minutes (unstable_cache revalidate 600s).");
}
