export function BadgeMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="badge-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F0D78C" />
          <stop offset="45%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#A8892A" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="30" fill="#0A1628" stroke="url(#badge-gold)" strokeWidth="2.5" />
      <circle cx="32" cy="32" r="24" fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.55" />
      <path d="M32 14 L42 22 L39 38 L32 44 L25 38 L22 22 Z" fill="url(#badge-gold)" />
      <circle cx="32" cy="26" r="5" fill="#0A1628" />
      <rect x="29" y="32" width="6" height="8" rx="1.5" fill="#0A1628" opacity="0.85" />
      <path
        d="M48 18 L49 20.5 L51.5 21.5 L49 22.5 L48 25 L47 22.5 L44.5 21.5 L47 20.5 Z"
        fill="#F0D78C"
        opacity="0.9"
      />
      <path
        d="M16 40 L16.7 41.8 L18.5 42.5 L16.7 43.2 L16 45 L15.3 43.2 L13.5 42.5 L15.3 41.8 Z"
        fill="#F0D78C"
        opacity="0.75"
      />
    </svg>
  );
}
