import { motion } from "framer-motion";

interface CaseStudyCardProps {
  label: string;
  metric: string;
  detail: string;
  index: number;
}

export const CaseStudyCard = ({ label, metric, detail, index }: CaseStudyCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: "easeInOut" }}
      whileHover={{ y: -4 }}
      className="rounded-xl border border-[#E5E7EB] bg-white p-6 shadow-sm transition-transform duration-300"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#9CA3AF]">{label}</p>
      <p className="mt-3 text-3xl font-bold text-[#7C3AED]">{metric}</p>
      <p className="mt-2 text-sm text-[#6B7280]">{detail}</p>
    </motion.article>
  );
};
