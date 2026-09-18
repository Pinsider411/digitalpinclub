import Link from "next/link";
import { ReactNode } from "react";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

const OFFICIAL = "https://www.disneypinnacle.com";
const DIGITAL_PINS_101 = "https://disneypinnacle.com/digital-pins-101";
const MARKETPLACE = "https://www.disneypinnacle.com/marketplace";

export function LearnArticle({
  eyebrow = "Learn",
  title,
  description,
  level,
  children,
  related = [],
}: {
  eyebrow?: string;
  title: string;
  description: string;
  level?: string;
  children: ReactNode;
  related?: { href: string; label: string }[];
}) {
  return (
    <Section>
      <Link
        href="/learn"
        className="mb-6 inline-flex items-center gap-2 font-mono text-xs text-muted transition hover:text-accent"
      >
        ← Back to Learn
      </Link>
      {level && (
        <p className="mb-2 font-mono text-xs text-accent">{level}</p>
      )}
      <PageHero eyebrow={eyebrow} title={title} description={description} />

      <article className="prose-club max-w-2xl space-y-4 text-sm">{children}</article>

      <nav
        className="mt-8 flex flex-wrap gap-3"
        aria-label="Related links"
      >
        <a
          href={OFFICIAL}
          target="_blank"
          rel="noopener noreferrer"
          className="pill border border-border px-4 py-2 text-sm text-text transition hover:border-accent"
        >
          Disney Pinnacle →
        </a>
        <a
          href={DIGITAL_PINS_101}
          target="_blank"
          rel="noopener noreferrer"
          className="pill border border-border px-4 py-2 text-sm text-text transition hover:border-accent"
        >
          Digital Pins 101 →
        </a>
        <a
          href={MARKETPLACE}
          target="_blank"
          rel="noopener noreferrer"
          className="pill border border-border px-4 py-2 text-sm text-text transition hover:border-accent"
        >
          Marketplace →
        </a>
        <Link
          href="/start"
          className="pill border border-border px-4 py-2 text-sm text-text transition hover:border-accent"
        >
          Start here
        </Link>
        <Link
          href="/calendar"
          className="pill border border-border px-4 py-2 text-sm text-text transition hover:border-accent"
        >
          Calendar
        </Link>
        <Link
          href="/community"
          className="pill border border-border px-4 py-2 text-sm text-text transition hover:border-accent"
        >
          Community
        </Link>
        <Link
          href="/pinsider"
          className="pill border border-border px-4 py-2 text-sm text-text transition hover:border-accent"
        >
          Pinsider
        </Link>
        {related.map((r) => (
          <Link
            key={r.href}
            href={r.href}
            className="pill border border-border px-4 py-2 text-sm text-text transition hover:border-accent"
          >
            {r.label}
          </Link>
        ))}
      </nav>
    </Section>
  );
}
