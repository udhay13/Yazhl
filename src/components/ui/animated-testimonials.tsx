import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AnimatedTestimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

interface AnimatedTestimonialsProps {
  testimonials: AnimatedTestimonial[];
  autoplay?: boolean;
  className?: string;
}

export function AnimatedTestimonials({
  testimonials,
  autoplay = true,
  className,
}: AnimatedTestimonialsProps) {
  const [active, setActive] = useState(0);

  const next = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!autoplay || testimonials.length <= 1) return undefined;
    const interval = window.setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5500);
    return () => window.clearInterval(interval);
  }, [autoplay, testimonials.length]);

  if (!testimonials.length) return null;

  const item = testimonials[active];

  return (
    <div
      className={cn(
        "rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm md:p-8",
        className,
      )}
    >
      <div className="grid items-center gap-8 md:grid-cols-[340px_1fr] md:gap-10">
        <div className="relative h-[260px] overflow-hidden rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] md:h-[320px]">
          <AnimatePresence mode="wait">
            <motion.img
              key={item.src}
              src={item.src}
              alt={item.name}
              initial={{ opacity: 0, scale: 1.05, x: 18 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.98, x: -18 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="h-full w-full object-cover"
            />
          </AnimatePresence>
        </div>

        <div className="flex min-h-[260px] flex-col justify-between md:min-h-[320px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${item.name}-${active}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <p className="text-lg leading-relaxed text-[#6B7280] md:text-xl">
                &quot;{item.quote}&quot;
              </p>
              <div className="mt-6">
                <p className="text-lg font-semibold text-[#111111]">{item.name}</p>
                <p className="text-sm text-[#7C3AED]">{item.designation}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex items-center gap-3">
            <button
              type="button"
              onClick={previous}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#111111] transition-colors hover:border-[#7C3AED] hover:text-[#7C3AED]"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={next}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#111111] transition-colors hover:border-[#7C3AED] hover:text-[#7C3AED]"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <p className="ml-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#9CA3AF]">
              {active + 1} / {testimonials.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
