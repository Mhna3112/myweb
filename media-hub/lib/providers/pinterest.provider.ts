import axios from "axios";
import * as cheerio from "cheerio";
import { MediaFormat, MediaInfo, MediaProvider } from "./types";
import { extractWithUniversalEngine } from "./universal-engine";

export class PinterestProvider implements MediaProvider {
  id = "pinterest" as const;
  name = "Pinterest";
  domains = ["pinterest.com", "pin.it"];

  canHandle(url: string): boolean {
    try {
      const parsed = new URL(url);
      return this.domains.some((d) => parsed.hostname.includes(d));
    } catch {
      return false;
    }
  }

  async analyze(url: string): Promise<MediaInfo> {
    try {
      // 1. Follow redirect if pin.it shortlink
      const response = await axios.get(url, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        },
        maxRedirects: 5,
        timeout: 10000,
      });

      const html = response.data;
      if (typeof html === "string") {
        const $ = cheerio.load(html);
        const ogTitle = $('meta[property="og:title"]').attr("content") || "Pinterest Pin";
        const ogDescription = $('meta[property="og:description"]').attr("content") || "";
        const ogImage = $('meta[property="og:image"]').attr("content");
        const ogVideo = $('meta[property="og:video"]').attr("content");

        const formats: MediaFormat[] = [];

        // Check for Video (Pinterest 720p/1080p MP4)
        if (ogVideo) {
          formats.push({
            id: "pin-video",
            quality: "HD Video (MP4)",
            extension: "mp4",
            type: "video",
            url: ogVideo,
            hasAudio: true,
            hasVideo: true,
            needsProxy: true,
          });
        }

        // Check for high-res original image
        if (ogImage) {
          // Replace 474x / 736x with originals for full resolution
          const originalImg = ogImage.replace(/\/(?:\d+x|originals)\//, "/originals/");
          formats.push({
            id: "pin-image-original",
            quality: "Original High Resolution",
            extension: "jpg",
            type: "image",
            url: originalImg,
          });

          if (ogImage !== originalImg) {
            formats.push({
              id: "pin-image-standard",
              quality: "Standard Preview (736px)",
              extension: "jpg",
              type: "image",
              url: ogImage,
            });
          }
        }

        if (formats.length > 0) {
          return {
            id: `pin-${Date.now()}`,
            platform: this.id,
            platformName: this.name,
            title: ogTitle,
            thumbnail: ogImage,
            type: ogVideo ? "video" : "image",
            originalUrl: url,
            formats,
            description: ogDescription,
          };
        }
      }
    } catch (e) {
      // Direct Pinterest fetch failed, fallback
    }

    const fallback = await extractWithUniversalEngine(url, this.id);
    if (fallback) {
      return fallback;
    }

    throw new Error("Unable to analyze Pinterest link. The pin may be private or deleted.");
  }
}
