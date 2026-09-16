type PinSiderMarkProps = {
  className?: string;
  size?: number;
};

/** Gold pin mark in navy rounded square — public/brand/pinsider/PinSider-logo-mark.svg */
export function PinSiderMark({ className = "h-7 w-7", size = 28 }: PinSiderMarkProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/brand/pinsider/PinSider-logo-mark.svg"
      alt=""
      width={size}
      height={size}
      className={`shrink-0 rounded-[6px] ring-1 ring-[#D4AF37]/35 ${className}`}
      aria-hidden="true"
    />
  );
}

type PinSiderWordmarkProps = {
  className?: string;
  /** Show gold .io suffix (default true for brand lockups) */
  withIo?: boolean;
  size?: "sm" | "md" | "lg";
};

/** Text wordmark: PinSider with optional gold .io */
export function PinSiderWordmark({
  className = "",
  withIo = true,
  size = "md",
}: PinSiderWordmarkProps) {
  const sizeClass =
    size === "sm"
      ? "text-sm"
      : size === "lg"
        ? "text-3xl sm:text-4xl"
        : "text-base sm:text-lg";

  return (
    <span
      className={`font-display font-semibold tracking-tight text-text ${sizeClass} ${className}`}
    >
      PinSider
      {withIo && <span className="text-[#D4AF37]">.io</span>}
    </span>
  );
}

type PinSiderLockupProps = {
  className?: string;
  markClassName?: string;
  markSize?: number;
  withIo?: boolean;
  wordmarkSize?: "sm" | "md" | "lg";
  /** Accessible label for the lockup when used as a link child */
  label?: string;
};

/** Mark + wordmark lockup for headers / titles / CTAs */
export function PinSiderLockup({
  className = "inline-flex items-center gap-2",
  markClassName,
  markSize = 28,
  withIo = true,
  wordmarkSize = "md",
  label = "PinSider",
}: PinSiderLockupProps) {
  return (
    <span className={className} aria-label={label}>
      <PinSiderMark className={markClassName} size={markSize} />
      <PinSiderWordmark withIo={withIo} size={wordmarkSize} />
    </span>
  );
}
