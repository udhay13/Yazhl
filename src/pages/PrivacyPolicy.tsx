import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/Container";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import DarkVeil from "@/components/DarkVeil";

const sections = [
    {
        title: "Information We Collect",
        content: [
            "Personal identification information (name, email address, phone number) when you voluntarily submit it via our contact form or book a strategy call.",
            "Usage data such as pages visited, time spent, device type, and browser — collected automatically through analytics tools.",
            "Communication data from emails or WhatsApp messages you send to us.",
        ],
    },
    {
        title: "How We Use Your Information",
        content: [
            "To respond to your enquiries and deliver the services you have requested.",
            "To send you relevant updates, case studies, or promotional material — only with your consent.",
            "To analyse website traffic and improve our content and user experience.",
            "To comply with legal obligations where required.",
        ],
    },
    {
        title: "Sharing of Information",
        content: [
            "We do not sell, trade, or rent your personal information to third parties.",
            "We may share data with trusted service providers (e.g. analytics platforms, email services) solely to operate our business — bound by confidentiality agreements.",
            "We may disclose information if required by law or to protect the rights and safety of YAZHL and its clients.",
        ],
    },
    {
        title: "Data Retention",
        content: [
            "We retain your personal data only for as long as necessary to fulfil the purposes outlined in this policy.",
            "Contact form submissions are retained for up to 2 years unless you request earlier deletion.",
        ],
    },
    {
        title: "Your Rights",
        content: [
            "You have the right to access, correct, or delete your personal data held by us.",
            "You may withdraw consent for marketing communications at any time by contacting us.",
            "To exercise any of these rights, please reach out to us at the contact details below.",
        ],
    },
    {
        title: "Cookies",
        content: [
            "Our website may use cookies to enhance your browsing experience and gather analytics data.",
            "You can disable cookies through your browser settings; however, some features of the site may not function correctly.",
        ],
    },
    {
        title: "Changes to This Policy",
        content: [
            "We may update this Privacy Policy from time to time. The updated version will be reflected by a revised date at the top of this page.",
            "We encourage you to review this policy periodically to stay informed.",
        ],
    },
    {
        title: "Contact Us",
        content: [
            "If you have any questions about this Privacy Policy or how we handle your data, please contact us via WhatsApp or email, both available on our homepage.",
        ],
    },
];

const PrivacyPolicy = () => {
    const navigate = useNavigate();

    return (
        <PageTransition className="min-h-screen bg-black">
            <Navbar />

            {/* Hero */}
            <section className="relative overflow-hidden bg-black pb-20 pt-40">
                <div className="pointer-events-none absolute inset-0 z-0 opacity-100">
                    <DarkVeil hueShift={12} noiseIntensity={0.02} scanlineIntensity={0.04} speed={0.65} scanlineFrequency={1.2} warpAmount={0.08} />
                </div>
                <div className="pointer-events-none absolute inset-0 z-0 bg-black/40" />
                <Container className="relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <button
                            type="button"
                            onClick={() => navigate(-1)}
                            className="mb-8 inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Back
                        </button>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7C3AED]">Legal</p>
                        <h1 className="mt-3 text-4xl font-bold tracking-tight text-white md:text-6xl">Privacy Policy</h1>
                        <p className="mt-4 text-white/55 text-sm">Last updated: February 2026</p>
                        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70">
                            At YAZHL, we respect your privacy and are committed to protecting your personal data. This policy explains how we collect, use, and safeguard your information when you interact with our website or services.
                        </p>
                    </motion.div>
                </Container>
            </section>

            {/* Content */}
            <section className="bg-white py-20">
                <Container>
                    <div className="mx-auto max-w-3xl space-y-12">
                        {sections.map((section, i) => (
                            <motion.div
                                key={section.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.4, delay: i * 0.04 }}
                            >
                                <h2 className="text-xl font-bold text-[#111827]">{section.title}</h2>
                                <ul className="mt-4 space-y-3">
                                    {section.content.map((item, j) => (
                                        <li key={j} className="flex gap-3 text-[#374151] text-sm leading-relaxed">
                                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7C3AED]" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </section>

            <Footer />
        </PageTransition>
    );
};

export default PrivacyPolicy;
