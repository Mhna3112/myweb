import { MediaInfo, MediaProvider } from "./types";
import { extractWithUniversalEngine } from "./universal-engine";

export class TwitchProvider implements MediaProvider {
  id = "twitch" as const;
  name = "Twitch";
  domains = ["twitch.tv", "clips.twitch.tv"];

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

    throw new Error("Unable to analyze Twitch clip or stream. Only public, completed clips and VODs are supported.");
  }
}
