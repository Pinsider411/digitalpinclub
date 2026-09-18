import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { WatchFollowClient } from "@/components/watch/WatchFollowClient";
import { SubmitCreatorForm } from "@/components/watch/SubmitCreatorForm";
import { getFeaturedThisWeek } from "@/data/creators";
import { DiscordInvite } from "@/components/DiscordInvite";

export const metadata: Metadata = {
  title: "Watch & Follow",
  description:
    "Disney Pinnacle creators to watch — drop alerts, how-tos, cafe hangs, and collector podcasts. Digital Pin Club directory.",
};

export default function WatchFollowPage() {
  const featuredWeek = getFeaturedThisWeek();

  return (
    <Section>
      <Link
        href="/community"
        className="mb-6 inline-flex items-center gap-2 font-mono text-xs text-muted transition hover:text-accent"
      >
        ← Back to Community
      </Link>
      <PageHero
        eyebrow="Community"
        title="Watch & Follow"
        description="Collectors and creators who make Pinnacle clearer — drop alerts, how-tos, cafe hangs, and long-form culture. Independent voices; listing is not an endorsement."
      />

      <WatchFollowClient featuredWeek={featuredWeek} />

      <div className="mt-12">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">
          Suggest someone
        </p>
        <h2 className="mt-2 font-display text-2xl font-semibold text-text sm:text-3xl">
          Submit a creator
        </h2>
        <p className="mt-2 max-w-xl text-sm text-muted">
          Know a helpful Pinnacle voice? Send name, platforms, and a best video — with
          permission.
        </p>
        <div className="mt-6 max-w-lg">
          <SubmitCreatorForm />
        </div>
      </div>

      <div className="mt-10 max-w-2xl">
        <DiscordInvite variant="aside" />
      </div>

      <aside className="mt-10 max-w-2xl rounded-2xl border border-border bg-surface p-5 text-sm leading-relaxed text-muted">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">
          Independence note
        </p>
        <p className="mt-2">
          Independent collectors and creators. Views are their own. Listing ≠ endorsement
          by Disney, Dapper Labs, Disney Pinnacle, or Digital Pin Club.
        </p>
      </aside>

      <nav className="mt-8 flex flex-wrap gap-3" aria-label="Related">
        <Link
          href="/community"
          className="pill border border-border px-4 py-2 text-sm text-text transition hover:border-accent"
        >
          Community hub
        </Link>
        <Link
          href="/learn/burns"
          className="pill border border-border px-4 py-2 text-sm text-text transition hover:border-accent"
        >
          Burns guide
        </Link>
        <Link
          href="/learn"
          className="pill border border-border px-4 py-2 text-sm text-text transition hover:border-accent"
        >
          Learn
        </Link>
        <Link
          href="/join"
          className="pill border border-border px-4 py-2 text-sm text-text transition hover:border-accent"
        >
          Join the Club
        </Link>
      </nav>
    </Section>
  );
}
