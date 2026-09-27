import axios from "axios";
import { MediaFormat, MediaInfo, MediaProvider } from "./types";
import { extractWithUniversalEngine } from "./universal-engine";

export class YouTubeProvider implements MediaProvider {
  id = "youtube" as const;
  name = "YouTube";
  domains = ["youtube.com", "youtu.be"];

  canHandle(url: string): boolean {
    try {
      const parsed = new URL(url);
      return this.domains.some((d) => parsed.hostname.includes(d));
    } catch {
      return false;
    }
  }

  async analyze(url: string): Promise<MediaInfo> {
    // 1. Fetch official YouTube oEmbed for reliable metadata
    let oembedData: any = null;
    try {
      const oembedRes = await axios.get("https://www.youtube.com/oembed", {
        params: { url, format: "json" },
        timeout: 6000,
      });
      oembedData = oembedRes.data;
    } catch {
      // oEmbed might fail for unlisted or restricted videos
    }

    // 2. Extract downloadable video/audio formats via Universal Engine (yt-dlp)
    const fallback = await extractWithUniversalEngine(url, this.id);
    if (fallback && fallback.formats.length > 0) {
      if (oembedData) {
        fallback.title = oembedData.title || fallback.title;
        fallback.author = oembedData.author_name || fallback.author;
        fallback.authorUrl = oembedData.author_url || fallback.authorUrl;
        fallback.thumbnail = oembedData.thumbnail_url || fallback.thumbnail;
      }
      return fallback;
    }

    // 3. If formats couldn't be extracted (e.g. YouTube bot verification or DRM), but oEmbed exists:
    if (oembedData) {
      // Extract video ID for standard thumbnail
      const idMatch = url.match(/(?:v=|\/shorts\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
      const videoId = idMatch ? idMatch[1] : `yt-${Date.now()}`;
      const highResThumb = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

      const formats: MediaFormat[] = [
        {
          id: "yt-thumb-hd",
          quality: "Max Resolution Thumbnail",
          extension: "jpg",
          type: "image",
          url: highResThumb,
        },
      ];

      return {
        id: videoId,
        platform: this.id,
        platformName: this.name,
        title: oembedData.title || "YouTube Video",
        author: oembedData.author_name || "YouTube Creator",
        authorUrl: oembedData.author_url,
        thumbnail: oembedData.thumbnail_url || highResThumb,
        type: "video",
        originalUrl: url,
        formats,
        description: "Public video metadata retrieved. For direct stream download, video must not have DRM or geographic restrictions.",
      };
    }

    throw new Error("Unable to analyze YouTube link. Video may be private, age-restricted, or removed.");
  }
}
