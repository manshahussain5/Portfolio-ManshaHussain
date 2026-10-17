"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import AnimatedHeading from "@/components/AnimatedHeading";

// Canvas background colors matching each mockup canvas exactly
const projectBgMap: Record<string, string> = {
  "smart-meal-ai": "#F3C8C4",
  "my-career": "#A8C6EA",
  "watan-cool": "#A0D8D8",
  "riyadh-water": "#A8D8B9",
  "food-safety-system": "#ECABA4",
  "community-chat-app": "#C8B6E2",
};

export default function Projects() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Drag-to-scroll state
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollStartLeft, setScrollStartLeft] = useState(0);
  const [hasDragged, setHasDragged] = useState(false);

  // Check scroll position to enable/disable navigation chevrons
  const checkScroll = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollContainerRef.current;
    if (!el) return;
    // Scroll by the container width to seamlessly show the next batch of cards
    const scrollAmount = el.clientWidth;
    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
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
    setTimeout(() => {
      setHasDragged(false);
    }, 50);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !scrollContainerRef.current) return;
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = x - startX;
    if (Math.abs(walk) > 15) {
      setHasDragged(true);
      scrollContainerRef.current.scrollLeft = scrollStartLeft - walk * 1.2;
    }
  };

  return (
    <section
      id="projects"
      className="relative scroll-mt-[70px] pt-4 sm:pt-6 md:pt-8 pb-6 sm:pb-8 w-full max-w-[1650px] mx-auto px-3 sm:px-6 lg:px-10 xl:px-12 flex flex-col justify-center"
    >
      {/* Section Header */}
      <AnimatedHeading
        title="Projects"
        subtitle="A curated selection of high-impact web platforms, enterprise applications, and data science solutions built for real clients and users."
        rightElement={
          <a
            href={portfolioData.personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200/90 hover:border-[#2563EB]/50 text-xs font-bold text-slate-700 hover:text-slate-900 transition-colors shadow-sm"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#2563EB]" />
          </a>
        }
        className="mb-3 lg:mb-4"
      />

      {/* Row with Left Arrow Outside, Cards Container (Exactly 3 per screen), and Right Arrow Outside */}
      <div className="relative flex items-center gap-2 sm:gap-4 md:gap-5 w-full">
        {/* Scrolling Arrow - Left Side (Outside Container) */}
        <button
          type="button"
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          aria-label="Previous projects"
          className="shrink-0 w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-white shadow-[0_4px_18px_rgba(0,0,0,0.08)] border border-slate-200/90 flex items-center justify-center text-slate-700 hover:text-[#2563EB] hover:bg-slate-50 active:scale-95 disabled:opacity-20 disabled:cursor-not-allowed disabled:hover:text-slate-700 disabled:hover:bg-white disabled:active:scale-100 transition-all z-10"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Scroller Track Container (Exactly 3 Cards per screen on desktop) */}
        <div
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={`flex-1 flex flex-nowrap items-stretch overflow-x-auto scrollbar-none snap-x snap-mandatory gap-4 sm:gap-5 lg:gap-6 py-3 scroll-smooth select-none ${
            isDown ? "cursor-grabbing" : "cursor-grab"
          }`}
        >
          {portfolioData.projects.map((project) => {
            const bgColor = projectBgMap[project.id] || "#A7A8AD";
            const projectUrl = project.liveUrl || project.githubUrl;

            return (
              <a
                key={project.id}
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (hasDragged) {
                    e.preventDefault();
                  }
                }}
                className="w-full sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-3rem)/3)] shrink-0 snap-start flex flex-col group cursor-pointer"
                title={`Open ${project.title} in a new tab`}
              >
                {/* Mockup Box with 4:3 Aspect Ratio matching the 1600x1200 Mockups */}
                <div
                  style={{ backgroundColor: bgColor }}
                  className="relative aspect-[4/3] w-full rounded-[24px] sm:rounded-[28px] overflow-hidden border border-slate-200/80 shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-shadow"
                >
                  <Image
                    src={project.image}
                    alt={`Screenshot and preview of ${project.title}`}
                    fill
                    className="object-contain object-center"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    draggable={false}
                  />
                </div>

                {/* Project Title and Category Underneath */}
                <div className="pt-3 px-1 flex flex-col">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-base sm:text-lg font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent group-hover:opacity-80 transition-opacity leading-tight truncate">
                      {project.title}
                    </h3>
                    {project.liveUrl && (
                      <span className="hidden xs:inline-flex items-center gap-1 text-[11px] font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200/60 shrink-0">
                        Live Demo ↗
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
                    {project.category}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        {/* Scrolling Arrow - Right Side (Outside Container) */}
        <button
          type="button"
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          aria-label="Next projects"
          className="shrink-0 w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-white shadow-[0_4px_18px_rgba(0,0,0,0.08)] border border-slate-200/90 flex items-center justify-center text-slate-700 hover:text-[#2563EB] hover:bg-slate-50 active:scale-95 disabled:opacity-20 disabled:cursor-not-allowed disabled:hover:text-slate-700 disabled:hover:bg-white disabled:active:scale-100 transition-all z-10"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>
    </section>
  );
}
