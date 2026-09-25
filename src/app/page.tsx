import Link from "next/link";
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
  imageSrc?: string;
  imageAlt?: string;
  imageCaption?: string;
  cta?: string;
  note?: string;
  live?: boolean;
}[] = [
  {
    label: "Live drop",
    title: "Summer Sunset Event",
    meta: "Sep 25, 9:00 AM PT – Oct 2, 9:00 AM PT · from $4.99",
    body: "Live now — seven sets, 48 pins: four Limited sets (The Little Mermaid, Scrooge's Great Expedition, Disney Retro, Star Wars Pop Art) plus Open Edition Rio 2, Onward, and Disney Princes & Heroes. Standard Pack has a 1-of-1 Genesis chase; trade at 5 / 15 / 30 unique collectors for the event trade pin.",
    href: "https://disneypinnacle.com/releases/376fa147-2d0e-4969-9c37-b2e992e75162",
    imageSrc: "/events/summer-sunset/standard-pack-banner.webp",
    imageAlt: "Summer Sunset Standard Pack official release banner",
    imageCaption: "Official release art · Disney Pinnacle",
    cta: "Official release →",
    note: "Ends Oct 2, 9:00 AM PT. Confirm pricing and pull rates in the Disney Pinnacle app.",
    live: true,
  },
  {
    label: "Live drop · Premium",
    title: "Summer Sunset Premium Pack",
    meta: "Sep 25, 9:00 AM PT – Oct 2, 9:00 AM PT · $99.99 · 300 packs",
    body: "Five Mystery Capsules: a guaranteed Limited Edition, a guaranteed Limited Event Edition, a third Limited pin with a chase shot, and two guaranteed Digital Display variants.",
    href: "https://disneypinnacle.com/releases/9a6626f4-3b23-4836-a246-b19b45653f99",
    imageSrc: "/events/summer-sunset/premium-pack-banner.webp",
    imageAlt: "Summer Sunset Premium Pack official release banner",
    imageCaption: "Official release art · Disney Pinnacle",
    cta: "Official release →",
    note: "Confirm availability and pull rates in the official rules.",
    live: true,
  },
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

];

const learnPath = [
  {
    num: "01",
    href: "/learn/what-are-digital-pins",
    title: "What are digital pins?",
    body: "Friendly intro to the hobby — ownership, Pinbooks, and why collectors care.",
  },
  {
    num: "02",
    href: "/learn/how-drops-work",
    title: "How drops work",
    body: "Storefront, capsules, windows — prepare without the FOMO spiral.",
  },
  {
    num: "03",
    href: "/learn/burns",
    title: "Burns & supply",
    body: "Leftovers, circulating supply, and why the numbers matter on the desk.",
  },
];

export default function HomePage() {
  const watchCreators = getFeaturedThisWeek();
  const featured = thisWeek[0];

  return (
    <>
      {/* Hero */}
      <Section className="!pt-10 sm:!pt-14 !pb-8 sm:!pb-10" id="clubhouse">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="eyebrow mb-3">Independent collectors · Clubhouse</p>
            <h1 className="font-display text-[2.5rem] font-semibold leading-[1.05] text-text sm:text-5xl lg:text-[3.25rem]">
              Welcome to the clubhouse
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-text-soft sm:text-lg">
              A quiet lounge for independent digital pin collectors — follow the board,
              learn the craft, and meet the community. Not a store.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/calendar" className="btn-primary">
                See Drops
              </Link>
              <Link
                href="/learn"
                className="pill border border-border px-5 py-2.5 font-display text-sm font-semibold text-text-soft transition hover:border-muted hover:text-text"
              >
                Start Learning
              </Link>
            </div>
            <p className="mt-5 text-xs text-muted">
              Free to join · Run by collectors ·{" "}
              <Link href="/join" className="text-gold hover:underline">
                Join the Club
              </Link>
            </p>
          </div>

          {featured ? (
            <article className="collectible-card overflow-hidden">
              {featured.imageSrc ? (
                <div className="card-inset m-3 overflow-hidden sm:m-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={featured.imageSrc}
                    alt={featured.imageAlt ?? featured.title}
                    width={600}
                    height={450}
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
              ) : null}
              <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                <span
                  className={`inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${
                    featured.live
                      ? "bg-live/15 text-live"
                      : "bg-gold/10 text-gold"
                  }`}
                >
                  {featured.live ? "On the board" : featured.label}
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold text-text">
                  {featured.title}
                </h3>
                <p className="mt-1 text-xs text-muted">{featured.meta}</p>
                <p className="mt-3 text-sm leading-relaxed text-text-soft">
                  {featured.body}
                </p>
                {featured.href ? (
                  <a
                    href={featured.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex text-sm font-medium text-gold hover:text-gold-soft"
                  >
                    {featured.cta ?? "View details"} ↗
                  </a>
                ) : null}
              </div>
            </article>
          ) : null}
        </div>
      </Section>

      <hr className="section-rule mx-auto max-w-[1160px]" />

      {/* This week on the board */}
      <Section className="!pt-10 sm:!pt-12" id="board">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">This week</p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-text sm:text-4xl">
              This week on the board
            </h2>
            <p className="mt-2 max-w-xl text-sm text-text-soft">
              Spots collectors are watching — clubhouse cards, not product tiles.
            </p>
          </div>
          <Link
            href="/calendar"
            className="hidden text-sm text-gold hover:underline sm:inline"
          >
            Full calendar →
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {thisWeek.map((card) => (
            <article key={card.title} className="collectible-card flex flex-col p-5">
              <div className="flex items-start justify-between gap-3">
                <p
                  className={`text-xs font-semibold uppercase tracking-wider ${
                    card.live ? "text-live" : "text-gold"
                  }`}
                >
                  {card.label}
                </p>
              </div>
              {card.imageSrc ? (
                <figure className="card-inset mt-3 overflow-hidden border border-border-gold/25">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={card.imageSrc}
                    alt={card.imageAlt ?? card.title}
                    width={600}
                    height={450}
                    className="aspect-[4/3] w-full object-cover"
                  />
                  {card.imageCaption ? (
                    <figcaption className="border-t border-border-gold/20 px-2.5 py-1.5 text-[10px] text-muted/80">
                      {card.imageCaption}
                    </figcaption>
                  ) : null}
                </figure>
              ) : null}
              <h3 className="mt-3 font-display text-xl font-semibold text-text">
                {card.title}
              </h3>
              <p className="mt-1 text-xs text-muted">{card.meta}</p>
              <p className="mt-3 text-sm leading-relaxed text-text-soft">{card.body}</p>
              {card.note ? (
                <p className="mt-3 text-[10px] leading-snug text-muted/80">{card.note}</p>
              ) : null}
              {card.href ? (
                <a
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex w-fit items-center gap-1 rounded-full border border-border-gold/50 bg-gold/10 px-3 py-1.5 text-xs font-medium text-gold transition hover:border-gold hover:bg-gold/20"
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
          className="mt-6 inline-block text-sm text-gold hover:underline sm:hidden"
        >
          Full calendar →
        </Link>
      </Section>

      {/* Disney+ Perks — dedicated band (not a board tile) */}
      <Section className="!pt-0 !pb-8" id="disney-plus-perks">
        <article className="collectible-card overflow-hidden">
          <div className="grid lg:grid-cols-[1.15fr_1fr]">
            <div className="flex flex-col p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="eyebrow !mb-0">Disney+ Perks</p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/brand/disney-plus/disney-plus-wordmark.svg"
                  alt="Disney+"
                  width={88}
                  height={48}
                  className="h-5 w-auto shrink-0 opacity-90"
                />
              </div>
              <h2 className="mt-3 font-display text-2xl font-semibold text-text sm:text-3xl">
                Monthly free digital pin
              </h2>
              <p className="mt-2 text-xs text-muted">Disney+ · Opt-in</p>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-text-soft">
                Disney+ subscribers can opt into Disney+ Perks and redeem a monthly Mystery
                Capsule with an Open Edition Disney Pinnacle digital pin. Sign up with the
                same email as your Disney+ account — eligibility and terms live on Disney+.
              </p>
              <p className="mt-3 text-[10px] leading-snug text-muted/80">
                Independent tip · not affiliated with Disney+
              </p>
              <div className="mt-6">
                <a
                  href="https://www.disneyplus.com/perks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center gap-1"
                >
                  Sign up for Perks
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
            <figure className="border-t border-border-gold/30 bg-card-inset lg:border-l lg:border-t-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/events/disney-plus-perks/hero.webp"
                alt="Disney+ Perks Mystery Capsule promotional art"
                width={600}
                height={450}
                className="h-full min-h-[220px] w-full object-cover"
              />
              <figcaption className="border-t border-border-gold/20 px-3 py-2 text-[10px] text-muted/80">
                Official Perks art · Disney Pinnacle
              </figcaption>
            </figure>
          </div>
        </article>
      </Section>

      {/* Drop event band */}
      <Section className="!pt-0 !pb-8" id="drops">
        <div className="overflow-hidden rounded-[18px] border border-border-gold/40 bg-surface">
          <div className="grid lg:grid-cols-[1.2fr_1fr]">
            <div className="p-6 sm:p-8">
              <p className="eyebrow">Live drop event</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-text sm:text-3xl">
                Summer Sunset Event
              </h2>
              <p className="mt-2 text-sm text-muted">Sep 25, 9:00 AM PT – Oct 2, 9:00 AM PT · from $4.99</p>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-text-soft">
                Doors are open — seven sets · Standard $4.99 and Premium $99.99 packs ·
                trade rewards, set-completion backgrounds, and a 1-of-1 Genesis chase.
                Ends Oct 2, 9:00 AM PT.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://disneypinnacle.com/news/summer-sunset-event"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Official details ↗
                </a>
                <Link href="/calendar" className="btn-primary">
                  View on calendar
                </Link>
              </div>
            </div>
            <div className="border-t border-border lg:border-l lg:border-t-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/events/summer-sunset/announce.webp"
                alt="Summer Sunset Event official announce art"
                width={600}
                height={450}
                className="h-full min-h-[200px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Mint desk — preserve live content */}
      <Section className="!pt-0 !pb-8">
        <MintTotalCard />
      </Section>

      <hr className="section-rule mx-auto max-w-[1160px]" />

      {/* Learn path */}
      <Section id="learn">
        <div className="mb-8 max-w-xl">
          <p className="eyebrow">Learn path</p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-text sm:text-4xl">
            Three steps into the hobby
          </h2>
          <p className="mt-2 text-sm text-text-soft">
            Collector-to-collector guides — no storefront pitch.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {learnPath.map((step) => (
            <Link
              key={step.href}
              href={step.href}
              className="card gold-wash flex flex-col gap-3 p-6 transition hover:border-border-gold"
            >
              <span className="font-display text-sm font-semibold tracking-[0.12em] text-gold">
                {step.num}
              </span>
              <h3 className="font-display text-xl font-semibold text-text">{step.title}</h3>
              <p className="text-sm leading-relaxed text-text-soft">{step.body}</p>
              <span className="mt-auto pt-2 text-sm text-gold">Read →</span>
            </Link>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/learn" className="text-sm text-gold hover:underline">
            All guides →
          </Link>
        </div>
      </Section>

      {/* Community / creators */}
      <Section className="!pt-0" id="community">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Community</p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-text sm:text-4xl">
              Creators & hangouts
            </h2>
            <p className="mt-2 max-w-xl text-sm text-text-soft">
              Independent collectors — views their own. Listing ≠ endorsement.
            </p>
          </div>
          <Link
            href="/community/watch"
            className="hidden text-sm text-gold hover:underline sm:inline"
          >
            Watch &amp; Follow →
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {watchCreators.map((c) => (
            <article key={c.id} className="collectible-card p-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <CreatorAvatar
                  src={c.avatarSrc}
                  alt={c.avatarAlt ?? c.name}
                  size={64}
                  className="mt-0.5"
                />
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-gold">{c.role}</p>
                  <h3 className="mt-1 font-display text-xl font-semibold text-text">
                    {c.name}
                  </h3>
                  {c.aka && (
                    <p className="mt-1 text-[11px] text-muted">aka {c.aka}</p>
                  )}
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-text-soft">{c.whyFollow}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {c.links.slice(0, 3).map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pill border border-border px-3 py-1 text-[11px] text-muted transition hover:border-border-gold"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link href="/community" className="text-sm text-gold hover:underline">
            Community hub →
          </Link>
          <Link href="/spotlights" className="text-sm text-gold hover:underline">
            Spotlights →
          </Link>
          <Link
            href="/community/watch"
            className="text-sm text-gold hover:underline sm:hidden"
          >
            Watch &amp; Follow →
          </Link>
        </div>
      </Section>

      {/* Pinsider data desk teaser */}
      <Section className="!pt-0" id="pinsider">
        <div className="card overflow-hidden p-0">
          <div className="grid lg:grid-cols-2">
            <div className="border-b border-border p-8 lg:border-b-0 lg:border-r">
              <p className="eyebrow">Companion data desk</p>
              <h2 className="mt-3">
                <PinSiderLockup
                  markSize={40}
                  markClassName="h-10 w-10"
                  wordmarkSize="lg"
                  withIo
                  label="Pinsider"
                />
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-text-soft">
                Prices, alerts, and history for collectors who want signal without noise.
                Digital Pin Club stays free and open — Pinsider is optional tooling next
                door.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-text-soft">
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
                  className="btn-primary inline-flex items-center gap-2"
                  aria-label="Open Pinsider"
                >
                  <PinSiderMark className="h-5 w-5 ring-[#0A1628]/20" size={20} />
                  <span>
                    Open <span className="font-semibold">Pinsider</span>
                  </span>
                </a>
                <Link href="/pinsider" className="btn-secondary">
                  Learn more
                </Link>
              </div>
            </div>
            <div className="bg-card-inset/60 p-8">
              <div className="space-y-3">
                {["Floor pulse", "Watchlist alerts", "Set history"].map((row) => (
                  <div
                    key={row}
                    className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3"
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

      {/* Find us */}
      <FindUsSection />

      {/* Digest */}
      <Section className="!pt-0">
        <div className="rounded-[18px] border border-border-gold/35 bg-surface px-6 py-10 sm:px-10">
          <p className="eyebrow">Sunday digest</p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-text">
            Pin Press in your inbox
          </h2>
          <p className="mt-3 max-w-lg text-sm text-text-soft">
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
