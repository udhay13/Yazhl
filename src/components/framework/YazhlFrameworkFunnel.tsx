import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type FrameworkStep = {
  label: string;
  description: string;
};

type YazhlFrameworkFunnelProps = {
  title: string;
  subtitle: string;
  steps: FrameworkStep[];
  accentFrom: string;
  accentTo: string;
  glowColor: string;
};

const AUTO_ROTATE_INTERVAL_MS = 3000;

// Each tier narrows as it goes down — these are percentage widths
const TIER_WIDTHS = [100, 82, 64, 46];

export const YazhlFrameworkFunnel = ({
  title,
  subtitle,
  steps,
  accentFrom,
  accentTo,
  glowColor,
}: YazhlFrameworkFunnelProps) => {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || steps.length <= 1) return;
    const timer = window.setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, AUTO_ROTATE_INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [isPaused, steps.length]);

  const normalizedActiveStep = steps.length === 0 ? 0 : activeStep % steps.length;
  const selectedStep = steps[normalizedActiveStep] ?? { label: "", description: "" };

  if (steps.length === 0) return null;

  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative h-full min-w-0 overflow-hidden rounded-3xl border border-[#D6DCE7] bg-white p-6 shadow-[0_16px_42px_rgba(15,23,42,0.12)] md:p-8"
    >
      {/* Background glow blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-x-0 top-0 h-28 opacity-60"
          style={{ background: `linear-gradient(180deg, ${glowColor}44, transparent)` }}
        />
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.07, 0.13, 0.07] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-16 -top-14 h-44 w-44 rounded-full blur-3xl"
          style={{ backgroundColor: glowColor }}
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          className="absolute -bottom-20 -right-16 h-52 w-52 rounded-full blur-3xl"
          style={{ backgroundColor: glowColor }}
        />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6B7280]">{subtitle}</p>
        <h3 className="mt-2 text-2xl font-bold tracking-tight text-[#111827] md:text-3xl">{title}</h3>

        {/* ── FUNNEL ── */}
        <div className="mt-8 flex flex-col items-center gap-0.5">
          {steps.map((step, index) => {
            const isActive = index === normalizedActiveStep;
            const widthPct = TIER_WIDTHS[index] ?? Math.max(20, 100 - index * 18);
            // Clip path for trapezoid: top narrows from previous tier, bottom narrows for next
            const topInset = index === 0 ? 0 : 6;
            const bottomInset = index === steps.length - 1 ? 0 : 6;

            return (
              <motion.button
                key={step.label}
                type="button"
                onClick={() => setActiveStep(index)}
                style={{ width: `${widthPct}%` }}
                className="relative overflow-hidden focus:outline-none"
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.18 }}
              >
                {/* Trapezoid shape via clip-path */}
                <div
                  className="relative flex items-center justify-center gap-2 py-3 transition-all duration-300"
                  style={{
                    clipPath: `polygon(${topInset}% 0%, ${100 - topInset}% 0%, ${100 - bottomInset}% 100%, ${bottomInset}% 100%)`,
                    background: isActive
                      ? `linear-gradient(135deg, ${accentFrom}, ${accentTo})`
                      : "#F1F5F9",
                    boxShadow: isActive
                      ? `0 4px 18px ${glowColor}99`
                      : "none",
                  }}
                >
                  {/* Step number */}
                  <span
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold"
                    style={{
                      backgroundColor: isActive ? "rgba(255,255,255,0.25)" : "#CBD5E1",
                      color: isActive ? "#fff" : "#475569",
                    }}
                  >
                    {index + 1}
                  </span>
                  <p
                    className="truncate text-xs font-bold uppercase tracking-[0.08em] md:text-sm"
                    style={{ color: isActive ? "#ffffff" : "#334155" }}
                  >
                    {step.label}
                  </p>
                </div>

                {/* Active glow ring */}
                {isActive && (
                  <motion.div
                    layoutId="funnelGlow"
                    className="pointer-events-none absolute inset-0 rounded"
                    style={{
                      boxShadow: `inset 0 0 0 2px ${accentFrom}`,
                      clipPath: `polygon(${topInset}% 0%, ${100 - topInset}% 0%, ${100 - bottomInset}% 100%, ${bottomInset}% 100%)`,
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                )}
              </motion.button>
            );
          })}

          {/* Funnel drain tip */}
          <div
            className="mt-0.5 h-5 w-6"
            style={{
              clipPath: "polygon(20% 0%, 80% 0%, 50% 100%)",
              background: `linear-gradient(180deg, ${accentTo}55, transparent)`,
            }}
          />
        </div>

        {/* ── Active stage description ── */}
        <div className="mt-5 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 md:p-5">
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#64748B]">
              Stage {normalizedActiveStep + 1} of {steps.length}
            </p>
            <p className="rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-[#334155] shadow-sm">
              {selectedStep.label}
            </p>
          </div>

          <AnimatePresence mode="wait">
            <motion.p
              key={selectedStep.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="mt-3 text-sm leading-relaxed text-[#374151]"
            >
              {selectedStep.description}
            </motion.p>
          </AnimatePresence>

          {/* Progress bar */}
          <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-[#DDE4EE]">
            <motion.div
              animate={{ width: `${((normalizedActiveStep + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="h-full rounded-full"
              style={{ background: `linear-gradient(90deg, ${accentFrom}, ${accentTo})` }}
            />
          </div>
        </div>

        {/* Step dots */}
        <div className="mt-4 flex items-center justify-center gap-2">
          {steps.map((step, index) => (
            <button
              key={step.label}
              type="button"
              aria-label={`View stage ${step.label}`}
              onClick={() => setActiveStep(index)}
              className="p-0.5"
            >
              <motion.span
                animate={{
                  width: normalizedActiveStep === index ? 22 : 8,
                  backgroundColor: normalizedActiveStep === index ? accentFrom : "#CBD5E1",
                }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="block h-2 rounded-full"
              />
            </button>
          ))}
        </div>
      </div>
    </motion.article>
  );
};
