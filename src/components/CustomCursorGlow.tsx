import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursorGlow = () => {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const smoothX = useSpring(x, { stiffness: 280, damping: 30, mass: 0.35 });
  const smoothY = useSpring(y, { stiffness: 280, damping: 30, mass: 0.35 });

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    const update = () => setEnabled(media.matches);
    update();

    const onMove = (event: MouseEvent) => {
      x.set(event.clientX - 110);
      y.set(event.clientY - 110);
    };

    media.addEventListener("change", update);
    window.addEventListener("mousemove", onMove);

    return () => {
      media.removeEventListener("change", update);
      window.removeEventListener("mousemove", onMove);
    };
  }, [x, y]);

  if (!enabled) {
    return null;
  }

  return (
    <motion.div
      aria-hidden
      style={{ x: smoothX, y: smoothY }}
      className="pointer-events-none fixed left-0 top-0 z-[70] hidden h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(159,112,253,0.35)_0%,rgba(255,106,194,0.18)_38%,rgba(127,90,240,0.02)_72%,transparent_100%)] mix-blend-multiply md:block"
    />
  );
};



