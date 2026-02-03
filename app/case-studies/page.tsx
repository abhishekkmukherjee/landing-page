import Image from "next/image";
import Link from "next/link";
import GlowCard from "@/components/ui/GlowCard";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import caseStudy1 from "./case study 1.jpg";
import caseStudy2 from "./case study 2.jpg";
import caseStudy3 from "./case study 3.jpg";

const caseStudies = [
  {
    title: "EdTech brand increased qualified leads by 3.2x in 90 days",
    summary: "Rebuilt the funnel around high-intent segments and introduced a two-step nurture sequence.",
    metrics: ["+3.2x qualified leads", "+28% show-up rate", "-19% CAC"],
    image: caseStudy1
  },
  {
    title: "Coach scaled webinar registrations while reducing CPL by 41%",
    summary: "Simplified positioning, improved ad-to-landing message match, and refined targeting.",
    metrics: ["-41% cost per lead", "+2.1x registrations", "+17% close rate"],
    image: caseStudy2
  },
  {
    title: "Creator academy doubled launch revenue with lifecycle automation",
    summary: "Introduced segmented email flows and a micro-offer to warm leads before launch week.",
    metrics: ["2x launch revenue", "+34% email CTR", "+22% upsell rate"],
    image: caseStudy3
  }
];

export default function CaseStudiesPage() {
  return (
    <div>
      <Navbar />
      <main className="section pb-24 pt-16">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.3em] text-steel">Case studies</p>
            <h1 className="headline text-4xl text-primary sm:text-5xl">Real outcomes for growth-minded founders.</h1>
            <p className="max-w-2xl text-steel">
              Each case study highlights the exact levers we pull to create qualified pipeline, better conversion, and
              dependable ROI.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <GlowCard key={study.title} className="flex h-full flex-col p-6">
                <div className="space-y-5">
                  <Image
                    src={study.image}
                    alt={study.title}
                    width={520}
                    height={320}
                    className="h-44 w-full rounded-2xl object-cover"
                  />
                  <div className="space-y-3">
                    <h2 className="text-lg font-semibold text-primary">{study.title}</h2>
                    <p className="text-sm text-steel">{study.summary}</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-aurora">
                  {study.metrics.map((metric) => (
                    <li key={metric}>{metric}</li>
                  ))}
                </ul>
              </GlowCard>
            ))}
          </div>
          <div className="rounded-3xl border border-subtle bg-surface p-8 text-center">
            <h2 className="headline text-2xl text-primary">Want a custom growth plan?</h2>
            <p className="mt-3 text-steel">
              Share your offer and current funnel and we will send a short plan with priority actions.
            </p>
            <Link
              href="mailto:hello@scalexgrowth.com"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-aurora px-6 py-3 text-sm font-semibold text-ink shadow-soft transition hover:translate-y-[-1px]"
            >
              Request the plan
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
