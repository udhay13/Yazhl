import { cn } from "@/lib/utils";

export type PrimaryButtonVariant = "primary" | "outline";
export type PrimaryButtonSize = "md" | "lg";

interface PrimaryButtonStyleOptions {
  variant?: PrimaryButtonVariant;
  size?: PrimaryButtonSize;
  fullWidth?: boolean;
  className?: string;
}

export const primaryButtonClasses = ({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
}: PrimaryButtonStyleOptions = {}) => {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED]/35 focus-visible:ring-offset-2 hover:scale-[1.03] active:scale-[0.99]",
    size === "lg" ? "h-12 px-6 text-base" : "h-11 px-5 text-sm",
    variant === "primary"
      ? "border border-[#7C3AED] bg-[#7C3AED] text-white hover:border-[#6D28D9] hover:bg-[#6D28D9]"
      : "border border-[#E5E7EB] bg-white text-[#111111] hover:border-[#7C3AED] hover:text-[#7C3AED]",
    fullWidth && "w-full",
    className,
  );
};
