type FbqArguments = [string, ...unknown[]];

type FbqFunction = {
  (...args: FbqArguments): void;
  callMethod?: (...args: FbqArguments) => void;
  queue?: FbqArguments[];
  loaded?: boolean;
  version?: string;
};

declare global {
  interface Window {
    fbq?: FbqFunction;
    _fbq?: FbqFunction;
  }
}

const initializedPixelIds = new Set<string>();
const META_PIXEL_SCRIPT_ID = "meta-pixel-script";

const ensureFbq = (): FbqFunction | null => {
  if (typeof window === "undefined") {
    return null;
  }

  if (window.fbq) {
    return window.fbq;
  }

  const fbq: FbqFunction = ((...args: FbqArguments) => {
    if (fbq.callMethod) {
      fbq.callMethod(...args);
      return;
    }

    fbq.queue = fbq.queue ?? [];
    fbq.queue.push(args);
  }) as FbqFunction;

  if (!window._fbq) {
    window._fbq = fbq;
  }

  fbq.loaded = true;
  fbq.version = "2.0";
  fbq.queue = [];
  window.fbq = fbq;

  if (!document.getElementById(META_PIXEL_SCRIPT_ID)) {
    const script = document.createElement("script");
    script.id = META_PIXEL_SCRIPT_ID;
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";

    const firstScript = document.getElementsByTagName("script")[0];
    if (firstScript?.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    } else {
      document.head.appendChild(script);
    }
  }

  return fbq;
};

export const initializeMetaPixel = (pixelId: string) => {
  const normalizedPixelId = pixelId.trim();
  if (!normalizedPixelId) {
    return;
  }

  const fbq = ensureFbq();
  if (!fbq) {
    return;
  }

  if (!initializedPixelIds.has(normalizedPixelId)) {
    fbq("init", normalizedPixelId);
    initializedPixelIds.add(normalizedPixelId);
  }

  fbq("track", "PageView");
};

export const trackMetaEvent = (eventName: string, parameters?: Record<string, string | number | boolean>) => {
  if (typeof window === "undefined" || !window.fbq) {
    return;
  }

  if (parameters) {
    window.fbq("track", eventName, parameters);
    return;
  }

  window.fbq("track", eventName);
};
