import { MediaInfo, MediaProvider } from "./types";
import { extractWithUniversalEngine } from "./universal-engine";

export class InstagramProvider implements MediaProvider {
  id = "instagram" as const;
  name = "Instagram";
  domains = ["instagram.com"];

  canHandle(url: string): boolean {
    try {
      const parsed = new URL(url);
      return this.domains.some((d) => parsed.hostname.includes(d));
    } catch {
      return false;
    }
  }

  async analyze(url: string): Promise<MediaInfo> {
    const fallback = await extractWithUniversalEngine(url, this.id);
    if (fallback) {
      return fallback;
    }

    throw new Error(
      "Unable to analyze Instagram post/reel. Only public accounts are supported. Private posts or stories requiring login cannot be accessed."
    );
  }
}
