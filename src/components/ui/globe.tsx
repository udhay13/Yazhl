import { useEffect, useRef } from "react";
import createGlobe from "cobe";
import { cn } from "@/lib/utils";

interface GlobeProps {
  className?: string;
}

export function Globe({ className }: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sizeRef = useRef(0);
  const phiRef = useRef(0);
  const lastFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const parent = canvas.parentElement;
    if (!parent) return undefined;

    const updateSize = () => {
      sizeRef.current = parent.clientWidth;
    };

    updateSize();
    const resizeObserver = new ResizeObserver(updateSize);
    resizeObserver.observe(parent);

    const globe = createGlobe(canvas, {
      devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
      width: sizeRef.current * 2,
      height: sizeRef.current * 2,
      phi: 0,
      theta: 0.32,
      dark: 0,
      diffuse: 1.25,
      mapSamples: 14000,
      mapBrightness: 5.8,
      baseColor: [1, 1, 1],
      markerColor: [0.96, 0.49, 0.17],
      glowColor: [1, 1, 1],
      opacity: 1,
      context: {
        alpha: true,
        antialias: true,
        premultipliedAlpha: true,
      },
      markers: [
        { location: [40.7128, -74.006], size: 0.045 },
        { location: [51.5072, -0.1276], size: 0.038 },
        { location: [28.6139, 77.209], size: 0.05 },
        { location: [1.3521, 103.8198], size: 0.034 },
        { location: [35.6764, 139.65], size: 0.04 },
      ],
      onRender: (state) => {
        const now = performance.now();
        if (lastFrameRef.current === null) {
          lastFrameRef.current = now;
        }

        const deltaMs = Math.min(now - (lastFrameRef.current ?? now), 64);
        lastFrameRef.current = now;
        phiRef.current += (deltaMs / 1000) * 0.22;
        state.phi = phiRef.current;

        const target = sizeRef.current * 2;
        if (state.width !== target || state.height !== target) {
          state.width = target;
          state.height = target;
        }
      },
    });

    return () => {
      resizeObserver.disconnect();
      globe.destroy();
      lastFrameRef.current = null;
    };
  }, []);

  return <canvas ref={canvasRef} className={cn("h-full w-full bg-transparent", className)} />;
}
