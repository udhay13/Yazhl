import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp } from "@/animations/variants";

interface AnimatedHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export const AnimatedHeading = ({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
  className,
}: AnimatedHeadingProps) => {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={cn(
        "mx-auto mb-12 max-w-3xl",
        align === "center" ? "text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <span className="inline-flex rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white/75 backdrop-blur-xl">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
        {title}{" "}
        {highlight ? <span className="text-gradient-primary">{highlight}</span> : null}
      </h2>
      {description ? (
        <p className="mt-4 text-pretty text-base leading-relaxed text-zinc-300 md:text-lg">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
};



