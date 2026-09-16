/** Club example pin media — collectible illustrations, not official product pages. */
export type ClubPin = {
  id: string;
  title: string;
  caption: string;
  alt: string;
  kind: "still" | "video";
  src: string;
  poster?: string;
  width: number;
  height: number;
};

export const clubPins = {
  fantasia85: {
    id: "fantasia-85",
    title: "Fantasia 85",
    caption: "Anniversary pin collectors keep bringing up",
    alt: "Club example digital pin: Fantasia 85 anniversary still featuring Sorcerer Mickey",
    kind: "still" as const,
    src: "/pins/fantasia-85.jpg",
    width: 616,
    height: 575,
  },
  qira: {
    id: "pin-1",
    title: "Qi'ra",
    caption: "Star Wars pin example from club boards",
    alt: "Club example digital pin: Qi'ra collectible with metallic frame",
    kind: "video" as const,
    src: "/pins/pin-1.mp4",
    poster: "/pins/pin-1-poster.jpg",
    width: 720,
    height: 1280,
  },
  miguel: {
    id: "pin-2",
    title: "Miguel",
    caption: "Coco set flex — club chatter favorite",
    alt: "Club example digital pin: Miguel from Coco with guitars and marigold motifs",
    kind: "video" as const,
    src: "/pins/pin-2.mp4",
    poster: "/pins/pin-2-poster.jpg",
    width: 720,
    height: 720,
  },
  mickeyLny: {
    id: "pin-3",
    title: "Mickey · Lunar New Year",
    caption: "Seasonal Mickey pin collectors share",
    alt: "Club example digital pin: Mickey Mouse in Lunar New Year attire",
    kind: "video" as const,
    src: "/pins/pin-3.mp4",
    poster: "/pins/pin-3-poster.jpg",
    width: 720,
    height: 720,
  },
  pluto: {
    id: "pin-4",
    title: "Pluto & dragon",
    caption: "Playful Pluto pin from club examples",
    alt: "Club example digital pin: Pluto with a Chinese dragon puppet",
    kind: "video" as const,
    src: "/pins/pin-4.mp4",
    poster: "/pins/pin-4-poster.jpg",
    width: 720,
    height: 720,
  },
  lampGlobe: {
    id: "pin-5",
    title: "Magic lamp globe",
    caption: "Longer pin loop collectors demos share",
    alt: "Club example digital pin: golden genie lamp inside a snow globe",
    kind: "video" as const,
    src: "/pins/pin-5.mp4",
    poster: "/pins/pin-5-poster.jpg",
    width: 480,
    height: 854,
  },
} satisfies Record<string, ClubPin>;

export const pinGalleryOrder: (keyof typeof clubPins)[] = [
  "qira",
  "mickeyLny",
  "lampGlobe",
];

export const UNAFFILIATED_DISCLAIMER =
  "Not affiliated with Disney / Dapper Labs / Disney Pinnacle";
