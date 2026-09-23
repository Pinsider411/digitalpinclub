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
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h1 className="font-display text-4xl font-semibold leading-[1.05] text-text sm:text-5xl">
        {title}
      </h1>
      <div className="mt-4 h-px max-w-xs bg-gradient-to-r from-gold-deep/70 to-transparent" />
      <p className="mt-4 text-base leading-relaxed text-text-soft sm:text-lg">
        {description}
      </p>
    </div>
  );
}
