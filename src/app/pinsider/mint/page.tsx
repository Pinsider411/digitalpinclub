import type { Metadata } from "next";
import Link from "next/link";
import { MintDeskClient } from "@/components/mint/MintDeskClient";
import { PinSiderLockup } from "@/components/PinSiderMark";
import { Section } from "@/components/Section";
import { getMintTotals } from "@/data/mint-totals";
import { getPinEditions } from "@/data/pin-editions";

export const metadata: Metadata = {
  title: "Mint desk · Pinsider",
  description:
    "Estimated mint totals and per-design supply from the Pinsider mint index, with last-pulled sync time.",
};

export const revalidate = 300;

function formatInt(n: number): string {
  return new Intl.NumberFormat("en-US").format(n);
}

function formatUpdatedChip(iso: string, fallbackLabel: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return `Updated ${fallbackLabel}`;
  const time = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(d);
  return `Updated ${time} PT`;
}

const DISCLAIMER =
  "Unofficial fan index · verify on Disney Pinnacle · OE totals move while windows are open · LE can drop after burns";

export default async function MintDeskPage() {
  const [totals, editions] = await Promise.all([
    getMintTotals(),
    getPinEditions(),
  ]);

  const isLive = totals.status === "live" && totals.estimatedTotal != null;
  const totalDisplay = isLive
    ? formatInt(totals.estimatedTotal!)
    : "Indexing…";
  const updatedChip = isLive
    ? `Updated ${totals.updatedLabel}`
    : formatUpdatedChip(totals.updatedAt, totals.updatedLabel);
  const effective =
    totals.estimatedEffectiveSupply != null &&
    Number.isFinite(totals.estimatedEffectiveSupply)
      ? formatInt(totals.estimatedEffectiveSupply)
      : "—";

  return (
    <Section>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <Link
          href="/pinsider"
          className="font-mono text-xs text-muted transition hover:text-accent-soft"
        >
          ← Pinsider hub
        </Link>
        <PinSiderLockup
          markSize={22}
          markClassName="h-[22px] w-[22px]"
          wordmarkSize="sm"
          withIo
          label="Pinsider"
        />
      </div>

      <article
        className="glass relative mb-7 overflow-hidden rounded-[16px] border-l-[3px] border-l-accent p-6 sm:p-8"
        aria-label="Mint desk totals"
      >
        <div className="grid gap-6 lg:grid-cols-[1.25fr_1fr] lg:gap-8">
          <div className="min-w-0">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              Mint desk
            </p>
            <p
              className={`mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl ${
                isLive ? "text-text" : "text-muted"
              }`}
            >
              {totalDisplay}
            </p>
            <p className="mt-2 text-sm text-muted sm:text-base">
              All-time minted across tracked designs (estimated)
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#245c45] bg-surface px-2.5 py-1 font-mono text-[11px] text-[#3ecf8e]">
                <span aria-hidden>●</span>
                {updatedChip}
              </span>
              {totals.designsTracked != null ? (
                <span className="rounded-full border border-border bg-surface px-2.5 py-1 font-mono text-[11px] text-muted">
                  {formatInt(totals.designsTracked)} designs tracked
                </span>
              ) : null}
            </div>
          </div>

          <div className="grid gap-3 content-center">
            <div className="rounded-xl border border-border bg-card/80 px-4 py-3.5">
              <p className="font-display text-xl font-semibold text-text sm:text-2xl">
                {effective}
              </p>
              <p className="mt-1 text-xs text-muted">
                Estimated effective supply (tracked)
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card/80 px-4 py-3.5">
              <p className="font-display text-xl font-semibold text-muted sm:text-2xl">
                —
              </p>
              <p className="mt-1 text-xs text-muted">
                Minted in last 24h (not in index yet)
              </p>
            </div>
          </div>
        </div>
      </article>

      {editions.length === 0 ? (
        <div className="card p-8 text-center">
          <p className="font-display text-lg text-text">Catalog sync pending</p>
          <p className="mt-2 text-sm text-muted">
            Edition rows are not available yet. Totals above still reflect the
            latest mint index snapshot when present.
          </p>
        </div>
      ) : (
        <MintDeskClient editions={editions} />
      )}

      <p className="mt-6 max-w-3xl text-xs leading-relaxed text-muted">
        {DISCLAIMER}
        {totals.sourceNote ? ` · ${totals.sourceNote}` : null}
      </p>
    </Section>
  );
}
