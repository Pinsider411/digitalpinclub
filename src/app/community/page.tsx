import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { PinMedia } from "@/components/PinMedia";
import { PinDisclaimer } from "@/components/PinDisclaimer";
import { clubPins } from "@/data/pins";
import { PinSiderMark } from "@/components/PinSiderMark";
import { DiscordInvite } from "@/components/DiscordInvite";

export const metadata: Metadata = {
  title: "Community",
  description: "Join Digital Pin Club — free, unofficial, run by collectors. Hangouts, Watch & Follow creators, and clubhouse culture.",
};

export default function CommunityPage() {
  return (
    <Section>
      <PageHero
        eyebrow="Join"
        title="Find your people."
        description="Digital Pin Club is the join destination — a warm clubhouse for collectors who want conversation, calendar, and culture without a storefront."
      />
      <div className="grid gap-4 md:grid-cols-2">
        <div className="card p-8">
          <h2 className="font-display text-2xl font-semibold text-text">What you get</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li className="flex gap-2">
              <span className="text-live">✓</span> Hangouts and open chats
            </li>
            <li className="flex gap-2">
              <span className="text-live">✓</span> Spotlights and board culture
            </li>
            <li className="flex gap-2">
              <span className="text-live">✓</span> Shared calendar of drops
            </li>
            <li className="flex gap-2">
              <span className="text-live">✓</span> Guides written by collectors
            </li>
            <li className="flex gap-2">
              <span className="text-live">✓</span> Free to join — forever on this site
            </li>
          </ul>
        </div>
        <div className="card border-accent/40 overflow-hidden p-0">
          <div className="flex gap-4 p-8">
            <div className="min-w-0 flex-1">
              <p className="font-mono text-xs text-accent">Ready?</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-text">
                Join the Club
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Sign up on the Join page to get on the club roster. Hangouts and channels
                keep evolving — Community stays the clubhouse hub.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/join"
                  className="pill bg-cta px-5 py-2.5 text-sm font-medium text-cta-text"
                >
                  Join the Club
                </Link>
                <a
                  href="https://pinsider.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill inline-flex items-center gap-2 border border-border px-5 py-2.5 text-sm text-text hover:border-accent"
                  aria-label="Visit Pinsider"
                >
                  <PinSiderMark className="h-5 w-5" size={20} />
                  <span>
                    Visit <span className="font-semibold">Pinsider</span>
                  </span>
                </a>
              </div>
            </div>
            <figure className="w-24 shrink-0 self-start">
              <PinMedia
                pin={clubPins.pluto}
                autoPlay={false}
                className="aspect-square rounded-xl border border-border bg-bg/60 p-1"
                imgClassName="object-contain"
                sizes="96px"
              />
              <figcaption className="mt-2 font-mono text-[10px] text-muted">
                Club example
              </figcaption>
            </figure>
          </div>
          <div className="border-t border-border px-8 py-3">
            <PinDisclaimer />
          </div>
        </div>
      </div>

      <div className="mt-8">
        <DiscordInvite variant="full" />
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <Link
          href="/community/watch"
          className="card block p-6 transition hover:border-accent"
        >
          <p className="font-mono text-xs text-accent">Watch &amp; Follow</p>
          <h2 className="mt-2 font-display text-xl font-semibold text-text">
            Creators in the hobby
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Drop alerts, how-tos, cafe hangs, and collector podcasts — independent voices
            worth following. Listing is not an endorsement.
          </p>
          <p className="mt-4 font-mono text-xs text-accent">Open Watch &amp; Follow →</p>
        </Link>
        <Link href="/learn/burns" className="card block p-6 transition hover:border-accent">
          <p className="font-mono text-xs text-accent">Learn</p>
          <h2 className="mt-2 font-display text-xl font-semibold text-text">Burns</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Why leftover LE pins are often burned on-chain — and how circulating supply
            can sit under the announced cap.
          </p>
          <p className="mt-4 font-mono text-xs text-accent">Read Burns →</p>
        </Link>
      </div>

      <p className="mt-8 text-sm text-muted">
        Unofficial fan community. Not affiliated with Disney, Dapper Labs, or Disney
        Pinnacle.
      </p>
    </Section>
  );
}
