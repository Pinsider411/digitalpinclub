import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use for Digital Pin Club.",
};

export default function TermsPage() {
  return (
    <Section>
      <PageHero
        eyebrow="Legal"
        title="Terms of use"
        description="Simple terms for using the Digital Pin Club website."
      />
      <div className="prose-club max-w-2xl space-y-4 text-sm">
        <p>
          By using digitalpinclub.com you agree to these terms. The site is provided for
          informational and community purposes as an unofficial fan project.
        </p>
        <p>
          Content may change. Placeholder guides, events, and articles are not guarantees
          of future features or schedules.
        </p>
        <p>
          You may not scrape, misuse, or misrepresent the site as an official Disney,
          Dapper Labs, or Disney Pinnacle property. Do not upload or request official
          licensed pin artwork for branding on this club site.
        </p>
        <p>
          The site is provided “as is” without warranties. To the fullest extent permitted
          by law, Digital Pin Club is not liable for damages arising from use of the site
          or reliance on community content.
        </p>
        <p>
          See also our{" "}
          <a href="/disclaimer">Disclaimer</a> and{" "}
          <a href="/privacy">Privacy</a> pages.
        </p>
      </div>
    </Section>
  );
}
