export type PlatformId =
  | "youtube"
  | "tiktok"
  | "instagram"
  | "facebook"
  | "twitter"
  | "reddit"
  | "pinterest"
  | "vimeo"
  | "soundcloud"
  | "twitch"
  | "generic";

export interface MediaFormat {
  id: string;
  quality: string;
  extension: "mp4" | "mp3" | "m4a" | "webm" | "jpg" | "png" | "webp" | string;
  type: "video" | "audio" | "image";
  url: string;
  filesize?: number;
  hasAudio?: boolean;
  hasVideo?: boolean;
  bitrate?: number;
  needsProxy?: boolean;
  headers?: Record<string, string>;
}

export interface MediaItem {
  id: string;
  type: "image" | "video";
  url: string;
  thumbnail?: string;
  width?: number;
  height?: number;
  title?: string;
}

export interface MediaInfo {
  id: string;
  platform: PlatformId;
  platformName: string;
  title: string;
  author?: string;
  authorUrl?: string;
  authorAvatar?: string;
  thumbnail?: string;
  duration?: number; // in seconds
  type: "video" | "audio" | "image" | "album";
  originalUrl: string;
  formats: MediaFormat[];
  items?: MediaItem[];
  createdAt?: string;
  views?: number;
  likes?: number;
  description?: string;
}

export interface ProviderCapability {
  id: PlatformId;
  name: string;
  domains: string[];
  icon: string;
  color: string;
  supportedTypes: ("video" | "audio" | "image" | "album")[];
  features: string[];
  restrictions: string;
  exampleUrl: string;
}

export interface MediaProvider {
  id: PlatformId;
  name: string;
  domains: string[];
  canHandle(url: string): boolean;
  analyze(url: string): Promise<MediaInfo>;
}
