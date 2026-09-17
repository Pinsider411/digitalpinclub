import type { Metadata } from "next";
import Link from "next/link";
import { LearnArticle } from "@/components/LearnArticle";

export const metadata: Metadata = {
  title: "Burns — leftover pins & circulating supply",
  description:
    "Plain-English guide to burns after Limited Edition and event drops: what gets destroyed on-chain, what usually does not, and how collectors check circulating supply. Unofficial Digital Pin Club.",
};

const LAST_VERIFIED = "2026-09-17";

export default function BurnsPage() {
  return (
    <LearnArticle
      level="Intermediate"
      title="Burns"
      description="After Limited Edition and event drops, leftover minted-but-unclaimed pins are typically destroyed on-chain so they don’t enter circulation later. Here’s the clubhouse plain-English map."
      related={[
        { href: "/learn/editions-and-variants", label: "Editions & variants" },
        { href: "/learn/how-drops-work", label: "How drops work" },
        { href: "/learn/pinbooks", label: "Pinbooks" },
        { href: "/learn/trading-and-marketplace", label: "Trading & Marketplace" },
        { href: "/community/watch", label: "Watch & Follow" },
      ]}
    >
      <p className="font-mono text-xs text-muted">
        Last verified · {LAST_VERIFIED}
      </p>

      <h2 className="!mt-8 font-display text-xl font-semibold text-text">
        What is a burn?
      </h2>
      <p>
        In collector talk, a <strong className="text-text">burn</strong> means leftover
        pins that were minted for a Limited Edition or event-style drop but never claimed
        are typically destroyed on-chain. The goal is simple: those leftovers should not
        quietly enter circulation later. Because of that,{" "}
        <strong className="text-text">circulating supply can end up lower than the
        announced mint cap</strong> — the cap is the ceiling; burns are one reason the
        street count may sit under it.
      </p>
      <p>
        We paraphrase club and official language here. Exact burn timing, which inventory
        is eligible, and how results are published can change — always verify on official
        recaps and in-app tools rather than treating this page as the ledger.
      </p>

      <h2 className="!mt-8 font-display text-xl font-semibold text-text">
        When burns happen
      </h2>
      <p>
        Burns are most often discussed after{" "}
        <strong className="text-text">Limited Edition</strong> windows and{" "}
        <strong className="text-text">event</strong> drops wind down — once the claim /
        pack window for that release is over and leftover minted-but-unclaimed inventory
        is settled. Open Edition storefront behavior and reprint rules are a different
        conversation (see editions &amp; variants); don’t assume every closed window
        equals a burn.
      </p>
      <p>
        Collectors usually look for an official recap or in-app analytics update after the
        drop rather than inventing a calendar of burn days.
      </p>

      <h2 className="!mt-8 font-display text-xl font-semibold text-text">
        What usually does <em>not</em> get burned
      </h2>
      <ul className="list-disc space-y-2 pl-5 text-muted">
        <li>
          <strong className="text-text">#1s and reserved promo pieces</strong> — often
          held aside (not “always” burned or always released publicly). Treat #1 talk as
          special inventory, not leftover unsolds.
        </li>
        <li>
          <strong className="text-text">Series reserve (e.g. ~8% for Series 2026)</strong>{" "}
          — a licensor / promo / team / complimentary reserve is{" "}
          <em>not</em> the same thing as public unsolds from a drop. Don’t fold reserve
          math into “leftovers that burned.”
        </li>
        <li>
          Pins already in collectors’ wallets, marketplace listings, or completed trades —
          those are circulating (or listed), not burn candidates.
        </li>
      </ul>

      <h2 className="!mt-8 font-display text-xl font-semibold text-text">
        Why collectors care
      </h2>
      <ul className="list-disc space-y-2 pl-5 text-muted">
        <li>
          <strong className="text-text">Circulation vs. cap</strong> — the announced mint
          is a ceiling; burns can leave fewer pieces on the street.
        </li>
        <li>
          <strong className="text-text">Set math</strong> — when you’re chasing a full set
          or a serial story, knowing leftovers were removed (or not) changes how you read
          scarcity talk.
        </li>
        <li>
          <strong className="text-text">#1s and specials</strong> — reserved or held pieces
          sit outside the “unsolds burned” story; collectors track them separately.
        </li>
      </ul>
      <p>
        This is hobby literacy, not investment advice. Scarcity language helps you collect
        with clearer eyes — it does not predict value.
      </p>

      <h2 className="!mt-8 font-display text-xl font-semibold text-text">
        How to check after a drop
      </h2>
      <ol className="list-decimal space-y-2 pl-5 text-muted">
        <li>
          Read the <strong className="text-text">official recap</strong> or help article
          for that drop when it lands on{" "}
          <a
            href="https://www.disneypinnacle.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Disney Pinnacle
          </a>
          .
        </li>
        <li>
          Check <strong className="text-text">in-app analytics</strong> / collection tools
          for circulating and set context (UI labels change — follow what’s live in the
          app).
        </li>
        <li>
          Use{" "}
          <Link href="/pinsider" className="text-accent hover:underline">
            Pinsider
          </Link>{" "}
          and club{" "}
          <Link href="/community/watch" className="text-accent hover:underline">
            Watch &amp; Follow
          </Link>{" "}
          creators for collector-facing summaries — then cross-check official sources.
        </li>
      </ol>

      <h2 className="!mt-8 font-display text-xl font-semibold text-text">FAQ</h2>

      <h3 className="!mt-6 font-display text-lg font-semibold text-text">
        Is a burn the same as a collector deleting a pin?
      </h3>
      <p>
        No. A burn in this guide means issuer-side destruction of leftover
        minted-but-unclaimed inventory after a drop window. A collector removing something
        from a board, wishlist, or local UI is not the same on-chain event.
      </p>

      <h3 className="!mt-6 font-display text-lg font-semibold text-text">
        Is burning the same as delisting on the Marketplace?
      </h3>
      <p>
        No. Delisting (or canceling a sale) only takes a pin off the Marketplace. The pin
        still exists in someone’s collection. A burn removes eligible leftovers from
        future circulation.
      </p>

      <h3 className="!mt-6 font-display text-lg font-semibold text-text">
        How is this different from an Open Edition closing or a later reissue?
      </h3>
      <p>
        Open Editions often mint during a window and may have later reprintings under
        official rules. Closing an OE window is not automatically a burn of LE-style
        leftovers. For OE vs LE language, see{" "}
        <Link href="/learn/editions-and-variants">editions &amp; variants</Link>.
      </p>

      <h3 className="!mt-6 font-display text-lg font-semibold text-text">
        What about #1s?
      </h3>
      <p>
        #1s and similar reserved / promo pieces are often held rather than treated as
        public unsolds. Don’t assume they burn with leftover capsule inventory — check
        official notes for that release.
      </p>

      <h3 className="!mt-6 font-display text-lg font-semibold text-text">
        Event pack language sounds like “everything left gets burned” — should I trust
        chat screenshots?
      </h3>
      <p>
        Prefer the official drop page and post-drop recap. Pack and event copy can be
        informal in community chats; rules and outcomes belong to the issuer’s published
        materials.
      </p>

      <h3 className="!mt-6 font-display text-lg font-semibold text-text">
        Is this investment advice?
      </h3>
      <p>
        No. Digital Pin Club shares collector literacy. Burns, caps, and circulation talk
        help you understand the hobby — they are not a recommendation to buy, sell, or
        hold for profit.
      </p>

      <h2 className="!mt-8 font-display text-xl font-semibold text-text">
        Related guides
      </h2>
      <p>
        <Link href="/learn/editions-and-variants">Editions &amp; variants</Link>
        {" · "}
        <Link href="/learn/how-drops-work">How drops / capsules work</Link>
        {" · "}
        <Link href="/learn/pinbooks">Pinbooks &amp; sets</Link>
        {" · "}
        <Link href="/learn/trading-and-marketplace">Trading</Link>
        {" · "}
        <Link href="/start">Start here</Link>
        {" · "}
        <Link href="/community/watch">Watch &amp; Follow</Link>
      </p>

      <h2 className="!mt-8 font-display text-xl font-semibold text-text">
        Official sources
      </h2>
      <ul className="list-disc space-y-2 pl-5 text-muted">
        <li>
          <a
            href="https://disneypinnacle.com/digital-pins-101"
            target="_blank"
            rel="noopener noreferrer"
          >
            Digital Pins 101
          </a>
        </li>
        <li>
          <a
            href="https://support.disneypinnacle.com/hc/en-us/articles/19237408327187-Pin-Variations-and-Variants"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pin Variations and Variants (support)
          </a>
        </li>
      </ul>

      <aside className="not-prose mt-8 rounded-2xl border border-border bg-surface p-5 text-sm leading-relaxed text-muted">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">
          Learn disclaimer
        </p>
        <p className="mt-2">
          Rules, inventory handling, and published burn outcomes can change. We paraphrase
          for collectors; we are <strong className="text-text">not the issuer</strong>.
          Digital Pin Club is an independent fan community — not affiliated with,
          endorsed by, or sponsored by The Walt Disney Company, Dapper Labs, or Disney
          Pinnacle. Verify every claim on official pages before you act on it.
        </p>
      </aside>
    </LearnArticle>
  );
}
