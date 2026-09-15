import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Spotlights",
  description: "Collector spotlights from the Digital Pin Club community.",
};

const spotlights = [
  {
    handle: "@apache1999",
    role: "Founder",
    blurb:
      "Started Digital Pin Club and PinSider so collectors have a clubhouse and a clear data desk — warm, independent, and never a store.",
  },
  {
    handle: "@boardbuilder",
    role: "Member",
    blurb:
      "Placeholder: thematic boards, patient trades, and a soft spot for complete sets.",
  },
  {
    handle: "@dropwatcher",
    role: "Member",
    blurb:
      "Placeholder: calendar hawk who helps the club never miss a reveal window.",
  },
  {
    handle: "@tradetable",
    role: "Member",
    blurb:
      "Placeholder: fair-deal evangelist sharing etiquette tips for newer collectors.",
  },
  {
    handle: "@lanyardlite",
    role: "Member",
    blurb:
      "Placeholder: minimalist boards and thoughtful write-ups for Sunday digest.",
  },
  {
    handle: "@setcompleter",
    role: "Member",
    blurb:
      "Placeholder: completionist energy with notes on pacing the chase sustainably.",
  },
];

export default function SpotlightsPage() {
  return (
    <Section>
      <PageHero
        eyebrow="People"
        title="Collector spotlights"
        description="Faces and stories from the club. Founder first — more members as the community grows."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {spotlights.map((s) => (
          <article key={s.handle} className="card p-6">
            <p className="font-mono text-xs text-accent">{s.role}</p>
            <h2 className="mt-2 font-display text-xl font-semibold text-text">
              {s.handle}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{s.blurb}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
