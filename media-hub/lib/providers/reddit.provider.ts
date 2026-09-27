import axios from "axios";
import { MediaFormat, MediaInfo, MediaItem, MediaProvider } from "./types";
import { extractWithUniversalEngine } from "./universal-engine";

export class RedditProvider implements MediaProvider {
  id = "reddit" as const;
  name = "Reddit";
  domains = ["reddit.com", "redd.it"];

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
      // 1. Try public Reddit JSON API
      // Clean url to remove query parameters and append .json
      const cleanUrl = url.split("?")[0].replace(/\/$/, "");
      const jsonUrl = `${cleanUrl}.json`;

      const res = await axios.get(jsonUrl, {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        },
        timeout: 8000,
      });

      const postData = res.data?.[0]?.data?.children?.[0]?.data;
      if (postData) {
        const formats: MediaFormat[] = [];
        const items: MediaItem[] = [];

        // Check Reddit native video
        const redditVideo = postData.secure_media?.reddit_video || postData.media?.reddit_video;
        if (redditVideo?.fallback_url) {
          formats.push({
            id: "reddit-video",
            quality: `${redditVideo.height || "HD"}p Video`,
            extension: "mp4",
            type: "video",
            url: redditVideo.fallback_url,
            hasAudio: true,
            hasVideo: true,
            needsProxy: true,
          });

          // Also add separate audio stream if available
          const audioUrl = redditVideo.fallback_url.replace(/DASH_\d+\.mp4/, "DASH_audio.mp4");
          formats.push({
            id: "reddit-audio",
            quality: "Audio Track (AAC)",
            extension: "mp3",
            type: "audio",
            url: audioUrl,
            hasAudio: true,
            hasVideo: false,
            needsProxy: true,
          });
        }

        // Check Reddit Gallery / Multiple images
        if (postData.is_gallery && postData.media_metadata) {
          const galleryItems = postData.gallery_data?.items || [];
          galleryItems.forEach((item: any, idx: number) => {
            const meta = postData.media_metadata[item.media_id];
            if (meta && meta.s?.u) {
              const fullImgUrl = meta.s.u.replace(/&amp;/g, "&");
              items.push({
                id: `reddit-gallery-${idx + 1}`,
                type: "image",
                url: fullImgUrl,
                thumbnail: fullImgUrl,
                width: meta.s.x,
                height: meta.s.y,
                title: `Image ${idx + 1}`,
              });
              formats.push({
                id: `reddit-img-fmt-${idx + 1}`,
                quality: `Gallery Image ${idx + 1}`,
                extension: "jpg",
                type: "image",
                url: fullImgUrl,
              });
            }
          });
        }

        // Check single direct image / i.redd.it
        if (!redditVideo && postData.url && /\.(jpg|jpeg|png|gif|webp)$/i.test(postData.url)) {
          formats.push({
            id: "reddit-single-image",
            quality: "High Res Image",
            extension: "jpg",
            type: "image",
            url: postData.url,
          });
        }

        if (formats.length > 0) {
          const isAlbum = items.length > 0;
          return {
            id: postData.id || `reddit-${Date.now()}`,
            platform: this.id,
            platformName: this.name,
            title: postData.title || "Reddit Post",
            author: `u/${postData.author}`,
            authorUrl: `https://www.reddit.com/user/${postData.author}`,
            thumbnail: postData.thumbnail?.startsWith("http") ? postData.thumbnail : (items[0]?.url || redditVideo?.scrubber_media_url),
            duration: redditVideo?.duration,
            type: isAlbum ? "album" : redditVideo ? "video" : "image",
            originalUrl: url,
            formats,
            items: isAlbum ? items : undefined,
            likes: postData.ups,
            description: postData.selftext?.substring(0, 300),
          };
        }
      }
    } catch (e) {
      // Reddit JSON error or blocked, fallback
    }

    const fallback = await extractWithUniversalEngine(url, this.id);
    if (fallback) {
      return fallback;
    }

    throw new Error("Unable to analyze Reddit post. The post or subreddit might be private or restricted.");
  }
}
