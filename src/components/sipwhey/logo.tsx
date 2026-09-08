import logoImage from "@/assets/Logo_Sipwhey.jpeg";

export function Monogram({ className = "" }: { className?: string }) {
  return (
    <span className={`relative inline-flex shrink-0 items-center ${className}`}>
      <img
        src={logoImage}
        alt="SipWhey Logo"
        className="h-10 w-auto object-contain"
      />
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
