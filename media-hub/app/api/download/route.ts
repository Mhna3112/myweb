import { NextRequest, NextResponse } from "next/server";
import { sanitizeFilename } from "@/lib/utils";
import { parsePublicUrl } from "@/lib/public-url";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const mediaUrl = searchParams.get("url");
    const rawFilename = searchParams.get("filename") || "media_download";

    if (!mediaUrl) {
      return NextResponse.json({ error: "Missing media URL" }, { status: 400 });
    }

    let publicUrl: URL;
    try {
      publicUrl = parsePublicUrl(mediaUrl);
    } catch (error) {
      return NextResponse.json(
        { error: error instanceof Error ? error.message : "Invalid media URL" },
        { status: 400 }
      );
    }
    const filename = sanitizeFilename(rawFilename);

    let origin = "";
    try {
      origin = publicUrl.origin;
    } catch {
      origin = "";
    }

    // Forward range header for accelerated multi-segment / resumable downloads
    const rangeHeader = req.headers.get("range");

    const upstreamHeaders: Record<string, string> = {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    };

    if (origin) {
      upstreamHeaders["Referer"] = origin;
    }

    if (rangeHeader) {
      upstreamHeaders["Range"] = rangeHeader;
    }

    const response = await fetch(publicUrl.href, {
      headers: upstreamHeaders,
    });

    if (!response.ok && response.status !== 206) {
      return NextResponse.json(
        { error: `Upstream media stream returned status: ${response.status} ${response.statusText}` },
        { status: response.status }
      );
    }

    const contentType = response.headers.get("content-type") || "application/octet-stream";
    const contentLength = response.headers.get("content-length");
    const contentRange = response.headers.get("content-range");

    const headers = new Headers();
    headers.set("Content-Type", contentType);
    headers.set("Accept-Ranges", "bytes");
    headers.set(
      "Content-Disposition",
      `attachment; filename="${encodeURIComponent(filename)}"; filename*=UTF-8''${encodeURIComponent(filename)}`
    );

    if (contentLength) {
      headers.set("Content-Length", contentLength);
    }

    if (contentRange) {
      headers.set("Content-Range", contentRange);
    }

    headers.set("Cache-Control", "private, no-store");

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to download media stream." },
      { status: 500 }
    );
  }
}
