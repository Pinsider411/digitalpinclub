/**
 * Unofficial snapshot index of Disney Pinnacle News.
 * Titles/dates/categories mirror https://disneypinnacle.com/news.
 * Cards link OUT to official article URLs — we do not republish bodies or artwork.
 * Snapshot date is noted on the News page; collectors should verify on the official site.
 */

export type PinnacleNewsItem = {
  /** ISO date YYYY-MM-DD */
  date: string;
  title: string;
  category?: string;
  /** Absolute URL on disneypinnacle.com */
  url: string;
  /** Optional short club-voice note — never a full article body */
  blurb?: string;
};

export type ClubNote = {
  date: string;
  title: string;
  body: string;
  href?: string;
};

/** When this index was last curated from the official News page. */
export const pinnacleNewsSnapshotDate = "2026-09-25";

export const officialNewsIndexUrl = "https://disneypinnacle.com/news";

/**
 * Recent official items (~20), newest first.
 * Repeated "Special Welcome Offer" entries are deduped — a couple of representatives kept.
 * Duplicate holiday-unlock test cards omitted.
 */
export const pinnacleNewsItems: PinnacleNewsItem[] = [
  {
    date: "2026-09-21",
    title: "September 2026 Trading Event",
    category: "Drop Event",
    url: "https://disneypinnacle.com/news/september-2026-trading-event",
    blurb: "Mickey Mouse variants · 5 / 15 / 30 unique partners · ended Sep 25, 9am PT.",
  },
  {
    date: "2026-09-20",
    title: "Summer Sunset Event",
    category: "Drop Event",
    url: "https://disneypinnacle.com/news/summer-sunset-event",
    blurb: "Live Sep 25–Oct 2 · seven sets, Standard $4.99 / Premium $99.99, trade rewards. Confirm windows in the app.",
  },
  {
    date: "2026-08-12",
    title: "D23: Ultimate Fan Event 2026 & Summer Showcase Event",
    category: "Drop Event",
    url: "https://disneypinnacle.com/news/d23-ultimate-fan-event-2026-and-summer-showcase-event",
  },
  {
    date: "2026-08-08",
    title: "Introducing the D23 Fan Expedition",
    category: "Live Event",
    url: "https://disneypinnacle.com/news/introducing-the-d23-fan-expedition",
  },
  {
    date: "2026-07-23",
    title: "Summer Adventure Event",
    category: "Drop Event",
    url: "https://disneypinnacle.com/news/summer-adventure-event",
  },
  {
    date: "2026-06-18",
    title: "Summer Splash Event",
    category: "Drop Event",
    url: "https://disneypinnacle.com/news/summer-splash-event",
  },
  {
    date: "2026-05-21",
    title: "Special Welcome Offer",
    category: "Welcome Offer",
    url: "https://disneypinnacle.com/news/maxrebo-special-welcome-offer",
    blurb: "Representative welcome-offer post (Max Rebo set). Similar offers recur — check official News for the latest.",
  },
  {
    date: "2026-04-30",
    title: "The Event Featuring Star Wars",
    category: "Drop Event",
    url: "https://disneypinnacle.com/news/disney-pinnacle-by-dapper-labs-presents-the-event-featuring-star-wars",
  },
  {
    date: "2026-04-08",
    title: "Tales of Spring",
    category: "Trading Event",
    url: "https://disneypinnacle.com/news/tales-of-spring",
  },
  {
    date: "2026-03-31",
    title: "Trivia 101",
    url: "https://disneypinnacle.com/news/trivia-101",
  },
  {
    date: "2026-03-12",
    title: "The Shamrock Jubilee",
    category: "Reward Event",
    url: "https://disneypinnacle.com/news/shamrock-jubilee-event",
  },
  {
    date: "2026-03-10",
    title: "Search the Ocean",
    category: "Reward Event",
    url: "https://disneypinnacle.com/news/search-the-ocean-event",
  },
  {
    date: "2026-03-04",
    title: "In Her Honor",
    category: "Reward Event",
    url: "https://disneypinnacle.com/news/in-her-honor-event",
  },
  {
    date: "2026-02-25",
    title: "Up Vol.2",
    category: "Mystery Capsule Promo",
    url: "https://disneypinnacle.com/news/up-promo",
  },
  {
    date: "2026-02-17",
    title: "New Year Gallop",
    category: "Pinbook Event",
    url: "https://disneypinnacle.com/news/new-year-gallop",
  },
  {
    date: "2026-02-05",
    title: "Love in Orbit",
    category: "Pinbook Event",
    url: "https://disneypinnacle.com/news/love-in-orbit",
  },
  {
    date: "2026-02-02",
    title: "Special Welcome Offer",
    category: "Welcome Offer",
    url: "https://disneypinnacle.com/news/alien-special-welcome-offer",
    blurb: "Earlier representative welcome-offer post (Alien set). Deduped from many similar index entries.",
  },
  {
    date: "2026-01-22",
    title: "Legendary Edition",
    category: "Paths to Collect",
    url: "https://disneypinnacle.com/news/legendary-edition",
  },
  {
    date: "2026-01-14",
    title: "Live Your Hunny Life",
    category: "Anniversary Event",
    url: "https://disneypinnacle.com/news/live-your-hunny-life-event",
  },
  {
    date: "2025-12-10",
    title: "Pawsitively Purrfect Event",
    category: "Mystery Capsule Chase",
    url: "https://disneypinnacle.com/news/pawsitively-purrfect-event",
  },
  {
    date: "2025-12-05",
    title: "Sets of The Season",
    category: "Digital Pinbook Reward Event",
    url: "https://disneypinnacle.com/news/sets-of-the-season",
  },
  {
    date: "2025-11-25",
    title: "Fantasia 85th Anniversary",
    category: "Digital Pinbook Reward Event",
    url: "https://disneypinnacle.com/news/fantasia-85th-anniversary",
  },
  {
    date: "2025-11-14",
    title: "Grateful Gatherings",
    category: "Reward Event",
    url: "https://disneypinnacle.com/news/grateful-gatherings-event",
  },
  {
    date: "2025-11-11",
    title: "D23 Holiday Gift Guide",
    category: "Holiday Offer",
    url: "https://disneypinnacle.com/news/d23-holiday-guide",
  },
  {
    date: "2025-11-11",
    title: "Beyond Imagination",
    category: "Set Completion Event",
    url: "https://disneypinnacle.com/news/beyond-imagination-event",
  },
  {
    date: "2024-12-17",
    title: "Marketplace 101",
    category: "Guide",
    url: "https://disneypinnacle.com/news/marketplace-101",
    blurb: "Evergreen official explainer — how Marketplace works.",
  },
  {
    date: "2024-05-22",
    title: "Trading 101",
    category: "Guide",
    url: "https://disneypinnacle.com/news/trading-101",
    blurb: "Evergreen official explainer — how trading works.",
  },
  {
    date: "2023-11-16",
    title: "Digital Pins 101",
    category: "Guide",
    url: "https://disneypinnacle.com/news/digital-pins-101",
    blurb: "Evergreen official primer — start here on the real product.",
  },
];

/** Digital Pin Club’s own updates — clearly separate from official Pinnacle News. */
export const clubNotes: ClubNote[] = [
  {
    date: "2026-09-15",
    title: "Learn guides are live",
    body: "Collector-to-collector guides covering digital pins, drops, editions, trading, Pinbooks, and a glossary — with links out to official docs when details matter.",
    href: "/learn",
  },
  {
    date: "2026-09-14",
    title: "Digital Pin Club v1 is live",
    body: "The clubhouse ships: Learn, Calendar, Community, Spotlights, and a clear link to Pinsider. Free, collector-run.",
    href: "/",
  },
];
