"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, Eye, ExternalLink } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import AnimatedHeading from "@/components/AnimatedHeading";

// Canvas background colors matching the mockups
const projectBgMap: Record<string, string> = {
  "smart-meal-ai": "#BAC4D8",
  "my-career": "#CFD5DF",
  "watan-cool": "#CCD2DC",
  "riyadh-water": "#D2D8E2",
  "food-safety-system": "#ECABA4",
  "community-chat-app": "#4A586E",
};

export default function Projects() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Drag-to-scroll state
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollStartLeft, setScrollStartLeft] = useState(0);
  const [hasDragged, setHasDragged] = useState(false);

  // Scroll detection to highlight whichever card is currently centered
  const handleScroll = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    const cards = container.querySelectorAll<HTMLElement>("[data-project-card]");
    let closestIndex = 0;
    let minDistance = Infinity;

    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const dist = Math.abs(containerCenter - cardCenter);
      if (dist < minDistance) {
        minDistance = dist;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  }, []);

  // Set up scroll listener
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      el.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [handleScroll]);

  // Programmatic smooth scroll to center a specific project card
  const selectProject = (index: number) => {
    const boundedIndex = Math.max(0, Math.min(index, portfolioData.projects.length - 1));
    setActiveIndex(boundedIndex);
    const container = scrollContainerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll<HTMLElement>("[data-project-card]");
    const target = cards[boundedIndex];
    if (target) {
      const targetCenter = target.offsetLeft + target.offsetWidth / 2;
      const containerCenter = container.clientWidth / 2;
      container.scrollTo({
        left: Math.max(0, targetCenter - containerCenter),
        behavior: "smooth",
      });
    }
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDown(true);
    setHasDragged(false);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollStartLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.4;
    if (Math.abs(walk) > 6) {
      setHasDragged(true);
    }
    scrollContainerRef.current.scrollLeft = scrollStartLeft - walk;
  };

  return (
    <section
      id="projects"
      className="relative scroll-mt-[70px] pt-4 sm:pt-6 md:pt-8 pb-6 sm:pb-8 w-full max-w-[1650px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 flex flex-col justify-center"
    >
      {/* Section Header with Left/Right Navigation */}
      <AnimatedHeading
        title="Projects"
        subtitle="A curated selection of high-impact web platforms, enterprise applications, and data science solutions built for real clients and users."
        rightElement={
          <div className="flex items-center gap-3">
            {/* Left & Right Chevron Controls */}
            <div className="flex items-center gap-1.5 p-1 bg-white border border-slate-200/90 rounded-2xl shadow-sm">
              <button
                type="button"
                onClick={() => selectProject(activeIndex - 1)}
                disabled={activeIndex === 0}
                aria-label="Previous project"
                className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-700 hover:text-slate-900 hover:bg-slate-100 disabled:opacity-30 disabled:hover:bg-transparent disabled:cursor-not-allowed transition-all duration-200"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => selectProject(activeIndex + 1)}
                disabled={activeIndex === portfolioData.projects.length - 1}
                aria-label="Next project"
                className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-700 hover:text-slate-900 hover:bg-slate-100 disabled:opacity-30 disabled:hover:bg-transparent disabled:cursor-not-allowed transition-all duration-200"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* View All Projects on GitHub */}
            <a
              href={portfolioData.personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200/90 hover:border-[#2563EB]/50 text-xs font-bold text-slate-700 hover:text-slate-900 transition-all duration-300 shadow-sm hover:shadow-[0_4px_16px_rgba(37,99,235,0.12)] hover:-translate-y-0.5"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#2563EB] group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        }
        className="mb-3 lg:mb-4"
      />

      {/* Scroller Track Container */}
      <div className="relative">
        <div
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={`flex flex-nowrap items-center overflow-x-auto scrollbar-none snap-x snap-mandatory gap-4 sm:gap-6 py-4 px-4 sm:px-8 md:px-[calc(50%-190px)] scroll-smooth select-none ${
            isDown ? "cursor-grabbing" : "cursor-grab"
          }`}
        >
          {portfolioData.projects.map((project, index) => {
            const bgColor = projectBgMap[project.id] || "#D2D8E2";
            const isActive = index === activeIndex;

            return (
              <div
                key={project.id}
                data-project-card
                onClick={(e) => {
                  if (hasDragged) {
                    e.preventDefault();
                    return;
                  }
                  if (!isActive) {
                    selectProject(index);
                  }
                }}
                className={`shrink-0 flex flex-col group cursor-pointer transition-all duration-500 ease-out ${
                  isActive
                    ? "w-[280px] xs:w-[320px] sm:w-[360px] md:w-[390px] z-20 scale-100 opacity-100"
                    : "w-[190px] xs:w-[220px] sm:w-[250px] md:w-[275px] z-10 scale-[0.92] opacity-60 hover:opacity-85"
                }`}
              >
                {/* Square Mockup Box with Viewport Constraint */}
                <div
                  style={{ backgroundColor: bgColor }}
                  className={`relative aspect-square max-h-[min(300px,42vh)] w-full rounded-[24px] sm:rounded-[28px] overflow-hidden transition-all duration-500 ease-out ${
                    isActive
                      ? "border-2 border-[#F08234]/70 shadow-[0_20px_45px_rgba(0,0,0,0.18)] ring-4 ring-[#F08234]/15 -translate-y-1"
                      : "border border-slate-200/70 shadow-[0_6px_20px_rgba(0,0,0,0.04)]"
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={`Screenshot and preview of ${project.title}`}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 320px, 400px"
                    draggable={false}
                  />

                  {/* Centered Eye Preview Badge on Hover */}
                  <div className="absolute inset-0 bg-slate-900/15 backdrop-blur-[1.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#0F3D78] shadow-xl flex items-center justify-center transform scale-90 group-hover:scale-100 transition-all duration-300 border border-white/20">
                      <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-[#F08234]" />
                    </div>
                  </div>

                  {/* Active Card Live Link Direct Button */}
                  {isActive && (project.liveUrl || project.githubUrl) && (
                    <a
                      href={project.liveUrl || project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="absolute top-3 right-3 z-30 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md shadow-md flex items-center justify-center text-slate-700 hover:text-[#2563EB] hover:scale-110 transition-all duration-200"
                      title="Open live site"
                      aria-label={`Open live site for ${project.title}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>

                {/* Project Title and Category Underneath */}
                <div className="pt-3 px-1 flex flex-col transition-all duration-300">
                  <div className="flex items-center justify-between gap-2">
                    <h3
                      className={`font-bold transition-all duration-300 leading-tight ${
                        isActive
                          ? "text-base sm:text-lg md:text-xl text-[#F08234]"
                          : "text-sm sm:text-base text-slate-700 truncate"
                      }`}
                    >
                      {project.title}
                    </h3>
                    {isActive && (
                      <a
                        href={project.liveUrl || project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="hidden xs:inline-flex items-center gap-1 text-[11px] font-bold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100/80 px-2.5 py-0.5 rounded-full border border-blue-200/60 transition-colors shrink-0"
                      >
                        Live Demo ↗
                      </a>
                    )}
                  </div>
                  <p
                    className={`font-medium transition-colors duration-300 mt-0.5 ${
                      isActive
                        ? "text-xs sm:text-sm text-slate-500"
                        : "text-[11px] sm:text-xs text-slate-400"
                    }`}
                  >
                    {project.category}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Dots Pagination */}
        <div className="flex items-center justify-center gap-2 mt-3 sm:mt-4">
          {portfolioData.projects.map((p, idx) => (
            <button
              key={p.id}
              type="button"
              onClick={() => selectProject(idx)}
              aria-label={`Jump to project ${p.title}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === activeIndex
                  ? "w-8 bg-[#F08234] shadow-sm"
                  : "w-2.5 bg-slate-200 hover:bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
