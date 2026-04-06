import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Container } from "@/components/Container";

const headlineLines = [
  "Creative Marketing strategies",
  "that drive conversion",
  "and grow your business",
];

export const Services = () => {
  return (
    <section id="solutions" className="relative overflow-hidden bg-gradient-to-b from-[#F2F6F4] to-white py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-10 h-56 w-56 -translate-x-1/2 rounded-full bg-[#0A4A44]/10 blur-3xl" />
        <div className="absolute bottom-4 left-1/4 h-40 w-40 rounded-full bg-[#FACC15]/20 blur-3xl" />
      </div>

      <Container className="relative z-10">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -left-2 top-20 hidden h-44 w-28 rounded-[1.5rem] border border-[#0A4A44]/10 bg-white/70 p-2 shadow-xl backdrop-blur md:block"
        >
          <div className="h-full rounded-[1.1rem] bg-gradient-to-b from-[#DCFCE7] to-[#E2E8F0] p-2">
            <div className="h-24 rounded-lg bg-[#0A4A44]/20" />
            <div className="mt-2 h-2 w-10 rounded-full bg-[#0A4A44]/30" />
            <div className="mt-1 h-2 w-8 rounded-full bg-[#0A4A44]/20" />
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="pointer-events-none absolute -right-2 top-24 hidden h-52 w-32 rounded-[1.5rem] border border-[#0A4A44]/10 bg-white/70 p-2 shadow-xl backdrop-blur md:block"
        >
          <div className="h-full rounded-[1.1rem] bg-gradient-to-b from-[#FEE2E2] to-[#FDE68A] p-2">
            <div className="h-28 rounded-lg bg-[#0A4A44]/20" />
            <div className="mt-2 flex items-center gap-2 text-[11px] font-semibold text-[#0A4A44]">
              <Play className="h-3 w-3 fill-current" />
              Reel Preview
            </div>
          </div>
        </motion.div>

        <div className="mx-auto max-w-5xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4 }}
            className="mx-auto inline-flex items-center rounded-full border border-[#0A4A44]/20 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#0A4A44]"
          >
            Brand + Growth Alignment 🔥
          </motion.p>

          <h2 className="mt-8 text-3xl font-black uppercase leading-[1.06] tracking-tight text-[#111111] sm:text-4xl md:text-6xl">
            {headlineLines.map((line, index) => (
              <motion.span
                key={line}
                initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                {line}
              </motion.span>
            ))}
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-[#4B5563] md:text-lg"
          >
            We don&apos;t just create content. We create strategic content engineered for reach,
            retention, and revenue.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: 0.25 }}
            className="mt-9"
          >
            <a
              href="#contact"
              className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-[#0A4A44] px-7 text-sm font-bold uppercase tracking-[0.08em] text-white"
            >
              <span className="absolute inset-0 scale-0 rounded-full bg-white/25 transition-transform duration-500 group-hover:scale-[2.2]" />
              <span className="relative z-10 inline-flex items-center gap-2">
                Build My Strategy
                <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
