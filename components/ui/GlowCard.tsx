export default function GlowCard({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-subtle bg-surface shadow-glow transition duration-500 hover:-translate-y-1 hover:border-strong hover:shadow-soft ${className ?? ""}`}
    >
      <div className="pointer-events-none absolute -inset-6 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100 bg-gradient-to-r from-aurora/16 via-white/8 to-ember/16" />
      {children}
    </div>
  );
}
