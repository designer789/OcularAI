import Hero from "@/components/Hero";
import Description from "@/components/Description";
import HUDFrame from "@/components/HUDFrame";
import ProductHighlights from "@/components/ProductHighlights";
import OcularFeatures from '@/components/OcularFeatures';
import Tokenomics from '@/components/Tokenomics';
import Roadmap from '@/components/Roadmap';
import FAQ from '@/components/FAQ';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="">
      <NavBar />
      <section id="Hero">
        <Hero />
      </section>
     
      <section id="Description">
        <Description />
      </section>
      <section id="ProductHighlights">
        <ProductHighlights />
      </section>
      <section id="OcularFeatures">
        <OcularFeatures />
      </section>
      <section id="Tokenomics">
        <Tokenomics />
      </section>
      <section id="Roadmap">
        <Roadmap />
      </section>
      <section id="FAQ">
        <FAQ />
      </section>
      <Footer />
      <HUDFrame />
    </main>
  );
}
