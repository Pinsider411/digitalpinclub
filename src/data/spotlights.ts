/**
 * Collector spotlights curated for Digital Pin Club.
 * Stats attributed to Watch Pinnacle public profiles (on-chain index).
 * Unofficial fan site — not affiliated with Disney / Dapper / Pinnacle.
 * Values are estimates; history before mid-2024 may still be backfilling.
 */

export type SpotlightCollector = {
  handle: string;
  address: string;
  profileUrl: string;
  rankLabel: string | null;
  badges: string[];
  pinsHeld: number;
  valueAsp: number;
  valueLowAsk: number;
  listingsValue: number | null;
  /** EmDubYa-style narrative extras — null when not featured with full blurb */
  allTimeAcquired: number | null;
  mints: number | null;
  capsulesOpened: number | null;
  tradesCompleted: number | null;
  marketSpent: number | null;
  marketEarned: number | null;
  salesCount: number | null;
  favoriteSets: string[] | null;
  sinceNote: string | null;
  recent: string | null;
};

export type SpotlightsData = {
  updatedAt: string;
  sourceNote: string;
  watchPinnacleSpotlightUrl: string;
  collectors: SpotlightCollector[];
};

export const clubFounder = {
  handle: "@apache1999",
  role: "Founder of Digital Pin Club / Pinsider.io",
  blurb:
    "Building Digital Pin Club and Pinsider.io so collectors have a warm home base and a clear data desk — without the store energy.",
  tradeUrl: "https://disneypinnacle.com/trade?user=@Apache1999",
  xUrl: "https://x.com/Apache1999",
} as const;

export const spotlightsData: SpotlightsData = {
  updatedAt: "2026-09-15",
  sourceNote:
    "Stats sourced from Watch Pinnacle public collector profiles (indexed on-chain activity). Attribution: watchpinnacle.com.",
  watchPinnacleSpotlightUrl: "https://watchpinnacle.com/spotlight",
  collectors: [
    {
      handle: "@EmDubYa",
      address: "0x2e39f9b9d6df4da8",
      profileUrl: "https://watchpinnacle.com/user/0x2e39f9b9d6df4da8",
      rankLabel: "Rank #51 on Holders",
      badges: [
        "Elite Collector",
        "Rarity Hunter×5",
        "Chaser Collector×80",
        "Low Serial Club×6",
        "Set Master×57",
      ],
      pinsHeld: 3682,
      valueAsp: 42314,
      valueLowAsk: 32215,
      listingsValue: null,
      allTimeAcquired: 7998,
      mints: 6463,
      capsulesOpened: 197,
      tradesCompleted: 241,
      marketSpent: 16046,
      marketEarned: 4330,
      salesCount: 83,
      favoriteSets: [
        "Star Wars Alphabet Vol.1 (875)",
        "Star Wars Saga Vol.3 (399)",
        "Star Wars Pixels Vol.1 (348)",
      ],
      sinceNote:
        "Collecting on Pinnacle since at least February 2025 (indexed history; earlier possible)",
      recent: "+2 pins / 7d · +$906 earned / 30d · +16 sales / 30d",
    },
    {
      handle: "@superpigeon",
      address: "0x23dde701491082ad",
      profileUrl: "https://watchpinnacle.com/user/0x23dde701491082ad",
      rankLabel: "Rank #7 · Top 10 Holder",
      badges: [
        "Top 10 Holder",
        "Whale",
        "Rarity Hunter×121",
        "Chaser Collector×377",
        "Serial One×9",
        "Set Master×156",
      ],
      pinsHeld: 32703,
      valueAsp: 251551,
      valueLowAsk: 211347,
      listingsValue: 43890,
      allTimeAcquired: null,
      mints: null,
      capsulesOpened: null,
      tradesCompleted: null,
      marketSpent: null,
      marketEarned: null,
      salesCount: null,
      favoriteSets: null,
      sinceNote: null,
      recent: null,
    },
    {
      handle: "@RavensD52",
      address: "0x5dc50be0d8ba5921",
      profileUrl: "https://watchpinnacle.com/user/0x5dc50be0d8ba5921",
      rankLabel: "Top 10 Holder",
      badges: [
        "Top 10 Holder",
        "Legendary Holder×30",
        "Whale",
        "Rarity Hunter×492",
        "Chaser Collector×505",
        "Serial One×4",
        "Perfect Serial×11",
        "Set Master×160",
      ],
      pinsHeld: 16130,
      valueAsp: 341909,
      valueLowAsk: 379052,
      listingsValue: 86294,
      allTimeAcquired: null,
      mints: null,
      capsulesOpened: null,
      tradesCompleted: null,
      marketSpent: null,
      marketEarned: null,
      salesCount: null,
      favoriteSets: null,
      sinceNote: null,
      recent: null,
    },
    {
      handle: "@uswntkeeper",
      address: "0x146d5a286507c18b",
      profileUrl: "https://watchpinnacle.com/user/0x146d5a286507c18b",
      rankLabel: null,
      badges: [
        "Legendary Holder×9",
        "Elite Collector",
        "Rarity Hunter×92",
        "Chaser Collector×90",
        "Low Serial Club×10",
        "Set Master×48",
      ],
      pinsHeld: 3925,
      valueAsp: 39592,
      valueLowAsk: 37945,
      listingsValue: 2879,
      allTimeAcquired: null,
      mints: null,
      capsulesOpened: null,
      tradesCompleted: null,
      marketSpent: null,
      marketEarned: null,
      salesCount: null,
      favoriteSets: null,
      sinceNote: null,
      recent: null,
    },
    {
      handle: "@pdxphotog",
      address: "0x8d3808e1b73f696e",
      profileUrl: "https://watchpinnacle.com/user/0x8d3808e1b73f696e",
      rankLabel: null,
      badges: [
        "Whale",
        "Rarity Hunter×59",
        "Chaser Collector×89",
        "Set Master×71",
      ],
      pinsHeld: 7478,
      valueAsp: 38615,
      valueLowAsk: 40538,
      listingsValue: 4982,
      allTimeAcquired: null,
      mints: null,
      capsulesOpened: null,
      tradesCompleted: null,
      marketSpent: null,
      marketEarned: null,
      salesCount: null,
      favoriteSets: null,
      sinceNote: null,
      recent: null,
    },
    {
      handle: "@MrT100",
      address: "0x067094329ccfe229",
      profileUrl: "https://watchpinnacle.com/user/0x067094329ccfe229",
      rankLabel: null,
      badges: [
        "Collector",
        "Rarity Hunter×8",
        "Chaser Collector×10",
        "Set Master×6",
      ],
      pinsHeld: 285,
      valueAsp: 5289,
      valueLowAsk: 3849,
      listingsValue: 545,
      allTimeAcquired: null,
      mints: null,
      capsulesOpened: null,
      tradesCompleted: null,
      marketSpent: null,
      marketEarned: null,
      salesCount: null,
      favoriteSets: null,
      sinceNote: null,
      recent: null,
    },
  ],
};

export function formatUsd(n: number): string {
  return `$${n.toLocaleString("en-US")}`;
}

export function formatCount(n: number): string {
  return n.toLocaleString("en-US");
}

/** Build Watch Pinnacle–style narrative for collectors that have full extras. */
export function buildSpotlightNarrative(c: SpotlightCollector): string | null {
  if (
    c.allTimeAcquired == null ||
    c.mints == null ||
    c.capsulesOpened == null ||
    c.tradesCompleted == null ||
    c.marketSpent == null ||
    c.marketEarned == null ||
    c.salesCount == null
  ) {
    return null;
  }

  const since =
    c.sinceNote ??
    "Collecting on Pinnacle (indexed history; earlier activity may still be backfilling)";

  let text = `${c.handle} — ${since}, and holds ${formatCount(c.pinsHeld)} pins today — an estimated ${formatUsd(c.valueAsp)} collection (ASP). All-time, they've picked up ${formatCount(c.allTimeAcquired)} pins: ${formatCount(c.mints)} minted, ${formatCount(c.capsulesOpened)} capsules opened, ${formatCount(c.tradesCompleted)} trades completed. On the marketplace they've spent ${formatUsd(c.marketSpent)} and earned ${formatUsd(c.marketEarned)} across ${formatCount(c.salesCount)} sales.`;

  if (c.favoriteSets && c.favoriteSets.length > 0) {
    text += ` Their favorite sets: ${c.favoriteSets.join(", ")}.`;
  }

  return text;
}
