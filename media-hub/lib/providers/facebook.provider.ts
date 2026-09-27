import { MediaInfo, MediaProvider } from "./types";
import { extractWithUniversalEngine } from "./universal-engine";

export class FacebookProvider implements MediaProvider {
  id = "facebook" as const;
  name = "Facebook";
  domains = ["facebook.com", "fb.watch", "fb.com"];

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
      "Unable to analyze Facebook video. The video must be set to 'Public' and cannot be inside a private group or account."
    );
  }
}
