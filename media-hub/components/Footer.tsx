"use client";

import React from "react";
import Link from "next/link";

export const Footer: React.FC = () => (
  <footer className="border-t border-[#474641] bg-[#2b2a27] py-8 text-xs text-zinc-400">
    <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="font-display text-lg font-bold text-white">
          Media<span className="text-violet-400">Hub</span>
        </Link>
        <nav aria-label="Footer links" className="flex flex-wrap gap-x-5 gap-y-2">
          <Link href="/platforms" className="hover:text-white">Platforms</Link>
          <Link href="/history" className="hover:text-white">History</Link>
          <Link href="/api-docs" className="hover:text-white">API Docs</Link>
          <Link href="/about" className="hover:text-white">About &amp; policies</Link>
          <a href="https://ducmanh.xyz/" className="hover:text-white">Portfolio</a>
        </nav>
      </div>
      <div className="flex flex-col gap-2 border-t border-white/10 pt-4 sm:flex-row sm:justify-between">
        <p>Download only media you have the right to use. Private and DRM-protected content is not supported.</p>
        <p>© {new Date().getFullYear()} MediaHub</p>
      </div>
    </div>
  </footer>
);
