import GlowCard from "@/components/ui/GlowCard";

const services = [
  {
    title: "Paid media that pays back",
    description:
      "Full-funnel paid acquisition with creative testing, budget allocation, and weekly performance optimizations.",
    outcome: "Lower CPL, higher intent leads"
  },
  {
    title: "Funnel strategy + build",
    description:
      "Messaging, landing pages, and conversion flows that align every step with your core offer and sales team.",
    outcome: "Higher conversion rates"
  },
  {
    title: "Lifecycle growth systems",
    description:
      "Email, webinars, and nurture sequences that increase attendance, activation, and customer LTV.",
    outcome: "More revenue per lead"
  }
];

export default function Services() {
  return (
    <section id="services" className="section py-20">
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="flex flex-col gap-4">
          <p className="text-xs uppercase tracking-[0.3em] text-steel">Services</p>
          <h2 className="headline text-3xl text-primary sm:text-4xl">Outcome-led growth for educators and creators.</h2>
          <p className="max-w-2xl text-steel">
            We build the growth engine so you can focus on product and community. Every service is tied to measurable
            pipeline outcomes, not vanity metrics.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <GlowCard key={service.title} className="p-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary">{service.title}</h3>
                <p className="text-sm text-steel">{service.description}</p>
                <p className="text-sm font-semibold text-aurora">{service.outcome}</p>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
