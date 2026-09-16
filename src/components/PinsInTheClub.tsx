import { clubPins, pinGalleryOrder } from "@/data/pins";
import { PinDisclaimer } from "@/components/PinDisclaimer";
import { PinMedia } from "@/components/PinMedia";

export function PinsInTheClub() {
  const pins = pinGalleryOrder.map((key) => clubPins[key]);

  return (
    <section aria-labelledby="pins-in-club-heading">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            Pins in the club
          </p>
          <h2
            id="pins-in-club-heading"
            className="mt-2 font-display text-3xl font-semibold text-text sm:text-4xl"
          >
            What collectors are showing
          </h2>
          <p className="mt-2 max-w-xl text-sm text-muted">
            Example pins from club chatter — not official product pages. Still frames
            keep the strip light; tap into Learn to understand the hobby.
          </p>
        </div>
        <PinDisclaimer />
      </div>

      <ul className="grid gap-4 sm:grid-cols-3">
        {pins.map((pin) => (
          <li key={pin.id}>
            <figure className="card overflow-hidden p-0">
              <div className="bg-bg/60 px-4 pt-4">
                <PinMedia
                  pin={pin}
                  autoPlay={false}
                  className="mx-auto aspect-square max-h-56"
                  imgClassName="object-contain"
                  sizes="(max-width: 640px) 90vw, 30vw"
                />
              </div>
              <figcaption className="border-t border-border px-4 py-4">
                <p className="font-display text-lg font-semibold text-text">{pin.title}</p>
                <p className="mt-1 text-sm text-muted">{pin.caption}</p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-accent">
                  Club example
                </p>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
