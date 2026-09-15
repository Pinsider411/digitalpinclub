import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Learn",
  description:
    "Collector-to-collector guides for digital pins — Disney Pinnacle basics, drops, editions, trading, pinbooks, and a glossary. Unofficial fan community.",
};

const guides = [
  {
    href: "/learn/what-are-digital-pins",
    title: "What are digital pins?",
    level: "Beginner",
    body: "Enamel-inspired collectibles you own digitally, display in Pinbooks, and trade with other collectors — under the hood on Flow as NFTs, without the crypto-bro energy.",
  },
  {
    href: "/learn/disney-pinnacle",
    title: "Disney Pinnacle overview",
    level: "Beginner",
    body: "The official licensed app and web experience from Dapper Labs. How Digital Pin Club relates — and where to go for the real storefront.",
  },
  {
    href: "/learn/how-drops-work",
    title: "How drops work",
    level: "Beginner",
    body: "Revolving Storefront, Mystery Capsules, bundles, and sets — windows, refresh cadence, and how collectors prepare without the FOMO spiral.",
  },
  {
    href: "/learn/editions-and-variants",
    title: "Editions & variants",
    level: "Intermediate",
    body: "Starter, Open Edition, Limited Edition, and variants like Chaser, Digital Display, and Color Splash — what collectors mean when they talk rarity.",
  },
  {
    href: "/learn/trading-and-marketplace",
    title: "Trading & Marketplace",
    level: "Intermediate",
    body: "Trade Links, peer offers, and the web Marketplace. Fees change — verify on Marketplace 101. This club is not a marketplace.",
  },
  {
    href: "/learn/pinbooks",
    title: "Pinbooks",
    level: "Intermediate",
    body: "Arrange, display, and share your collection. Themes, color stories, and completing a set without turning the hobby into homework.",
  },
  {
    href: "/learn/glossary",
    title: "Glossary",
    level: "Reference",
    body: "Common terms collectors use — storefront, capsules, editions, Trade Links, Pinbooks — explained in plain language.",
  },
];

export default function LearnPage() {
  return (
    <Section>
      <PageHero
        eyebrow="Guides"
        title="Learn the hobby."
        description="Collector-to-collector guides for digital pin collecting. Warm, practical, and accurate — with links to the official Disney Pinnacle docs when details matter."
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {guides.map((g) => (
          <Link
            key={g.href}
            href={g.href}
            className="card block p-6 transition hover:border-accent"
          >
            <p className="font-mono text-xs text-accent">{g.level}</p>
            <h2 className="mt-2 font-display text-xl font-semibold text-text">
              {g.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{g.body}</p>
            <p className="mt-4 font-mono text-xs text-accent">Read guide →</p>
          </Link>
        ))}
      </div>
      <p className="mt-8 text-sm text-muted">
        Brand new?{" "}
        <Link href="/start" className="text-accent hover:underline">
          Start here
        </Link>{" "}
        for a sequenced path. Official platform:{" "}
        <a
          href="https://www.disneypinnacle.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          disneypinnacle.com
        </a>
        .
      </p>
    </Section>
  );
}
