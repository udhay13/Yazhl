import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type MinimalBackgroundProps = {
  className?: string;
};

export function MinimalBackground({ className }: MinimalBackgroundProps) {
  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,#e0e7ff_0%,transparent_44%),radial-gradient(circle_at_85%_82%,#dbeafe_0%,transparent_46%)]" />
      <div className="absolute inset-0 opacity-45 [background-image:radial-gradient(#dbe2ea_1px,transparent_1px)] [background-size:18px_18px]" />

      <motion.div
        animate={{ x: [-18, 18, -18], y: [0, 14, 0], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-24 top-4 h-72 w-72 rounded-full bg-[#e0e7ff] blur-3xl"
      />
      <motion.div
        animate={{ x: [16, -20, 16], y: [0, -12, 0], opacity: [0.3, 0.52, 0.3] }}
        transition={{ duration: 12.5, repeat: Infinity, ease: "easeInOut", delay: 0.25 }}
        className="absolute -right-24 bottom-2 h-80 w-80 rounded-full bg-[#dbeafe] blur-3xl"
      />

      <motion.div
        animate={{ opacity: [0.08, 0.24, 0.08] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-x-0 top-[32%] h-px bg-gradient-to-r from-transparent via-[#cbd5e1] to-transparent"
      />
      <motion.div
        animate={{ opacity: [0.08, 0.2, 0.08] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        className="absolute inset-x-0 bottom-[26%] h-px bg-gradient-to-r from-transparent via-[#cbd5e1] to-transparent"
      />
    </div>
  );
}
