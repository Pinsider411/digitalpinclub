/**
 * Homepage "Featured collector" Pinbook.
 *
 * Source of truth: Neon `board_submissions.featured_at` — the approved row with the
 * latest featured_at is the current featured book. Rotated weekly by
 * `npm run feature:pinbook` (scripts/feature-pinbook.mjs).
 *
 * On any Neon failure / empty result, falls back to the hardcoded JGhost9 book so the
 * hero never breaks.
 */

import { unstable_cache } from "next/cache";
import { ogImageFromPinbookUrl } from "@/lib/board-submissions";

export type FeaturedPinbook = {
  /** Collector handle as shown in the headline (no leading "@"). */
  collector: string;
  url: string;
  imageUrl: string | null;
  meta: string;
  source: "neon" | "fallback";
};

const META = "My Pinbook · Disney Pinnacle";

export const FALLBACK_FEATURED_PINBOOK: FeaturedPinbook = {
  collector: "JGhost9",
  url: "https://disneypinnacle.com/pinbooks/d628a3ca-3c28-448f-b295-5aebd1da21d9",
  imageUrl: ogImageFromPinbookUrl(
    "https://disneypinnacle.com/pinbooks/d628a3ca-3c28-448f-b295-5aebd1da21d9"
  ),
  meta: META,
  source: "fallback",
};

function displayHandle(handle: string): string {
  return handle.trim().replace(/^@+/, "");
}

async function loadFeaturedFromNeon(): Promise<FeaturedPinbook | null> {
  if (!process.env.DATABASE_URL) return null;
  try {
    const { getSql } = await import("@/lib/db");
    const sql = getSql();
    const rows = (await sql`
      SELECT handle, pinbook_url
      FROM board_submissions
      WHERE status = 'approved' AND featured_at IS NOT NULL
      ORDER BY featured_at DESC
      LIMIT 1
    `) as { handle: string; pinbook_url: string }[];
    const row = rows[0];
    if (!row?.handle || !row?.pinbook_url) return null;
    const collector = displayHandle(row.handle);
    if (!collector) return null;
    return {
      collector,
      url: row.pinbook_url,
      imageUrl: ogImageFromPinbookUrl(row.pinbook_url),
      meta: META,
      source: "neon",
    };
  } catch (err) {
    console.error("[featured-pinbook] Neon read failed; using fallback", err);
    return null;
  }
}

const getCachedFeaturedPinbook = unstable_cache(
  async () => (await loadFeaturedFromNeon()) ?? FALLBACK_FEATURED_PINBOOK,
  ["featured-pinbook-v1"],
  { revalidate: 600 }
);

/** Current featured Pinbook (Neon, ~10 min revalidate, hardcoded fallback). */
export async function getFeaturedPinbook(): Promise<FeaturedPinbook> {
  try {
    return await getCachedFeaturedPinbook();
  } catch (err) {
    console.error("[featured-pinbook] cache read failed; using fallback", err);
    return FALLBACK_FEATURED_PINBOOK;
  }
}
