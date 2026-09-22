import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { PinSiderLockup, PinSiderMark } from "@/components/PinSiderMark";

export const metadata: Metadata = {
  title: "Pinsider",
  description: "Pinsider is the companion data desk for digital pin collectors — prices, alerts, history.",
};

export default function PinSiderPage() {
  return (
    <Section>
      <PageHero
        eyebrow="Data desk"
        title={
          <PinSiderLockup
            markSize={48}
            markClassName="h-12 w-12"
            wordmarkSize="lg"
            withIo
            label="Pinsider"
            className="inline-flex items-center gap-3"
          />
        }
        description="The companion tool next door: prices, alerts, and history so you can collect with clearer signal. Digital Pin Club stays free — Pinsider is optional."
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
      <div className="mt-6 card border-accent/40 p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              Free · core lookups
            </p>
            <h2 className="mt-2 font-display text-xl font-semibold text-text">
              Mint desk
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
              Near-live estimated platform mint total and per-design supply from
              the club mint index. Search, filter by parallel, and sort without
              leaving Digital Pin Club.
            </p>
          </div>
          <Link
            href="/pinsider/mint"
            className="inline-flex shrink-0 items-center justify-center gap-1 rounded-full border border-accent/40 bg-accent/10 px-4 py-2.5 text-sm font-medium text-accent transition hover:border-accent hover:bg-accent/20"
          >
            Open Mint desk →
          </Link>
        </div>
      </div>

      <div className="mt-8 card p-8">
        <h2 className="font-display text-2xl font-semibold text-text">
          Club ≠ paywall
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
          Learn, Calendar, Community, Spotlights, News, and everything on digitalpinclub.com
          remain open. Pinsider is a separate product for collectors who want data tooling —
          not a gate on belonging here.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="https://pinsider.io"
            target="_blank"
            rel="noopener noreferrer"
            className="pill inline-flex items-center gap-2 bg-accent px-5 py-2.5 text-sm font-medium text-cta-text hover:brightness-110"
            aria-label="Go to pinsider.io"
          >
            <PinSiderMark className="h-5 w-5 ring-[#0A1628]/20" size={20} />
            <span>
              Go to{" "}
              <span className="font-semibold">
                Pinsider<span className="text-[#F0D78C]">.io</span>
              </span>
            </span>
          </a>
          <Link href="/community" className="pill border border-border px-5 py-2.5 text-sm text-text">
            Back to Community
          </Link>
        </div>
      </div>
    </Section>
  );
}
