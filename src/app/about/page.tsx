import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "About",
  description: "About Digital Pin Club — independent fan community for digital pin collectors.",
};

export default function AboutPage() {
  return (
    <Section>
      <PageHero
        eyebrow="About"
        title="A clubhouse for collectors."
        description="Digital Pin Club is an unofficial fan community for people who collect digital pins. We help you learn the hobby, follow drops, show boards, and find your people."
      />
      <div className="prose-club max-w-2xl space-y-4 text-sm">
        <p>
          We’re run by collectors, for collectors. The tone is warm and practical —
          magazine + product, not marketplace theater.
        </p>
        <p>
          Digital Pin Club is <strong className="text-text">not</strong> affiliated with,
          endorsed by, or sponsored by The Walt Disney Company, Dapper Labs, or Disney
          Pinnacle. We don’t use official licensed artwork for our brand.
        </p>
        <p>
          PinSider (pinsider.io) is our companion data desk for prices, alerts, and
          history. The club site itself is free and never paywalled.
        </p>
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/community" className="pill bg-cta px-5 py-2.5 text-sm font-medium text-cta-text">
          Join the Club
        </Link>
        <Link href="/disclaimer" className="pill border border-border px-5 py-2.5 text-sm text-text">
          Read disclaimer
        </Link>
      </div>
    </Section>
  );
}
