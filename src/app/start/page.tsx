import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { PinMedia } from "@/components/PinMedia";
import { PinDisclaimer } from "@/components/PinDisclaimer";
import { clubPins } from "@/data/pins";

export const metadata: Metadata = {
  title: "Start here",
  description: "New to digital pins? A friendly path from zero to your first board.",
};

const steps = [
  {
    n: "01",
    title: "Understand the hobby",
    body: "Digital pins are collectible enamel-style pins you gather, trade, and display in Pinbooks. Sets drop on a calendar; editions and variants make the chase fun.",
    href: "/learn/what-are-digital-pins",
    linkLabel: "What are digital pins?",
  },
  {
    n: "02",
    title: "Meet the official platform",
    body: "Disney Pinnacle (by Dapper Labs) is where pins live — app, storefront, capsules, trading, and Marketplace. Digital Pin Club is the unofficial clubhouse beside it.",
    href: "/learn/disney-pinnacle",
    linkLabel: "Disney Pinnacle overview",
  },
  {
    n: "03",
    title: "Learn drops, editions & trading",
    body: "Read how storefront windows and capsules work, what OE vs LE means, and how Trade Links plus the Marketplace fill gaps — then verify fees and windows officially.",
    href: "/learn/how-drops-work",
    linkLabel: "How drops work",
    extra: [
      { href: "/learn/editions-and-variants", label: "Editions & variants" },
      { href: "/learn/trading-and-marketplace", label: "Trading & Marketplace" },
    ],
  },
  {
    n: "04",
    title: "Follow the calendar",
    body: "Check Calendar for upcoming drops and club hangouts so you never wonder what’s next — and still confirm timing on the official site.",
    href: "/calendar",
    linkLabel: "Open Calendar",
  },
  {
    n: "05",
    title: "Join the clubhouse",
    body: "Community is where collectors hang out. Introduce yourself, ask questions, and show a Pinbook when you’re ready.",
    href: "/join",
    linkLabel: "Join the Club",
  },
  {
    n: "06",
    title: "Optional: PinSider data",
    body: "When you want prices, alerts, and history, PinSider is the companion desk. Free tier available; Pro is optional. The club site stays free.",
    href: "/pinsider",
    linkLabel: "About PinSider",
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

      <aside className="mb-10 flex flex-col gap-4 rounded-[20px] border border-border bg-surface p-5 sm:flex-row sm:items-center sm:gap-6 sm:p-6">
        <figure className="mx-auto w-36 shrink-0 sm:mx-0">
          <PinMedia
            pin={clubPins.fantasia85}
            autoPlay={false}
            className="aspect-square rounded-2xl border border-border bg-bg/60 p-2"
            imgClassName="object-contain"
            sizes="144px"
          />
          <figcaption className="mt-2 text-center font-mono text-[10px] text-muted sm:text-left">
            Club example · what a digital pin can look like
          </figcaption>
        </figure>
        <div className="min-w-0">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            Visual peek
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Digital pins are enamel-inspired collectibles you display in Pinbooks —
            shiny borders, character art, anniversary marks. The still below is a club
            example collectors talk about, not an official product page.
          </p>
          <div className="mt-3">
            <PinDisclaimer />
          </div>
        </div>
      </aside>

      <ol className="space-y-4">
        {steps.map((s) => (
          <li key={s.n} className="card flex gap-5 p-6">
            <span className="font-mono text-sm text-accent">{s.n}</span>
            <div>
              <h2 className="font-display text-xl font-semibold text-text">{s.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                <Link href={s.href} className="font-mono text-xs text-accent hover:underline">
                  {s.linkLabel} →
                </Link>
                {"extra" in s &&
                  s.extra?.map((e) => (
                    <Link
                      key={e.href}
                      href={e.href}
                      className="font-mono text-xs text-accent hover:underline"
                    >
                      {e.label} →
                    </Link>
                  ))}
              </div>
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-8 max-w-2xl text-sm text-muted">
        Official product docs:{" "}
        <a
          href="https://disneypinnacle.com/digital-pins-101"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          Digital Pins 101
        </a>{" "}
        ·{" "}
        <a
          href="https://www.disneypinnacle.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          disneypinnacle.com
        </a>
        . Digital Pin Club is unofficial and not affiliated with Disney, Dapper Labs, or
        Disney Pinnacle.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/learn" className="pill bg-accent px-5 py-2.5 text-sm font-medium text-cta-text">
          Browse Learn
        </Link>
        <Link href="/learn/glossary" className="pill border border-border px-5 py-2.5 text-sm text-text">
          Glossary
        </Link>
        <Link href="/join" className="pill border border-border px-5 py-2.5 text-sm text-text">
          Join the Club
        </Link>
      </div>
    </Section>
  );
}
