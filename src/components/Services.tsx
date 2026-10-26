"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import AnimatedHeading from "@/components/AnimatedHeading";

interface ServiceTheme {
  color: string;
  topGradient: string;
  bgAura: string;
  tagStyle: string;
  tagDot: string;
  borderHover: string;
  shadowHover: string;
}

const SERVICE_THEMES: Record<string, ServiceTheme> = {
  "web-dev": {
    color: "group-hover:text-blue-600",
    topGradient: "from-blue-500 via-indigo-500 to-cyan-400",
    bgAura: "from-blue-500/10 via-cyan-500/5 to-transparent",
    tagStyle:
      "bg-blue-50/80 text-blue-900 border-blue-200/60 hover:bg-blue-100/90 hover:border-blue-300",
    tagDot: "bg-blue-500",
    borderHover: "hover:border-blue-400/60",
    shadowHover: "hover:shadow-[0_22px_45px_-12px_rgba(37,99,235,0.18)]",
  },
  "ai-solutions": {
    color: "group-hover:text-purple-600",
    topGradient: "from-purple-500 via-fuchsia-500 to-pink-500",
    bgAura: "from-purple-500/10 via-fuchsia-500/5 to-transparent",
    tagStyle:
      "bg-purple-50/80 text-purple-900 border-purple-200/60 hover:bg-purple-100/90 hover:border-purple-300",
    tagDot: "bg-purple-500",
    borderHover: "hover:border-purple-400/60",
    shadowHover: "hover:shadow-[0_22px_45px_-12px_rgba(168,85,247,0.18)]",
  },
  "data-science": {
    color: "group-hover:text-purple-600",
    topGradient: "from-purple-500 via-fuchsia-500 to-pink-500",
    bgAura: "from-purple-500/10 via-fuchsia-500/5 to-transparent",
    tagStyle:
      "bg-purple-50/80 text-purple-900 border-purple-200/60 hover:bg-purple-100/90 hover:border-purple-300",
    tagDot: "bg-purple-500",
    borderHover: "hover:border-purple-400/60",
    shadowHover: "hover:shadow-[0_22px_45px_-12px_rgba(168,85,247,0.18)]",
  },
  "google-meta-ads": {
    color: "group-hover:text-rose-600",
    topGradient: "from-rose-500 via-pink-500 to-purple-500",
    bgAura: "from-rose-500/10 via-pink-500/5 to-transparent",
    tagStyle:
      "bg-rose-50/80 text-rose-900 border-rose-200/60 hover:bg-rose-100/90 hover:border-rose-300",
    tagDot: "bg-rose-500",
    borderHover: "hover:border-rose-400/60",
    shadowHover: "hover:shadow-[0_22px_45px_-12px_rgba(244,63,94,0.18)]",
  },
  "performance-marketing": {
    color: "group-hover:text-rose-600",
    topGradient: "from-rose-500 via-pink-500 to-purple-500",
    bgAura: "from-rose-500/10 via-pink-500/5 to-transparent",
    tagStyle:
      "bg-rose-50/80 text-rose-900 border-rose-200/60 hover:bg-rose-100/90 hover:border-rose-300",
    tagDot: "bg-rose-500",
    borderHover: "hover:border-rose-400/60",
    shadowHover: "hover:shadow-[0_22px_45px_-12px_rgba(244,63,94,0.18)]",
  },
};

const DEFAULT_THEME: ServiceTheme = {
  color: "group-hover:text-blue-600",
  topGradient: "from-blue-500 via-indigo-500 to-cyan-400",
  bgAura: "from-blue-500/10 via-indigo-500/5 to-transparent",
  tagStyle: "bg-blue-50/80 text-blue-900 border-blue-200/60",
  tagDot: "bg-blue-500",
  borderHover: "hover:border-blue-400/60",
  shadowHover: "hover:shadow-[0_22px_45px_-12px_rgba(37,99,235,0.18)]",
};

export default function Services() {
  const getTheme = (id: string): ServiceTheme => {
    return SERVICE_THEMES[id] || DEFAULT_THEME;
  };

  return (
    <section id="services" className="relative scroll-mt-[70px] pt-16 pb-10 lg:py-4 xl:py-6 lg:min-h-[calc(100dvh-70px)] lg:flex lg:flex-col lg:justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Decorative Background Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-400/10 via-indigo-400/5 to-purple-400/10 blur-3xl pointer-events-none -z-10 rounded-full" />

      {/* Section Header */}
      <AnimatedHeading
        titleBefore="High-Impact"
        gradientWord="Services"
        subtitle="End-to-end digital engineering, intelligent machine learning systems, and ROI-focused marketing solutions tailored to scale seamlessly and drive real business outcomes."
        align="center"
        className="mb-4 lg:mb-6"
      />

      {/* 3 Service Cards Grid (1 Row on Desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5 max-w-7xl mx-auto">
        {portfolioData.services.map((service) => {
          const theme = getTheme(service.id);

          return (
            <div
              key={service.id}
              className={`group relative p-5 sm:p-6 lg:p-5 xl:p-6 rounded-3xl bg-white/95 backdrop-blur-sm border border-slate-200/90 ${theme.borderHover} transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] ${theme.shadowHover} overflow-hidden`}
            >
              {/* Top Accent Gradient Bar */}
              <div
                className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${theme.topGradient} opacity-70 group-hover:opacity-100 group-hover:h-[4px] transition-all duration-300`}
              />

              {/* Ambient Radial Mesh in Card Corner */}
              <div
                className={`absolute -top-16 -right-16 w-36 h-36 rounded-full bg-gradient-to-br ${theme.bgAura} blur-2xl pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div>
                {/* Title & Description */}
                <h3
                  className={`text-base sm:text-lg lg:text-[17px] xl:text-[18px] font-bold text-slate-900 tracking-tight leading-snug mb-2 min-h-0 md:min-h-[2.75rem] lg:min-h-[3rem] flex items-center ${theme.color} transition-colors duration-200`}
                >
                  {service.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 lg:mb-5 min-h-0 md:min-h-[3.75rem] lg:min-h-[4rem]">
                  {service.description}
                </p>
              </div>

              {/* Feature Tags with custom colored dots - Exactly 4 stacked lines */}
              <div className="space-y-2 pt-1">
                {service.features.map((feat) => (
                  <div key={feat} className="w-full">
                    <span
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors duration-200 max-w-full ${theme.tagStyle}`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${theme.tagDot} shrink-0 opacity-80`} />
                      <span className="break-words leading-tight">{feat}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

