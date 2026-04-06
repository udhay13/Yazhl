import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MessageSquareText,
  Music,
  Send,
  Sparkles,
  UserRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

type ContactProps = {
  compact?: boolean;
};

export const Contact = ({ compact = false }: ContactProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section
      id="contact"
      className={cn(
        "relative overflow-hidden",
        compact ? "h-full bg-transparent py-0" : "bg-secondary/30 py-12 md:py-16",
      )}
    >
      {!compact && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ y: [-20, 20, -20], rotate: [0, 10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[10%] top-20 text-primary/20"
          >
            <Music className="h-16 w-16" />
          </motion.div>
          <motion.div
            animate={{ y: [20, -20, 20], rotate: [0, -10, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-32 right-[15%] text-accent/20"
          >
            <Music className="h-12 w-12" />
          </motion.div>
          <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
        </div>
      )}

      <div className={cn("relative z-10 mx-auto", compact ? "flex h-full max-w-none flex-col" : "container max-w-3xl")}>
        {compact ? (
          <>
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55 }}
              className="mb-3"
            >
              <div className="relative overflow-hidden rounded-[24px] border border-sky-100/80 bg-[linear-gradient(135deg,#082f49_0%,#155e75_48%,#67e8f9_145%)] px-4 py-4 text-white shadow-[0_20px_48px_rgba(14,116,144,0.2)]">
                <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:28px_28px]" />
                <div className="pointer-events-none absolute -right-8 top-3 h-20 w-20 rounded-full bg-white/20 blur-3xl" />
                <div className="pointer-events-none absolute -left-6 bottom-0 h-16 w-16 rounded-full bg-emerald-300/20 blur-3xl" />

                <div className="relative grid gap-3 sm:grid-cols-[minmax(0,1fr)_120px] sm:items-center">
                  <div className="max-w-sm">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-md">
                      <Sparkles className="h-3.5 w-3.5" />
                      Get In Touch
                    </div>
                    <h2 className="mt-2.5 text-lg font-bold tracking-[-0.03em] text-white sm:text-[1.35rem]">
                      Let&apos;s shape the next step
                    </h2>
                    <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-white/78">
                      Share a quick brief and we&apos;ll get back with the next move.
                    </p>
                    <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/15 px-3 py-1.5 text-xs font-semibold text-white/90 backdrop-blur-md">
                      1 business day reply
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-3 justify-center">
                    <div className="w-28 rounded-2xl border border-white/20 bg-slate-950/15 p-3 backdrop-blur-md">
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/85">
                        <Sparkles className="h-3.5 w-3.5" />
                        Brief
                      </div>
                      <div className="mt-3 space-y-2">
                        <div className="h-2 rounded-full bg-white/75" />
                        <div className="h-2 w-3/4 rounded-full bg-white/45" />
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/90 backdrop-blur-md">
                      <span className="h-2 w-2 rounded-full bg-emerald-300" />
                      Strategy synced
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="flex flex-1 flex-col"
            >
              <form
                onSubmit={handleSubmit}
                className="flex h-full flex-col rounded-[24px] border border-slate-200/80 bg-white/70 p-4 shadow-[0_18px_40px_rgba(148,163,184,0.16)] backdrop-blur-xl"
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  <label htmlFor="name" className="space-y-1.5">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Name
                    </span>
                    <div className="relative">
                      <UserRound className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder="Your Name"
                        className="h-10 rounded-2xl border-slate-200 bg-white pl-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] focus:border-sky-300 focus:ring-sky-200"
                      />
                    </div>
                  </label>

                  <label htmlFor="email" className="space-y-1.5">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Email
                    </span>
                    <div className="relative">
                      <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="Email Address"
                        className="h-10 rounded-2xl border-slate-200 bg-white pl-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] focus:border-sky-300 focus:ring-sky-200"
                      />
                    </div>
                  </label>
                </div>

                <label htmlFor="message" className="mt-3 flex flex-1 flex-col space-y-1.5">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Project Brief
                  </span>
                  <div className="relative flex flex-1">
                    <MessageSquareText className="pointer-events-none absolute left-3 top-3.5 z-10 h-4 w-4 text-slate-400" />
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={3}
                      placeholder="Tell us about your project..."
                      className="min-h-[112px] flex-1 rounded-[22px] border-slate-200 bg-white pl-10 pt-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.95)] focus:border-sky-300 focus:ring-sky-200"
                    />
                  </div>
                </label>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-3 h-10 w-full rounded-2xl bg-slate-950 text-sm font-semibold text-white shadow-[0_18px_35px_rgba(15,23,42,0.24)] hover:bg-slate-900"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </>
        ) : (
          <>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8 md:mb-10"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2">
                <span className="text-sm font-medium text-muted-foreground">Get In Touch</span>
              </div>

              <h2 className="mb-4 text-2xl font-display font-bold tracking-tight sm:text-3xl md:text-4xl">
                Let&apos;s <span className="text-gradient">Harmonize</span> Your Business
              </h2>

              <p className="mx-auto max-w-xl text-sm text-muted-foreground md:text-base">
                Ready to transform your business reality? Reach out to us and let&apos;s
                create your success story together.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto max-w-xl"
            >
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-border bg-card p-4 shadow-soft md:p-6"
              >
                <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-5 md:gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder="John Doe"
                      className="h-12 border-border bg-background focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="h-12 border-border bg-background focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-5 md:gap-5">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="h-12 border-border bg-background focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">
                      Company Name
                    </label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Your Company"
                      className="h-12 border-border bg-background focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-5 space-y-2 md:mb-6">
                  <label htmlFor="message" className="text-sm font-medium">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="resize-none border-border bg-background focus:border-primary"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative z-10 h-14 w-full bg-gradient-primary text-base font-semibold text-primary-foreground shadow-glow hover:opacity-90"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
};
