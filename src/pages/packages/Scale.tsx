import { PackagePageLayout } from "@/components/yazhl/PackagePageLayout";

const Scale = () => {
  return (
    <PackagePageLayout
      tier="Elite"
      name="Scale"
      tagline="Full Automation & Operational Excellence"
      description="The complete business transformation package for companies serious about growth. Full-service marketing automation, CRM implementation, and AI-powered customer engagement to scale your operations."
      gradient="bg-gradient-to-br from-accent via-pink to-primary"
      iconGradient="bg-gradient-to-br from-accent to-pink"
      features={[
        {
          title: "Everything in Presence",
          description: "All features from Foundation and Presence packages including website, ads, content, and lead tracking â€” now supercharged with automation.",
        },
        {
          title: "12+ Professional Video Edits/Month",
          description: "High-volume content production for omnipresence marketing. Reels, shorts, long-form content, and platform-specific formats all handled.",
        },
        {
          title: "Full CRM Setup & Automation",
          description: "Complete CRM implementation with automated workflows, email sequences, task assignments, and customer journey mapping.",
        },
        {
          title: "WhatsApp Business API Integration",
          description: "Official WhatsApp Business API setup for automated messaging, broadcast lists, quick replies, and catalog integration.",
        },
        {
          title: "AI Chatbot Implementation",
          description: "24/7 intelligent chatbot for lead qualification, FAQ handling, appointment booking, and seamless human handoff when needed.",
        },
        {
          title: "Sales Pipeline Management",
          description: "End-to-end sales process automation with stage tracking, automated follow-ups, deal forecasting, and team performance analytics.",
        },
        {
          title: "Marketing Automation Workflows",
          description: "Sophisticated multi-channel automation including email nurturing, SMS campaigns, retargeting, and behavioral triggers.",
        },
        {
          title: "Custom Reporting Dashboard",
          description: "Executive-level dashboard with real-time KPIs, revenue attribution, customer lifetime value, and predictive analytics.",
        },
        {
          title: "Priority Support & Strategy",
          description: "Direct access to senior strategists, same-day response guarantee, and quarterly business reviews with actionable recommendations.",
        },
        {
          title: "Integration Services",
          description: "Connect your entire tech stack â€” payment gateways, inventory systems, calendars, and third-party tools for seamless operations.",
        },
      ]}
      highlights={[
        "Save 15+ hours per week with automation",
        "60% average increase in revenue within 6 months",
        "Never miss a lead with 24/7 automated engagement",
        "Complete visibility into your sales pipeline",
        "Scalable systems that grow with your business",
        "Reduce customer response time to under 5 minutes",
        "Data-driven decisions with comprehensive analytics",
        "White-glove onboarding and training for your team",
      ]}
      idealFor={[
        "Companies ready for aggressive growth",
        "Businesses with dedicated sales teams",
        "Multi-location or franchise operations",
        "High-ticket service providers",
        "E-commerce brands scaling operations",
        "Businesses seeking operational excellence",
      ]}
      ctaText="Scale Your Business"
    />
  );
};

export default Scale;


