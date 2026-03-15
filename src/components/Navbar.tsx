import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container } from "@/components/Container";
import { MobileDrawer } from "@/components/MobileDrawer";
import { primaryButtonClasses } from "@/components/primaryButtonStyles";
import { useIsMobile } from "@/hooks/use-mobile";
import { useScrollState } from "@/hooks/useScrollState";
import { cn } from "@/lib/utils";
import { openBookCallWhatsApp } from "@/lib/whatsapp";

const navLinks = [
  { href: "#framework", label: "Our Framework" },
  { href: "#who-we-are", label: "Who We Are" },
  { href: "#solutions", label: "Offerings" },
  { href: "/services", label: "Services" },
  { href: "#packages", label: "Packages" },
  { href: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHref, setActiveHref] = useState(navLinks[0].href);
  const [isInHero, setIsInHero] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isScrolled = useScrollState(80);
  const isMobile = useIsMobile();
  const shouldShrinkWidth = isScrolled && !isMobile;
  const useLightNav = isInHero || location.pathname.startsWith("/walkathon");

  const sectionIds = useMemo(() => navLinks.filter((link) => link.href.startsWith("#")).map((link) => link.href), []);

  const navigateTo = (href: string) => {
    if (href.startsWith("/")) {
      navigate(href);
      setIsOpen(false);
      return;
    }

    if (location.pathname !== "/") {
      navigate(`/${href}`);
      setIsOpen(false);
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname !== "/") {
      return;
    }

    const updateActiveSection = () => {
      let current = sectionIds[0];
      const offset = window.scrollY + 170;

      sectionIds.forEach((id) => {
        const element = document.querySelector(id) as HTMLElement | null;
        if (element && offset >= element.offsetTop) {
          current = id;
        }
      });

      setActiveHref(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, [location.pathname, sectionIds]);

  useEffect(() => {
    if (location.pathname !== "/") {
      setIsInHero(false);
      return;
    }

    const updateHeroState = () => {
      const hero = document.querySelector("#hero") as HTMLElement | null;
      const inHero = hero ? hero.getBoundingClientRect().bottom > 120 : false;
      setIsInHero(inHero);
    };

    updateHeroState();
    window.addEventListener("scroll", updateHeroState, { passive: true });
    window.addEventListener("resize", updateHeroState);

    return () => {
      window.removeEventListener("scroll", updateHeroState);
      window.removeEventListener("resize", updateHeroState);
    };
  }, [location.pathname]);

  return (
    <header className="fixed inset-x-0 top-[calc(env(safe-area-inset-top)+0.5rem)] z-50 md:top-4">
      <Container className="flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: -20, width: "100%", maxWidth: 1280 }}
          animate={{
            opacity: 1,
            y: 0,
            width: isMobile ? "100%" : shouldShrinkWidth ? "84%" : "92%",
            maxWidth: isMobile ? 1280 : shouldShrinkWidth ? 980 : 1120,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={cn(
            "mx-auto flex h-16 w-full items-center justify-between rounded-2xl px-4 transition-all duration-300 ease-in-out sm:px-6",
            isScrolled
              ? "border border-[#E5E7EB]/80 bg-white/20 shadow-md backdrop-blur-lg"
              : "border border-[#E5E7EB]/80 bg-white/20 shadow-[0_4px_20px_rgba(0,0,0,0.06)] backdrop-blur-md",
          )}
        >
          <button
            type="button"
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-3"
            aria-label="Go to home"
          >
            <span
              className={cn(
                "inline-flex h-9 w-9 items-center justify-center rounded-full border text-base font-bold",
                useLightNav
                  ? "border-white/35 bg-white/10 text-white"
                  : "border-[#E5E7EB] bg-white text-[#111111]",
              )}
            >
              Y
            </span>
            <span className={cn("text-base font-bold tracking-tight md:text-lg", useLightNav ? "text-white" : "text-[#111111]")}>
              YAZHL
            </span>
          </button>

          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => {
              const isRouteLink = link.href.startsWith("/");
              const isActive = isRouteLink
                ? location.pathname === link.href
                : location.pathname === "/" && activeHref === link.href;

              return (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => navigateTo(link.href)}
                  className={cn(
                    "relative text-sm font-semibold transition-colors duration-300",
                    isActive
                      ? "text-[#7C3AED]"
                      : useLightNav
                        ? "text-white/90 hover:text-[#7C3AED]"
                        : "text-[#111111] hover:text-[#7C3AED]",
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-0.5 bg-[#7C3AED] transition-all duration-300",
                      isActive ? "w-full" : "w-0",
                    )}
                  />
                </button>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <button
              type="button"
              onClick={openBookCallWhatsApp}
              className={primaryButtonClasses({ size: "md", className: "h-9 px-4 text-sm" })}
            >
              Book a Call
            </button>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className={cn(
              "inline-flex h-9 w-9 items-center justify-center rounded-lg border transition-colors md:hidden",
              useLightNav
                ? "border-white/35 text-white hover:border-[#7C3AED] hover:text-[#7C3AED]"
                : "border-[#E5E7EB] text-[#111111] hover:border-[#7C3AED] hover:text-[#7C3AED]",
            )}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </motion.div>
      </Container>

      <MobileDrawer isOpen={isOpen} links={navLinks} onClose={() => setIsOpen(false)} onNavigate={navigateTo} />
    </header>
  );
};
