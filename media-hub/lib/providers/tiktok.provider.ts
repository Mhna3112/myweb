import axios from "axios";
import { MediaFormat, MediaInfo, MediaItem, MediaProvider } from "./types";
import { extractWithUniversalEngine } from "./universal-engine";

export class TikTokProvider implements MediaProvider {
  id = "tiktok" as const;
  name = "TikTok";
  domains = ["tiktok.com", "vt.tiktok.com", "vm.tiktok.com"];

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
      // 1. Try TikWM Public API
      const res = await axios.get(`https://www.tikwm.com/api/`, {
        params: { url, hd: 1 },
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        },
        timeout: 10000,
      });

      const data = res.data?.data;
      if (res.data?.code === 0 && data) {
        const formats: MediaFormat[] = [];
        const items: MediaItem[] = [];

        // Check if this is a photo slides / carousel post
        if (Array.isArray(data.images) && data.images.length > 0) {
          data.images.forEach((imgUrl: string, idx: number) => {
            items.push({
              id: `tt-img-${idx + 1}`,
              type: "image",
              url: imgUrl,
              thumbnail: imgUrl,
              title: `Photo ${idx + 1}`,
            });
            formats.push({
              id: `tt-img-fmt-${idx + 1}`,
              quality: `Photo ${idx + 1} (Full HD)`,
              extension: "jpg",
              type: "image",
              url: imgUrl,
            });
          });
        }

        // Add Video Formats (Watermark-Free HD & SD)
        if (data.hdplay) {
          formats.unshift({
            id: "tt-hd-nowm",
            quality: "HD 1080p (No Watermark)",
            extension: "mp4",
            type: "video",
            url: data.hdplay,
            filesize: data.hd_size || data.size,
            hasAudio: true,
            hasVideo: true,
          });
        }

        if (data.play) {
          formats.push({
            id: "tt-sd-nowm",
            quality: "SD 720p (No Watermark)",
            extension: "mp4",
            type: "video",
            url: data.play,
            filesize: data.size,
            hasAudio: true,
            hasVideo: true,
          });
        }

        // Add Audio Format (Original Sound)
        if (data.music) {
          formats.push({
            id: "tt-audio",
            quality: `Audio MP3 - ${data.music_info?.title || "Original Sound"}`,
            extension: "mp3",
            type: "audio",
            url: data.music,
            hasAudio: true,
            hasVideo: false,
          });
        }

        const isAlbum = items.length > 0;

        const urlIdMatch = url.match(/(?:video|v|photo)\/(\d+)/);
        const postId = data.id || (urlIdMatch ? urlIdMatch[1] : `tiktok-${Date.now()}`);
        const authorHandle = data.author?.unique_id || data.author?.nickname || "tiktok_user";

        return {
          id: postId,
          platform: this.id,
          platformName: this.name,
          title: data.title || "TikTok Post",
          author: authorHandle,
          authorUrl: data.author?.unique_id ? `https://www.tiktok.com/@${data.author.unique_id}` : undefined,
          authorAvatar: data.author?.avatar,
          thumbnail: data.cover || (items[0]?.url ?? undefined),
          duration: data.duration,
          type: isAlbum ? "album" : "video",
          originalUrl: url,
          formats,
          items: isAlbum ? items : undefined,
          likes: data.digg_count,
          views: data.play_count,
        };
      }
    } catch (e) {
      // TikWM endpoint failed, fallback to universal engine
    }

    // 2. Fallback to Universal Engine
    const fallback = await extractWithUniversalEngine(url, this.id);
    if (fallback) {
      return fallback;
    }

    throw new Error("Unable to analyze TikTok video. Please ensure the video is public and accessible.");
  }
}
