"use client";

import { useActionState } from "react";
import { submitBoard, type BoardSubmitState } from "@/app/community/actions";

const initial: BoardSubmitState = { ok: false };

const field =
  "mt-1.5 w-full rounded-xl border border-border bg-bg px-4 py-2.5 text-sm text-text outline-none placeholder:text-muted focus:border-accent";
const label = "block text-sm font-medium text-text";

export function BoardSubmitForm() {
  const [state, formAction, pending] = useActionState(submitBoard, initial);

  if (state.ok) {
    return (
      <div className="card px-6 py-8 text-center" role="status">
        <p className="font-mono text-xs text-accent">Thanks</p>
        <p className="mt-2 font-display text-xl font-semibold text-text">
          Snapshot submitted
        </p>
        <p className="mx-auto mt-2 max-w-md text-sm text-muted">
          Submissions wait for a light daily approve — the gallery updates after approve.
          Snapshots may be outdated; this is not a live Pinbook sync.
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
        <label className={label} htmlFor="board-handle">
          Collector handle <span className="text-accent">*</span>
        </label>
        <input
          id="board-handle"
          name="handle"
          type="text"
          required
          className={field}
          placeholder="@yourhandle"
        />
      </div>
      <div>
        <label className={label} htmlFor="board-pinbook">
          Pinbook share URL <span className="text-accent">*</span>
        </label>
        <input
          id="board-pinbook"
          name="pinbook_url"
          type="url"
          required
          className={field}
          placeholder="https://disneypinnacle.com/pinbooks/…"
        />
      </div>
      <div>
        <label className={label} htmlFor="board-note">
          Optional note
        </label>
        <textarea
          id="board-note"
          name="note"
          rows={2}
          className={`${field} resize-y`}
          placeholder="Anything curators should know"
        />
      </div>
      <button
        type="submit"
        disabled={pending}
        className="pill bg-cta px-5 py-2.5 text-sm font-medium text-cta-text transition hover:brightness-110 disabled:opacity-60"
      >
        {pending ? "Submitting…" : "Submit your Pinbook"}
      </button>
      <p className="text-xs leading-relaxed text-muted">
        Member-submitted · light daily approve · may be outdated. Not a live pull from
        Pinnacle.
      </p>
    </form>
  );
}
