import { BadgeMark } from "./BadgeMark";

type DpcLockupProps = {
  className?: string;
  markClassName?: string;
  /** Show tagline under wordmark; hidden on mobile unless taglineAlways */
  showTagline?: boolean;
  taglineAlways?: boolean;
  wordmarkClassName?: string;
};

/**
 * Brand lockup: gold pin mark + camelCase DigitalPinClub (+ optional tagline).
 * No .com in the lockup. Body copy elsewhere may stay spaced "Digital Pin Club".
 */
export function DpcLockup({
  className = "inline-flex items-center gap-2.5",
  markClassName = "h-10 w-10",
  showTagline = false,
  taglineAlways = false,
  wordmarkClassName = "",
}: DpcLockupProps) {
  const taglineClass = taglineAlways
    ? "mt-0.5 text-[10px] leading-none tracking-wide text-text-soft"
    : "mt-0.5 hidden text-[10px] leading-none tracking-wide text-text-soft md:block";

  return (
    <span className={className} aria-label="Digital Pin Club">
      <BadgeMark className={`shrink-0 ${markClassName}`} />
      <span className="flex min-w-0 flex-col justify-center leading-none">
        <span
          className={`font-display text-base font-bold tracking-tight text-white sm:text-lg ${wordmarkClassName}`}
        >
          DigitalPinClub
        </span>
        {showTagline && (
          <span className={taglineClass}>
            collect <span className="text-gold-rich" aria-hidden="true">•</span> trade{" "}
            <span className="text-gold-rich" aria-hidden="true">•</span> community
          </span>
        )}
      </span>
    </span>
  );
}
