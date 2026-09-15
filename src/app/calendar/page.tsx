import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ReleaseTimeline } from "@/components/ReleaseTimeline";
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
        description="An unofficial index of 225 Disney Pinnacle releases from the official Releases page — from Star Wars Holiday / earliest through current — with availability windows when known, optional prices, and More info links out."
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
          curated {formatSnapshotDate(pinnacleReleasesSnapshotDate)}. This index lists{" "}
          <strong className="text-text">{pinnacleReleases.length} releases</strong> from
          the official Releases page (Star Wars Holiday / earliest through current), each
          with a More info link out. Some older cards may lack parsed date windows — always
          check the{" "}
          <a
            href={officialReleasesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            official Releases page
          </a>{" "}
          for the live catalog. See our{" "}
          <Link href="/disclaimer" className="text-accent hover:underline">
            disclaimer
          </Link>
          .
        </p>
      </div>

      <ReleaseTimeline releases={pinnacleReleases} />

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
        ; details and artwork stay on Disney Pinnacle.
      </p>
    </Section>
  );
}
