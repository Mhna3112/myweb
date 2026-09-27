import axios from "axios";
import { MediaFormat, MediaInfo, MediaProvider } from "./types";
import { extractWithUniversalEngine } from "./universal-engine";

export class SoundCloudProvider implements MediaProvider {
  id = "soundcloud" as const;
  name = "SoundCloud";
  domains = ["soundcloud.com", "on.soundcloud.com"];

  canHandle(url: string): boolean {
    try {
      const parsed = new URL(url);
      return this.domains.some((d) => parsed.hostname.includes(d));
    } catch {
      return false;
    }
  }

  async analyze(url: string): Promise<MediaInfo> {
    let oembed: any = null;
    try {
      const res = await axios.get("https://soundcloud.com/oembed", {
        params: { url, format: "json" },
        timeout: 6000,
      });
      oembed = res.data;
    } catch {
      // ignore
    }

    const fallback = await extractWithUniversalEngine(url, this.id);
    if (fallback) {
      if (oembed) {
        fallback.title = oembed.title || fallback.title;
        fallback.author = oembed.author_name || fallback.author;
        fallback.thumbnail = oembed.thumbnail_url || fallback.thumbnail;
      }
      fallback.type = "audio";
      return fallback;
    }

    if (oembed) {
      const formats: MediaFormat[] = [];
      if (oembed.thumbnail_url) {
        // High quality artwork
        const highResArt = oembed.thumbnail_url.replace("-t500x500", "-original").replace("-large", "-t500x500");
        formats.push({
          id: "sc-artwork",
          quality: "Cover Artwork (High Res)",
          extension: "jpg",
          type: "image",
          url: highResArt,
        });
      }

      return {
        id: `sc-${Date.now()}`,
        platform: this.id,
        platformName: this.name,
        title: oembed.title || "SoundCloud Track",
        author: oembed.author_name || "SoundCloud Artist",
        authorUrl: oembed.author_url,
        thumbnail: oembed.thumbnail_url,
        type: "audio",
        originalUrl: url,
        formats,
        description: oembed.description || "SoundCloud Audio Stream",
      };
    }

    throw new Error("Unable to analyze SoundCloud track. The track may be private, geoblocked, or removed.");
  }
}
