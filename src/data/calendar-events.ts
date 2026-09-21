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
};

/**
 * Featured / current clubhouse events shown above the release timeline.
 * Separate from pinnacleReleases — trading windows and similar aren't release rows.
 */
export const calendarEvents: CalendarEvent[] = [
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
  },
  {
    id: "trading-event-sep-2026",
    chip: "Trading",
    chipTone: "live",
    title: "Disney Pinnacle Trading Event",
    dates: "Sep 18 – Sep 25, 2026",
    oneLiner:
      "3 variants · 5 / 15 / 30 unique trading partners · confirm end time officially",
    href: "https://disneypinnacle.com/trade",
    cta: "More info →",
    secondaryHref: "https://x.com/DisneyPinnacle/status/2101085557644239074",
    secondaryCta: "Announcement on X",
  },
];
