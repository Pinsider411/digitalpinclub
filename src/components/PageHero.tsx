import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: ReactNode;
  description: string;
}) {
  return (
    <div className="mb-10 max-w-2xl">
      {eyebrow && (
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
          {eyebrow}
        </p>
      )}
      <h1 className="font-display text-4xl font-semibold leading-[1.05] text-text sm:text-5xl">
        {title}
      </h1>
      <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{description}</p>
    </div>
  );
}
