"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";

const faqs: { q: string; a: ReactNode }[] = [
  {
    q: "Is Digital Pin Club official?",
    a: (
      <>
        No. Digital Pin Club is an independent fan community for collectors. We are not
        affiliated with, endorsed by, or sponsored by The Walt Disney Company, Dapper Labs,
        or Disney Pinnacle. The official product is{" "}
        <a
          href="https://www.disneypinnacle.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline-offset-2 hover:underline"
        >
          Disney Pinnacle
        </a>
        .
      </>
    ),
  },
  {
    q: "Does it cost anything to join?",
    a: "The club is free to join. Pinsider — our companion data desk for prices, alerts, and history — offers a free tier and an optional Pro plan around $5/month. This club site itself is never paywalled.",
  },
  {
    q: "What are digital pins?",
    a: (
      <>
        Digital pins are collectible digital enamel-style pins you can collect, trade, and
        display in Pinbooks in Disney Pinnacle. Read our guide:{" "}
        <Link href="/learn/what-are-digital-pins" className="text-accent underline-offset-2 hover:underline">
          What are digital pins?
        </Link>
      </>
    ),
  },
  {
    q: "Where do people trade?",
    a: (
      <>
        Collectors trade inside the official app (Trade Links / offers) and on the official
        web Marketplace. Digital Pin Club helps you learn norms — we don’t run a marketplace
        on this site. See{" "}
        <Link href="/learn/trading-and-marketplace" className="text-accent underline-offset-2 hover:underline">
          Trading &amp; Marketplace
        </Link>
        .
      </>
    ),
  },
  {
    q: "I’m brand new. Where should I start?",
    a: (
      <>
        Head to{" "}
        <Link href="/start" className="text-accent underline-offset-2 hover:underline">
          Start Here
        </Link>{" "}
        for a friendly path, then browse{" "}
        <Link href="/learn" className="text-accent underline-offset-2 hover:underline">
          Learn
        </Link>{" "}
        for guides and{" "}
        <Link href="/calendar" className="text-accent underline-offset-2 hover:underline">
          Calendar
        </Link>{" "}
        for upcoming drops and hangouts.
      </>
    ),
  },
];

export function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="card overflow-hidden">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="font-medium text-text">{item.q}</span>
              <span
                className={`font-mono text-accent transition ${isOpen ? "rotate-45" : ""}`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            {isOpen && (
              <div className="border-t border-border px-5 py-4">
                <p className="text-sm leading-relaxed text-muted">{item.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
