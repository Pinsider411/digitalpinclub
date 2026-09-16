import Link from "next/link";
import { BadgeMark } from "./BadgeMark";
import { SocialLinks } from "./SocialLinks";
import { PinSiderLockup } from "./PinSiderMark";

const links = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-md">
            <div className="mb-3 flex items-center gap-2">
              <BadgeMark className="h-7 w-7" />
              <span className="font-display font-semibold text-accent">Digital Pin Club</span>
            </div>
            <p className="text-sm leading-relaxed text-muted">
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
              aria-label="PinSider"
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
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
            Find us
          </p>
          <SocialLinks variant="footer" />
        </div>

        <p className="mt-8 font-mono text-xs text-muted">
          © {new Date().getFullYear()} Digital Pin Club · Unofficial fan community
        </p>
      </div>
    </footer>
  );
}
