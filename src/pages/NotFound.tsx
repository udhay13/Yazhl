import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { Container } from "@/components/Container";
import { primaryButtonClasses } from "@/components/primaryButtonStyles";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <PageTransition className="flex min-h-screen items-center bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="mx-auto max-w-xl rounded-2xl border border-[#E5E7EB] bg-white p-10 text-center shadow-sm"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9CA3AF]">Error</p>
          <h1 className="mt-3 text-6xl font-bold tracking-tight text-[#111111] md:text-7xl">404</h1>
          <p className="mt-4 text-lg text-[#6B7280]">Oops! Page not found</p>
          <Link to="/" className={primaryButtonClasses({ size: "lg", className: "mt-7" })}>
            Return to Home
          </Link>
        </motion.div>
      </Container>
    </PageTransition>
  );
};

export default NotFound;
