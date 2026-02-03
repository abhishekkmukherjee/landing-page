import PrimaryButton from "@/components/ui/PrimaryButton";

export default function CTA() {
  return (
    <section id="contact" className="section py-20">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl border border-subtle bg-gradient-to-br from-white/10 via-white/5 to-transparent p-12 shadow-glow">
          <div className="absolute -right-10 top-6 h-44 w-44 rounded-full bg-aurora/20 blur-3xl" />
          <div className="absolute -left-10 bottom-0 h-44 w-44 rounded-full bg-ember/20 blur-3xl" />
          <div className="relative z-10 grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-steel">Ready to grow?</p>
              <h2 className="headline text-3xl text-primary sm:text-4xl">
                Get a focused growth plan in under two weeks.
              </h2>
              <p className="text-steel">
                We will audit your current funnel, identify immediate revenue wins, and share a 90-day roadmap tailored
                to your offer.
              </p>
            </div>
            <div className="flex flex-col gap-4 md:items-end">
              <PrimaryButton href="mailto:hello@scalexgrowth.com" label="Book a strategy call" />
              <p className="text-sm text-steel">Response time: 1 business day.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
