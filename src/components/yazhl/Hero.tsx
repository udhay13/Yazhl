import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { openBookCallWhatsApp } from "@/lib/whatsapp";

export const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background decorative orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-[10%] w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl animate-float" />
        <div className="absolute bottom-20 left-[5%] w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-accent/15 to-pink/15 blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/5 to-accent/5 blur-3xl animate-float-slow" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-medium text-muted-foreground">
                Trusted by 100+ Businesses
              </span>
            </motion.div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight mb-6">
              The Rhythm of{" "}
              <span className="text-gradient">Harmony</span>
            </h1>

            <p className="text-lg md:text-xl font-medium text-primary mb-4">
              Transforming Business Reality
            </p>

            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
              Orchestrating real business success through operational excellence.
              We're not just a marketing agency â€” we're{" "}
              <strong className="text-foreground">Operational Architects</strong>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button
                size="lg"
                onClick={openBookCallWhatsApp}
                className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-glow px-8 py-6 text-base"
              >
                Book Strategy Call
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("#solutions")}
                className="border-border hover:bg-secondary px-8 py-6 text-base"
              >
                Explore Solutions
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-md mx-auto lg:mx-0">
              {[
                { value: "60%", label: "Revenue Growth" },
                { value: "15hrs", label: "Saved Per Week" },
                { value: "10+", label: "Happy Clients" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="text-center lg:text-left"
                >
                  <div className="text-2xl md:text-3xl font-bold text-gradient">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* Central 3D cube effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-3xl bg-gradient-primary rotate-12 shadow-glow animate-float" />
                <div className="absolute w-40 h-40 md:w-56 md:h-56 rounded-3xl glass -rotate-6" />
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 right-8 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent shadow-lg flex items-center justify-center"
              >
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 12V8H6a2 2 0 01-2-2c0-1.1.9-2 2-2h12v4" strokeLinecap="round" />
                  <path d="M4 6v12c0 1.1.9 2 2 2h14v-4" strokeLinecap="round" />
                  <path d="M18 12l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-12 left-4 w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-pink shadow-lg flex items-center justify-center"
              >
                <Sparkles className="w-7 h-7 text-white" />
              </motion.div>

              <motion.div
                animate={{ y: [-8, 12, -8], x: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-1/3 left-0 w-12 h-12 rounded-lg bg-gradient-to-br from-violet to-primary shadow-lg flex items-center justify-center"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" strokeLinecap="round" />
                  <path d="M22 4L12 14.01l-3-3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

