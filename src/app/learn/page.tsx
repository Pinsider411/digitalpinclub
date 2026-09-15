import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Learn",
  description: "Guides for digital pin collectors — beginners through veterans.",
};

const guides = [
  {
    title: "What is a digital pin?",
    level: "Beginner",
    body: "Enamel-inspired collectibles you own digitally, display on a board, and trade with other collectors.",
  },
  {
    title: "How drops work",
    level: "Beginner",
    body: "Sets release on a schedule. Learn windows, editions, and how collectors prepare without FOMO spiral.",
  },
  {
    title: "Trading etiquette",
    level: "Intermediate",
    body: "Fair offers, clear communication, and clubhouse norms that keep the hobby fun for everyone.",
  },
  {
    title: "Building a board",
    level: "Intermediate",
    body: "Themes, color stories, and “complete the set” goals — placeholder guide content for v1.",
  },
  {
    title: "Reading market signal",
    level: "Advanced",
    body: "When to use PinSider for history and alerts — and when to ignore noise.",
  },
  {
    title: "Glossary",
    level: "Reference",
    body: "Common terms collectors use (drops, boards, editions) explained in plain language.",
  },
];

export default function LearnPage() {
  return (
    <Section>
      <PageHero
        eyebrow="Guides"
        title="Learn the hobby."
        description="Collector-to-collector guides. CMS coming later — these are meaningful placeholders you can expand."
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {guides.map((g) => (
          <article key={g.title} className="card p-6">
            <p className="font-mono text-xs text-accent">{g.level}</p>
            <h2 className="mt-2 font-display text-xl font-semibold text-text">{g.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{g.body}</p>
          </article>
        ))}
      </div>
      <p className="mt-8 text-sm text-muted">
        Brand new?{" "}
        <Link href="/start" className="text-accent hover:underline">
          Start here
        </Link>{" "}
        for a sequenced path.
      </p>
    </Section>
  );
}
