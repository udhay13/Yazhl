import { CloudUpload, Fingerprint, Lock, RefreshCcw } from "lucide-react";

const features = [
  {
    name: "Social Media Growth Framework",
    description:
      "Hook → Engage → Convert → Scale Revenue. Stop the scroll with content built for attention, build trust through consistent storytelling and value, turn followers into customers with conversion-focused strategy, and scale what drives measurable growth.",
    icon: CloudUpload,
  },
  {
    name: "Website Engine Framework",
    description:
      "Traffic → Leads → Conversion → Sales. Attract high-intent visitors through SEO-driven content and optimized digital pathways, convert them into qualified leads with landing pages, CTAs, and funnels, and guide them into action to increase customer acquisition and sales.",
    icon: RefreshCcw,
  },
];

export const Solutions = () => {
  return (
    <section id="solutions" className="bg-white py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#7C3AED]">Our Framework</h2>
          <p className="mt-4 text-3xl font-semibold tracking-tight text-[#111111] sm:text-4xl">
            Social Media &amp; Website Engine
          </p>
          <p className="mt-6 text-base leading-7 text-[#6B7280] md:text-lg">
            We deliver integrated digital marketing solutions combining content strategy, performance marketing,
            website development, and revenue optimization across social media and your website engine to drive
            traffic, generate leads, and increase sales.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-[#111111]">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#7C3AED]">
                    <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-[#6B7280]">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};
