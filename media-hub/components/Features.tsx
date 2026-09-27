"use client";

import React from "react";
import {
  Layers,
  Sparkles,
  Archive,
  History,
  ShieldCheck,
  Zap,
  Globe,
  Sliders,
} from "lucide-react";

const FEATURES = [
  {
    icon: Layers,
    title: "Modular Provider Engine",
    description: "Built on an extensible registry architecture. Each platform is isolated into a dedicated backend provider, ensuring maximum stability.",
    color: "from-violet-500/20 to-purple-500/10 text-violet-400 border-violet-500/20",
  },
  {
    icon: Sparkles,
    title: "Original Quality & Bitrate",
    description: "Fetches clean streams without artificial re-encoding. Get crystal-clear 1080p, 4K, or 320kbps audio straight from official endpoints.",
    color: "from-cyan-500/20 to-blue-500/10 text-cyan-400 border-cyan-500/20",
  },
  {
    icon: Archive,
    title: "Dynamic Album ZIP Archiver",
    description: "Encountered a multi-photo post on TikTok, Reddit, or Twitter? Select individual pictures or download the entire gallery packed into a neat ZIP.",
    color: "from-amber-500/20 to-orange-500/10 text-amber-400 border-amber-500/20",
  },
  {
    icon: History,
    title: "Local History & Queue Manager",
    description: "Track all your completed downloads privately in your browser's LocalStorage. Export your history as JSON or restore it whenever needed.",
    color: "from-emerald-500/20 to-teal-500/10 text-emerald-400 border-emerald-500/20",
  },
  {
    icon: Zap,
    title: "CORS-Bypassing Streaming Proxy",
    description: "Native streaming backend proxies eliminate browser CORS issues and enforce automated file naming headers for seamless direct saving.",
    color: "from-rose-500/20 to-pink-500/10 text-rose-400 border-rose-500/20",
  },
  {
    icon: ShieldCheck,
    title: "DRM & Compliance First",
    description: "We respect digital rights. Private accounts, DRM-encrypted movies, and restricted content trigger helpful status notices rather than illegal circumvention.",
    color: "from-blue-500/20 to-indigo-500/10 text-blue-400 border-blue-500/20",
  },
];

export const Features: React.FC = () => {
  return (
    <section className="py-16 md:py-24 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
            Engine Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display mt-4">
            Designed for Speed, Quality & Ethics
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            A comprehensive media extraction suite engineered with production-ready standards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl glass-panel p-7 glass-panel-hover border border-white/5 flex flex-col justify-between"
              >
                <div>
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr ${feat.color} border mb-5`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-display mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
