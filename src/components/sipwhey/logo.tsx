export function Monogram({ className = "" }: { className?: string }) {
  return (
    <span
      className={`relative inline-grid size-10 shrink-0 place-items-center rounded-full border border-gold/60 ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 32 32" className="size-5">
        <path
          d="M4 8 L14 8 L8 16 L18 16 L6 26"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.4"
          strokeLinecap="square"
          className="text-obsidian"
        />
        <path
          d="M17 9 L22 22 L28 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.4"
          strokeLinecap="square"
          className="text-gold"
        />
      </svg>
    </span>
  );
}

export function Wordmark() {
  return (
    <span className="flex min-w-0 flex-col leading-none">
      <span className="font-display text-lg font-bold tracking-tight text-foreground">
        SipWhey<sup className="text-[0.5rem] text-gold">™</sup>
      </span>
      <span className="eyebrow mt-1 text-[0.5rem] text-muted-foreground">Clear Protein</span>
    </span>
  );
}
