import type { Metadata } from "next";
import Link from "next/link";
import { LearnArticle } from "@/components/LearnArticle";

export const metadata: Metadata = {
  title: "Glossary",
  description:
    "Plain-language glossary of digital pin collecting terms — storefront, capsules, editions, Trade Links, Pinbooks, Marketplace, and more.",
};

const terms: { term: string; def: string }[] = [
  {
    term: "Digital pin",
    def: "A licensed enamel-style collectible you own in Disney Pinnacle. Under the hood an NFT on Flow; in club chat, just “a pin.”",
  },
  {
    term: "Disney Pinnacle",
    def: "The official app + web product from Dapper Labs where pins mint, trade, and display. Primary site: disneypinnacle.com.",
  },
  {
    term: "Digital Pins 101",
    def: "Official primer and help hub for how the product works. Start here when community tips disagree with the app.",
  },
  {
    term: "Revolving Storefront",
    def: "Rotating shop windows for many OE pins. Often refreshes on a cadence of roughly every few hours (~4 hours is commonly cited) — verify live. Typically one of each available storefront pin per window.",
  },
  {
    term: "Mystery Capsule",
    def: "Pack-style drop that can include LEs and certain variants. Odds and contents are defined officially per drop.",
  },
  {
    term: "Bundle / Starter / Welcome",
    def: "Packaged on-ramps for new collectors. Contents change — read the current listing.",
  },
  {
    term: "Open Edition (OE)",
    def: "Demand-minted during a window; may have reprintings under official rules; can close after a long period following the last window (often cited around 18 months — verify).",
  },
  {
    term: "Limited Edition (LE)",
    def: "Serialized, hard-capped mint. Typically capsules; generally not reissued.",
  },
  {
    term: "Variant",
    def: "Alternate treatment (e.g. Chaser, Digital Display, Color Splash). Availability rules change — many are capsule-only as of mid-2026 updates; check official variant docs.",
  },
  {
    term: "Pinbook",
    def: "In-app board for arranging, displaying, and sharing pins. Starter Pinbook often holds up to 9 — confirm in-product.",
  },
  {
    term: "Trade Link",
    def: "Peer trade flow: both accept, ≥1 pin each side, irreversible once done. Available around the clock.",
  },
  {
    term: "Marketplace",
    def: "Official web secondary market at disneypinnacle.com/marketplace. Fees change — see Marketplace 101 / official help.",
  },
  {
    term: "Flow",
    def: "The blockchain Disney Pinnacle uses under the hood. Most collectors never need to talk about it day to day.",
  },
  {
    term: "Digital Pin Club",
    def: "This unofficial fan community — guides, calendar context, culture. Not affiliated with Disney, Dapper Labs, or Disney Pinnacle. Not a marketplace.",
  },
  {
    term: "Pinsider",
    def: "Companion data desk (prices, alerts, history). Optional; the club site stays free.",
  },
];

export default function GlossaryPage() {
  return (
    <LearnArticle
      level="Reference"
      title="Glossary"
      description="Common terms collectors use, in plain language. When product rules change, the official docs win."
      related={[
        { href: "/learn/what-are-digital-pins", label: "What are digital pins?" },
        { href: "/learn/editions-and-variants", label: "Editions & variants" },
      ]}
    >
      <p>
        Skim what you need. For anything that affects money, mint counts, or account
        access, prefer{" "}
        <a
          href="https://disneypinnacle.com/digital-pins-101"
          target="_blank"
          rel="noopener noreferrer"
        >
          Digital Pins 101
        </a>{" "}
        and{" "}
        <a
          href="https://www.disneypinnacle.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          disneypinnacle.com
        </a>
        .
      </p>
      <dl className="mt-6 space-y-5">
        {terms.map((t) => (
          <div key={t.term}>
            <dt className="font-display text-base font-semibold text-text">{t.term}</dt>
            <dd className="mt-1 text-sm leading-relaxed text-muted">{t.def}</dd>
          </div>
        ))}
      </dl>
      <p className="!mt-8">
        Keep learning: <Link href="/learn">all guides</Link> ·{" "}
        <Link href="/start">Start here</Link> ·{" "}
        <Link href="/community">Community</Link>
      </p>
    </LearnArticle>
  );
}
