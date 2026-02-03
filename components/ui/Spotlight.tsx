export default function Spotlight({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-gradient-to-br from-aurora/18 via-white/8 to-transparent blur-3xl ${className ?? ""}`}
    />
  );
}
