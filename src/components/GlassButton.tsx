import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useMagnetic } from "@/hooks/useMagnetic";
import {
  glassButtonStyles,
  type GlassButtonStyleOptions,
} from "./glassButtonStyles";

interface GlassButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    GlassButtonStyleOptions {
  magnetic?: boolean;
}

export const GlassButton = ({
  className,
  variant,
  size,
  glow,
  magnetic = true,
  ...props
}: GlassButtonProps) => {
  const magneticRef = useMagnetic<HTMLButtonElement>({
    disabled: !magnetic,
    strength: 12,
  });

  return (
    <motion.button
      ref={magneticRef}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.35 }}
      className={cn(glassButtonStyles({ variant, size, glow }), className)}
      {...props}
    />
  );
};


