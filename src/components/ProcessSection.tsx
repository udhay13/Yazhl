import { motion } from "framer-motion";
import { CloudUpload, Fingerprint, Lock, RefreshCcw } from "lucide-react";
import { Container } from "@/components/Container";
import { primaryButtonClasses } from "@/components/primaryButtonStyles";
import { openBookCallWhatsApp } from "@/lib/whatsapp";

const features = [
  {
    name: "Push to deploy",
    description:
      "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    icon: CloudUpload,
  },
  {
    name: "SSL certificates",
    description:
      "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
    icon: Lock,
  },
  {
    name: "Simple queues",
    description:
      "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
    icon: RefreshCcw,
  },
  {
    name: "Advanced security",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: Fingerprint,
  },
];

const principles = [
  {
    title: "Operational Architects",
    description: "Who restructure businesses for scale.",
  },
  {
    title: "Business Evolution",
    description: "We don't just change your website; we change your bottom line.",
  },
  {
    title: "The team behind measurable growth systems.",
    description: "Beyond digital tools. Real business transformation.",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.1, ease: "easeOut" },
  },
};

export const ProcessSection = () => {
  return (
    <>
      <section id="who-we-are" className="py-20 md:py-28">
        <Container>
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mx-auto max-w-4xl text-center"
          >
            <motion.p variants={itemVariants} className="text-sm font-semibold uppercase tracking-[0.14em] text-[#9CA3AF]">
              About Us
            </motion.p>
            <motion.h2
              variants={headingVariants}
              className="mx-auto mt-4 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-[#111111] md:text-6xl"
            >
              The Rhythm of Business <span className="text-[#7C3AED]">Evolution</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#6B7280] md:text-lg">
              Beyond digital tools. Real business transformation.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      <section className="bg-[#F9FAFB] py-16 md:py-24">
        <Container>
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid items-start gap-10 md:grid-cols-2 md:gap-16"
          >
            <motion.div variants={itemVariants} className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#9CA3AF]">Who We Are</p>
              <h3 className="mt-4 text-3xl font-semibold leading-[1.1] tracking-tight text-[#111111] md:text-4xl">
                The team behind measurable growth systems.
              </h3>
              <div className="mt-6 space-y-6">
                <p className="text-base leading-relaxed text-[#6B7280] md:text-lg">
                  We are not just a marketing agency - we are{" "}
                  <span className="font-semibold text-[#111111]">Operational Architects</span> who
                  restructure businesses for scale.
                </p>
                <p className="text-base leading-relaxed text-[#6B7280] md:text-lg">
                  YAZHL moves beyond simple "digital presence" to deliver tangible business evolution.
                  We don&apos;t just change your website; we change your bottom line.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#9CA3AF]">Our Philosophy</p>
              <h3 className="mt-4 text-3xl font-semibold leading-[1.1] tracking-tight text-[#111111] md:text-4xl">
                Bridging Vision <span className="text-[#7C3AED]">& Reality</span>
              </h3>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-[#6B7280] md:text-lg">
                To operationalize your vision by turning chaotic workflows into a self-sustaining
                engine of operational excellence.
              </p>

              <div className="mt-10">
                <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-16">
                      <dt className="text-base font-semibold leading-7 text-[#111111]">
                        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#7C3AED]">
                          <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                        </div>
                        {feature.name}
                      </dt>
                      <dd className="mt-2 text-base leading-7 text-[#6B7280]">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={itemVariants} className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#9CA3AF]">
                Values / Principles
              </p>
              <h3 className="mt-4 text-3xl font-semibold leading-[1.1] tracking-tight text-[#111111] md:text-4xl">
                Business <span className="text-[#7C3AED]">Evolution</span>
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[#6B7280] md:text-lg">
                To operationalize your vision by turning chaotic workflows into a self-sustaining
                engine of operational excellence.
              </p>
            </motion.div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {principles.map((principle, index) => (
                <motion.article
                  key={principle.title}
                  variants={itemVariants}
                  className="flex h-full flex-col rounded-xl border border-[#E5E7EB] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#111111]">
                    {principle.title}
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-[#6B7280]">{principle.description}</p>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      <section className="bg-[#F9FAFB] py-24">
        <Container>
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mx-auto max-w-3xl text-center"
          >
            <motion.h3 variants={headingVariants} className="text-3xl font-semibold leading-[1.1] tracking-tight text-[#111111] md:text-5xl">
              Ready to transform your business reality?
            </motion.h3>
            <motion.p variants={itemVariants} className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#6B7280] md:text-lg">
              Ready to transform your business reality? Reach out to us and let&apos;s create your
              success story together.
            </motion.p>
            <motion.div variants={itemVariants} className="mt-8">
              <button type="button" onClick={openBookCallWhatsApp} className={primaryButtonClasses({ size: "lg" })}>
                Book Strategy Call
              </button>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </>
  );
};
