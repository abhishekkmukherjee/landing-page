import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Leaders from "@/components/sections/Leaders";
import ProfitFocus from "@/components/sections/ProfitFocus";
import Partners from "@/components/sections/Partners";
import Proof from "@/components/sections/Proof";
import Reviews from "@/components/sections/Reviews";
import Services from "@/components/sections/Services";
import GrowthMetrics from "@/components/sections/GrowthMetrics";
import Insights from "@/components/sections/Insights";
import Process from "@/components/sections/Process";
import CaseStudiesPreview from "@/components/sections/CaseStudiesPreview";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Leaders />
        <ProfitFocus />
        <Partners />
        <Proof />
        <Reviews />
        <Services />
        <GrowthMetrics />
        <Insights />
        <Process />
        <CaseStudiesPreview />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
