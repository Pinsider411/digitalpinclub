"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { ClubPin } from "@/data/pins";

type Props = {
  pin: ClubPin;
  /** Allow muted autoplay when motion is OK */
  autoPlay?: boolean;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  sizes?: string;
};

export function PinMedia({
  pin,
  autoPlay = false,
  className = "",
  imgClassName = "object-contain",
  priority = false,
  sizes = "(max-width: 768px) 40vw, 220px",
}: Props) {
  const [reduceMotion, setReduceMotion] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduceMotion(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const stillSrc = pin.kind === "still" ? pin.src : pin.poster ?? pin.src;
  const showVideo = pin.kind === "video" && autoPlay && !reduceMotion;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {showVideo ? (
        <video
          className={`h-full w-full ${imgClassName}`}
          src={pin.src}
          poster={pin.poster}
          muted
          playsInline
          loop
          autoPlay
          preload="metadata"
          aria-label={pin.alt}
        />
      ) : (
        <Image
          src={stillSrc}
          alt={pin.alt}
          width={pin.width}
          height={pin.height}
          className={`h-full w-full ${imgClassName}`}
          sizes={sizes}
          priority={priority}
        />
      )}
    </div>
  );
}
