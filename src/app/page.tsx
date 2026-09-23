import Link from "next/link";
import { FloatingBadges } from "@/components/FloatingBadges";
import { FAQAccordion } from "@/components/FAQAccordion";
import { DigestForm } from "@/components/DigestForm";
import { Section } from "@/components/Section";
import { MintTotalCard } from "@/components/MintTotalCard";
import { FindUsSection } from "@/components/SocialLinks";
import { PinSiderLockup, PinSiderMark, PinSiderWordmark } from "@/components/PinSiderMark";
import { getFeaturedThisWeek } from "@/data/creators";
import { CreatorAvatar } from "@/components/CreatorAvatar";

const thisWeek: {
  label: string;
  title: string;
  meta: string;
  body: string;
  href?: string;
  logoSrc?: string;
  /** Optional hero thumb (event announce art) */
  imageSrc?: string;
  imageAlt?: string;
  imageCaption?: string;
  cta?: string;
  note?: string;
  /** Live chip styling (text-live) */
  live?: boolean;
}[] = [
  {
    label: "Live drop",
    title: "Cats & Dogs Vol.1 [4/4]",
    meta: "Sep 22–29 · $4.99",
    body: "Final OE wave — Dinah, Bolt, and Mochi with Standard, Silver Sparkle, Golden, and Digital Display. Capsules through Sep 29.",
    href: "https://disneypinnacle.com/releases/912f3042-39d3-44b0-99dc-4d7953c56af6",
    imageSrc: "/events/cats-dogs-vol1-4/banner.webp",
    imageAlt: "Disney Cats & Dogs Vol.1 [4/4] official release banner",
    imageCaption: "Official release art · Disney Pinnacle",
    cta: "Official release →",
    note: "Confirm window and pricing officially in the Disney Pinnacle app.",
    live: true,
  },
  {
    label: "Upcoming drop",
    title: "Summer Sunset Event",
    meta: "Sep 25 – Oct 2 · from $4.99",
    body: "Seven sets · Limited + Open Edition · trade rewards and a Genesis chase. Verify pack windows on official News — times can shift.",
    href: "https://disneypinnacle.com/news/summer-sunset-event",
    imageSrc: "/events/summer-sunset/announce.webp",
    imageAlt: "Summer Sunset Event official announce art",
    imageCaption: "Official announce art · Disney Pinnacle",
    cta: "Official details →",
    note: "Confirm windows and pricing officially in the Disney Pinnacle app.",
  },
  {
    label: "Trading event · Live",
    title: "September 2026 Trading Event",
    meta: "Through Sep 25, 9am PT · Mickey Mouse",
    body: "Unlock Mickey Mouse colored enamel, embellished, and color splash at 5 / 15 / 30 unique trading partners. Window closes Fri Sep 25, 9am PT — may overlap Summer Sunset open.",
    href: "https://disneypinnacle.com/news/september-2026-trading-event",
    imageSrc: "/events/trading-event/hero.webp",
    imageAlt: "Disney Pinnacle Trading Event official art",
    imageCaption: "Official trade art · Disney Pinnacle",
    cta: "Official details →",
    note: "Confirm timing and rules officially in the Disney Pinnacle app.",
    live: true,
  },
];

const homeLearnTiles = [
  {
    href: "/learn/what-are-digital-pins",
    title: "What are digital pins?",
    body: "Friendly intro to the hobby.",
  },
  {
    href: "/learn/burns",
    title: "Burns",
    body: "Leftovers, circulating supply, and why collectors care.",
  },
  {
    href: "/learn/how-drops-work",
    title: "How drops work",
    body: "Storefront, capsules, and windows.",
  },
];

const pillars = [
  {
    href: "/learn",
    title: "Learn",
    body: "Guides for beginners and veterans — drops, editions, burns, board etiquette, and collecting smarter.",
  },
  {
    href: "/community",
    title: "Community",
    body: "Find your people. Hangouts, spotlights, and a clubhouse vibe — not a storefront.",
  },
  {
    href: "/pinsider",
    title: "Pinsider",
    body: "Companion data desk for prices, alerts, and history. Free tier + Pro ~$5/mo.",
  },
];

export default function HomePage() {
  const watchCreators = getFeaturedThisWeek();
  return (
    <>
      {/* Hero */}
      <Section className="!pt-8 sm:!pt-12 !pb-4 sm:!pb-6">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
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
                href="/join"
                className="pill bg-cta px-6 py-3 text-sm font-medium text-cta-text transition hover:brightness-110"
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
              Free to join · Run by collectors
            </p>
          </div>
          <FloatingBadges />
        </div>
      </Section>

      {/* This week */}
      <Section className="!pt-4 sm:!pt-6 !pb-6 sm:!pb-8">
        <div className="mb-6 flex items-end justify-between gap-4">
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
            <article
              key={card.title}
              className="glass flex flex-col rounded-[20px] p-5"
            >
              <div className="flex items-start justify-between gap-3">
                <p className={`font-mono text-xs ${card.live ? "text-live" : "text-accent"}`}>{card.label}</p>
                {card.logoSrc ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={card.logoSrc}
                    alt="Disney+"
                    width={88}
                    height={48}
                    className="h-5 w-auto shrink-0 opacity-90"
                  />
                ) : null}
              </div>
              {card.imageSrc ? (
                <figure className="mt-3 overflow-hidden rounded-xl border border-accent/20 bg-surface">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={card.imageSrc}
                    alt={card.imageAlt ?? card.title}
                    width={600}
                    height={450}
                    className="aspect-[4/3] w-full object-cover"
                  />
                  {card.imageCaption ? (
                    <figcaption className="border-t border-accent/15 px-2.5 py-1.5 font-mono text-[10px] text-muted/80">
                      {card.imageCaption}
                    </figcaption>
                  ) : null}
                </figure>
              ) : null}
              <h3 className="mt-2 font-display text-xl font-semibold text-text">
                {card.title}
              </h3>
              <p className="mt-1 font-mono text-xs text-muted">{card.meta}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{card.body}</p>
              {card.note ? (
                <p className="mt-3 font-mono text-[10px] leading-snug text-muted/80">
                  {card.note}
                </p>
              ) : null}
              {card.href ? (
                <a
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex w-fit items-center gap-1 rounded-full border border-accent/40 bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent transition hover:border-accent hover:bg-accent/20"
                >
                  {card.cta ?? "Learn more"}
                  <span aria-hidden="true">↗</span>
                </a>
              ) : null}
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

      {/* Mint desk */}
      <Section className="!pt-0 !pb-6 sm:!pb-8">
        <MintTotalCard />
      </Section>

      {/* A club, not a store */}
      <Section className="!pt-0 !pb-6 sm:!pb-8">
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
              className="card gold-wash group p-6 transition hover:border-accent"
            >
              <h3 className="font-display text-xl font-semibold text-text group-hover:text-accent">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
              <span className="mt-4 inline-block text-sm text-accent">Explore →</span>
            </Link>
          ))}
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {homeLearnTiles.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="rounded-2xl border border-border bg-surface/60 px-4 py-4 transition hover:border-accent"
            >
              <p className="font-mono text-[11px] text-accent">Learn</p>
              <p className="mt-1 font-display text-base font-semibold text-text">{t.title}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted">{t.body}</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* Full-width band */}
      <div className="border-y border-border bg-surface">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 py-6 sm:py-7 sm:flex-row sm:items-center sm:px-6">
          <div>
            <h2 className="font-display text-2xl font-semibold text-text sm:text-3xl">
              Never collected a digital pin?
            </h2>
            <p className="mt-2 text-muted">A short path from zero to your first board.</p>
          </div>
          <Link
            href="/start"
            className="pill bg-accent px-6 py-3 text-sm font-medium text-cta-text transition hover:brightness-110"
          >
            Start here
          </Link>
        </div>
      </div>

      {/* Watch the club */}
      <Section className="!pt-6 sm:!pt-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              Watch the club
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-text sm:text-4xl">
              Creators to follow
            </h2>
            <p className="mt-2 max-w-xl text-sm text-muted">
              Independent collectors — views their own. Listing ≠ endorsement.
            </p>
          </div>
          <Link
            href="/community/watch"
            className="hidden text-sm text-accent hover:underline sm:inline"
          >
            Watch &amp; Follow →
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {watchCreators.map((c) => (
            <article key={c.id} className="card p-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <CreatorAvatar
                  src={c.avatarSrc}
                  alt={c.avatarAlt ?? c.name}
                  size={64}
                  className="mt-0.5"
                />
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-xs text-accent">{c.role}</p>
                  <h3 className="mt-1 font-display text-xl font-semibold text-text">{c.name}</h3>
                  {c.aka && (
                    <p className="mt-1 font-mono text-[11px] text-muted">aka {c.aka}</p>
                  )}
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">{c.whyFollow}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {c.links.slice(0, 3).map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pill border border-border px-3 py-1 font-mono text-[11px] text-muted transition hover:border-accent"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
        <Link
          href="/community/watch"
          className="mt-6 inline-block text-sm text-accent hover:underline sm:hidden"
        >
          Watch &amp; Follow →
        </Link>
      </Section>

      {/* Pinsider panel */}
      <Section className="!pt-0">
        <div className="card overflow-hidden p-0">
          <div className="grid lg:grid-cols-2">
            <div className="border-b border-border p-8 lg:border-b-0 lg:border-r">
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                Companion data desk
              </p>
              <h2 className="mt-3">
                <PinSiderLockup
                  markSize={40}
                  markClassName="h-10 w-10"
                  wordmarkSize="lg"
                  withIo
                  label="Pinsider"
                />
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Prices, alerts, and history for collectors who want signal without noise.
                Digital Pin Club stays free and open — Pinsider is optional tooling next
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
                  className="pill inline-flex items-center gap-2 bg-accent px-5 py-2.5 text-sm font-medium text-cta-text hover:brightness-110"
                  aria-label="Open Pinsider"
                >
                  <PinSiderMark className="h-5 w-5 ring-[#0A1628]/20" size={20} />
                  <span>
                    Open <span className="font-semibold">Pinsider</span>
                  </span>
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
                    <span className="inline-flex items-center gap-1.5" aria-label="pinsider.io">
                      <PinSiderMark className="h-4 w-4" size={16} />
                      <PinSiderWordmark withIo size="sm" className="!text-xs text-muted" />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Find us / Connect */}
      <FindUsSection />


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
