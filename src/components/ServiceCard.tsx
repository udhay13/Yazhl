import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export const ServiceCard = ({ icon: Icon, title, description, index }: ServiceCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: "easeInOut" }}
      whileHover={{ y: -4 }}
      className="h-full rounded-xl border border-[#E5E7EB] bg-white p-6 shadow-sm transition-transform duration-300"
    >
      <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#E5E7EB] text-[#7C3AED]">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-xl font-semibold text-[#111111]">{title}</h3>
      <p className="mt-3 text-base leading-relaxed text-[#6B7280]">{description}</p>
    </motion.article>
  );
};
