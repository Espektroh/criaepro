import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import GrowthTrack from "@/components/GrowthTrack";
import HowItWorks from "@/components/HowItWorks";
import ForWhom from "@/components/ForWhom";
import Manifesto from "@/components/Manifesto";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <GrowthTrack />
        <HowItWorks />
        <ForWhom />
        <Manifesto />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
