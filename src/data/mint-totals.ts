/**
 * Mint desk snapshot for the homepage strip.
 *
 * There is no official all-time minted API. Live totals come from Neon
 * (`mint_totals`), seeded/synced from Atlas SearchEditions / Releases crawl.
 * Do not invent platform-wide totals.
 */

import { unstable_cache } from "next/cache";

export type MintTotalsStatus = "indexing" | "live";

export type MintTotals = {
  status: MintTotalsStatus;
  /** Platform-wide estimated minted pins — only when source is verifiable. */
  estimatedTotal: number | null;
  /** Platform-wide estimated effective supply when available. */
  estimatedEffectiveSupply: number | null;
  /** ISO 8601 with America/Los_Angeles offset when curated. */
  updatedAt: string;
  updatedLabel: string;
  /** Optional: designs/releases tracked in our index (not minted pins). */
  designsTracked?: number;
  disclaimer: string;
  /** Optional note when status is live (source label). */
  sourceNote?: string;
};

const DISCLAIMER =
  "Unofficial fan estimate · verify on Disney Pinnacle · OE totals move · LE can drop after burns";

const SOURCE_NOTE =
  "Sum of numMinted across designs on official Releases · unofficial fan index";

/** Static fallback when DATABASE_URL is missing or Neon is unreachable. */
export const mintTotalsSnapshot: MintTotals = {
  status: "live",
  estimatedTotal: 1_184_907,
  estimatedEffectiveSupply: 1_136_238,
  updatedAt: "2026-09-22T12:22:00-07:00",
  updatedLabel: "Sep 22, 2026",
  designsTracked: 2377,
  disclaimer: DISCLAIMER,
  sourceNote: SOURCE_NOTE,
};

/** @deprecated Prefer getMintTotals() — kept for static imports / fallbacks. */
export const mintTotals: MintTotals = mintTotalsSnapshot;

function formatUpdatedLabel(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function toLosAngelesIso(date: Date): string {
  // Format offset for America/Los_Angeles at that instant
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    timeZoneName: "shortOffset",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).formatToParts(date);
  const get = (type: string) =>
    parts.find((p) => p.type === type)?.value ?? "";
  const offsetRaw = get("timeZoneName") || "GMT-7"; // e.g. GMT-7 / GMT-07:00
  const offset =
    offsetRaw.replace(/^GMT/, "") === ""
      ? "+00:00"
      : offsetRaw.replace(/^GMT/, "").replace(
          /^([+-])(\d{1,2})$/,
          (_, s, h) => `${s}${h.padStart(2, "0")}:00`
        ).replace(/^([+-])(\d{1,2}):(\d{2})$/, (_, s, h, m) => `${s}${h.padStart(2, "0")}:${m}`);
  return `${get("year")}-${get("month")}-${get("day")}T${get("hour") === "24" ? "00" : get("hour")}:${get("minute")}:${get("second")}${offset.startsWith("+") || offset.startsWith("-") ? offset : "-07:00"}`;
}

async function loadMintTotalsFromNeon(): Promise<MintTotals | null> {
  if (!process.env.DATABASE_URL) return null;
  try {
    const { getSql } = await import("@/lib/db");
    const sql = getSql();
    const rows = await sql`
      SELECT
        estimated_total_minted,
        estimated_total_effective_supply,
        edition_count,
        updated_at
      FROM mint_totals
      WHERE id = 1
      LIMIT 1
    `;
    const row = rows[0];
    if (!row) return null;
    const estimatedTotal = Number(row.estimated_total_minted);
    const effectiveRaw = Number(row.estimated_total_effective_supply);
    const estimatedEffectiveSupply = Number.isFinite(effectiveRaw)
      ? effectiveRaw
      : null;
    const designsTracked = Number(row.edition_count);
    if (!Number.isFinite(estimatedTotal) || estimatedTotal <= 0) return null;
    const updated = row.updated_at
      ? new Date(row.updated_at as string | Date)
      : new Date();
    return {
      status: "live",
      estimatedTotal,
      estimatedEffectiveSupply,
      updatedAt: toLosAngelesIso(updated),
      updatedLabel: formatUpdatedLabel(updated),
      designsTracked: Number.isFinite(designsTracked)
        ? designsTracked
        : undefined,
      disclaimer: DISCLAIMER,
      sourceNote: SOURCE_NOTE,
    };
  } catch (err) {
    console.error("[mint-totals] Neon read failed; using snapshot", err);
    return null;
  }
}

const getCachedMintTotals = unstable_cache(
  async () => (await loadMintTotalsFromNeon()) ?? mintTotalsSnapshot,
  ["mint-totals-live-v1"],
  { revalidate: 300 }
);

/** Request-time mint desk totals (Neon with 300s revalidate, static fallback). */
export async function getMintTotals(): Promise<MintTotals> {
  return getCachedMintTotals();
}
