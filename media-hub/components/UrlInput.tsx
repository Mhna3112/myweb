"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clipboard,
  X,
  Search,
  Loader2,
  AlertCircle,
  Youtube,
  Music2,
  Twitter,
  Instagram,
  Facebook,
  Pin,
  Video,
  Headphones,
  Tv,
  Globe,
} from "lucide-react";
import { MediaInfo, PlatformId } from "@/lib/providers/types";

interface UrlInputProps {
  onMediaAnalyzed: (media: MediaInfo | null) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  error: string | null;
  setError: (err: string | null) => void;
}

const PLATFORM_ICONS: Record<
  PlatformId,
  { name: string; icon: React.ComponentType<{ className?: string }>; color: string }
> = {
  youtube: { name: "YouTube", icon: Youtube, color: "text-red-500" },
  tiktok: { name: "TikTok", icon: Music2, color: "text-cyan-400" },
  twitter: { name: "Twitter / X", icon: Twitter, color: "text-sky-400" },
  reddit: { name: "Reddit", icon: Globe, color: "text-orange-500" },
  instagram: { name: "Instagram", icon: Instagram, color: "text-pink-500" },
  facebook: { name: "Facebook", icon: Facebook, color: "text-blue-500" },
  pinterest: { name: "Pinterest", icon: Pin, color: "text-red-600" },
  vimeo: { name: "Vimeo", icon: Video, color: "text-cyan-500" },
  soundcloud: { name: "SoundCloud", icon: Headphones, color: "text-amber-500" },
  twitch: { name: "Twitch", icon: Tv, color: "text-purple-500" },
  generic: { name: "Direct / Web", icon: Globe, color: "text-violet-400" },
};

const EXAMPLE_URL = "https://www.w3schools.com/html/mov_bbb.mp4";

export const UrlInput: React.FC<UrlInputProps> = ({
  onMediaAnalyzed,
  isLoading,
  setIsLoading,
  error,
  setError,
}) => {
  const [url, setUrl] = useState("");
  const [detectedPlatform, setDetectedPlatform] = useState<PlatformId>("generic");
  const sharedUrlHandled = useRef(false);

  // Auto-detect platform from URL input
  useEffect(() => {
    const val = url.toLowerCase();
    if (val.includes("youtube.com") || val.includes("youtu.be")) setDetectedPlatform("youtube");
    else if (val.includes("tiktok.com")) setDetectedPlatform("tiktok");
    else if (val.includes("twitter.com") || val.includes("x.com")) setDetectedPlatform("twitter");
    else if (val.includes("reddit.com") || val.includes("redd.it")) setDetectedPlatform("reddit");
    else if (val.includes("instagram.com")) setDetectedPlatform("instagram");
    else if (val.includes("facebook.com") || val.includes("fb.watch")) setDetectedPlatform("facebook");
    else if (val.includes("pinterest.com") || val.includes("pin.it")) setDetectedPlatform("pinterest");
    else if (val.includes("vimeo.com")) setDetectedPlatform("vimeo");
    else if (val.includes("soundcloud.com")) setDetectedPlatform("soundcloud");
    else if (val.includes("twitch.tv")) setDetectedPlatform("twitch");
    else setDetectedPlatform("generic");
  }, [url]);

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text) {
        setUrl(text.trim());
        setError(null);
      }
    } catch {
      setError("Clipboard access is unavailable. Paste the link into the field instead.");
    }
  };

  const handleClear = () => {
    setUrl("");
    setError(null);
    onMediaAnalyzed(null);
  };

  const handleSubmit = async (e?: React.FormEvent, customUrl?: string) => {
    if (e) e.preventDefault();
    const targetUrl = (customUrl || url).trim();

    if (!targetUrl) {
      setError("Please enter or paste a valid link.");
      return;
    }

    if (!targetUrl.startsWith("http://") && !targetUrl.startsWith("https://")) {
      setError("Please include http:// or https:// in the URL.");
      return;
    }

    setError(null);
    setIsLoading(true);
    onMediaAnalyzed(null);

    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: targetUrl }),
      });

      const json = await res.json();

      if (!res.ok || !json.success) {
        throw new Error(json.error || "Failed to analyze URL.");
      }

      onMediaAnalyzed(json.data);
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred while analyzing the link.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (sharedUrlHandled.current) return;
    sharedUrlHandled.current = true;

    const sharedUrl =
      new URLSearchParams(window.location.hash.slice(1)).get("url") ||
      new URLSearchParams(window.location.search).get("url");
    if (!sharedUrl) return;

    const targetUrl = sharedUrl.trim();
    setUrl(targetUrl);
    if (targetUrl.length > 4096) {
      setError("This link is too long. Paste a shorter public media URL.");
      return;
    }

    void handleSubmit(undefined, targetUrl);
    // The shared URL should only be analyzed once when this page opens.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const CurrentIcon = PLATFORM_ICONS[detectedPlatform].icon;

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      {/* Search Input Container */}
      <form onSubmit={(e) => handleSubmit(e)} className="relative group">
        <div className="relative flex items-center rounded-2xl glass-panel p-2 shadow-2xl transition-all duration-300 focus-within:border-violet-500/50 focus-within:shadow-violet-500/20 focus-within:ring-2 focus-within:ring-violet-500/30">
          {/* Platform Icon Indicator */}
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 transition-colors">
            <CurrentIcon className={`h-6 w-6 ${PLATFORM_ICONS[detectedPlatform].color} transition-all`} />
          </div>

          {/* Text Input */}
          <input
            type="url"
            inputMode="url"
            aria-label="Media URL"
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
              if (error) setError(null);
            }}
            placeholder="Paste link"
            className="w-full bg-transparent px-4 py-3 text-sm sm:text-base text-white placeholder-zinc-500 focus:outline-none"
            disabled={isLoading}
          />

          {/* Actions: Clear / Paste */}
          <div className="flex items-center gap-1.5 pr-2">
            {url ? (
              <button
                type="button"
                onClick={handleClear}
                className="p-3 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                title="Clear link"
                aria-label="Clear link"
              >
                <X className="h-4 w-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handlePaste}
                className="hidden sm:flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-300 bg-white/5 hover:bg-white/10 hover:text-white transition-all border border-white/5"
                title="Paste from clipboard"
              >
                <Clipboard className="h-3.5 w-3.5" />
                <span>Paste</span>
              </button>
            )}

            {/* Submit / Analyze Button */}
            <button
              type="submit"
              disabled={isLoading || !url.trim()}
              className="flex items-center gap-2 rounded-xl bg-violet-600 px-5 sm:px-7 py-3 text-sm font-semibold text-white hover:bg-violet-700 disabled:opacity-50 disabled:pointer-events-none transition-colors duration-200"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin text-white" />
                  <span className="hidden sm:inline">Analyzing...</span>
                </>
              ) : (
                <>
                  <Search className="h-4 w-4" />
                  <span>Analyze</span>
                </>
              )}
            </button>
          </div>
        </div>
      </form>

      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 flex items-center gap-2 rounded-xl border border-violet-500/20 bg-violet-950/20 px-4 py-3 text-sm text-violet-300"
            role="status"
          >
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            <span>Analyzing the link…</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error Message */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-4 flex items-start gap-3 rounded-xl border border-red-500/30 bg-red-950/30 p-4 text-xs sm:text-sm text-red-200 backdrop-blur-md"
            role="alert"
          >
            <AlertCircle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="font-medium">{error}</p>
            </div>
            <button
              onClick={() => setError(null)}
              className="text-red-400 hover:text-red-200 p-1 rounded"
              aria-label="Dismiss error"
            >
              <X className="h-4 w-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-4 text-center text-xs text-zinc-400">
        Need an example?{" "}
        <button
          type="button"
          onClick={() => {
            setUrl(EXAMPLE_URL);
            handleSubmit(undefined, EXAMPLE_URL);
          }}
          disabled={isLoading}
          className="font-medium text-violet-300 hover:text-violet-200 underline underline-offset-4 disabled:opacity-50"
        >
          Try a sample video
        </button>
      </div>
    </div>
  );
};
