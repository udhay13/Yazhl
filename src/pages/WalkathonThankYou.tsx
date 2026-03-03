import { useEffect } from "react";
import { CheckCircle2, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { PageTransition } from "@/components/PageTransition";
import { MinimalBackground } from "@/components/ui/minimal-background";
import { initializeMetaPixel, trackMetaEvent } from "@/lib/metaPixel";

const WALKATHON_META_PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID ?? "";

const WalkathonThankYou = () => {
  useEffect(() => {
    if (!WALKATHON_META_PIXEL_ID) {
      return;
    }

    initializeMetaPixel(WALKATHON_META_PIXEL_ID);
    trackMetaEvent("Lead", {
      campaign: "vaadi_rasathi_walkathon_2026",
      destination: "walkathon_thank_you",
    });
  }, []);

  return (
    <PageTransition className="min-h-screen overflow-x-hidden bg-white">
      <main className="relative flex min-h-screen items-center py-16">
        <MinimalBackground />
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl rounded-[2rem] border border-[#E2E8F0] bg-white/95 p-8 text-center shadow-[0_20px_52px_rgba(15,23,42,0.1)] md:p-12"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#EEF2FF]">
              <CheckCircle2 className="h-7 w-7 text-[#7C3AED]" />
            </div>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#8B5CF6]">Registration Complete</p>
            <h1 className="mt-3 text-3xl font-black leading-tight text-[#0F172A] md:text-4xl">
              Thank You For Registering
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#475569] md:text-lg">
              Your spot for Vaadi Rasathi Walkathon 2026 is recorded. We&apos;ll share event reminders and final
              details with you soon.
            </p>

            <Link
              to="/walkathon"
              className="mt-10 inline-flex h-11 items-center justify-center gap-2 rounded-full border border-[#CBD5E1] bg-white px-6 text-sm font-bold uppercase tracking-[0.08em] text-[#0F172A] transition hover:-translate-y-0.5"
            >
              <Home className="h-4 w-4" />
              Back to Walkathon Page
            </Link>
          </motion.div>
        </Container>
      </main>
    </PageTransition>
  );
};

export default WalkathonThankYou;
