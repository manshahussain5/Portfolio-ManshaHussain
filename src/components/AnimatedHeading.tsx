"use client";

import React from "react";
import { motion } from "framer-motion";

interface AnimatedHeadingProps {
  title?: string;
  gradientWord?: string;
  titleBefore?: string;
  titleAfter?: string;
  subtitle?: string;
  subtitleClassName?: string;
  align?: "left" | "center";
  className?: string;
  rightElement?: React.ReactNode;
}

const smoothTransition = {
  duration: 0.48,
  ease: [0.22, 1, 0.36, 1] as const,
};

export default function AnimatedHeading({
  title,
  gradientWord,
  titleBefore,
  titleAfter,
  subtitle,
  subtitleClassName,
  align = "left",
  className = "mb-10 sm:mb-12",
  rightElement,
}: AnimatedHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`flex ${
        rightElement
          ? "flex-col md:flex-row md:items-end justify-between gap-6"
          : isCenter
          ? "flex-col items-center text-center"
          : "flex-col items-start text-left"
      } ${className}`}
    >
      <div className={`flex flex-col ${isCenter ? "items-center text-center" : "items-start text-left"} max-w-3xl`}>
        {/* Section Heading Text */}
        <motion.h2
          initial={{ opacity: 0, y: 18, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            ...smoothTransition,
            delay: 0,
          }}
          className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-slate-900 leading-[1.18]"
        >
          {titleBefore && <span>{titleBefore} </span>}
          {gradientWord ? (
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {gradientWord}
            </span>
          ) : title ? (
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {title}
            </span>
          ) : null}
          {titleAfter && <span> {titleAfter}</span>}
        </motion.h2>

        {/* Section Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 14, filter: "blur(3px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              ...smoothTransition,
              delay: 0.08,
            }}
            className={`text-slate-600 text-sm sm:text-base mt-2.5 leading-relaxed font-normal ${
              subtitleClassName || "max-w-2xl"
            }`}
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      {/* Right Element (Buttons, controls) */}
      {rightElement && (
        <motion.div
          initial={{ opacity: 0, y: 14, filter: "blur(3px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            ...smoothTransition,
            delay: 0.1,
          }}
          className="self-start md:self-auto shrink-0"
        >
          {rightElement}
        </motion.div>
      )}
    </div>
  );
}
