export default function ProfitFocus() {
  return (
    <section className="section pb-20">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-2xl border border-subtle bg-surface p-8 md:p-10">
          <div className="absolute -right-16 top-0 h-52 w-52 rounded-full bg-aurora/14 blur-3xl motion-safe:animate-drift" />
          <div className="absolute -left-20 bottom-0 h-52 w-52 rounded-full bg-ember/12 blur-3xl motion-safe:animate-float" />
          <div className="relative z-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="rounded-2xl border border-strong bg-void/80 p-8 text-primary shadow-soft">
              <p className="text-sm uppercase tracking-[0.2em] text-steel">No jargon.</p>
              <p className="mt-3 text-lg font-semibold text-primary">Just one KPI —</p>
              <p className="mt-2 text-3xl font-semibold text-aurora">Profits ↗</p>
            </div>
            <div className="space-y-4 text-steel">
              <p className="text-lg text-primary">
                We are hyper focused on increasing your profits, month over month.
              </p>
              <p>
                <span className="font-semibold text-primary">No fluff. High impact. No ad spend wasted.</span> We
                leverage learnings from thousands of experiments with successful EdTech brands and coaches to create a
                robust marketing engine that generates compounding growth for your business, rather than linear growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
