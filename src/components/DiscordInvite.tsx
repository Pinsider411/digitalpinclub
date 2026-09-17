/**
 * Points collectors to the official Disney Pinnacle Discord.
 * Digital Pin Club is independent — we do not use Discord brand assets.
 */

export const DISCORD_INVITE_URL = "https://discord.gg/disneypinnacle";

type Variant = "full" | "compact" | "aside";

export function DiscordInvite({
  variant = "full",
  className = "",
}: {
  variant?: Variant;
  className?: string;
}) {
  if (variant === "compact") {
    return (
      <div
        className={`card gold-wash flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-6 ${className}`}
      >
        <div className="min-w-0">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            Official hangout
          </p>
          <h2 className="mt-2 font-display text-xl font-semibold text-text sm:text-2xl">
            Disney Pinnacle Discord
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
            Discord is a free chat app — servers are like clubhouses with topic rooms.
            You can lurk and read first; no need to talk right away. This is the{" "}
            <span className="text-text">official</span> Dapper Labs / Disney Pinnacle
            server (we&apos;re independent and just point collectors there).
          </p>
        </div>
        <a
          href={DISCORD_INVITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="pill shrink-0 bg-cta px-5 py-2.5 text-center text-sm font-medium text-cta-text transition hover:brightness-110"
        >
          Join the official Discord
        </a>
      </div>
    );
  }

  if (variant === "aside") {
    return (
      <aside
        className={`rounded-[20px] border border-accent/30 bg-surface p-5 sm:p-6 ${className}`}
      >
        <p className="font-mono text-xs uppercase tracking-widest text-accent">
          Related · Discord
        </p>
        <h2 className="mt-2 font-display text-lg font-semibold text-text">
          Official Disney Pinnacle Discord
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Free chat clubhouse with drop talk and collector help — run by Dapper Labs /
          Disney Pinnacle. Digital Pin Club is independent; we just share the invite as a
          useful hangout. Lurk first if you like.
        </p>
        <a
          href={DISCORD_INVITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block font-mono text-xs text-accent hover:underline"
        >
          Join the official Discord →
        </a>
      </aside>
    );
  }

  /* full — primary community card */
  return (
    <article
      className={`card border-accent/40 overflow-hidden p-0 ${className}`}
      aria-labelledby="discord-invite-heading"
    >
      <div className="p-8">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">
          Official hangout
        </p>
        <h2
          id="discord-invite-heading"
          className="mt-2 font-display text-2xl font-semibold text-text sm:text-3xl"
        >
          Disney Pinnacle Discord
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
          New to Discord? It&apos;s a free chat app. Servers are like clubhouses with
          different rooms for different topics. You can join, lurk, and read for a while —
          there&apos;s no pressure to say anything right away.
        </p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
          This invite goes to the{" "}
          <span className="text-text">official</span> Dapper Labs / Disney Pinnacle Discord
          — a lively place for drop talk, help channels, trading energy, and meeting
          collectors worldwide. Digital Pin Club is independent and not affiliated; we
          simply point collectors there because it&apos;s a useful hangout beside our
          clubhouse.
        </p>
        <div className="mt-6">
          <a
            href={DISCORD_INVITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="pill inline-block bg-cta px-6 py-3 text-sm font-medium text-cta-text transition hover:brightness-110"
          >
            Join the official Discord
          </a>
        </div>
      </div>
      <div className="border-t border-border px-8 py-3">
        <p className="font-mono text-[10px] leading-relaxed text-muted">
          External link · Official vanity invite discord.gg/disneypinnacle · Not a Digital
          Pin Club server
        </p>
      </div>
    </article>
  );
}
