import { NextRequest, NextResponse } from "next/server";
import archiver from "archiver";
import axios from "axios";
import { PassThrough } from "stream";
import { sanitizeFilename } from "@/lib/utils";
import { parsePublicUrl } from "@/lib/public-url";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { items, zipName } = body as {
      items: { url: string; filename: string }[];
      zipName?: string;
    };

    if (!Array.isArray(items) || items.length === 0 || items.length > 20) {
      return NextResponse.json(
        { error: "Provide between 1 and 20 media items for the ZIP archive." },
        { status: 400 }
      );
    }

    let publicItems: { url: string; filename: string }[];
    try {
      publicItems = items.map((item) => ({
        url: parsePublicUrl(item.url).href,
        filename: sanitizeFilename(item.filename || "media_file"),
      }));
    } catch (error) {
      return NextResponse.json(
        { error: error instanceof Error ? error.message : "Invalid media URL" },
        { status: 400 }
      );
    }

    const archiveFilename = sanitizeFilename(zipName || "mediahub_album") + ".zip";

    const passThrough = new PassThrough();
    const archive = archiver("zip", {
      zlib: { level: 6 },
    });

    archive.pipe(passThrough);

    // Fetch and append all items asynchronously
    (async () => {
      for (let i = 0; i < publicItems.length; i++) {
        const item = publicItems[i];
        try {
          const resp = await axios.get(item.url, {
            responseType: "arraybuffer",
            timeout: 20000,
            maxContentLength: 8 * 1024 * 1024,
            headers: {
              "User-Agent":
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            },
          });
          const entryName = sanitizeFilename(item.filename || `item_${i + 1}.jpg`);
          archive.append(Buffer.from(resp.data), { name: entryName });
        } catch (err) {
          // If single item fails, continue with others
          console.error(`Failed to fetch item ${i + 1} for zip:`, err);
        }
      }
      await archive.finalize();
    })().catch((err) => {
      console.error("Archive generation error:", err);
      passThrough.destroy(err);
    });

    const webStream = new ReadableStream({
      start(controller) {
        passThrough.on("data", (chunk) => controller.enqueue(chunk));
        passThrough.on("end", () => controller.close());
        passThrough.on("error", (err) => controller.error(err));
      },
      cancel() {
        passThrough.destroy();
      },
    });

    const headers = new Headers();
    headers.set("Content-Type", "application/zip");
    headers.set(
      "Content-Disposition",
      `attachment; filename="${encodeURIComponent(archiveFilename)}"; filename*=UTF-8''${encodeURIComponent(archiveFilename)}`
    );

    return new Response(webStream, { headers });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to generate ZIP archive." },
      { status: 500 }
    );
  }
}
