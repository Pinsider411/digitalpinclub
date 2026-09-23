"use client";

import { useActionState } from "react";
import Link from "next/link";
import { joinClub, type JoinState } from "@/app/join/actions";
import { DISNEY_IPS, COLLECTOR_LEVELS } from "@/lib/join-constants";

const initial: JoinState = { ok: false };

const field =
  "mt-1.5 w-full rounded-xl border border-border bg-bg px-4 py-2.5 text-sm text-text outline-none placeholder:text-muted focus:border-accent";
const label = "block text-sm font-medium text-text";

export function JoinForm({
  defaultEmail = "",
  defaultHandle = "",
}: {
  defaultEmail?: string;
  defaultHandle?: string;
} = {}) {
  const [state, formAction, pending] = useActionState(joinClub, initial);

  if (state.ok) {
    return (
      <div className="card px-6 py-10 text-center sm:px-10" role="status">
        <p className="font-mono text-xs text-accent">You’re in</p>
        <h2 className="mt-2 font-display text-2xl font-semibold text-text sm:text-3xl">
          Welcome to Digital Pin Club
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
          Thanks for joining. Watch your inbox for club emails if you opted in — and hang
          out on Community and Pinsider anytime.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/community"
            className="pill bg-cta px-5 py-2.5 text-sm font-medium text-cta-text"
          >
            Visit Community
          </Link>
          <Link
            href="/calendar"
            className="pill border border-border px-5 py-2.5 text-sm text-text"
          >
            Browse Calendar
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form action={formAction} className="card space-y-5 p-6 sm:p-8">
      {state.error && (
        <div
          className={`rounded-xl border px-4 py-3 text-sm ${
            state.duplicate
              ? "border-accent/40 bg-accent/10 text-accent-soft"
              : "border-border bg-bg text-muted"
          }`}
          role="alert"
        >
          {state.error}
        </div>
      )}

      <div>
        <label className={label} htmlFor="name">
          Name <span className="text-accent">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className={field}
          placeholder="Your name"
        />
      </div>

      <div>
        <label className={label} htmlFor="email">
          Email <span className="text-accent">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={field}
          placeholder="you@example.com"
          defaultValue={defaultEmail}
        />
      </div>

      <div>
        <label className={label} htmlFor="handle">
          Pinnacle/Collector handle{" "}
          <span className="font-normal text-muted">(optional)</span>
        </label>
        <input
          id="handle"
          name="handle"
          type="text"
          className={field}
          placeholder="@yourhandle"
          defaultValue={defaultHandle}
        />
      </div>

      <div>
        <label className={label} htmlFor="favorite_disney_ip">
          Favorite Disney IP <span className="text-accent">*</span>
        </label>
        <select
          id="favorite_disney_ip"
          name="favorite_disney_ip"
          required
          defaultValue=""
          className={field}
        >
          <option value="" disabled>
            Select one…
          </option>
          {DISNEY_IPS.map((ip) => (
            <option key={ip} value={ip}>
              {ip}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className={label} htmlFor="favorite_pin_set">
          Favorite pin set / drop{" "}
          <span className="font-normal text-muted">(optional)</span>
        </label>
        <input
          id="favorite_pin_set"
          name="favorite_pin_set"
          type="text"
          className={field}
          placeholder="e.g. a recent drop or classic set"
        />
      </div>

      <div>
        <label className={label} htmlFor="collector_level">
          Collector level <span className="font-normal text-muted">(optional)</span>
        </label>
        <select
          id="collector_level"
          name="collector_level"
          defaultValue=""
          className={field}
        >
          <option value="">Prefer not to say</option>
          {COLLECTOR_LEVELS.map((level) => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className={label} htmlFor="city_or_region">
          City or region <span className="font-normal text-muted">(optional)</span>
        </label>
        <input
          id="city_or_region"
          name="city_or_region"
          type="text"
          autoComplete="address-level2"
          className={field}
          placeholder="City, state, or region"
        />
      </div>

      <div>
        <label className={label} htmlFor="notes">
          Short notes <span className="font-normal text-muted">(optional)</span>
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          className={`${field} resize-y`}
          placeholder="Anything you’d like us to know"
        />
      </div>

      <label className="flex items-start gap-3 text-sm text-muted">
        <input
          type="checkbox"
          name="marketing_opt_in"
          defaultChecked
          className="mt-1 h-4 w-4 rounded border-border accent-[#D4AF37]"
        />
        <span>
          Yes, send me Digital Pin Club emails and promotions (drops, hangouts, digests).
          You can unsubscribe anytime. Uncheck if you only want to be on the roster.
        </span>
      </label>

      <button
        type="submit"
        disabled={pending}
        className="pill w-full bg-cta px-6 py-3 text-sm font-medium text-cta-text transition hover:brightness-110 disabled:opacity-60 sm:w-auto"
      >
        {pending ? "Joining…" : "Join the Club"}
      </button>

      <p className="text-xs leading-relaxed text-muted">
        By joining you agree we may store your details to run the club. See{" "}
        <Link href="/privacy" className="text-accent underline-offset-2 hover:underline">
          Privacy
        </Link>
        .
      </p>
    </form>
  );
}
