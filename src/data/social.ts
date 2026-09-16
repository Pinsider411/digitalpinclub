export type SocialLink = {
  id: "instagram" | "x" | "reddit" | "pinterest";
  label: string;
  href: string;
  shortLabel: string;
};

/**
 * Owned Digital Pin Club profiles only (v1).
 * Pinterest: profile/board “Disney Pinnacle Digital Pins” (id 1138847893212955934)
 * was not publicly resolvable at ship time (API 404); linking owned handle URL.
 */
export const socialLinks: SocialLink[] = [
  {
    id: "instagram",
    label: "Digital Pin Club on Instagram",
    shortLabel: "Instagram",
    href: "https://www.instagram.com/digitalpinclub/",
  },
  {
    id: "x",
    label: "Digital Pin Club on X",
    shortLabel: "X",
    href: "https://x.com/digitalpinclub",
  },
  {
    id: "reddit",
    label: "Digital Pin Club on Reddit",
    shortLabel: "Reddit",
    href: "https://www.reddit.com/user/DigitalPinClub/",
  },
  {
    id: "pinterest",
    label: "Digital Pin Club on Pinterest",
    shortLabel: "Pinterest",
    href: "https://www.pinterest.com/digitalpinclub/",
  },
];
