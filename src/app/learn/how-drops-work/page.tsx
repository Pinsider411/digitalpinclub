import type { Metadata } from "next";
import Link from "next/link";
import { LearnArticle } from "@/components/LearnArticle";

export const metadata: Metadata = {
  title: "How drops work",
  description:
    "Revolving Storefront, Mystery Capsules, bundles, and sets — how Disney Pinnacle drops typically work. Unofficial Digital Pin Club guide.",
};

export default function HowDropsWorkPage() {
  return (
    <LearnArticle
      level="Beginner"
      title="How drops work"
      description="Windows open, rotate, and close. Here is the collector’s map of storefront, capsules, bundles, and sets — without inventing odds or mint tables."
      related={[
        { href: "/learn/editions-and-variants", label: "Editions & variants" },
        { href: "/learn/trading-and-marketplace", label: "Trading & Marketplace" },
      ]}
    >
      <p>
        “Drop” is club shorthand for when pins become available — through the Revolving
        Storefront, Mystery Capsules, starter/welcome bundles, or other official
        promotions. Exact timing, inventory, and pack contents live on{" "}
        <a
          href="https://www.disneypinnacle.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Disney Pinnacle
        </a>
        ; this guide is orientation, not a substitute for the drop page.
      </p>
      <h2 className="!mt-8 font-display text-xl font-semibold text-text">
        Revolving Storefront
      </h2>
      <p>
        The Revolving Storefront is the rotating shop window for many Open Edition (OE)
        pins. Collectors often see it refresh on a cadence of roughly every four hours —
        verify the live schedule in-app, because product behavior can change. In a typical
        window you can acquire one of each available storefront pin for that rotation
        (subject to official rules at the time).
      </p>
      <p>
        As of mid-2026 official updates, some variants — including Digital Display and
        Color Splash, and Chasers for OE storefront lines — are capsule-only and do not
        appear on the Revolving Storefront. Always check current variant docs on the
        official site rather than assuming last month’s pattern still holds.
      </p>
      <h2 className="!mt-8 font-display text-xl font-semibold text-text">
        Mystery Capsules &amp; bundles
      </h2>
      <p>
        Mystery Capsules are pack-style ways to get pins (including many Limited Editions
        and certain variants). Contents and odds are defined by the official drop — we
        will not invent percentages here. Welcome / Starter bundles are a common on-ramp
        for new collectors; what is inside a given bundle changes over time, so read the
        listing before you buy.
      </p>
      <h2 className="!mt-8 font-display text-xl font-semibold text-text">
        Sets and windows
      </h2>
      <p>
        Pins often arrive in thematic sets. Open Editions usually mint during a limited
        window (often roughly weekly for a given OE line, with possible later
        reprintings under official rules). Limited Editions are typically serialized with
        a hard cap and are usually capsule-focused. For mint counts and reprint status,
        use the official drop pages — do not treat old community spreadsheets as eternal.
      </p>
      <h2 className="!mt-8 font-display text-xl font-semibold text-text">
        How collectors prepare (without the spiral)
      </h2>
      <ul className="list-disc space-y-2 pl-5 text-muted">
        <li>
          Skim{" "}
          <a
            href="https://disneypinnacle.com/digital-pins-101"
            target="_blank"
            rel="noopener noreferrer"
          >
            Digital Pins 101
          </a>{" "}
          and the live drop page first
        </li>
        <li>
          Check our <Link href="/calendar">Calendar</Link> for club-noted windows and
          hangouts (still verify officially)
        </li>
        <li>Decide a budget before the window opens — FOMO is not a strategy</li>
        <li>
          After the window, use trading and the{" "}
          <a
            href="https://www.disneypinnacle.com/marketplace"
            target="_blank"
            rel="noopener noreferrer"
          >
            Marketplace
          </a>{" "}
          for gaps — patiently
        </li>
      </ul>
      <p>
        Dig deeper on{" "}
        <Link href="/learn/editions-and-variants">editions &amp; variants</Link>, or see{" "}
        <Link href="/learn/trading-and-marketplace">trading &amp; Marketplace</Link> for
        after-drop options.
      </p>
    </LearnArticle>
  );
}
