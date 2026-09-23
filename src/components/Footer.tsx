import Link from "next/link";
import { DpcLockup } from "./DpcLockup";
import { SocialLinks } from "./SocialLinks";
import { PinSiderLockup } from "./PinSiderMark";

const links = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/spotlights", label: "Spotlights" },
  { href: "/news", label: "News" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border-gold/30 bg-bg-elevated">
      <div className="mx-auto max-w-[1160px] px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-md">
            <div className="mb-4">
              <DpcLockup markClassName="h-9 w-9" />
            </div>
            <p className="font-display text-lg font-semibold text-gold">
              A club, not a store.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Digital Pin Club is an independent fan community. Not affiliated with,
              endorsed by, or sponsored by The Walt Disney Company, Dapper Labs, or
              Disney Pinnacle.
            </p>
          </div>
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2" aria-label="Footer">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-muted transition hover:text-text"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://pinsider.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition hover:opacity-90"
              aria-label="Pinsider"
            >
              <PinSiderLockup
                markSize={20}
                markClassName="h-5 w-5"
                wordmarkSize="sm"
                withIo
              />
            </a>
          </nav>
        </div>

        <div className="mt-8 border-t border-border pt-6">
          <p className="mb-3 font-display text-xs uppercase tracking-[0.12em] text-gold-deep">
            Find us
          </p>
          <SocialLinks variant="footer" />
        </div>

        <p className="mt-8 text-xs text-muted">
          © {new Date().getFullYear()} Digital Pin Club
        </p>
      </div>
    </footer>
  );
}
