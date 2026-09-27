import { MediaInfo, MediaProvider, PlatformId, ProviderCapability } from "./types";
import { TikTokProvider } from "./tiktok.provider";
import { TwitterProvider } from "./twitter.provider";
import { RedditProvider } from "./reddit.provider";
import { YouTubeProvider } from "./youtube.provider";
import { PinterestProvider } from "./pinterest.provider";
import { VimeoProvider } from "./vimeo.provider";
import { SoundCloudProvider } from "./soundcloud.provider";
import { TwitchProvider } from "./twitch.provider";
import { FacebookProvider } from "./facebook.provider";
import { InstagramProvider } from "./instagram.provider";
import { GenericProvider } from "./generic.provider";

export class ProviderManager {
  private static instance: ProviderManager;
  private providers: MediaProvider[] = [];
  private genericProvider: GenericProvider;

  private constructor() {
    this.genericProvider = new GenericProvider();
    // Specific platform providers registered in order
    this.providers = [
      new TikTokProvider(),
      new TwitterProvider(),
      new RedditProvider(),
      new YouTubeProvider(),
      new PinterestProvider(),
      new VimeoProvider(),
      new SoundCloudProvider(),
      new TwitchProvider(),
      new FacebookProvider(),
      new InstagramProvider(),
    ];
  }

  public static getInstance(): ProviderManager {
    if (!ProviderManager.instance) {
      ProviderManager.instance = new ProviderManager();
    }
    return ProviderManager.instance;
  }

  public detectPlatform(url: string): PlatformId {
    try {
      const parsed = new URL(url);
      const host = parsed.hostname.toLowerCase();

      for (const provider of this.providers) {
        if (provider.domains.some((d) => host.includes(d))) {
          return provider.id;
        }
      }
    } catch {
      // Invalid URL
    }
    return "generic";
  }

  public async analyze(url: string): Promise<MediaInfo> {
    if (!url || typeof url !== "string") {
      throw new Error("A valid URL must be provided.");
    }

    const trimmed = url.trim();
    if (!/^https?:\/\//i.test(trimmed)) {
      throw new Error("Invalid URL format. Please include http:// or https://");
    }

    // Match provider
    const matchedProvider = this.providers.find((p) => p.canHandle(trimmed));
    const provider = matchedProvider || this.genericProvider;

    try {
      const result = await provider.analyze(trimmed);
      return result;
    } catch (error: any) {
      // If specific provider failed, attempt generic fallback
      if (provider !== this.genericProvider) {
        try {
          const fallbackResult = await this.genericProvider.analyze(trimmed);
          return fallbackResult;
        } catch {
          // generic also failed, throw original error
        }
      }
      throw new Error(error.message || "Failed to analyze URL.");
    }
  }

  public getCapabilities(): ProviderCapability[] {
    return [
      {
        id: "youtube",
        name: "YouTube",
        domains: ["youtube.com", "youtu.be"],
        icon: "Youtube",
        color: "#FF0000",
        supportedTypes: ["video", "audio"],
        features: ["1080p / 720p / 480p Streams", "MP3 Audio", "Shorts Support", "HD Thumbnails"],
        restrictions: "Public videos only. No DRM-protected movies, private, or age-restricted videos.",
        exampleUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      },
      {
        id: "tiktok",
        name: "TikTok",
        domains: ["tiktok.com", "vt.tiktok.com"],
        icon: "Music2",
        color: "#00F2FE",
        supportedTypes: ["video", "audio", "album"],
        features: ["Watermark-Free HD 1080p", "Original Audio MP3", "Photo Carousel Albums (ZIP)"],
        restrictions: "Public videos and carousels only. Private accounts not accessible.",
        exampleUrl: "https://www.tiktok.com/@tiktok/video/7106594312292453678",
      },
      {
        id: "twitter",
        name: "Twitter / X",
        domains: ["twitter.com", "x.com"],
        icon: "Twitter",
        color: "#1DA1F2",
        supportedTypes: ["video", "image", "album"],
        features: ["Multi-bitrate MP4s", "Multi-Photo Attachments", "Direct high-res previews"],
        restrictions: "Public tweets only. Protected / private accounts cannot be extracted.",
        exampleUrl: "https://x.com/NASA/status/1811776594248560707",
      },
      {
        id: "reddit",
        name: "Reddit",
        domains: ["reddit.com", "redd.it"],
        icon: "MessageSquare",
        color: "#FF4500",
        supportedTypes: ["video", "audio", "image", "album"],
        features: ["Native Reddit Video + Audio", "Multi-image Gallleries", "Original Resolution"],
        restrictions: "Public subreddits only. Private or quarantined subreddits not supported.",
        exampleUrl: "https://www.reddit.com/r/EarthPorn/comments/1665a3d/",
      },
      {
        id: "instagram",
        name: "Instagram",
        domains: ["instagram.com"],
        icon: "Instagram",
        color: "#E1306C",
        supportedTypes: ["video", "image", "album"],
        features: ["Reels & Video Posts", "Carousels & Album Images", "Cover Art"],
        restrictions: "Public profiles only. Private accounts and login-gated stories not supported.",
        exampleUrl: "https://www.instagram.com/reel/C8P4o1qISfW/",
      },
      {
        id: "facebook",
        name: "Facebook",
        domains: ["facebook.com", "fb.watch"],
        icon: "Facebook",
        color: "#1877F2",
        supportedTypes: ["video"],
        features: ["HD and SD Quality MP4s", "Reels & Public Watch Links"],
        restrictions: "Public videos only. Private groups and friends-only videos cannot be fetched.",
        exampleUrl: "https://fb.watch/example/",
      },
      {
        id: "pinterest",
        name: "Pinterest",
        domains: ["pinterest.com", "pin.it"],
        icon: "Pin",
        color: "#E60023",
        supportedTypes: ["image", "video"],
        features: ["Original High-Res JPEG", "720p/1080p Pin Videos", "Shortlink resolution"],
        restrictions: "Public pins only. Secret boards are protected.",
        exampleUrl: "https://www.pinterest.com/pin/123456789/",
      },
      {
        id: "vimeo",
        name: "Vimeo",
        domains: ["vimeo.com"],
        icon: "Video",
        color: "#1AB7EA",
        supportedTypes: ["video"],
        features: ["Progressive 1080p / 720p / 540p", "High-bitrate streams"],
        restrictions: "Public Vimeo videos only. Password-protected or on-demand rentals not allowed.",
        exampleUrl: "https://vimeo.com/76979871",
      },
      {
        id: "soundcloud",
        name: "SoundCloud",
        domains: ["soundcloud.com"],
        icon: "Headphones",
        color: "#FF5500",
        supportedTypes: ["audio", "image"],
        features: ["Direct Audio Stream", "500x500 Original Artwork", "Track Metadata"],
        restrictions: "Public tracks only. SoundCloud Go+ subscription-locked tracks not supported.",
        exampleUrl: "https://soundcloud.com/artist/track",
      },
      {
        id: "twitch",
        name: "Twitch",
        domains: ["twitch.tv", "clips.twitch.tv"],
        icon: "Tv",
        color: "#9146FF",
        supportedTypes: ["video"],
        features: ["1080p60 / 720p60 Clips", "Completed VOD Previews"],
        restrictions: "Public clips and VODs. Subscriber-only streams or live broadcasts restricted.",
        exampleUrl: "https://clips.twitch.tv/example",
      },
      {
        id: "generic",
        name: "Universal Web",
        domains: ["*"],
        icon: "Globe",
        color: "#8B5CF6",
        supportedTypes: ["video", "audio", "image"],
        features: ["Direct MP4/MP3/JPG Links", "OpenGraph / Twitter Cards", "HTML5 Media Scraper"],
        restrictions: "Must be public, unencrypted, and CORS-accessible.",
        exampleUrl: "https://example.com/sample-video.mp4",
      },
    ];
  }
}
