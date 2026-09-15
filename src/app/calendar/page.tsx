import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import {
  officialReleasesUrl,
  pinnacleReleases,
  pinnacleReleasesSnapshotDate,
} from "@/data/pinnacle-releases";

export const metadata: Metadata = {
  title: "Release calendar",
  description:
    "Unofficial chronological history of Disney Pinnacle releases — availability windows, prices when listed, and links to official release pages. Digital Pin Club is an independent fan community.",
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
        description="A chronological snapshot of Disney Pinnacle releases currently listed on the official Releases page — availability windows, optional prices, and links out for full details."
      />

      <div className="mb-10 space-y-4">
        <div className="card border-accent/40 p-5 sm:p-6">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            Official source
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            For the complete live catalog, drop timing, and purchase options, always check
            Disney Pinnacle Releases directly. This page is an unofficial collector
            snapshot — text and UI only, no licensed artwork.
          </p>
          <a
            href={officialReleasesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex pill bg-cta px-5 py-2.5 text-sm font-medium text-white transition hover:brightness-110"
          >
            View official releases on disneypinnacle.com →
          </a>
        </div>

        <p className="rounded-[20px] border border-border bg-surface px-4 py-3 text-sm text-muted">
          <strong className="text-text">Unofficial fan site.</strong> Digital Pin Club is
          an independent collector community — not affiliated with, endorsed by, or
          sponsored by The Walt Disney Company, Dapper Labs, or Disney Pinnacle. Snapshot
          curated {formatSnapshotDate(pinnacleReleasesSnapshotDate)}. The official page
          uses infinite scroll; this index covers the {pinnacleReleases.length} releases
          listed on the initial page load — always check the official Releases page for
          the complete live catalog.
        </p>
      </div>

      <div>
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              Official · Disney Pinnacle
            </p>
            <h2 className="mt-1 font-display text-2xl font-semibold text-text">
              Release timeline
            </h2>
          </div>
          <p className="font-mono text-[11px] text-muted">
            Newest first · {pinnacleReleases.length} listed
          </p>
        </div>

        <ul className="space-y-3">
          {pinnacleReleases.map((release) => (
            <li key={release.id} className="card flex flex-col gap-3 p-5 sm:flex-row sm:items-start sm:gap-6 sm:p-6">
              <div className="shrink-0 sm:w-44">
                <p className="font-mono text-xs leading-relaxed text-muted">
                  {release.dateLabel}
                </p>
                {release.price && (
                  <span className="mt-2 inline-block rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] text-accent">
                    {release.price}
                  </span>
                )}
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-display text-lg font-semibold text-text">
                  {release.title}
                </h3>
                {release.excerpt && (
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {release.excerpt}
                  </p>
                )}
                <a
                  href={release.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block font-mono text-xs text-accent hover:underline"
                >
                  More info →
                </a>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-8 max-w-2xl text-sm text-muted">
          This list is an unofficial snapshot for convenience. Titles, windows, and prices
          mirror what was listed on{" "}
          <a
            href={officialReleasesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            disneypinnacle.com/releases
          </a>
          ; details and artwork stay on Disney Pinnacle. See our{" "}
          <Link href="/disclaimer" className="text-accent hover:underline">
            disclaimer
          </Link>
          .
        </p>
      </div>
    </Section>
  );
}
