/**
 * Mint desk snapshot for the homepage strip.
 *
 * There is no official all-time minted API. Do not invent platform-wide totals.
 * v1 ships as indexing until a verifiable aggregate source is wired.
 * `designsTracked` is our unofficial releases index count — designs/releases,
 * NOT pins minted.
 */

import { pinnacleReleases } from "@/data/pinnacle-releases";

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
  /** Optional note when status is live (source label). */
  sourceNote?: string;
};

export const mintTotals: MintTotals = {
  status: "indexing",
  estimatedTotal: null,
  updatedAt: "2026-09-22T12:00:00-07:00",
  updatedLabel: "Sep 22, 2026",
  designsTracked: pinnacleReleases.length,
  disclaimer:
    "Unofficial fan estimate · verify on Disney Pinnacle · OE totals move · LE can drop after burns",
};
