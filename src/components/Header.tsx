"use client";

import Link from "next/link";
import { useState } from "react";
import { DpcLockup } from "./DpcLockup";
import { PinSiderLockup } from "./PinSiderMark";

const nav = [
  { href: "/", label: "Clubhouse" },
  { href: "/calendar", label: "Drops" },
  { href: "/learn", label: "Learn" },
  { href: "/community", label: "Community" },
  { href: "/spotlights", label: "Spotlights" },
  { href: "/news", label: "News" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border-gold/35 bg-bg-elevated/92 backdrop-blur-md">
      <div className="mx-auto flex min-h-[72px] max-w-[1160px] items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <DpcLockup showTagline markClassName="h-10 w-10 sm:h-11 sm:w-11" />
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-display text-sm font-medium text-text-soft transition hover:text-gold-soft"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href="/pinsider"
            className="inline-flex items-center gap-1.5 transition hover:opacity-90"
            aria-label="Pinsider"
          >
            <PinSiderLockup
              markSize={22}
              markClassName="h-[22px] w-[22px]"
              wordmarkSize="sm"
              withIo
            />
          </Link>
          <Link
            href="/join"
            className="pill border-[1.5px] border-border-gold px-5 py-2.5 font-display text-sm font-semibold text-gold transition hover:border-gold-soft hover:text-gold-soft"
          >
            Join the Club
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-border p-2 text-text lg:hidden"
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
        <div id="mobile-nav" className="border-t border-border px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-3" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-display text-sm font-medium text-text-soft hover:text-gold-soft"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/pinsider"
              className="inline-flex w-fit items-center gap-1.5"
              aria-label="Pinsider"
              onClick={() => setOpen(false)}
            >
              <PinSiderLockup
                markSize={22}
                markClassName="h-[22px] w-[22px]"
                wordmarkSize="sm"
                withIo
              />
            </Link>
            <Link
              href="/join"
              className="pill mt-2 inline-flex w-full items-center justify-center border-[1.5px] border-border-gold px-5 py-3 font-display text-sm font-semibold text-gold"
              onClick={() => setOpen(false)}
            >
              Join the Club
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
