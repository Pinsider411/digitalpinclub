export function FloatingBadges() {
  return (
    <div className="relative mx-auto h-[320px] w-full max-w-md sm:h-[380px]">
      <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-[#14161C] via-[#1A1D26] to-[#0B0C10] hairline" />
      <div
        className="absolute inset-6 rounded-3xl opacity-60"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(124,92,255,0.25), transparent 55%), radial-gradient(circle at 70% 70%, rgba(61,220,151,0.12), transparent 50%)",
        }}
      />

      {/* Badge 1 — geometric diamond */}
      <svg
        className="badge-glow absolute left-[12%] top-[18%] h-24 w-24 animate-[float_6s_ease-in-out_infinite] sm:h-28 sm:w-28"
        viewBox="0 0 100 100"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="b1" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#7C5CFF" />
            <stop offset="1" stopColor="#A78BFF" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="46" fill="#14161C" stroke="#2A2E3A" strokeWidth="2" />
        <path d="M50 18 L78 50 L50 82 L22 50 Z" fill="url(#b1)" />
        <circle cx="50" cy="50" r="10" fill="#0B0C10" />
      </svg>

      {/* Badge 2 — hex enamel */}
      <svg
        className="badge-glow absolute right-[10%] top-[28%] h-28 w-28 animate-[float_7s_ease-in-out_infinite_0.8s] sm:h-32 sm:w-32"
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
        <circle cx="50" cy="50" r="46" fill="#1A1D26" stroke="#2A2E3A" strokeWidth="2" />
        <path
          d="M50 16 L72 28 L72 52 L50 64 L28 52 L28 28 Z"
          fill="url(#b2)"
        />
        <rect x="42" y="36" width="16" height="16" rx="3" fill="#F4F1EA" opacity="0.9" />
      </svg>

      {/* Badge 3 — ring + bar */}
      <svg
        className="badge-glow absolute bottom-[12%] left-[28%] h-24 w-24 animate-[float_5.5s_ease-in-out_infinite_1.4s] sm:h-28 sm:w-28"
        viewBox="0 0 100 100"
        fill="none"
        aria-hidden="true"
        style={{ animationDelay: "1.4s" }}
      >
        <circle cx="50" cy="50" r="46" fill="#14161C" stroke="#3DDC97" strokeWidth="2" />
        <circle cx="50" cy="42" r="18" stroke="#7C5CFF" strokeWidth="6" fill="none" />
        <rect x="34" y="62" width="32" height="10" rx="5" fill="#3DDC97" />
      </svg>

      <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full border border-[#2A2E3A] bg-[#0B0C10]/80 px-3 py-1.5">
        <span className="h-2 w-2 rounded-full bg-live" />
        <span className="font-mono text-xs text-live">Drop week</span>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
}
