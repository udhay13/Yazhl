import { motion } from "framer-motion";
import { ArrowRight, BarChart3, FileText, Globe, Settings, Users, Video } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "@/components/Container";

const services = [
  {
    title: "Content Strategy & SEO Content Marketing",
    copy:
      "Data-driven content strategy and SEO content marketing aligned with your audience, brand voice, and search intent to build authority, improve organic visibility, and drive conversions.",
    icon: FileText,
    gradient: "from-[#0A4A44] to-[#127369]",
    href: "/services/content-strategy-seo",
  },
  {
    title: "Performance Marketing (Google Ads & Meta Ads Services)",
    copy:
      "ROI-focused Google Ads and Meta Ads campaigns designed to increase conversions, lower acquisition costs, and scale revenue with full-funnel targeting and retargeting.",
    icon: BarChart3,
    gradient: "from-[#0E7490] to-[#0EA5A4]",
    href: "/services/performance-marketing",
  },
  {
    title: "CRM Management & Marketing Automation",
    copy:
      "Lead nurturing systems with CRM setup, workflows, email automation, and segmentation to streamline follow-ups, improve retention, and increase customer lifetime value.",
    icon: Settings,
    gradient: "from-[#1D4ED8] to-[#2563EB]",
    href: "/services/crm-automation",
  },
  {
    title: "Field Marketing & Brand Activation",
    copy:
      "Offline field marketing, brand activations, and event-based campaigns that strengthen local visibility and real-world engagement.",
    icon: Globe,
    gradient: "from-[#EA580C] to-[#F59E0B]",
    href: "/services/field-marketing-brand-activation",
  },
  {
    title: "Social Media Marketing & Growth Strategy",
    copy:
      "End-to-end social media marketing across Instagram, Facebook, LinkedIn, and more to grow your audience, improve engagement, and drive traffic to your website.",
    icon: Users,
    gradient: "from-[#7C3AED] to-[#A855F7]",
    href: "/services/social-media-marketing",
  },
  {
    title: "Website Development & Conversion-Focused Design",
    copy:
      "High-performing business websites, landing pages, and WordPress or custom builds with SEO-ready structure and conversion-focused UX/UI.",
    icon: Globe,
    gradient: "from-[#0F766E] to-[#14B8A6]",
    href: "/services/website-development",
  },
  {
    title: "Revenue Optimization & Conversion Rate Optimization (CRO)",
    copy:
      "Funnel analysis, conversion rate optimization, A/B testing, and revenue analytics to turn existing traffic into measurable revenue growth.",
    icon: BarChart3,
    gradient: "from-[#FB923C] to-[#F97316]",
    href: "/services/revenue-optimization-cro",
  },
  {
    title: "Video Production & Creative Content",
    copy:
      "High-impact brand films, corporate videos, Reels, and performance ad creatives that capture attention and drive engagement across social and paid channels.",
    icon: Video,
    gradient: "from-[#4C1D95] to-[#7C3AED]",
    href: "/services/video-production-creative-content",
  },
];

export const Features = () => {
  return (
    <section id="services" className="bg-[#F3F6F5] py-24 md:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0A4A44]">Our Services</p>
          <h2 className="mt-5 text-3xl font-black uppercase leading-[1.08] tracking-tight text-[#111111] md:text-5xl">
            Integrated Digital Marketing &amp; Growth Services
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#4B5563] md:text-lg">
            From content strategy and performance marketing to CRM, websites, and video, every service is designed to
            drive traffic, generate leads, and increase sales.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              whileHover={{ y: -8, rotateX: 2, rotateY: index % 2 === 0 ? -2 : 2 }}
              className="group flex h-full flex-col rounded-2xl border border-[#D8E4E0] bg-white p-6 shadow-sm"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className={`relative mb-6 h-36 overflow-hidden rounded-2xl bg-gradient-to-br ${service.gradient} p-4 text-white`}>
                <div className="absolute -right-4 -top-6 h-20 w-20 rounded-full bg-white/25 blur-2xl" />
                <div className="absolute -bottom-4 left-0 h-20 w-20 rounded-full bg-black/15 blur-2xl" />
                <div className="relative flex h-full items-end justify-between">
                  <service.icon className="h-10 w-10" />
                  <div className="grid gap-1">
                    <span className="h-2.5 w-10 rounded-full bg-white/80" />
                    <span className="h-2.5 w-14 rounded-full bg-white/65" />
                    <span className="h-2.5 w-8 rounded-full bg-white/45" />
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold leading-snug text-[#111111]">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#4B5563]">{service.copy}</p>

              <Link
                to={service.href}
                className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-[#0A4A44] transition-colors group-hover:text-[#0F766E]"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="mt-12 text-center"
        >
          <a
            href="#services"
            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-[#111111] px-8 text-sm font-bold uppercase tracking-[0.08em] text-white"
          >
            <span className="absolute inset-0 scale-0 rounded-full bg-white/20 transition-transform duration-500 group-hover:scale-[2.2]" />
            <span className="relative z-10 inline-flex items-center gap-2">
              Explore All Services
              <ArrowRight className="h-4 w-4" />
            </span>
          </a>
        </motion.div>
      </Container>
    </section>
  );
};
