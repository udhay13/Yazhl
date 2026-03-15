import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { PageTransition } from "@/components/PageTransition";
import { CTA, ClientLogos, Footer, Framework, Hero, Pricing, Services, WhyUs } from "@/sections";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const id = location.hash;
    window.requestAnimationFrame(() => {
      const target = document.querySelector(id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }, [location.hash]);

  return (
    <PageTransition className="min-h-screen overflow-x-hidden bg-white">
      <Navbar />
      <main>
        <Hero />
        <Framework />
        <ClientLogos />
        <Services />
        <Pricing />
        <WhyUs />
        <CTA />
      </main>
      <Footer />
    </PageTransition>
  );
};

export default Index;
