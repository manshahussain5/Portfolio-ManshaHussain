"use client";

import React, { useState, useEffect } from "react";
import { Download, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");



  useEffect(() => {
    const sections = [
      "home",
      "about",
      "services",
      "projects",
      "skills",
      "experience",
      "testimonials",
      "contact",
    ];

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const id = href.replace("#", "");
    setActiveSection(id);
    if (window.location.hash !== href) {
      window.history.pushState(null, "", href);
    }

    const target = document.querySelector(href);
    if (target) {
      const lenis = (
        window as unknown as {
          lenis?: {
            scrollTo: (
              target: Element | string,
              options?: { offset?: number; duration?: number }
            ) => void;
          };
        }
      ).lenis;

      if (lenis) {
        lenis.scrollTo(target as HTMLElement, { offset: 0, duration: 1.0 });
      } else {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>


      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-slate-200/80 py-3.5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06)]"
          : "bg-transparent py-5"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Monogram Logo */}
          <motion.a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-2 group transition-transform cursor-pointer"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-white via-slate-50 to-slate-100 border border-slate-200/90 group-hover:border-[#2563EB]/60 transition-colors shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
              <span className="text-xl font-extrabold tracking-tight text-slate-900">
                M<span className="text-[#2563EB]">.</span>
              </span>
            </div>
            <span className="hidden sm:inline-block font-bold text-sm tracking-wide text-slate-800 group-hover:text-[#2563EB] transition-colors">
              Mansha<span className="text-slate-500 font-normal ml-1">Hussain</span>
            </span>
          </motion.a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-3 py-1.5 rounded-full bg-white/70 border border-slate-200/80 backdrop-blur-md shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className={`text-[13px] font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${isActive
                    ? "text-[#2563EB] bg-[#2563EB]/10 font-semibold shadow-sm"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/80"
                    }`}
                >
                  {link.name}
                </motion.a>
              );
            })}
          </nav>

          {/* Action Button: Download CV */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href={portfolioData.personal.resumeUrl}
              download="Mansha-Hussain-CV.pdf"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold tracking-wide uppercase text-white rounded-xl bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#0284C7] hover:brightness-105 transition-all duration-300 shadow-[0_4px_16px_rgba(37,99,235,0.28)] hover:shadow-[0_8px_24px_rgba(37,99,235,0.4)] border border-blue-400/30"
            >
              <Download className="w-3.5 h-3.5 text-white transition-transform group-hover:-translate-y-0.5" />
              <span>Download CV</span>
            </motion.a>
          </div>

          {/* Mobile & Tablet Hamburger Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <motion.a
              whileTap={{ scale: 0.95 }}
              href={portfolioData.personal.resumeUrl}
              download="Mansha-Hussain-CV.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#2563EB] rounded-lg border border-[#2563EB]/30 bg-[#2563EB]/10"
            >
              <Download className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>CV</span>
            </motion.a>
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-slate-900 shadow-sm transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile & Tablet Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -8 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="lg:hidden px-4 pt-3 pb-6 bg-white/95 border-b border-slate-200/80 backdrop-blur-xl shadow-xl overflow-hidden"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => {
                        setMobileMenuOpen(false);
                        handleNavClick(e, link.href);
                      }}
                      className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${isActive
                        ? "text-[#2563EB] bg-[#2563EB]/10 font-semibold"
                        : "text-slate-700 hover:text-slate-950 hover:bg-slate-100"
                        }`}
                    >
                      {link.name}
                    </a>
                  );
                })}
                <div className="pt-3 mt-2 border-t border-slate-200/70">
                  <a
                    href={portfolioData.personal.resumeUrl}
                    download="Mansha-Hussain-CV.pdf"
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-white rounded-xl bg-gradient-to-r from-[#2563EB] to-[#0284C7] shadow-md transition-all"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download CV</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
