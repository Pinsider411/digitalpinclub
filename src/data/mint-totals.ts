/**
 * Mint desk snapshot for the homepage strip.
 *
 * There is no official all-time minted API. Live totals come from Neon
 * (`mint_totals`), seeded/synced from Atlas SearchEditions / Releases crawl.
 * Hourly pace uses `mint_hourly_snapshots` written by sync-mint-supplies.mjs.
 * Do not invent platform-wide totals.
 */

import { unstable_cache } from "next/cache";

export type MintTotalsStatus = "indexing" | "live";

export type MintTotals = {
  status: MintTotalsStatus;
  /** Platform-wide estimated minted pins — only when source is verifiable. */
  estimatedTotal: number | null;
  /** ISO 8601 with America/Los_Angeles offset when curated. */
  updatedAt: string;
  updatedLabel: string;
  /** Optional: designs/releases tracked in our index (not minted pins). */
  designsTracked?: number;
  disclaimer: string;
  /**
   * Signed minted delta between the latest two hourly snapshots.
   * null when fewer than two snapshots exist (cold start).
   */
  hourDelta: number | null;
  /**
   * Prior hour's delta (snapshot[-2] − snapshot[-3]), for % comparison.
   * null when fewer than three snapshots.
   */
  priorHourDelta: number | null;
  /**
   * % change of this hour's delta vs prior hour's delta.
   * null when unavailable (cold start, or priorHourDelta 0 with non-zero hourDelta).
   */
  pctChangeVsPriorHour: number | null;
  /** e.g. "12:00–1:00 PM PT" for the window the hourDelta covers. */
  hourWindowLabel: string | null;
  /** Next on-the-hour refresh in PT, e.g. "2:00 PM PT". */
  nextRefreshLabel: string;
};

const DISCLAIMER =
  "Unofficial fan estimate · verify on Disney Pinnacle · OE totals move · LE can drop after burns";

const TZ = "America/Los_Angeles";

function formatUpdatedLabel(date: Date): string {
  const formatted = new Intl.DateTimeFormat("en-US", {
    timeZone: TZ,
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(date);
  return `${formatted} PT`;
}

function formatHourClock(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: TZ,
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(date);
}

/** PT offset string at `date`, e.g. "-07:00". */
function ptOffset(date: Date): string {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TZ,
    timeZoneName: "shortOffset",
  }).formatToParts(date);
  const offsetRaw =
    parts.find((p) => p.type === "timeZoneName")?.value || "GMT-7";
  const stripped = offsetRaw.replace(/^GMT/, "");
  if (stripped === "") return "+00:00";
  return stripped
    .replace(/^([+-])(\d{1,2})$/, (_, s, h) => `${s}${h.padStart(2, "0")}:00`)
    .replace(
      /^([+-])(\d{1,2}):(\d{2})$/,
      (_, s, h, m) => `${s}${h.padStart(2, "0")}:${m}`
    );
}

/** Instant of the next top-of-hour in America/Los_Angeles. */
function truncateToNextPtHour(from: Date): Date {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TZ,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).formatToParts(from);
  const get = (type: string) =>
    parts.find((p) => p.type === type)?.value ?? "";
  const hour = get("hour") === "24" ? "00" : get("hour");
  const offset = ptOffset(from);
  const localIso = `${get("year")}-${get("month")}-${get("day")}T${hour}:00:00${offset}`;
  const hourStart = new Date(localIso);
  return new Date(hourStart.getTime() + 60 * 60 * 1000);
}

function formatNextRefreshLabel(from: Date): string {
  return `${formatHourClock(truncateToNextPtHour(from))} PT`;
}

function formatHourWindowLabel(start: Date, end: Date): string {
  return `${formatHourClock(start)}–${formatHourClock(end)} PT`;
}

function toLosAngelesIso(date: Date): string {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TZ,
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
  const offset = ptOffset(date);
  return `${get("year")}-${get("month")}-${get("day")}T${get("hour") === "24" ? "00" : get("hour")}:${get("minute")}:${get("second")}${offset}`;
}

function computePctChange(
  hourDelta: number,
  priorHourDelta: number | null
): number | null {
  if (priorHourDelta == null) return null;
  if (priorHourDelta === 0) {
    return hourDelta === 0 ? 0 : null;
  }
  return Math.round(
    ((hourDelta - priorHourDelta) / Math.abs(priorHourDelta)) * 100
  );
}

type SnapshotRow = {
  hour_start: string | Date;
  estimated_total_minted: string | number;
  edition_count: string | number;
};

function buildHourlyFields(snapshots: SnapshotRow[]): Pick<
  MintTotals,
  | "hourDelta"
  | "priorHourDelta"
  | "pctChangeVsPriorHour"
  | "hourWindowLabel"
> {
  if (snapshots.length < 2) {
    return {
      hourDelta: null,
      priorHourDelta: null,
      pctChangeVsPriorHour: null,
      hourWindowLabel: null,
    };
  }
  const latest = snapshots[0];
  const prev = snapshots[1];
  const tLatest = Number(latest.estimated_total_minted);
  const tPrev = Number(prev.estimated_total_minted);
  const hourDelta = tLatest - tPrev;

  let priorHourDelta: number | null = null;
  if (snapshots.length >= 3) {
    const older = snapshots[2];
    priorHourDelta = tPrev - Number(older.estimated_total_minted);
  }

  const start = new Date(prev.hour_start);
  const end = new Date(latest.hour_start);
  return {
    hourDelta,
    priorHourDelta,
    pctChangeVsPriorHour: computePctChange(hourDelta, priorHourDelta),
    hourWindowLabel: formatHourWindowLabel(start, end),
  };
}

/** Static fallback when DATABASE_URL is missing or Neon is unreachable. */
export const mintTotalsSnapshot: MintTotals = {
  status: "live",
  estimatedTotal: 1_184_907,
  updatedAt: "2026-09-22T12:22:00-07:00",
  updatedLabel: "Sep 22, 12:22 PM PT",
  designsTracked: 2377,
  disclaimer: DISCLAIMER,
  hourDelta: null,
  priorHourDelta: null,
  pctChangeVsPriorHour: null,
  hourWindowLabel: null,
  nextRefreshLabel: formatNextRefreshLabel(new Date()),
};

/** @deprecated Prefer getMintTotals() — kept for static imports / fallbacks. */
export const mintTotals: MintTotals = mintTotalsSnapshot;

async function loadMintTotalsFromNeon(): Promise<MintTotals | null> {
  if (!process.env.DATABASE_URL) return null;
  try {
    const { getSql } = await import("@/lib/db");
    const sql = getSql();
    const rows = await sql`
      SELECT
        estimated_total_minted,
        edition_count,
        updated_at
      FROM mint_totals
      WHERE id = 1
      LIMIT 1
    `;
    const row = rows[0];
    if (!row) return null;
    const estimatedTotal = Number(row.estimated_total_minted);
    const designsTracked = Number(row.edition_count);
    if (!Number.isFinite(estimatedTotal) || estimatedTotal <= 0) return null;
    const updated = row.updated_at
      ? new Date(row.updated_at as string | Date)
      : new Date();

    let snapshots: SnapshotRow[] = [];
    try {
      snapshots = (await sql`
        SELECT hour_start, estimated_total_minted, edition_count
        FROM mint_hourly_snapshots
        ORDER BY hour_start DESC
        LIMIT 3
      `) as SnapshotRow[];
    } catch (snapErr) {
      console.error("[mint-totals] hourly snapshots read failed", snapErr);
    }

    return {
      status: "live",
      estimatedTotal,
      updatedAt: toLosAngelesIso(updated),
      updatedLabel: formatUpdatedLabel(updated),
      designsTracked: Number.isFinite(designsTracked)
        ? designsTracked
        : undefined,
      disclaimer: DISCLAIMER,
      ...buildHourlyFields(snapshots),
      nextRefreshLabel: formatNextRefreshLabel(new Date()),
    };
  } catch (err) {
    console.error("[mint-totals] Neon read failed; using snapshot", err);
    return null;
  }
}

const getCachedMintTotals = unstable_cache(
  async () => (await loadMintTotalsFromNeon()) ?? mintTotalsSnapshot,
  ["mint-totals-live-v2-hourly"],
  { revalidate: 90 }
);

/** Request-time mint desk totals (Neon with ~90s revalidate, static fallback). */
export async function getMintTotals(): Promise<MintTotals> {
  return getCachedMintTotals();
}
