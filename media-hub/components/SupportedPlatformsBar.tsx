"use client";

import React from "react";
import Link from "next/link";
import {
  Youtube,
  Music2,
  Twitter,
  Instagram,
  Facebook,
  Globe,
  ArrowRight,
} from "lucide-react";

const PLATFORMS = [
  { name: "YouTube", icon: Youtube, color: "hover:text-red-500 hover:border-red-500/40" },
  { name: "TikTok", icon: Music2, color: "hover:text-cyan-400 hover:border-cyan-500/40" },
  { name: "Twitter / X", icon: Twitter, color: "hover:text-sky-400 hover:border-sky-500/40" },
  { name: "Instagram", icon: Instagram, color: "hover:text-pink-500 hover:border-pink-500/40" },
  { name: "Facebook", icon: Facebook, color: "hover:text-blue-500 hover:border-blue-500/40" },
  { name: "Direct files", icon: Globe, color: "hover:text-violet-400 hover:border-violet-500/40" },
];

export const SupportedPlatformsBar: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-12 px-4 pb-16">
      {/* Subtitle Bar */}
      <div className="flex items-center justify-between text-xs text-zinc-400 mb-4 pb-2 border-b border-white/5">
        <span className="font-semibold uppercase tracking-wider text-zinc-300">
          Popular sources
        </span>
        <Link
          href="/platforms"
          className="flex items-center gap-1 text-violet-400 hover:text-violet-300 font-medium transition-colors"
        >
          <span>All platforms</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <div className="flex flex-wrap gap-2">
        {PLATFORMS.map((p, idx) => {
          const Icon = p.icon;
          return (
            <Link
              key={idx}
              href="/platforms"
              className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 bg-white/[0.02] text-zinc-400 hover:bg-white/[0.06] transition-colors duration-200 group ${p.color}`}
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
              <span className="text-xs font-medium">
                {p.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
