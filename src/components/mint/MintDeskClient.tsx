"use client";

import { useMemo, useState } from "react";
import {
  displayEditionTitle,
  type PinEdition,
} from "@/data/pin-editions";

const PAGE_SIZE = 50;

const PARALLEL_FILTERS = [
  { value: "all", label: "Parallel: All" },
  { value: "Standard", label: "Standard" },
  { value: "Silver Sparkle", label: "Silver Sparkle" },
  { value: "Golden", label: "Golden" },
  { value: "Digital Display", label: "Digital Display" },
] as const;

type ParallelFilter = (typeof PARALLEL_FILTERS)[number]["value"];

type SortKey =
  | "supply-desc"
  | "supply-asc"
  | "updated-desc"
  | "edition-asc"
  | "edition-desc";

const SORT_OPTIONS: { value: SortKey; label: string }[] = [
  { value: "supply-desc", label: "Sort: Supply high" },
  { value: "supply-asc", label: "Sort: Supply low" },
  { value: "updated-desc", label: "Sort: Recently updated" },
  { value: "edition-asc", label: "Sort: Edition id ↑" },
  { value: "edition-desc", label: "Sort: Edition id ↓" },
];

function formatInt(n: number): string {
  return new Intl.NumberFormat("en-US").format(n);
}

function formatUpdated(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "—";
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(d);
}

function matchesSearch(edition: PinEdition, q: string): boolean {
  if (!q) return true;
  const hay = [
    displayEditionTitle(edition),
    edition.name ?? "",
    edition.parallel ?? "",
    String(edition.editionId),
  ]
    .join(" ")
    .toLowerCase();
  return hay.includes(q);
}

function sortEditions(list: PinEdition[], sort: SortKey): PinEdition[] {
  const copy = [...list];
  copy.sort((a, b) => {
    switch (sort) {
      case "supply-asc":
        return a.numMinted - b.numMinted || a.editionId - b.editionId;
      case "updated-desc":
        return (
          new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime() ||
          b.editionId - a.editionId
        );
      case "edition-asc":
        return a.editionId - b.editionId;
      case "edition-desc":
        return b.editionId - a.editionId;
      case "supply-desc":
      default:
        return b.numMinted - a.numMinted || a.editionId - b.editionId;
    }
  });
  return copy;
}

export function MintDeskClient({ editions }: { editions: PinEdition[] }) {
  const [query, setQuery] = useState("");
  const [parallel, setParallel] = useState<ParallelFilter>("all");
  const [sort, setSort] = useState<SortKey>("supply-desc");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const base = editions.filter((e) => {
      if (parallel !== "all" && e.parallel !== parallel) return false;
      return matchesSearch(e, q);
    });
    return sortEditions(base, sort);
  }, [editions, query, parallel, sort]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, pageCount);
  const sliceStart = (safePage - 1) * PAGE_SIZE;
  const pageRows = filtered.slice(sliceStart, sliceStart + PAGE_SIZE);

  function resetPage() {
    setPage(1);
  }

  return (
    <div>
      <div className="mb-4 flex flex-wrap gap-3">
        <label className="sr-only" htmlFor="mint-search">
          Search pin designs
        </label>
        <input
          id="mint-search"
          type="search"
          placeholder="Search name, edition id, parallel…"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            resetPage();
          }}
          className="min-w-[220px] flex-1 rounded-[10px] border border-border bg-card px-3.5 py-3 text-sm text-text placeholder:text-muted/70 outline-none focus:border-accent/50"
        />
        <label className="sr-only" htmlFor="mint-parallel">
          Parallel filter
        </label>
        <select
          id="mint-parallel"
          value={parallel}
          onChange={(e) => {
            setParallel(e.target.value as ParallelFilter);
            resetPage();
          }}
          className="rounded-[10px] border border-border bg-card px-3.5 py-3 text-sm text-text outline-none focus:border-accent/50"
        >
          {PARALLEL_FILTERS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <label className="sr-only" htmlFor="mint-sort">
          Sort
        </label>
        <select
          id="mint-sort"
          value={sort}
          onChange={(e) => {
            setSort(e.target.value as SortKey);
            resetPage();
          }}
          className="rounded-[10px] border border-border bg-card px-3.5 py-3 text-sm text-text outline-none focus:border-accent/50"
        >
          {SORT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <p className="mb-3 font-mono text-[11px] text-muted">
        Showing {filtered.length === 0 ? 0 : sliceStart + 1}–
        {Math.min(sliceStart + PAGE_SIZE, filtered.length)} of{" "}
        {formatInt(filtered.length)}
        {filtered.length !== editions.length
          ? ` (filtered from ${formatInt(editions.length)})`
          : ""}
      </p>

      {/* Desktop / tablet table */}
      <div className="hidden overflow-x-auto rounded-[14px] border border-border bg-card md:block">
        <table className="w-full min-w-[720px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-surface/80">
              <th className="px-4 py-3 font-mono text-[11px] font-medium uppercase tracking-wider text-muted">
                Pin
              </th>
              <th className="px-4 py-3 font-mono text-[11px] font-medium uppercase tracking-wider text-muted">
                Edition id
              </th>
              <th className="px-4 py-3 font-mono text-[11px] font-medium uppercase tracking-wider text-muted">
                Num minted
              </th>
              <th className="px-4 py-3 font-mono text-[11px] font-medium uppercase tracking-wider text-muted">
                Effective supply
              </th>
              <th className="px-4 py-3 font-mono text-[11px] font-medium uppercase tracking-wider text-muted">
                Updated
              </th>
            </tr>
          </thead>
          <tbody>
            {pageRows.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="px-4 py-10 text-center text-sm text-muted"
                >
                  No editions match this search.
                </td>
              </tr>
            ) : (
              pageRows.map((row) => {
                const title = displayEditionTitle(row);
                return (
                  <tr
                    key={row.editionId}
                    className="border-b border-border/80 last:border-b-0"
                  >
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-3">
                        <span
                          className="h-9 w-9 shrink-0 rounded-full border border-border bg-[radial-gradient(circle_at_30%_30%,#3a4254,#13243F)]"
                          aria-hidden
                        />
                        <div className="min-w-0">
                          <p className="truncate font-medium text-text">
                            {title}
                          </p>
                          <p className="truncate font-mono text-[11px] text-muted">
                            {row.parallel ?? "—"}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3.5 font-mono text-muted">
                      {row.editionId}
                    </td>
                    <td className="px-4 py-3.5 font-mono text-text">
                      {formatInt(row.numMinted)}
                    </td>
                    <td className="px-4 py-3.5 font-mono text-muted">
                      {row.effectiveSupply != null
                        ? formatInt(row.effectiveSupply)
                        : "—"}
                    </td>
                    <td className="px-4 py-3.5 font-mono text-[12px] text-muted">
                      {formatUpdated(row.updatedAt)}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <ul className="space-y-3 md:hidden">
        {pageRows.length === 0 ? (
          <li className="card px-4 py-8 text-center text-sm text-muted">
            No editions match this search.
          </li>
        ) : (
          pageRows.map((row) => {
            const title = displayEditionTitle(row);
            return (
              <li key={row.editionId} className="card p-4">
                <div className="flex items-start gap-3">
                  <span
                    className="mt-0.5 h-9 w-9 shrink-0 rounded-full border border-border bg-[radial-gradient(circle_at_30%_30%,#3a4254,#13243F)]"
                    aria-hidden
                  />
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-text">{title}</p>
                    <p className="mt-0.5 font-mono text-[11px] text-muted">
                      {row.parallel ?? "—"} · #{row.editionId}
                    </p>
                    <dl className="mt-3 grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <dt className="font-mono text-[10px] uppercase tracking-wider text-muted">
                          Num minted
                        </dt>
                        <dd className="font-mono text-text">
                          {formatInt(row.numMinted)}
                        </dd>
                      </div>
                      <div>
                        <dt className="font-mono text-[10px] uppercase tracking-wider text-muted">
                          Effective
                        </dt>
                        <dd className="font-mono text-text">
                          {row.effectiveSupply != null
                            ? formatInt(row.effectiveSupply)
                            : "—"}
                        </dd>
                      </div>
                      <div className="col-span-2">
                        <dt className="font-mono text-[10px] uppercase tracking-wider text-muted">
                          Updated
                        </dt>
                        <dd className="font-mono text-muted">
                          {formatUpdated(row.updatedAt)}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </li>
            );
          })
        )}
      </ul>

      {pageCount > 1 ? (
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            disabled={safePage <= 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="pill border border-border px-4 py-2 text-sm text-text disabled:cursor-not-allowed disabled:opacity-40"
          >
            Previous
          </button>
          <p className="font-mono text-xs text-muted">
            Page {safePage} / {pageCount}
          </p>
          <button
            type="button"
            disabled={safePage >= pageCount}
            onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
            className="pill border border-border px-4 py-2 text-sm text-text disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
          </button>
        </div>
      ) : null}
    </div>
  );
}
