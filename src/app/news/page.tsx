import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "News",
  description: "Club news, drop notes, and Pin Press updates.",
};

const posts = [
  {
    date: "2026-09-14",
    title: "Digital Pin Club v1 is live",
    excerpt:
      "The clubhouse site ships: Learn, Calendar, Community, Spotlights, and a clear link to PinSider. Unofficial, free, collector-run.",
  },
  {
    date: "2026-09-10",
    title: "How we’ll cover drops",
    excerpt:
      "Placeholder: calendar-first, no hype theater. We’ll post windows, club hangouts, and digest notes — not speculation as fact.",
  },
  {
    date: "2026-09-05",
    title: "PinSider + the Club",
    excerpt:
      "Placeholder: the club stays open; PinSider remains the optional data desk for prices, alerts, and history.",
  },
  {
    date: "2026-08-28",
    title: "Etiquette refresher",
    excerpt:
      "Placeholder article: fair trades, clear asks, and welcoming newer collectors into the hobby.",
  },
];

export default function NewsPage() {
  return (
    <Section>
      <PageHero
        eyebrow="Pin Press"
        title="News & notes"
        description="Club updates and hobby context. Placeholder articles for v1 — CMS later."
      />
      <div className="space-y-4">
        {posts.map((p) => (
          <article key={p.title} className="card p-6">
            <p className="font-mono text-xs text-muted">{p.date}</p>
            <h2 className="mt-2 font-display text-xl font-semibold text-text">{p.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{p.excerpt}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
