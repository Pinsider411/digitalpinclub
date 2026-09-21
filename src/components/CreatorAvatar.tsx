/** Circle avatar for creator / hub cards — navy-gold glass friendly. */
export function CreatorAvatar({
  src,
  alt,
  size = 64,
  className = "",
}: {
  src?: string;
  alt?: string;
  /** Display size in px (56–72 typical) */
  size?: number;
  className?: string;
}) {
  if (!src) return null;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt ?? ""}
      width={size}
      height={size}
      className={`shrink-0 rounded-full border border-accent/30 bg-surface object-cover shadow-[0_0_0_1px_rgba(212,175,55,0.12)] ${className}`}
      style={{ width: size, height: size }}
    />
  );
}
