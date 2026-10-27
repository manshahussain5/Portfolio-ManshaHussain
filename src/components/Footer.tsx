"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, GmailIcon, WhatsAppIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
    <footer className="relative border-t border-slate-200/90 bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100">
          
          {/* Logo & Monogram */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white via-slate-50 to-slate-100 border border-slate-200/90 flex items-center justify-center text-slate-900 font-black text-xl shadow-sm">
              M<span className="text-[#2563EB]">.</span>
            </div>
            <div>
              <span className="font-bold text-slate-900 text-base">Mansha Hussain</span>
              <p className="text-[11px] font-semibold text-slate-600">Software Engineer | Full-Stack Developer | AI Enthusiast</p>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold text-slate-600 hover:text-[#2563EB] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-2.5">
            <a
              href={portfolioData.personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-2xl bg-white border border-slate-200/90 hover:border-[#0A66C2]/60 hover:bg-[#0A66C2]/5 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 shadow-sm hover:shadow-[0_6px_16px_rgba(10,102,194,0.18)]"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>

            <a
              href={portfolioData.personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-2xl bg-white border border-slate-200/90 hover:border-slate-800/60 hover:bg-slate-900/5 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 shadow-sm hover:shadow-[0_6px_16px_rgba(24,23,23,0.15)]"
              aria-label="GitHub"
              title="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>

            <a
              href={portfolioData.personal.socials.email}
              className="w-10 h-10 rounded-2xl bg-white border border-slate-200/90 hover:border-[#EA4335]/60 hover:bg-[#EA4335]/5 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 shadow-sm hover:shadow-[0_6px_16px_rgba(234,67,53,0.18)]"
              aria-label="Gmail"
              title="Gmail"
            >
              <GmailIcon className="w-5 h-5" />
            </a>

            <a
              href={portfolioData.personal.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-2xl bg-white border border-slate-200/90 hover:border-[#2563EB]/60 hover:bg-[#25D366]/5 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 shadow-sm hover:shadow-[0_6px_16px_rgba(37,211,102,0.2)]"
              aria-label="WhatsApp"
              title="WhatsApp"
            >
              <WhatsAppIcon className="w-5 h-5" />
            </a>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Mansha Hussain. All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#0284C7] hover:brightness-105 text-white text-xs font-bold transition-all shadow-[0_4px_12px_rgba(37,99,235,0.25)] hover:-translate-y-0.5"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 transition-transform duration-200 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
