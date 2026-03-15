import { Navbar } from "@/components/Navbar";
import { PageTransition } from "@/components/PageTransition";
import { Contact as ContactSection } from "@/components/yazhl/Contact";
import { Footer } from "@/sections/Footer";

const Contact = () => {
  return (
    <PageTransition className="min-h-screen bg-[#F3F4F6]">
      <Navbar />
      <main className="pt-24">
        <section className="relative overflow-hidden pb-16">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-sky-200/60 blur-3xl" />
            <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-emerald-200/60 blur-3xl" />
            <div className="absolute inset-0 opacity-[0.5] [background-image:linear-gradient(rgba(209,213,219,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(209,213,219,0.7)_1px,transparent_1px)] [background-size:56px_56px]" />
          </div>

          <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
            <header className="max-w-3xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-sky-700 shadow-sm">
                Let&apos;s talk
              </p>
              <h1 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                Contact <span className="text-sky-600">YAZHL</span>
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
                Share your goals, timelines, and challenges. We&apos;ll come back with a clear,
                execution-ready next step, not just a generic proposal.
              </p>
            </header>

            <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.3fr)] lg:items-stretch">
              <div className="space-y-6">
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_45px_rgba(148,163,184,0.35)]">
                  <iframe
                    title="YAZHL Salem Office Location"
                    src="https://www.google.com/maps?q=51b%2C%20Suramangalam%20Main%20Rd%2C%203%20Roads%2C%20Salem%20-%20636009&z=16&output=embed"
                    width="100%"
                    height="260"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <div className="grid gap-4 rounded-2xl border border-slate-200 bg-white/90 p-5 text-sm text-slate-900 shadow-md sm:grid-cols-2 sm:p-6">
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Studio</p>
                    <p className="font-semibold">YAZHL Marketing Studio</p>
                    <p className="text-slate-600">51b, Suramangalam Main Rd</p>
                    <p className="text-slate-600">3 Roads, Salem - 636009</p>
                    <a
                      href="https://maps.app.goo.gl/DTQAhDisjuJyATVF9?g_st=ic"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex text-sm font-semibold text-sky-600 hover:text-sky-500"
                    >
                      Open location
                    </a>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Call</p>
                      <a
                        href="tel:+917871088361"
                        className="mt-1 inline-flex text-sm font-semibold text-sky-600 hover:text-sky-500"
                      >
                        +91 78710 88361
                      </a>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Email</p>
                      <a
                        href="mailto:contact@yazhl.org"
                        className="mt-1 inline-flex text-sm font-semibold text-sky-600 hover:text-sky-500"
                      >
                        contact@yazhl.org
                      </a>
                    </div>
                    <p className="text-xs text-slate-500">
                      Response time: typically within 1 business day.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white shadow-[0_22px_60px_rgba(148,163,184,0.4)] backdrop-blur-xl lg:h-full">
                <div className="px-4 py-4 sm:px-5 sm:py-5 lg:h-full">
                  <ContactSection compact />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default Contact;
