import Link from "next/link";
import { getMintTotals } from "@/data/mint-totals";

function formatTotal(n: number): string {
  return new Intl.NumberFormat("en-US").format(n);
}

export async function MintTotalCard() {
  const mintTotals = await getMintTotals();
  const isLive =
    mintTotals.status === "live" && mintTotals.estimatedTotal != null;
  const displayTotal = isLive
    ? `~${formatTotal(mintTotals.estimatedTotal!)}`
    : "Indexing…";
  const meta = isLive
    ? `Updated ${mintTotals.updatedLabel}`
    : "Last pulled · first catalog sync pending";

  return (
    <article
      className="glass relative overflow-hidden rounded-[20px] border-l-[3px] border-l-accent p-5 sm:p-6"
      aria-label="Mint desk"
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
        <div className="min-w-0 flex-1">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            Mint desk
          </p>
          <div className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <p
              className={`font-display text-4xl font-semibold tracking-tight sm:text-5xl ${
                isLive ? "text-text" : "text-muted"
              }`}
            >
              {displayTotal}
            </p>
            <p className="text-sm text-muted">
              Estimated pins minted (all designs)
            </p>
          </div>
          <p className="mt-2 font-mono text-[11px] text-muted">{meta}</p>
          {mintTotals.designsTracked != null ? (
            <p className="mt-1 font-mono text-[11px] text-muted/80">
              {mintTotals.designsTracked} designs tracked in club index
            </p>
          ) : null}
          <p className="mt-3 max-w-xl text-xs leading-relaxed text-muted/90">
            {mintTotals.disclaimer}
          </p>
        </div>

        <div className="shrink-0 sm:self-center">
          <Link
            href="/pinsider"
            className="inline-flex w-full items-center justify-center gap-1 rounded-full border border-accent/40 bg-accent/10 px-4 py-2.5 text-sm font-medium text-accent transition hover:border-accent hover:bg-accent/20 sm:w-auto"
          >
            Mint desk on Pinsider →
          </Link>
        </div>
      </div>
    </article>
  );
}
