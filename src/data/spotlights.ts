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
  /** Disney Pinnacle trade link; defaults to /trade?user=handle when omitted */
  tradeUrl?: string;
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
  pinbookUrl:
    "https://disneypinnacle.com/pinbooks/pinbook-27c10805-53af-41e1-aa3c-246b96f9056a",
} as const;

export const spotlightsData: SpotlightsData = {
  updatedAt: "2026-09-21",
  sourceNote:
    "Stats sourced from Watch Pinnacle public collector profiles (indexed on-chain activity). Attribution: watchpinnacle.com.",
  watchPinnacleSpotlightUrl: "https://watchpinnacle.com/spotlight",
  collectors: [
    {
      handle: "@mrnonel",
      address: "0xb1f656016d547e15",
      profileUrl: "https://watchpinnacle.com/user/0xb1f656016d547e15",
      rankLabel: "Rank #16 on Holders · Collector of the Day",
      badges: [
        "Top 50 Holder",
        "Legendary Holder×6",
        "Whale",
        "Rarity Hunter×143",
        "Chaser Collector×220",
        "Serial One",
        "Perfect Serial",
        "Set Master×159",
      ],
      pinsHeld: 9013,
      valueAsp: 146988,
      valueLowAsk: 114468,
      listingsValue: null,
      allTimeAcquired: 17182,
      mints: 16056,
      capsulesOpened: 686,
      tradesCompleted: 35,
      marketSpent: 13267,
      marketEarned: 1930,
      salesCount: 6,
      favoriteSets: [
        "Summer Fun Vol.1 (449)",
        "Disney Princess Vol.1 (313)",
        "Star Wars Alphabet Vol.1 (300)",
      ],
      sinceNote:
        "Collecting on Pinnacle since at least December 2023 (indexed history; earlier possible)",
      recent: "+115 pins / 7d · +110 mints / 7d",
    },
    {
      handle: "@RavensD52",
      address: "0x5dc50be0d8ba5921",
      profileUrl: "https://watchpinnacle.com/user/0x5dc50be0d8ba5921",
      rankLabel: "Rank #4 · Top 10 Holder",
      badges: [
        "Top 10 Holder",
        "Legendary Holder×30",
        "Whale",
        "Rarity Hunter×494",
        "Chaser Collector×513",
        "Serial One×4",
        "Perfect Serial×11",
        "Set Master×160",
      ],
      pinsHeld: 16158,
      valueAsp: 343357,
      valueLowAsk: 369117,
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
      recent: "16 trade partners this event (Fri Sep 18–25 PT)",
    },
    {
      handle: "@superpigeon",
      address: "0x23dde701491082ad",
      profileUrl: "https://watchpinnacle.com/user/0x23dde701491082ad",
      rankLabel: "Rank #7 · Top 10 Holder",
      badges: [
        "Top 10 Holder",
        "Whale",
        "Rarity Hunter×120",
        "Chaser Collector×379",
        "Serial One×9",
        "Set Master×156",
      ],
      pinsHeld: 32700,
      valueAsp: 251384,
      valueLowAsk: 193423,
      listingsValue: 46927,
      allTimeAcquired: null,
      mints: null,
      capsulesOpened: null,
      tradesCompleted: null,
      marketSpent: null,
      marketEarned: null,
      salesCount: null,
      favoriteSets: null,
      sinceNote: null,
      recent: "8 trade partners this event (Fri Sep 18–25 PT)",
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
      pinsHeld: 3890,
      valueAsp: 39530,
      valueLowAsk: 43438,
      listingsValue: 2836,
      allTimeAcquired: null,
      mints: null,
      capsulesOpened: null,
      tradesCompleted: null,
      marketSpent: null,
      marketEarned: null,
      salesCount: null,
      favoriteSets: null,
      sinceNote: null,
      recent: "37 trade partners this event (Fri Sep 18–25 PT)",
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
        "Set Master×72",
      ],
      pinsHeld: 7516,
      valueAsp: 38612,
      valueLowAsk: 32927,
      listingsValue: 5023,
      allTimeAcquired: null,
      mints: null,
      capsulesOpened: null,
      tradesCompleted: null,
      marketSpent: null,
      marketEarned: null,
      salesCount: null,
      favoriteSets: null,
      sinceNote: null,
      recent: "36 trade partners this event (Fri Sep 18–25 PT)",
    },
    {
      handle: "@EmDubYa",
      address: "0x2e39f9b9d6df4da8",
      profileUrl: "https://watchpinnacle.com/user/0x2e39f9b9d6df4da8",
      rankLabel: null,
      badges: [
        "Elite Collector",
        "Rarity Hunter×5",
        "Chaser Collector×80",
        "Low Serial Club×6",
        "Set Master×57",
      ],
      pinsHeld: 3682,
      valueAsp: 42285,
      valueLowAsk: 31279,
      listingsValue: 1189,
      allTimeAcquired: null,
      mints: null,
      capsulesOpened: null,
      tradesCompleted: null,
      marketSpent: null,
      marketEarned: null,
      salesCount: null,
      favoriteSets: null,
      sinceNote: null,
      recent: "32 trade partners this event (Fri Sep 18–25 PT)",
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
