export function Ornament({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center gap-3 ${className}`}
      aria-hidden="true"
    >
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold/70 sm:w-24" />
      <svg
        width="46"
        height="16"
        viewBox="0 0 46 16"
        fill="none"
        className="text-gold"
      >
        <path
          d="M23 2c2.5 3 5 4 8 4-3 0-5.5 1-8 4-2.5-3-5-4-8-4 3 0 5.5-1 8-4Z"
          fill="currentColor"
          fillOpacity="0.9"
        />
        <circle cx="4" cy="8" r="1.6" fill="currentColor" />
        <circle cx="42" cy="8" r="1.6" fill="currentColor" />
        <path
          d="M9 8h6M31 8h6"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold/70 sm:w-24" />
    </div>
  );
}

export function Subtitle({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-sans text-xs uppercase tracking-[0.35em] text-gold">
      {children}
    </span>
  );
}
