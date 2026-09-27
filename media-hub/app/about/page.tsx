"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  ArrowLeft,
  Lock,
  FileText,
  AlertTriangle,
  Scale,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
      {/* Header */}
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400 hover:text-white transition-colors mb-4"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to Downloader</span>
        </Link>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600/20 text-violet-400 border border-violet-500/30">
            <Scale className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-white font-display">
              About & Legal Compliance
            </h1>
            <p className="text-sm text-zinc-400 mt-1">
              Ethical media extraction, content protection principles, and terms of service.
            </p>
          </div>
        </div>
      </div>

      {/* Manifesto Section */}
      <div className="rounded-3xl glass-panel p-8 border border-white/5 space-y-4">
        <span className="rounded-full bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-300 border border-violet-500/20">
          Our Guiding Philosophy
        </span>
        <h2 className="text-2xl font-bold text-white font-display">
          Responsible & Ethical Media Processing
        </h2>
        <p className="text-sm text-zinc-300 leading-relaxed">
          MediaHub Downloader is built with a singular mission: to provide creators, educators, researchers, and everyday internet users with a clean, dependable tool for archiving media they have the right or authorization to access.
        </p>
        <p className="text-sm text-zinc-400 leading-relaxed">
          We believe in an open web while rigorously respecting the boundaries set by content creators and digital platform architectures. We do not engage in unauthorized decryption, watermark removal via destructive alteration, or bypassing paywalls.
        </p>
      </div>

      {/* DRM Compliance Policy */}
      <div id="drm" className="rounded-3xl glass-panel p-8 border border-white/5 space-y-4">
        <div className="flex items-center gap-2 text-amber-400">
          <Lock className="h-5 w-5" />
          <h2 className="text-xl font-bold text-white font-display">
            DRM & Anti-Circumvention Policy
          </h2>
        </div>
        <p className="text-sm text-zinc-300 leading-relaxed">
          MediaHub strictly adheres to anti-circumvention provisions of the Digital Millennium Copyright Act (DMCA) and international copyright treaties.
        </p>
        <ul className="space-y-2 text-xs sm:text-sm text-zinc-400">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>
              <strong>Unencrypted Streams Only:</strong> We process only unencrypted, publicly accessible HTTP progressive streams or official open API formats.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>
              <strong>No DRM Decryption:</strong> We will never bypass Widevine, FairPlay, PlayReady, or any other digital rights management cryptographic systems.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>
              <strong>Private Accounts Respected:</strong> Media posted behind private profiles, password locks, or member-only paywalls cannot and will not be parsed.
            </span>
          </li>
        </ul>
      </div>

      {/* Terms of Service */}
      <div id="terms" className="rounded-3xl glass-panel p-8 border border-white/5 space-y-4">
        <div className="flex items-center gap-2 text-violet-400">
          <FileText className="h-5 w-5" />
          <h2 className="text-xl font-bold text-white font-display">
            Terms of Service
          </h2>
        </div>
        <div className="space-y-3 text-xs sm:text-sm text-zinc-400 leading-relaxed">
          <p>
            By accessing or using MediaHub Downloader, you agree to comply with these terms. You represent and warrant that you will only use this service to download media which you have created, are licensed to download, or which is released under public domain or permissive Creative Commons licenses.
          </p>
          <p>
            You agree not to use this service for commercial distribution of copyrighted works without explicit written authorization from the respective rights holder.
          </p>
        </div>
      </div>

      {/* Privacy Policy */}
      <div id="privacy" className="rounded-3xl glass-panel p-8 border border-white/5 space-y-4">
        <div className="flex items-center gap-2 text-cyan-400">
          <ShieldCheck className="h-5 w-5" />
          <h2 className="text-xl font-bold text-white font-display">
            Privacy Policy
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
          MediaHub operates on a strict zero-logging foundation. We do not store records of URLs entered, downloaded files, or personal tracking identifiers on our database. All download history shown on the application is stored entirely on the client side using your browser’s LocalStorage and can be purged at any time with a single click.
        </p>
      </div>

      {/* Copyright Policy & DMCA */}
      <div id="copyright" className="rounded-3xl glass-panel p-8 border border-white/5 space-y-4">
        <div className="flex items-center gap-2 text-rose-400">
          <AlertTriangle className="h-5 w-5" />
          <h2 className="text-xl font-bold text-white font-display">
            Copyright Policy & DMCA Notice
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
          MediaHub does not host or store any media content on its servers. We function as a client-side proxy tool connecting users to publicly available network streams. If you are a copyright owner and believe a specific public URL should not be parsed through our service, you may submit a request to block extraction of that resource.
        </p>
      </div>
    </div>
  );
}
