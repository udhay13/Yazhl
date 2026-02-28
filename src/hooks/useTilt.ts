import { useEffect, useRef } from "react";
import { useIsMobile } from "./use-mobile";

export const useTilt = <T extends HTMLElement>(
  maxTilt = 6,
  disabled = false,
) => {
  const ref = useRef<T | null>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const element = ref.current;
    if (!element || isMobile || disabled || maxTilt <= 0) {
      return;
    }

    const onMove = (event: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const percentX = (event.clientX - rect.left) / rect.width - 0.5;
      const percentY = (event.clientY - rect.top) / rect.height - 0.5;
      const rotateX = -(percentY * maxTilt);
      const rotateY = percentX * maxTilt;

      element.style.transform = `perspective(1200px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
    };

    const onLeave = () => {
      element.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg)";
    };

    element.style.transition = "transform 260ms cubic-bezier(0.22, 1, 0.36, 1)";
    element.addEventListener("mousemove", onMove);
    element.addEventListener("mouseleave", onLeave);

    return () => {
      element.removeEventListener("mousemove", onMove);
      element.removeEventListener("mouseleave", onLeave);
    };
  }, [disabled, isMobile, maxTilt]);

  return ref;
};



