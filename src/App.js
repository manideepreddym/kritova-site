import { useEffect } from "react";
import Lenis from "lenis";
import "@/App.css";
import Seo from "@/components/Seo";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Mission } from "@/components/Mission";
import { KritovaAI } from "@/components/KritovaAI";
import { Culture } from "@/components/Culture";
import { HowItWorks } from "@/components/HowItWorks";
import { Verticals } from "@/components/Verticals";
import { Shipped } from "@/components/Shipped";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

function App() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const lenis = new Lenis({ duration: 1.15 });
    window.__lenis = lenis;
    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return (
    <div className="site">
      <Seo
        title="Kritova — AI that ships, built by a real community"
        siteName="Kritova"
        image="/og-image.png"
        description="Kritova builds AI-driven solutions for automation, fitness, hospitality, and beyond — engineered by Kritovians, a volunteer community of apprentices and mentors who ship real, deployed products."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Kritova",
          description:
            "AI solutions company building AI-driven products for real businesses, engineered by the Kritovian community.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Troy",
            addressRegion: "MI",
            addressCountry: "US",
          },
        }}
      />
      <div className="grain" aria-hidden="true" />
      <Nav />
      <main id="top">
        <Hero />
        <Marquee />
        <Mission />
        <KritovaAI />
        <Culture />
        <HowItWorks />
        <Verticals />
        <Shipped />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
