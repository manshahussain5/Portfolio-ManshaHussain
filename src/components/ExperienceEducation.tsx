"use client";

import React, { useState, useEffect } from "react";
import {
  Briefcase,
  GraduationCap,
  Award,
  ShieldCheck,
  ExternalLink,
  MapPin,
  Download,
  BookOpen,
  Layers,
  Globe,
  Database,
  Sparkles,
  Workflow,
  Boxes,
  LucideIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import AnimatedHeading from "@/components/AnimatedHeading";

interface ExperienceTheme {
  initials: string;
  badgeBg: string;
  accentGradient: string;
  glowAura: string;
  cardBorder: string;
  borderHover: string;
  tagStyle: string;
  tagHover: string;
  cardHoverBg: string;
  dotColor?: string;
  titleColor?: string;
}

const EXPERIENCE_THEMES: Record<string, ExperienceTheme> = {
  "exp-1": {
    initials: "QI",
    badgeBg: "bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 text-white shadow-[0_3px_10px_rgba(37,99,235,0.3)]",
    accentGradient: "from-blue-600 via-indigo-600 to-cyan-400",
    glowAura: "from-blue-500/15 via-indigo-500/5 to-transparent",
    cardBorder: "border border-slate-200/90 shadow-[0_6px_22px_rgba(37,99,235,0.07),0_1px_3px_rgba(0,0,0,0.03)]",
    borderHover: "hover:border-blue-300 hover:shadow-[0_12px_32px_rgba(37,99,235,0.15)]",
    tagStyle: "bg-blue-50/80 text-blue-700 border border-blue-200/60",
    tagHover: "hover:bg-blue-600 hover:text-white hover:border-blue-600",
    cardHoverBg: "hover:bg-gradient-to-b hover:from-white hover:via-blue-50/10 hover:to-white",
    dotColor: "bg-blue-600",
    titleColor: "text-slate-900 group-hover:text-[#2563EB]",
  },
  "exp-2": {
    initials: "AL",
    badgeBg: "bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white shadow-[0_3px_10px_rgba(16,185,129,0.3)]",
    accentGradient: "from-emerald-500 via-teal-600 to-cyan-400",
    glowAura: "from-emerald-500/15 via-teal-500/5 to-transparent",
    cardBorder: "border border-slate-200/90 shadow-[0_6px_22px_rgba(16,185,129,0.07),0_1px_3px_rgba(0,0,0,0.03)]",
    borderHover: "hover:border-emerald-300 hover:shadow-[0_12px_32px_rgba(16,185,129,0.15)]",
    tagStyle: "bg-emerald-50/80 text-emerald-700 border border-emerald-200/60",
    tagHover: "hover:bg-emerald-600 hover:text-white hover:border-emerald-600",
    cardHoverBg: "hover:bg-gradient-to-b hover:from-white hover:via-emerald-50/10 hover:to-white",
    dotColor: "bg-emerald-600",
    titleColor: "text-slate-900 group-hover:text-[#2563EB]",
  },
  "exp-3": {
    initials: "FT",
    badgeBg: "bg-gradient-to-br from-purple-600 via-fuchsia-600 to-pink-500 text-white shadow-[0_3px_10px_rgba(168,85,247,0.3)]",
    accentGradient: "from-indigo-500 via-purple-600 to-pink-500",
    glowAura: "from-purple-500/15 via-pink-500/5 to-transparent",
    cardBorder: "border border-slate-200/90 shadow-[0_6px_22px_rgba(168,85,247,0.07),0_1px_3px_rgba(0,0,0,0.03)]",
    borderHover: "hover:border-purple-300 hover:shadow-[0_12px_32px_rgba(168,85,247,0.15)]",
    tagStyle: "bg-purple-50/80 text-purple-700 border border-purple-200/60",
    tagHover: "hover:bg-purple-600 hover:text-white hover:border-purple-600",
    cardHoverBg: "hover:bg-gradient-to-b hover:from-white hover:via-purple-50/10 hover:to-white",
    dotColor: "bg-purple-600",
    titleColor: "text-slate-900 group-hover:text-[#2563EB]",
  },
};

const CERTIFICATION_THEMES: Record<string, ExperienceTheme> = {
  "cert-1": {
    initials: "CP",
    badgeBg: "bg-gradient-to-br from-amber-500 to-orange-500 text-white shadow-[0_3px_10px_rgba(245,158,11,0.25)]",
    accentGradient: "from-amber-500 via-orange-500 to-yellow-400",
    glowAura: "from-amber-500/10 via-orange-500/5 to-transparent",
    cardBorder: "border border-slate-200/90 shadow-[0_4px_18px_rgba(0,0,0,0.03)]",
    borderHover: "hover:border-amber-300 hover:shadow-[0_10px_28px_rgba(245,158,11,0.12)]",
    tagStyle: "bg-slate-50/80 text-slate-700 border border-slate-200/60",
    tagHover: "hover:bg-amber-50/60 hover:text-amber-900 hover:border-amber-200",
    cardHoverBg: "hover:bg-white",
    dotColor: "bg-amber-500",
    titleColor: "text-amber-600 group-hover:text-amber-700",
  },
  "cert-2": {
    initials: "NV",
    badgeBg: "bg-gradient-to-br from-emerald-600 to-teal-600 text-white shadow-[0_3px_10px_rgba(16,185,129,0.25)]",
    accentGradient: "from-emerald-500 via-teal-600 to-cyan-400",
    glowAura: "from-emerald-500/10 via-teal-500/5 to-transparent",
    cardBorder: "border border-slate-200/90 shadow-[0_4px_18px_rgba(0,0,0,0.03)]",
    borderHover: "hover:border-emerald-300 hover:shadow-[0_10px_28px_rgba(16,185,129,0.12)]",
    tagStyle: "bg-slate-50/80 text-slate-700 border border-slate-200/60",
    tagHover: "hover:bg-emerald-50/60 hover:text-emerald-900 hover:border-emerald-200",
    cardHoverBg: "hover:bg-white",
    dotColor: "bg-emerald-500",
    titleColor: "text-emerald-600 group-hover:text-emerald-700",
  },
  "cert-3": {
    initials: "DS",
    badgeBg: "bg-gradient-to-br from-indigo-600 to-blue-600 text-white shadow-[0_3px_10px_rgba(99,102,241,0.25)]",
    accentGradient: "from-indigo-600 via-blue-600 to-cyan-400",
    glowAura: "from-indigo-500/10 via-cyan-500/5 to-transparent",
    cardBorder: "border border-slate-200/90 shadow-[0_4px_18px_rgba(0,0,0,0.03)]",
    borderHover: "hover:border-indigo-300 hover:shadow-[0_10px_28px_rgba(99,102,241,0.12)]",
    tagStyle: "bg-slate-50/80 text-slate-700 border border-slate-200/60",
    tagHover: "hover:bg-indigo-50/60 hover:text-indigo-900 hover:border-indigo-200",
    cardHoverBg: "hover:bg-white",
    dotColor: "bg-indigo-500",
    titleColor: "text-indigo-600 group-hover:text-indigo-700",
  },
  "cert-4": {
    initials: "IE",
    badgeBg: "bg-gradient-to-br from-rose-600 to-pink-600 text-white shadow-[0_3px_10px_rgba(225,29,72,0.25)]",
    accentGradient: "from-rose-500 via-red-600 to-orange-400",
    glowAura: "from-rose-500/10 via-red-500/5 to-transparent",
    cardBorder: "border border-slate-200/90 shadow-[0_4px_18px_rgba(0,0,0,0.03)]",
    borderHover: "hover:border-rose-300 hover:shadow-[0_10px_28px_rgba(225,29,72,0.12)]",
    tagStyle: "bg-slate-50/80 text-slate-700 border border-slate-200/60",
    tagHover: "hover:bg-rose-50/60 hover:text-rose-900 hover:border-rose-200",
    cardHoverBg: "hover:bg-white",
    dotColor: "bg-rose-500",
    titleColor: "text-rose-600 group-hover:text-rose-700",
  },
};

const DEFAULT_THEME: ExperienceTheme = {
  initials: "EXP",
  badgeBg: "bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-[0_3px_10px_rgba(37,99,235,0.3)]",
  accentGradient: "from-blue-600 to-cyan-400",
  glowAura: "from-blue-500/15 to-transparent",
  cardBorder: "border border-slate-200/90 shadow-[0_6px_22px_rgba(37,99,235,0.07)]",
  borderHover: "hover:border-blue-400/80",
  tagStyle: "bg-blue-50 text-blue-700 border border-blue-200",
  tagHover: "hover:bg-blue-600 hover:text-white",
  cardHoverBg: "hover:bg-white",
};

interface CourseworkPillar {
  name: string;
  desc: string;
  icon: LucideIcon;
  iconColor: string;
  iconBg: string;
  borderHover: string;
}

const COURSEWORK_PILLARS: CourseworkPillar[] = [
  {
    name: "Software Architecture",
    desc: "Design Patterns & Scalability",
    icon: Layers,
    iconColor: "text-indigo-600",
    iconBg: "bg-indigo-50 border-indigo-200/80",
    borderHover: "hover:border-indigo-300 hover:shadow-[0_4px_14px_rgba(99,102,241,0.1)]",
  },
  {
    name: "Web Engineering",
    desc: "Full Stack Web & Cloud Systems",
    icon: Globe,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50 border-blue-200/80",
    borderHover: "hover:border-blue-300 hover:shadow-[0_4px_14px_rgba(37,99,235,0.1)]",
  },
  {
    name: "Database Design",
    desc: "Relational Schemas & NoSQL",
    icon: Database,
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-50 border-emerald-200/80",
    borderHover: "hover:border-emerald-300 hover:shadow-[0_4px_14px_rgba(16,185,129,0.1)]",
  },
  {
    name: "Machine Learning & AI",
    desc: "Predictive Models & Deep Learning",
    icon: Sparkles,
    iconColor: "text-purple-600",
    iconBg: "bg-purple-50 border-purple-200/80",
    borderHover: "hover:border-purple-300 hover:shadow-[0_4px_14px_rgba(168,85,247,0.1)]",
  },
  {
    name: "Data Structures & Algorithms",
    desc: "Optimization & Computations",
    icon: Workflow,
    iconColor: "text-amber-600",
    iconBg: "bg-amber-50 border-amber-200/80",
    borderHover: "hover:border-amber-300 hover:shadow-[0_4px_14px_rgba(245,158,11,0.1)]",
  },
  {
    name: "Object-Oriented Programming",
    desc: "Modular & Maintainable Code",
    icon: Boxes,
    iconColor: "text-rose-600",
    iconBg: "bg-rose-50 border-rose-200/80",
    borderHover: "hover:border-rose-300 hover:shadow-[0_4px_14px_rgba(244,63,94,0.1)]",
  },
];

export default function ExperienceEducation() {
  const { experience, education, certifications = [], personal } = portfolioData;
  const [activeTab, setActiveTab] = useState<"experience" | "education" | "certifications">("experience");

  useEffect(() => {
    const handleSetTab = (e: Event) => {
      const customEvent = e as CustomEvent<"experience" | "education" | "certifications">;
      if (customEvent.detail) {
        setActiveTab(customEvent.detail);
      }
    };

    const handleHash = () => {
      if (window.location.hash === "#certifications") {
        setActiveTab("certifications");
      }
    };

    window.addEventListener("set-experience-tab", handleSetTab);
    window.addEventListener("hashchange", handleHash);
    handleHash();

    return () => {
      window.removeEventListener("set-experience-tab", handleSetTab);
      window.removeEventListener("hashchange", handleHash);
    };
  }, []);

  const primaryDegree = education[0] || {
    degree: "BS Software Engineering",
    institution: "Minhaj University - Lahore",
    period: "2021 — 2025",
    description:
      "Core focus on Software Architecture, Web Engineering, Database Design, Data Science, and Machine Learning.",
  };

  const experienceTags: Record<string, string[]> = {
    "exp-1": [
      "Full-Stack Web & Software Engineering",
      "Scalable Backend Architecture & REST APIs",
      "Database Modeling, PostgreSQL & MongoDB",
      "System Integration & Performance Optimization",
    ],
    "exp-2": [
      "MERN Stack & React.js Web Development",
      "Node.js & Express Server-Side Logic",
      "MongoDB Database Design & Optimization",
      "RESTful API Integration & Modern UI Styling",
    ],
    "exp-3": [
      "Strategic Social Media & Brand Campaigns",
      "Targeted Meta Ads (Facebook & Instagram)",
      "Audience Targeting & Conversion Tracking",
      "Campaign Analytics & ROI Optimization",
    ],
  };

  return (
    <section
      id="experience"
      className="relative scroll-mt-[70px] pt-4 sm:pt-6 md:pt-8 pb-6 sm:pb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      {/* Section Header */}
      <AnimatedHeading
        titleBefore="Professional Journey &"
        gradientWord="Education"
        subtitle="Explore verified industry roles, academic credentials, and official certifications."
        align="center"
        className="mb-2 lg:mb-2.5"
        subtitleClassName="max-w-3xl sm:whitespace-nowrap"
      />

      {/* Modern Interactive Tab Segmented Switcher with Clean Square Aesthetics */}
      <div className="flex items-center justify-center mb-3 sm:mb-3.5">
        <div className="inline-flex p-1 rounded-xl bg-white/95 border border-slate-200/90 shadow-xs backdrop-blur-md">
          <button
            onClick={() => setActiveTab("experience")}
            className={`relative flex items-center gap-2 px-3.5 sm:px-4.5 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
              activeTab === "experience"
                ? "text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
            }`}
          >
            {activeTab === "experience" && (
              <motion.div
                layoutId="activeTabBadge"
                className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#2563EB] to-[#0284C7] shadow-[0_2px_12px_rgba(37,99,235,0.3)]"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>Work Experience</span>
              <span
                className={`px-1.5 py-0.2 rounded text-[10px] font-extrabold ${
                  activeTab === "experience"
                    ? "bg-white/20 text-white"
                    : "bg-slate-100 text-slate-600"
                }`}
              >
                {experience.length}
              </span>
            </span>
          </button>

          <button
            onClick={() => setActiveTab("education")}
            className={`relative flex items-center gap-2 px-3.5 sm:px-4.5 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
              activeTab === "education"
                ? "text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
            }`}
          >
            {activeTab === "education" && (
              <motion.div
                layoutId="activeTabBadge"
                className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-600 via-teal-600 to-[#2563EB] shadow-[0_2px_12px_rgba(16,185,129,0.3)]"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>Academic Education</span>
            </span>
          </button>

          <button
            onClick={() => setActiveTab("certifications")}
            className={`relative flex items-center gap-2 px-3.5 sm:px-4.5 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
              activeTab === "certifications"
                ? "text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
            }`}
          >
            {activeTab === "certifications" && (
              <motion.div
                layoutId="activeTabBadge"
                className="absolute inset-0 rounded-lg bg-gradient-to-r from-amber-500 via-orange-500 to-[#2563EB] shadow-[0_2px_12px_rgba(245,158,11,0.3)]"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>Certifications</span>
              <span
                className={`px-1.5 py-0.2 rounded text-[10px] font-extrabold ${
                  activeTab === "certifications"
                    ? "bg-white/20 text-white"
                    : "bg-slate-100 text-slate-600"
                }`}
              >
                {certifications.length}
              </span>
            </span>
          </button>
        </div>
      </div>

      {/* Tab Content Container with Smooth Animation */}
      <AnimatePresence mode="wait">
        {activeTab === "experience" ? (
          <motion.div
            key="experience-tab"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5"
          >
            {experience.map((item, index) => {
              const tags = item.skills || experienceTags[item.id] || [];
              const isCurrent =
                item.period.toLowerCase().includes("present") ||
                item.period.toLowerCase().includes("continue");
              const theme = EXPERIENCE_THEMES[item.id] || DEFAULT_THEME;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className={`group relative p-4 sm:p-5 rounded-xl bg-white/95 backdrop-blur-sm ${theme.cardBorder} ${theme.borderHover} ${theme.cardHoverBg} transition-all duration-300 flex flex-col justify-between h-full overflow-hidden`}
                >
                  {/* Top Accent Stripe with Glow */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${theme.accentGradient} opacity-95 group-hover:opacity-100 group-hover:h-[4px] transition-all duration-300`}
                  />

                  {/* Corner Aura */}
                  <div
                    className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${theme.glowAura} blur-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <div className="relative z-10">
                    {/* Header: Monogram + Company Link + Period */}
                    <div className="flex items-start justify-between gap-2.5 mb-2.5">
                      <div className="flex items-start gap-2.5 min-w-0 flex-1">
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center font-black text-[11px] border shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-105 ${theme.badgeBg}`}
                        >
                          {theme.initials}
                        </div>
                        <div className="min-w-0 flex-1">
                          {item.companyUrl ? (
                            <a
                              href={item.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs sm:text-[13px] font-bold text-slate-900 hover:text-[#2563EB] transition-colors leading-snug block break-words"
                            >
                              {item.company}
                            </a>
                          ) : (
                            <span className="text-xs sm:text-[13px] font-bold text-slate-900 leading-snug block break-words">
                              {item.company}
                            </span>
                          )}
                          <p className="text-[10px] text-slate-600 font-semibold flex items-center gap-1 mt-0.5">
                            <MapPin className="w-2.5 h-2.5 text-slate-500 shrink-0" />
                            <span>{item.location}</span>
                          </p>
                        </div>
                      </div>

                      <span
                        className={`inline-flex items-center gap-1.5 text-[10px] font-semibold px-2 py-0.5 rounded-md border shrink-0 mt-0.5 whitespace-nowrap ${
                          isCurrent
                            ? "bg-emerald-50 text-emerald-700 border-emerald-200/90 shadow-2xs"
                            : "bg-slate-50 text-slate-600 border-slate-200/80"
                        }`}
                      >
                        {isCurrent && (
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                          </span>
                        )}
                        {item.period}
                      </span>
                    </div>

                    {/* Role Title */}
                    <h3 className="text-sm sm:text-[15px] font-bold text-slate-900 group-hover:text-[#2563EB] transition-colors leading-snug mb-1.5">
                      {item.role}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 text-[11.5px] sm:text-xs leading-relaxed mb-3 line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Tech Skills & Core Focus - Exactly 4 Stacked Lines like Services */}
                  <div className="relative z-10 pt-2.5 border-t border-slate-100 space-y-2">
                    {tags.map((tag) => (
                      <div key={tag}>
                        <span
                          className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-lg text-[11px] sm:text-xs font-medium border transition-colors duration-200 ${theme.tagStyle} ${theme.tagHover}`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-current opacity-75 shrink-0" />
                          <span>{tag}</span>
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        ) : activeTab === "education" ? (
          <motion.div
            key="education-tab"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl bg-gradient-to-br from-white via-white to-emerald-50/30 border border-slate-200/90 shadow-[0_8px_30px_rgba(16,185,129,0.08),0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_36px_rgba(16,185,129,0.14)] transition-all duration-300 p-5 sm:p-6 lg:p-7 relative overflow-hidden"
          >
            {/* Top Multi-Color Accent Stripe with Luminous Pulse */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-emerald-500 via-teal-500 to-[#2563EB]" />

            {/* Subtle Ambient Radial Glow */}
            <div className="absolute -bottom-20 -right-20 w-56 h-56 rounded-full bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-transparent blur-3xl pointer-events-none" />
            <div className="absolute -top-20 -left-20 w-48 h-48 rounded-full bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-transparent blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              {/* Left Column: Degree & University Identity */}
              <div className="lg:col-span-5 space-y-3.5 sm:space-y-4">
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ scale: 1.08, rotate: 4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 text-white shadow-[0_4px_16px_rgba(16,185,129,0.3)] flex items-center justify-center shrink-0 cursor-pointer"
                  >
                    <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7" />
                  </motion.div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50/90 border border-emerald-200/90 px-2.5 py-0.5 rounded-md shadow-2xs">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                        </span>
                        <span>Degree Completed</span>
                      </span>
                      <span className="text-xs font-semibold text-slate-500">
                        {primaryDegree.period}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                      {primaryDegree.degree}
                    </h3>
                    <p className="text-sm sm:text-base font-bold bg-gradient-to-r from-[#2563EB] via-indigo-600 to-cyan-600 bg-clip-text text-transparent mt-0.5">
                      {primaryDegree.institution}
                    </p>
                  </div>
                </div>

                <p className="text-[13px] sm:text-sm text-slate-600 leading-relaxed max-w-lg">
                  {primaryDegree.description}
                </p>

                <div className="pt-1 flex flex-wrap items-center gap-3">
                  <motion.a
                    href={personal.resumeUrl}
                    download="Mansha-Hussain-CV.pdf"
                    whileHover={{ scale: 1.03, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className="group/btn relative overflow-hidden inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#0284C7] hover:from-[#1D4ED8] hover:via-[#2563EB] hover:to-[#0284C7] text-white text-xs sm:text-sm font-bold transition-all shadow-[0_4px_16px_rgba(37,99,235,0.3)] hover:shadow-[0_8px_24px_rgba(37,99,235,0.45)]"
                  >
                    <Download className="w-4 h-4 group-hover/btn:translate-y-0.5 transition-transform duration-200" />
                    <span>Download Official CV</span>
                  </motion.a>
                </div>
              </div>

              {/* Right Column: Key Coursework Pillars with Refined Elevation & Slightly Roomier Shape */}
              <div className="lg:col-span-7 bg-white/95 backdrop-blur-xs border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
                <div className="flex items-center justify-between gap-2 mb-3 sm:mb-3.5">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-blue-100/80 text-[#2563EB]">
                      <BookOpen className="w-4 h-4" />
                    </span>
                    <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 uppercase tracking-wider">
                      Core Software Engineering Pillars
                    </h4>
                  </div>
                  <span className="text-[10.5px] sm:text-[11px] font-bold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200/80">
                    6 Specialized Modules
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  {COURSEWORK_PILLARS.map((course, index) => {
                    const IconComponent = course.icon;
                    return (
                      <motion.div
                        key={course.name}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.06 + index * 0.04, duration: 0.25 }}
                        whileHover={{ scale: 1.02, x: 2, transition: { duration: 0.15 } }}
                        className={`group/pillar relative px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl bg-white border border-slate-200/85 ${course.borderHover} hover:bg-slate-50/60 transition-all duration-200 flex items-center gap-3 cursor-default shadow-xs`}
                      >
                        <div
                          className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg border flex items-center justify-center shrink-0 ${course.iconBg} ${course.iconColor} group-hover/pillar:scale-110 group-hover/pillar:rotate-6 transition-transform duration-200 shadow-2xs`}
                        >
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs sm:text-[13px] font-bold text-slate-900 leading-tight group-hover/pillar:text-slate-950 transition-colors">
                            {course.name}
                          </p>
                          <p className="text-[10.5px] sm:text-xs text-slate-500 leading-tight mt-0.5 truncate">
                            {course.desc}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="certifications-tab"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 lg:gap-4"
          >
            {certifications.map((item, index) => {
              const theme = CERTIFICATION_THEMES[item.id] || DEFAULT_THEME;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.07,
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className={`group relative p-4 rounded-xl bg-white/95 backdrop-blur-sm ${theme.cardBorder} ${theme.borderHover} ${theme.cardHoverBg} transition-all duration-300 flex flex-col justify-between h-full overflow-hidden`}
                >
                  {/* Top Accent Stripe with Glow */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${theme.accentGradient} opacity-95 group-hover:opacity-100 group-hover:h-[4px] transition-all duration-300`}
                  />

                  {/* Corner Aura */}
                  <div
                    className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${theme.glowAura} blur-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <div className="relative z-10">
                    {/* Header: Monogram + Issuer & Org + Period Badge */}
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex items-start gap-2.5 min-w-0 flex-1">
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center font-black text-[11px] border shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-105 ${theme.badgeBg}`}
                        >
                          {theme.initials}
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4
                            className="text-xs sm:text-[13px] font-bold text-slate-900 leading-snug truncate"
                            title={item.issuer}
                          >
                            {item.issuer}
                          </h4>
                          <p
                            className="text-[10px] text-slate-500 font-medium truncate mt-0.5"
                            title={item.organization}
                          >
                            {item.organization}
                          </p>
                        </div>
                      </div>

                      <span className="inline-flex items-center text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-50 text-slate-600 border border-slate-200/80 shrink-0 mt-0.5 whitespace-nowrap">
                        {item.period}
                      </span>
                    </div>

                    {/* Certificate Title - Highlighted with Theme Color */}
                    <h3
                      className={`text-[13.5px] sm:text-sm font-extrabold ${theme.titleColor || "text-slate-900"} transition-colors leading-snug mb-2 min-h-[2.4rem] flex items-center`}
                    >
                      {item.title}
                    </h3>

                    {/* Credential Status Row - Perfectly balanced single line */}
                    <div className="flex items-center justify-between gap-2 mb-2.5 text-[10.5px]">
                      {item.grade ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 font-bold border border-emerald-200/80">
                          <ShieldCheck className="w-3 h-3 text-emerald-600 shrink-0" />
                          <span>{item.grade}</span>
                        </span>
                      ) : item.credentialId ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100/90 text-slate-700 font-mono font-semibold border border-slate-200/70">
                          <ShieldCheck className="w-3 h-3 text-slate-500 shrink-0" />
                          <span className="truncate max-w-[130px]">{item.credentialId}</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200/70">
                          <ShieldCheck className="w-3 h-3 text-emerald-600 shrink-0" />
                          <span>Verified</span>
                        </span>
                      )}

                      {item.verificationUrl ? (
                        <a
                          href={item.verificationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[#2563EB] hover:text-blue-700 font-bold hover:underline shrink-0"
                        >
                          <span>Verify</span>
                          <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                      ) : (
                        <span className="text-[10px] text-slate-600 font-semibold shrink-0">
                          Govt. Verified
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Competencies & Skills - Exactly 4 Clean Stacked Lines */}
                  <div className="relative z-10 pt-2.5 border-t border-slate-100 space-y-1.5">
                    {item.skills.map((skill) => (
                      <div key={skill}>
                        <span
                          className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-lg text-[11px] sm:text-xs font-medium border transition-colors duration-200 ${theme.tagStyle} ${theme.tagHover} w-full`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${theme.dotColor || "bg-slate-400"} shrink-0 opacity-80`}
                          />
                          <span className="truncate">{skill}</span>
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
