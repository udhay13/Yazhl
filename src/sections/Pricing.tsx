import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Container } from "@/components/Container";

type PackageCard = {
  title: string;
  subtitle: string;
  quote: string;
  features: string[];
  href: string;
  cta: string;
  featured?: boolean;
  custom?: boolean;
};

const packages: PackageCard[] = [
  {
    title: "The Starter",
    subtitle: "Foundation",
    quote: "Best for new businesses needing a solid digital footprint.",
    features: [
      "Professional 5-Page Website",
      "GMB Setup & Optimization",
      "Basic SEO Setup",
    ],
    href: "#contact",
    cta: "Choose Starter",
  },
  {
    title: "The Growth",
    subtitle: "Presence",
    quote: "Best for businesses ready to actively generate leads.",
    features: [
      'Everything in "Starter"',
      "Personal Branding Videos (4/mo)",
      "Meta/Google Ad Management",
      "Sales Pipeline Management",
    ],
    href: "#contact",
    cta: "Choose Growth",
    featured: true,
  },
  {
    title: "Yazhl Elite",
    subtitle: "Scale",
    quote: "Best for companies wanting full automation and scale.",
    features: [
      'Everything in "Growth"',
      "Website Design & Development",
      "12+ Professional Video Edits",
      "Full CRM Setup & Automation",
      "WhatsApp API & Chatbot",
    ],
    href: "#contact",
    cta: "Choose Elite",
  },
  {
    title: "Customizable",
    subtitle: "Build Your Own",
    quote: "Best for brands needing a flexible package mix.",
    features: [
      "Pick only the services you need",
      "Flexible monthly scope",
      "Custom deliverables & timelines",
      "Scale up or down anytime",
    ],
    href: "#contact",
    cta: "Contact Us",
    custom: true,
  },
];

export const Pricing = () => {
  return (
    <section id="packages" className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(#dbe2ea_1px,transparent_1px)] [background-size:18px_18px]" />
        <div className="absolute left-1/2 top-[-12rem] h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-[#EDE9FE] blur-3xl" />
        <div className="absolute -left-20 bottom-8 h-72 w-72 rounded-full bg-[#DBEAFE]/60 blur-3xl" />
        <div className="absolute -right-16 top-12 h-72 w-72 rounded-full bg-[#E0E7FF]/70 blur-3xl" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-black leading-[1.08] tracking-tight text-[#0F172A] md:text-5xl">
            Choose Your Rhythm
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
            Tailored solutions for every stage of growth.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-7xl gap-6 lg:grid-cols-4">
          {packages.map((pkg, index) => (
            <motion.article
              key={pkg.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className={`relative flex h-full min-h-[30rem] flex-col rounded-3xl border p-7 ${
                pkg.featured
                  ? "border-[#8B5CF6]/45 bg-white shadow-[0_20px_50px_rgba(124,58,237,0.18)]"
                  : pkg.custom
                  ? "border-[#93C5FD]/55 bg-[#F8FBFF] shadow-[0_16px_40px_rgba(59,130,246,0.12)]"
                  : "border-[#D5DEE9] bg-white shadow-[0_14px_34px_rgba(15,23,42,0.08)]"
              }`}
            >
              {pkg.featured ? (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-[#A855F7] to-[#6366F1] px-3 py-1 text-xs font-semibold text-white">
                    <Sparkles className="h-3 w-3" />
                    Most Popular
                  </div>
                </div>
              ) : null}

              <h3 className="mt-2 text-3xl font-extrabold tracking-tight text-[#0F172A]">{pkg.title}</h3>
              <p className="mt-1 text-xl font-medium text-[#6366F1]">({pkg.subtitle})</p>

              <div className="my-6 h-px bg-[#E5E7EB]" />

              <p className="text-sm italic leading-relaxed text-[#475569]">&quot;{pkg.quote}&quot;</p>

              <ul className="mt-6 space-y-3">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-[#334155]">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#7C3AED]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                <a
                  href={pkg.href}
                  className={`inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl text-sm font-semibold transition-all ${
                    pkg.featured
                      ? "bg-[#8B5CF6] text-white hover:bg-[#7C3AED]"
                      : pkg.custom
                      ? "border border-[#93C5FD] bg-[#EFF6FF] text-[#1E40AF] hover:bg-[#DBEAFE]"
                      : "border border-[#CBD5E1] bg-white text-[#0F172A] hover:bg-[#F8FAFC]"
                  }`}
                >
                  {pkg.cta}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
};
