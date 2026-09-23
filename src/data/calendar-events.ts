export type CalendarEvent = {
  id: string;
  chip: string;
  /** Use live/accent pill styling for the chip */
  chipTone?: "live" | "accent";
  title: string;
  dates: string;
  oneLiner: string;
  href: string;
  cta?: string;
  /** Optional secondary cite (e.g. official X announcement) */
  secondaryHref?: string;
  secondaryCta?: string;
  /** Optional announce / hero thumb */
  imageSrc?: string;
  imageAlt?: string;
};

/**
 * Featured / current clubhouse events shown above the release timeline.
 * Separate from pinnacleReleases — trading windows and similar aren't release rows.
 */
export const calendarEvents: CalendarEvent[] = [
  {
    id: "cats-dogs-vol1-4-2026",
    chip: "Live drop",
    chipTone: "live",
    title: "Cats & Dogs Vol.1 [4/4]",
    dates: "Sep 22–29, 2026",
    oneLiner:
      "Dinah, Bolt, Mochi · OE capsules $4.99 · confirm window officially",
    href: "https://disneypinnacle.com/releases/912f3042-39d3-44b0-99dc-4d7953c56af6",
    cta: "Official release →",
    imageSrc: "/events/cats-dogs-vol1-4/banner.webp",
    imageAlt: "Disney Cats & Dogs Vol.1 [4/4] official release banner",
  },
  {
    id: "summer-sunset-2026",
    chip: "Drop event",
    chipTone: "accent",
    title: "Summer Sunset Event",
    dates: "Sep 25 – Oct 2, 2026",
    oneLiner:
      "Seven sets · packs from $4.99 · trade rewards · confirm windows officially",
    href: "https://disneypinnacle.com/news/summer-sunset-event",
    cta: "Official details →",
    imageSrc: "/events/summer-sunset/announce.webp",
    imageAlt: "Summer Sunset Event official announce art",
  },
  {
    id: "trading-event-sep-2026",
    chip: "Trading",
    chipTone: "live",
    title: "September 2026 Trading Event",
    dates: "Through Sep 25, 2026 · 9am PT",
    oneLiner:
      "Mickey Mouse · 5 / 15 / 30 unique partners · confirm end time officially",
    href: "https://disneypinnacle.com/news/september-2026-trading-event",
    cta: "Official details →",
    secondaryHref: "https://x.com/DisneyPinnacle/status/2101085557644239074",
    secondaryCta: "Announcement on X",
    imageSrc: "/events/trading-event/hero.webp",
    imageAlt: "Disney Pinnacle Trading Event official art",
  },
];
