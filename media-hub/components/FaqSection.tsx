"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQS = [
  {
    q: "What links can I use?",
    a: "Paste a public post URL from a supported platform or a direct video, image, or audio file link. Available formats depend on what the source makes accessible.",
  },
  {
    q: "Why might a link not work?",
    a: "Private, restricted, DRM-protected, or unsupported links may not expose downloadable media. Try a direct public file link or another public post.",
  },
  {
    q: "Can I save several photos together?",
    a: "When a post exposes multiple images, you can select the ones you want and download them as a ZIP file.",
  },
  {
    q: "Where is my history saved?",
    a: "Your download history is stored locally in this browser. You can view or clear it from the History page.",
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-12 md:py-16 border-t border-white/5 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white font-display">
            Common questions
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl glass-panel border border-white/5 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-semibold text-white hover:text-violet-300 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="h-4 w-4 text-violet-400 shrink-0" />
                    <span>{faq.q}</span>
                  </div>
                  <ChevronDown
                    className={`h-4 w-4 text-zinc-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180 text-violet-400" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-400 border-t border-white/5 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
