import axios from "axios";
import { MediaFormat, MediaInfo, MediaProvider } from "./types";
import { extractWithUniversalEngine } from "./universal-engine";

export class VimeoProvider implements MediaProvider {
  id = "vimeo" as const;
  name = "Vimeo";
  domains = ["vimeo.com", "player.vimeo.com"];

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
      // 1. Get oEmbed metadata
      const oembedRes = await axios.get("https://vimeo.com/api/oembed.json", {
        params: { url },
        timeout: 6000,
      });

      const data = oembedRes.data;
      const videoId = data.video_id;

      const formats: MediaFormat[] = [];

      // 2. Query player config for direct progressive MP4 streams
      if (videoId) {
        try {
          const configRes = await axios.get(`https://player.vimeo.com/video/${videoId}/config`, {
            headers: {
              "User-Agent":
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            },
            timeout: 6000,
          });

          const progressive = configRes.data?.request?.files?.progressive;
          if (Array.isArray(progressive)) {
            progressive
              .sort((a: any, b: any) => (parseInt(b.quality) || 0) - (parseInt(a.quality) || 0))
              .forEach((prog: any, idx: number) => {
                formats.push({
                  id: `vimeo-${prog.quality || idx}`,
                  quality: `${prog.quality || "HD"} (${prog.width}x${prog.height})`,
                  extension: "mp4",
                  type: "video",
                  url: prog.url,
                  bitrate: prog.bitrate,
                  hasAudio: true,
                  hasVideo: true,
                  needsProxy: true,
                });
              });
          }
        } catch {
          // Config endpoint might be restricted or password protected
        }
      }

      if (formats.length > 0) {
        return {
          id: String(videoId || Date.now()),
          platform: this.id,
          platformName: this.name,
          title: data.title || "Vimeo Video",
          author: data.author_name || "Vimeo Creator",
          authorUrl: data.author_url,
          thumbnail: data.thumbnail_url,
          duration: data.duration,
          type: "video",
          originalUrl: url,
          formats,
          description: data.description,
        };
      }
    } catch {
      // oEmbed failed, try universal engine
    }

    const fallback = await extractWithUniversalEngine(url, this.id);
    if (fallback) {
      return fallback;
    }

    throw new Error("Unable to analyze Vimeo video. The video may be private or password-protected.");
  }
}
