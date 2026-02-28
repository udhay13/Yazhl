import { Instagram, Linkedin, Twitter, Youtube, Facebook } from "lucide-react";

const productLinks = [
  { href: "#services", label: "Services" },
  { href: "#packages", label: "Packages" },
  { href: "#solutions", label: "Solutions" },
];

const resourceLinks = [
  { href: "#who-we-are", label: "About Us" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Support" },
];

const packageLinks = [
  { href: "#packages", label: "Foundation" },
  { href: "#packages", label: "Presence" },
  { href: "#packages", label: "Scale" },
];

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Facebook, href: "#", label: "Facebook" },
];

export const Footer = () => {
  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-muted/30 py-8">
      <div className="container">
        {/* Main Footer Card */}
        <div className="bg-card rounded-2xl border border-border/50 shadow-sm px-8 py-8">
          {/* Top Section */}
          <div className="flex flex-col lg:flex-row justify-between gap-8 mb-8">
            {/* Brand Section */}
            <div className="max-w-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8">
                  <svg viewBox="0 0 40 40" className="w-full h-full">
                    <defs>
                      <linearGradient id="footerLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="hsl(239, 84%, 67%)" />
                        <stop offset="100%" stopColor="hsl(270, 91%, 65%)" />
                      </linearGradient>
                    </defs>
                    <circle cx="20" cy="20" r="18" fill="url(#footerLogoGrad)" />
                    <path d="M15 12 L20 20 L15 28 M25 12 L20 20 L25 28" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="text-xl font-bold font-display text-foreground">YAZHL</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                YAZHL empowers businesses to craft compelling digital identities â€” making your brand easier to discover, connect, and grow.
              </p>
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div className="flex flex-wrap gap-12 lg:gap-16">
              {/* Services */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">Services</h4>
                <ul className="space-y-3">
                  {productLinks.map((link) => (
                    <li key={link.href}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">Resources</h4>
                <ul className="space-y-3">
                  {resourceLinks.map((link) => (
                    <li key={link.href}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Packages */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">Packages</h4>
                <ul className="space-y-3">
                  {packageLinks.map((link) => (
                    <li key={`${link.label}-${link.href}`}>
                      <button
                        type="button"
                        onClick={() => scrollToSection(link.href)}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border/50" />

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6">
            <p className="text-sm text-muted-foreground">
              Â© 2026 YAZHL. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

