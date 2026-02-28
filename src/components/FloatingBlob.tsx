import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useParallax } from "@/hooks/useParallax";

interface FloatingBlobProps {
  className?: string;
  duration?: number;
  parallaxDistance?: number;
}

export const FloatingBlob = ({
  className,
  duration = 8,
  parallaxDistance = 70,
}: FloatingBlobProps) => {
  const blobRef = useParallax<HTMLDivElement>(parallaxDistance);

  return (
    <motion.div
      ref={blobRef}
      animate={{
        x: [0, 12, -6, 0],
        y: [0, -10, 8, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={cn("pointer-events-none absolute rounded-full blur-3xl", className)}
    />
  );
};



