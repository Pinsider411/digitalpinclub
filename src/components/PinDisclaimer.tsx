import { UNAFFILIATED_DISCLAIMER } from "@/data/pins";

export function PinDisclaimer({ className = "" }: { className?: string }) {
  return (
    <p
      className={`inline-flex max-w-full items-center rounded-full border border-border bg-surface/90 px-3 py-1 font-mono text-[10px] leading-snug text-muted sm:text-[11px] ${className}`}
      role="note"
    >
      {UNAFFILIATED_DISCLAIMER}
    </p>
  );
}
