"use client";

import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { unlockByEmail, type UnlockState } from "@/app/community/actions";

const initial: UnlockState = { ok: false };

const field =
  "mt-1.5 w-full rounded-xl border border-border bg-bg/70 px-3 py-2.5 text-sm text-text outline-none placeholder:text-muted focus:border-accent";
const label =
  "block font-mono text-[10px] font-semibold uppercase tracking-widest text-muted";

export function UnlockMemberForm({ className = "" }: { className?: string }) {
  const router = useRouter();
  const [state, formAction, pending] = useActionState(unlockByEmail, initial);

  useEffect(() => {
    if (state.ok) {
      router.refresh();
    }
  }, [state.ok, router]);

  if (state.ok) {
    return (
      <p className={`text-sm text-gold-soft ${className}`} role="status">
        Unlocked — refreshing the lobby…
      </p>
    );
  }

  return (
    <form action={formAction} className={`space-y-3 ${className}`}>
      <div>
        <label className={label} htmlFor="unlock-email">
          Already a member? Unlock
        </label>
        <input
          id="unlock-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={field}
          placeholder="you@email.com"
        />
      </div>
      {state.error && (
        <p className="text-xs leading-relaxed text-muted" role="alert">
          {state.error}
        </p>
      )}
      <button
        type="submit"
        disabled={pending}
        className="pill w-full border border-border-gold/45 bg-transparent px-4 py-2.5 text-sm font-semibold text-gold-soft transition hover:border-gold disabled:opacity-60"
      >
        {pending ? "Unlocking…" : "Unlock lobby"}
      </button>
    </form>
  );
}
