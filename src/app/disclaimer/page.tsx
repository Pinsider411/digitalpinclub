import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Unofficial fan community disclaimer for Digital Pin Club.",
};

export default function DisclaimerPage() {
  return (
    <Section>
      <PageHero
        eyebrow="Legal"
        title="Disclaimer"
        description="Please read this carefully. Digital Pin Club is an independent fan community."
      />
      <div className="prose-club max-w-2xl space-y-4 text-sm">
        <p>
          Digital Pin Club is an independent fan community for digital pin collectors. We
          are <strong className="text-text">not affiliated with, endorsed by, or
          sponsored by</strong> The Walt Disney Company, Dapper Labs, Disney Pinnacle, or
          any of their subsidiaries or affiliates.
        </p>
        <p>
          All trademarks, character names, and related marks mentioned for identification
          of the hobby belong to their respective owners. Mentions are for descriptive
          fan-community context only.
        </p>
        <p>
          We do not claim ownership of official pin artwork or licensed IP. Brand visuals
          on this site use original geometric badges and abstract design — not official
          Disney, Pixar, Star Wars, Mickey, or other licensed pin art.
        </p>
        <p>
          Information on this site is for general community purposes and may include
          placeholders. It is not financial, legal, or investment advice. Collecting
          involves risk; do your own research.
        </p>
        <p>
          PinSider is a separate companion product. Links to third-party sites are provided
          for convenience; we are not responsible for their content or policies.
        </p>
      </div>
    </Section>
  );
}
