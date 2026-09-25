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
    id: "summer-sunset-2026",
    chip: "Live drop",
    chipTone: "live",
    title: "Summer Sunset Event",
    dates: "Sep 25 – Oct 2, 2026",
    oneLiner:
      "Seven sets · Standard $4.99 / Premium $99.99 · Genesis chase · trade pin at 5 / 15 / 30 · confirm close time officially",
    href: "https://disneypinnacle.com/news/summer-sunset-event",
    cta: "Official details →",
    secondaryHref: "https://disneypinnacle.com/releases/376fa147-2d0e-4969-9c37-b2e992e75162",
    secondaryCta: "Standard Pack release",
    imageSrc: "/events/summer-sunset/standard-pack-banner.webp",
    imageAlt: "Summer Sunset Standard Pack official release banner",
  },
  {
    id: "summer-sunset-premium-2026",
    chip: "Live drop",
    chipTone: "live",
    title: "Summer Sunset Premium Pack",
    dates: "Sep 25 – Oct 2, 2026",
    oneLiner:
      "$99.99 · 5 capsules · guaranteed Limited + Limited Event + 2 Digital Display · 300 packs",
    href: "https://disneypinnacle.com/releases/9a6626f4-3b23-4836-a246-b19b45653f99",
    cta: "Official release →",
    imageSrc: "/events/summer-sunset/premium-pack-banner.webp",
    imageAlt: "Summer Sunset Premium Pack official release banner",
  },
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
];
