import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="who-we-are" className="py-20 md:py-32 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
            <span className="text-sm font-medium text-muted-foreground">
              About Us
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight mb-6">
            The Rhythm of{" "}
            <span className="text-gradient">Business Evolution</span>
          </h2>

          <p className="text-lg md:text-xl font-medium text-primary mb-6">
            Beyond digital tools. Real business transformation.
          </p>

          <p className="text-base md:text-lg text-muted-foreground mb-4">
            We are not just a marketing agency â€” we are{" "}
            <span className="font-semibold text-foreground">
              Operational Architects
            </span>{" "}
            who restructure businesses for scale.
          </p>

          <p className="text-base md:text-lg text-muted-foreground">
            YAZHL moves beyond simple "digital presence" to deliver tangible
            business evolution. We don't just change your website; we change
            your bottom line.
          </p>
        </motion.div>
      </div>
    </section>
  );
};


