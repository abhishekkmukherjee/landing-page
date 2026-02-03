import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Leaders from "@/components/sections/Leaders";
import ProfitFocus from "@/components/sections/ProfitFocus";
import Insights from "@/components/sections/Insights";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import CaseStudiesPreview from "@/components/sections/CaseStudiesPreview";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Leaders />
        <ProfitFocus />
        <Insights />
        <Services />
        <Process />
        <CaseStudiesPreview />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
