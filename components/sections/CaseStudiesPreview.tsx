import Image from "next/image";
import Link from "next/link";
import GlowCard from "@/components/ui/GlowCard";

const studies = [
  {
    title: "EdTech brand increased qualified leads by 3.2x in 90 days",
    detail: "Rebuilt the webinar funnel, refreshed the paid media creative, and introduced mid-funnel nurture.",
    metric: "+3.2x qualified leads",
    image: "/images/case-1.webp"
  },
  {
    title: "Coach scaled webinar registrations while reducing CPL by 41%",
    detail: "Introduced offer-led segmentation and optimized landing page messaging for intent.",
    metric: "-41% cost per lead",
    image: "/images/case-2.webp"
  }
];

export default function CaseStudiesPreview() {
  return (
    <section className="section py-20">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-steel">Case studies</p>
            <h2 className="headline text-3xl text-primary sm:text-4xl">Proof of outcomes, not promises.</h2>
            <p className="max-w-2xl text-steel">
              Short, clear stories showing the exact leverage points that moved revenue. No fluff, just the path from
              problem to measurable result.
            </p>
          </div>
          <Link
            href="/case-studies"
            className="rounded-full border border-strong bg-surface px-5 py-2 text-sm font-semibold text-primary transition hover:border-strong hover:bg-surface-strong"
          >
            View all case studies
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {studies.map((study) => (
            <GlowCard key={study.title} className="p-6">
              <div className="space-y-5">
                <Image
                  src={study.image}
                  alt={study.title}
                  width={520}
                  height={320}
                  className="h-48 w-full rounded-2xl object-cover"
                  loading="lazy"
                />
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-primary">{study.title}</h3>
                  <p className="text-sm text-steel">{study.detail}</p>
                  <p className="text-sm font-semibold text-aurora">{study.metric}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
