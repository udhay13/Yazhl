import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Globe,
  Layers,
  MessageCircle,
  Package,
  Trophy,
  Users,
  X,
} from "lucide-react";
import { openBookCallWhatsApp } from "@/lib/whatsapp";

interface DrawerLink {
  href: string;
  label: string;
}

interface MobileDrawerProps {
  isOpen: boolean;
  links: DrawerLink[];
  onClose: () => void;
  onNavigate: (href: string) => void;
}

const linkMeta: Record<string, { icon: React.ElementType; desc: string }> = {
  "#framework": { icon: Layers, desc: "How we work" },
  "#who-we-are": { icon: Users, desc: "Our story" },
  "#solutions": { icon: Globe, desc: "What we offer" },
  "#services": { icon: BarChart3, desc: "All services" },
  "#packages": { icon: Package, desc: "Pricing plans" },
  "#results": { icon: Trophy, desc: "Performance" },
};

export const MobileDrawer = ({ isOpen, links, onClose, onNavigate }: MobileDrawerProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel — slides in from right */}
          <motion.aside
            initial={{ x: "110%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "110%", opacity: 0 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="fixed right-4 top-4 bottom-4 z-50 flex w-[min(20rem,82vw)] flex-col overflow-hidden rounded-3xl bg-[#0D0D1A] border border-white/10 shadow-2xl"
          >
            {/* Gradient top strip */}
            <div className="h-1 w-full bg-gradient-to-r from-violet-600 via-purple-500 to-pink-500" />

            {/* Header */}
            <div className="flex items-center justify-between px-5 py-5">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/8 text-sm font-black text-white">
                  Y
                </span>
                <span className="text-base font-bold tracking-tight text-white">YAZHL</span>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Divider */}
            <div className="mx-5 h-px bg-white/8" />

            {/* Nav links */}
            <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
              {links.map((link, index) => {
                const meta = linkMeta[link.href];
                const Icon = meta?.icon ?? Globe;
                const desc = meta?.desc ?? "";
                return (
                  <motion.button
                    key={link.href}
                    type="button"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index + 0.06, duration: 0.28, ease: "easeOut" }}
                    onClick={() => { onNavigate(link.href); onClose(); }}
                    className="group flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left transition-all hover:bg-white/6 active:scale-[0.97]"
                  >
                    {/* Icon box */}
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/6 text-white/40 transition-all group-hover:bg-violet-600/20 group-hover:text-violet-400">
                      <Icon className="h-4.5 w-4.5" />
                    </span>

                    {/* Label + desc */}
                    <span className="flex flex-col">
                      <span className="text-sm font-semibold text-white/75 transition-colors group-hover:text-white">
                        {link.label}
                      </span>
                      <span className="text-[11px] text-white/30">{desc}</span>
                    </span>

                    <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-white/15 transition-all group-hover:translate-x-0.5 group-hover:text-violet-400" />
                  </motion.button>
                );
              })}
            </nav>

            {/* Divider */}
            <div className="mx-5 h-px bg-white/8" />

            {/* CTA section */}
            <div className="px-4 py-5">
              <button
                type="button"
                onClick={() => { openBookCallWhatsApp(); onClose(); }}
                className="group flex w-full items-center justify-center gap-2.5 rounded-2xl bg-white py-4 text-sm font-bold text-[#0D0D1A] shadow-xl transition-all hover:bg-violet-500 hover:text-white active:scale-[0.97]"
              >
                <MessageCircle className="h-4 w-4" />
                Book Strategy Call
              </button>

              <p className="mt-3 text-center text-[11px] text-white/25">
                Free consultation · No commitment
              </p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};
