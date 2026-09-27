import { NextResponse } from "next/server";
import { ProviderManager } from "@/lib/providers/provider-manager";

export async function GET() {
  const capabilities = ProviderManager.getInstance().getCapabilities();
  return NextResponse.json({
    success: true,
    count: capabilities.length,
    platforms: capabilities,
  });
}
