import Link from "next/link";
import { DiscordInvite, DISCORD_INVITE_URL } from "@/components/DiscordInvite";
import { PinSiderMark } from "@/components/PinSiderMark";
import { clubHangs } from "@/data/club-hangs";
import {
  boardGalleryNote,
  type BoardGalleryCard,
} from "@/data/board-gallery";
import { spotlightsData } from "@/data/spotlights";
import { calendarEvents } from "@/data/calendar-events";
import { BoardSubmitForm } from "./BoardSubmitForm";

const pinBg: Record<"g" | "b" | "r" | "n", string> = {
  g: "bg-[radial-gradient(circle_at_35%_30%,#f0d572,#d4af37_50%,#6a5520)]",
  b: "bg-[radial-gradient(circle_at_35%_30%,#cfe6ff,#5b9fd4_55%,#163053)]",
  r: "bg-[radial-gradient(circle_at_35%_30%,#ffd0c8,#d47a6a_55%,#4a2030)]",
  n: "bg-[radial-gradient(circle_at_35%_30%,#f5f0e6,#8a9bb0_55%,#2a3f5f)]",
};

type CommunityLobbyProps = {
  galleryCards?: BoardGalleryCard[];
};

export function CommunityLobby({ galleryCards = [] }: CommunityLobbyProps) {
  const spotlightHandles = spotlightsData.collectors
    .slice(0, 3)
    .map((c) => c.handle);
  const spotlightBody =
    spotlightHandles.length > 0
      ? `${spotlightHandles[0]} Collector of the Day, plus ${spotlightHandles.slice(1).join(", ")}, and the rest of the lineup.`
      : "This week’s collectors and the rest of the lineup.";

  const boardPulse = calendarEvents
    .slice(0, 3)
    .map((e) => e.title.replace(/\s*\[\d+\/\d+\]/, ""))
    .join(", ");

  return (
    <div>
      <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
        digitalpinclub.com / community
      </p>
      <h1 className="font-display text-[clamp(30px,4.4vw,46px)] font-semibold leading-[1.05] tracking-tight text-text">
        The clubhouse lobby.{" "}
        <span className="ml-2 inline-block align-middle rounded-full border border-gold/35 bg-[rgba(212,175,55,0.1)] px-2.5 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-widest text-gold-soft">
          Members only
        </span>
      </h1>
      <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">
        Who’s here, what’s happening this week, and boards worth a look — conversation and
        culture without a storefront.
      </p>

      {/* Hub grid */}
      <section className="mt-10">
        <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-display text-[22px] font-semibold tracking-tight text-text">
            In the clubhouse
          </h2>
          <p className="max-w-md text-[13px] text-muted sm:text-right">
            Shortcuts to what’s already live across the site.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Link
            href="/spotlights"
            className="flex min-h-[168px] flex-col rounded-2xl border border-border bg-gradient-to-br from-card/95 to-bg/88 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition hover:border-gold/45"
          >
            <p className="mb-2.5 font-mono text-[10px] font-bold uppercase tracking-widest text-gold">
              Spotlights
            </p>
            <p className="mb-2 text-[17px] font-semibold tracking-tight text-text">
              This week’s collectors
            </p>
            <p className="flex-1 text-[13px] leading-snug text-muted">{spotlightBody}</p>
            <p className="mt-3.5 font-mono text-[11px] font-semibold text-gold-soft">
              Open Spotlights →
            </p>
          </Link>

          <Link
            href="/community/watch"
            className="flex min-h-[168px] flex-col rounded-2xl border border-border bg-gradient-to-br from-card/95 to-bg/88 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition hover:border-gold/45"
          >
            <p className="mb-2.5 font-mono text-[10px] font-bold uppercase tracking-widest text-gold">
              Watch &amp; Follow
            </p>
            <p className="mb-2 text-[17px] font-semibold tracking-tight text-text">
              Creators to follow
            </p>
            <p className="flex-1 text-[13px] leading-snug text-muted">
              Drop alerts, how-tos, cafe hangs, and collector podcasts — independent voices.
            </p>
            <p className="mt-3.5 font-mono text-[11px] font-semibold text-gold-soft">
              Browse creators →
            </p>
          </Link>

          <Link
            href="/calendar"
            className="flex min-h-[168px] flex-col rounded-2xl border border-border bg-gradient-to-br from-card/95 to-bg/88 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition hover:border-gold/45"
          >
            <p className="mb-2.5 font-mono text-[10px] font-bold uppercase tracking-widest text-gold">
              On the board
            </p>
            <p className="mb-2 text-[17px] font-semibold tracking-tight text-text">
              Live &amp; upcoming
            </p>
            <p className="flex-1 text-[13px] leading-snug text-muted">
              {boardPulse
                ? `${boardPulse} — calendar-backed drop pulse.`
                : "Calendar-backed drop pulse."}
            </p>
            <p className="mt-3.5 font-mono text-[11px] font-semibold text-gold-soft">
              See calendar →
            </p>
          </Link>

          <a
            href={DISCORD_INVITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[168px] flex-col rounded-2xl border border-border bg-gradient-to-br from-card/95 to-bg/88 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition hover:border-gold/45"
          >
            <p className="mb-2.5 font-mono text-[10px] font-bold uppercase tracking-widest text-gold">
              Hangouts
            </p>
            <p className="mb-2 text-[17px] font-semibold tracking-tight text-text">
              Pinnacle Discord
            </p>
            <p className="flex-1 text-[13px] leading-snug text-muted">
              Official Dapper / Pinnacle server for drop talk and help. We’re independent; we
              point you there.
            </p>
            <p className="mt-3.5 font-mono text-[11px] font-semibold text-gold-soft">
              How to join →
            </p>
          </a>
        </div>
      </section>

      {/* Club hangs */}
      <section className="mt-10">
        <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-display text-[22px] font-semibold tracking-tight text-text">
            Club hangs this week
          </h2>
          <p className="max-w-md text-[13px] text-muted sm:text-right">
            Not drop times — when collectors actually gather.
          </p>
        </div>
        <div className="overflow-hidden rounded-[18px] border border-border border-l-[3px] border-l-gold bg-gradient-to-br from-[rgba(18,39,66,0.94)] to-[rgba(9,22,39,0.9)]">
          {clubHangs.map((hang) => (
            <div
              key={hang.id}
              className="grid items-center gap-2 border-b border-border/75 px-5 py-4 last:border-b-0 sm:grid-cols-[120px_1fr_auto] sm:gap-4"
            >
              <div className="font-mono text-xs font-semibold leading-snug text-gold-soft">
                {hang.when}
              </div>
              <div>
                <p className="text-[15px] font-semibold text-text">{hang.title}</p>
                <p className="mt-0.5 text-[13px] leading-snug text-muted">{hang.note}</p>
              </div>
              <span
                className={`w-fit rounded-full border px-2.5 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-wide ${
                  hang.tagTone === "voice"
                    ? "border-gold/35 bg-[rgba(212,175,55,0.12)] text-gold-soft"
                    : "border-live/35 bg-live/10 text-live"
                }`}
              >
                {hang.tag}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Board gallery */}
      <section className="mt-10" id="board-gallery">
        <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-display text-[22px] font-semibold tracking-tight text-text">
            Board gallery
          </h2>
          <div className="sm:text-right">
            <a
              href="#submit-pinbook"
              className="text-[13px] font-semibold text-gold-soft hover:underline"
            >
              Submit your Pinbook →
            </a>
            <p className="mt-1.5 text-[11px] text-muted">
              Refreshed after daily approve · may be outdated
            </p>
          </div>
        </div>
        <p className="mb-4 max-w-xl text-[13px] text-muted">{boardGalleryNote}</p>
        {galleryCards.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border bg-card/60 px-5 py-10 text-center">
            <p className="font-display text-lg font-semibold tracking-tight text-text">
              No approved boards yet
            </p>
            <p className="mx-auto mt-2 max-w-md text-[13px] leading-relaxed text-muted">
              Member snapshots appear here after a light daily approve. Snapshots may be
              outdated — this is not a live Pinbook sync.
            </p>
            <a
              href="#submit-pinbook"
              className="mt-5 inline-flex items-center justify-center rounded-full border border-gold/45 bg-[rgba(212,175,55,0.12)] px-4 py-2.5 text-[13px] font-semibold text-gold-soft hover:border-gold/60"
            >
              Submit your Pinbook →
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-3.5 md:grid-cols-3">
            {galleryCards.map((card) => (
              <article
                key={`${card.handle}-${card.shareUrl}`}
                className="overflow-hidden rounded-2xl border border-border bg-card"
              >
                <div
                  className="relative grid aspect-[4/3] place-items-center overflow-hidden"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 35%, rgba(212,175,55,.28), transparent 42%), radial-gradient(circle at 70% 60%, rgba(91,159,212,.22), transparent 45%), linear-gradient(145deg, #163053, #0b1830)",
                  }}
                >
                  <span className="absolute left-2.5 top-2.5 z-10 rounded-full border border-gold/35 bg-[rgba(7,17,31,0.75)] px-2 py-1 font-mono text-[9px] font-semibold uppercase tracking-widest text-gold-soft">
                    Snapshot
                  </span>
                  {card.imageUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element -- external Disney OG may change; plain img is fine
                    <img
                      src={card.imageUrl}
                      alt={`${card.handle} Pinbook snapshot`}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : (
                    <div className="grid grid-cols-3 gap-2">
                      {card.pinColors.map((c, i) => (
                        <span
                          key={`${card.handle}-${i}`}
                          className={`h-[42px] w-[42px] rounded-full border border-[rgba(245,240,230,0.25)] shadow-[0_6px_14px_rgba(0,0,0,0.28)] ${pinBg[c]}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
                <div className="px-3.5 pb-4 pt-3.5">
                  <p className="text-sm font-semibold text-text">{card.handle}</p>
                  <p className="mt-1 text-xs leading-snug text-muted">{card.note}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <a
                      href={card.tradeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-gold/45 bg-[rgba(212,175,55,0.12)] px-2.5 py-1.5 text-[11px] text-gold-soft"
                    >
                      Trade
                    </a>
                    {card.shareUrl && card.shareUrl !== "#" ? (
                      <a
                        href={card.shareUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-border bg-bg/40 px-2.5 py-1.5 text-[11px] text-text"
                      >
                        Open share link
                      </a>
                    ) : (
                      <span className="rounded-full border border-border bg-bg/40 px-2.5 py-1.5 text-[11px] text-muted">
                        Open share link
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Pathways + join */}
      <div className="mt-10 grid grid-cols-1 gap-3.5 lg:grid-cols-[1.4fr_1fr]">
        <div className="rounded-[18px] border border-border bg-surface/85 p-5 sm:p-6">
          <h3 className="font-display text-lg font-semibold tracking-tight text-text">
            How to plug in
          </h3>
          <p className="mt-2 text-[13px] leading-relaxed text-muted">
            Three easy doors — pick the one that matches where you are.
          </p>
          <div className="mt-3.5 grid gap-2">
            <Link
              href="/start"
              className="flex items-center justify-between gap-3 rounded-xl border border-border/90 bg-bg/45 px-3.5 py-3 transition hover:border-gold/40"
            >
              <div>
                <strong className="block text-[13px] text-text">New collector</strong>
                <span className="text-xs text-muted">Start here → Learn the craft</span>
              </div>
              <span className="text-[13px] font-semibold text-gold-soft">Go →</span>
            </Link>
            <Link
              href="/spotlights"
              className="flex items-center justify-between gap-3 rounded-xl border border-border/90 bg-bg/45 px-3.5 py-3 transition hover:border-gold/40"
            >
              <div>
                <strong className="block text-[13px] text-text">Active trader</strong>
                <span className="text-xs text-muted">Spotlights → Discord hangouts</span>
              </div>
              <span className="text-[13px] font-semibold text-gold-soft">Go →</span>
            </Link>
            <Link
              href="/community/watch#suggest"
              className="flex items-center justify-between gap-3 rounded-xl border border-border/90 bg-bg/45 px-3.5 py-3 transition hover:border-gold/40"
            >
              <div>
                <strong className="block text-[13px] text-text">Creator</strong>
                <span className="text-xs text-muted">Get listed on Watch &amp; Follow</span>
              </div>
              <span className="text-[13px] font-semibold text-gold-soft">Go →</span>
            </Link>
          </div>
          <p className="mt-4 border-t border-border/70 pt-3.5 text-xs leading-relaxed text-[#7f90a8]">
            Club norms: be kind, no scam pitches, verify on official Pinnacle channels,
            listing ≠ endorsement. Digital Pin Club is independent.
          </p>
          <p className="mt-2 text-xs text-muted">
            Also see{" "}
            <Link href="/learn" className="text-gold-soft hover:underline">
              Learn
            </Link>
            .
          </p>
        </div>

        <div className="rounded-[18px] border border-border bg-surface/85 p-5 sm:p-6">
          <h3 className="font-display text-lg font-semibold tracking-tight text-text">
            Join the Club
          </h3>
          <p className="mt-2 text-[13px] leading-relaxed text-muted">
            Free roster signup. Community stays the lobby — hangouts and channels keep
            evolving.
          </p>
          <div className="mt-4 flex flex-wrap gap-2.5">
            <Link
              href="/join"
              className="inline-flex items-center justify-center rounded-full bg-cta px-4 py-2.5 text-[13px] font-bold text-cta-text"
            >
              Join the Club
            </Link>
            <a
              href="https://pinsider.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gold/45 px-4 py-2.5 text-[13px] font-bold text-gold-soft"
            >
              <PinSiderMark className="h-4 w-4" size={16} />
              Visit Pinsider
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <DiscordInvite variant="compact" />
      </div>

      <section className="mt-10" id="submit-pinbook">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">
          Board gallery
        </p>
        <h2 className="mt-2 font-display text-2xl font-semibold text-text">
          Submit your Pinbook
        </h2>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
          Share a Pinbook link for the member-submitted gallery. Submissions wait for a
          light daily approve before they appear — snapshots may be outdated; this is not
          live sync.
        </p>
        <div className="mt-5 max-w-xl">
          <BoardSubmitForm />
        </div>
      </section>
    </div>
  );
}
