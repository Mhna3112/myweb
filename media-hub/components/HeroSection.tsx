"use client";

import React from "react";
import { motion } from "framer-motion";
import { Link2 } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <div className="relative pt-14 pb-8 md:pt-20 md:pb-10 text-center overflow-hidden">
      {/* Background Glow Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#d97757]/10 via-[#cda970]/5 to-transparent blur-[110px] pointer-events-none rounded-full" />

      <div className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-violet-300">
        <Link2 className="h-4 w-4" aria-hidden="true" />
        <span>One link. Available media.</span>
      </div>

      {/* Main Title */}
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white font-display max-w-4xl mx-auto leading-[1.15] px-4"
      >
        Download media, <span className="gradient-text-neon">simply.</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-5 text-base sm:text-lg text-zinc-400 max-w-xl mx-auto font-normal leading-relaxed px-4"
      >
        Paste a public link to see the videos, images, or audio available to download.
      </motion.p>
    </div>
  );
};
