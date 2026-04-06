import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Container } from "@/components/Container";
import { Globe } from "@/components/ui/globe";

const landingLinks = [
  { href: "#who-we-are", label: "Who We Are" },
  { href: "#framework", label: "Our Framework" },
  { href: "#solutions", label: "Offerings" },
  { href: "#services", label: "Services" },
];

const packageLinks = [
  { href: "#packages", label: "The Starter" },
  { href: "#packages", label: "The Growth" },
  { href: "#packages", label: "Yazhl Elite" },
  { href: "#packages", label: "Customizable" },
];

const socialLinks = [
  // { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "https://www.instagram.com/yazhl_connect?igsh=MWp0NHNjaDU5aDNudQ==", label: "Instagram" },
  // { icon: Linkedin, href: "#", label: "LinkedIn" },
  // { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61588273242903", label: "Facebook" },
];

export const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const onSectionClick = (href: string) => {
    if (href.startsWith("#")) {
      if (location.pathname !== "/") {
        navigate(`/${href}`);
        return;
      }

      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    if (href === "/contact") {
      navigate("/contact");
    }
  };

  return (
    <footer className="relative overflow-hidden border-t border-[#E5E7EB] bg-white py-16">
      <div className="pointer-events-none absolute inset-0 z-20">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/15 to-white/0" />
        <div className="absolute -right-20 -bottom-24 h-[320px] w-[320px] opacity-45 sm:-right-24 sm:-bottom-28 sm:h-[420px] sm:w-[420px] md:-right-28 md:-bottom-36 md:h-[500px] md:w-[500px] lg:-right-32 lg:-bottom-44 lg:h-[620px] lg:w-[620px]">
          <Globe className="scale-[1.02]" />
        </div>
      </div>

      <Container className="relative z-10">
        {/* Main grid — brand column + 2 link columns */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[2fr_1fr_1fr] lg:gap-16">

          {/* Brand column */}
          <div className="flex flex-col items-start gap-5">
            <button type="button" onClick={() => navigate("/")} className="inline-flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E7EB] text-lg font-bold text-[#111111]">
                Y
              </span>
              <span className="text-xl font-semibold text-[#111111]">YAZHL</span>
            </button>
            <p className="max-w-xs text-sm leading-relaxed text-[#374151]">
              Your growth partner for visibility that converts and marketing that sells.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#E5E7EB] text-[#6B7280] transition-colors hover:border-[#7C3AED] hover:text-[#7C3AED]"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation + Packages side by side on all screen sizes */}
          <div className="grid grid-cols-2 gap-6 lg:contents">

            {/* Navigation column */}
            <div className="flex flex-col items-start">
              <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#111111]">Navigation</h4>
              <ul className="mt-4 space-y-3">
                {landingLinks.map((link) => (
                  <li key={link.href}>
                    <button
                      type="button"
                      onClick={() => onSectionClick(link.href)}
                      className="text-sm text-[#6B7280] transition-colors hover:text-[#7C3AED]"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    type="button"
                    onClick={() => onSectionClick("/contact")}
                    className="text-sm text-[#6B7280] transition-colors hover:text-[#7C3AED]"
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>

            {/* Packages column */}
            <div className="flex flex-col items-start">
              <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#111111]">Packages</h4>
              <ul className="mt-4 space-y-3">
                {packageLinks.map((link) => (
                  <li key={`${link.label}-${link.href}`}>
                    <button
                      type="button"
                      onClick={() => onSectionClick(link.href)}
                      className="text-sm text-[#374151] transition-colors hover:text-[#7C3AED]"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#E5E7EB] pt-6 text-sm text-[#6B7280] sm:flex-row">
          <p>Copyright 2026 YAZHL. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link to="/privacy-policy" className="transition-colors hover:text-[#7C3AED]">Privacy Policy</Link>
            <Link to="/terms-of-service" className="transition-colors hover:text-[#7C3AED]">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
