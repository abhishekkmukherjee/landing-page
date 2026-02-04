export default function GrowthMetrics() {
  const stats = [
    { label: "Happy Clients", value: "80+" },
    { label: "Crores In Monthly Adspend", value: "25+" },
    { label: "Team Size", value: "200" }
  ];

  return (
    <section className="section pb-20">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="flex flex-col gap-3">
          <p className="text-xs uppercase tracking-[0.3em] text-steel">Growing bigger</p>
          <h2 className="headline text-3xl text-primary sm:text-4xl">and faster</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-subtle bg-surface p-6 text-center shadow-glow"
            >
              <p className="text-3xl font-semibold text-primary">{stat.value}</p>
              <p className="mt-2 text-sm text-steel">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="rounded-2xl border border-subtle bg-surface p-8 text-center shadow-glow">
          <p className="text-2xl font-semibold text-primary">95% Retention Rate</p>
          <p className="mt-3 text-steel">
            Proves that we are not the type of agency that churns through clients. Our clients are our biggest Brand
            Ambassadors!
          </p>
        </div>
      </div>
    </section>
  );
}
