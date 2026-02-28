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
        title: "Acceptance of Terms",
        content: [
            "By accessing or using the YAZHL website and services, you agree to be bound by these Terms of Service.",
            "If you do not agree with any part of these terms, you must not use our website or engage our services.",
            "These terms apply to all visitors, clients, and others who access our services.",
        ],
    },
    {
        title: "Services",
        content: [
            "YAZHL provides digital marketing, content strategy, performance marketing, website development, and related business growth services.",
            "Service scope, deliverables, timelines, and pricing are defined in individual client agreements or proposals.",
            "We reserve the right to modify, suspend, or discontinue any service at our discretion with reasonable notice.",
        ],
    },
    {
        title: "Client Responsibilities",
        content: [
            "You agree to provide accurate and complete information when engaging our services.",
            "You are responsible for ensuring that any content or materials you provide to us do not infringe on third-party intellectual property rights.",
            "You agree to fulfil payment obligations as outlined in your service agreement in a timely manner.",
        ],
    },
    {
        title: "Intellectual Property",
        content: [
            "All original content, strategies, designs, and deliverables created by YAZHL remain our intellectual property until full payment is received.",
            "Upon full payment, ownership of client-specific deliverables transfers to you.",
            "YAZHL retains the right to showcase completed work in our portfolio unless otherwise agreed in writing.",
        ],
    },
    {
        title: "Confidentiality",
        content: [
            "Both parties agree to keep confidential any proprietary business information shared during the course of the engagement.",
            "This obligation continues for a period of 2 years following the termination of services.",
        ],
    },
    {
        title: "Limitation of Liability",
        content: [
            "YAZHL is not liable for any indirect, incidental, or consequential damages arising from the use of our services.",
            "Our maximum liability to you shall not exceed the total fees paid for the specific service giving rise to the claim.",
            "We do not guarantee specific outcomes such as revenue figures, follower counts, or search rankings, as these depend on many external factors.",
        ],
    },
    {
        title: "Payment Terms",
        content: [
            "Payment terms are outlined in each individual service agreement or invoice.",
            "Late payments may result in suspension of services until outstanding amounts are cleared.",
            "All fees are non-refundable unless explicitly stated in your agreement.",
        ],
    },
    {
        title: "Termination",
        content: [
            "Either party may terminate the engagement with written notice as stipulated in the service agreement.",
            "Upon termination, any outstanding invoices become immediately due.",
            "Work completed up to the point of termination remains billable.",
        ],
    },
    {
        title: "Governing Law",
        content: [
            "These Terms of Service are governed by the laws of India.",
            "Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in India.",
        ],
    },
    {
        title: "Contact Us",
        content: [
            "If you have any questions about these Terms of Service, please contact us via WhatsApp or email, both available on our homepage.",
        ],
    },
];

const TermsOfService = () => {
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
                        <h1 className="mt-3 text-4xl font-bold tracking-tight text-white md:text-6xl">Terms of Service</h1>
                        <p className="mt-4 text-white/55 text-sm">Last updated: February 2026</p>
                        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70">
                            Please read these Terms of Service carefully before using YAZHL's website or engaging our services. These terms govern your relationship with us and outline the rights and obligations of both parties.
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

export default TermsOfService;
