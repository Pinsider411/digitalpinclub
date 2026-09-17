"use client";

import { useActionState } from "react";
import {
  submitCreator,
  type SubmitCreatorState,
} from "@/app/community/watch/actions";

const initial: SubmitCreatorState = { ok: false };

const field =
  "mt-1.5 w-full rounded-xl border border-border bg-bg px-4 py-2.5 text-sm text-text outline-none placeholder:text-muted focus:border-accent";
const label = "block text-sm font-medium text-text";

export function SubmitCreatorForm() {
  const [state, formAction, pending] = useActionState(submitCreator, initial);

  if (state.ok) {
    return (
      <div className="card px-6 py-8 text-center" role="status">
        <p className="font-mono text-xs text-accent">Thanks</p>
        <p className="mt-2 font-display text-xl font-semibold text-text">
          Saved — we’ll review your suggestion.
        </p>
        <p className="mx-auto mt-2 max-w-md text-sm text-muted">
          We only list creators with clear permission. Independent voices; listing is not
          an endorsement by Disney or Digital Pin Club.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="card space-y-4 p-6 sm:p-8">
      {state.error && (
        <div
          className="rounded-xl border border-border bg-bg px-4 py-3 text-sm text-muted"
          role="alert"
        >
          {state.error}
        </div>
      )}

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
        disabled={pending}
        className="pill bg-cta px-6 py-3 text-sm font-medium text-cta-text transition hover:brightness-110 disabled:opacity-60"
      >
        {pending ? "Submitting…" : "Submit suggestion"}
      </button>
    </form>
  );
}
