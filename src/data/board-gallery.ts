/**
 * Types + note for the clubhouse board gallery.
 * Live cards come from Neon-approved submissions (see getApprovedBoardGallery).
 * Sample cards below are unused leftovers for local reference only.
 */
export type BoardGalleryCard = {
  handle: string;
  note: string;
  tradeUrl: string;
  shareUrl: string;
  /** Decorative pin color classes for the mock art grid */
  pinColors: Array<"g" | "b" | "r" | "n">;
  /** Derived Disney Pinbook OG image URL when shareUrl contains a pinbook id */
  imageUrl?: string | null;
};

function tradeFor(handle: string): string {
  const h = handle.startsWith("@") ? handle : `@${handle}`;
  return `https://disneypinnacle.com/trade?user=${encodeURIComponent(h)}`;
}

export const boardGalleryNote =
  "Member-submitted Pinbook snapshots — refreshed after a light daily approve. May be outdated; not a live pull from Pinnacle.";

/** @deprecated Unused sample cards — gallery uses Neon approved rows. */
export const boardGalleryCards: BoardGalleryCard[] = [
  {
    handle: "@mrnonel",
    note: "Submitted snapshot · Collector of the Day",
    tradeUrl: tradeFor("@mrnonel"),
    shareUrl: "#",
    pinColors: ["g", "b", "n", "r", "g", "b"],
  },
  {
    handle: "@EmDubYa",
    note: "Submitted snapshot · set-forward layout",
    tradeUrl: tradeFor("@EmDubYa"),
    shareUrl: "#",
    pinColors: ["b", "n", "g", "n", "r", "g"],
  },
  {
    handle: "@pdxphotog",
    note: "Submitted snapshot · photo-minded board",
    tradeUrl: tradeFor("@pdxphotog"),
    shareUrl: "#",
    pinColors: ["n", "g", "b", "g", "r", "n"],
  },
];
