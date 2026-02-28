import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { PageTransition } from "@/components/PageTransition";
import { Container } from "@/components/Container";
import { primaryButtonClasses } from "@/components/primaryButtonStyles";
import { Footer } from "@/sections/Footer";
import { openBookCallWhatsApp } from "@/lib/whatsapp";

interface PackageFeature {
  title: string;
  description: string;
}

interface PackageProps {
  tier: string;
  name: string;
  tagline: string;
  description: string;
  gradient?: string;
  iconGradient?: string;
  features: PackageFeature[];
  highlights: string[];
  idealFor: string[];
  ctaText?: string;
}

export const PackagePageLayout = ({
  tier,
  name,
  tagline,
  description,
  features,
  highlights,
  idealFor,
  ctaText = "Get Started Today",
}: PackageProps) => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    navigate("/#contact");
  };

  return (
    <PageTransition className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32">
        <section className="section-padding border-b border-[#E5E7EB]">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="max-w-4xl"
            >
              <Link
                to="/#packages"
                className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-medium text-[#6B7280] transition-colors hover:border-[#7C3AED] hover:text-[#7C3AED]"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Packages
              </Link>

              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.14em] text-[#9CA3AF]">
                {tier} Package
              </p>
              <h1 className="mt-4 text-4xl font-bold leading-[1.1] text-[#111111] sm:text-5xl md:text-6xl">
                {name}
              </h1>
              <p className="mt-4 text-xl font-semibold text-[#7C3AED] md:text-2xl">{tagline}</p>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#6B7280] md:text-lg">
                {description}
              </p>

              <button
                type="button"
                onClick={scrollToContact}
                className={primaryButtonClasses({ size: "lg", className: "mt-8" })}
              >
                {ctaText}
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          </Container>
        </section>

        <section className="section-padding bg-[#F9FAFB]">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-90px" }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="mx-auto max-w-3xl text-center"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#9CA3AF]">Package</p>
              <h2 className="mt-4 text-3xl font-semibold text-[#111111] md:text-4xl">
                What&apos;s <span className="text-[#7C3AED]">Included</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#6B7280] md:text-lg">
                Everything you need to establish and grow your digital presence
              </p>
            </motion.div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {features.map((feature, index) => (
                <motion.article
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.4, delay: index * 0.06, ease: "easeInOut" }}
                  whileHover={{ y: -4 }}
                  className="rounded-xl border border-[#E5E7EB] bg-white p-6 shadow-sm transition-transform duration-300"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#E5E7EB] text-[#7C3AED]">
                    <Check className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-xl font-semibold text-[#111111]">{feature.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-[#6B7280]">{feature.description}</p>
                </motion.article>
              ))}
            </div>
          </Container>
        </section>

        <section className="section-padding">
          <Container>
            <div className="grid gap-10 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-90px" }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#9CA3AF]">Package</p>
                <h2 className="mt-4 text-3xl font-semibold text-[#111111] md:text-4xl">
                  Package <span className="text-[#7C3AED]">Highlights</span>
                </h2>
                <div className="mt-8 space-y-3">
                  {highlights.map((highlight, index) => (
                    <div
                      key={`${highlight}-${index}`}
                      className="rounded-xl border border-[#E5E7EB] bg-white px-5 py-4 text-sm text-[#6B7280] shadow-sm md:text-base"
                    >
                      {highlight}
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-90px" }}
                transition={{ duration: 0.45, ease: "easeInOut", delay: 0.05 }}
                className="rounded-xl border border-[#E5E7EB] bg-white p-6 shadow-sm md:p-8"
              >
                <h3 className="text-2xl font-semibold text-[#111111]">Ideal For</h3>
                <div className="mt-6 space-y-3">
                  {idealFor.map((item, index) => (
                    <div
                      key={`${item}-${index}`}
                      className="flex items-center gap-3 rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3"
                    >
                      <span className="h-2.5 w-2.5 rounded-full bg-[#7C3AED]" />
                      <span className="text-sm font-medium text-[#6B7280]">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        <section className="section-padding border-y border-[#E5E7EB] bg-[#F9FAFB]">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-90px" }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="mx-auto max-w-3xl rounded-2xl border border-[#E5E7EB] bg-white p-8 text-center shadow-sm md:p-10"
            >
              <h2 className="text-3xl font-semibold text-[#111111] md:text-4xl">Ready to Get Started?</h2>
              <p className="mt-4 text-base leading-relaxed text-[#6B7280] md:text-lg">
                Let&apos;s discuss how the {name} package can transform your business. Book a free
                strategy call with our team.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <button type="button" onClick={openBookCallWhatsApp} className={primaryButtonClasses({ size: "lg" })}>
                  Book Strategy Call
                  <ArrowRight className="h-4 w-4" />
                </button>
                <Link to="/#packages" className={primaryButtonClasses({ variant: "outline", size: "lg" })}>
                  Compare Packages
                </Link>
              </div>
            </motion.div>
          </Container>
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
};
