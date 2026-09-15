"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Is Digital Pin Club official?",
    a: "No. Digital Pin Club is an independent fan community for collectors. We are not affiliated with, endorsed by, or sponsored by The Walt Disney Company, Dapper Labs, or Disney Pinnacle.",
  },
  {
    q: "Does it cost anything to join?",
    a: "The club is free to join. PinSider — our companion data desk for prices, alerts, and history — offers a free tier and an optional Pro plan around $5/month. This club site itself is never paywalled.",
  },
  {
    q: "What are digital pins?",
    a: "Digital pins are collectible digital enamel-style pins you can collect, trade, and display on a board in apps like Disney Pinnacle. Think pin trading for the digital era — rarities, drops, sets, and community culture included.",
  },
  {
    q: "Where do people trade?",
    a: "Collectors trade inside the official app and through community channels. Digital Pin Club helps you learn norms, follow drops, and find people — we don’t run a marketplace on this site.",
  },
  {
    q: "I’m brand new. Where should I start?",
    a: "Head to Start Here for a friendly onboarding path, then browse Learn for guides and Calendar for upcoming drops and hangouts.",
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
