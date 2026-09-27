import axios from "axios";
import * as cheerio from "cheerio";
import { MediaFormat, MediaInfo, MediaProvider } from "./types";
import { extractWithUniversalEngine } from "./universal-engine";

export class GenericProvider implements MediaProvider {
  id = "generic" as const;
  name = "Universal Web Extractor";
  domains = ["*"];

  canHandle(_url: string): boolean {
    return true; // Catch-all fallback
  }

  async analyze(url: string): Promise<MediaInfo> {
    const cleanUrl = url.split("?")[0].toLowerCase();

    // 1. Direct Media File Links
    const isDirectVideo = /\.(mp4|webm|mkv|mov|avi)$/i.test(cleanUrl);
    const isDirectAudio = /\.(mp3|wav|ogg|m4a|aac|flac)$/i.test(cleanUrl);
    const isDirectImage = /\.(jpg|jpeg|png|webp|gif|svg|bmp)$/i.test(cleanUrl);

    if (isDirectVideo || isDirectAudio || isDirectImage) {
      const ext = (cleanUrl.split(".").pop() || (isDirectVideo ? "mp4" : isDirectAudio ? "mp3" : "jpg")) as any;
      const type = isDirectVideo ? "video" : isDirectAudio ? "audio" : "image";
      const filename = url.split("/").pop()?.split("?")[0] || "direct-media";

      const formats: MediaFormat[] = [
        {
          id: "direct-media-file",
          quality: "Original Direct File",
          extension: ext,
          type,
          url,
          hasAudio: isDirectAudio || isDirectVideo,
          hasVideo: isDirectVideo,
          needsProxy: true,
        },
      ];

      return {
        id: `direct-${Date.now()}`,
        platform: this.id,
        platformName: "Direct Media File",
        title: filename,
        thumbnail: isDirectImage ? url : undefined,
        type,
        originalUrl: url,
        formats,
        description: `Direct public media resource (${ext.toUpperCase()})`,
      };
    }

    // 2. OpenGraph and HTML5 Media Extractor for arbitrary web pages
    try {
      const pageRes = await axios.get(url, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        },
        timeout: 8000,
        maxContentLength: 5 * 1024 * 1024,
      });

      if (typeof pageRes.data === "string") {
        const $ = cheerio.load(pageRes.data);
        const title =
          $('meta[property="og:title"]').attr("content") ||
          $('meta[name="twitter:title"]').attr("content") ||
          $("title").text().trim() ||
          "Web Page Media";

        const ogImage =
          $('meta[property="og:image"]').attr("content") ||
          $('meta[name="twitter:image"]').attr("content");

        const ogVideo =
          $('meta[property="og:video"]').attr("content") ||
          $('meta[property="og:video:url"]').attr("content") ||
          $('meta[property="og:video:secure_url"]').attr("content") ||
          $('meta[name="twitter:player:stream"]').attr("content");

        const ogAudio = $('meta[property="og:audio"]').attr("content");

        // Search HTML5 video/audio elements
        const htmlVideo = $("video source").attr("src") || $("video").attr("src");
        const htmlAudio = $("audio source").attr("src") || $("audio").attr("src");

        const videoUrl = ogVideo || htmlVideo;
        const audioUrl = ogAudio || htmlAudio;

        const formats: MediaFormat[] = [];

        if (videoUrl && videoUrl.startsWith("http")) {
          formats.push({
            id: "web-video",
            quality: "Standard Web Video",
            extension: "mp4",
            type: "video",
            url: videoUrl,
            hasAudio: true,
            hasVideo: true,
            needsProxy: true,
          });
        }

        if (audioUrl && audioUrl.startsWith("http")) {
          formats.push({
            id: "web-audio",
            quality: "Audio Track",
            extension: "mp3",
            type: "audio",
            url: audioUrl,
            hasAudio: true,
            hasVideo: false,
            needsProxy: true,
          });
        }

        if (ogImage && ogImage.startsWith("http")) {
          formats.push({
            id: "web-image",
            quality: "Preview / Cover Image",
            extension: "jpg",
            type: "image",
            url: ogImage,
          });
        }

        if (formats.length > 0) {
          const type = videoUrl ? "video" : audioUrl ? "audio" : "image";
          return {
            id: `web-${Date.now()}`,
            platform: this.id,
            platformName: "Web Media Extractor",
            title,
            thumbnail: ogImage,
            type,
            originalUrl: url,
            formats,
            description: $('meta[property="og:description"]').attr("content") || $('meta[name="description"]').attr("content"),
          };
        }
      }
    } catch {
      // HTML scraping failed
    }

    // 3. Fallback to universal engine (yt-dlp supports 1000+ sites)
    const fallback = await extractWithUniversalEngine(url, this.id);
    if (fallback) {
      return fallback;
    }

    throw new Error(
      "No public video, image, or audio media could be detected at this URL. The content may be protected, behind a paywall, or not contain extractable media."
    );
  }
}
