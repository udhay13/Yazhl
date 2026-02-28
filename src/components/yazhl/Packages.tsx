import { Check, Sparkles, ArrowRight } from "lucide-react";

const packages = [
  {
    tier: "Starter",
    name: "Foundation",
    description: "Best for new businesses needing a solid digital footprint",
    features: [
      "Professional 5-page website",
      "Google My Business setup",
      "Basic SEO setup",
      "Domain & hosting (Year 1)",
    ],
    featured: false,
    href: "#contact",
    gradient: "from-primary to-violet",
  },
  {
    tier: "Growth",
    name: "Presence",
    description: "Best for businesses ready to actively generate leads",
    features: [
      "Everything in Starter",
      "Personal branding videos (4/month)",
      "Meta & Google ad management",
      "Sales pipeline & lead tracking",
    ],
    featured: true,
    href: "#contact",
    gradient: "from-violet to-accent",
  },
  {
    tier: "Elite",
    name: "Scale",
    description: "Best for companies wanting full automation & scale",
    features: [
      "Everything in Growth",
      "12+ professional video edits/month",
      "Full CRM setup & automation",
      "WhatsApp API & chatbot",
      "Sales pipeline management",
    ],
    featured: false,
    href: "#contact",
    gradient: "from-accent to-pink",
  },
  {
    tier: "Flexible",
    name: "Custom",
    description: "Build your own package with the services you need",
    features: [
      "Pick & choose any services",
      "Flexible pricing",
      "Tailored to your goals",
      "Scalable as you grow",
    ],
    featured: false,
    href: "#contact",
    gradient: "from-pink to-primary",
    isCustom: true,
  },
];

const baseButtonClass = "mt-auto inline-flex h-10 w-full items-center justify-center gap-2 rounded-md px-4 text-sm font-medium";
const featuredButtonClass = `${baseButtonClass} bg-primary text-primary-foreground`;
const customButtonClass = `${baseButtonClass} border border-primary/20 bg-primary/10 text-primary`;
const defaultButtonClass = `${baseButtonClass} bg-secondary text-secondary-foreground`;

export const Packages = () => {
  return (
    <section id="packages" className="py-20 md:py-32 relative">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
            <span className="text-sm font-medium text-muted-foreground">
              Pricing
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight mb-6">
            Choose Your <span className="text-gradient">Rhythm</span>
          </h2>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Find the perfect package for your business journey
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {packages.map((pkg) => (
            <div key={pkg.name} className="relative">
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-primary text-primary-foreground text-xs font-semibold shadow-glow">
                    <Sparkles className="w-3 h-3" />
                    Most Popular
                  </div>
                </div>
              )}

              {pkg.isCustom && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary border border-border text-secondary-foreground text-xs font-semibold">
                    <Sparkles className="w-3 h-3" />
                    Build Your Own
                  </div>
                </div>
              )}

              <div
                className={`h-full p-5 md:p-6 rounded-2xl border flex flex-col ${
                  pkg.featured
                    ? "bg-gradient-to-b from-card to-secondary/50 border-primary/30 shadow-soft"
                    : pkg.isCustom
                    ? "bg-gradient-to-b from-secondary/30 to-card border-dashed border-primary/20"
                    : "bg-card border-border"
                }`}
              >
                <div className="text-sm font-medium text-primary mb-2">
                  {pkg.tier}
                </div>

                <h3 className="text-xl font-bold font-display mb-2">
                  {pkg.name}
                </h3>

                <p className="text-xs text-muted-foreground mb-5">
                  {pkg.description}
                </p>

                <div className="space-y-2.5 mb-6 flex-grow">
                  {pkg.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2">
                      <div className={`flex-shrink-0 w-4 h-4 rounded-full bg-gradient-to-br ${pkg.gradient} flex items-center justify-center mt-0.5`}>
                        <Check className="w-2.5 h-2.5 text-white" />
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href={pkg.href}
                  className={
                    pkg.isCustom
                      ? customButtonClass
                      : pkg.featured
                      ? featuredButtonClass
                      : defaultButtonClass
                  }
                >
                  {pkg.isCustom ? "Contact Us" : "Learn More"}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
