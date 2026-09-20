import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ReleaseTimeline } from "@/components/ReleaseTimeline";
import { Section } from "@/components/Section";
import { calendarEvents } from "@/data/calendar-events";
import {
  officialReleasesUrl,
  pinnacleReleases,
  pinnacleReleasesSnapshotDate,
} from "@/data/pinnacle-releases";

export const metadata: Metadata = {
  title: "Release calendar",
  description:
    "Chronological history of Disney Pinnacle releases — availability windows, prices when listed, and links to official release pages.",
};

function formatSnapshotDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return iso;
  const dt = new Date(Date.UTC(y, m - 1, d));
  return dt.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

export default function CalendarPage() {
  return (
    <Section>
      <PageHero
        eyebrow="Schedule"
        title="Release calendar / history"
        description="An index of 225 Disney Pinnacle releases from the official Releases page — from Star Wars Holiday / earliest through current — with availability windows when known, optional prices, and More info links out."
      />

      {calendarEvents.length > 0 ? (
        <div className="mb-10">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-live">
                Happening now
              </p>
              <h2 className="mt-1 font-display text-2xl font-semibold text-text">
                Current events
              </h2>
            </div>
            <p className="font-mono text-[11px] text-muted">
              Confirm timing officially
            </p>
          </div>
          <ul className="space-y-3">
            {calendarEvents.map((event) => (
              <li key={event.id} className="card border-accent/30 p-5 sm:p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`rounded-full border px-2.5 py-0.5 font-mono text-[11px] ${
                      event.chipTone === "live"
                        ? "border-live/40 bg-live/10 text-live"
                        : "border-accent/40 bg-accent/10 text-accent"
                    }`}
                  >
                    {event.chip}
                  </span>
                  <p className="font-mono text-xs text-muted">{event.dates}</p>
                </div>
                <h3 className="mt-2 font-display text-lg font-semibold text-text">
                  {event.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {event.oneLiner}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <a
                    href={event.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-accent/40 bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent transition hover:border-accent hover:bg-accent/20"
                  >
                    {event.cta ?? "More info →"}
                    <span aria-hidden="true">↗</span>
                  </a>
                  {event.secondaryHref ? (
                    <a
                      href={event.secondaryHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-muted hover:text-accent hover:underline"
                    >
                      {event.secondaryCta ?? "Source"} ↗
                    </a>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="mb-10 space-y-4">
        <div className="card border-accent/40 p-5 sm:p-6">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            Official source
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            For the complete live catalog, drop timing, and purchase options, always check
            Disney Pinnacle Releases directly. This page is a collector snapshot —
            text and UI only, no licensed artwork.
          </p>
          <a
            href={officialReleasesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex pill bg-cta px-5 py-2.5 text-sm font-medium text-cta-text transition hover:brightness-110"
          >
            View official releases on disneypinnacle.com →
          </a>
        </div>

        <p className="rounded-[20px] border border-border bg-surface px-4 py-3 text-sm text-muted">
          Snapshot curated {formatSnapshotDate(pinnacleReleasesSnapshotDate)}. This index
          lists{" "}
          <strong className="text-text">{pinnacleReleases.length} releases</strong> from
          the official Releases page (Star Wars Holiday / earliest through current), each
          with a More info link out and availability window. Always check the{" "}
          <a
            href={officialReleasesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            official Releases page
          </a>{" "}
          for the live catalog.
        </p>
      </div>

      <ReleaseTimeline releases={pinnacleReleases} />

      <p className="mt-8 max-w-2xl text-sm text-muted">
        This list is a snapshot for convenience. Titles, windows, and prices
        mirror what was listed on{" "}
        <a
          href={officialReleasesUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          disneypinnacle.com/releases
        </a>
        ; details and artwork stay on Disney Pinnacle.
      </p>
    </Section>
  );
}
