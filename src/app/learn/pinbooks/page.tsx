import type { Metadata } from "next";
import Link from "next/link";
import { LearnArticle } from "@/components/LearnArticle";

export const metadata: Metadata = {
  title: "Pinbooks",
  description:
    "How Pinbooks work for displaying and sharing your digital pin collection — themes, layouts, and collector culture. Unofficial guide.",
};

export default function PinbooksPage() {
  return (
    <LearnArticle
      level="Intermediate"
      title="Pinbooks"
      description="Pinbooks are where your collection becomes a story — arrange pins, share boards, and celebrate sets without turning display into homework."
      related={[
        { href: "/learn/what-are-digital-pins", label: "What are digital pins?" },
        { href: "/learn/trading-and-marketplace", label: "Trading & Marketplace" },
      ]}
    >
      <p>
        In Disney Pinnacle, Pinbooks are the display boards for your collection. You
        arrange pins, build themes, and share what you have gathered — the digital cousin
        of a cork board full of enamel. Exact layout limits and sharing tools live in the
        official app; collectors often note that a Starter Pinbook holds up to nine pins,
        with additional Pinbook options as you grow. Confirm current limits in-product.
      </p>
      <h2 className="!mt-8 font-display text-xl font-semibold text-text">
        Why collectors love them
      </h2>
      <p>
        A good Pinbook is not just inventory — it is curation. Color stories, character
        arcs, “one from every set,” or a chaotic favorite-shelf all count. Spotlights and
        clubhouse shares often start with a Pinbook screenshot and a short note about the
        chase.
      </p>
      <h2 className="!mt-8 font-display text-xl font-semibold text-text">
        Practical tips
      </h2>
      <ul className="list-disc space-y-2 pl-5 text-muted">
        <li>Leave room to grow — empty slots invite the next trade</li>
        <li>Group by set or by vibe; either is valid</li>
        <li>
          When you share, say what you are hunting next — it makes trades kinder
        </li>
        <li>
          Completing a set is satisfying; so is a board that simply makes you smile
        </li>
      </ul>
      <h2 className="!mt-8 font-display text-xl font-semibold text-text">
        Club vs. official
      </h2>
      <p>
        We may showcase collector boards on this site (see{" "}
        <Link href="/board">Board</Link> and <Link href="/spotlights">Spotlights</Link>
        ), but creating and editing Pinbooks happens in{" "}
        <a
          href="https://www.disneypinnacle.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Disney Pinnacle
        </a>
        . For product how-tos, use{" "}
        <a
          href="https://disneypinnacle.com/digital-pins-101"
          target="_blank"
          rel="noopener noreferrer"
        >
          Digital Pins 101
        </a>
        .
      </p>
      <p>
        New to the hobby? <Link href="/start">Start here</Link> · Curious about scarcity?{" "}
        <Link href="/learn/editions-and-variants">Editions &amp; variants</Link>
      </p>
    </LearnArticle>
  );
}
