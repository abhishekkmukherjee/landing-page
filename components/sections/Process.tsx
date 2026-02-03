const steps = [
  {
    title: "Diagnose the funnel",
    detail: "Audit current acquisition, conversion, and activation with clear benchmarks."
  },
  {
    title: "Build the growth system",
    detail: "Design the paid media, funnel assets, and lifecycle automation needed to scale."
  },
  {
    title: "Optimize for ROI",
    detail: "Weekly creative testing, budget tuning, and KPI reporting with founders in the loop."
  }
];

export default function Process() {
  return (
    <section id="process" className="section py-20">
      <div className="mx-auto max-w-6xl rounded-2xl border border-subtle bg-surface p-10">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.3em] text-steel">Process</p>
            <h2 className="headline text-3xl text-primary sm:text-4xl">
              A calm, repeatable system for predictable growth.
            </h2>
            <p className="text-steel">
              We keep things focused: a clear strategy, a prioritized funnel build, then weekly optimization to keep
              your pipeline moving. No bloated decks, just measurable progress.
            </p>
          </div>
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={step.title} className="flex gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-subtle bg-surface text-sm text-primary">
                  0{index + 1}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-primary">{step.title}</h3>
                  <p className="text-sm text-steel">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
