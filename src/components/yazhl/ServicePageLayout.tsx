import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Check,
  FileText,
  Globe,
  LineChart,
  Settings,
  Users,
  Video,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { PageTransition } from "@/components/PageTransition";
import { Container } from "@/components/Container";
import { primaryButtonClasses } from "@/components/primaryButtonStyles";
import { Footer } from "@/sections/Footer";
import { openBookCallWhatsApp } from "@/lib/whatsapp";

interface ServicePageLayoutProps {
  name: string;
  tagline: string;
  description: string;
  bullets: string[];
}

export const ServicePageLayout = ({ name, tagline, description, bullets }: ServicePageLayoutProps) => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    navigate("/#contact");
  };

  const getServiceIllustration = () => {
    if (name.toLowerCase().includes("content")) {
      return { icon: FileText, label: "Content & SEO", accent: "from-[#0EA5E9] to-[#22C55E]" };
    }
    if (name.toLowerCase().includes("performance")) {
      return { icon: BarChart3, label: "Performance Marketing", accent: "from-[#F97316] to-[#FACC15]" };
    }
    if (name.toLowerCase().includes("crm")) {
      return { icon: Settings, label: "CRM & Automation", accent: "from-[#7C3AED] to-[#A855F7]" };
    }
    if (name.toLowerCase().includes("field")) {
      return { icon: Globe, label: "Field Marketing", accent: "from-[#0EA5E9] to-[#22C55E]" };
    }
    if (name.toLowerCase().includes("social media")) {
      return { icon: Users, label: "Social Media Growth", accent: "from-[#EC4899] to-[#8B5CF6]" };
    }
    if (name.toLowerCase().includes("website")) {
      return { icon: Globe, label: "Website & UX", accent: "from-[#0EA5E9] to-[#22C55E]" };
    }
    if (name.toLowerCase().includes("revenue")) {
      return { icon: LineChart, label: "Revenue Optimization", accent: "from-[#22C55E] to-[#16A34A]" };
    }
    if (name.toLowerCase().includes("video")) {
      return { icon: Video, label: "Video & Creative", accent: "from-[#EC4899] to-[#F97316]" };
    }
    return { icon: LineChart, label: "Growth Execution", accent: "from-[#7C3AED] to-[#22C55E]" };
  };

  const illustration = getServiceIllustration();

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
                to="/#services"
                className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-medium text-[#6B7280] transition-colors hover:border-[#7C3AED] hover:text-[#7C3AED]"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Services
              </Link>

              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.14em] text-[#9CA3AF]">Service</p>
              <h1 className="mt-4 text-4xl font-bold leading-[1.1] text-[#111111] sm:text-5xl md:text-6xl">
                {name}
              </h1>
              <p className="mt-4 text-xl font-semibold text-[#7C3AED] md:text-2xl">{tagline}</p>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#6B7280] md:text-lg">{description}</p>

              <button
                type="button"
                onClick={scrollToContact}
                className={primaryButtonClasses({ size: "lg", className: "mt-8" })}
              >
                Talk to Our Team
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
              className="mx-auto max-w-5xl text-center"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#0F172A]/60">What We Deliver</p>
              <h2 className="mt-4 text-3xl font-semibold text-[#111827] md:text-4xl">
                How This Service <span className="text-[#7C3AED]">Transforms Your Growth</span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#4B5563] md:text-base">
                Every point below is a concrete, execution-ready outcome tied directly to visibility, leads, and
                revenue.
              </p>
            </motion.div>

            {/* Top illustration strip */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="mx-auto mt-10 flex max-w-5xl flex-col gap-4 md:flex-row"
            >
              <div className="relative flex-1 overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
                <div
                  className={`absolute inset-0 -z-10 bg-gradient-to-br ${illustration.accent} opacity-10`}
                />
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${illustration.accent} text-white shadow-lg`}
                  >
                    <illustration.icon className="h-7 w-7" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6B7280]">
                      Service Illustration
                    </p>
                    <p className="mt-1 text-base font-semibold text-[#111827] md:text-lg">{illustration.label}</p>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2 text-[11px] text-[#6B7280] md:text-xs">
                  <div className="space-y-1">
                    <p className="font-semibold text-[#111827]">Visibility</p>
                    <div className="h-1.5 w-full rounded-full bg-slate-100">
                      <div className="h-1.5 w-4/5 rounded-full bg-[#7C3AED]" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold text-[#111827]">Leads</p>
                    <div className="h-1.5 w-full rounded-full bg-slate-100">
                      <div className="h-1.5 w-3/4 rounded-full bg-[#22C55E]" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold text-[#111827]">Sales</p>
                    <div className="h-1.5 w-full rounded-full bg-slate-100">
                      <div className="h-1.5 w-2/3 rounded-full bg-[#F97316]" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 rounded-3xl border border-dashed border-[#E5E7EB] bg-white/70 p-6 text-left shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6B7280]">
                  Snapshot of This Service
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#4B5563] md:text-base">
                  Each deliverable below is designed to plug directly into your Social Media and Website Engine
                  framework, ensuring that strategy, execution, and measurement stay in sync.
                </p>
              </div>
            </motion.div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {bullets.map((item, index) => (
                <motion.article
                  key={`${item}-${index}`}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                  whileHover={{ y: -10, rotateX: 4, rotateY: index % 2 === 0 ? -4 : 4 }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.16)]"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-br from-white/20 via-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <motion.div
                    animate={{ y: [-4, 4, -4], x: [0, 4, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                    className="pointer-events-none absolute -right-6 -top-10 h-20 w-20 rounded-full bg-gradient-to-br from-[#7C3AED] via-[#22D3EE] to-[#F97316] blur-xl opacity-30"
                  />

                  <div className="relative z-10">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#7C3AED] via-[#22D3EE] to-[#F97316] text-white shadow-lg shadow-[#CBD5F5]">
                      <Check className="h-5 w-5" />
                    </span>
                    <p className="mt-4 text-sm leading-relaxed text-[#111827] md:text-base">{item}</p>
                  </div>

                  <div className="relative z-10 mt-4 flex items-center justify-between text-[11px] font-medium text-[#6B7280]">
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-50 px-3 py-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Execution Ready
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs">
                      <span className="h-[1px] w-8 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                      {index + 1 < 9 ? `0${index + 1}` : index + 1}
                    </span>
                  </div>
                </motion.article>
              ))}
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
              <h2 className="text-3xl font-semibold text-[#111111] md:text-4xl">Ready to Use This Service?</h2>
              <p className="mt-4 text-base leading-relaxed text-[#6B7280] md:text-lg">
                Let&apos;s align this service with your current goals and build a roadmap for visibility, leads, and
                sales.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <button type="button" onClick={openBookCallWhatsApp} className={primaryButtonClasses({ size: "lg" })}>
                  Book Strategy Call
                  <ArrowRight className="h-4 w-4" />
                </button>
                <Link to="/#services" className={primaryButtonClasses({ variant: "outline", size: "lg" })}>
                  View All Services
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
