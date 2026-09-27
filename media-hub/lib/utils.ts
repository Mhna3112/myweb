import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatBytes(bytes?: number, decimals = 1): string {
  if (!bytes || bytes === 0) return "Unknown size";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

export function formatDuration(seconds?: number): string {
  if (!seconds || seconds <= 0) return "";
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  if (h > 0) {
    return `${h}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  }
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function sanitizeFilename(name: string): string {
  return name.replace(/[/\\?%*:|"<>]/g, "_").trim().substring(0, 100);
}

export function generateMediaFilename(
  media: { platform: string; id?: string; author?: string; title?: string },
  format: { quality?: string; extension?: string; type?: string },
  suffix?: string
): string {
  const ext =
    format.extension ||
    (format.type === "video" ? "mp4" : format.type === "audio" ? "mp3" : "jpg");
  const platform = (media.platform || "media").toLowerCase();

  const cleanTitle = sanitizeFilename(media.title || "")
    .replace(/\.[a-z0-9]{2,5}$/i, "")
    .trim();
  if (platform === "generic" && cleanTitle) {
    return sanitizeFilename(`${cleanTitle}.${ext}`);
  }

  // Extract clean ID
  const cleanId = media.id
    ? media.id.replace(/[/\\?%*:|"<>@\s]/g, "_").slice(0, 30)
    : Date.now().toString();

  // Extract clean author
  const rawAuthor = media.author || "user";
  const cleanAuthor = rawAuthor.replace(/[/\\?%*:|"<>@\s]/g, "_").slice(0, 30);

  // Extract clean title
  const rawTitle = cleanTitle
    ? cleanTitle.replace(/[/\\?%*:|"<>@\s]/g, "_").slice(0, 35)
    : "";

  // Combine: [platform]_[id]_[author]_[title] (e.g. tiktok_7106594312292453678_user_dance.mp4)
  const parts = [platform, cleanId, cleanAuthor];

  if (suffix) {
    parts.push(suffix);
  } else if (rawTitle && rawTitle.toLowerCase() !== cleanAuthor.toLowerCase()) {
    parts.push(rawTitle);
  }

  const base = parts.filter(Boolean).join("_");
  return sanitizeFilename(`${base}.${ext}`);
}

