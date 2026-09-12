"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, AlertCircle, Loader2 } from "lucide-react";
import { GmailIcon, WhatsAppIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolioData";
import AnimatedHeading from "@/components/AnimatedHeading";

export default function ContactCTA() {
  const { personal } = portfolioData;
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to dispatch message.");
      }

      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 8000);
    } catch (err: unknown) {
      const msg =
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please reach out via email directly.";
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative scroll-mt-[70px] pt-16 pb-10 lg:py-4 xl:py-6 lg:min-h-[calc(100dvh-70px)] lg:flex lg:flex-col lg:justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Container with Radiant Iridescent Pearl & Blue Aura */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-white via-[#f0f6ff] to-[#e1effe] border border-blue-200/80 p-4 sm:p-6 lg:p-6 xl:p-8 shadow-[0_25px_60px_-15px_rgba(37,99,235,0.18)]">
        
        {/* Ambient Radial Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#38BDF8]/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#818CF8]/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-7 xl:gap-8 items-stretch">
          
          {/* Left Column: Heading & Contact Channels */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full text-left">
            <div>
              <AnimatedHeading
                title="Have a Project in Mind?"
                subtitle="I'm always interested in new opportunities, complex engineering challenges, and high-impact data science projects. Let's build something extraordinary together."
                className="mb-3 sm:mb-4"
              />
            </div>

            {/* Quick Contact Badges */}
            <div className="space-y-2 sm:space-y-2.5 pt-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 w-full">
                
                {/* Email Card */}
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-2xl bg-white/95 border border-slate-200/90 hover:border-[#EA4335]/60 hover:bg-white transition-all group shadow-sm hover:shadow-[0_6px_18px_rgba(234,67,53,0.12)] hover:-translate-y-0.5"
                >
                  <div className="w-9 h-9 rounded-xl bg-red-50/80 border border-red-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <GmailIcon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">Email</p>
                    <p className="text-xs font-bold text-slate-900 group-hover:text-[#EA4335] transition-colors break-words sm:break-all xl:break-normal leading-tight">
                      {personal.email}
                    </p>
                  </div>
                </a>

                {/* WhatsApp Card */}
                <a
                  href={personal.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-2xl bg-white/95 border border-slate-200/90 hover:border-[#25D366]/60 hover:bg-white transition-all group shadow-sm hover:shadow-[0_6px_18px_rgba(37,211,102,0.12)] hover:-translate-y-0.5"
                >
                  <div className="w-9 h-9 rounded-xl bg-emerald-50/80 border border-emerald-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <WhatsAppIcon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">Phone / WhatsApp</p>
                    <p className="text-xs font-bold text-slate-900 group-hover:text-[#25D366] transition-colors leading-tight">
                      {personal.phone}
                    </p>
                  </div>
                </a>

                {/* Location Card */}
                <div className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-2xl bg-white/95 border border-slate-200/90 shadow-sm">
                  <div className="w-9 h-9 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center justify-center text-[#2563EB] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">Location</p>
                    <p className="text-xs font-bold text-slate-900 leading-tight">
                      {personal.location}
                    </p>
                  </div>
                </div>

                {/* Availability Card */}
                <div className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-2xl bg-white/95 border border-slate-200/90 shadow-sm">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50/80 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">Availability</p>
                    <p className="text-xs font-bold text-slate-900 flex items-center gap-1.5 leading-tight">
                      Open for Work
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                      </span>
                    </p>
                  </div>
                </div>

              </div>

              {/* Response Time Footnote */}
              <div className="flex items-center gap-2 px-1 pt-0.5 text-xs text-slate-500">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Direct response guaranteed within 24 hours &bull; Available worldwide</span>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Interactive Message Form */}
          <div className="lg:col-span-5 w-full flex flex-col justify-center">
            <div className="p-3.5 sm:p-5 rounded-2xl sm:rounded-3xl bg-white/95 border border-slate-200/90 backdrop-blur-xl shadow-xl h-full flex flex-col justify-between">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-0.5 tracking-tight">Send Me a Message</h3>
                <p className="text-xs text-slate-500 mb-2.5 leading-relaxed">
                  Fill out the brief form below and I will respond to your inquiry within 24 hours.
                </p>

                {isSubmitted ? (
                  <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-center animate-in zoom-in-95 duration-200">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Message Delivered!</h4>
                    <p className="text-xs text-slate-600 mb-3">
                      Thank you for reaching out! Your inquiry has been forwarded directly to Mansha.
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs font-bold text-[#2563EB] hover:underline cursor-pointer"
                    >
                      Send another message &rarr;
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-2.5">
                    {errorMessage && (
                      <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-2 animate-in fade-in duration-200">
                        <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold">{errorMessage}</p>
                          <p className="mt-1 text-[11px] text-amber-800">
                            You can also email directly:{" "}
                            <a
                              href={`mailto:${personal.email}`}
                              className="font-bold underline hover:text-[#2563EB]"
                            >
                              {personal.email}
                            </a>
                          </p>
                        </div>
                      </div>
                    )}

                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-bold text-slate-800 mb-1">
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        placeholder="e.g. Alex Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#2563EB] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 text-xs sm:text-sm text-slate-900 placeholder-slate-500 transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold text-slate-800 mb-1">
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#2563EB] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 text-xs sm:text-sm text-slate-900 placeholder-slate-500 transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-xs font-bold text-slate-800 mb-1">
                        Your Message
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={3}
                        placeholder="Tell me about your project scope, timeline, or engineering needs..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#2563EB] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 text-xs sm:text-sm text-slate-900 placeholder-slate-500 transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-xl bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#0284C7] hover:brightness-105 text-white text-xs font-bold tracking-wide uppercase transition-all shadow-[0_10px_25px_rgba(37,99,235,0.3)] hover:shadow-[0_15px_35px_rgba(37,99,235,0.45)] disabled:opacity-50 mt-1 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Dispatching Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Me a Message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
