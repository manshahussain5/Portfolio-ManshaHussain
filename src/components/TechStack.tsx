"use client";

import React from "react";
import { portfolioData, SkillItem } from "@/data/portfolioData";
import AnimatedHeading from "@/components/AnimatedHeading";

const TechIcon = ({ icon }: { icon: string; name: string }) => {
  switch (icon) {
    case "javascript":
      return (
        <div className="w-11 h-11 rounded-xl bg-[#F7DF1E] flex items-center justify-center shadow-[0_2px_8px_rgba(247,223,30,0.3)]">
          <span className="font-black text-black text-lg tracking-tighter leading-none mt-1.5 ml-2.5">
            JS
          </span>
        </div>
      );
    case "typescript":
      return (
        <div className="w-11 h-11 rounded-xl bg-[#3178C6] flex items-center justify-center shadow-[0_2px_8px_rgba(49,120,198,0.3)]">
          <span className="font-black text-white text-lg tracking-tighter leading-none mt-1.5 ml-2.5">
            TS
          </span>
        </div>
      );
    case "react":
      return (
        <div className="w-11 h-11 flex items-center justify-center">
          <svg className="w-10 h-10 text-[#00D8FF]" viewBox="-11.5 -10.23174 23 20.46348" fill="none">
            <circle cx="0" cy="0" r="2.05" fill="#00D8FF" />
            <g stroke="#00D8FF" strokeWidth="1">
              <ellipse rx="11" ry="4.2" />
              <ellipse rx="11" ry="4.2" transform="rotate(60)" />
              <ellipse rx="11" ry="4.2" transform="rotate(120)" />
            </g>
          </svg>
        </div>
      );
    case "nextjs":
      return (
        <div className="w-11 h-11 rounded-full bg-black flex items-center justify-center shadow-sm p-1.5">
          <svg className="w-full h-full text-white" viewBox="0 0 180 180" fill="none">
            <mask id="mask0_next" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
              <circle cx="90" cy="90" r="90" fill="black" />
            </mask>
            <g mask="url(#mask0_next)">
              <circle cx="90" cy="90" r="90" fill="black" />
              <path d="M149.508 157.438L69.1478 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.137 149.508 157.438Z" fill="white" />
              <rect x="115" y="54" width="12" height="72" fill="white" />
            </g>
          </svg>
        </div>
      );
    case "nodejs":
      return (
        <div className="w-11 h-11 flex items-center justify-center">
          <svg className="w-10 h-10" viewBox="0 0 32 32" fill="none">
            <path d="M16 2.5L3.5 9.7V24.3L16 31.5L28.5 24.3V9.7L16 2.5Z" stroke="#5FA04E" strokeWidth="2.2" strokeLinejoin="round" />
            <path d="M10 20V12L16 16V24L10 20Z" fill="#5FA04E" />
            <path d="M22 20V12L16 16V24L22 20Z" fill="#83CD29" />
          </svg>
        </div>
      );
    case "express":
      return (
        <div className="w-11 h-11 rounded-full border-2 border-slate-700 bg-white flex items-center justify-center shadow-sm">
          <span className="font-mono font-bold text-slate-800 text-sm tracking-tighter">
            (ex)
          </span>
        </div>
      );
    case "nestjs":
      return (
        <div className="w-11 h-11 flex items-center justify-center">
          <svg className="w-10 h-10" viewBox="0 0 256 256" fill="none">
            <path d="M246.5 106.6c-4.4-19.1-17.5-35.3-35.2-43.5L144 28c-10.1-4.7-22-4.7-32.1 0L44.7 63.1C27 71.3 13.9 87.5 9.5 106.6c-4.5 19.3.2 39.5 12.8 54.8l67.2 81.5c7.4 9 18.5 14.1 30.2 14.1h16.6c11.7 0 22.8-5.1 30.2-14.1l67.2-81.5c12.6-15.3 17.3-35.5 12.8-54.8z" fill="#E0234E" />
            <path d="M128 58l60 28.1v69.8l-60 28.1-60-28.1V86.1L128 58z" fill="#FFFFFF" />
          </svg>
        </div>
      );
    case "mongodb":
      return (
        <div className="w-11 h-11 flex items-center justify-center">
          <svg className="w-7 h-11" viewBox="0 0 64 128" fill="none">
            <path d="M31.2 0.5C31.2 0.5 24.3 17.5 14.2 34.5C4.1 51.5 0 71.2 0 84.4C0 106.2 14.5 124 31.2 127.5C47.9 124 62.4 106.2 62.4 84.4C62.4 71.2 58.3 51.5 48.2 34.5C38.1 17.5 31.2 0.5 31.2 0.5Z" fill="#13AA52" />
            <path d="M31.2 0.5V127.5C47.9 124 62.4 106.2 62.4 84.4C62.4 71.2 58.3 51.5 48.2 34.5C38.1 17.5 31.2 0.5 31.2 0.5Z" fill="#119246" />
            <path d="M31.2 127.5V105C31.2 105 31.5 40 32.5 35C33.5 30 35 15 31.2 0.5C31.2 0.5 29 25 30 40C31 55 31.2 105 31.2 127.5Z" fill="#FFFFFF" opacity="0.4" />
          </svg>
        </div>
      );
    case "postgresql":
      return (
        <div className="w-11 h-11 flex items-center justify-center">
          <svg className="w-10 h-10" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="46" fill="#336791" />
            <path d="M50 20C33.4 20 20 33.4 20 50C20 62.5 27.6 73.2 38.5 77.8V63.5C36 62.3 34.3 59.7 34.3 56.7C34.3 52.6 37.6 49.3 41.7 49.3C43.5 49.3 45.1 50 46.4 51.1C47.4 46.5 51.5 43 56.4 43C62 43 66.5 47.5 66.5 53.1C66.5 53.8 66.4 54.5 66.2 55.2C68.9 56.4 70.8 59.2 70.8 62.4C70.8 66.7 67.3 70.2 63 70.2H58V79.6C70.9 77.6 80 64.9 80 50C80 33.4 66.6 20 50 20Z" fill="white" />
          </svg>
        </div>
      );
    case "tailwind":
      return (
        <div className="w-11 h-11 flex items-center justify-center">
          <svg className="w-10 h-10 text-[#06B6D4]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
          </svg>
        </div>
      );
    case "python":
      return (
        <div className="w-11 h-11 flex items-center justify-center">
          <svg className="w-10 h-10" viewBox="0 0 128 128" fill="none">
            <path d="M63.5 4.5c-15.3 0-24.5 6.7-24.5 19.6v14.4h25v3.6h-35C13.2 42.1 4 52.4 4 67.5c0 14.8 8.4 24.3 22.8 24.3h8.3v-11.6c0-13.4 11.5-24.6 25.4-24.6h24.5v-3.7H85v-18c0-12.7-10.7-19.4-21.5-19.4zm-10.8 7.4c2.5 0 4.5 2 4.5 4.5s-2 4.5-4.5 4.5-4.5-2-4.5-4.5 2-4.5 4.5-4.5z" fill="#387EB8" />
            <path d="M64.5 123.5c15.3 0 24.5-6.7 24.5-19.6v-14.4h-25v-3.6h35c15.8 0 25-10.3 25-25.4 0-14.8-8.4-24.3-22.8-24.3h-8.3v11.6c0 13.4-11.5 24.6-25.4 24.6H43v3.7h-.5v18c0 12.7 10.7 19.4 22 19.4zm10.8-7.4c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z" fill="#FFE052" />
          </svg>
        </div>
      );
    case "ml":
      return (
        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white shadow-sm">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z" />
            <path d="M9 21h6" />
            <path d="M10 17v4" />
            <path d="M14 17v4" />
          </svg>
        </div>
      );
    case "dl":
      return (
        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-600 to-blue-600 flex items-center justify-center text-white shadow-sm">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="6" cy="6" r="3" fill="currentColor" fillOpacity="0.3" />
            <circle cx="6" cy="18" r="3" fill="currentColor" fillOpacity="0.3" />
            <circle cx="18" cy="12" r="3" fill="currentColor" fillOpacity="0.3" />
            <line x1="8.5" y1="7.5" x2="15.5" y2="10.5" />
            <line x1="8.5" y1="16.5" x2="15.5" y2="13.5" />
          </svg>
        </div>
      );
    case "nlp":
      return (
        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-white shadow-sm">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            <path d="M8 10h.01" />
            <path d="M12 10h.01" />
            <path d="M16 10h.01" />
          </svg>
        </div>
      );
    case "datascience":
      return (
        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-sm">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 3v18h18" />
            <path d="M18 17l-5-5-4 4-4-4" />
            <circle cx="18" cy="17" r="1.5" fill="currentColor" />
            <circle cx="13" cy="12" r="1.5" fill="currentColor" />
            <circle cx="9" cy="16" r="1.5" fill="currentColor" />
          </svg>
        </div>
      );
    case "pandas":
      return (
        <div className="w-11 h-11 rounded-xl bg-[#150458] flex items-center justify-center shadow-sm p-1.5">
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="7" height="7" rx="1.5" fill="#E70488" />
            <rect x="14" y="3" width="7" height="7" rx="1.5" fill="#FFD13B" />
            <rect x="3" y="14" width="7" height="7" rx="1.5" fill="#00A2E8" />
            <rect x="14" y="14" width="7" height="7" rx="1.5" fill="#FFFFFF" />
          </svg>
        </div>
      );
    case "docker":
      return (
        <div className="w-11 h-11 flex items-center justify-center">
          <svg className="w-10 h-10" viewBox="0 0 24 24" fill="#0db7ed">
            <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.186zm0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186zm-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186zm5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185zm-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185zm-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.136a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185zm-2.928 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H2.208a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185m21.758-1.574c-.588-.372-1.928-.598-3.003-.186-.17.065-.29.13-.396.223-.746-.575-1.907-.866-3.32-.866h-.226c-.053 0-.106.002-.158.006-.474-.82-1.282-1.39-2.28-1.576a.183.183 0 00-.092.002c-.066.02-.12.062-.15.12-.03.057-.033.124-.007.185l.707 1.637c-.36.216-.688.484-.967.8a.187.187 0 00-.04.148.187.187 0 00.076.133c.05.037.11.053.17.045.06-.007.116-.037.155-.084.444-.52 1.054-.888 1.737-.992.423-.064.845-.03 1.25.1.066.02.136.012.193-.025a.185.185 0 00.078-.178l-.348-1.742c.57.172 1.036.545 1.34.996a.188.188 0 00.158.082h.276c1.19 0 2.148.243 2.76.702.49.367.757.87.772 1.455.01.425-.13.882-.416 1.36-.04.067-.043.15-.01.22.035.07.1.12.176.134.024.004.05.006.073.006.054 0 .108-.018.152-.054.43-.357.734-.848.88-1.42.158-.62.09-1.32-.198-1.974M.03 13.067c.074.455.203.905.385 1.342 1.134 2.72 3.69 4.394 6.792 4.394 4.542 0 7.82-3.238 12.01-3.238 2.378 0 4.364 1.138 5.438 1.956.12.093.287.086.4-.017.112-.102.138-.266.06-.398-1.282-2.18-3.694-3.56-6.425-3.56-4.52 0-7.8 3.238-12.008 3.238-2.61 0-4.87-1.415-5.918-3.784a6.76 6.76 0 01-.424-1.264.185.185 0 00-.23-.135.188.188 0 00-.13.23c.017.075.034.155.05.236" />
          </svg>
        </div>
      );
    case "aws":
      return (
        <div className="w-11 h-11 rounded-xl bg-[#232F3E] flex flex-col items-center justify-center shadow-sm p-1">
          <span className="text-[10px] font-black tracking-wider text-white leading-none">aws</span>
          <svg className="w-7 h-2 text-[#FF9900]" viewBox="0 0 40 10" fill="currentColor">
            <path d="M0 2C10 8 30 8 40 2C35 9 15 9 0 2Z" />
            <polygon points="36,0 40,3 38,7" />
          </svg>
        </div>
      );
    case "vercel":
      return (
        <div className="w-11 h-11 rounded-full bg-slate-900 flex items-center justify-center shadow-sm">
          <svg className="w-5 h-5 text-white" viewBox="0 0 115 100" fill="currentColor">
            <polygon points="57.5,0 115,100 0,100" />
          </svg>
        </div>
      );
    case "git":
      return (
        <div className="w-11 h-11 flex items-center justify-center">
          <div className="w-9 h-9 rounded-lg bg-[#F05032] rotate-45 flex items-center justify-center shadow-[0_2px_8px_rgba(240,80,50,0.3)]">
            <svg className="w-5 h-5 -rotate-45 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="6" r="2" fill="white" />
              <circle cx="6" cy="18" r="2" fill="white" />
              <circle cx="18" cy="14" r="2" fill="white" />
              <path d="M12 8v5a2 2 0 01-2 2H8" />
              <path d="M12 12l4-1" />
            </svg>
          </div>
        </div>
      );
    case "googleads":
      return (
        <div className="w-11 h-11 flex items-center justify-center">
          <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
            <path
              d="M12.63 2.37a4.25 4.25 0 0 0-5.8 1.55L1.55 13.06a4.25 4.25 0 0 0 1.55 5.8 4.25 4.25 0 0 0 5.8-1.55l5.28-9.14a4.25 4.25 0 0 0-1.55-5.8z"
              fill="#FBBC04"
            />
            <path
              d="M21.09 17.31L15.8 8.17a4.25 4.25 0 0 0-5.8-1.55 4.25 4.25 0 0 0-1.55 5.8l5.29 9.14a4.25 4.25 0 0 0 5.8 1.55 4.25 4.25 0 0 0 1.55-5.8z"
              fill="#4285F4"
            />
            <circle cx="4.45" cy="18.86" r="3.75" fill="#34A853" />
          </svg>
        </div>
      );
    case "metaads":
      return (
        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0081FB] to-[#0064E0] flex items-center justify-center shadow-[0_2px_8px_rgba(0,129,251,0.3)]">
          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.915 4.03C3.514 4.03 1 6.572 1 10.04c0 4.148 3.54 7.548 8.01 9.043 1.01.338 2.072.507 3.136.507s2.127-.17 3.136-.507C19.752 17.587 23 14.187 23 10.04c0-3.468-2.514-6.01-5.915-6.01-2.41 0-4.305 1.3-5.085 2.587-.78-1.287-2.675-2.587-5.085-2.587zm0 2.2c1.782 0 3.328 1.13 3.99 2.808l1.095 2.76-1.095 2.76c-.662 1.678-2.208 2.808-3.99 2.808-2.35 0-4.22-1.89-4.22-4.232 0-2.343 1.87-4.232 4.22-4.232zm10.17 0c2.35 0 4.22 1.89 4.22 4.232 0 2.343-1.87 4.232-4.22 4.232-1.782 0-3.328-1.13-3.99-2.808l-1.095-2.76 1.095-2.76c.662-1.678 2.208-2.808 3.99-2.808z" />
          </svg>
        </div>
      );
    case "sklearn":
      return (
        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#F89939] to-[#3499CD] flex items-center justify-center text-white shadow-sm p-1">
          <span className="font-bold text-[10px] tracking-tight text-white leading-none">
            scikit
          </span>
        </div>
      );
    case "sql":
      return (
        <div className="w-11 h-11 rounded-xl bg-[#00758F] flex items-center justify-center shadow-sm">
          <span className="font-black text-white text-xs tracking-wider">
            SQL
          </span>
        </div>
      );
    case "datavis":
      return (
        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white shadow-sm">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="20" x2="18" y2="10" />
            <line x1="12" y1="20" x2="12" y2="4" />
            <line x1="6" y1="20" x2="6" y2="14" />
          </svg>
        </div>
      );
    case "redux":
      return (
        <div className="w-11 h-11 rounded-xl bg-[#764ABC] flex items-center justify-center text-white shadow-sm">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            <circle cx="12" cy="12" r="3" fill="currentColor" />
          </svg>
        </div>
      );
    case "restapi":
      return (
        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-sm">
          <span className="font-mono font-bold text-[10px] tracking-tight">API</span>
        </div>
      );
    case "postman":
      return (
        <div className="w-11 h-11 rounded-xl bg-[#FF6C37] flex items-center justify-center shadow-sm">
          <span className="font-black text-white text-xs">PM</span>
        </div>
      );
    default:
      return null;
  }
};

function FloatingSkill({ skill }: { skill: SkillItem }) {
  return (
    <div className="group/skill flex flex-col items-center text-center cursor-pointer w-[84px] sm:w-[98px] shrink-0 select-none py-1 transition-transform duration-300 hover:scale-115">
      {/* Brand Logo / Icon */}
      <div className="h-11 flex items-center justify-center mb-1.5 transition-transform duration-300 group-hover/skill:scale-115 group-hover/skill:-translate-y-1">
        <TechIcon icon={skill.icon} name={skill.name} />
      </div>

      {/* Skill Name */}
      <span className="text-[11px] sm:text-xs font-semibold text-slate-800 group-hover/skill:text-[#2563EB] transition-colors leading-tight mb-0.5 whitespace-nowrap block">
        {skill.name}
      </span>

      {/* Percentage */}
      <span className="text-[10px] font-semibold text-slate-600 mb-1">
        {skill.percentage}%
      </span>

      {/* Mini Sleek Progress Bar */}
      <div className="w-12 sm:w-14 h-1 rounded-full bg-slate-200 overflow-hidden">
        <div
          className="h-full rounded-full bg-[#2563EB] transition-all duration-500 ease-out"
          style={{ width: `${skill.percentage}%` }}
        />
      </div>
    </div>
  );
}

function getPaddedList(items: SkillItem[], minCount = 18): SkillItem[] {
  if (items.length === 0) return [];
  let result: SkillItem[] = [];
  while (result.length < minCount) {
    result = [...result, ...items];
  }
  return result;
}

function MarqueeRow({
  items,
  speedPerItem = 1.9,
}: {
  items: SkillItem[];
  speedPerItem?: number;
}) {
  const padded = getPaddedList(items, 20);
  const fullTrack = [...padded, ...padded];
  // Calculate duration so both rows move at the exact same physical velocity (speedPerItem seconds per item)
  const duration = Math.round(padded.length * speedPerItem);

  return (
    <div className="relative w-full overflow-hidden py-1.5">
      <div
        className="animate-marquee-ltr pause-on-hover flex items-center gap-4 sm:gap-6"
        style={{ animationDuration: `${duration}s` }}
      >
        {fullTrack.map((skill, index) => (
          <FloatingSkill key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  // Row 1: Web Development & Digital Marketing (Learning order: JS -> TS -> React -> Next -> Tailwind -> Node -> Express -> Nest -> Mongo -> Git -> Docker -> AWS -> Vercel -> Google Ads -> Meta Ads)
  const webAndMarketingSkills = portfolioData.skills.filter(
    (s) => s.category !== "Data Science"
  );

  // Row 2: Data Science Step-by-Step Roadmap (Python -> SQL -> Pandas & NumPy -> Data Analysis -> Machine Learning -> Deep Learning -> NLP)
  const dataScienceSkills = portfolioData.skills.filter(
    (s) => s.category === "Data Science"
  );

  return (
    <section id="skills" className="relative scroll-mt-[70px] pt-16 pb-10 lg:py-4 xl:py-6 lg:min-h-[calc(100dvh-70px)] lg:flex lg:flex-col lg:justify-center w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
      {/* Section Header */}
      <AnimatedHeading
        title="Technical Skills"
        subtitle="Core technologies, frameworks, and modern developer tooling mastered through enterprise engineering and data science solutions."
        className="mb-4 lg:mb-6"
      />

      {/* Floating Running Stream - Directly on the Page Background */}
      <div className="relative w-full overflow-hidden py-4">
        
        {/* Left & Right Edge Dissolves blending seamlessly with page background #F8FAFC */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 xs:w-14 sm:w-28 md:w-36 bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 xs:w-14 sm:w-28 md:w-36 bg-gradient-to-l from-[#F8FAFC] via-[#F8FAFC]/80 to-transparent z-10" />

        {/* Running Floating Rows - Synchronized Pace */}
        <div className="space-y-3 sm:space-y-4 lg:space-y-5">
          {/* Row 1: Web Development & Digital Marketing */}
          <MarqueeRow items={webAndMarketingSkills} />

          {/* Row 2: Data Science Step-by-Step */}
          <MarqueeRow items={dataScienceSkills} />
        </div>
      </div>
    </section>
  );
}
