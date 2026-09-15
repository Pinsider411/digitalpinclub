/**
 * Unofficial snapshot of Disney Pinnacle Releases.
 * Sourced from https://disneypinnacle.com/releases — titles from img alts,
 * availability windows from release copy, prices from listed priceCents when present.
 * Cards link OUT to official release URLs. No licensed artwork.
 * The official page uses infinite scroll; this index covers the initially listed set.
 */

export type PinnacleRelease = {
  id: string;
  title: string;
  url: string;
  /** ISO date YYYY-MM-DD when parseable */
  startDate?: string;
  /** ISO date YYYY-MM-DD when parseable */
  endDate?: string;
  /** Human-readable availability window */
  dateLabel: string;
  price?: string;
  excerpt?: string;
};

/** When this index was last curated from the official Releases page. */
export const pinnacleReleasesSnapshotDate = "2026-09-15";

export const officialReleasesUrl = "https://disneypinnacle.com/releases";

/** Currently listed releases (~18 from initial page load), newest-first by startDate. */
export const pinnacleReleases: PinnacleRelease[] = [
  {
    id: "ea47ea55-a332-400e-aae8-c67c52efed39",
    title: "Disney Cats & Dogs Vol.1 [3/4]",
    url: "https://disneypinnacle.com/releases/ea47ea55-a332-400e-aae8-c67c52efed39",
    startDate: "2026-09-15",
    endDate: "2026-09-22",
    dateLabel: "September 15, 2026 – September 22, 2026",
    price: "$4.99",
    excerpt: "The third of four waves of Disney's Cats & Dogs Vol.1 Open Edition digital pin set features Nana and Pluto. Nana's caring and devoted nature makes her an unforgettable part of the Darling family in Peter Pan, while…",
  },
  {
    id: "a7e0a5bd-63cb-4414-b020-c23066ed34a9",
    title: "Disney Cats & Dogs Vol.1 [2/4]",
    url: "https://disneypinnacle.com/releases/a7e0a5bd-63cb-4414-b020-c23066ed34a9",
    startDate: "2026-09-08",
    endDate: "2026-09-15",
    dateLabel: "September 8, 2026 – September 15, 2026",
    price: "$4.99",
    excerpt: "The second of four waves of Disney's Cats & Dogs Vol.1 Open Edition digital pin set features Duchess and Figaro. Duchess brings the elegance and grace fans know from The Aristocats, while Figaro's playful and…",
  },
  {
    id: "2d68412c-1e44-4d9a-be0f-c1045ddf2872",
    title: "Disney Cats & Dogs Vol.1 [1/4]",
    url: "https://disneypinnacle.com/releases/2d68412c-1e44-4d9a-be0f-c1045ddf2872",
    startDate: "2026-09-01",
    endDate: "2026-09-08",
    dateLabel: "September 1, 2026 – September 8, 2026",
    price: "$4.99",
    excerpt: "The first of four waves of Disney's Cats & Dogs Vol.1 Open Edition digital pin set features Lady and Pongo. From Lady's sweet and gentle nature in Lady and the Tramp to Pongo's devotion to his family in 101…",
  },
  {
    id: "d2c2c433-8d0c-4d32-afbb-eb1a891a33dc",
    title: "Disney Mickey & Friends: Surf's Up Vol.1 [6/6]",
    url: "https://disneypinnacle.com/releases/d2c2c433-8d0c-4d32-afbb-eb1a891a33dc",
    startDate: "2026-08-25",
    endDate: "2026-09-01",
    dateLabel: "August 25, 2026 – September 1, 2026",
    price: "$4.99",
    excerpt: "The sixth and final wave of Disney Mickey & Friends: Surf's Up Vol.1 Open Edition digital pin set features Pluto. Soaking up the sunshine and enjoying a day at the beach, Pluto rounds out the collection with a…",
  },
  {
    id: "f226eceb-9526-47cc-a9e6-f8b966a4a0c7",
    title: "Disney Mickey & Friends: Surf's Up Vol.1 [5/6]",
    url: "https://disneypinnacle.com/releases/f226eceb-9526-47cc-a9e6-f8b966a4a0c7",
    startDate: "2026-08-18",
    endDate: "2026-08-25",
    dateLabel: "August 18, 2026 – August 25, 2026",
    price: "$4.99",
    excerpt: "The fifth of six waves of Disney Mickey & Friends: Surf's Up Vol.1 Open Edition digital pin set features Goofy. Always ready for a laugh, Goofy dives into the fun with a carefree beach inspired design that captures…",
  },
  {
    id: "b712f816-edf9-4a5d-967e-2b23792b5e09",
    title: "Summer Showcase - Premium Pack",
    url: "https://disneypinnacle.com/releases/b712f816-edf9-4a5d-967e-2b23792b5e09",
    startDate: "2026-08-14",
    endDate: "2026-08-21",
    dateLabel: "August 14, 2026 – August 21, 2026",
    price: "$99.99",
    excerpt: "The Summer Showcase Premium Pack is built for collectors looking for guaranteed scarce content. Each pack contains three Mystery Capsules, including two Limited Edition digital pins and one Digital Display variant.",
  },
  {
    id: "49a62dc2-adf4-450b-b0bb-5086edb63fbc",
    title: "Summer Showcase - Standard Pack",
    url: "https://disneypinnacle.com/releases/49a62dc2-adf4-450b-b0bb-5086edb63fbc",
    startDate: "2026-08-14",
    endDate: "2026-08-21",
    dateLabel: "August 14, 2026 – August 21, 2026",
    price: "$4.99",
    excerpt: "The Summer Showcase Standard Pack offers the widest variety of digital pin reveals across the Summer Showcase drop. Each Mystery Capsule contains one digital pin, with possibilities ranging from Open Edition…",
  },
  {
    id: "9b6552f8-9cd9-4f53-b08b-8964caa530a1",
    title: "Summer Showcase - Legendary Pack",
    url: "https://disneypinnacle.com/releases/9b6552f8-9cd9-4f53-b08b-8964caa530a1",
    startDate: "2026-08-14",
    endDate: "2026-08-21",
    dateLabel: "August 14, 2026 – August 21, 2026",
    price: "$499.00",
    excerpt: "The Summer Showcase Legendary Pack delivers a premium collecting experience with three guaranteed digital pin reveals. Each pack includes one Legendary Edition digital pin from Celebration of Walt Disney Animation…",
  },
  {
    id: "3ae5874e-525a-48ff-8b35-6d85aeec72ac",
    title: "Disney Mickey & Friends: Surf's Up Vol.1 [4/6]",
    url: "https://disneypinnacle.com/releases/3ae5874e-525a-48ff-8b35-6d85aeec72ac",
    startDate: "2026-08-11",
    endDate: "2026-08-18",
    dateLabel: "August 11, 2026 – August 18, 2026",
    price: "$4.99",
    excerpt: "The fourth of six waves of Disney Mickey & Friends: Surf's Up Vol.1 Open Edition digital pin set features Daisy Duck. Relaxing in style by the water, Daisy brings her fashionable flair to this vibrant summer…",
  },
  {
    id: "20f142ee-ac3c-47b0-a8ff-e701cff41986",
    title: "Disney Mickey & Friends: Surf's Up Vol.1 [3/6]",
    url: "https://disneypinnacle.com/releases/20f142ee-ac3c-47b0-a8ff-e701cff41986",
    startDate: "2026-08-04",
    endDate: "2026-08-11",
    dateLabel: "August 4, 2026 – August 11, 2026",
    price: "$4.99",
    excerpt: "The third of six waves of Disney Mickey & Friends: Surf's Up Vol.1 Open Edition digital pin set features Donald Duck. Whether he's riding the waves or making a splash, Donald's unmistakable personality shines through…",
  },
  {
    id: "3c7ebe5c-6b3b-42bd-b923-7e43f305343c",
    title: "Disney Mickey & Friends: Surf's Up Vol.1 [2/6]",
    url: "https://disneypinnacle.com/releases/3c7ebe5c-6b3b-42bd-b923-7e43f305343c",
    startDate: "2026-07-28",
    endDate: "2026-08-04",
    dateLabel: "July 28, 2026 – August 4, 2026",
    price: "$4.99",
    excerpt: "The second of six waves of Disney Mickey & Friends: Surf's Up Vol.1 Open Edition digital pin set features Minnie Mouse. Bringing her signature style to the shore, Minnie is ready for a day of sunshine, surf, and…",
  },
  {
    id: "99183ec4-85fe-4d52-a65e-ee74151c22cd",
    title: "Disney Mickey & Friends: Surf's Up Vol.1 [1/6]",
    url: "https://disneypinnacle.com/releases/99183ec4-85fe-4d52-a65e-ee74151c22cd",
    startDate: "2026-07-21",
    endDate: "2026-07-28",
    dateLabel: "July 21, 2026 – July 28, 2026",
    price: "$4.99",
    excerpt: "The first of six waves of Disney Mickey & Friends: Surf's Up Vol.1 Open Edition digital pin set features Mickey Mouse. Ready to catch the perfect wave, Mickey brings his adventurous spirit to the beach in a fun…",
  },
  {
    id: "9647700f-a31a-4333-8d51-43eabdd7f7cc",
    title: "Phineas and Ferb Vol.1 [6/6]",
    url: "https://disneypinnacle.com/releases/9647700f-a31a-4333-8d51-43eabdd7f7cc",
    startDate: "2026-07-14",
    endDate: "2026-07-21",
    dateLabel: "July 14, 2026 – July 21, 2026",
    price: "$4.99",
    excerpt: "The sixth and final wave of Disney's Phineas and Ferb Vol.1 Open Edition digital pin set features Agent P. As the secret-agent alter ego of Perry the Platypus, Agent P combines quick thinking, advanced gadgets, and…",
  },
  {
    id: "aa5c7511-2152-49b8-93d4-c4b6bcac1f0b",
    title: "Encanto Vol.1 [4/4]",
    url: "https://disneypinnacle.com/releases/aa5c7511-2152-49b8-93d4-c4b6bcac1f0b",
    startDate: "2026-07-14",
    endDate: "2026-08-04",
    dateLabel: "July 14, 2026 – August 4, 2026",
    price: "$6.95",
    excerpt: "The fourth and final wave of Disney’s Encanto Vol.1 Open Edition digital pin set features Bruno, Félix, and Abuela. Bringing together three unforgettable members of the Madrigal family, each digital pin celebrates…",
  },
  {
    id: "ab10692a-6967-46e2-a321-096c143019db",
    title: "Phineas and Ferb Vol.1 [5/6]",
    url: "https://disneypinnacle.com/releases/ab10692a-6967-46e2-a321-096c143019db",
    startDate: "2026-07-07",
    endDate: "2026-07-14",
    dateLabel: "July 7, 2026 – July 14, 2026",
    price: "$4.99",
    excerpt: "The fifth of six waves of Disney's Phineas and Ferb Vol.1 Open Edition digital pin set features Candace. Always determined to stay one step ahead of her brothers' latest creations, Candace's energy, persistence, and…",
  },
  {
    id: "cddc06ef-99dc-4d4a-a316-41b94bfb0be7",
    title: "Disney Mickey & Friends: Americana Vol.1",
    url: "https://disneypinnacle.com/releases/cddc06ef-99dc-4d4a-a316-41b94bfb0be7",
    startDate: "2026-07-04",
    endDate: "2026-07-11",
    dateLabel: "Starting July 4, 2026 for one week (through July 11, 2026)",
    price: "$4.99",
    excerpt: "Celebrate Independence Day with Disney Mickey & Friends: Americana Vol.1, an Open Event Edition digital pin set featuring Mickey Mouse and friends in patriotic designs inspired by the holiday. Showcasing Mickey…",
  },
  {
    id: "3c06eaae-460f-4f7b-ab65-530a38d934e9",
    title: "Phineas and Ferb Vol.1 [4/6]",
    url: "https://disneypinnacle.com/releases/3c06eaae-460f-4f7b-ab65-530a38d934e9",
    startDate: "2026-06-30",
    endDate: "2026-07-07",
    dateLabel: "June 30, 2026 – July 7, 2026",
    price: "$4.99",
    excerpt: "The fourth of six waves of Disney's Phineas and Ferb Vol.1 Open Edition digital pin set features Ferb. Quiet but incredibly resourceful, Ferb helps bring ambitious ideas to life with his ingenuity and determination,…",
  },
  {
    id: "17334f6a-58d1-436b-adbd-3876de300b38",
    title: "Encanto Vol.1 [3/4]",
    url: "https://disneypinnacle.com/releases/17334f6a-58d1-436b-adbd-3876de300b38",
    startDate: "2026-06-23",
    endDate: "2026-07-14",
    dateLabel: "June 23, 2026 – July 14, 2026",
    price: "$6.95",
    excerpt: "The third of four waves of Disney’s Encanto Vol.1 Open Edition digital pin set features Camilo, Antonio, and Dolores. Showcasing three fan-favorite members of the Madrigal family, each digital pin draws inspiration…",
  },
];
