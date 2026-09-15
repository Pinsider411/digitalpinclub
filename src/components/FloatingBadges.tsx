export function FloatingBadges() {
  return (
    <div className="relative mx-auto h-[300px] w-full max-w-md sm:h-[360px]">
      <div className="absolute inset-0 rounded-[28px] bg-surface hairline shadow-[0_1px_2px_rgba(24,24,27,0.04)]" />
      <div
        className="absolute inset-8 rounded-3xl opacity-30"
        style={{
          background:
            "radial-gradient(circle at 28% 28%, rgba(124,92,255,0.06), transparent 55%), radial-gradient(circle at 72% 72%, rgba(61,220,151,0.04), transparent 50%)",
        }}
      />

      {/* Badge 1 — geometric diamond */}
      <svg
        className="badge-glow absolute left-[14%] top-[20%] h-20 w-20 animate-[float_7s_ease-in-out_infinite] sm:h-24 sm:w-24"
        viewBox="0 0 100 100"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="b1" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#7C5CFF" />
            <stop offset="1" stopColor="#9B87F5" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="46" fill="#FFFFFF" stroke="#A1A1AA" strokeWidth="2" />
        <path d="M50 18 L78 50 L50 82 L22 50 Z" fill="url(#b1)" />
        <circle cx="50" cy="50" r="10" fill="#E4E4E7" />
      </svg>

      {/* Badge 2 — hex enamel */}
      <svg
        className="badge-glow absolute right-[12%] top-[30%] h-[5.5rem] w-[5.5rem] animate-[float_8s_ease-in-out_infinite] sm:h-28 sm:w-28"
        viewBox="0 0 100 100"
        fill="none"
        aria-hidden="true"
        style={{ animationDelay: "0.8s" }}
      >
        <defs>
          <linearGradient id="b2" x1="0" y1="1" x2="1" y2="0">
            <stop stopColor="#FF6B4A" />
            <stop offset="1" stopColor="#7C5CFF" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="46" fill="#FFFFFF" stroke="#A1A1AA" strokeWidth="2" />
        <path
          d="M50 16 L72 28 L72 52 L50 64 L28 52 L28 28 Z"
          fill="url(#b2)"
        />
        <rect x="42" y="36" width="16" height="16" rx="3" fill="#18181B" opacity="0.12" />
      </svg>

      {/* Badge 3 — ring + bar */}
      <svg
        className="badge-glow absolute bottom-[14%] left-[30%] h-20 w-20 animate-[float_6.5s_ease-in-out_infinite] sm:h-24 sm:w-24"
        viewBox="0 0 100 100"
        fill="none"
        aria-hidden="true"
        style={{ animationDelay: "1.4s" }}
      >
        <circle cx="50" cy="50" r="46" fill="#FFFFFF" stroke="#A1A1AA" strokeWidth="2" />
        <circle cx="50" cy="42" r="18" stroke="#7C5CFF" strokeWidth="5" fill="none" />
        <rect x="34" y="62" width="32" height="10" rx="5" fill="#3DDC97" />
      </svg>

      <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full border border-border bg-surface/90 px-3 py-1.5 shadow-[0_1px_2px_rgba(24,24,27,0.04)]">
        <span className="h-2 w-2 rounded-full bg-live" />
        <span className="font-mono text-xs text-muted">Drop week</span>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
      `}</style>
    </div>
  );
}
