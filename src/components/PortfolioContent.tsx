"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import AboutMe from "@/components/AboutMe";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import ExperienceEducation from "@/components/ExperienceEducation";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function PortfolioContent() {
  return (
    <main suppressHydrationWarning className="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col selection:bg-[#2563EB] selection:text-white relative overflow-hidden">
      {/* Fixed Sticky Header */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* 4-Metric Statistics Bar */}
      <StatsBar />

      {/* About Me / Who I Am (2-Column with 6 info cards) */}
      <AboutMe />

      {/* Services I Provide (5 Service Cards + Consultation CTA) */}
      <Services />

      {/* Featured Projects / Some Things I've Built */}
      <Projects />

      {/* Technology Stack & Skills */}
      <TechStack />

      {/* Experience & Education (2-Column Timelines) */}
      <ExperienceEducation />

      {/* Testimonials & Endorsements */}
      <Testimonials />

      {/* High-Impact Contact CTA Banner */}
      <ContactCTA />

      {/* Clean Modern Footer */}
      <Footer />
    </main>
  );
}
