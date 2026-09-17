import type { Metadata } from "next";
import Link from "next/link";
import { LearnArticle } from "@/components/LearnArticle";

export const metadata: Metadata = {
  title: "Disney Pinnacle overview",
  description:
    "What Disney Pinnacle is, how it relates to Digital Pin Club, and where to find the official app, storefront, and Digital Pins 101.",
};

export default function DisneyPinnaclePage() {
  return (
    <LearnArticle
      level="Beginner"
      title="Disney Pinnacle overview"
      description="Disney Pinnacle is the official licensed digital pin experience. Digital Pin Club is the unofficial fan clubhouse next door."
      related={[
        { href: "/learn/what-are-digital-pins", label: "What are digital pins?" },
        { href: "/learn/how-drops-work", label: "How drops work" },
      ]}
    >
      <p>
        <a
          href="https://www.disneypinnacle.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Disney Pinnacle
        </a>{" "}
        by Dapper Labs is the official product: licensed digital enamel-style pins
        (Disney, Pixar, Star Wars, and more) collectible in a mobile app and on the web.
        That is where accounts live, pins mint, trades settle, and the Revolving
        Storefront and capsules actually run.
      </p>
      <p>
        Start with the official primer —{" "}
        <a
          href="https://disneypinnacle.com/digital-pins-101"
          target="_blank"
          rel="noopener noreferrer"
        >
          Digital Pins 101
        </a>{" "}
        — for definitions, how to buy, and current product rules. Support and help
        articles on the same site are the source of truth when something in a Discord
        thread disagrees with the app.
      </p>
      <h2 className="!mt-8 font-display text-xl font-semibold text-text">
        What you do there
      </h2>
      <ul className="list-disc space-y-2 pl-5 text-muted">
        <li>Collect pins from storefront windows, capsules, and bundles</li>
        <li>Build Pinbooks to display and share your collection</li>
        <li>Trade peer-to-peer with Trade Links (both sides accept)</li>
        <li>
          Browse and list on the web{" "}
          <a
            href="https://www.disneypinnacle.com/marketplace"
            target="_blank"
            rel="noopener noreferrer"
          >
            Marketplace
          </a>
        </li>
      </ul>
      <h2 className="!mt-8 font-display text-xl font-semibold text-text">
        Where Digital Pin Club fits
      </h2>
      <p>
        We teach hobby norms, publish collector-friendly guides, share calendar context,
        and point people toward community.{" "}
        <Link href="/pinsider">Pinsider</Link> is our companion data desk for prices and
        alerts. Neither this site nor Pinsider replaces the official app — and neither
        sells you official pins.
      </p>
      <p>
        Brand reminder: we are <strong className="text-text">Digital Pin Club</strong>,
        an unofficial fan community. We are not “Disney Pin Club,” and we are not
        affiliated with, endorsed by, or sponsored by The Walt Disney Company, Dapper
        Labs, or Disney Pinnacle.
      </p>
      <p>
        Ready for mechanics? Read{" "}
        <Link href="/learn/how-drops-work">how drops work</Link> or{" "}
        <Link href="/learn/editions-and-variants">editions &amp; variants</Link>.
      </p>
    </LearnArticle>
  );
}
