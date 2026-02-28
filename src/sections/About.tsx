import { motion } from "framer-motion";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { GlassCard } from "@/components/GlassCard";
import { SectionWrapper } from "@/components/SectionWrapper";

const infoBlocks = [
  {
    title: "Operational Architects",
    description: "Who restructure businesses for scale.",
  },
  {
    title: "Business Evolution",
    description: "We don't just change your website; we change your bottom line.",
  },
];

export const About = () => {
  return (
    <SectionWrapper id="who-we-are" className="pt-12 md:pt-20">
      <AnimatedHeading
        eyebrow="About Us"
        title="The Rhythm of"
        highlight="Business Evolution"
        description="Beyond digital tools. Real business transformation."
      />

      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -26 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <GlassCard className="min-h-[320px] p-0 md:min-h-[380px]" glow tilt>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_18%,rgba(127,90,240,0.3),transparent_45%),radial-gradient(circle_at_80%_72%,rgba(255,106,194,0.3),transparent_42%)]" />
            <div className="relative grid h-full place-items-center p-8 text-center">
              <div className="max-w-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-900/60">
                  Who We Are
                </p>
                <p className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
                  The team behind measurable growth systems.
                </p>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 26 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="space-y-5"
        >
          <GlassCard className="p-7 md:p-8" interactive={false}>
            <p className="text-base leading-relaxed text-slate-900/75 md:text-lg">
              We are not just a marketing agency - we are{" "}
              <span className="font-semibold text-slate-900">Operational Architects</span>{" "}
              who restructure businesses for scale.
            </p>
          </GlassCard>

          <GlassCard className="p-7 md:p-8" interactive={false}>
            <p className="text-base leading-relaxed text-slate-900/75 md:text-lg">
              YAZHL moves beyond simple "digital presence" to deliver tangible
              business evolution. We don&apos;t just change your website; we change
              your bottom line.
            </p>
          </GlassCard>

          <div className="grid gap-4 sm:grid-cols-2">
            {infoBlocks.map((item) => (
              <GlassCard
                key={item.title}
                className="border-white/25 p-5"
                interactive={false}
              >
                <p className="text-sm font-bold uppercase tracking-[0.1em] text-slate-900/70">
                  {item.title}
                </p>
                <p className="mt-2 text-sm text-slate-900/70">{item.description}</p>
              </GlassCard>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

