import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { JoinForm } from "@/components/JoinForm";
import { BadgeMark } from "@/components/BadgeMark";

export const metadata: Metadata = {
  title: "Join the Club",
  description:
    "Sign up for Digital Pin Club — free collector community run by collectors.",
};

export default function JoinPage() {
  return (
    <Section>
      <div className="mx-auto max-w-xl">
        <div className="mb-6 flex justify-center sm:justify-start">
          <BadgeMark className="h-12 w-12 badge-glow" />
        </div>
        <PageHero
          eyebrow="Join the Club"
          title="Become a member."
          description="Free signup for Digital Pin Club — tell us a bit about your collecting so we can welcome you properly."
        />
        <JoinForm />
      </div>
    </Section>
  );
}
