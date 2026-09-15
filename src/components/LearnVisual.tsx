import Image from "next/image";

export function LearnVisual({
  src,
  alt,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <figure
      className={`mb-8 max-w-2xl overflow-hidden rounded-[20px] border border-border bg-surface shadow-[0_1px_2px_rgba(9,9,11,0.04)] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={1280}
        height={720}
        className="h-auto w-full object-cover"
        sizes="(max-width: 672px) 100vw, 672px"
        priority={priority}
      />
    </figure>
  );
}
