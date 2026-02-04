import PrimaryButton from "@/components/ui/PrimaryButton";

export default function Proof() {
  return (
    <section className="section pb-20">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-2xl border border-subtle bg-surface px-8 py-10 shadow-glow md:px-12">
          <div className="absolute -right-24 -top-16 h-56 w-56 rounded-full bg-aurora/12 blur-3xl" />
          <div className="absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-ember/10 blur-3xl" />
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-5">
              <p className="text-xs uppercase tracking-[0.3em] text-steel">Proof that compounds</p>
              <p className="text-2xl font-semibold text-primary sm:text-3xl">
                “65% of our clients have tripled their profits in the first 6 months.”
              </p>
              <p className="text-steel">
                We leverage learnings from thousands of experiments with successful EdTech brands and coaches to
                maximize returns and boost growth.
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:items-end">
              <p className="text-lg font-semibold text-primary">Let&apos;s Talk</p>
              <p className="text-sm text-steel">Connect with us to scale your business.</p>
              <PrimaryButton href="#contact" label="Schedule a call" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
