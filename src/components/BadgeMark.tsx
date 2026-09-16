export function BadgeMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Grey-modern mark — no leftover dark/cream chrome */}
      <circle cx="32" cy="32" r="30" fill="#FFFFFF" stroke="#7C5CFF" strokeWidth="2" />
      <path
        d="M32 12 L44 22 L40 40 L24 40 L20 22 Z"
        fill="#7C5CFF"
        opacity="0.9"
      />
      <circle cx="32" cy="28" r="6" fill="#3F3F46" />
      <rect x="28" y="36" width="8" height="10" rx="2" fill="#D4D4D8" opacity="0.95" />
      <path d="M22 48 L32 52 L42 48" stroke="#0E7490" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
