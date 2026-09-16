import { clubPins } from "@/data/pins";
import { PinDisclaimer } from "@/components/PinDisclaimer";
import { PinMedia } from "@/components/PinMedia";

/** Hero collage: 1 still + up to 2 muted loops (respects prefers-reduced-motion). */
export function FloatingBadges() {
  const still = clubPins.fantasia85;
  const loopA = clubPins.miguel;
  const loopB = clubPins.pluto;

  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="relative h-[300px] w-full sm:h-[360px]">
        <div className="absolute inset-0 rounded-[28px] bg-surface hairline shadow-[0_8px_32px_rgba(10,22,40,0.45)]" />
        <div
          className="absolute inset-8 rounded-3xl opacity-40"
          style={{
            background:
              "radial-gradient(circle at 28% 28%, rgba(212,175,55,0.12), transparent 55%), radial-gradient(circle at 72% 72%, rgba(91,159,212,0.08), transparent 50%)",
          }}
        />

        <svg
          className="pointer-events-none absolute left-[8%] top-[12%] h-3 w-3 opacity-70"
          viewBox="0 0 16 16"
          aria-hidden="true"
        >
          <path d="M8 1 L9 6 L14 7 L9 8 L8 13 L7 8 L2 7 L7 6 Z" fill="#F0D78C" />
        </svg>
        <svg
          className="pointer-events-none absolute bottom-[18%] right-[10%] h-2.5 w-2.5 opacity-55"
          viewBox="0 0 16 16"
          aria-hidden="true"
        >
          <path d="M8 1 L9 6 L14 7 L9 8 L8 13 L7 8 L2 7 L7 6 Z" fill="#F0D78C" />
        </svg>

        {/* Fantasia still — centerpiece (no autoplay) */}
        <figure className="badge-glow absolute left-[18%] top-[14%] w-[42%] sm:left-[20%] sm:w-[40%]">
          <div className="rotate-[-6deg] overflow-hidden rounded-2xl border border-accent/30 bg-bg/80 p-1.5 shadow-[0_8px_24px_rgba(10,22,40,0.5)]">
            <PinMedia
              pin={still}
              priority
              className="aspect-square"
              imgClassName="object-contain"
              sizes="(max-width: 768px) 40vw, 180px"
            />
          </div>
          <figcaption className="sr-only">{still.caption}</figcaption>
        </figure>

        {/* Miguel loop — 1 of 2 hero autoplays */}
        <figure className="absolute right-[8%] top-[22%] w-[36%] rotate-[8deg] sm:right-[10%] sm:w-[34%]">
          <div className="hero-float overflow-hidden rounded-2xl border border-border bg-bg/80 p-1.5 shadow-[0_8px_24px_rgba(10,22,40,0.45)] [animation-delay:0.6s]">
            <PinMedia
              pin={loopA}
              autoPlay
              className="aspect-square"
              imgClassName="object-contain"
              sizes="(max-width: 768px) 35vw, 150px"
            />
          </div>
          <figcaption className="sr-only">{loopA.caption}</figcaption>
        </figure>

        {/* Pluto loop — 2 of 2 hero autoplays */}
        <figure className="absolute bottom-[10%] left-[28%] w-[34%] rotate-[-3deg] sm:left-[32%] sm:w-[32%]">
          <div className="hero-float overflow-hidden rounded-2xl border border-border bg-bg/80 p-1.5 shadow-[0_8px_24px_rgba(10,22,40,0.45)] [animation-delay:1.2s]">
            <PinMedia
              pin={loopB}
              autoPlay
              className="aspect-square"
              imgClassName="object-contain"
              sizes="(max-width: 768px) 32vw, 140px"
            />
          </div>
          <figcaption className="sr-only">{loopB.caption}</figcaption>
        </figure>

        <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full border border-border bg-surface/90 px-3 py-1.5 shadow-[0_4px_16px_rgba(10,22,40,0.35)]">
          <span className="h-2 w-2 rounded-full bg-live" />
          <span className="font-mono text-xs text-muted">Drop week</span>
        </div>

        <style>{`
          @keyframes hero-float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-6px); }
          }
          .hero-float {
            animation: hero-float 7s ease-in-out infinite;
          }
          @media (prefers-reduced-motion: reduce) {
            .hero-float { animation: none !important; }
          }
        `}</style>
      </div>

      <div className="mt-3 flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-[11px] text-muted">
          Club examples · pins collectors talk about
        </p>
        <PinDisclaimer />
      </div>
    </div>
  );
}
