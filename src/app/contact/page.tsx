import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Digital Pin Club.",
};

export default function ContactPage() {
  return (
    <Section>
      <PageHero
        eyebrow="Contact"
        title="Say hello"
        description="Questions, partnerships (non-official), or spotlight suggestions — we’d love to hear from collectors."
      />
      <div className="card max-w-lg p-8">
        <p className="text-sm leading-relaxed text-muted">
          For v1, reach out via PinSider or the channels we’ll list as the clubhouse
          opens. You can also use the Sunday digest form on the home page to stay in the
          loop.
        </p>
        <dl className="mt-6 space-y-4 text-sm">
          <div>
            <dt className="font-mono text-xs text-muted">Data desk</dt>
            <dd>
              <a
                href="https://pinsider.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                pinsider.io
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-mono text-xs text-muted">Founder</dt>
            <dd className="text-text">@apache1999</dd>
          </div>
        </dl>
      </div>
    </Section>
  );
}
