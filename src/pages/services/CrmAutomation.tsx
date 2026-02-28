import { ServicePageLayout } from "@/components/yazhl/ServicePageLayout";

const CrmAutomation = () => {
  return (
    <ServicePageLayout
      name="CRM Management & Marketing Automation"
      tagline="Lead nurturing systems that convert prospects into loyal customers."
      description="Our CRM management and marketing automation services streamline follow-ups, improve retention, and increase customer lifetime value."
      bullets={[
        "CRM setup & workflow automation.",
        "Email marketing automation.",
        "Lead segmentation & nurturing.",
        "Customer journey optimization.",
        "Sales pipeline management.",
      ]}
    />
  );
};

export default CrmAutomation;

