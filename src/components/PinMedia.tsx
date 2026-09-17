"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
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

function canPlayWebmVp9(): boolean {
  if (typeof document === "undefined") return false;
  const v = document.createElement("video");
  return Boolean(v.canPlayType('video/webm; codecs="vp9"'));
}

export function PinMedia({
  pin,
  autoPlay = false,
  className = "",
  imgClassName = "object-contain",
  priority = false,
  sizes = "(max-width: 768px) 40vw, 220px",
}: Props) {
  // null until known — avoid treating pre-mount as "reduce motion" and blocking video forever
  const [reduceMotion, setReduceMotion] = useState<boolean | null>(null);
  const [videoFailed, setVideoFailed] = useState(false);
  const [preferWebm, setPreferWebm] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduceMotion(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    setPreferWebm(Boolean(pin.srcWebm) && canPlayWebmVp9());
  }, [pin.srcWebm]);

  const motionAllowed = reduceMotion === false;
  const showVideo =
    pin.kind === "video" && autoPlay && motionAllowed && !videoFailed;

  useEffect(() => {
    if (!showVideo) return;
    const el = videoRef.current;
    if (!el) return;
    el.muted = true;
    const p = el.play();
    if (p && typeof p.catch === "function") {
      p.catch(() => {});
    }
  }, [showVideo, pin.src, pin.srcWebm]);

  const stillSrc = pin.kind === "still" ? pin.src : pin.poster ?? pin.src;
  const hasAlphaPoster = Boolean(pin.poster?.endsWith(".png"));
  // Screen-blend only for opaque MP4 knockout path (not WebM alpha / PNG poster)
  const useKnockoutBlend =
    Boolean(pin.knockoutBlack) &&
    ((showVideo && !preferWebm) || (!showVideo && !hasAlphaPoster));
  const mediaBlend = useKnockoutBlend ? "[mix-blend-mode:screen]" : "";

  // Until motion preference is known, show poster (transparent PNG for Elsa)
  if (pin.kind === "video" && autoPlay && reduceMotion === null && !videoFailed) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={stillSrc}
          alt={pin.alt}
          width={pin.width}
          height={pin.height}
          className={`h-full w-full ${imgClassName}`}
          sizes={sizes}
          priority={priority}
        />
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {showVideo ? (
        <video
          ref={videoRef}
          className={`h-full w-full ${imgClassName} ${mediaBlend}`}
          poster={pin.poster}
          muted
          playsInline
          loop
          autoPlay
          preload="auto"
          aria-label={pin.alt}
          onError={() => setVideoFailed(true)}
        >
          {pin.srcWebm ? (
            <source src={pin.srcWebm} type="video/webm" />
          ) : null}
          <source src={pin.src} type="video/mp4" />
        </video>
      ) : (
        <Image
          src={stillSrc}
          alt={pin.alt}
          width={pin.width}
          height={pin.height}
          className={`h-full w-full ${imgClassName} ${mediaBlend}`}
          sizes={sizes}
          priority={priority}
        />
      )}
    </div>
  );
}
