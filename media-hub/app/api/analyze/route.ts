import { NextRequest, NextResponse } from "next/server";
import { ProviderManager } from "@/lib/providers/provider-manager";
import { parsePublicUrl } from "@/lib/public-url";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { url } = body;

    if (!url || typeof url !== "string") {
      return NextResponse.json(
        { success: false, error: "Please provide a valid media URL." },
        { status: 400 }
      );
    }

    const providerManager = ProviderManager.getInstance();
    const mediaInfo = await providerManager.analyze(parsePublicUrl(url).href);

    return NextResponse.json({
      success: true,
      data: mediaInfo,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Unable to extract media from this URL.",
      },
      { status: 422 }
    );
  }
}
