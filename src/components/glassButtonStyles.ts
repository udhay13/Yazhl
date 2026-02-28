import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const glassButtonStyles = cva(
  "relative inline-flex items-center justify-center gap-2 rounded-2xl font-semibold text-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        primary:
          "border border-white/30 bg-gradient-to-r from-[#7F5AF0] via-[#9F70FD] to-[#FF6AC2] px-6 text-white shadow-[0_10px_30px_rgba(159,112,253,0.45)]",
        secondary:
          "border border-white/30 bg-white/15 px-6 text-slate-900 backdrop-blur-xl hover:bg-white/20",
      },
      size: {
        md: "h-11",
        lg: "h-12 px-7 text-base",
      },
      glow: {
        true: "before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-gradient-to-r before:from-[#7F5AF0]/70 before:to-[#FF6AC2]/70 before:blur-xl",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      glow: false,
    },
  },
);

export type GlassButtonStyleOptions = VariantProps<typeof glassButtonStyles>;

export const getGlassButtonClasses = (options?: GlassButtonStyleOptions) =>
  cn(glassButtonStyles(options));


