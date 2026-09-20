import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { PinDisclaimer } from "@/components/PinDisclaimer";
import {
  buildSpotlightNarrative,
  clubFounder,
  formatCount,
  formatUsd,
  spotlightsData,
  type SpotlightCollector,
} from "@/data/spotlights";

export const metadata: Metadata = {
  title: "Spotlights",
  description:
    "Collector spotlights from Digital Pin Club — Watch Pinnacle–style profiles with stats from indexed on-chain activity.",
};

function StatCell({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-bg/40 px-3 py-3 sm:px-4">
      <p className="font-mono text-[10px] uppercase tracking-wider text-muted">{label}</p>
      <p className="mt-1 font-display text-lg font-semibold text-text sm:text-xl">{value}</p>
    </div>
  );
}

function CollectorCard({ collector, featured }: { collector: SpotlightCollector; featured?: boolean }) {
  const narrative = buildSpotlightNarrative(collector);
  const tradeUrl =
    collector.tradeUrl ??
    `https://disneypinnacle.com/trade?user=${encodeURIComponent(collector.handle)}`;

  return (
    <article
      className={`card overflow-hidden p-0 ${featured ? "sm:col-span-2 lg:col-span-2" : ""}`}
    >
      <div className="border-b border-border bg-surface/60 px-5 py-5 sm:px-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            {collector.rankLabel && (
              <p className="font-mono text-xs text-accent">{collector.rankLabel}</p>
            )}
            <h2 className="mt-1 font-display text-2xl font-semibold text-text sm:text-3xl">
              {collector.handle}
            </h2>
            <p className="mt-1 font-mono text-[11px] text-muted">{collector.address}</p>
          </div>
          <div className="flex flex-col items-stretch gap-2 sm:items-end">
            <div className="flex flex-wrap items-center justify-end gap-2">
              <a
                href={tradeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pill bg-cta px-4 py-2 text-xs font-medium text-cta-text transition hover:brightness-110"
              >
                Trade with me
              </a>
              <a
                href={collector.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pill border border-border bg-card px-4 py-2 text-xs font-medium text-text transition hover:border-accent"
              >
                View on Watch Pinnacle →
              </a>
            </div>
            <p className="font-mono text-[11px] text-muted sm:text-right">
              Trade with me opens on Disney Pinnacle
            </p>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {collector.badges.map((badge) => (
            <span
              key={badge}
              className="pill border border-border bg-card px-3 py-1 font-mono text-[11px] text-muted"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      <div className="px-5 py-5 sm:px-6 sm:py-6">
        {narrative && (
          <p className="mb-5 text-sm leading-relaxed text-muted">{narrative}</p>
        )}
        {collector.recent && (
          <p className="mb-5 rounded-2xl border border-live/30 bg-live/10 px-4 py-3 font-mono text-xs text-text">
            <span className="text-live">On a roll · </span>
            {collector.recent}
          </p>
        )}

        <div
          className={`grid gap-3 ${
            collector.listingsValue != null
              ? "grid-cols-2 sm:grid-cols-4"
              : "grid-cols-2 sm:grid-cols-3"
          }`}
        >
          <StatCell label="Pins held" value={formatCount(collector.pinsHeld)} />
          <StatCell label="Est. ASP value" value={formatUsd(collector.valueAsp)} />
          <StatCell label="Low ask" value={formatUsd(collector.valueLowAsk)} />
          {collector.listingsValue != null && (
            <StatCell label="Listings value" value={formatUsd(collector.listingsValue)} />
          )}
        </div>

        {featured &&
          collector.allTimeAcquired != null &&
          collector.mints != null &&
          collector.capsulesOpened != null &&
          collector.tradesCompleted != null &&
          collector.marketSpent != null &&
          collector.marketEarned != null && (
            <div className="mt-4 grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
              <StatCell label="Acquired all-time" value={formatCount(collector.allTimeAcquired)} />
              <StatCell label="Mints" value={formatCount(collector.mints)} />
              <StatCell label="Capsules" value={formatCount(collector.capsulesOpened)} />
              <StatCell label="Trades" value={formatCount(collector.tradesCompleted)} />
              <StatCell label="Market spent" value={formatUsd(collector.marketSpent)} />
              <StatCell label="Market earned" value={formatUsd(collector.marketEarned)} />
            </div>
          )}

        {collector.favoriteSets && collector.favoriteSets.length > 0 && (
          <div className="mt-5">
            <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
              Favorite sets
            </p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {collector.favoriteSets.map((set) => (
                <li
                  key={set}
                  className="rounded-xl border border-border bg-bg/40 px-3 py-1.5 text-xs text-text"
                >
                  {set}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
}

export default function SpotlightsPage() {
  const { collectors, updatedAt, sourceNote, watchPinnacleSpotlightUrl } = spotlightsData;
  const [featured, ...rest] = collectors;

  return (
    <Section>
      <PageHero
        eyebrow="Weekly rotation"
        title="Collector spotlights"
        description="Rotates weekly · stats from Watch Pinnacle indexed activity. Faces and boards from the hobby — attributed clearly, estimated values only."
      />

      {/* Club founder — separate from Watch Pinnacle featured collectors */}
      <div className="mb-10 card border-accent/40 overflow-hidden p-0">
        <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-start sm:justify-between sm:gap-8 sm:p-8">
          <div className="min-w-0 flex-1">
            <p className="font-mono text-xs uppercase tracking-widest text-live">Club note</p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-text">
              {clubFounder.handle}
            </h2>
            <p className="mt-1 font-mono text-xs text-accent">{clubFounder.role}</p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
              {clubFounder.blurb}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a
                href={clubFounder.tradeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pill bg-cta px-5 py-2.5 text-sm font-medium text-cta-text transition hover:brightness-110"
              >
                Trade with me
              </a>
              <a
                href={clubFounder.xUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pill border border-accent px-5 py-2.5 text-sm font-medium text-accent transition hover:bg-accent/10"
              >
                X · @Apache1999
              </a>
            </div>
            <p className="mt-2 font-mono text-[11px] text-muted">
              Trade with me opens on Disney Pinnacle
            </p>
          </div>
          <figure className="mx-auto w-40 shrink-0 sm:mx-0 sm:w-48 md:w-56">
            <a
              href={clubFounder.pinbookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block transition hover:opacity-90"
            >
              <div className="overflow-hidden rounded-xl border border-border bg-bg/60">
                <Image
                  src="/club/apache1999-pinbook.jpg"
                  alt="@apache1999 Pinbook page — some favorite pins"
                  width={1000}
                  height={1755}
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, 224px"
                />
              </div>
              <figcaption className="mt-2 text-center font-mono text-[10px] text-muted">
                some of my favorite pins
              </figcaption>
            </a>
          </figure>
        </div>
        <div className="border-t border-border px-6 py-3 sm:px-8">
          <PinDisclaimer />
        </div>
      </div>

      <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            Featured collectors
          </p>
          <h2 className="mt-1 font-display text-2xl font-semibold text-text">
            Watch Pinnacle–style spotlights
          </h2>
        </div>
        <p className="font-mono text-[11px] text-muted">Updated {updatedAt}</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {featured && <CollectorCard collector={featured} featured />}
        {rest.map((c) => (
          <CollectorCard key={c.address} collector={c} />
        ))}
      </div>

      <div className="mt-10 space-y-4">
        <div className="rounded-[20px] border border-border bg-surface px-5 py-5 sm:px-6">
          <p className="text-sm leading-relaxed text-muted">
            Collector stats on this page come from{" "}
            <a
              href={watchPinnacleSpotlightUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-2"
            >
              Watch Pinnacle
            </a>{" "}
            public profiles / on-chain index ({sourceNote}). History before mid-2024 may
            still be backfilling; values are estimates (ASP / low ask), not offers to buy or
            sell. Featured pin stills nearby are club examples collectors talk about — not
            official product pages.
          </p>
          <a
            href={watchPinnacleSpotlightUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex pill bg-accent px-5 py-2.5 text-sm font-medium text-cta-text transition hover:brightness-110"
          >
            See Collector of the Day on Watch Pinnacle →
          </a>
        </div>
      </div>
    </Section>
  );
}
