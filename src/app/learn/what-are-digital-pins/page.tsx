import type { Metadata } from "next";
import Link from "next/link";
import { LearnArticle } from "@/components/LearnArticle";
import { PinMedia } from "@/components/PinMedia";
import { PinDisclaimer } from "@/components/PinDisclaimer";
import { clubPins } from "@/data/pins";

export const metadata: Metadata = {
  title: "What are digital pins?",
  description:
    "A friendly intro to digital enamel-style pins — collecting, displaying, and trading in Disney Pinnacle.",
};

export default function WhatAreDigitalPinsPage() {
  return (
    <LearnArticle
      level="Beginner"
      title="What are digital pins?"
      description="Think classic enamel pin trading — but digital: collect, display, and trade with other collectors in an official app and on the web."
      related={[
        { href: "/learn/disney-pinnacle", label: "Disney Pinnacle overview" },
        { href: "/learn/how-drops-work", label: "How drops work" },
      ]}
    >
      <p>
        Digital pins are licensed, enamel-inspired collectibles you gather in{" "}
        <a
          href="https://www.disneypinnacle.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Disney Pinnacle
        </a>{" "}
        — the official product from Dapper Labs. Characters and themes from Disney,
        Pixar, Star Wars, and more show up as digital pins you can own, arrange in
        Pinbooks, and trade collector-to-collector.
      </p>
      <p>
        Under the hood they are NFTs on the Flow blockchain. In day-to-day club talk,
        most people just say “pins.” You do not need to sound like a crypto newsletter
        to enjoy the hobby — the app handles wallets and settlement so you can focus on
        sets, boards, and fair trades.
      </p>
      <figure className="not-prose my-8 overflow-hidden rounded-2xl border border-border bg-surface">
        <div className="mx-auto max-w-[220px] bg-transparent px-4 pt-5">
          <PinMedia
            pin={clubPins.elsa}
            autoPlay
            className="aspect-square bg-transparent"
            imgClassName="object-contain"
            sizes="220px"
          />
        </div>
        <figcaption className="border-t border-border px-4 py-4">
          <p className="font-display text-base font-semibold text-text">
            {clubPins.elsa.title}
          </p>
          <p className="mt-1 text-sm text-muted">
            Club example of what a digital pin looks like — enamel-style art with a
            metallic frame. Limited Edition — mint of 333.
          </p>
          <div className="mt-3">
            <PinDisclaimer />
          </div>
        </figcaption>
      </figure>
      <h2 className="!mt-8 font-display text-xl font-semibold text-text">
        Why collectors care
      </h2>
      <p>
        The chase feels familiar if you have ever hunted physical pins: limited windows,
        editions with different scarcity, variants that show up in capsules, and a
        community that celebrates completed sets and creative Pinbooks. Drops rotate;
        friends trade duplicates; someone always has the piece you need.
      </p>
      <p>
        Digital Pin Club exists to teach norms, share calendar context, and keep the
        clubhouse warm. We are not a marketplace and we are not the official app. For
        buying, minting, and account help, go straight to{" "}
        <a
          href="https://disneypinnacle.com/digital-pins-101"
          target="_blank"
          rel="noopener noreferrer"
        >
          Digital Pins 101
        </a>{" "}
        and the official site.
      </p>
      <h2 className="!mt-8 font-display text-xl font-semibold text-text">
        How people get pins
      </h2>
      <ul className="list-disc space-y-2 pl-5 text-muted">
        <li>Welcome / Starter bundles when you are new</li>
        <li>Revolving Storefront windows (rotating availability)</li>
        <li>Mystery Capsules and other pack-style drops</li>
        <li>Peer trading via Trade Links and offers</li>
        <li>
          The web{" "}
          <a
            href="https://www.disneypinnacle.com/marketplace"
            target="_blank"
            rel="noopener noreferrer"
          >
            Marketplace
          </a>
        </li>
      </ul>
      <p>
        Features, fees, and windows change. When in doubt, check the official drop page
        and help articles — not a random screenshot in chat.
      </p>
      <p>
        Next up:{" "}
        <Link href="/learn/disney-pinnacle">how Disney Pinnacle fits together</Link>, or
        jump to <Link href="/start">Start here</Link> for a sequenced path.
      </p>
    </LearnArticle>
  );
}
