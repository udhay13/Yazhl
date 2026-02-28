import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { PrimaryButton } from "@/components/PrimaryButton";
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

export const MobileDrawer = ({ isOpen, links, onClose, onNavigate }: MobileDrawerProps) => {
  return (
    <AnimatePresence>
      {isOpen ? (
        <>
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-black/30"
            onClick={onClose}
            aria-label="Close menu overlay"
          />

          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed right-0 top-0 z-50 flex h-full w-[min(24rem,92vw)] flex-col border-l border-[#E5E7EB] bg-white p-6"
          >
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold text-[#111111]">Navigation</p>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#E5E7EB] text-[#111111] transition-colors hover:border-[#7C3AED] hover:text-[#7C3AED]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="mt-8 space-y-2">
              {links.map((link, index) => (
                <motion.button
                  key={link.href}
                  type="button"
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * index + 0.08, duration: 0.3, ease: "easeInOut" }}
                  onClick={() => onNavigate(link.href)}
                  className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-base font-medium text-[#111111] transition-colors hover:bg-[#F9FAFB] hover:text-[#7C3AED]"
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>

            <div className="mt-auto pt-8">
              <PrimaryButton
                fullWidth
                size="lg"
                onClick={() => {
                  openBookCallWhatsApp();
                  onClose();
                }}
              >
                Book Strategy Call
              </PrimaryButton>
            </div>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
};
