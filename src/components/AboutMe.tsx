"use client";

import React, { useState } from "react";
import {
  User,
  ArrowRight,
  Copy,
  Check,
  ShieldCheck,
} from "lucide-react";
import { GmailIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolioData";
import AnimatedHeading from "@/components/AnimatedHeading";

export default function AboutMe() {
  const p = portfolioData.personal;
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(p.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="relative scroll-mt-[70px] pt-16 pb-10 lg:py-4 xl:py-6 lg:min-h-[calc(100dvh-70px)] lg:flex lg:flex-col lg:justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <AnimatedHeading
        title="About Me"
        className="mb-3 lg:mb-4"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Structured Paragraph Narrative + Signature + CTA */}
        <div className="lg:col-span-7 flex flex-col items-start">
          {/* Structured Paragraph Narrative */}
          <div className="space-y-2.5 lg:space-y-3 text-slate-600 text-xs sm:text-sm lg:text-[15px] leading-relaxed mb-3 lg:mb-4">
            <p className="text-sm sm:text-base lg:text-[17px] text-slate-800 font-medium leading-relaxed">
              I’m a <span className="text-[#2563EB] font-bold">Full Stack Developer</span> &amp;{" "}
              <span className="text-[#2563EB] font-bold">Data Scientist</span> focused on building scalable web applications, intelligent machine learning systems, and data-driven digital products.
            </p>

            <p>
              I specialize in the <span className="font-semibold text-slate-900">MERN stack, Next.js, Python, and Scikit-learn</span>, with experience in machine learning and data analysis. I focus on turning complex data into practical insights and fast, reliable applications.
            </p>

            <p>
              I also have experience with <span className="font-semibold text-emerald-600">Google Ads and Meta Ads</span>, allowing me to understand both the technical and business sides of digital products.
            </p>
          </div>

          {/* Stylized Handwritten SVG Signature */}
          <div className="my-2 py-1">
            <svg
              className="w-48 sm:w-56 h-14 text-[#0284C7]"
              viewBox="0 0 300 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 20 60 Q 35 15 50 25 Q 65 35 80 20 T 110 50 Q 125 15 140 25 Q 155 35 170 20 Q 185 50 210 25 T 250 35 M 40 50 C 90 45 160 48 270 42"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-90"
              />
              <text
                x="45"
                y="38"
                fill="#0284C7"
                fontFamily="cursive, 'Brush Script MT', sans-serif"
                fontSize="28"
                fontWeight="normal"
                fontStyle="italic"
              >
                Mansha Hussain
              </text>
            </svg>
          </div>

          {/* Action CTA Buttons */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 sm:gap-3 mt-2">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold transition-all shadow-sm hover:shadow-md"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href={p.resumeUrl}
              download="Mansha-Hussain-CV.pdf"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200/90 hover:border-[#2563EB]/40 text-xs font-bold text-slate-700 hover:text-slate-900 transition-all shadow-sm"
            >
              <span>Download Resume</span>
            </a>
          </div>
        </div>

        {/* Right Column: 3D Beautified Profile & Personal Details Card */}
        <div className="lg:col-span-5 w-full relative group/card-wrapper">
          {/* Ambient 3D Radiant Mesh Glow behind card */}
          <div className="absolute -inset-1.5 rounded-[32px] bg-gradient-to-tr from-blue-500/25 via-indigo-500/20 to-purple-500/25 blur-2xl -z-10 opacity-70 group-hover/card-wrapper:opacity-100 transition-all duration-500 group-hover/card-wrapper:scale-[1.02]" />

          {/* Main 3D Card */}
          <div className="relative p-4 sm:p-5 lg:p-6 rounded-3xl bg-white/95 backdrop-blur-2xl border border-white/90 shadow-[0_20px_50px_-12px_rgba(37,99,235,0.13),0_8px_24px_rgba(0,0,0,0.04),inset_0_1px_2px_rgba(255,255,255,0.95)] transition-all duration-300 hover:shadow-[0_28px_65px_-12px_rgba(37,99,235,0.2)] flex flex-col space-y-3 sm:space-y-3.5">
            
            {/* Profile Header */}
            <div className="flex items-center gap-3.5 pb-3 border-b border-slate-100/90">
              <div className="relative">
                {/* 3D Gradient Avatar Cube */}
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2563EB] via-[#4F46E5] to-[#7C3AED] flex items-center justify-center text-white shrink-0 font-bold text-lg shadow-[0_8px_20px_rgba(37,99,235,0.38),inset_0_2px_4px_rgba(255,255,255,0.4)] transform transition-transform duration-300 group-hover/card-wrapper:scale-105 group-hover/card-wrapper:rotate-1">
                  <User className="w-5 h-5 drop-shadow-sm" />
                </div>
                {/* 3D Pulsing Online Badge */}
                <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white shadow-xs" />
                </span>
              </div>

              <div className="min-w-0">
                <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-tight">
                  {p.name}
                </h3>
                <p className="text-xs font-semibold text-[#2563EB] mt-0.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                  Full Stack Engineer &amp; Data Scientist
                </p>
              </div>
            </div>

            {/* 3D Email Bar with Vibrant Gmail Styling */}
            <div className="group/email relative p-2.5 sm:p-3 rounded-2xl bg-gradient-to-r from-red-50/70 via-pink-50/40 to-white border border-red-200/70 shadow-[0_4px_16px_rgba(234,67,53,0.06),inset_0_1px_1px_rgba(255,255,255,0.9)] hover:border-red-400/80 hover:shadow-[0_8px_24px_rgba(234,67,53,0.15)] transition-all duration-300 flex items-center justify-between gap-3 hover:-translate-y-0.5">
              <div className="flex items-center gap-3 min-w-0">
                {/* 3D Gmail Icon Box */}
                <div className="w-9 h-9 rounded-xl bg-white border border-red-100 shadow-[0_4px_12px_rgba(234,67,53,0.15),inset_0_1px_2px_rgba(255,255,255,1)] flex items-center justify-center shrink-0 group-hover/email:scale-105 transition-transform duration-200">
                  <GmailIcon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#EA4335] block">
                    EMAIL ADDRESS
                  </span>
                  <a
                    href={`mailto:${p.email}`}
                    className="text-xs font-bold text-slate-900 hover:text-[#EA4335] transition-colors break-all block"
                  >
                    {p.email}
                  </a>
                </div>
              </div>

              {/* Tactile 3D Copy Button */}
              <button
                onClick={copyEmail}
                className="p-2 rounded-xl bg-white hover:bg-[#EA4335] text-slate-500 hover:text-white border border-slate-200/80 hover:border-[#EA4335] shadow-xs hover:shadow-[0_4px_12px_rgba(234,67,53,0.25)] transition-all duration-200 shrink-0 cursor-pointer hover:scale-105 active:scale-95"
                title="Copy email"
                aria-label="Copy email"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4 transition-colors" />
                )}
              </button>
            </div>

            {/* 4 Details Grid (2x2) with 3D Depth & Dedicated Brand Colors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              
              {/* 1. Location - 3D Sky Blue */}
              <div className="p-2.5 sm:p-3 rounded-2xl bg-gradient-to-br from-sky-50/80 via-white to-blue-50/40 border border-sky-200/70 shadow-[0_4px_14px_rgba(14,165,233,0.08),inset_0_1px_1px_rgba(255,255,255,0.95)] hover:border-sky-400 hover:shadow-[0_8px_24px_rgba(14,165,233,0.2)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-center">
                <span className="text-[10px] font-black uppercase tracking-wider text-sky-600 block mb-0.5">
                  LOCATION
                </span>
                <span className="text-xs font-black text-slate-900">
                  {p.location}
                </span>
              </div>

              {/* 2. Availability / Status - 3D Emerald */}
              <div className="p-2.5 sm:p-3 rounded-2xl bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/40 border border-emerald-200/70 shadow-[0_4px_14px_rgba(16,185,129,0.08),inset_0_1px_1px_rgba(255,255,255,0.95)] hover:border-emerald-400 hover:shadow-[0_8px_24px_rgba(16,185,129,0.2)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-center">
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-600 block mb-0.5">
                  STATUS
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-black text-slate-900">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-xs" />
                  Available
                </span>
              </div>

              {/* 3. Experience - 3D Indigo / Purple */}
              <div className="p-2.5 sm:p-3 rounded-2xl bg-gradient-to-br from-indigo-50/80 via-white to-purple-50/40 border border-indigo-200/70 shadow-[0_4px_14px_rgba(99,102,241,0.08),inset_0_1px_1px_rgba(255,255,255,0.95)] hover:border-indigo-400 hover:shadow-[0_8px_24px_rgba(99,102,241,0.2)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-center">
                <span className="text-[10px] font-black uppercase tracking-wider text-indigo-600 block mb-0.5">
                  EXPERIENCE
                </span>
                <span className="text-xs font-black text-slate-900">
                  {p.experienceYears}
                </span>
              </div>

              {/* 4. Languages - 3D Amber / Orange */}
              <div className="p-2.5 sm:p-3 rounded-2xl bg-gradient-to-br from-amber-50/80 via-white to-orange-50/40 border border-amber-200/70 shadow-[0_4px_14px_rgba(245,158,11,0.08),inset_0_1px_1px_rgba(255,255,255,0.95)] hover:border-amber-400 hover:shadow-[0_8px_24px_rgba(245,158,11,0.2)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-center">
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-600 block mb-0.5">
                  LANGUAGES
                </span>
                <span className="text-xs font-black text-slate-900">
                  {p.languages}
                </span>
              </div>

            </div>

            {/* Bottom Footer Note with 3D Verified Badge */}
            <div className="pt-2.5 border-t border-slate-100/90 flex items-center justify-between text-xs">
              <span className="flex items-center gap-2 font-semibold text-slate-600">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2563EB]" />
                </span>
                Open to Remote &amp; Hybrid roles
              </span>
              
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white text-[11px] font-bold shadow-[0_4px_12px_rgba(37,99,235,0.28)] hover:scale-105 transition-transform">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Dev</span>
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
