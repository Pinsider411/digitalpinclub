"use client";

import Link from "next/link";
import { useState } from "react";
import { BadgeMark } from "./BadgeMark";

const nav = [
  { href: "/learn", label: "Learn" },
  { href: "/calendar", label: "Calendar" },
  { href: "/community", label: "Community" },
  { href: "/spotlights", label: "Spotlights" },
  { href: "/news", label: "News" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border">
      <div className="glass">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <BadgeMark className="h-8 w-8" />
            <span className="font-display text-base font-semibold text-accent sm:text-lg">
              Digital Pin Club
            </span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted transition hover:text-accent-soft"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <Link
              href="/pinsider"
              className="text-sm text-muted transition hover:text-accent"
            >
              PinSider
            </Link>
            <Link
              href="/join"
              className="pill bg-cta px-4 py-2 text-sm font-medium text-cta-text transition hover:brightness-110"
            >
              Join the Club
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg border border-border p-2 text-text md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              {open ? (
                <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" />
              ) : (
                <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.5" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div id="mobile-nav" className="border-t border-border px-4 py-4 md:hidden">
            <nav className="flex flex-col gap-3" aria-label="Mobile">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted hover:text-accent-soft"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/pinsider"
                className="text-sm text-muted hover:text-accent"
                onClick={() => setOpen(false)}
              >
                PinSider
              </Link>
              <Link
                href="/join"
                className="pill mt-1 inline-flex w-fit bg-cta px-4 py-2 text-sm font-medium text-cta-text"
                onClick={() => setOpen(false)}
              >
                Join the Club
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
