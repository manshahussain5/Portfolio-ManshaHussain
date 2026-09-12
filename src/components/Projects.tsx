"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import AnimatedHeading from "@/components/AnimatedHeading";

export default function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-[70px] pt-16 pb-10 lg:py-4 xl:py-6 lg:min-h-[calc(100dvh-70px)] lg:flex lg:flex-col lg:justify-center w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
      {/* Section Header */}
      <AnimatedHeading
        title="Projects"
        subtitle="A curated selection of high-impact web platforms, enterprise applications, and data science solutions built for real clients and users."
        rightElement={
          <a
            href={portfolioData.personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200/90 hover:border-[#2563EB]/50 text-xs font-bold text-slate-700 hover:text-slate-900 transition-all duration-300 shadow-sm hover:shadow-[0_4px_16px_rgba(37,99,235,0.12)] hover:-translate-y-0.5"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#2563EB] group-hover:translate-x-1 transition-transform" />
          </a>
        }
        className="mb-4 lg:mb-6"
      />

      {/* Projects Grid: 4 columns on desktop with minimalist cards (image + title) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {portfolioData.projects.map((project) => (
          <a
            key={project.id}
            href={project.liveUrl || project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 hover:border-[#2563EB]/50 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_-10px_rgba(37,99,235,0.18)] flex flex-col cursor-pointer"
          >
            {/* Project Image Container */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 border-b border-slate-200/80">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>

            {/* Project Title Bar */}
            <div className="p-3.5 sm:p-4">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#2563EB] transition-colors truncate">
                {project.title}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
