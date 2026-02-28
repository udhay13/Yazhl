import { PackagePageLayout } from "@/components/yazhl/PackagePageLayout";

const Foundation = () => {
  return (
    <PackagePageLayout
      tier="Starter"
      name="Foundation"
      tagline="Build Your Digital Footprint"
      description="The perfect starting point for new businesses looking to establish a professional online presence. Get everything you need to create credibility and attract your first customers."
      gradient="bg-gradient-to-br from-primary via-violet to-accent"
      iconGradient="bg-gradient-to-br from-primary to-violet"
      features={[
        {
          title: "Professional 5-Page Website",
          description: "Custom-designed, mobile-responsive website with Home, About, Services, Portfolio/Gallery, and Contact pages. Built for speed and conversions.",
        },
        {
          title: "Google My Business Setup",
          description: "Complete Google Business Profile optimization to help local customers find you. Includes category setup, business hours, photos, and review management basics.",
        },
        {
          title: "Basic SEO Setup",
          description: "On-page SEO optimization including meta titles, descriptions, header tags, and image alt texts. Get found by customers searching for your services.",
        },
        {
          title: "Domain & Hosting (Year 1)",
          description: "Professional domain name registration and reliable hosting for your first year. SSL certificate included for secure browsing.",
        },
        {
          title: "Mobile-First Design",
          description: "Every page optimized for mobile devices where most of your customers will find you. Fast loading times and touch-friendly navigation.",
        },
        {
          title: "Contact Form Integration",
          description: "Professional contact forms with email notifications so you never miss a lead. Includes spam protection and auto-responders.",
        },
      ]}
      highlights={[
        "Launch your professional website within 2-3 weeks",
        "No technical knowledge required from your end",
        "One round of revisions included in the package",
        "30-day post-launch support for any issues",
        "Training session on managing your website",
        "Analytics setup to track visitor behavior",
      ]}
      idealFor={[
        "New businesses just starting out",
        "Freelancers and consultants",
        "Local service providers",
        "Small shops going digital",
        "Personal brands and portfolios",
      ]}
      ctaText="Start Your Foundation"
    />
  );
};

export default Foundation;


