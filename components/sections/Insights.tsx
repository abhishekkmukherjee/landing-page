import GlowCard from "@/components/ui/GlowCard";

const kpis = [
  { label: "Qualified leads", value: "+3.2x" },
  { label: "CPL reduction", value: "-41%" },
  { label: "Pipeline velocity", value: "+27%" }
];

export default function Insights() {
  return (
    <section className="section py-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-steel">Performance intelligence</p>
          <h2 className="headline text-3xl text-primary sm:text-4xl">
            High-signal dashboards that show founders what is working.
          </h2>
          <p className="max-w-xl text-steel">
            We build reporting that ties every dollar to a pipeline outcome. Clear funnels, true attribution, and
            weekly insights that help you move faster without noise.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {kpis.map((kpi) => (
              <div key={kpi.label} className="rounded-2xl border border-subtle bg-surface p-4">
                <p className="text-xs text-steel">{kpi.label}</p>
                <p className="mt-2 text-xl font-semibold text-primary">{kpi.value}</p>
              </div>
            ))}
          </div>
        </div>
        <GlowCard className="p-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-steel">Revenue signal</p>
                <p className="text-2xl font-semibold text-primary">$412k</p>
              </div>
              <span className="rounded-full border border-subtle bg-surface px-3 py-1 text-xs text-steel">
                Last 30 days
              </span>
            </div>
            <div className="relative h-48 overflow-hidden rounded-2xl border border-subtle bg-surface p-4">
              <div className="absolute inset-0 chart-grid opacity-40" />
              <svg
                viewBox="0 0 360 140"
                className="relative h-full w-full"
                aria-hidden
              >
                <defs>
                  <linearGradient id="line" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#4ef0c6" />
                    <stop offset="100%" stopColor="#ff7a59" />
                  </linearGradient>
                </defs>
                <path
                  d="M10 110 C 60 90, 90 70, 140 80 C 190 90, 220 40, 280 50 C 320 58, 330 30, 350 20"
                  fill="none"
                  stroke="url(#line)"
                  strokeWidth="3"
                  className="[stroke-dasharray:600] [stroke-dashoffset:600] motion-reduce:animate-none animate-draw"
                />
                <circle cx="350" cy="20" r="4" fill="#4ef0c6" className="animate-pulseSoft" />
              </svg>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[70, 45, 80, 60].map((height, index) => (
                <div key={height} className="h-24 rounded-2xl border border-subtle bg-surface p-2">
                  <div
                    className="w-full rounded-xl bg-gradient-to-t from-aurora/70 via-white/20 to-transparent origin-bottom motion-reduce:animate-none animate-rise"
                    style={{ height: `${height}%` }}
                  />
                  <p className="mt-2 text-xs text-steel">W{index + 1}</p>
                </div>
              ))}
            </div>
          </div>
        </GlowCard>
      </div>
    </section>
  );
}
