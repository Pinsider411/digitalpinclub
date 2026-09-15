import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Board",
  description: "Show off your digital pin board — community showcase coming soon.",
};

export default function BoardPage() {
  return (
    <Section>
      <PageHero
        eyebrow="Showcase"
        title="Your board, your story."
        description="A future home for community board showcases. For v1, browse spotlights and share via Community."
      />
      <div className="card p-8">
        <h2 className="font-display text-2xl font-semibold text-text">Coming soon</h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
          We’re designing a respectful way to feature boards without scraping official
          artwork or turning the club into a marketplace. Until then, say hi in Community
          or get featured in Spotlights.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/spotlights" className="pill bg-accent px-5 py-2.5 text-sm font-medium text-white">
            Spotlights
          </Link>
          <Link href="/community" className="pill border border-border px-5 py-2.5 text-sm text-text">
            Join the Club
          </Link>
        </div>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {["Theme boards", "Completion runs", "Color stories"].map((label) => (
          <div
            key={label}
            className="flex h-36 items-end rounded-[20px] border border-dashed border-border bg-card/50 p-4"
          >
            <span className="font-mono text-xs text-muted">{label} · placeholder</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
