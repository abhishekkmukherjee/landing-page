export default function GlowCard({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`group relative rounded-3xl bg-surface border border-subtle shadow-glow overflow-hidden transition duration-500 hover:border-strong hover:shadow-soft hover:-translate-y-1 transition-transform ${className ?? ""}`}
    >
      <div className="pointer-events-none absolute -inset-6 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100 bg-gradient-to-r from-aurora/20 via-white/10 to-ember/20" />
      {children}
    </div>
  );
}
