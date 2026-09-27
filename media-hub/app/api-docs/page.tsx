"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Code2,
  ArrowLeft,
  Copy,
  Check,
  Terminal,
  Send,
  Download,
  Archive,
  Layers,
} from "lucide-react";

export default function ApiDocsPage() {
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);
  const [activeLang, setActiveLang] = useState<"curl" | "js" | "python">("curl");

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(id);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const ENDPOINTS = [
    {
      id: "analyze",
      method: "POST",
      path: "/api/analyze",
      title: "Analyze Media URL",
      description:
        "Analyzes any supported media link, identifies the source platform, and returns unified metadata along with available video, audio, or image stream formats.",
      requestBody: JSON.stringify(
        {
          url: "https://www.tiktok.com/@tiktok/video/7106594312292453678",
        },
        null,
        2
      ),
      responseBody: JSON.stringify(
        {
          success: true,
          data: {
            id: "7106594312292453678",
            platform: "tiktok",
            platformName: "TikTok",
            title: "Check out this amazing video!",
            author: "tiktok",
            thumbnail: "https://p16-sign.tiktokcdn.com/...",
            duration: 24,
            type: "video",
            originalUrl: "https://www.tiktok.com/@tiktok/video/7106594312292453678",
            formats: [
              {
                id: "tt-hd-nowm",
                quality: "HD 1080p (No Watermark)",
                extension: "mp4",
                type: "video",
                url: "https://v16m.tiktokcdn.com/...",
                filesize: 14285920,
              },
            ],
          },
        },
        null,
        2
      ),
      curl: `curl -X POST https://your-domain.com/api/analyze \\
  -H "Content-Type: application/json" \\
  -d '{"url": "https://www.tiktok.com/@tiktok/video/7106594312292453678"}'`,
      js: `const response = await fetch('/api/analyze', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ url: 'https://www.tiktok.com/@tiktok/video/7106594312292453678' })
});
const data = await response.json();
console.log(data);`,
      python: `import requests

res = requests.post('https://your-domain.com/api/analyze', json={
    'url': 'https://www.tiktok.com/@tiktok/video/7106594312292453678'
})
print(res.json())`,
    },
    {
      id: "download",
      method: "GET",
      path: "/api/download",
      title: "Stream Proxy & Force Download",
      description:
        "Proxies the target media stream directly to the client while bypassing browser CORS constraints and attaching appropriate Content-Disposition headers for direct file download.",
      requestBody: "Query Parameters: ?url={stream_url}&filename={output_filename.mp4}",
      responseBody: "Binary File Stream (video/mp4, audio/mpeg, image/jpeg, etc.)",
      curl: `curl -L -O -J "https://your-domain.com/api/download?url=https%3A%2F%2Ftarget-stream.com%2Fvideo.mp4&filename=video.mp4"`,
      js: `// Directly trigger in browser
window.location.href = \`/api/download?url=\${encodeURIComponent(streamUrl)}&filename=\${encodeURIComponent(filename)}\`;`,
      python: `import requests

res = requests.get('https://your-domain.com/api/download', params={
    'url': stream_url,
    'filename': 'my_video.mp4'
}, stream=True)

with open('my_video.mp4', 'wb') as f:
    for chunk in res.iter_content(chunk_size=8192):
        f.write(chunk)`,
    },
    {
      id: "zip",
      method: "POST",
      path: "/api/zip",
      title: "Dynamic Album ZIP Generator",
      description:
        "Packages multiple images or media assets dynamically into a compressed ZIP file and streams it straight to the client without temporary server disk storage.",
      requestBody: JSON.stringify(
        {
          items: [
            { url: "https://example.com/photo1.jpg", filename: "photo_1.jpg" },
            { url: "https://example.com/photo2.jpg", filename: "photo_2.jpg" },
          ],
          zipName: "tiktok_album",
        },
        null,
        2
      ),
      responseBody: "Binary Stream (application/zip)",
      curl: `curl -X POST https://your-domain.com/api/zip \\
  -H "Content-Type: application/json" \\
  -d '{"items": [{"url": "https://...", "filename": "1.jpg"}], "zipName": "album"}' \\
  --output album.zip`,
      js: `const res = await fetch('/api/zip', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ items, zipName: 'album' })
});
const blob = await res.blob();`,
      python: `import requests

res = requests.post('https://your-domain.com/api/zip', json={
    'items': [{'url': 'https://...', 'filename': '1.jpg'}],
    'zipName': 'album'
})
with open('album.zip', 'wb') as f:
    f.write(res.content)`,
    },
  ];

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-10">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400 hover:text-white transition-colors mb-4"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to Downloader</span>
        </Link>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600/20 text-violet-400 border border-violet-500/30">
            <Code2 className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-white font-display">
              Developer API Documentation
            </h1>
            <p className="text-sm text-zinc-400 mt-1">
              Programmatic access for extracting media, streaming proxies, and album ZIP creation.
            </p>
          </div>
        </div>
      </div>

      {/* Language Toggle */}
      <div className="flex items-center justify-between gap-4 mb-8 pb-4 border-b border-white/5">
        <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
          Example Code Format:
        </span>
        <div className="flex rounded-xl bg-white/5 p-1 border border-white/10">
          {(["curl", "js", "python"] as const).map((lang) => (
            <button
              key={lang}
              onClick={() => setActiveLang(lang)}
              className={`rounded-lg px-3 py-1 text-xs font-medium uppercase transition-all ${
                activeLang === lang
                  ? "bg-violet-600 text-white shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>

      {/* Endpoints */}
      <div className="space-y-12">
        {ENDPOINTS.map((ep) => (
          <div
            key={ep.id}
            className="rounded-3xl glass-panel p-6 sm:p-8 border border-white/5 space-y-6"
          >
            {/* Endpoint Method & Path */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span
                  className={`rounded-lg px-2.5 py-1 text-xs font-black tracking-wide ${
                    ep.method === "POST"
                      ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                      : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                  }`}
                >
                  {ep.method}
                </span>
                <span className="font-mono text-base font-bold text-white">
                  {ep.path}
                </span>
              </div>
              <span className="text-xs text-zinc-400 font-medium">
                {ep.title}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              {ep.description}
            </p>

            {/* Code Snippet Box */}
            <div>
              <div className="flex items-center justify-between bg-black/60 px-4 py-2 rounded-t-xl border-t border-x border-white/10 text-xs text-zinc-400">
                <span className="font-mono">{activeLang.toUpperCase()} Request</span>
                <button
                  onClick={() => copyCode(ep[activeLang], `${ep.id}-req`)}
                  className="flex items-center gap-1 hover:text-white transition-colors"
                >
                  {copiedIndex === `${ep.id}-req` ? (
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="h-3.5 w-3.5" />
                  )}
                  <span>{copiedIndex === `${ep.id}-req` ? "Copied" : "Copy"}</span>
                </button>
              </div>
              <pre className="overflow-x-auto rounded-b-xl bg-[#242321] p-4 text-xs font-mono text-zinc-200 border border-white/10 leading-relaxed">
                <code>{ep[activeLang]}</code>
              </pre>
            </div>

            {/* Response Example */}
            <div>
              <div className="flex items-center justify-between bg-black/60 px-4 py-2 rounded-t-xl border-t border-x border-white/10 text-xs text-zinc-400">
                <span className="font-mono">Expected Response</span>
                <button
                  onClick={() => copyCode(ep.responseBody, `${ep.id}-res`)}
                  className="flex items-center gap-1 hover:text-white transition-colors"
                >
                  {copiedIndex === `${ep.id}-res` ? (
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="h-3.5 w-3.5" />
                  )}
                  <span>{copiedIndex === `${ep.id}-res` ? "Copied" : "Copy"}</span>
                </button>
              </div>
              <pre className="overflow-x-auto rounded-b-xl bg-[#242321] p-4 text-xs font-mono text-emerald-300/90 border border-white/10 max-h-64">
                <code>{ep.responseBody}</code>
              </pre>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
