import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Calendar",
  description: "Upcoming digital pin drops, club hangouts, and digest dates.",
};

const events = [
  {
    date: "Fri · Sep 19",
    tag: "Drop",
    title: "Weekend set window (placeholder)",
    detail: "Watch for official reveal timing. Club will update when confirmed.",
  },
  {
    date: "Sat · Sep 20",
    tag: "Hangout",
    title: "Collector open chat",
    detail: "Casual community hang — trades, tips, board show-and-tell. 7pm PT.",
  },
  {
    date: "Sun · Sep 21",
    tag: "Digest",
    title: "Sunday Pin Press",
    detail: "Weekly email roundup. Sign up from the home page digest form.",
  },
  {
    date: "Wed · Sep 24",
    tag: "Club",
    title: "New collector office hours",
    detail: "Placeholder: ask anything session for people who just started.",
  },
  {
    date: "Fri · Sep 26",
    tag: "Drop",
    title: "Midweek chase set (placeholder)",
    detail: "Reserved slot for the next announced drop. Details TBA.",
  },
];

export default function CalendarPage() {
  return (
    <Section>
      <PageHero
        eyebrow="Schedule"
        title="Club calendar"
        description="Drops, hangouts, and digest days. Placeholder events for v1 — swap in live dates later via CMS."
      />
      <ul className="space-y-3">
        {events.map((e) => (
          <li
            key={e.title + e.date}
            className="card flex flex-col gap-3 p-5 sm:flex-row sm:items-start sm:gap-6"
          >
            <div className="shrink-0 sm:w-36">
              <p className="font-mono text-xs text-muted">{e.date}</p>
              <span className="mt-2 inline-block rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] text-live">
                {e.tag}
              </span>
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold text-text">{e.title}</h2>
              <p className="mt-1 text-sm text-muted">{e.detail}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
