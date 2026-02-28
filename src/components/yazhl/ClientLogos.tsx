import { motion } from "framer-motion";

const clients = [
  { name: "TechVentures", logo: "https://picsum.photos/120/120?random=1" },
  { name: "UrbanScape", logo: "https://picsum.photos/120/120?random=2" },
  { name: "NexGen", logo: "https://picsum.photos/120/120?random=3" },
  { name: "Innovate Labs", logo: "https://picsum.photos/120/120?random=4" },
  { name: "CloudFirst", logo: "https://picsum.photos/120/120?random=5" },
  { name: "DataFlow", logo: "https://picsum.photos/120/120?random=6" },
  { name: "GreenTech", logo: "https://picsum.photos/120/120?random=7" },
  { name: "SmartBiz", logo: "https://picsum.photos/120/120?random=8" },
];

export const ClientLogos = () => {
  return (
    <section className="py-12 md:py-16 bg-secondary/30 overflow-hidden">
      <div className="container mb-8">
        <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Trusted by Industry Leaders
        </p>
      </div>

      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Scrolling container */}
        <div className="flex">
          <motion.div
            className="flex gap-12 md:gap-16"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {/* Double the logos for seamless loop */}
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center px-4"
              >
                {/* Logo image only */}
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-20 h-20 rounded-lg object-cover"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};


