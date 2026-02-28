import { motion } from "framer-motion";
import { Video, Users, BarChart3, Target } from "lucide-react";

const services = [
  {
    icon: Video,
    title: "Bespoke Brand Content",
    description:
      "Cinema-quality content that elevates your brand authority and shortens sales cycles.",
    gradient: "from-primary to-violet",
  },
  {
    icon: Users,
    title: "Influencer Marketing",
    description:
      "Strategic partnerships that build trust and position your brand as an industry leader.",
    gradient: "from-violet to-accent",
  },
  {
    icon: BarChart3,
    title: "Research & Strategy",
    description:
      "Data-backed insights that uncover blue ocean opportunities and competitive advantages.",
    gradient: "from-accent to-pink",
  },
  {
    icon: Target,
    title: "Physical Marketing",
    description:
      "Omnichannel campaigns that bridge screen and street for 3Ã— brand recall.",
    gradient: "from-pink to-primary",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-secondary/30 relative">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/3 blur-3xl" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-6">
            <span className="text-sm font-medium text-muted-foreground">
              What We Do
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight mb-6">
            Specialized <span className="text-gradient">Services</span>
          </h2>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions for modern businesses
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-soft">
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-lg font-bold font-display mb-3">
                  {service.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


