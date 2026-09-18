import type { Metadata } from "next";
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
