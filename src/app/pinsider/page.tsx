import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "PinSider",
  description: "PinSider is the companion data desk for digital pin collectors — prices, alerts, history.",
};

export default function PinSiderPage() {
  return (
    <Section>
      <PageHero
        eyebrow="Data desk"
        title="PinSider"
        description="The companion tool next door: prices, alerts, and history so you can collect with clearer signal. Digital Pin Club stays free — PinSider is optional."
      />
      <div className="grid gap-4 md:grid-cols-2">
        <div className="card p-6">
          <h2 className="font-display text-xl font-semibold text-text">Free</h2>
          <p className="mt-2 font-mono text-xs text-live">$0</p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>Core lookups</li>
            <li>Basic history</li>
            <li>Club-friendly orientation</li>
          </ul>
        </div>
        <div className="card border-accent/50 p-6">
          <h2 className="font-display text-xl font-semibold text-text">Pro</h2>
          <p className="mt-2 font-mono text-xs text-accent">~$5 / month</p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>Alerts & watchlists</li>
            <li>Deeper desk views</li>
            <li>Faster pulse on moves</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 card p-8">
        <h2 className="font-display text-2xl font-semibold text-text">
          Club ≠ paywall
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
          Learn, Calendar, Community, Spotlights, News, and everything on digitalpinclub.com
          remain open. PinSider is a separate product for collectors who want data tooling —
          not a gate on belonging here.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="https://pinsider.io"
            target="_blank"
            rel="noopener noreferrer"
            className="pill bg-accent px-5 py-2.5 text-sm font-medium text-white hover:brightness-110"
          >
            Go to pinsider.io
          </a>
          <Link href="/community" className="pill border border-border px-5 py-2.5 text-sm text-text">
            Back to Community
          </Link>
        </div>
      </div>
    </Section>
  );
}
