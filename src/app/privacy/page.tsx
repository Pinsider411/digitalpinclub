import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy policy for Digital Pin Club.",
};

export default function PrivacyPage() {
  return (
    <Section>
      <PageHero
        eyebrow="Legal"
        title="Privacy"
        description="How Digital Pin Club thinks about your information in this early v1."
      />
      <div className="prose-club max-w-2xl space-y-4 text-sm">
        <p>
          Digital Pin Club currently operates as a static marketing and community site.
          The Sunday digest form shows a client-side success state and does not yet send
          data to a backend. When email capture or analytics are wired, we will update
          this page.
        </p>
        <p>
          We do not sell personal information. If you contact us or use PinSider, those
          interactions are governed by the channels and products you use.
        </p>
        <p>
          Third-party links (including pinsider.io) have their own privacy practices.
          Review them separately.
        </p>
        <p>
          Questions? See{" "}
          <a href="/contact" className="text-accent">
            Contact
          </a>
          .
        </p>
      </div>
    </Section>
  );
}
