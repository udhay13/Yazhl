import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import ContentStrategySEO from "@/pages/services/ContentStrategySEO";
import PerformanceMarketing from "@/pages/services/PerformanceMarketing";
import CrmAutomation from "@/pages/services/CrmAutomation";
import FieldMarketing from "@/pages/services/FieldMarketing";
import SocialMediaMarketing from "@/pages/services/SocialMediaMarketing";
import WebsiteDevelopment from "@/pages/services/WebsiteDevelopment";
import RevenueOptimization from "@/pages/services/RevenueOptimization";
import VideoProduction from "@/pages/services/VideoProduction";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    if (location.hash) {
      return;
    }

    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    };

    // Run immediately and once more after the route transition tick.
    scrollToTop();
    const frame = window.requestAnimationFrame(scrollToTop);

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [location.pathname, location.search, location.hash, location.key]);

  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/services/content-strategy-seo" element={<ContentStrategySEO />} />
        <Route path="/services/performance-marketing" element={<PerformanceMarketing />} />
        <Route path="/services/crm-automation" element={<CrmAutomation />} />
        <Route path="/services/field-marketing-brand-activation" element={<FieldMarketing />} />
        <Route path="/services/social-media-marketing" element={<SocialMediaMarketing />} />
        <Route path="/services/website-development" element={<WebsiteDevelopment />} />
        <Route path="/services/revenue-optimization-cro" element={<RevenueOptimization />} />
        <Route path="/services/video-production-creative-content" element={<VideoProduction />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
