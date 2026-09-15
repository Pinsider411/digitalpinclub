import Link from "next/link";
import { FloatingBadges } from "@/components/FloatingBadges";
import { FAQAccordion } from "@/components/FAQAccordion";
import { DigestForm } from "@/components/DigestForm";
import { Section } from "@/components/Section";

const trustChips = ["Independent", "Calendar", "Guides", "PinSider data"];

const thisWeek = [
  {
    label: "Next drop",
    title: "Weekend set tease",
    meta: "Fri · TBA",
    body: "Placeholder: watch for the next digital pin drop window and set reveals.",
  },
  {
    label: "Club hangout",
    title: "Collector open chat",
    meta: "Sat · 7pm PT",
    body: "Placeholder: casual hangout for trades, tips, and board flexes.",
  },
  {
    label: "Digest",
    title: "Sunday Pin Press",
    meta: "Sun · Inbox",
    body: "Placeholder: weekly roundup of drops, community notes, and PinSider highlights.",
  },
];

const pillars = [
  {
    href: "/learn",
    title: "Learn",
    body: "Guides for beginners and veterans — how drops work, board etiquette, and collecting smarter.",
  },
  {
    href: "/community",
    title: "Community",
    body: "Find your people. Hangouts, spotlights, and a clubhouse vibe — not a storefront.",
  },
  {
    href: "/pinsider",
    title: "PinSider",
    body: "Companion data desk for prices, alerts, and history. Free tier + Pro ~$5/mo.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Section className="!pt-10 sm:!pt-16">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
              The Clubhouse
            </p>
            <h1 className="font-display text-[2.75rem] font-semibold leading-[1.02] text-text sm:text-6xl lg:text-[4.25rem]">
              Collect better. Trade smarter. Belong here.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              Digital Pin Club is the independent community for people who collect digital
              pins. Learn the hobby, follow drops, show off your board, and find your
              people.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/community"
                className="pill bg-cta px-6 py-3 text-sm font-medium text-white transition hover:brightness-110"
              >
                Join the Club
              </Link>
              <Link
                href="/start"
                className="pill border border-border bg-card px-6 py-3 text-sm font-medium text-text transition hover:border-accent"
              >
                New? Start here
              </Link>
            </div>
            <p className="mt-5 font-mono text-xs text-muted">
              Free to join · Unofficial · Run by collectors
            </p>
          </div>
          <FloatingBadges />
        </div>
      </Section>

      {/* Trust row */}
      <div className="border-y border-border bg-surface">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-3 px-4 py-5 sm:justify-between sm:px-6">
          {trustChips.map((chip) => (
            <span
              key={chip}
              className="font-mono text-xs uppercase tracking-wider text-muted"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>

      {/* This week */}
      <Section>
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-live">This week</p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-text sm:text-4xl">
              What’s on the board
            </h2>
          </div>
          <Link href="/calendar" className="hidden text-sm text-accent sm:inline hover:underline">
            Full calendar →
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {thisWeek.map((card) => (
            <article key={card.title} className="glass rounded-[20px] p-5">
              <p className="font-mono text-xs text-accent">{card.label}</p>
              <h3 className="mt-2 font-display text-xl font-semibold text-text">
                {card.title}
              </h3>
              <p className="mt-1 font-mono text-xs text-muted">{card.meta}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{card.body}</p>
            </article>
          ))}
        </div>
        <Link
          href="/calendar"
          className="mt-6 inline-block text-sm text-accent sm:hidden hover:underline"
        >
          Full calendar →
        </Link>
      </Section>

      {/* A club, not a store */}
      <Section className="!pt-0">
        <h2 className="font-display text-3xl font-semibold text-text sm:text-4xl">
          A club, not a store.
        </h2>
        <p className="mt-3 max-w-xl text-muted">
          We exist for collectors — education, calendar, community, and data — not to sell
          you pins.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {pillars.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="card group p-6 transition hover:border-accent"
            >
              <h3 className="font-display text-xl font-semibold text-text group-hover:text-accent">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
              <span className="mt-4 inline-block text-sm text-accent">Explore →</span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Full-width band */}
      <div className="border-y border-border bg-surface">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-12 sm:flex-row sm:items-center sm:px-6">
          <div>
            <h2 className="font-display text-2xl font-semibold text-text sm:text-3xl">
              Never collected a digital pin?
            </h2>
            <p className="mt-2 text-muted">A short path from zero to your first board.</p>
          </div>
          <Link
            href="/start"
            className="pill bg-accent px-6 py-3 text-sm font-medium text-white transition hover:brightness-110"
          >
            Start here
          </Link>
        </div>
      </div>

      {/* Spotlights */}
      <Section>
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              Spotlights
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-text sm:text-4xl">
              Collectors in the club
            </h2>
          </div>
          <Link href="/spotlights" className="text-sm text-accent hover:underline">
            All spotlights →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <article className="card p-6 sm:col-span-2 lg:col-span-1">
            <p className="font-mono text-xs text-live">Founder</p>
            <h3 className="mt-2 font-display text-xl font-semibold text-text">
              @apache1999
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Building Digital Pin Club and PinSider so collectors have a warm home base
              and a clear data desk — without the store energy.
            </p>
          </article>
          <article className="card p-6">
            <p className="font-mono text-xs text-muted">Member</p>
            <h3 className="mt-2 font-display text-xl font-semibold text-text">
              @boardbuilder
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Placeholder spotlight — thematic boards, patient trades, and Sunday digest
              notes.
            </p>
          </article>
          <article className="card p-6">
            <p className="font-mono text-xs text-muted">Member</p>
            <h3 className="mt-2 font-display text-xl font-semibold text-text">
              @dropwatcher
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Placeholder spotlight — calendar hawks who help the club never miss a set.
            </p>
          </article>
        </div>
      </Section>

      {/* PinSider panel */}
      <Section className="!pt-0">
        <div className="card overflow-hidden p-0">
          <div className="grid lg:grid-cols-2">
            <div className="border-b border-border p-8 lg:border-b-0 lg:border-r">
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                Companion data desk
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold text-text">
                PinSider
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Prices, alerts, and history for collectors who want signal without noise.
                Digital Pin Club stays free and open — PinSider is optional tooling next
                door.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-muted">
                <li className="flex gap-2">
                  <span className="text-live">✓</span> Free: core lookups & history
                </li>
                <li className="flex gap-2">
                  <span className="text-live">✓</span> Pro ~$5/month: alerts & deeper desk
                </li>
                <li className="flex gap-2">
                  <span className="text-live">✓</span> This club site is never paywalled
                </li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://pinsider.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill bg-accent px-5 py-2.5 text-sm font-medium text-white hover:brightness-110"
                >
                  Open PinSider
                </a>
                <Link
                  href="/pinsider"
                  className="pill border border-border px-5 py-2.5 text-sm text-text hover:border-accent"
                >
                  Learn more
                </Link>
              </div>
            </div>
            <div className="bg-bg/40 p-8">
              <div className="space-y-3">
                {["Floor pulse", "Watchlist alerts", "Set history"].map((row) => (
                  <div
                    key={row}
                    className="flex items-center justify-between rounded-2xl border border-border bg-card px-4 py-3"
                  >
                    <span className="text-sm text-text">{row}</span>
                    <span className="font-mono text-xs text-muted">pinsider.io</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Digest */}
      <Section className="!pt-0">
        <div className="rounded-[20px] border border-border bg-surface px-6 py-10 sm:px-10">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            Sunday digest
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-text">
            Pin Press in your inbox
          </h2>
          <p className="mt-3 max-w-lg text-sm text-muted">
            One calm email a week: drops, hangouts, spotlights, and what the club is
            talking about.
          </p>
          <div className="mt-6 max-w-md">
            <DigestForm />
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="!pt-0">
        <h2 className="mb-6 font-display text-3xl font-semibold text-text sm:text-4xl">
          FAQ
        </h2>
        <FAQAccordion />
      </Section>
    </>
  );
}
