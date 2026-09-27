"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DownloadCloud,
  Layers,
  History,
  Menu,
  X,
  Sparkles,
} from "lucide-react";
import { useQueue } from "@/lib/context/queue-context";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { queue, setIsQueueOpen } = useQueue();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const activeCount = queue.filter(
    (item) => item.status === "downloading" || item.status === "queued"
  ).length;

  const navLinks = [
    { label: "Home", href: "/", icon: DownloadCloud },
    { label: "Platforms", href: "/platforms", icon: Layers },
    { label: "History", href: "/history", icon: History },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#474641] bg-[#262624]/90 backdrop-blur-xl transition-all">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-50 focus:rounded-md focus:bg-[#f7f5ef] focus:px-3 focus:py-2 focus:text-[#292823]">
        Skip to content
      </a>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-violet-600 via-indigo-600 to-cyan-500 p-0.5 shadow-lg shadow-violet-500/20 group-hover:shadow-violet-500/40 transition-all duration-300">
            <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-[#2e2d2a]">
              <Sparkles className="h-5 w-5 text-violet-400 group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-bold tracking-tight text-white font-display">
                Media<span className="text-violet-400">Hub</span>
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? "bg-white/10 text-white shadow-sm border border-white/10"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon className={`h-4 w-4 ${isActive ? "text-violet-400" : "text-zinc-400"}`} />
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Status indicator & Queue Drawer trigger */}
        <div className="flex items-center gap-3">
          {/* Queue Button */}
          <button
            onClick={() => setIsQueueOpen(true)}
            className="relative flex items-center gap-2 rounded-xl border border-violet-500/30 bg-violet-600/10 px-3.5 py-2 text-sm font-medium text-violet-300 hover:bg-violet-600/20 hover:border-violet-500/50 transition-all group"
            aria-label="View download queue"
          >
            <DownloadCloud className="h-4 w-4 text-violet-400 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline">Queue</span>
            {queue.length > 0 && (
              <span
                className={`flex h-5 items-center justify-center rounded-full px-1.5 text-[11px] font-bold ${
                  activeCount > 0
                    ? "bg-violet-500 text-white animate-pulse"
                    : "bg-zinc-800 text-zinc-300"
                }`}
              >
                {queue.length}
              </span>
            )}
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-3 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#474641] bg-[#2e2d2a] px-4 pt-2 pb-4 space-y-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium ${
                  isActive
                    ? "bg-violet-600/20 text-violet-300 border border-violet-500/30"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon className="h-4 w-4" />
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
};
