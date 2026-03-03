import { useEffect } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Clock3, MapPin, Ticket } from "lucide-react";
import { Container } from "@/components/Container";
import Hyperspeed from "@/components/Hyperspeed";
import { hyperspeedPresets } from "@/components/HyperSpeedPresets";
import { PageTransition } from "@/components/PageTransition";
import { initializeMetaPixel } from "@/lib/metaPixel";

const WALKATHON_META_PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID ?? "";
const WALKATHON_FORM_URL =
  import.meta.env.VITE_WALKATHON_FORM_URL ??
  "https://docs.google.com/forms/d/e/1FAIpQLSdxwwXDadR5oHCGMUKkHg8TkbAy9ycuoPKoDac7W7I9PWnmyA/viewform";

const highlights = [
  { icon: CalendarDays, label: "Date", value: "8th March" },
  { icon: MapPin, label: "Location", value: "Paavai Hospitals" },
  { icon: Clock3, label: "Time", value: "6:00 AM" },
  { icon: Ticket, label: "Spots", value: "Limited Slots Only" },
];

const Walkathon = () => {
  useEffect(() => {
    if (!WALKATHON_META_PIXEL_ID) {
      return;
    }

    initializeMetaPixel(WALKATHON_META_PIXEL_ID);
  }, []);

  const openRegistrationForm = () => {
    window.location.assign(WALKATHON_FORM_URL);
  };

  return (
    <PageTransition className="h-[100svh] overflow-hidden bg-[#020205]">
      <main className="relative h-full">
        <div className="pointer-events-none absolute inset-0 z-0">
          <Hyperspeed effectOptions={hyperspeedPresets.one} />
          <div className="absolute inset-0 bg-black/35" />
        </div>

        <section className="relative h-full">
          <Container className="relative z-10 flex h-full items-start justify-center px-3 pt-3 pb-3 sm:items-center sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mx-auto grid w-full max-w-6xl gap-4 rounded-[1.5rem] border border-white/20 bg-black/62 p-3 shadow-[0_20px_60px_rgba(2,6,23,0.55)] backdrop-blur-xl sm:gap-5 sm:p-6 md:p-8 lg:grid-cols-[1.18fr_1fr] lg:items-center"
            >
              <div className="text-center lg:text-left">
                <h1 className="text-xl font-black uppercase tracking-[0.14em] text-[#C4B5FD] sm:text-4xl md:text-5xl">
                  VAADI RASATHI
                </h1>
                <h2 className="mt-2 text-lg font-black leading-tight text-white sm:mt-3 sm:text-3xl md:text-4xl lg:whitespace-nowrap">
                  {"Women's Day Walkathon Celebration"}
                </h2>
                <p className="mt-2 text-xs font-semibold text-slate-200 sm:mt-3 sm:text-base md:text-lg">
                  Only for Women's
                </p>
                <p className="mt-1.5 text-xs font-semibold text-slate-100 sm:mt-2 sm:text-sm">
                  Registration 199/- only
                </p>
                <p className="mt-1 text-xs font-medium text-slate-300 sm:mt-1.5 sm:text-sm">
                  Includes T - Shirt, Refreshments, DJ Dance
                </p>

                <button
                  type="button"
                  onClick={openRegistrationForm}
                  className="mt-3 inline-flex h-10 items-center justify-center rounded-full bg-[#8B5CF6] px-5 text-[11px] font-bold uppercase tracking-[0.1em] text-white shadow-[0_12px_28px_rgba(139,92,246,0.38)] transition hover:-translate-y-0.5 hover:bg-[#7C3AED] sm:mt-4 sm:h-12 sm:px-8 sm:text-sm"
                >
                  [ REGISTER NOW ]
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                {highlights.map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="rounded-xl border border-white/20 bg-black/55 p-2.5 text-left shadow-[0_10px_24px_rgba(2,6,23,0.3)] sm:p-3"
                  >
                    <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#C4B5FD] sm:gap-2 sm:text-sm">
                      <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      <span>{label}</span>
                    </div>
                    <p className="mt-1.5 text-xs font-semibold text-white sm:mt-2 sm:text-base">{value}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </Container>
        </section>

      </main>
    </PageTransition>
  );
};

export default Walkathon;


