"use client";

import { FormEvent, useState } from "react";

const field =
  "mt-1.5 w-full rounded-xl border border-border bg-bg px-4 py-2.5 text-sm text-text outline-none placeholder:text-muted focus:border-accent";
const label = "block text-sm font-medium text-text";

export function SubmitCreatorForm() {
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const platforms = String(data.get("platforms") || "").trim();
    const video = String(data.get("video") || "").trim();
    const permission = data.get("permission") === "on";
    if (!name || !platforms || !permission) return;

    const subject = encodeURIComponent(`Watch & Follow creator suggestion: ${name}`);
    const body = encodeURIComponent(
      [
        `Name / handle: ${name}`,
        `Platforms: ${platforms}`,
        `Best Pinnacle video URL: ${video || "(none)"}`,
        `Permission to list: yes`,
        "",
        "Submitted via digitalpinclub Watch & Follow.",
      ].join("\n"),
    );
    window.location.href = `mailto:info@pinsider.io?subject=${subject}&body=${body}`;
    setDone(true);
  }

  if (done) {
    return (
      <div className="card px-6 py-8 text-center" role="status">
        <p className="font-mono text-xs text-accent">Thanks</p>
        <p className="mt-2 font-display text-xl font-semibold text-text">
          Suggestion queued
        </p>
        <p className="mx-auto mt-2 max-w-md text-sm text-muted">
          Your mail client should open with a draft to info@pinsider.io. If it didn’t,
          email us the same details — we only list creators with clear permission.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card space-y-4 p-6 sm:p-8">
      <div>
        <label className={label} htmlFor="creator-name">
          Name / handle <span className="text-accent">*</span>
        </label>
        <input
          id="creator-name"
          name="name"
          type="text"
          required
          className={field}
          placeholder="Creator name or @handle"
        />
      </div>
      <div>
        <label className={label} htmlFor="creator-platforms">
          Platforms <span className="text-accent">*</span>
        </label>
        <input
          id="creator-platforms"
          name="platforms"
          type="text"
          required
          className={field}
          placeholder="YouTube, X, Instagram, TikTok…"
        />
      </div>
      <div>
        <label className={label} htmlFor="creator-video">
          Best Pinnacle video URL{" "}
          <span className="font-normal text-muted">(optional)</span>
        </label>
        <input
          id="creator-video"
          name="video"
          type="url"
          className={field}
          placeholder="https://www.youtube.com/watch?v=…"
        />
      </div>
      <label className="flex items-start gap-3 text-sm text-muted">
        <input
          type="checkbox"
          name="permission"
          required
          className="mt-1 h-4 w-4 rounded border-border accent-[#D4AF37]"
        />
        <span>
          I have permission (or I am this creator) to suggest this listing. Listing is not
          an endorsement by Disney or Digital Pin Club.
        </span>
      </label>
      <button
        type="submit"
        className="pill bg-cta px-6 py-3 text-sm font-medium text-cta-text transition hover:brightness-110"
      >
        Submit via email
      </button>
    </form>
  );
}
