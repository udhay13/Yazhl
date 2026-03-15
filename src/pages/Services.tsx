import { Navbar } from "@/components/Navbar";
import { PageTransition } from "@/components/PageTransition";
import { Features, Footer } from "@/sections";

const Services = () => {
  return (
    <PageTransition className="min-h-screen overflow-x-hidden bg-white">
      <Navbar />
      <main>
        <Features />
      </main>
      <Footer />
    </PageTransition>
  );
};

export default Services;

