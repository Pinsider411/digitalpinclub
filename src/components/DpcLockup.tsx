import { BadgeMark } from "./BadgeMark";

type DpcLockupProps = {
  className?: string;
  /** Mark size classes (default header-sized) */
  markClassName?: string;
  /** Show tagline under wordmark (desktop); hidden on mobile via CSS when true */
  showTagline?: boolean;
  /** Force tagline always on (e.g. marketing blocks) */
  taglineAlways?: boolean;
  wordmarkClassName?: string;
};

const GOLD_BULLET = (
  <span className="text-[#E0B84A]" aria-hidden="true">
    {" "}
    •{" "}
  </span>
);

/**
 * Site brand lockup: gold pin mark + camelCase DigitalPinClub (+ optional tagline).
 * Body/UI copy elsewhere may stay spaced "Digital Pin Club".
 */
export function DpcLockup({
  className = "inline-flex items-center gap-2.5",
  markClassName = "h-9 w-9",
  showTagline = false,
  taglineAlways = false,
  wordmarkClassName = "",
}: DpcLockupProps) {
  const taglineClass = taglineAlways
    ? "mt-0.5 text-[10px] leading-none tracking-wide text-muted"
    : "mt-0.5 hidden text-[10px] leading-none tracking-wide text-muted md:block";

  return (
    <span className={className} aria-label="Digital Pin Club">
      <BadgeMark className={`shrink-0 ${markClassName}`} />
      <span className="flex min-w-0 flex-col justify-center leading-none">
        <span
          className={`font-display text-base font-bold tracking-tight text-text sm:text-lg ${wordmarkClassName}`}
        >
          DigitalPinClub
        </span>
        {showTagline && (
          <span className={taglineClass} aria-hidden={!taglineAlways}>
            collect{GOLD_BULLET}trade{GOLD_BULLET}community
          </span>
        )}
      </span>
    </span>
  );
}
