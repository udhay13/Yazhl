import { motion } from "framer-motion";
import { pageTransition } from "@/animations/variants";

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

export const PageTransition = ({ children, className }: PageTransitionProps) => {
  return (
    <motion.div
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      exit={pageTransition.exit}
      className={className}
    >
      {children}
    </motion.div>
  );
};



