import { useEffect, useRef } from "react";
import { useIsMobile } from "./use-mobile";

interface MagneticOptions {
  disabled?: boolean;
  strength?: number;
}

export const useMagnetic = <T extends HTMLElement>({
  disabled = false,
  strength = 16,
}: MagneticOptions = {}) => {
  const ref = useRef<T | null>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const element = ref.current;
    if (!element || isMobile || disabled || strength <= 0) {
      return;
    }

    const onMove = (event: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const moveX = ((event.clientX - centerX) / rect.width) * strength;
      const moveY = ((event.clientY - centerY) / rect.height) * strength;

      element.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
    };

    const onLeave = () => {
      element.style.transform = "translate3d(0, 0, 0)";
    };

    element.style.transition = "transform 220ms cubic-bezier(0.22, 1, 0.36, 1)";
    element.addEventListener("mousemove", onMove);
    element.addEventListener("mouseleave", onLeave);

    return () => {
      element.removeEventListener("mousemove", onMove);
      element.removeEventListener("mouseleave", onLeave);
    };
  }, [disabled, isMobile, strength]);

  return ref;
};



