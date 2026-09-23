/**
 * Curated member-submitted Pinbook snapshots for the clubhouse gallery.
 * Refreshed weekly by hand — NOT a live Pinnacle Pinbook sync.
 */
export type BoardGalleryCard = {
  handle: string;
  note: string;
  tradeUrl: string;
  shareUrl: string;
  /** Decorative pin color classes for the mock art grid */
  pinColors: Array<"g" | "b" | "r" | "n">;
};

function tradeFor(handle: string): string {
  const h = handle.startsWith("@") ? handle : `@${handle}`;
  return `https://disneypinnacle.com/trade?user=${encodeURIComponent(h)}`;
}

export const boardGalleryNote =
  "Member-submitted Pinbook snapshots — editorial picks, refreshed weekly. Not a live pull from Pinnacle.";

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
