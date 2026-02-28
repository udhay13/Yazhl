import { useEffect, useRef } from "react";
import { ensureGsap } from "@/animations/gsap";
import { useIsMobile } from "./use-mobile";

export const useParallax = <T extends HTMLElement>(
  distance = 80,
  disabled = false,
) => {
  const ref = useRef<T | null>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const element = ref.current;
    if (!element || isMobile || disabled) {
      return;
    }

    const gsap = ensureGsap();
    const tween = gsap.to(element, {
      y: distance,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [disabled, distance, isMobile]);

  return ref;
};



