import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Leaders from "@/components/sections/Leaders";
import ProfitFocus from "@/components/sections/ProfitFocus";
import Partners from "@/components/sections/Partners";
import Reviews from "@/components/sections/Reviews";
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
        <Leaders />
        <ProfitFocus />
        <Partners />
        <Reviews />
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
