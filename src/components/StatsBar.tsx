"use client";

import React from "react";
import { FolderCheck, Users, Briefcase, Layers } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function StatsBar() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "FolderCheck":
        return <FolderCheck className="w-5 h-5 text-[#2563EB]" />;
      case "Users":
        return <Users className="w-5 h-5 text-[#2563EB]" />;
      case "Briefcase":
        return <Briefcase className="w-5 h-5 text-[#2563EB]" />;
      case "Layers":
      default:
        return <Layers className="w-5 h-5 text-[#2563EB]" />;
    }
  };

  return (
    <section className="relative z-20 mt-5 sm:mt-8 mb-5 sm:mb-8 px-3.5 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="rounded-2xl sm:rounded-3xl bg-white/85 border border-white p-4 sm:p-8 backdrop-blur-xl shadow-[0_20px_50px_-10px_rgba(37,99,235,0.08),0_4px_16px_rgba(0,0,0,0.03)]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 md:divide-x md:divide-slate-200/80">
          {portfolioData.stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex items-center gap-2.5 sm:gap-4 ${
                idx !== 0 ? "md:pl-6 lg:pl-8" : ""
              } group transition-all`}
            >
              {/* Icon Container with subtle glossy shine */}
              <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50/60 border border-blue-200/70 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-[#2563EB] group-hover:shadow-[0_4px_12px_rgba(37,99,235,0.15)] transition-all">
                {getIcon(stat.icon)}
              </div>

              {/* Numbers and Labels */}
              <div>
                <p className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight group-hover:text-[#2563EB] transition-colors leading-tight">
                  {stat.value}
                </p>
                <p className="text-[10.5px] xs:text-[11px] sm:text-xs lg:text-sm font-semibold text-slate-600 leading-tight">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
