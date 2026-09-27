"use client";

import React from "react";
import { Link2, Sliders, Download, CheckCircle2 } from "lucide-react";

const STEPS = [
  {
    step: "01",
    title: "Paste URL Link",
    description: "Copy any public video, post, or media URL and paste it into the search box. MediaHub automatically detects the source platform.",
    icon: Link2,
    gradient: "from-violet-500 to-indigo-500",
  },
  {
    step: "02",
    title: "Select Resolution & Format",
    description: "Choose your preferred quality (1080p Full HD, 720p, 480p, MP3 Audio) or select photos in a gallery to create a dynamic ZIP archive.",
    icon: Sliders,
    gradient: "from-indigo-500 to-cyan-500",
  },
  {
    step: "03",
    title: "Instant Direct Download",
    description: "Trigger rapid chunked streaming straight to your device with CORS-bypassing proxy, preserving original bitrate and metadata.",
    icon: Download,
    gradient: "from-cyan-500 to-emerald-500",
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 md:py-24 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-violet-400 bg-violet-500/10 px-3 py-1 rounded-full border border-violet-500/20">
            Simple 3-Step Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display mt-4">
            How MediaHub Works
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            A seamless, frictionless workflow designed to save time while strictly respecting content access rights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative rounded-3xl glass-panel p-8 glass-panel-hover border border-white/5 flex flex-col justify-between group"
              >
                {/* Step Index Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr ${item.gradient} text-white shadow-lg`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-3xl font-black font-display text-white/20 group-hover:text-violet-400/40 transition-colors">
                    {item.step}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2 font-display">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-zinc-500">
                  <CheckCircle2 className="h-4 w-4 text-violet-400" />
                  <span>Public & authorized streams</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
