type BadgeMarkProps = {
  className?: string;
  size?: number;
};

/** Gold geometric location-pin in rounded square — public/brand/dpc/DPC-logo-mark.svg */
export function BadgeMark({ className = "h-9 w-9", size = 36 }: BadgeMarkProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/brand/dpc/DPC-logo-mark.svg"
      alt=""
      width={size}
      height={size}
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    />
  );
}
