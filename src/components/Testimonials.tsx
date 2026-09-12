"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { LinkedinIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolioData";
import AnimatedHeading from "@/components/AnimatedHeading";

export default function Testimonials() {
  const { testimonials } = portfolioData;
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };

  const next = () => {
    setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  };

  return (
    <section id="testimonials" className="relative scroll-mt-[70px] pt-16 pb-10 lg:py-4 xl:py-6 lg:min-h-[calc(100dvh-70px)] lg:flex lg:flex-col lg:justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <AnimatedHeading
        title="Testimonials"
        subtitle="What clients and mentors say about collaborating on real-world projects."
        className="mb-4 lg:mb-5"
      />

      {/* Testimonials Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5 mb-4 lg:mb-5">
        {testimonials.map((test, index) => (
          <div
            key={test.id}
            className={`p-4 sm:p-5 rounded-3xl bg-white border transition-all duration-300 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.03)] ${
              activeIndex === index
                ? "border-[#2563EB]/60 shadow-[0_15px_35px_rgba(37,99,235,0.12)] -translate-y-1"
                : "border-slate-200/90 hover:border-slate-300"
            }`}
          >
            <div>
              {/* Quote Icon & Stars */}
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2563EB]">
                  <Quote className="w-5 h-5 fill-[#2563EB]/20" />
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>

              {/* Review Text */}
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-3 italic">
                &ldquo;{test.content}&rdquo;
              </p>
            </div>

            {/* Author Profile */}
            <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border border-slate-200 shrink-0 bg-slate-100">
                  <Image
                    src={test.avatar}
                    alt={test.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 leading-tight">
                    {test.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-tight mt-0.5 font-medium">
                    {test.role}
                  </p>
                </div>
              </div>

              {test.linkedinUrl && (
                <a
                  href={test.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-500 hover:text-[#2563EB] transition-colors"
                  aria-label={`${test.name}'s LinkedIn`}
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Dots & Controls */}
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={prev}
          className="p-2.5 rounded-xl bg-white border border-slate-200/90 text-slate-700 hover:text-slate-900 hover:border-[#2563EB] shadow-sm transition-all"
          aria-label="Previous Testimonial"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === i ? "w-6 bg-[#2563EB]" : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="p-2.5 rounded-xl bg-white border border-slate-200/90 text-slate-700 hover:text-slate-900 hover:border-[#2563EB] shadow-sm transition-all"
          aria-label="Next Testimonial"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
