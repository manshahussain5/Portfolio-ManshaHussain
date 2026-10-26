"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, MessageSquare, Sparkles, Award } from "lucide-react";
import { GithubIcon, LinkedinIcon, GmailIcon, WhatsAppIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolioData";
import { motion } from "framer-motion";

export default function Hero() {
  const p = portfolioData.personal;

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] scroll-mt-0 pt-20 pb-12 lg:pt-20 lg:pb-12 flex items-center justify-center overflow-hidden bg-radial-hero"
    >
      {/* Background Decorative Tech Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle light geometric grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
        
        {/* Ambient Iridescent Top Glow */}
        <div className="absolute -top-40 right-1/4 w-96 h-96 bg-[#38BDF8]/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 -left-32 w-80 h-80 bg-[#818CF8]/15 rounded-full blur-[100px] pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Top Greeting Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-blue-200/80 mb-3.5 shadow-[0_2px_10px_rgba(37,99,235,0.08)] backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
              <span className="text-xs font-bold tracking-wide text-slate-700">
                {p.badge}
              </span>
            </motion.div>

            {/* Giant Name Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
              className="text-3xl xs:text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.08] mb-2.5"
            >
              Mansha{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] via-[#0284C7] to-[#38BDF8]">
                Hussain
              </span>
            </motion.h1>

            {/* Subtitle / Role */}
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
              className="text-lg sm:text-2xl font-bold text-slate-800 mb-3.5 flex flex-wrap items-center gap-1.5"
            >
              <span>Software Engineer &amp; </span>
              <span className="text-[#2563EB] font-bold inline-flex items-center gap-1">
                Full-Stack Developer
                <Sparkles className="w-4 h-4 text-[#0284C7] inline" />
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1], delay: 0.24 }}
              className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed mb-6 font-normal"
            >
              {p.tagline}
            </motion.p>

            {/* Primary & Secondary Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1], delay: 0.32 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 mb-7 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-bold text-white rounded-xl bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#0284C7] hover:brightness-105 transition-all duration-300 shadow-[0_10px_25px_rgba(37,99,235,0.28)] hover:shadow-[0_15px_35px_rgba(37,99,235,0.45)] hover:-translate-y-0.5 border border-blue-400/30 w-full xs:w-auto text-center"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-5 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold text-slate-800 hover:text-[#2563EB] rounded-xl bg-white hover:bg-slate-50 border border-slate-200/90 hover:border-[#2563EB]/40 transition-all duration-300 shadow-[0_4px_14px_rgba(0,0,0,0.04)] hover:-translate-y-0.5 w-full xs:w-auto text-center"
              >
                <MessageSquare className="w-4 h-4 text-[#2563EB]" />
                <span>Contact Me</span>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1], delay: 0.38 }}
              className="flex items-center gap-2.5 sm:gap-3 pt-3.5 border-t border-slate-200/80 w-full max-w-md"
            >
              <a
                href={p.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-white border border-slate-200/90 hover:border-[#0A66C2]/60 hover:bg-[#0A66C2]/5 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 shadow-sm hover:shadow-[0_6px_16px_rgba(10,102,194,0.18)]"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>

              <a
                href={p.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-white border border-slate-200/90 hover:border-slate-800/60 hover:bg-slate-900/5 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 shadow-sm hover:shadow-[0_6px_16px_rgba(24,23,23,0.15)]"
                aria-label="GitHub"
                title="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>

              <a
                href={p.socials.email}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-white border border-slate-200/90 hover:border-[#EA4335]/60 hover:bg-[#EA4335]/5 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 shadow-sm hover:shadow-[0_6px_16px_rgba(234,67,53,0.18)]"
                aria-label="Gmail"
                title="Gmail"
              >
                <GmailIcon className="w-5 h-5" />
              </a>

              <a
                href={p.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-white border border-slate-200/90 hover:border-[#25D366]/60 hover:bg-[#25D366]/5 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 shadow-sm hover:shadow-[0_6px_16px_rgba(37,211,102,0.2)]"
                aria-label="WhatsApp"
                title="WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Hero Portrait & Glossy Tech Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="lg:col-span-5 flex items-center justify-center relative mt-6 lg:mt-0"
          >
            <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
              
              {/* Electric Luminous Glow Behind Portrait */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#38BDF8]/30 via-[#60A5FA]/25 to-transparent blur-[60px] animate-pulse-glow" />

              {/* Concentric Decorative Rings */}
              <div className="absolute -inset-4 rounded-full border border-[#2563EB]/15 animate-spin-slow pointer-events-none" />
              <div className="absolute -inset-10 rounded-full border border-dashed border-[#2563EB]/15 pointer-events-none" />

              {/* Modern Rounded Image Frame with Glass specular rim */}
              <div className="relative w-[270px] xs:w-[290px] sm:w-[350px] lg:w-[360px] h-[320px] xs:h-[350px] sm:h-[400px] lg:h-[410px] rounded-3xl overflow-hidden border-2 border-white bg-white shadow-[0_20px_50px_rgba(37,99,235,0.12),0_4px_16px_rgba(0,0,0,0.04)] group">
                <Image
                  src="/images/mansha_studio_v2.jpg"
                  alt="Mansha Hussain - Software Engineer & Full-Stack Developer"
                  fill
                  priority
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105 z-0"
                  sizes="(max-width: 640px) 270px, (max-width: 768px) 350px, 360px"
                />

                {/* Subtle vignette gradient over bottom of image */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent pointer-events-none z-10" />
              </div>

              {/* Floating Card Top-Right: Available for Freelance */}
              <div className="absolute -top-3 right-0 sm:-right-4 z-20 flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl bg-white/95 border border-white backdrop-blur-xl shadow-[0_10px_25px_rgba(0,0,0,0.06)] hover:border-[#2563EB]/40 transition-all hover:scale-105">
                <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-emerald-500" />
                </span>
                <div className="text-left">
                  <p className="text-[9px] sm:text-[10px] font-bold text-slate-600 leading-none mb-0.5 sm:mb-1">Status</p>
                  <p className="text-[11px] sm:text-xs font-bold text-slate-900 leading-none">Available for Work</p>
                </div>
              </div>

              {/* Floating Card Bottom-Left: Experience 2+ Years */}
              <div className="absolute -bottom-4 left-0 sm:-left-6 z-20 flex items-center gap-2.5 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 rounded-2xl bg-white/95 border border-white backdrop-blur-xl shadow-[0_10px_25px_rgba(0,0,0,0.06)] hover:border-[#2563EB]/40 transition-all hover:scale-105">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2563EB]">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs sm:text-sm font-black text-slate-900 leading-tight">2+ Years</p>
                  <p className="text-[10px] sm:text-[11px] font-semibold text-slate-600 leading-tight">Professional Exp.</p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
