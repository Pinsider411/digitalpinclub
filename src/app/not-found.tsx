import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-24 text-center sm:px-6 sm:py-32">
      <p className="font-mono text-xs uppercase tracking-widest text-accent">404</p>
      <h1 className="mt-4 font-display text-4xl font-semibold text-text sm:text-5xl">
        This pin fell off the lanyard.
      </h1>
      <p className="mt-4 max-w-md text-muted">
        That page doesn’t exist (or it wandered into someone else’s trade). Let’s get you
        back to the clubhouse.
      </p>
      <Link
        href="/"
        className="pill mt-8 bg-cta px-6 py-3 text-sm font-medium text-white transition hover:brightness-110"
      >
        Back home
      </Link>
    </div>
  );
}
