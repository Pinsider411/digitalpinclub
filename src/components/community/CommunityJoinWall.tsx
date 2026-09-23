import Link from "next/link";
import { UnlockMemberForm } from "./UnlockMemberForm";

/** Guest gate: blurred lobby teaser + centered Join wall. */
export function CommunityJoinWall() {
  return (
    <div>
      <div className="relative min-h-[720px] overflow-hidden rounded-[20px] border border-border">
        {/* Blurred teaser of the lobby chrome */}
        <div
          className="pointer-events-none select-none bg-gradient-to-br from-surface/90 to-bg/95 p-8 sm:p-9"
          style={{ filter: "blur(7px) saturate(0.85)", transform: "scale(1.02)" }}
          aria-hidden="true"
        >
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            Members only
          </p>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-text">
            The clubhouse lobby.
          </h1>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted">
            Who’s here, what’s happening this week, and boards worth a look.
          </p>
          <div className="mt-7 grid grid-cols-2 gap-2.5 md:grid-cols-4">
            {[
              ["Spotlights", "This week’s collectors"],
              ["Watch & Follow", "Creators to follow"],
              ["On the board", "Live & upcoming"],
              ["Hangouts", "Pinnacle Discord"],
            ].map(([k, t]) => (
              <div
                key={k}
                className="min-h-[110px] rounded-[14px] border border-border bg-card p-3.5"
              >
                <p className="mb-2 font-mono text-[10px] font-bold uppercase tracking-widest text-gold">
                  {k}
                </p>
                <p className="text-[15px] font-semibold text-text">{t}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 overflow-hidden rounded-[14px] border border-border border-l-[3px] border-l-gold bg-[rgba(18,39,66,0.7)]">
            {[
              ["Mon · 6 PM PT", "New collector hour"],
              ["Wed · 7:30 PT", "Cafe hang"],
              ["Fri · 5 PM PT", "Trade night"],
            ].map(([when, title]) => (
              <div
                key={when}
                className="grid grid-cols-[110px_1fr] gap-3 border-b border-border/70 px-4 py-3 last:border-b-0"
              >
                <span className="font-mono text-[11px] font-semibold text-gold-soft">
                  {when}
                </span>
                <span className="text-sm font-semibold text-text">{title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Gate overlay */}
        <div className="absolute inset-0 z-[5] flex items-center justify-center bg-gradient-to-b from-bg/35 via-bg/72 to-bg/88 p-4 sm:p-7">
          <div className="w-full max-w-[440px] rounded-[20px] border border-gold/40 bg-gradient-to-br from-card/98 to-[rgba(8,18,34,0.98)] p-6 shadow-[0_28px_80px_rgba(0,0,0,0.55)] sm:p-7">
            <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-[rgba(212,175,55,0.12)] px-2.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-widest text-gold-soft">
              🔒 Members only
            </div>
            <h2 className="font-display text-[26px] font-semibold tracking-tight text-text">
              Join to enter the lobby.
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Community hangs, the board gallery, and clubhouse shortcuts are for members.
              Free to join — forever.
            </p>
            <ul className="mt-5 space-y-2 text-[13px] leading-snug text-text">
              {[
                "Club hangs schedule (cafe, trade night, new-collector hour)",
                "Member-submitted board gallery (refreshed weekly) + submit your Pinbook",
                "Member shortcuts to Spotlights, Watch & Follow, Discord",
              ].map((perk) => (
                <li key={perk} className="flex gap-2">
                  <span className="font-bold text-gold" aria-hidden>
                    ✓
                  </span>
                  <span>{perk}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/join"
              className="mt-5 flex w-full items-center justify-center rounded-full bg-cta px-4 py-3 text-sm font-bold text-cta-text transition hover:brightness-110"
            >
              Join the Club — free
            </Link>

            <div className="mt-5 border-t border-border/70 pt-4">
              <UnlockMemberForm />
            </div>

            <p className="mt-3 text-center text-[11px] leading-relaxed text-[#7f90a8]">
              Full form also on{" "}
              <Link href="/join" className="text-gold-soft underline underline-offset-2">
                /join
              </Link>
              . Spotlights, Learn, News, and Calendar stay public.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap justify-between gap-x-4 gap-y-2 text-xs leading-relaxed text-muted">
        <span>Guest sees a blurred teaser + Join wall. Lobby unlocks after Join.</span>
        <span>
          Still public:{" "}
          <Link href="/spotlights" className="font-semibold text-text hover:text-gold">
            Spotlights
          </Link>
          ,{" "}
          <Link href="/learn" className="font-semibold text-text hover:text-gold">
            Learn
          </Link>
          ,{" "}
          <Link href="/news" className="font-semibold text-text hover:text-gold">
            News
          </Link>
          ,{" "}
          <Link href="/calendar" className="font-semibold text-text hover:text-gold">
            Calendar
          </Link>
        </span>
      </div>
    </div>
  );
}
