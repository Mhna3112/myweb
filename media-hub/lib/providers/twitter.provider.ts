import axios from "axios";
import { MediaFormat, MediaInfo, MediaItem, MediaProvider } from "./types";
import { extractWithUniversalEngine } from "./universal-engine";

export class TwitterProvider implements MediaProvider {
  id = "twitter" as const;
  name = "Twitter / X";
  domains = ["twitter.com", "x.com"];

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
      // Extract status id
      const match = url.match(/status\/(\d+)/);
      if (match && match[1]) {
        const tweetId = match[1];

        // 1. Query FxTwitter / VxTwitter public API
        const fxRes = await axios.get(`https://api.fxtwitter.com/status/${tweetId}`, {
          timeout: 10000,
          headers: {
            "User-Agent": "MediaHubBot/1.0",
          },
        });

        const tweet = fxRes.data?.tweet;
        if (tweet) {
          const formats: MediaFormat[] = [];
          const items: MediaItem[] = [];

          // Multi-photo media items
          if (Array.isArray(tweet.media?.photos)) {
            tweet.media.photos.forEach((photo: any, idx: number) => {
              items.push({
                id: `tw-photo-${idx + 1}`,
                type: "image",
                url: photo.url,
                thumbnail: photo.url,
                width: photo.width,
                height: photo.height,
                title: `Image ${idx + 1}`,
              });
              formats.push({
                id: `tw-img-${idx + 1}`,
                quality: `Image ${idx + 1} (Original)`,
                extension: "jpg",
                type: "image",
                url: photo.url,
              });
            });
          }

          // Single or multi video
          if (tweet.media?.videos && Array.isArray(tweet.media.videos)) {
            tweet.media.videos.forEach((vid: any, vIdx: number) => {
              formats.push({
                id: `tw-vid-${vIdx + 1}`,
                quality: `MP4 Video ${vid.width ? `${vid.width}x${vid.height}` : "HD"}`,
                extension: "mp4",
                type: "video",
                url: vid.url,
                hasAudio: true,
                hasVideo: true,
                needsProxy: true,
              });
            });
          }

          // Video formats (if video exists on tweet)
          if (tweet.media?.video) {
            const vid = tweet.media.video;
            formats.push({
              id: "tw-video-main",
              quality: `MP4 Video (${vid.width || "HD"}x${vid.height || ""})`,
              extension: "mp4",
              type: "video",
              url: vid.url,
              hasAudio: true,
              hasVideo: true,
              needsProxy: true,
            });
          }

          if (formats.length > 0) {
            const isAlbum = items.length > 0 && formats.every((f) => f.type === "image");
            return {
              id: tweet.id || tweetId,
              platform: this.id,
              platformName: this.name,
              title: tweet.text ? tweet.text.slice(0, 100) : "Twitter / X Post",
              author: tweet.author?.name || tweet.author?.screen_name,
              authorUrl: tweet.author?.screen_name ? `https://x.com/${tweet.author.screen_name}` : undefined,
              authorAvatar: tweet.author?.avatar_url,
              thumbnail: tweet.media?.video?.thumbnail_url || items[0]?.thumbnail,
              type: isAlbum ? "album" : formats.some((f) => f.type === "video") ? "video" : "image",
              originalUrl: url,
              formats,
              items: items.length > 0 ? items : undefined,
              likes: tweet.likes,
              description: tweet.text,
            };
          }
        }
      }
    } catch (e) {
      // FXTwitter failed, fallback to universal engine
    }

    const fallback = await extractWithUniversalEngine(url, this.id);
    if (fallback) {
      return fallback;
    }

    throw new Error("Unable to analyze Twitter / X post. The post may be private, age-restricted, or deleted.");
  }
}
