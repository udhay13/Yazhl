import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/Container";
import { primaryButtonClasses } from "@/components/primaryButtonStyles";
import { fadeUp, staggerContainer } from "@/animations/variants";
import GradientText from "@/components/GradientText";
import DarkVeil from "@/components/DarkVeil";
import { openBookCallWhatsApp } from "@/lib/whatsapp";

const stats = [
  { value: "60%", label: "Revenue Growth" },
  { value: "15hrs", label: "Saved Per Week" },
  { value: "10+", label: "Happy Clients" },
];

const snapshotBars = [
  { width: "82%", delay: 0.2 },
  { width: "68%", delay: 0.3 },
  { width: "91%", delay: 0.4 },
];

export const Hero = () => {
  const scrollToSection = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="hero" className="relative isolate overflow-hidden bg-black section-padding pt-52 md:pt-24 lg:pt-24">
      <div className="pointer-events-none absolute inset-0 z-0 opacity-100">
        <DarkVeil
          hueShift={12}
          noiseIntensity={0.02}
          scanlineIntensity={0.04}
          speed={0.65}
          scanlineFrequency={1.2}
          warpAmount={0.08}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 z-0 bg-black/35" />

      <Container className="relative z-10">
        {/* Two-column grid: left = text, right = snapshot card */}
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">

          {/* ── Left column ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center pt-8 text-center md:pt-0 lg:items-start lg:text-left"
          >
            {/* Badge */}
            <motion.p
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white/80"
            >
              <span className="h-2 w-2 rounded-full bg-[#7C3AED]" />
              Trusted by 10+ Businesses
            </motion.p>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-[3.25rem] xl:text-6xl"
            >
              <span className="block lg:whitespace-nowrap">Your Growth Partner for</span>
              <span className="block lg:whitespace-nowrap">
                <GradientText
                  colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
                  animationSpeed={8}
                  showBorder={false}
                  className="inline-flex !m-0 !cursor-default !backdrop-blur-none"
                >
                  Visibility That Converts
                </GradientText>
              </span>
              <span className="block lg:whitespace-nowrap">Marketing That Sells.</span>
            </motion.h1>

            {/* Sub-copy */}
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg lg:max-w-xl"
            >
              We combine content strategy, performance marketing, website development, and revenue optimization to drive traffic, generate leads, and grow sales.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
            >
              <button
                type="button"
                onClick={openBookCallWhatsApp}
                className={primaryButtonClasses({ size: "lg", className: "w-full sm:w-auto" })}
              >
                Book Strategy Call
                <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="/services"
                className={primaryButtonClasses({
                  variant: "outline",
                  size: "lg",
                  className:
                    "w-full sm:w-auto border-white/35 bg-transparent text-white hover:border-[#7C3AED] hover:bg-[#7C3AED]/10 hover:text-white text-center",
                })}
              >
                Explore Services
              </a>
            </motion.div>

            {/* Trust line */}
            <motion.p variants={fadeUp} className="mt-4 text-sm text-white/65">
              Trusted by 10+ Businesses | 60% Revenue Growth | 15hrs Saved Per Week
            </motion.p>

            {/* Stat boxes */}
            <motion.dl
              variants={fadeUp}
              className="mt-10 grid w-full max-w-lg grid-cols-3 gap-3 lg:max-w-none lg:gap-6"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-xl border border-white/20 bg-white/5 p-4 text-center shadow-sm">
                  <dt className="text-xs font-medium text-white/60 md:text-sm">{stat.label}</dt>
                  <dd className="mt-2 text-xl font-bold text-white md:text-2xl">{stat.value}</dd>
                </div>
              ))}
            </motion.dl>
          </motion.div>

          {/* ── Right column — Growth Snapshot card ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.15 }}
            className="mx-auto w-full max-w-[30rem] rounded-2xl border border-white/20 bg-white/10 p-6 shadow-sm backdrop-blur-sm md:p-8 lg:mx-0 lg:ml-auto lg:mt-24"
          >
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-white/55">
                Growth Snapshot
              </p>
              <Sparkles className="h-4 w-4 text-[#7C3AED]" />
            </div>

            <div className="space-y-3">
              {snapshotBars.map((bar, index) => (
                <div key={index} className="h-1.5 rounded-full bg-white/15">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: bar.width }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: bar.delay, ease: "easeInOut" }}
                    className="h-1.5 rounded-full bg-[#7C3AED]"
                  />
                </div>
              ))}
            </div>

            <div className="mt-5 grid gap-3 grid-cols-2">
              <div className="rounded-xl border border-white/20 bg-white/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/55">Pipeline</p>
                <p className="mt-1.5 text-2xl font-bold text-white">4.8x</p>
                <p className="text-xs text-white/70">MQL uplift</p>
              </div>
              <div className="rounded-xl border border-white/20 bg-white/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/55">Efficiency</p>
                <p className="mt-1.5 text-2xl font-bold text-white">+61%</p>
                <p className="text-xs text-white/70">Ops automation</p>
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};
