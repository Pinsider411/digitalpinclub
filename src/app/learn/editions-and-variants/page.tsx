import type { Metadata } from "next";
import Link from "next/link";
import { LearnArticle } from "@/components/LearnArticle";

export const metadata: Metadata = {
  title: "Editions & variants",
  description:
    "Starter, Open Edition, Limited Edition, and variants like Chaser, Digital Display, and Color Splash — plain-language guide for collectors.",
};

export default function EditionsAndVariantsPage() {
  return (
    <LearnArticle
      level="Intermediate"
      title="Editions & variants"
      description="Scarcity language collectors use — Starter, Open Edition, Limited Edition, and special variants — with a hard rule: verify mint and availability on official pages."
      related={[
        { href: "/learn/how-drops-work", label: "How drops work" },
        { href: "/learn/glossary", label: "Glossary" },
      ]}
    >
      <p>
        Edition and variant labels tell you how a pin was issued and how scarce it is
        meant to be. Rules evolve — especially around reprintings and which variants sit
        in capsules vs. the storefront — so treat this as a map, then confirm on{" "}
        <a
          href="https://disneypinnacle.com/digital-pins-101"
          target="_blank"
          rel="noopener noreferrer"
        >
          Digital Pins 101
        </a>{" "}
        and the specific drop page.
      </p>
      <h2 className="!mt-8 font-display text-xl font-semibold text-text">
        Starter
      </h2>
      <p>
        Starter pins (and Welcome / Starter bundles) are the on-ramp: approachable pieces
        meant to get a new collection moving. Exact contents change; read the current
        bundle listing on{" "}
        <a
          href="https://www.disneypinnacle.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          disneypinnacle.com
        </a>
        .
      </p>
      <h2 className="!mt-8 font-display text-xl font-semibold text-text">
        Open Edition (OE)
      </h2>
      <p>
        Open Editions typically mint on demand during a limited window. They may have
        later reprintings under official rules. A useful official-style rule of thumb
        collectors cite: about 18 months after the last window, an OE line can move to
        closed status — always verify the live status rather than assuming. OE pins often
        show up on the Revolving Storefront during their active life.
      </p>
      <h2 className="!mt-8 font-display text-xl font-semibold text-text">
        Limited Edition (LE)
      </h2>
      <p>
        Limited Editions are serialized with a hard mint cap. They are typically offered
        through Mystery Capsules (not as open storefront reprints), and are generally not
        reissued. Serial numbers matter to many collectors; treat completed trades as
        final.
      </p>
      <h2 className="!mt-8 font-display text-xl font-semibold text-text">
        Variants (Chaser, Digital Display, Color Splash, and friends)
      </h2>
      <p>
        Variants are alternate treatments of a design — chase pieces, display-style
        treatments, color-splash looks, and similar. Naming and availability shift with
        product updates. As of mid-2026 official updates, Digital Display and Color Splash
        (and Chasers for OE storefront lines) are capsule-only — not sold on the Revolving
        Storefront. For the current list, check official variant documentation rather than
        memorizing a club rumor.
      </p>
      <p>
        We intentionally skip long mint-count tables here. Numbers and odds change; the
        drop page and official help articles win every argument.
      </p>
      <p>
        Related: <Link href="/learn/how-drops-work">how drops work</Link> ·{" "}
        <Link href="/learn/glossary">glossary</Link>
      </p>
    </LearnArticle>
  );
}
