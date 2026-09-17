export type Platform =
  | "youtube"
  | "x"
  | "instagram"
  | "tiktok"
  | "linktree"
  | "website";

export type ContentTag =
  | "YouTube"
  | "Livestreams"
  | "How-to"
  | "Drop recap"
  | "Podcast";

export type CreatorLink = {
  platform: Platform;
  label: string;
  href: string;
};

export type FeaturedItem = {
  title: string;
  /** YouTube video id when known; null = outbound card only (no invented embed). */
  videoId: string | null;
  /** Fallback outbound when videoId is null */
  href?: string;
  tags: ContentTag[];
  note?: string;
};

export type Creator = {
  id: string;
  name: string;
  /** Required when the public handle differs from the display name */
  aka: string | null;
  role: string;
  whyFollow: string;
  links: CreatorLink[];
  tags: ContentTag[];
  featured: FeaturedItem[];
};

export type HubChannel = {
  name: string;
  blurb: string;
  links: CreatorLink[];
};

export const FILTER_CHIPS: ContentTag[] = [
  "YouTube",
  "Livestreams",
  "How-to",
  "Drop recap",
  "Podcast",
];

export const hubChannel: HubChannel = {
  name: "Collectin & Connectin",
  blurb:
    "Home channel for cafe hangs, podcasts, and collector culture — including Briar Jay Café and What Do You Collect?",
  links: [
    {
      platform: "youtube",
      label: "YouTube",
      href: "https://www.youtube.com/@collectinandconnectin",
    },
    {
      platform: "x",
      label: "X",
      href: "https://x.com/collctn_connctn",
    },
    {
      platform: "website",
      label: "Site",
      href: "https://www.collectinandconnectin.com/",
    },
  ],
};

export const creators: Creator[] = [
  {
    id: "magic-pin-collector",
    name: "Magic Pin Collector",
    aka: "VeVe Magic Pin Collector / formerly VeVeFanz",
    role: "Drop alerts, app how-tos, Magic Reveals, Pinnacle analytics shorts",
    whyFollow: "Fast drop alerts and practical Pinnacle how-tos without the hype spiral.",
    links: [
      {
        platform: "x",
        label: "X",
        href: "https://x.com/vevefanz",
      },
    ],
    tags: ["How-to", "Drop recap", "YouTube"],
    featured: [
      {
        title: "How to Use Analytics on Disney Pinnacle",
        videoId: null,
        href: "https://x.com/vevefanz",
        tags: ["How-to"],
        note: "Featured topic placeholder — follow on X for the latest shorts; exact YouTube id not verified at publish.",
      },
    ],
  },
  {
    id: "briar-jay",
    name: "Briar Jay Cafe",
    aka: "Briar Jay · Fairy Pin Mother",
    role: "Collector culture, cafe hangs, D23/Pinnacle chat",
    whyFollow: "Warm cafe energy — culture, community, and Pinnacle chat over coffee vibes.",
    links: [
      {
        platform: "x",
        label: "X",
        href: "https://x.com/FairyPinMother",
      },
      {
        platform: "linktree",
        label: "Linktree",
        href: "https://linktr.ee/BriarJay",
      },
      {
        platform: "youtube",
        label: "YouTube",
        href: "https://www.youtube.com/@collectinandconnectin",
      },
    ],
    tags: ["Livestreams", "YouTube", "Drop recap"],
    featured: [
      {
        title: "Briar Jay Café on Collectin & Connectin",
        videoId: null,
        href: "https://www.youtube.com/@collectinandconnectin",
        tags: ["Livestreams", "YouTube"],
        note: "Catch cafe hangs on the Collectin & Connectin channel.",
      },
    ],
  },
  {
    id: "paulie-wiz-wit",
    name: "Paulie Wiz Wit",
    aka: "Paul Campione",
    role: "Collecting culture, marketplace/D23, interviews",
    whyFollow: "Long-form collector stories — marketplace, D23, and interviews with the hobby’s people.",
    links: [
      {
        platform: "x",
        label: "X",
        href: "https://x.com/PaulieWizWit",
      },
      {
        platform: "instagram",
        label: "Instagram",
        href: "https://www.instagram.com/pauliewizwit/",
      },
      {
        platform: "tiktok",
        label: "TikTok",
        href: "https://www.tiktok.com/@pauliewizwit",
      },
      {
        platform: "linktree",
        label: "Linktree",
        href: "https://linktr.ee/pauliewizwit",
      },
    ],
    tags: ["Podcast", "YouTube"],
    featured: [
      {
        title: "What Do You Collect? — Disney Pinnacle episode",
        videoId: "JFg6MBLczrY",
        tags: ["Podcast", "YouTube"],
      },
    ],
  },
];

/** Easy weekly swap — ids from creators[] */
export const featuredThisWeekIds: string[] = [
  "paulie-wiz-wit",
  "magic-pin-collector",
  "briar-jay",
];

export function getCreatorById(id: string): Creator | undefined {
  return creators.find((c) => c.id === id);
}

export function getFeaturedThisWeek(): Creator[] {
  return featuredThisWeekIds
    .map(getCreatorById)
    .filter((c): c is Creator => Boolean(c));
}
