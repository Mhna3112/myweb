"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Layers,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  ExternalLink,
  ShieldCheck,
  Zap,
  Sparkles,
} from "lucide-react";
import { ProviderCapability } from "@/lib/providers/types";

export default function PlatformsPage() {
  const [platforms, setPlatforms] = useState<ProviderCapability[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/platforms")
      .then((res) => res.json())
      .then((data) => {
        if (data.platforms) setPlatforms(data.platforms);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-10 text-center sm:text-left">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400 hover:text-white transition-colors mb-4"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to Downloader</span>
        </Link>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1 justify-center sm:justify-start">
              <span className="rounded-full bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300 border border-violet-500/20">
                Capability Matrix
              </span>
              <span className="text-xs text-zinc-400">11 Active Engines</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
              Supported Platforms & Formats
            </h1>
            <p className="text-sm text-zinc-400 mt-2 max-w-2xl">
              Detailed specifications, supported media types, extraction limits, and compliance restrictions for all connected network providers.
            </p>
          </div>
        </div>
      </div>

      {/* Grid of Platform Cards */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((n) => (
            <div
              key={n}
              className="h-64 rounded-3xl glass-panel animate-pulse border border-white/5"
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {platforms.map((p) => (
            <div
              key={p.id}
              className="rounded-3xl glass-panel p-7 glass-panel-hover border border-white/5 flex flex-col justify-between"
            >
              <div>
                {/* Platform Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 border border-white/10"
                      style={{ color: p.color }}
                    >
                      <Layers className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white font-display">
                        {p.name}
                      </h3>
                      <p className="text-xs text-zinc-400 font-mono">
                        {p.domains.join(" • ")}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 justify-end max-w-[150px]">
                    {p.supportedTypes.map((type) => (
                      <span
                        key={type}
                        className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] font-bold text-zinc-300 uppercase border border-white/5"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features List */}
                <div className="mt-4 space-y-2">
                  <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                    Key Features
                  </h4>
                  <ul className="space-y-1.5">
                    {p.features.map((feat, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-xs text-zinc-300"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Restrictions & DRM Box */}
                <div className="mt-5 rounded-xl border border-amber-500/20 bg-amber-500/5 p-3 text-xs text-amber-200/90 flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-amber-300">Policy: </span>
                    <span>{p.restrictions}</span>
                  </div>
                </div>
              </div>

              {/* Action Button to Test */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] text-zinc-500 truncate max-w-[240px]">
                  Eg: {p.exampleUrl}
                </span>

                <Link
                  href="/"
                  className="flex items-center gap-1 text-xs font-semibold text-violet-400 hover:text-violet-300 transition-colors"
                >
                  <span>Test in App</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
