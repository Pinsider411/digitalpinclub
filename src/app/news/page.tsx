import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import {
  clubNotes,
  officialNewsIndexUrl,
  pinnacleNewsItems,
  pinnacleNewsSnapshotDate,
} from "@/data/pinnacle-news";

export const metadata: Metadata = {
  title: "News",
  description:
    "Unofficial Pin Press index of recent Disney Pinnacle News — titles and dates with links out to official articles. Digital Pin Club is an independent fan community.",
};

function formatDisplayDate(iso: string): string {
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

export default function NewsPage() {
  return (
    <Section>
      <PageHero
        eyebrow="Pin Press"
        title="News from the hobby"
        description="An unofficial index of recent items from Disney Pinnacle News. We link out to official articles — we don’t republish full posts or licensed artwork."
      />

      <div className="mb-10 space-y-4">
        <div className="card border-accent/40 p-5 sm:p-6">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            Official source
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            For the latest drops, events, and product news, always check Disney Pinnacle
            directly. This page is a curated snapshot for collectors — not a mirror of
            their site.
          </p>
          <a
            href={officialNewsIndexUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex pill bg-cta px-5 py-2.5 text-sm font-medium text-cta-text transition hover:brightness-110"
          >
            View official news on disneypinnacle.com →
          </a>
        </div>

        <p className="rounded-[20px] border border-border bg-surface px-4 py-3 text-sm text-muted">
          <strong className="text-text">Unofficial fan site.</strong> Digital Pin Club is
          an independent collector community — not affiliated with, endorsed by, or
          sponsored by The Walt Disney Company, Dapper Labs, or Disney Pinnacle. Snapshot
          curated {formatDisplayDate(pinnacleNewsSnapshotDate)}. Repeated “Special Welcome
          Offer” posts are deduped here; check the official News page for everything
          current.
        </p>
      </div>

      {/* Club notes — clearly labeled */}
      <div className="mb-12">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-live">
              Club notes
            </p>
            <h2 className="mt-1 font-display text-2xl font-semibold text-text">
              From Digital Pin Club
            </h2>
          </div>
          <p className="font-mono text-[11px] text-muted">Our updates · not official</p>
        </div>
        <ul className="space-y-3">
          {clubNotes.map((note) => (
            <li key={note.title} className="card p-5 sm:p-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] text-live">
                  Club
                </span>
                <p className="font-mono text-xs text-muted">
                  {formatDisplayDate(note.date)}
                </p>
              </div>
              <h3 className="mt-2 font-display text-lg font-semibold text-text">
                {note.href ? (
                  <Link href={note.href} className="hover:text-accent">
                    {note.title}
                  </Link>
                ) : (
                  note.title
                )}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{note.body}</p>
              {note.href && (
                <Link
                  href={note.href}
                  className="mt-3 inline-block font-mono text-xs text-accent hover:underline"
                >
                  Open →
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Official index */}
      <div>
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              Official · Disney Pinnacle
            </p>
            <h2 className="mt-1 font-display text-2xl font-semibold text-text">
              Recent on disneypinnacle.com/news
            </h2>
          </div>
          <a
            href={officialNewsIndexUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-accent hover:underline"
          >
            Full official index →
          </a>
        </div>

        <ul className="space-y-3">
          {pinnacleNewsItems.map((item) => (
            <li key={item.url}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card flex flex-col gap-3 p-5 transition hover:border-accent sm:flex-row sm:items-start sm:gap-6 sm:p-6"
              >
                <div className="shrink-0 sm:w-40">
                  <p className="font-mono text-xs text-muted">
                    {formatDisplayDate(item.date)}
                  </p>
                  {item.category && (
                    <span className="mt-2 inline-block rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] text-accent">
                      {item.category}
                    </span>
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-lg font-semibold text-text">
                    {item.title}
                  </h3>
                  {item.blurb && (
                    <p className="mt-1 text-sm leading-relaxed text-muted">{item.blurb}</p>
                  )}
                  <p className="mt-3 font-mono text-xs text-accent">
                    Read on disneypinnacle.com →
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-8 max-w-2xl text-sm text-muted">
          This list is a snapshot for convenience. Titles and dates mirror the official
          News index; bodies stay on Disney Pinnacle.{" "}
          <a
            href={officialNewsIndexUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Check disneypinnacle.com/news
          </a>{" "}
          for the latest. See our{" "}
          <Link href="/disclaimer" className="text-accent hover:underline">
            disclaimer
          </Link>
          .
        </p>
      </div>
    </Section>
  );
}
