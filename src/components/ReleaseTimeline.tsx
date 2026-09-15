"use client";

import { useMemo, useState } from "react";
import type { PinnacleRelease } from "@/data/pinnacle-releases";

type YearKey = string; // "2026" | "2025" | "2024" | "undated"

function yearOf(release: PinnacleRelease): YearKey {
  return release.startDate ? release.startDate.slice(0, 4) : "undated";
}

function yearLabel(key: YearKey): string {
  return key === "undated" ? "Undated" : key;
}

type Props = {
  releases: PinnacleRelease[];
};

export function ReleaseTimeline({ releases }: Props) {
  const years = useMemo(() => {
    const set = new Set<YearKey>();
    for (const r of releases) set.add(yearOf(r));
    const dated = [...set].filter((y) => y !== "undated").sort((a, b) => b.localeCompare(a));
    return set.has("undated") ? [...dated, "undated"] : dated;
  }, [releases]);

  const [filter, setFilter] = useState<YearKey | "all">("all");

  const visible = useMemo(() => {
    if (filter === "all") return releases;
    return releases.filter((r) => yearOf(r) === filter);
  }, [releases, filter]);

  const groups = useMemo(() => {
    const map = new Map<YearKey, PinnacleRelease[]>();
    for (const r of visible) {
      const y = yearOf(r);
      const list = map.get(y);
      if (list) list.push(r);
      else map.set(y, [r]);
    }
    const order =
      filter === "all"
        ? years
        : years.filter((y) => y === filter);
    return order
      .filter((y) => map.has(y))
      .map((y) => ({ year: y, items: map.get(y)! }));
  }, [visible, years, filter]);

  return (
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
          Newest first · {visible.length}
          {filter !== "all" ? ` of ${releases.length}` : ""} listed
        </p>
      </div>

      <div className="sticky top-0 z-20 -mx-1 mb-6 border-b border-border bg-bg/95 px-1 py-3 backdrop-blur-sm">
        <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-muted">
          Filter by year
        </p>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={`rounded-full border px-3 py-1.5 font-mono text-xs transition ${
              filter === "all"
                ? "border-accent bg-accent/15 text-text"
                : "border-border bg-card text-muted hover:border-accent/50 hover:text-text"
            }`}
          >
            All ({releases.length})
          </button>
          {years.map((y) => {
            const count = releases.filter((r) => yearOf(r) === y).length;
            return (
              <button
                key={y}
                type="button"
                onClick={() => setFilter(y)}
                className={`rounded-full border px-3 py-1.5 font-mono text-xs transition ${
                  filter === y
                    ? "border-accent bg-accent/15 text-text"
                    : "border-border bg-card text-muted hover:border-accent/50 hover:text-text"
                }`}
              >
                {yearLabel(y)} ({count})
              </button>
            );
          })}
        </div>
      </div>

      <div className="space-y-10">
        {groups.map(({ year, items }) => (
          <section key={year} id={`year-${year}`} className="scroll-mt-24">
            <div className="mb-4 flex items-baseline gap-3 border-b border-border pb-2">
              <h3 className="font-display text-xl font-semibold text-text">
                {yearLabel(year)}
              </h3>
              <span className="font-mono text-[11px] text-muted">
                {items.length} release{items.length === 1 ? "" : "s"}
              </span>
            </div>
            <ul className="space-y-3">
              {items.map((release) => (
                <li
                  key={release.id}
                  className="card flex flex-col gap-3 p-5 sm:flex-row sm:items-start sm:gap-6 sm:p-6"
                >
                  <div className="shrink-0 sm:w-40">
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
                    <h4 className="font-display text-lg font-semibold text-text">
                      {release.title}
                    </h4>
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
          </section>
        ))}
      </div>
    </div>
  );
}
