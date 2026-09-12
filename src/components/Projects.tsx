"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, Eye } from "lucide-react";
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
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Mouse drag-to-scroll state
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollStartLeft, setScrollStartLeft] = useState(0);
  const [hasDragged, setHasDragged] = useState(false);

  // Check scroll boundary to toggle button states
  const updateScrollState = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  // Smooth scroll handler
  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const cardWidth = 390; // Approximate card width + gap
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }
  };

  // Drag-to-scroll handlers for desktop
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
    const walk = (x - startX) * 1.5;
    if (Math.abs(walk) > 5) {
      setHasDragged(true);
    }
    scrollContainerRef.current.scrollLeft = scrollStartLeft - walk;
  };

  return (
    <section
      id="projects"
      className="relative scroll-mt-[70px] pt-16 pb-12 lg:py-6 lg:min-h-[calc(100dvh-70px)] lg:flex lg:flex-col lg:justify-center w-full max-w-[1650px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12"
    >
      {/* Section Header with Scrolling Controls */}
      <AnimatedHeading
        title="Projects"
        subtitle="A curated selection of high-impact web platforms, enterprise applications, and data science solutions built for real clients and users."
        rightElement={
          <div className="flex items-center gap-3">
            {/* Left & Right Chevron Navigation Controls */}
            <div className="hidden sm:flex items-center gap-1.5 p-1 bg-white border border-slate-200/90 rounded-2xl shadow-sm">
              <button
                type="button"
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                aria-label="Scroll projects left"
                className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-700 hover:text-slate-900 hover:bg-slate-100 disabled:opacity-30 disabled:hover:bg-transparent disabled:cursor-not-allowed transition-all duration-200"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                aria-label="Scroll projects right"
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
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200/90 hover:border-[#2563EB]/50 text-xs font-bold text-slate-700 hover:text-slate-900 transition-all duration-300 shadow-sm hover:shadow-[0_4px_16px_rgba(37,99,235,0.12)] hover:-translate-y-0.5"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#2563EB] group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        }
        className="mb-4 lg:mb-6"
      />

      {/* Scroller Container Area */}
      <div className="relative group/scroller">
        {/* Floating Left Scroll Button (Desktop) */}
        {canScrollLeft && (
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="hidden md:flex absolute left-2 top-[38%] -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.15)] border border-slate-200/90 items-center justify-center text-slate-700 hover:text-[#2563EB] hover:scale-110 active:scale-95 transition-all duration-200"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Floating Right Scroll Button (Desktop) */}
        {canScrollRight && (
          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="hidden md:flex absolute right-2 top-[38%] -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.15)] border border-slate-200/90 items-center justify-center text-slate-700 hover:text-[#2563EB] hover:scale-110 active:scale-95 transition-all duration-200"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Horizontal Scrolling Track */}
        <div
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={`flex flex-nowrap overflow-x-auto scrollbar-none snap-x snap-mandatory gap-5 sm:gap-6 pt-2 pb-5 px-1 scroll-smooth select-none ${
            isDown ? "cursor-grabbing" : "cursor-grab"
          }`}
        >
          {portfolioData.projects.map((project) => {
            const bgColor = projectBgMap[project.id] || "#D2D8E2";

            return (
              <a
                key={project.id}
                href={project.liveUrl || project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (hasDragged) {
                    e.preventDefault();
                  }
                }}
                className="w-[280px] xs:w-[320px] sm:w-[350px] md:w-[380px] shrink-0 snap-start flex flex-col group cursor-pointer"
              >
                {/* Square Mockup Box */}
                <div
                  style={{ backgroundColor: bgColor }}
                  className="relative aspect-square w-full rounded-[28px] overflow-hidden border border-slate-200/70 shadow-[0_8px_25px_rgba(0,0,0,0.04)] group-hover:shadow-[0_20px_45px_rgba(0,0,0,0.14)] transition-all duration-300 group-hover:-translate-y-1.5"
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
                  <div className="absolute inset-0 bg-slate-900/10 backdrop-blur-[1.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <div className="w-14 h-14 rounded-2xl bg-[#0F3D78] shadow-xl flex items-center justify-center transform scale-90 group-hover:scale-100 transition-all duration-300 border border-white/20">
                      <Eye className="w-6 h-6 text-[#F08234]" />
                    </div>
                  </div>
                </div>

                {/* Project Title and Category Underneath the Box */}
                <div className="pt-3.5 px-1 flex flex-col">
                  <h3 className="text-base sm:text-lg font-bold text-[#F08234] group-hover:text-[#EA580C] transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
                    {project.category}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
