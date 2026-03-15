import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, BarChart3, Check, FileText, Globe, LineChart, Settings, TrendingUp, Users, Video, Zap } from "lucide-react";
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

/* ─── Service-specific animated SVG illustrations ─────────────────────── */

const SocialMediaIllustration = () => (
  <div className="relative flex h-full w-full items-center justify-center">
    {/* Phone frame */}
    <div className="relative h-80 w-44 rounded-[2rem] border-4 border-white/20 bg-white/5 shadow-2xl backdrop-blur-sm">
      <div className="absolute inset-2 overflow-hidden rounded-[1.6rem] bg-gradient-to-b from-[#1e1e2e] to-[#2d1b4e]">
        {/* Status bar */}
        <div className="flex items-center justify-between px-4 pt-2 text-[8px] text-white/50">
          <span>9:41</span><span>●●●</span>
        </div>
        {/* Feed posts */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.3, duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
            className="mx-2 mt-2 rounded-xl bg-white/10 p-2"
          >
            <div className="h-12 rounded-lg bg-gradient-to-r from-pink-500/40 to-purple-500/40" />
            <div className="mt-1.5 flex items-center gap-2">
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 0.6, delay: i * 0.4 + 0.8, repeat: Infinity, repeatDelay: 2 }}
                className="text-[10px] text-pink-400"
              >❤ {["22K", "15K", "31K"][i]}</motion.span>
              <span className="text-[10px] text-white/40">💬 {["640", "390", "820"][i]}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    {/* Floating badges */}
    <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }}
      className="absolute -right-4 top-8 rounded-2xl border border-pink-400/30 bg-white/10 px-3 py-2 text-xs font-bold text-pink-300 backdrop-blur-md shadow-lg">
      +1.2K Likes
    </motion.div>
    <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 3.5, repeat: Infinity }}
      className="absolute -left-6 bottom-12 rounded-2xl border border-purple-400/30 bg-white/10 px-3 py-2 text-xs font-bold text-purple-300 backdrop-blur-md shadow-lg">
      420K Views
    </motion.div>
  </div>
);

const VideoIllustration = () => (
  <div className="relative flex h-full w-full items-center justify-center">
    {/* Clapperboard */}
    <div className="relative">
      <motion.div
        animate={{ rotateX: [0, -25, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
        style={{ transformOrigin: "top center" }}
        className="mx-auto h-16 w-56 rounded-t-xl bg-gradient-to-r from-[#EC4899] to-[#F97316] shadow-xl"
      >
        <div className="flex h-full items-center gap-2 px-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className={`h-full w-5 ${i % 2 === 0 ? "bg-black/40" : "bg-white/20"}`} />
          ))}
        </div>
      </motion.div>
      <div className="h-44 w-56 rounded-b-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm shadow-xl">
        {/* Waveform */}
        <div className="flex h-16 items-end justify-center gap-1 pt-2">
          {[20, 35, 55, 40, 65, 45, 30, 60, 50, 35, 25, 45].map((h, i) => (
            <motion.div
              key={i}
              animate={{ height: [`${h}%`, `${h * 1.4}%`, `${h}%`] }}
              transition={{ duration: 0.8, delay: i * 0.07, repeat: Infinity, ease: "easeInOut" }}
              className="w-2 rounded-full bg-gradient-to-t from-[#F97316] to-[#EC4899]"
            />
          ))}
        </div>
        <div className="mt-4 text-center text-xs font-semibold text-white/60">Rendering…</div>
        <motion.div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <motion.div
            animate={{ width: ["0%", "100%", "0%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="h-full rounded-full bg-gradient-to-r from-[#EC4899] to-[#F97316]"
          />
        </motion.div>
      </div>
    </div>
    <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 2.5, repeat: Infinity }}
      className="absolute -right-4 top-6 rounded-2xl border border-orange-400/30 bg-white/10 px-3 py-2 text-xs font-bold text-orange-300 backdrop-blur-md shadow-lg">
      4K Export Ready
    </motion.div>
  </div>
);

const PerformanceIllustration = () => (
  <div className="relative flex h-full w-full items-center justify-center">
    <div className="w-64 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm shadow-xl">
      <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/50">Campaign ROAS</p>
      <div className="flex items-end justify-between gap-2" style={{ height: 120 }}>
        {[30, 50, 40, 70, 55, 85, 100].map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{ height: `${h}%` }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut", repeat: Infinity, repeatDelay: 3, repeatType: "reverse" }}
            className="flex-1 rounded-t-lg bg-gradient-to-t from-[#F97316] to-[#FACC15]"
          />
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between text-[10px] text-white/40">
        {["M", "T", "W", "T", "F", "S", "S"].map((d) => <span key={d}>{d}</span>)}
      </div>
      <div className="mt-4 flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2">
        <TrendingUp className="h-4 w-4 text-green-400" />
        <span className="text-sm font-bold text-green-400">+240% ROAS this week</span>
      </div>
    </div>
    <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }}
      className="absolute -right-2 top-4 rounded-2xl border border-yellow-400/30 bg-white/10 px-3 py-2 text-xs font-bold text-yellow-300 backdrop-blur-md shadow-lg">
      CPL ↓ 38%
    </motion.div>
  </div>
);

const ContentSEOIllustration = () => (
  <div className="relative flex h-full w-full flex-col items-center justify-center gap-4">
    {/* Search bar */}
    <motion.div
      initial={{ width: "60%" }}
      animate={{ width: ["60%", "90%", "60%"] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-sm shadow-xl"
    >
      <span className="text-white/50">🔍</span>
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="text-xs text-white/70"
      >
        best marketing agency 2025…
      </motion.span>
    </motion.div>
    {/* Result cards */}
    {["#1 yazhl.com", "#2 competitor.io", "#3 agency.co"].map((label, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: i * 0.2 + 0.5, duration: 0.4, repeat: Infinity, repeatDelay: 4 }}
        className={`flex w-full max-w-xs items-center gap-3 rounded-xl border px-4 py-2.5 backdrop-blur-sm shadow
          ${i === 0 ? "border-green-400/40 bg-green-500/10" : "border-white/10 bg-white/5"}`}
      >
        <span className={`text-xs font-bold ${i === 0 ? "text-green-400" : "text-white/30"}`}>{i + 1}</span>
        <span className={`text-xs font-medium ${i === 0 ? "text-white" : "text-white/40"}`}>{label}</span>
        {i === 0 && <Zap className="ml-auto h-3.5 w-3.5 text-green-400" />}
      </motion.div>
    ))}
    <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 2.8, repeat: Infinity }}
      className="absolute -right-2 top-2 rounded-2xl border border-sky-400/30 bg-white/10 px-3 py-2 text-xs font-bold text-sky-300 backdrop-blur-md shadow-lg">
      DA 72 ↑
    </motion.div>
  </div>
);

const CRMIllustration = () => (
  <div className="relative flex h-full w-full items-center justify-center">
    <div className="relative w-64">
      {/* Nodes */}
      {[
        { label: "Lead In", color: "from-violet-500 to-purple-600", pos: "top-0 left-1/2 -translate-x-1/2" },
        { label: "Nurture", color: "from-blue-500 to-cyan-500", pos: "top-20 left-4" },
        { label: "Score", color: "from-pink-500 to-rose-500", pos: "top-20 right-4" },
        { label: "Convert", color: "from-green-500 to-emerald-500", pos: "top-40 left-1/2 -translate-x-1/2" },
      ].map((node, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: i * 0.3, duration: 0.4, repeat: Infinity, repeatDelay: 3.5 }}
          className={`absolute ${node.pos} flex h-12 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${node.color} text-[10px] font-bold text-white shadow-lg`}
        >
          {node.label}
        </motion.div>
      ))}
      {/* Connector lines */}
      <svg className="absolute inset-0 h-64 w-64" viewBox="0 0 256 200">
        {[
          "M128,48 L64,80", "M128,48 L192,80",
          "M64,80 L128,132", "M192,80 L128,132",
        ].map((d, i) => (
          <motion.path
            key={i}
            d={d}
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="2"
            strokeDasharray="6 4"
            fill="none"
            animate={{ strokeDashoffset: [0, -20] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: i * 0.2 }}
          />
        ))}
      </svg>
      <div className="h-56" />
    </div>
    <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3.2, repeat: Infinity }}
      className="absolute -right-2 top-0 rounded-2xl border border-violet-400/30 bg-white/10 px-3 py-2 text-xs font-bold text-violet-300 backdrop-blur-md shadow-lg">
      Auto-follow up ✓
    </motion.div>
  </div>
);

const FieldMarketingIllustration = () => (
  <div className="relative flex h-full w-full items-center justify-center">
    <div className="relative h-56 w-56 rounded-full border border-white/10 bg-white/5">
      {/* Pulsing rings */}
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2.5, delay: i * 0.6, repeat: Infinity, ease: "easeOut" }}
          className="absolute inset-0 rounded-full border border-cyan-400/40"
        />
      ))}
      {/* Center pin */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#0EA5E9] to-[#22C55E] shadow-2xl shadow-cyan-500/30 text-2xl">
          📍
        </div>
      </div>
      {/* Dots around map */}
      {[
        { top: "15%", left: "20%", delay: 0 },
        { top: "20%", right: "15%", delay: 0.5 },
        { bottom: "20%", left: "25%", delay: 1 },
        { bottom: "15%", right: "20%", delay: 1.5 },
      ].map((style, i) => (
        <motion.div
          key={i}
          animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, delay: style.delay, repeat: Infinity }}
          style={{ position: "absolute", ...style }}
          className="h-4 w-4 rounded-full bg-cyan-400/70 shadow"
        />
      ))}
    </div>
    <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 3, repeat: Infinity }}
      className="absolute -right-4 top-8 rounded-2xl border border-cyan-400/30 bg-white/10 px-3 py-2 text-xs font-bold text-cyan-300 backdrop-blur-md shadow-lg">
      12 Events Live
    </motion.div>
  </div>
);

const RevenueIllustration = () => (
  <div className="relative flex h-full w-full items-center justify-center">
    <div className="w-52 space-y-2">
      <p className="mb-3 text-center text-xs font-semibold uppercase tracking-widest text-white/50">Conversion Funnel</p>
      {[
        { label: "Visitors", val: "10,000", w: "100%", color: "from-violet-500 to-purple-600" },
        { label: "Leads", val: "3,200", w: "72%", color: "from-blue-500 to-cyan-500" },
        { label: "Qualified", val: "1,100", w: "48%", color: "from-pink-500 to-rose-400" },
        { label: "Customers", val: "420", w: "28%", color: "from-green-500 to-emerald-400" },
      ].map((row, i) => (
        <div key={i} className="flex items-center gap-3">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: row.w }}
            transition={{ duration: 0.8, delay: i * 0.2, repeat: Infinity, repeatDelay: 3, repeatType: "reverse" }}
            className={`h-7 rounded-lg bg-gradient-to-r ${row.color} shadow-md flex items-center px-2.5`}
          >
            <span className="text-[10px] font-bold text-white whitespace-nowrap">{row.label}</span>
          </motion.div>
          <span className="text-[10px] text-white/50 whitespace-nowrap">{row.val}</span>
        </div>
      ))}
    </div>
    <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }}
      className="absolute -right-2 top-4 rounded-2xl border border-green-400/30 bg-white/10 px-3 py-2 text-xs font-bold text-green-300 backdrop-blur-md shadow-lg">
      CVR +34%
    </motion.div>
  </div>
);

const WebsiteIllustration = () => (
  <div className="relative flex h-full w-full items-center justify-center">
    <div className="w-72 rounded-2xl border border-white/10 bg-white/5 shadow-2xl overflow-hidden backdrop-blur-sm">
      {/* Browser bar */}
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
        </div>
        <div className="flex-1 rounded-md bg-white/10 px-2 py-1 text-[9px] text-white/40">yazhl.com</div>
      </div>
      {/* Code lines */}
      <div className="space-y-2 p-4 font-mono">
        {[
          { width: "70%", color: "text-violet-400", text: "<Hero " },
          { width: "55%", color: "text-cyan-400", text: "  className=" },
          { width: "85%", color: "text-green-400", text: '  "min-h-screen"' },
          { width: "45%", color: "text-pink-400", text: "/>" },
          { width: "60%", color: "text-yellow-400", text: "<Section>" },
          { width: "75%", color: "text-violet-400", text: "  <Features />" },
        ].map((line, i) => (
          <motion.div
            key={i}
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: line.width, opacity: 1 }}
            transition={{ duration: 0.4, delay: i * 0.15, repeat: Infinity, repeatDelay: 4, repeatType: "reverse" }}
            className={`h-3 rounded overflow-hidden ${line.color} bg-current opacity-30 text-[0px]`}
          />
        ))}
      </div>
      <motion.div
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="mx-4 mb-4 h-5 w-0.5 bg-white/60"
      />
    </div>
    <motion.div animate={{ y: [0, -7, 0] }} transition={{ duration: 2.6, repeat: Infinity }}
      className="absolute -right-4 top-4 rounded-2xl border border-sky-400/30 bg-white/10 px-3 py-2 text-xs font-bold text-sky-300 backdrop-blur-md shadow-lg">
      99 Lighthouse ⚡
    </motion.div>
  </div>
);

const getIllustrationConfig = (name: string) => {
  const n = name.toLowerCase();
  if (n.includes("social media")) return { component: SocialMediaIllustration, accent: "from-[#EC4899] via-[#8B5CF6] to-[#1A0A2E]", badge: "1M+ Impressions", chip: "Social Media" };
  if (n.includes("video")) return { component: VideoIllustration, accent: "from-[#F97316] via-[#EC4899] to-[#1A0A2E]", badge: "100+ Videos", chip: "Video" };
  if (n.includes("performance")) return { component: PerformanceIllustration, accent: "from-[#F97316] via-[#FACC15] to-[#1A0A2E]", badge: "240% ROAS", chip: "Paid Ads" };
  if (n.includes("content")) return { component: ContentSEOIllustration, accent: "from-[#0EA5E9] via-[#22C55E] to-[#0F0F1A]", badge: "Top 3 Rankings", chip: "SEO" };
  if (n.includes("crm")) return { component: CRMIllustration, accent: "from-[#7C3AED] via-[#A855F7] to-[#1A0A2E]", badge: "Automated 24/7", chip: "CRM" };
  if (n.includes("field")) return { component: FieldMarketingIllustration, accent: "from-[#0EA5E9] via-[#22C55E] to-[#0F0F1A]", badge: "12 Events Managed", chip: "Field" };
  if (n.includes("revenue")) return { component: RevenueIllustration, accent: "from-[#22C55E] via-[#16A34A] to-[#0F0F1A]", badge: "+34% CVR", chip: "Revenue" };
  if (n.includes("website")) return { component: WebsiteIllustration, accent: "from-[#0EA5E9] via-[#7C3AED] to-[#0F0F1A]", badge: "99 Lighthouse", chip: "Web Dev" };
  return { component: PerformanceIllustration, accent: "from-[#7C3AED] via-[#22C55E] to-[#0F0F1A]", badge: "Growth Driven", chip: "Growth" };
};

const getServiceIllustration = (name: string) => {
  const n = name.toLowerCase();
  if (n.includes("content")) return { icon: FileText, label: "Content & SEO", accent: "from-[#0EA5E9] to-[#22C55E]" };
  if (n.includes("performance")) return { icon: BarChart3, label: "Performance Marketing", accent: "from-[#F97316] to-[#FACC15]" };
  if (n.includes("crm")) return { icon: Settings, label: "CRM & Automation", accent: "from-[#7C3AED] to-[#A855F7]" };
  if (n.includes("field")) return { icon: Globe, label: "Field Marketing", accent: "from-[#0EA5E9] to-[#22C55E]" };
  if (n.includes("social media")) return { icon: Users, label: "Social Media Growth", accent: "from-[#EC4899] to-[#8B5CF6]" };
  if (n.includes("website")) return { icon: Globe, label: "Website & UX", accent: "from-[#0EA5E9] to-[#22C55E]" };
  if (n.includes("revenue")) return { icon: LineChart, label: "Revenue Optimization", accent: "from-[#22C55E] to-[#16A34A]" };
  if (n.includes("video")) return { icon: Video, label: "Video & Creative", accent: "from-[#EC4899] to-[#F97316]" };
  return { icon: LineChart, label: "Growth Execution", accent: "from-[#7C3AED] to-[#22C55E]" };
};

/* ─── Main component ──────────────────────────────────────────────────── */

export const ServicePageLayout = ({ name, tagline, description, bullets }: ServicePageLayoutProps) => {
  const navigate = useNavigate();
  const { component: IllustrationComponent, accent, chip } = getIllustrationConfig(name);
  const illustration = getServiceIllustration(name);

  return (
    <PageTransition className="min-h-screen bg-[#0F0F1A]">
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F0F1A] via-[#1A0A2E] to-[#0A0A18] pt-24 pb-24">
        {/* Background glow blobs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-violet-600/15 blur-[100px]" />
          <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-pink-600/10 blur-[100px]" />
          <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-600/10 blur-[80px]" />
          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:48px_48px]" />
        </div>

        <Container className="relative z-10">
          <div className="grid min-h-[560px] items-center gap-12 lg:grid-cols-2">
            {/* Left — copy */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col"
            >
              {/* Back link */}
              <Link
                to="/#services"
                className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/60 transition-all hover:border-white/30 hover:text-white backdrop-blur-sm"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Services
              </Link>

              {/* Chip */}
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className={`mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r ${accent} px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white shadow-lg`}
              >
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                {chip}
              </motion.span>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.6 }}
                className="text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl md:text-[3.5rem]"
              >
                {name}
              </motion.h1>

              {/* Tagline */}
              <p
                className="mt-4 text-lg font-semibold md:text-xl"
                style={{ color: '#E9D5FF' }}
              >
                {tagline}
              </p>

              {/* Description */}
              <p
                className="mt-4 max-w-lg text-base leading-relaxed"
                style={{ color: '#D1D5DB' }}
              >
                {description}
              </p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <button
                  type="button"
                  onClick={openBookCallWhatsApp}
                  className="group inline-flex h-12 items-center gap-2 rounded-full bg-white px-7 text-sm font-bold text-[#0F0F1A] shadow-xl transition-all hover:bg-violet-400 hover:text-white"
                >
                  Book Strategy Call
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  type="button"
                  onClick={() => navigate("/#contact")}
                  className="inline-flex h-12 items-center gap-2 rounded-full border border-white/20 px-7 text-sm font-bold text-white/80 backdrop-blur-sm transition-all hover:border-white/40 hover:text-white"
                >
                  Talk to Our Team
                </button>
              </motion.div>
            </motion.div>

            {/* Right — illustration */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex h-[360px] items-center justify-center lg:h-[480px]"
            >
              {/* Glow behind illustration */}
              <div className={`absolute h-64 w-64 rounded-full bg-gradient-to-br ${accent} opacity-20 blur-3xl`} />
              <IllustrationComponent />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── What We Deliver ───────────────────────────────────────────── */}
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
              Every point below is a concrete, execution-ready outcome tied directly to visibility, leads, and revenue.
            </p>
          </motion.div>

          {/* Illustration strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="mx-auto mt-10 flex max-w-5xl flex-col gap-4 md:flex-row"
          >
            <div className="relative flex-1 overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
              <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${illustration.accent} opacity-10`} />
              <div className="flex items-center gap-4">
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${illustration.accent} text-white shadow-lg`}>
                  <illustration.icon className="h-7 w-7" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6B7280]">Service Illustration</p>
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
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6B7280]">Snapshot of This Service</p>
              <p className="mt-3 text-sm leading-relaxed text-[#4B5563] md:text-base">
                Each deliverable below is designed to plug directly into your Social Media and Website Engine
                framework, ensuring that strategy, execution, and measurement stay in sync.
              </p>
            </div>
          </motion.div>

          {/* Feature cards */}
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
                  <span
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-lg"
                    style={{ background: "linear-gradient(135deg, #7C3AED, #22D3EE, #F97316)", boxShadow: "0 4px 14px rgba(203,213,245,0.8)" }}
                  >
                    <Check className="h-5 w-5" strokeWidth={3} />
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

      {/* ── CTA Banner ────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F0F1A] via-[#1A0A2E] to-[#0F0F1A] py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-violet-600/20 blur-[80px]" />
          <div className="absolute right-1/4 bottom-0 h-64 w-64 rounded-full bg-pink-600/15 blur-[80px]" />
        </div>
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-black text-white md:text-4xl">Ready to Use This Service?</h2>
            <p className="mt-4 text-base leading-relaxed text-white/55">
              Let's align this service with your goals and build a roadmap for visibility, leads, and sales.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <button
                type="button"
                onClick={openBookCallWhatsApp}
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-8 text-sm font-bold text-[#0F0F1A] shadow-xl transition-all hover:bg-violet-400 hover:text-white"
              >
                Book Strategy Call
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <Link
                to="/#services"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-8 text-sm font-bold text-white/80 backdrop-blur-sm transition-all hover:border-white/40 hover:text-white"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>

      <Footer />
    </PageTransition>
  );
};
