import Link from "next/link";
import type { ReactNode } from "react";
import { getMintTotals } from "@/data/mint-totals";

function formatTotal(n: number): string {
  return new Intl.NumberFormat("en-US").format(n);
}

function formatSigned(n: number): string {
  const abs = formatTotal(Math.abs(n));
  if (n > 0) return `+${abs}`;
  if (n < 0) return `−${abs}`;
  return "0";
}

function formatPct(n: number): string {
  const abs = Math.abs(n);
  if (n > 0) return `+${abs}%`;
  if (n < 0) return `−${abs}%`;
  return "0%";
}

export async function MintTotalCard() {
  const mintTotals = await getMintTotals();
  const isLive =
    mintTotals.status === "live" && mintTotals.estimatedTotal != null;
  const displayTotal = isLive
    ? `~${formatTotal(mintTotals.estimatedTotal!)}`
    : "Indexing…";

  const hourDelta = mintTotals.hourDelta;
  const pct = mintTotals.pctChangeVsPriorHour;
  const hasHour = hourDelta != null;

  let hourCountText: string;
  let hourCountClass: string;
  if (!hasHour) {
    hourCountText = "—";
    hourCountClass = "text-muted";
  } else if (hourDelta === 0) {
    hourCountText = "No new mints this hour";
    hourCountClass = "text-muted";
  } else if (hourDelta > 0) {
    hourCountText = `${formatSigned(hourDelta)} this hour`;
    hourCountClass = "text-mint-up";
  } else {
    hourCountText = `${formatSigned(hourDelta)} this hour`;
    hourCountClass = "text-mint-down";
  }

  let pctEl: ReactNode = null;
  if (hasHour && pct != null) {
    const direction = pct > 0 ? "up" : pct < 0 ? "down" : "flat";
    const pillClass =
      direction === "up"
        ? "border-mint-up/35 bg-mint-up/10 text-mint-up"
        : direction === "down"
          ? "border-mint-down/35 bg-mint-down/10 text-mint-down"
          : "border-muted/40 bg-muted/10 text-muted";
    const arrow = direction === "up" ? "↗" : direction === "down" ? "↘" : "—";
    pctEl = (
      <span
        className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1.5 font-mono text-xs font-semibold whitespace-nowrap ${pillClass}`}
      >
        <span aria-hidden="true">{arrow}</span>
        {formatPct(pct)} vs last hour
      </span>
    );
  } else if (hasHour && pct == null) {
    pctEl = (
      <span className="inline-flex items-center gap-1 rounded-full border border-muted/40 bg-muted/10 px-2.5 py-1.5 font-mono text-xs font-semibold text-muted whitespace-nowrap">
        <span aria-hidden="true">—</span>
        vs last hour
      </span>
    );
  }

  return (
    <article
      className="collectible-card relative overflow-hidden border-l-[3px] border-l-gold p-5 sm:p-6"
      aria-label="Mint desk"
    >
      <div className="relative z-[1] flex flex-wrap items-center gap-2.5">
        <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-gold">
          Mint desk
        </p>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border-gold/30 bg-gold/10 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.05em] text-gold-soft">
          <span
            className="h-1.5 w-1.5 rounded-full bg-mint-up shadow-[0_0_0_3px_rgba(115,215,160,0.18)]"
            aria-hidden="true"
          />
          Every hour · on the hour
        </span>
      </div>

      <div className="relative z-[1] mt-3.5 flex flex-wrap items-end justify-between gap-4 sm:gap-8">
        <div className="min-w-0">
          <p
            className={`font-display text-4xl font-semibold tracking-tight tabular-nums sm:text-5xl ${
              isLive ? "text-text" : "text-muted"
            }`}
          >
            {displayTotal}
          </p>
          <p className="mt-2 text-sm text-muted">Estimated pins minted</p>
        </div>

        {isLive && hasHour ? (
          <div className="flex flex-col items-start gap-2 text-left sm:items-end sm:text-right">
            <p
              className={`font-display text-xl font-semibold tracking-tight tabular-nums sm:text-2xl ${hourCountClass}`}
            >
              {hourCountText}
            </p>
            {pctEl}
            {mintTotals.hourWindowLabel ? (
              <p className="text-xs text-muted">{mintTotals.hourWindowLabel}</p>
            ) : null}
          </div>
        ) : null}
      </div>

      <div className="relative z-[1] mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border/80 pt-4 text-xs text-muted">
        <span>
          Updated{" "}
          <b className="font-semibold text-text">
            {isLive ? mintTotals.updatedLabel : "—"}
          </b>
        </span>
        {mintTotals.designsTracked != null ? (
          <>
            <span
              className="hidden h-0.5 w-0.5 rounded-full bg-gold opacity-75 sm:inline-block"
              aria-hidden="true"
            />
            <span>
              <b className="font-semibold text-text">
                {formatTotal(mintTotals.designsTracked)}
              </b>{" "}
              designs tracked
            </span>
          </>
        ) : null}
        <span
          className="hidden h-0.5 w-0.5 rounded-full bg-gold opacity-75 sm:inline-block"
          aria-hidden="true"
        />
        <span>
          Next refresh{" "}
          <b className="font-semibold text-text">
            {mintTotals.nextRefreshLabel}
          </b>
        </span>
      </div>

      <div className="relative z-[1] mt-4 flex flex-wrap items-center justify-between gap-3.5">
        <p className="max-w-xl text-[11px] leading-relaxed text-muted/80">
          {mintTotals.disclaimer}
        </p>
        <Link
          href="/pinsider"
          className="inline-flex shrink-0 items-center justify-center rounded-full border border-border-gold/50 bg-gold/10 px-4 py-2.5 text-sm font-medium text-gold-soft transition hover:border-gold hover:bg-gold/20"
        >
          Mint desk on Pinsider →
        </Link>
      </div>
    </article>
  );
}
