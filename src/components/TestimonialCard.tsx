import { motion } from "framer-motion";
import { CheckCircle2, Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  image: string;
  index: number;
}

export const TestimonialCard = ({ quote, author, role, image, index }: TestimonialCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: "easeInOut" }}
      whileHover={{ y: -4 }}
      className="rounded-xl border border-[#E5E7EB] bg-white p-6 shadow-sm transition-transform duration-300 md:p-8"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-3xl">
          <div className="mb-3 flex items-center gap-1.5">
            {[...Array(5)].map((_, star) => (
              <Star key={star} className="h-4 w-4 fill-[#7C3AED] text-[#7C3AED]" />
            ))}
          </div>
          <p className="text-base leading-relaxed text-[#6B7280] md:text-lg">"{quote}"</p>
        </div>

        <div className="flex items-center gap-4 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-4">
          <img src={image} alt={author} className="h-12 w-12 rounded-full object-cover" />
          <div>
            <p className="font-semibold text-[#111111]">{author}</p>
            <p className="text-sm text-[#6B7280]">{role}</p>
            <p className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-[#7C3AED]">
              <CheckCircle2 className="h-3.5 w-3.5" />
              Verified Result
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  );
};
