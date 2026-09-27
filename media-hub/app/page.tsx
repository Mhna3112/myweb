"use client";

import React, { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { UrlInput } from "@/components/UrlInput";
import { MediaResultCard } from "@/components/MediaResultCard";
import { SupportedPlatformsBar } from "@/components/SupportedPlatformsBar";
import { FaqSection } from "@/components/FaqSection";
import { MediaInfo } from "@/lib/providers/types";

export default function Home() {
  const [media, setMedia] = useState<MediaInfo | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Main Interactive Downloader Box */}
      <UrlInput
        onMediaAnalyzed={(result) => setMedia(result)}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        error={error}
        setError={setError}
      />

      {/* Dynamic Extracted Media Card Result */}
      {media && <MediaResultCard media={media} />}

      {/* Platform Icons Ticker */}
      <SupportedPlatformsBar />

      <FaqSection />
    </div>
  );
}
