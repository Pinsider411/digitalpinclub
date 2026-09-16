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
      {/* Opaque clubhouse bar — soft wash tint, not glassmorphism */}
      <div className="border-b-0 bg-card/95 supports-[backdrop-filter]:bg-card/90">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link href="/" className="flex shrink-0 items-center gap-2.5">
            <BadgeMark className="h-8 w-8" />
            <span className="font-display text-base font-semibold text-text sm:text-lg">
              Digital Pin Club
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-1.5 text-sm text-muted transition hover:bg-soft-wash hover:text-text"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/pinsider"
              className="rounded-lg px-3 py-1.5 text-sm text-muted transition hover:bg-soft-wash hover:text-accent"
            >
              PinSider
            </Link>
            <Link
              href="/community"
              className="pill bg-cta px-4 py-2 text-sm font-medium text-white transition hover:brightness-110"
            >
              Join the Club
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg border border-border bg-card p-2 text-text transition hover:bg-soft-wash md:hidden"
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
          <div id="mobile-nav" className="border-t border-border bg-card px-4 py-4 md:hidden">
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm text-muted hover:bg-soft-wash hover:text-text"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/pinsider"
                className="rounded-lg px-3 py-2 text-sm text-muted hover:bg-soft-wash hover:text-accent"
                onClick={() => setOpen(false)}
              >
                PinSider
              </Link>
              <Link
                href="/community"
                className="pill mt-2 inline-flex w-fit bg-cta px-4 py-2 text-sm font-medium text-white"
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
