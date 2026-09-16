import { Section } from "@/components/Section";
import { socialLinks, type SocialLink } from "@/data/social";

function SocialIcon({ id }: { id: SocialLink["id"] }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": true as const,
    className: "h-4 w-4 shrink-0",
  };

  switch (id) {
    case "instagram":
      return (
        <svg {...common}>
          <path d="M12 7.2A4.8 4.8 0 1 0 12 16.8 4.8 4.8 0 0 0 12 7.2Zm0 7.92A3.12 3.12 0 1 1 12 8.88a3.12 3.12 0 0 1 0 6.24Zm6.288-8.064a1.12 1.12 0 1 1-2.24 0 1.12 1.12 0 0 1 2.24 0ZM12 2.16c-2.664 0-3.0.012-4.056.06-2.688.12-4.104 1.524-4.224 4.224C3.672 7.5 3.66 7.836 3.66 10.5s.012 3 0.06 4.056c.12 2.688 1.524 4.104 4.224 4.224 1.056.048 1.392.06 4.056.06s3-.012 4.056-.06c2.688-.12 4.104-1.524 4.224-4.224.048-1.056.06-1.392.06-4.056s-.012-3-.06-4.056c-.12-2.688-1.524-4.104-4.224-4.224C15 2.172 14.664 2.16 12 2.16Zm0 1.68c2.616 0 2.928.012 3.96.06 1.992.09 3.036 1.128 3.126 3.126.048 1.032.06 1.344.06 3.96s-.012 2.928-.06 3.96c-.09 1.992-1.134 3.036-3.126 3.126-1.032.048-1.344.06-3.96.06s-2.928-.012-3.96-.06c-1.992-.09-3.036-1.134-3.126-3.126-.048-1.032-.06-1.344-.06-3.96s.012-2.928.06-3.96c.09-1.992 1.134-3.036 3.126-3.126 1.032-.048 1.344-.06 3.96-.06Z" />
        </svg>
      );
    case "x":
      return (
        <svg {...common}>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L2.25 2.25h7.084l4.261 5.686L18.244 2.25Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z" />
        </svg>
      );
    case "reddit":
      return (
        <svg {...common}>
          <path d="M12 2C6.48 2 2 6.24 2 11.46c0 2.57 1.2 4.88 3.1 6.5-.12.55-.66 2.55-.75 2.95-.1.47.17.46.36.33.15-.1 2.4-1.63 3.31-2.26A11.2 11.2 0 0 0 12 20.92c5.52 0 10-4.24 10-9.46S17.52 2 12 2Zm5.48 10.84c0 .08-.01.15-.02.22-.12 1.84-1.9 3.33-4.46 3.72-.3.05-.6.07-.9.07h-.2c-.3 0-.6-.02-.9-.07-2.56-.39-4.34-1.88-4.46-3.72a1.1 1.1 0 0 1-.02-.22c0-.1.01-.2.02-.3.16-1.17 1.1-2.15 2.5-2.78.52-.24 1.1-.41 1.72-.52.1-.5.37-.95.76-1.28.45-.38 1.03-.58 1.63-.58.6 0 1.18.2 1.63.58.39.33.66.78.76 1.28.62.11 1.2.28 1.72.52 1.4.63 2.34 1.61 2.5 2.78.01.1.02.2.02.3Zm-7.35-.2a1.05 1.05 0 1 0 0 2.1 1.05 1.05 0 0 0 0-2.1Zm4.74 0a1.05 1.05 0 1 0 0 2.1 1.05 1.05 0 0 0 0-2.1Zm.18 3.2c-.34.34-1.05.6-1.95.6h-.2c-.9 0-1.61-.26-1.95-.6a.45.45 0 0 0-.64.64c.52.52 1.45.86 2.59.86h.2c1.14 0 2.07-.34 2.59-.86a.45.45 0 1 0-.64-.64Z" />
        </svg>
      );
    case "pinterest":
      return (
        <svg {...common}>
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312-.088-.79-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.546 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.396-1.722-4.07-4.183-4.07-2.849 0-4.52 2.135-4.52 4.342 0 .86.33 1.782.744 2.283a.3.3 0 0 1 .069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.967-.527-2.292-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621A10.01 10.01 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2Z" />
        </svg>
      );
  }
}

type Variant = "footer" | "home";

export function SocialLinks({
  variant = "footer",
  className = "",
}: {
  variant?: Variant;
  className?: string;
}) {
  const isHome = variant === "home";

  return (
    <ul
      className={
        isHome
          ? `grid gap-3 sm:grid-cols-2 ${className}`
          : `flex flex-wrap gap-x-5 gap-y-2 ${className}`
      }
      aria-label="Find us on social"
    >
      {socialLinks.map((link) => (
        <li key={link.id}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className={
              isHome
                ? "card gold-wash group flex items-center gap-3 px-4 py-3 text-sm text-muted transition hover:text-accent"
                : "inline-flex items-center gap-2 text-sm text-muted transition hover:text-accent"
            }
          >
            <span className="text-accent transition group-hover:text-accent-soft">
              <SocialIcon id={link.id} />
            </span>
            <span className={isHome ? "font-medium text-text group-hover:text-accent" : undefined}>
              {link.shortLabel}
            </span>
            {isHome ? (
              <span className="ml-auto font-mono text-[10px] uppercase tracking-wider text-muted">
                Open →
              </span>
            ) : null}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function FindUsSection() {
  return (
    <Section id="find-us" className="!pt-0">
      <div className="card p-6 sm:p-8">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">Connect</p>
        <h2
          id="find-us-heading"
          className="mt-2 font-display text-3xl font-semibold text-text sm:text-4xl"
        >
          Find us out there
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
          Drop by for drop teases, board flexes, and collector chatter. Same clubhouse vibe —
          Instagram, X, Reddit, and Pinterest.
        </p>
        <div className="mt-6">
          <SocialLinks variant="home" />
        </div>
      </div>
    </Section>
  );
}
