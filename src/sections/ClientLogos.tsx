import { motion } from "framer-motion";
import { ArrowUpRight, Heart, MessageCircle, Play } from "lucide-react";
import { Container } from "@/components/Container";

const reelCards = [
  {
    title: "@brandlaunch",
    views: "420K",
    likes: "21K",
    comments: "1.8K",
    image:
      "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "@marketmove",
    views: "310K",
    likes: "15K",
    comments: "1.1K",
    image:
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "@growthlabs",
    views: "270K",
    likes: "12K",
    comments: "920",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  },
];

export const ClientLogos = () => {
  return (
    <section
      id="who-we-are"
      className="relative overflow-visible bg-gradient-to-b from-white to-[#F9FAFB] pb-20 pt-28 text-[#111827] md:pb-28 md:pt-36"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-[#7C3AED]/10 blur-3xl" />
        <div className="absolute -right-20 bottom-4 h-72 w-72 rounded-full bg-[#22C55E]/10 blur-3xl" />
        <div className="absolute left-1/2 top-24 h-80 w-80 -translate-x-1/2 rounded-full bg-[#FACC15]/10 blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            {/* 3-column portrait card grid */}
            <div className="grid grid-cols-3 gap-3 lg:gap-4">
              {reelCards.map((card, index) => (
                <motion.article
                  key={card.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="relative overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-[0_12px_32px_rgba(15,23,42,0.14)]"
                  style={{ aspectRatio: "9/14" }}
                >
                  {/* Full-bleed image */}
                  <img
                    src={card.image}
                    alt={card.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Top badge */}
                  <div className="absolute left-2.5 right-2.5 top-2.5 flex items-center justify-between">
                    <span className="rounded-full bg-black/50 px-2 py-0.5 text-[10px] font-semibold text-white/90 backdrop-blur-sm">
                      {card.title}
                    </span>
                    <span className="inline-flex items-center gap-0.5 rounded-full bg-black/50 px-2 py-0.5 text-[10px] font-bold text-white backdrop-blur-sm">
                      <Play className="h-2.5 w-2.5 fill-white" />
                      Reel
                    </span>
                  </div>

                  {/* Bottom stats */}
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-sm font-bold text-white">{card.views}</p>
                    <p className="text-[10px] text-white/70">views</p>
                    <div className="mt-1.5 flex items-center gap-2.5 text-[10px] text-white/80">
                      <span className="inline-flex items-center gap-0.5">
                        <Heart className="h-3 w-3" />
                        {card.likes}
                      </span>
                      <span className="inline-flex items-center gap-0.5">
                        <MessageCircle className="h-3 w-3" />
                        {card.comments}
                      </span>
                    </div>
                    <span className="mt-2 inline-block rounded-full bg-[#FACC15] px-2 py-0.5 text-[9px] font-bold text-[#111]">
                      Viral
                    </span>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Floating engagement bubbles */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 -top-4 z-20 hidden items-center gap-1.5 rounded-full border border-[#E5E7EB] bg-white/95 px-3 py-1.5 text-xs font-semibold text-[#F59E0B] shadow-md backdrop-blur lg:inline-flex"
            >
              <Heart className="h-3.5 w-3.5" />
              1.2K new likes
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              className="absolute -right-4 bottom-8 z-20 hidden items-center gap-1.5 rounded-full border border-[#E5E7EB] bg-white/95 px-3 py-1.5 text-xs font-semibold text-[#111827] shadow-md backdrop-blur lg:inline-flex"
            >
              <MessageCircle className="h-3.5 w-3.5 text-[#7C3AED]" />
              480 comments
            </motion.div>
          </div>


          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex max-w-xl flex-col items-center text-center md:items-start md:text-left"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6B7280]">Social Proof Impact</p>
            <h2 className="mt-5 text-4xl font-bold uppercase leading-[1.05] tracking-tight text-balance text-[#111827] md:text-6xl">
              VIDEOS THAT BUILD BRANDS
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[#4B5563] md:text-lg">
              Unlock your brand&apos;s potential with viral social media strategies that build authority,
              engagement, and measurable growth.
            </p>

            <ul className="mt-7 flex flex-col items-center space-y-3 md:items-start">
              <li className="inline-flex items-center gap-3 rounded-full border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-semibold text-[#111827] shadow-sm">
                <span className="h-2.5 w-2.5 rounded-full bg-[#7C3AED]" />
                Generated over <span className="text-[#7C3AED]">1M+ views</span>
              </li>
              <li className="inline-flex items-center gap-3 rounded-full border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-semibold text-[#111827] shadow-sm">
                <span className="h-2.5 w-2.5 rounded-full bg-[#7C3AED]" />
                Impacted <span className="text-[#7C3AED]">50k+ followers</span>
              </li>
            </ul>

            <div className="mt-8 flex items-center justify-center gap-4 md:justify-start">
              <a
                href="#contact"
                className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-[#111827] px-7 text-sm font-bold uppercase tracking-[0.08em] text-white"
              >
                <span className="absolute inset-0 scale-0 rounded-full bg-white/20 transition-transform duration-500 group-hover:scale-[2.2]" />
                <span className="relative z-10">Go Viral Now</span>
              </a>
              <a
                href="#contact"
                aria-label="Open strategy call"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#111827] shadow-[0_10px_25px_rgba(15,23,42,0.12)] ring-1 ring-[#E5E7EB] transition-colors hover:bg-[#111827] hover:text-white"
              >
                <ArrowUpRight className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
