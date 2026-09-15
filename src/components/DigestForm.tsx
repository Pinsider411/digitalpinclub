"use client";

import { FormEvent, useState } from "react";

export function DigestForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setDone(true);
  }

  if (done) {
    return (
      <div className="card px-6 py-8 text-center" role="status">
        <p className="font-display text-xl font-semibold text-text">You’re on the list</p>
        <p className="mt-2 text-sm text-muted">
          Thanks — watch for the Sunday digest in your inbox. (Demo success state; no
          backend wired yet.)
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
      <label className="sr-only" htmlFor="digest-email">
        Email
      </label>
      <input
        id="digest-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        className="w-full flex-1 rounded-full border border-border bg-bg px-5 py-3 text-sm text-text outline-none placeholder:text-muted focus:border-accent"
      />
      <button
        type="submit"
        className="pill shrink-0 bg-accent px-6 py-3 text-sm font-medium text-white transition hover:brightness-110"
      >
        Get the digest
      </button>
    </form>
  );
}
