import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";
import { MinimalBackground } from "@/components/ui/minimal-background";
import { WHATSAPP_BOOK_CALL_URL } from "@/lib/whatsapp";

export const CTA = () => {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-[#E5E7EB] bg-white py-20 md:py-24">
      <MinimalBackground />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="relative overflow-hidden rounded-[2rem] border border-[#E2E8F0] bg-white px-6 py-10 text-[#0F172A] shadow-[0_16px_42px_rgba(15,23,42,0.08)] sm:px-8 md:px-12 md:py-14 lg:px-16"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-16 bottom-2 h-44 w-44 rounded-full bg-[#E0E7FF]/70 blur-3xl" />
            <div className="absolute -right-16 top-4 h-40 w-40 rounded-full bg-[#DBEAFE]/70 blur-3xl" />
          </div>

          <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
            <h2 className="max-w-4xl text-3xl font-black leading-[1.08] tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl">
              Ready to Scale Your Brand&apos;s Digital Presence?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#475569] md:text-lg">
              Let&apos;s build content, campaigns, and systems that grow your revenue.
            </p>

            <div className="mt-9 grid w-full max-w-2xl gap-3 sm:grid-cols-2">
              <div className="relative w-full rounded-full p-[1px]">
                <motion.span
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-[#8B5CF6] via-[#C4B5FD] to-[#8B5CF6]"
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                />
                <a
                  href={WHATSAPP_BOOK_CALL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex h-12 w-full items-center justify-center rounded-full bg-[#8B5CF6] px-6 text-center text-sm font-bold uppercase tracking-[0.08em] text-white"
                >
                  Book a Strategy Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>

              <a
                href="#contact"
                className="inline-flex h-12 w-full items-center justify-center rounded-full border border-[#CBD5E1] bg-white px-6 text-center text-sm font-bold uppercase tracking-[0.08em] text-[#0F172A]"
              >
                Get a Free Consultation
              </a>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
