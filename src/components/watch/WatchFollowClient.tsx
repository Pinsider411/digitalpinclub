"use client";

import { useMemo, useState } from "react";
import {
  FILTER_CHIPS,
  creators,
  hubChannel,
  type ContentTag,
  type Creator,
  type FeaturedItem,
} from "@/data/creators";
import { YouTubeEmbed } from "./YouTubeEmbed";

function PlatformChips({ creator }: { creator: Creator }) {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {creator.links.map((l) => (
        <a
          key={l.href}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          className="pill border border-border px-3 py-1 font-mono text-[11px] text-muted transition hover:border-accent hover:text-accent"
        >
          {l.label}
        </a>
      ))}
    </div>
  );
}

function FeaturedBlock({ item }: { item: FeaturedItem }) {
  if (item.videoId) {
    return (
      <div className="mt-4 space-y-2">
        <p className="font-mono text-[11px] text-accent">{item.title}</p>
        <YouTubeEmbed videoId={item.videoId} title={item.title} />
      </div>
    );
  }

  const href = item.href ?? "#";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 block rounded-xl border border-border bg-bg/60 p-4 transition hover:border-accent"
    >
      <p className="font-mono text-[11px] text-accent">Featured topic</p>
      <p className="mt-1 font-display text-base font-semibold text-text">{item.title}</p>
      {item.note && <p className="mt-2 text-xs leading-relaxed text-muted">{item.note}</p>}
      <p className="mt-3 font-mono text-[11px] text-accent">Open channel →</p>
    </a>
  );
}

function CreatorCard({ creator }: { creator: Creator }) {
  return (
    <article className="card flex flex-col p-6">
      <p className="font-mono text-xs text-accent">{creator.role}</p>
      <h3 className="mt-2 font-display text-xl font-semibold text-text">{creator.name}</h3>
      {creator.aka && (
        <p className="mt-1 font-mono text-[11px] text-muted">aka {creator.aka}</p>
      )}
      <p className="mt-3 text-sm leading-relaxed text-muted">{creator.whyFollow}</p>
      <PlatformChips creator={creator} />
      <div className="mt-2 flex flex-wrap gap-1.5">
        {creator.tags.map((t) => (
          <span
            key={t}
            className="pill border border-border px-2 py-0.5 font-mono text-[10px] text-muted"
          >
            {t}
          </span>
        ))}
      </div>
      {creator.featured.slice(0, 3).map((item) => (
        <FeaturedBlock key={item.title} item={item} />
      ))}
    </article>
  );
}

function FeaturedWeekCard({ creator }: { creator: Creator }) {
  const primary = creator.links[0];
  return (
    <article className="glass rounded-[20px] p-5">
      <p className="font-mono text-xs text-live">Featured</p>
      <h3 className="mt-2 font-display text-lg font-semibold text-text">{creator.name}</h3>
      {creator.aka && (
        <p className="mt-1 font-mono text-[10px] text-muted">aka {creator.aka}</p>
      )}
      <p className="mt-2 text-sm leading-relaxed text-muted">{creator.whyFollow}</p>
      {primary && (
        <a
          href={primary.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block font-mono text-xs text-accent hover:underline"
        >
          Follow on {primary.label} →
        </a>
      )}
    </article>
  );
}

export function WatchFollowClient({
  featuredWeek,
}: {
  featuredWeek: Creator[];
}) {
  const [filter, setFilter] = useState<ContentTag | "All">("All");

  const filtered = useMemo(() => {
    if (filter === "All") return creators;
    return creators.filter((c) => c.tags.includes(filter));
  }, [filter]);

  return (
    <div className="space-y-10">
      <div>
        <p className="font-mono text-xs uppercase tracking-widest text-accent">
          Featured this week
        </p>
        <h2 className="mt-2 font-display text-2xl font-semibold text-text sm:text-3xl">
          Who to watch right now
        </h2>
        <p className="mt-2 max-w-xl text-sm text-muted">
          Rotates from <span className="font-mono text-xs">creators.ts</span> — swap IDs
          anytime.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {featuredWeek.map((c) => (
            <FeaturedWeekCard key={`feat-${c.id}`} creator={c} />
          ))}
        </div>
      </div>

      <div className="card border-accent/30 p-6 sm:p-8">
        <p className="font-mono text-xs text-accent">Hub channel</p>
        <h2 className="mt-2 font-display text-2xl font-semibold text-text">
          {hubChannel.name}
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
          {hubChannel.blurb}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {hubChannel.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="pill border border-border px-4 py-2 text-sm text-text transition hover:border-accent"
            >
              {l.label} →
            </a>
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-display text-2xl font-semibold text-text sm:text-3xl">
          Creators
        </h2>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setFilter("All")}
            className={`pill px-4 py-2 font-mono text-xs transition ${
              filter === "All"
                ? "bg-accent text-cta-text"
                : "border border-border text-muted hover:border-accent"
            }`}
          >
            All
          </button>
          {FILTER_CHIPS.map((chip) => (
            <button
              key={chip}
              type="button"
              onClick={() => setFilter(chip)}
              className={`pill px-4 py-2 font-mono text-xs transition ${
                filter === chip
                  ? "bg-accent text-cta-text"
                  : "border border-border text-muted hover:border-accent"
              }`}
            >
              {chip}
            </button>
          ))}
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((c) => (
            <CreatorCard key={c.id} creator={c} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="mt-4 text-sm text-muted">
            No creators match that filter yet — try All.
          </p>
        )}
      </div>
    </div>
  );
}
