import Image from "next/image";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";
import Spotlight from "@/components/ui/Spotlight";

export default function Hero() {
  return (
    <section className="section relative pb-20 pt-16">
      <Spotlight />
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-8 motion-reduce:animate-none animate-rise">
          <div className="inline-flex items-center gap-2 rounded-full border border-subtle bg-surface px-4 py-2 text-xs uppercase tracking-[0.3em] text-steel">
            Performance Marketing Systems
          </div>
          <div className="space-y-6">
            <h1 className="headline text-4xl font-semibold text-primary sm:text-5xl lg:text-6xl">
              Build predictable revenue with paid media + funnels that convert.
            </h1>
            <p className="max-w-xl text-base text-steel sm:text-lg">
              ScaleX Growth Systems helps coaches, creators, and ed-tech brands turn ad spend into qualified leads and
              dependable revenue. We combine paid ads, lifecycle funnels, and creative testing to keep your pipeline
              full and your ROI visible.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <PrimaryButton href="#contact" label="Request a growth audit" />
            <SecondaryButton href="#contact" label="Let’s talk" />
            <SecondaryButton href="/case-studies" label="See case studies" />
          </div>
          <div className="flex flex-wrap gap-8 text-sm text-steel">
            <div>
              <p className="text-primary">$18M+</p>
              <p>Revenue influenced</p>
            </div>
            <div>
              <p className="text-primary">3.4x</p>
              <p>Avg lead lift</p>
            </div>
            <div>
              <p className="text-primary">41%</p>
              <p>Lower CPL</p>
            </div>
          </div>
        </div>
        <div className="relative motion-reduce:animate-none animate-rise">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-aurora/18 via-white/6 to-ember/12 blur-3xl" />
          <div className="relative rounded-2xl border border-subtle bg-void/80 p-6 shadow-glow">
            <div className="flex items-center justify-between">
              <p className="text-sm text-steel">Pipeline health</p>
              <span className="rounded-full bg-aurora/14 px-3 py-1 text-xs text-aurora">Live</span>
            </div>
            <div className="mt-6 space-y-5">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-steel">Qualified leads</span>
                  <span className="text-primary">+212%</span>
                </div>
                <div className="h-2 rounded-full bg-surface">
                  <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-aurora to-ember" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-steel">Cost per lead</span>
                  <span className="text-primary">-41%</span>
                </div>
                <div className="h-2 rounded-full bg-surface">
                  <div className="h-full w-[64%] rounded-full bg-gradient-to-r from-white/50 to-white/10" />
                </div>
              </div>
              <div className="rounded-2xl border border-subtle bg-surface p-4 text-sm text-steel">
                <p className="text-primary">This week</p>
                <p className="mt-2">
                  +342 registrations from a $9.10 CPL webinar funnel. Next launch already 68% pre-filled.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
