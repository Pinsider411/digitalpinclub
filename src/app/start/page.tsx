import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Start here",
  description: "New to digital pins? A friendly path from zero to your first board.",
};

const steps = [
  {
    n: "01",
    title: "Understand the hobby",
    body: "Digital pins are collectible enamel-style pins you gather, trade, and display on a board. Sets drop on a calendar; rarities and themes make the chase fun.",
  },
  {
    n: "02",
    title: "Learn the basics",
    body: "Read our Learn guides for drops, trading norms, and how collectors talk about editions — without the jargon overload.",
  },
  {
    n: "03",
    title: "Follow the calendar",
    body: "Check Calendar for upcoming drops and club hangouts so you never wonder what’s next.",
  },
  {
    n: "04",
    title: "Join the clubhouse",
    body: "Community is where collectors hang out. Introduce yourself, ask questions, and show a board when you’re ready.",
  },
  {
    n: "05",
    title: "Optional: PinSider data",
    body: "When you want prices, alerts, and history, PinSider is the companion desk. Free tier available; Pro is optional.",
  },
];

export default function StartPage() {
  return (
    <Section>
      <PageHero
        eyebrow="Onboarding"
        title="New? Start here."
        description="A short, warm path into digital pin collecting — no gatekeeping, no store pitch. Just what you need to feel at home."
      />
      <ol className="space-y-4">
        {steps.map((s) => (
          <li key={s.n} className="card flex gap-5 p-6">
            <span className="font-mono text-sm text-accent">{s.n}</span>
            <div>
              <h2 className="font-display text-xl font-semibold text-text">{s.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/learn" className="pill bg-accent px-5 py-2.5 text-sm font-medium text-white">
          Browse Learn
        </Link>
        <Link href="/community" className="pill border border-border px-5 py-2.5 text-sm text-text">
          Join the Club
        </Link>
      </div>
    </Section>
  );
}
