export function BadgeMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="32" cy="32" r="30" fill="#1A1D26" stroke="#7C5CFF" strokeWidth="2" />
      <path
        d="M32 12 L44 22 L40 40 L24 40 L20 22 Z"
        fill="#7C5CFF"
        opacity="0.9"
      />
      <circle cx="32" cy="28" r="6" fill="#0B0C10" />
      <rect x="28" y="36" width="8" height="10" rx="2" fill="#F4F1EA" opacity="0.85" />
      <path d="M22 48 L32 52 L42 48" stroke="#3DDC97" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
