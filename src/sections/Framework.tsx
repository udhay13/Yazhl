import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Container } from "@/components/Container";
import { YazhlFrameworkFunnel } from "@/components/framework/YazhlFrameworkFunnel";

const socialMediaFlow = [
  {
    label: "Hook",
    description: "Stop the scroll with content built for attention.",
  },
  {
    label: "Engage",
    description: "Build trust through consistent storytelling and value.",
  },
  {
    label: "Convert",
    description: "Turn followers into customers with conversion-focused strategy.",
  },
  {
    label: "Scale Revenue",
    description: "Optimize and expand what drives measurable growth.",
  },
];

const websiteEngineFlow = [
  {
    label: "Traffic",
    description: "Attract high-intent visitors through SEO-driven content and optimized digital pathways.",
  },
  {
    label: "Lead Generation",
    description: "Convert visitors into qualified leads using landing pages, CTAs, and funnel strategy.",
  },
  {
    label: "Conversion",
    description: "Guide leads into action with conversion-focused journeys designed to increase customer acquisition.",
  },
  {
    label: "Sales Growth",
    description: "Scale what works through optimization, performance insights, and revenue-led marketing systems.",
  },
];

export const Framework = () => {
  return (
    <section id="framework" className="relative isolate overflow-hidden border-y border-[#E5E7EB] bg-white py-20 md:py-28">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:18px_18px]" />
        <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-[#94A3B8]/10 blur-3xl" />
        <div className="absolute -right-24 bottom-6 h-72 w-72 rounded-full bg-[#CBD5E1]/25 blur-3xl" />
      </div>

      <Container className="relative z-10">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-[#111827] bg-[#111827] px-4 py-2 text-xs font-semibold tracking-[0.16em] text-white">
            <Sparkles className="h-4 w-4 text-[#A78BFA]" />
            OUR FRAMEWORK
          </p>
          <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-[#111827] md:text-6xl">
            YAZHL Growth System
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[#4B5563] md:text-lg">
            We deliver integrated digital marketing solutions combining content strategy, performance marketing,
            website development, and revenue optimization to drive traffic, generate leads, and increase sales.
          </p>
        </motion.div>

        {/* ── Funnel Cards ── */}
        <div className="mt-14 grid items-stretch gap-8 lg:grid-cols-2">
          <YazhlFrameworkFunnel
            title="Social Media Engine"
            subtitle="Attention Loop"
            steps={socialMediaFlow}
            accentFrom="#334155"
            accentTo="#64748B"
            glowColor="#CBD5E1"
          />
          <YazhlFrameworkFunnel
            title="Website Engine"
            subtitle="Acquisition Loop"
            steps={websiteEngineFlow}
            accentFrom="#475569"
            accentTo="#94A3B8"
            glowColor="#E2E8F0"
          />
        </div>
      </Container>
    </section>
  );
};
