import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTilt } from "@/hooks/useTilt";

interface GlassCardProps extends React.ComponentPropsWithoutRef<typeof motion.div> {
  glow?: boolean;
  interactive?: boolean;
  tilt?: boolean;
}

export const GlassCard = ({
  className,
  children,
  glow = false,
  interactive = true,
  tilt = false,
  ...props
}: GlassCardProps) => {
  const tiltRef = useTilt<HTMLDivElement>(8, !tilt);

  return (
    <motion.div
      ref={tiltRef}
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-6 shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-lg md:backdrop-blur-xl",
        glow && "ring-1 ring-white/30 shadow-[0_8px_40px_rgba(127,90,240,0.28)]",
        interactive && "transition-transform duration-300 hover:-translate-y-1",
        className,
      )}
      {...props}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-transparent" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

