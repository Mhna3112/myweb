import type { MediaInfo, PlatformId } from "./types";

export async function extractWithUniversalEngine(
  _url: string,
  _platformId: PlatformId
): Promise<MediaInfo | null> {
  // Cloudflare Workers cannot execute the original local Python/yt-dlp process.
  // Each provider continues to use its HTTP-based extraction path.
  return null;
}
