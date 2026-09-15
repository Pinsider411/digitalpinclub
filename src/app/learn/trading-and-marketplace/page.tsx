import type { Metadata } from "next";
import Link from "next/link";
import { LearnArticle } from "@/components/LearnArticle";

export const metadata: Metadata = {
  title: "Trading & Marketplace",
  description:
    "Trade Links, peer offers, and the Disney Pinnacle web Marketplace — etiquette, irreversibility, and where fees live officially.",
};

export default function TradingAndMarketplacePage() {
  return (
    <LearnArticle
      level="Intermediate"
      title="Trading & Marketplace"
      description="Peer trading and the official web Marketplace are how collectors fill gaps after a drop. Digital Pin Club teaches norms — we do not run a marketplace."
      visual={{
        src: "/learn/trading.png",
        alt: "Original club illustration of two pins with exchange arrows representing peer trading — not official Disney art",
      }}
      related={[
        { href: "/learn/how-drops-work", label: "How drops work" },
        { href: "/learn/pinbooks", label: "Pinbooks" },
      ]}
    >
      <p>
        Once pins are in collections, most of the hobby is people helping each other
        complete sets. You will hear two main paths: peer trading inside Disney Pinnacle,
        and buying/selling on the official web Marketplace. Both are official product
        features — not something this club site operates.
      </p>
      <h2 className="!mt-8 font-display text-xl font-semibold text-text">
        Peer trading (Trade Links &amp; offers)
      </h2>
      <p>
        Trading is available around the clock via Trade Links and in-app offers. Both
        parties must accept. Trades require at least one pin on each side. Once completed,
        a trade is irreversible — double-check serials, editions, and which side is giving
        what before you tap accept.
      </p>
      <p>
        Clubhouse etiquette that keeps the hobby fun: clear offers, no bait-and-switch,
        patience with newer collectors, and no pressure tactics around “last chance”
        windows that are really just someone else’s urgency.
      </p>
      <h2 className="!mt-8 font-display text-xl font-semibold text-text">
        Web Marketplace
      </h2>
      <p>
        The official Marketplace lives at{" "}
        <a
          href="https://www.disneypinnacle.com/marketplace"
          target="_blank"
          rel="noopener noreferrer"
        >
          disneypinnacle.com/marketplace
        </a>
        . Listing and success fees change over time — historically there has been a small
        listing fee (often cited around $0.50) and a success fee that has been reduced
        during some periods. Dapper credit has also appeared in certain events. Do not
        rely on this paragraph for checkout math: open the current{" "}
        <strong className="text-text">Marketplace 101</strong> / help articles on the
        official site before you list or bid.
      </p>
      <h2 className="!mt-8 font-display text-xl font-semibold text-text">
        Club vs. marketplace
      </h2>
      <p>
        Digital Pin Club helps you learn norms, follow context on the{" "}
        <Link href="/calendar">Calendar</Link>, and find people in{" "}
        <Link href="/community">Community</Link>.{" "}
        <Link href="/pinsider">PinSider</Link> can help with price history and alerts.
        Neither replaces official trading rails, and this website will not process your
        pin sales.
      </p>
      <p>
        Official reading:{" "}
        <a
          href="https://disneypinnacle.com/digital-pins-101"
          target="_blank"
          rel="noopener noreferrer"
        >
          Digital Pins 101
        </a>
        .
      </p>
    </LearnArticle>
  );
}
