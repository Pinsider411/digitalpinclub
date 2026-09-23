/**
 * Curated club hang schedule — not drop times.
 * Static for preview; update by hand as the club settles a rhythm.
 */
export type ClubHang = {
  id: string;
  when: string;
  title: string;
  note: string;
  tag: string;
  tagTone?: "voice" | "default";
};

export const clubHangs: ClubHang[] = [
  {
    id: "new-collector-hour",
    when: "Mon · 6:00 PM PT",
    title: "New collector hour",
    note: "Ask anything — first mint, Pinbooks, burns. Low pressure, Discord voice optional.",
    tag: "Discord",
  },
  {
    id: "cafe-hang",
    when: "Wed · 7:30 PM PT",
    title: "Cafe hang",
    note: "Open voice — show a board, talk sets, no agenda.",
    tag: "Voice",
    tagTone: "voice",
  },
  {
    id: "trade-night",
    when: "Fri · 5:00 PM PT",
    title: "Trade night",
    note: "Post wants / haves in the thread. Trades happen on Pinnacle — we just host the conversation.",
    tag: "Thread",
  },
  {
    id: "watch-party",
    when: "Sat · afternoon",
    title: "Creator watch party",
    note: "Tune into a Watch & Follow pickup — drop recap or how-to livestream.",
    tag: "Watch",
    tagTone: "voice",
  },
];
