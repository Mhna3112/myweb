"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  History,
  Trash2,
  Download,
  Search,
  Upload,
  FileDown,
  Filter,
  Film,
  Sparkles,
  ArrowLeft,
  Calendar,
  HardDrive,
} from "lucide-react";
import { useQueue, HistoryItem } from "@/lib/context/queue-context";
import { formatBytes } from "@/lib/utils";

export default function HistoryPage() {
  const { history, removeFromHistory, clearHistory, exportHistory, importHistory } =
    useQueue();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState<string>("all");

  // Calculate statistics
  const totalDownloads = history.length;
  const totalBytes = history.reduce((acc, curr) => acc + (curr.filesize || 0), 0);
  const platformsUsed = new Set(history.map((h) => h.platform)).size;

  // Filter history
  const filteredHistory = history.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.filename.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPlatform =
      selectedPlatform === "all" || item.platform === selectedPlatform;
    return matchesSearch && matchesPlatform;
  });

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (content) {
        const success = importHistory(content);
        if (success) {
          alert("Download history successfully imported!");
        } else {
          alert("Invalid history file format.");
        }
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400 hover:text-white transition-colors mb-2"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Downloader</span>
          </Link>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600/20 text-violet-400 border border-violet-500/30">
              <History className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white font-display">
                Download History
              </h1>
              <p className="text-xs text-zinc-400">
                100% saved in your local browser storage
              </p>
            </div>
          </div>
        </div>

        {/* Action buttons: Export / Import / Clear */}
        <div className="flex flex-wrap items-center gap-2">
          <label className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 px-3 py-2 text-xs font-medium text-zinc-300 hover:text-white cursor-pointer transition-all">
            <Upload className="h-3.5 w-3.5" />
            <span>Import JSON</span>
            <input
              type="file"
              accept=".json"
              onChange={handleFileUpload}
              className="hidden"
            />
          </label>

          <button
            onClick={exportHistory}
            disabled={history.length === 0}
            className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 px-3 py-2 text-xs font-medium text-zinc-300 hover:text-white disabled:opacity-40 transition-all"
          >
            <FileDown className="h-3.5 w-3.5" />
            <span>Export JSON</span>
          </button>

          {history.length > 0 && (
            <button
              onClick={() => {
                if (confirm("Are you sure you want to clear your download history?")) {
                  clearHistory();
                }
              }}
              className="flex items-center gap-1.5 rounded-xl border border-red-500/20 bg-red-500/10 hover:bg-red-500/20 px-3 py-2 text-xs font-medium text-red-300 hover:text-red-200 transition-all"
            >
              <Trash2 className="h-3.5 w-3.5" />
              <span>Clear History</span>
            </button>
          )}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="rounded-2xl glass-panel p-5 border border-white/5">
          <div className="flex items-center justify-between text-zinc-400 text-xs mb-2">
            <span>Total Downloads</span>
            <Download className="h-4 w-4 text-violet-400" />
          </div>
          <p className="text-2xl font-bold text-white font-display">{totalDownloads}</p>
        </div>

        <div className="rounded-2xl glass-panel p-5 border border-white/5">
          <div className="flex items-center justify-between text-zinc-400 text-xs mb-2">
            <span>Total Downloaded Data</span>
            <HardDrive className="h-4 w-4 text-cyan-400" />
          </div>
          <p className="text-2xl font-bold text-white font-display">
            {formatBytes(totalBytes)}
          </p>
        </div>

        <div className="rounded-2xl glass-panel p-5 border border-white/5">
          <div className="flex items-center justify-between text-zinc-400 text-xs mb-2">
            <span>Platforms Used</span>
            <Sparkles className="h-4 w-4 text-amber-400" />
          </div>
          <p className="text-2xl font-bold text-white font-display">
            {platformsUsed}
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search through downloaded titles or filenames..."
            className="w-full rounded-xl bg-white/[0.03] border border-white/10 pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500"
          />
        </div>

        {/* Platform Selector */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
          {["all", "youtube", "tiktok", "twitter", "reddit", "instagram", "facebook", "generic"].map(
            (p) => (
              <button
                key={p}
                onClick={() => setSelectedPlatform(p)}
                className={`rounded-xl px-3 py-2 text-xs font-medium capitalize shrink-0 transition-all ${
                  selectedPlatform === p
                    ? "bg-violet-600 text-white shadow-sm"
                    : "bg-white/[0.03] text-zinc-400 hover:text-white border border-white/5"
                }`}
              >
                {p}
              </button>
            )
          )}
        </div>
      </div>

      {/* History Items Grid */}
      {filteredHistory.length === 0 ? (
        <div className="rounded-3xl glass-panel border border-white/5 p-12 text-center text-zinc-500 flex flex-col items-center justify-center">
          <History className="h-12 w-12 text-zinc-600 mb-3 stroke-[1.5]" />
          <h3 className="text-base font-semibold text-zinc-300">
            {history.length === 0 ? "No download history yet" : "No matching downloads found"}
          </h3>
          <p className="text-xs text-zinc-500 mt-1 max-w-sm">
            {history.length === 0
              ? "Your downloaded files and audio will appear here for easy reference and redownload."
              : "Try adjusting your search query or platform filter to find what you're looking for."}
          </p>
          {history.length === 0 && (
            <Link
              href="/"
              className="mt-5 rounded-xl bg-violet-600 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-violet-600/30 hover:bg-violet-500 transition-all"
            >
              Start Downloading Media
            </Link>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredHistory.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl glass-panel p-4 border border-white/5 flex flex-col justify-between hover:border-violet-500/30 transition-all group"
            >
              <div>
                <div className="flex items-start gap-3 mb-3">
                  <div className="relative h-16 w-16 rounded-xl overflow-hidden bg-black/50 shrink-0 border border-white/10">
                    {item.thumbnail ? (
                      <img
                        src={item.thumbnail}
                        alt=""
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-zinc-600">
                        <Film className="h-6 w-6" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <span className="rounded-full bg-violet-500/20 px-2 py-0.5 text-[10px] font-semibold text-violet-300 uppercase tracking-wider">
                        {item.platform}
                      </span>
                      <button
                        onClick={() => removeFromHistory(item.id)}
                        className="text-zinc-500 hover:text-red-400 p-1 transition-colors"
                        title="Delete from history"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <h3 className="text-xs font-semibold text-white truncate mt-1">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-zinc-400 truncate mt-0.5 font-mono">
                      {item.filename}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[11px] text-zinc-400">
                  <span className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] font-bold uppercase text-zinc-300">
                    {item.extension}
                  </span>
                  <span>{item.quality}</span>
                  {item.filesize && (
                    <span>• {formatBytes(item.filesize)}</span>
                  )}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-500">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  <span>{new Date(item.downloadedAt).toLocaleDateString()}</span>
                </span>

                <Link
                  href={`/?url=${encodeURIComponent(item.originalUrl)}`}
                  className="text-violet-400 hover:text-violet-300 font-medium"
                >
                  Analyze Again
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
