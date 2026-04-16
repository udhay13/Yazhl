import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ArrowRight, Heart, MessageCircle, Play, Quote, Star } from "lucide-react";
import { Container } from "@/components/Container";

const metrics = [
  { label: "VIDEOS CREATED", value: 100, suffix: "+" },
  { label: "CAMPAIGNS MANAGED", value: 30, suffix: "+" },
  { label: "WEBSITES DELIVERED", value: 10, suffix: "+" },
  { label: "CLIENT RETENTION", value: 95, suffix: "%" },
];

const portfolioItems = [
  {
    title: "Advanced Eye Care Campaign",
    image: "/images/horiz5.jpeg",
    likes: "22K",
    comments: "640",
  },
  {
    title: "Dermatology Awareness Campaign",
    image: "/images/horiz4.jpeg",
    likes: "18K",
    comments: "510",
  },
  {
    title: "General Medicine Awareness Campaign",
    image: "/images/horiz2.jpeg",
    likes: "15K",
    comments: "390",
  },
  {
    title: "Women’s Health Awareness Campaign",
    image: "/images/horiz3.jpeg",
    likes: "20K",
    comments: "560",
  },
  {
    title: "SaaS Funnel Ad Creative",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
    likes: "13K",
    comments: "280",
  },
  {
    title: "Real Estate Promo Reel",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80",
    likes: "17K",
    comments: "470",
  },
];

const testimonials = [
  {
    quote:
      "YAZHL took us from inconsistent posting to a content machine that generated qualified leads every single week.",
    name: "Riya Menon",
    role: "Founder, Kora Beauty Co.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
  },
  {
    quote:
      "Their campaign architecture gave our sales team better conversations, better intent, and better close rates.",
    name: "Arun Prakash",
    role: "CMO, Atlas Living",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
  },
  {
    quote:
      "We now have a single team handling strategy, content, ads, and automation with measurable clarity every month.",
    name: "Sara Iqbal",
    role: "Director, Vanta Clinics",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
  },
];

interface CounterCardProps {
  label: string;
  value: number;
  suffix: string;
}

const CounterCard = ({ label, value, suffix }: CounterCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let frame = 0;
    const duration = 1200;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, value]);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45 }}
      className="rounded-2xl border border-[#D4E2DD] bg-white p-6 text-center shadow-sm"
    >
      <p className="text-4xl font-black tracking-tight text-[#0A4A44] md:text-5xl">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#4B5563]">{label}</p>
    </motion.article>
  );
};

export const WhyUs = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, []);

  const current = testimonials[active];

  return (
    <>
      <section id="results" className="relative overflow-hidden bg-[#F5F8F7] py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(#c8d9d1_1px,transparent_1px)] [background-size:22px_22px]" />

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45 }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0A4A44]">Results</p>
            <h2 className="mt-5 text-3xl font-black uppercase tracking-tight text-[#111111] md:text-5xl">
              Performance That Speaks
            </h2>
          </motion.div>

          <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <CounterCard key={metric.label} label={metric.label} value={metric.value} suffix={metric.suffix} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="#contact"
              className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-[#0A4A44] px-7 text-sm font-bold uppercase tracking-[0.08em] text-white"
            >
              <span className="absolute inset-0 scale-0 rounded-full bg-white/20 transition-transform duration-500 group-hover:scale-[2.2]" />
              <span className="relative z-10 inline-flex items-center gap-2">
                Scale My Results
                <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          </div>
        </Container>
      </section>

      <section className="bg-white py-24 md:py-32">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45 }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0A4A44]">Portfolio Preview</p>
            <h2 className="mt-5 text-3xl font-black uppercase leading-[1.08] tracking-tight text-[#111111] md:text-5xl">
              Creative That Performs In The Feed
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {portfolioItems.slice(0, 4).map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                whileHover={{ y: -8, rotateX: 4, rotateY: index % 2 === 0 ? -4 : 4 }}
                className="group relative overflow-hidden rounded-2xl border border-[#D8E4E0] shadow-sm"
                style={{ transformStyle: "preserve-3d" }}
              >
                <img src={item.image} alt={item.title} className="h-72 w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/10" />

                <div className="absolute left-4 right-4 top-4 flex items-center justify-between text-xs text-white">
                  <span className="rounded-full bg-black/45 px-2.5 py-1">Instagram Reel</span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-black/45 px-2.5 py-1">
                    <Play className="h-3.5 w-3.5 fill-white text-white" />
                    Preview
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-base font-semibold text-white">{item.title}</h3>
                  <div className="mt-2 flex items-center gap-4 text-xs text-white">
                    <span className="inline-flex items-center gap-1">
                      <Heart className="h-3.5 w-3.5" />
                      {item.likes}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MessageCircle className="h-3.5 w-3.5" />
                      {item.comments}
                    </span>
                  </div>
                  <div className="mt-3 h-1.5 rounded-full bg-white/20">
                    <span className="block h-full w-0 rounded-full bg-[#FACC15] transition-all duration-700 group-hover:w-full" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-full border border-[#0A4A44] px-7 text-sm font-bold uppercase tracking-[0.08em] text-[#0A4A44]"
            >
              See Full Portfolio
            </a>
          </div>
        </Container>
      </section>

      {/* CLIENT VOICE — temporarily hidden, re-enable when ready
      <section id="testimonials" className="bg-[#F5F8F7] py-24 md:py-32">
        <Container>
          <div className="mx-auto max-w-6xl rounded-3xl border border-[#D8E4E0] bg-white p-6 shadow-sm md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0A4A44]">Client Voice</p>

            <AnimatePresence mode="wait">
              <motion.div
                key={current.name}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.35 }}
                className="mt-6 grid items-center gap-8 md:grid-cols-[0.9fr_1.1fr]"
              >
                <div className="relative">
                  <div className="absolute -left-4 -top-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#FACC15] text-[#111111] shadow-lg">
                    <Quote className="h-6 w-6" />
                  </div>
                  <img src={current.image} alt={current.name} className="h-80 w-full rounded-2xl object-cover md:h-96" />
                </div>

                <div>
                  <div className="mb-4 flex items-center gap-1 text-[#F59E0B]">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-xl font-semibold leading-relaxed text-[#111111] md:text-2xl">&ldquo;{current.quote}&rdquo;</p>
                  <p className="mt-6 text-lg font-bold text-[#111111]">{current.name}</p>
                  <p className="text-sm font-medium text-[#4B5563]">{current.role}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {testimonials.map((person, index) => (
                  <button
                    key={person.name}
                    type="button"
                    onClick={() => setActive(index)}
                    className={`h-2.5 rounded-full transition-all ${
                      active === index ? "w-8 bg-[#0A4A44]" : "w-2.5 bg-[#C9D8D2]"
                    }`}
                    aria-label={`Show testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <a
                href="#contact"
                className="inline-flex h-11 items-center justify-center rounded-full bg-[#0A4A44] px-6 text-sm font-bold uppercase tracking-[0.08em] text-white"
              >
                Work With Us
              </a>
            </div>
          </div>
        </Container>
      </section>
      */}
    </>
  );
};
