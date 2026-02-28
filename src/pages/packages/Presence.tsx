import { PackagePageLayout } from "@/components/yazhl/PackagePageLayout";

const Presence = () => {
  return (
    <PackagePageLayout
      tier="Growth"
      name="Presence"
      tagline="Actively Generate Quality Leads"
      description="For businesses ready to move beyond just having a website. Build authority, generate leads, and create a consistent content strategy that positions you as an industry leader."
      gradient="bg-gradient-to-br from-violet via-accent to-pink"
      iconGradient="bg-gradient-to-br from-violet to-accent"
      features={[
        {
          title: "Everything in Foundation",
          description: "All the essentials from the Foundation package including professional website, Google Business setup, SEO, and first-year hosting.",
        },
        {
          title: "Personal Branding Videos (4/month)",
          description: "Professional video content for social media. Includes scripting, shooting guidance, editing, and optimization for each platform.",
        },
        {
          title: "Meta & Google Ad Management",
          description: "Strategic paid advertising across Facebook, Instagram, and Google. Includes audience research, ad creation, A/B testing, and ongoing optimization.",
        },
        {
          title: "Sales Pipeline Setup",
          description: "Structured lead tracking system to manage inquiries from first contact to conversion. Never lose track of a potential customer again.",
        },
        {
          title: "Lead Tracking Dashboard",
          description: "Real-time dashboard showing lead sources, conversion rates, and pipeline value. Make data-driven decisions about your marketing.",
        },
        {
          title: "Social Media Content Calendar",
          description: "Monthly content planning with post ideas, captions, and hashtag strategies. Maintain consistent presence across platforms.",
        },
        {
          title: "Monthly Performance Reports",
          description: "Comprehensive monthly reports covering website traffic, ad performance, lead generation, and ROI. Clear metrics that matter.",
        },
        {
          title: "Dedicated Account Manager",
          description: "Your single point of contact for all marketing needs. Weekly check-ins and priority support for any questions or changes.",
        },
      ]}
      highlights={[
        "Generate 20-50+ qualified leads per month",
        "Position yourself as a thought leader in your industry",
        "3x increase in social media engagement within 90 days",
        "Full transparency with weekly performance updates",
        "Ad spend optimization to maximize ROI",
        "Content repurposed across all major platforms",
      ]}
      idealFor={[
        "Established businesses ready to grow",
        "Service businesses looking for more clients",
        "Professionals building personal brands",
        "Businesses entering new markets",
        "Companies with sales teams needing leads",
      ]}
      ctaText="Amplify Your Presence"
    />
  );
};

export default Presence;


