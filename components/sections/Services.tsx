import GlowCard from "@/components/ui/GlowCard";
import PrimaryButton from "@/components/ui/PrimaryButton";

const services = [
  {
    title: "Performance Marketing",
    description:
      "Boost monthly profits and outrank competitors with coaching-industry account managers. We manage media buying on Meta and Google."
  },
  {
    title: "Content & Creative Services",
    description:
      "Maximize ROI with data-driven copy and clever design. We create ads that deliver strong CTR and low CPA."
  },
  {
    title: "Business Strategy",
    description:
      "Always know the next best move in your growth journey and stay ahead of the competition. Your win is our win."
  },
  {
    title: "Video Production (Ad Shoots) & Post Production (Editing)",
    description:
      "Generate impact with scroll-stopping videos. We handle end-to-end production including scripting, shooting, and editing."
  }
];

export default function Services() {
  return (
    <section id="services" className="section py-20">
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="flex flex-col gap-4">
          <p className="text-xs uppercase tracking-[0.3em] text-steel">Our Services</p>
          <h2 className="headline text-3xl text-primary sm:text-4xl">We do all your marketing work so you can focus on teaching.</h2>
          <p className="max-w-2xl text-steel">
            While you deliver outcomes for learners, we scale your business profitably with a complete marketing stack.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <GlowCard key={service.title} className="p-6 md:p-7">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-steel">
                <span>Service 0{index + 1}</span>
                <span className="h-2 w-2 rounded-full bg-aurora/70" aria-hidden />
              </div>
              <div className="mt-4 space-y-3">
                <h3 className="text-lg font-semibold text-primary">{service.title}</h3>
                <p className="text-sm text-steel">{service.description}</p>
              </div>
              <div className="mt-6 h-px w-full bg-white/10" />
            </GlowCard>
          ))}
        </div>
        <div className="flex justify-center">
          <PrimaryButton href="#contact" label="Let's Talk" />
        </div>
      </div>
    </section>
  );
}
