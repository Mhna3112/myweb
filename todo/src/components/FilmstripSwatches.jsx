import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Film, Copy, Check } from 'lucide-react';
import { sound } from '../utils/sound';

export default function FilmstripSwatches({ swatches, lang }) {
  const [selectedSwatch, setSelectedSwatch] = useState(swatches[0]);
  const [copiedHex, setCopiedHex] = useState(null);
  const filmstripRef = useRef(null);

  const handleCopy = (hex) => {
    sound.playClick();
    navigator.clipboard?.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2500);
  };

  return (
    <section id="swatches" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-x border-silver/15 relative z-10 bg-carbon-950">
      {/* Section Header */}
      <div className="border-b border-silver/20 pb-4 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4 font-mono text-xs text-silver-dark">
        <div>
          <div className="flex items-center gap-2 text-silver font-bold">
            <Film className="w-4 h-4 text-silver" />
            <span>05 // COLOR PALETTE · FILM STRIP 10 FRAMES</span>
          </div>
          <h2 className="font-serif italic font-normal text-3xl sm:text-5xl text-[#FFFFFF] mt-1">
            Pure Black, Dark Gray &amp; <em className="text-silver not-italic">Metallic Silver</em>
          </h2>
        </div>

        <div className="font-mono text-xs text-silver">
          <span>SCROLL HORIZONTALLY TO ADVANCE</span>
        </div>
      </div>

      {/* 35mm Filmstrip Strip Container */}
      <div className="relative bg-[#000000] text-silver p-4 sm:p-6 shadow-2xl border-2 border-silver/30 rounded-sm overflow-hidden mb-8">
        {/* Top Sprocket Holes */}
        <div className="flex items-center justify-between gap-4 pb-4 border-b border-silver/20 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-1 shrink-0">
              <div className="sprocket-hole" />
              <span className="font-mono text-[8px] text-silver-muted">{i + 1}A</span>
            </div>
          ))}
        </div>

        {/* Scrubbable Frames List */}
        <div 
          ref={filmstripRef}
          className="flex gap-4 overflow-x-auto py-6 px-2 no-scrollbar cursor-grab active:cursor-grabbing select-none"
        >
          {swatches.map((swatch, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03, y: -4 }}
              onClick={() => {
                sound.playPageTurn();
                setSelectedSwatch(swatch);
              }}
              className={`shrink-0 w-48 sm:w-56 bg-carbon-900 p-3.5 border transition-all duration-200 cursor-pointer ${
                selectedSwatch.hex === swatch.hex
                  ? 'border-silver ring-2 ring-silver shadow-2xl'
                  : 'border-silver/20 hover:border-silver/50'
              }`}
            >
              {/* Frame Header */}
              <div className="flex justify-between items-center font-mono text-[9px] text-silver-dark mb-2 pb-1 border-b border-silver/20">
                <span>FRAME 0{idx + 1}</span>
                <span className="truncate ml-1">{swatch.category.split('(')[0]}</span>
              </div>

              {/* Color Block */}
              <div
                style={{ backgroundColor: swatch.hex }}
                className="w-full h-32 rounded-sm relative shadow-inner mb-3 flex items-end p-2 border border-silver/30"
              >
                <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 bg-black/80 text-silver border border-silver/30 backdrop-blur-xs">
                  {swatch.hex}
                </span>
              </div>

              {/* Swatch Meta */}
              <div className="space-y-1 font-mono text-xs">
                <div className="font-serif italic text-base text-[#FFFFFF]">{swatch.name}</div>
                <div className="text-[10px] text-silver">CMYK: {swatch.cmyk}</div>
                <div className="text-[10px] text-silver-muted">RGB: {swatch.rgb}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Sprocket Holes */}
        <div className="flex items-center justify-between gap-4 pt-4 border-t border-silver/20 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-1 shrink-0">
              <span className="font-mono text-[8px] text-silver-muted">SILVER MONO</span>
              <div className="sprocket-hole" />
            </div>
          ))}
        </div>
      </div>

      {/* Selected Swatch Deck */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-carbon-850 p-6 sm:p-8 border border-silver/25 shadow-xl">
        <div className="lg:col-span-4 flex items-center gap-4">
          <div
            style={{ backgroundColor: selectedSwatch.hex }}
            className="w-24 h-24 sm:w-28 sm:h-28 border-2 border-silver shadow-lg shrink-0"
          />
          <div className="space-y-1 font-mono">
            <div className="text-silver text-xs font-bold uppercase">{selectedSwatch.category}</div>
            <div className="font-serif italic text-2xl text-[#FFFFFF]">{selectedSwatch.name}</div>
            <button
              onClick={() => handleCopy(selectedSwatch.hex)}
              className="mt-2 px-3 py-1 bg-silver text-black hover:bg-silver-chrome transition-colors text-xs font-bold flex items-center gap-1.5 shadow"
            >
              {copiedHex === selectedSwatch.hex ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedHex === selectedSwatch.hex ? 'COPIED HEX!' : `COPY ${selectedSwatch.hex}`}</span>
            </button>
          </div>
        </div>

        <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-4 font-mono text-xs border-t lg:border-t-0 lg:border-l border-silver/20 pt-4 lg:pt-0 lg:pl-6">
          <div className="bg-carbon-900 p-3 border border-silver/20">
            <span className="text-[10px] text-silver-muted uppercase block font-bold">PROCESS CMYK:</span>
            <span className="font-bold text-[#FFFFFF] text-sm">{selectedSwatch.cmyk}</span>
          </div>
          <div className="bg-carbon-900 p-3 border border-silver/20">
            <span className="text-[10px] text-silver-muted uppercase block font-bold">DEVICE RGB:</span>
            <span className="font-bold text-[#FFFFFF] text-sm">{selectedSwatch.rgb}</span>
          </div>
          <div className="bg-carbon-900 p-3 border border-silver/20 col-span-2 sm:col-span-1">
            <span className="text-[10px] text-silver-muted uppercase block font-bold">INK PURITY:</span>
            <span className="font-bold text-silver-chrome text-sm">METALLIC SILVER FOIL</span>
          </div>
        </div>
      </div>
    </section>
  );
}
