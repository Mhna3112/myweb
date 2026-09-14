import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RotateCw, Compass, RefreshCw, Layers } from 'lucide-react';
import { sound } from '../utils/sound';

export default function LogoConstruction({ lang }) {
  const [selectedLogo, setSelectedLogo] = useState('kunsthaus');
  const [isRotating, setIsRotating] = useState(false);
  const [showGridLines, setShowGridLines] = useState(true);
  const [showAnchorPoints, setShowAnchorPoints] = useState(true);
  const [animKey, setAnimKey] = useState(0);

  const triggerRebuild = () => {
    sound.playSnip();
    setAnimKey((prev) => prev + 1);
  };

  const logos = {
    kunsthaus: {
      name: "KUNSTHAUS NORD — PRIMARY MARK",
      subtitle: "Hexagonal 8-Axis Generative Matrix (64 Glyphs)",
      category: "Museum of Contemporary Craft",
      specs: "8 Generating Axes · 64 Variations · Silver Line 1.2pt",
      description: "Built on an eight-by-eight grid yielding sixty-four possible glyphs — one for each permanent collection wing, donor tier, and rotating exhibition."
    },
    hexoak: {
      name: "HEX & OAK DISTILLERY CREST",
      subtitle: "Bavarian Steel Die Antiqua Geometric Monogram",
      category: "Luxury Single-Malt Cask",
      specs: "Concentric Octagon · Steel Die Deboss · 0.75pt Hairline",
      description: "Drawn with the same geometric tool that carved the bottle's wordmark. Debossed onto 240gsm cotton stock with zero foil."
    },
    frequenz: {
      name: "FREQUENZ 24 DYNAMIC RHYTHM",
      subtitle: "BPM Algorithmic Typographic Waveform",
      category: "Avant-Garde Electronic Festival",
      specs: "Variable Pitch Matrix · 66 to 174 BPM Tracking",
      description: "A mechanical kinetic emblem where stroke width and negative space expand or compress according to audio frequency."
    },
    rauhbart: {
      name: "RAUHBART DISPLAY MONOGRAM",
      subtitle: "East German 1962 Sign-Painter Revival",
      category: "Foundry Release & Specimen",
      specs: "472 Glyphs · 1 Weight · 5° Optical Slant",
      description: "Digitized from hand rubbings in the Brno Moravian Archive. Preserves the authentic awkwardness of mid-century signcraft."
    }
  };

  const activeData = logos[selectedLogo];

  return (
    <section id="logo-systems" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-x border-silver/15 relative z-10 bg-carbon-950">
      {/* Section Header */}
      <div className="border-b border-silver/20 pb-4 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4 font-mono text-xs">
        <div>
          <div className="flex items-center gap-2 text-silver font-bold">
            <Compass className="w-4 h-4 text-silver" />
            <span>03 // VECTOR BLUEPRINT & LOGO CONSTRUCTION</span>
          </div>
          <h2 className="font-serif italic font-normal text-3xl sm:text-5xl text-[#FFFFFF] mt-1">
            Constructed Marks
          </h2>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => {
              sound.playClick();
              setIsRotating(!isRotating);
            }}
            className={`px-3 py-1.5 border text-xs font-mono font-bold flex items-center gap-1.5 transition-colors ${
              isRotating ? 'bg-silver text-black border-silver' : 'bg-carbon-850 text-silver border-silver/30 hover:bg-carbon-800'
            }`}
          >
            <RotateCw className={`w-3.5 h-3.5 ${isRotating ? 'animate-spin' : ''}`} />
            <span>{isRotating ? 'ROTATING 360°' : 'ROTATE'}</span>
          </button>

          <button
            onClick={() => {
              sound.playClick();
              setShowGridLines(!showGridLines);
            }}
            className={`px-3 py-1.5 border text-xs font-mono font-bold transition-colors ${
              showGridLines ? 'bg-silver text-black border-silver' : 'bg-carbon-850 text-silver-muted border-silver/20'
            }`}
          >
            GRID: {showGridLines ? 'ON' : 'OFF'}
          </button>

          <button
            onClick={() => {
              sound.playClick();
              setShowAnchorPoints(!showAnchorPoints);
            }}
            className={`px-3 py-1.5 border text-xs font-mono font-bold transition-colors ${
              showAnchorPoints ? 'bg-silver text-black border-silver' : 'bg-carbon-850 text-silver-muted border-silver/20'
            }`}
          >
            NODES: {showAnchorPoints ? 'ON' : 'OFF'}
          </button>

          <button
            onClick={triggerRebuild}
            className="px-3 py-1.5 bg-silver text-black text-xs font-mono font-bold flex items-center gap-1 hover:bg-silver-chrome transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>RE-CONSTRUCT</span>
          </button>
        </div>
      </div>

      {/* Logo Selectors */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8 font-mono text-xs">
        {Object.keys(logos).map((key, idx) => (
          <button
            key={key}
            onClick={() => {
              sound.playClick();
              setSelectedLogo(key);
              triggerRebuild();
            }}
            className={`p-3 text-left border transition-all ${
              selectedLogo === key
                ? 'bg-carbon-800 text-silver-chrome border-silver font-bold shadow-md'
                : 'bg-carbon-900 hover:bg-carbon-850 text-silver-muted border-silver/20'
            }`}
          >
            <div className="text-silver font-mono text-[10px]">MARK // 0{idx + 1}</div>
            <div className="font-serif font-bold text-sm tracking-tight text-[#FFFFFF] mt-0.5">{logos[key].name.split('—')[0]}</div>
            <div className="text-[10px] text-silver-muted truncate mt-0.5">{logos[key].category}</div>
          </button>
        ))}
      </div>

      {/* Main Blueprint Canvas Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border border-silver/25 bg-carbon-850 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        {/* SVG Blueprint Display */}
        <div className="lg:col-span-8 flex items-center justify-center min-h-[380px] sm:min-h-[460px] bg-carbon-950 border border-silver/20 relative overflow-hidden">
          {/* Subtle Silver Grid Lines */}
          <div className="absolute inset-0 bg-[radial-gradient(#D4D4D8_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />

          <div className="absolute top-4 left-4 font-mono text-[10px] text-silver/60 space-y-0.5">
            <div>STUDIO NGUYỄN ĐỨC MẠNH</div>
            <div>PL. 01.A — GENERATING AXES</div>
            <div>METALLIC SILVER FOIL: PANTONE 877 C</div>
          </div>

          <div className="absolute bottom-4 right-4 font-mono text-[10px] text-silver font-bold">
            {activeData.specs}
          </div>

          {/* Animated SVG Container */}
          <motion.div
            key={selectedLogo + animKey}
            animate={isRotating ? { rotate: 360 } : { rotate: 0 }}
            transition={isRotating ? { repeat: Infinity, duration: 18, ease: 'linear' } : { duration: 0.5 }}
            className="w-64 h-64 sm:w-80 sm:h-80 relative flex items-center justify-center"
          >
            <svg viewBox="0 0 200 200" className="w-full h-full">
              {/* Construction Guidelines */}
              {showGridLines && (
                <g className="stroke-silver/25 fill-none stroke-[0.75]" strokeDasharray="3 3">
                  <circle cx="100" cy="100" r="90" />
                  <circle cx="100" cy="100" r="60" />
                  <circle cx="100" cy="100" r="30" />
                  <line x1="0" y1="100" x2="200" y2="100" />
                  <line x1="100" y1="0" x2="100" y2="200" />
                  <line x1="25" y1="57.5" x2="175" y2="142.5" />
                  <line x1="175" y1="57.5" x2="25" y2="142.5" />
                </g>
              )}

              {/* LOGO 1: KUNSTHAUS NORD (Metallic Silver Vector) */}
              {selectedLogo === 'kunsthaus' && (
                <g stroke="#D4D4D8" strokeWidth="1.6" fill="none" strokeLinecap="square">
                  <motion.polygon
                    points="100,15 175,57.5 175,142.5 100,185 25,142.5 25,57.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.4, ease: "easeInOut" }}
                  />
                  <motion.polygon
                    points="100,40 153,70 153,130 100,160 47,130 47,70"
                    strokeWidth="1.2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                  />
                  <motion.line x1="100" y1="15" x2="100" y2="185" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.6 }} />
                  <motion.line x1="25" y1="57.5" x2="175" y2="142.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.8 }} />
                  <motion.line x1="175" y1="57.5" x2="25" y2="142.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.8 }} />
                  <motion.line x1="25" y1="100" x2="175" y2="100" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1 }} />
                  <motion.line x1="62.5" y1="36.25" x2="62.5" y2="163.75" strokeDasharray="4 2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.1 }} />
                  <motion.line x1="137.5" y1="36.25" x2="137.5" y2="163.75" strokeDasharray="4 2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.1 }} />
                  
                  {/* Silver Center & Satellite Nodes */}
                  <circle cx="100" cy="100" r="5" fill="#F4F4F5" stroke="none" />
                  <circle cx="62.5" cy="78.125" r="2.5" fill="#D4D4D8" stroke="none" />
                  <circle cx="137.5" cy="78.125" r="2.5" fill="#D4D4D8" stroke="none" />
                  <circle cx="62.5" cy="121.875" r="2.5" fill="#D4D4D8" stroke="none" />
                  <circle cx="137.5" cy="121.875" r="2.5" fill="#D4D4D8" stroke="none" />
                </g>
              )}

              {/* LOGO 2: HEX & OAK */}
              {selectedLogo === 'hexoak' && (
                <g stroke="#D4D4D8" strokeWidth="2" fill="none">
                  <motion.polygon
                    points="100,25 155,45 175,100 155,155 100,175 45,155 25,100 45,45"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.4 }}
                  />
                  <motion.path
                    d="M70,70 L100,130 L130,70 M100,45 L100,155"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.2, delay: 0.4 }}
                  />
                  <circle cx="100" cy="100" r="8" fill="#F4F4F5" stroke="none" />
                </g>
              )}

              {/* LOGO 3: FREQUENZ */}
              {selectedLogo === 'frequenz' && (
                <g stroke="#D4D4D8" strokeWidth="3" fill="none">
                  <motion.path
                    d="M30,100 Q65,20 100,100 T170,100"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.2 }}
                  />
                  <motion.path
                    d="M30,100 Q65,180 100,100 T170,100"
                    stroke="#E4E4E7"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                  />
                  <line x1="30" y1="50" x2="170" y2="150" strokeWidth="1" strokeDasharray="3 3" />
                </g>
              )}

              {/* LOGO 4: RAUHBART */}
              {selectedLogo === 'rauhbart' && (
                <g stroke="#D4D4D8" strokeWidth="2.5" fill="none">
                  <motion.rect
                    x="40" y="40" width="120" height="120"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1 }}
                  />
                  <motion.path
                    d="M60,60 H140 V95 H95 V140 H60 Z"
                    fill="#D4D4D8"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />
                </g>
              )}

              {/* Anchor Point Handles */}
              {showAnchorPoints && (
                <g className="fill-silver stroke-black stroke-[1.5]">
                  <rect x="96" y="11" width="8" height="8" />
                  <rect x="171" y="53" width="8" height="8" />
                  <rect x="171" y="138" width="8" height="8" />
                  <rect x="96" y="181" width="8" height="8" />
                  <rect x="21" y="138" width="8" height="8" />
                  <rect x="21" y="53" width="8" height="8" />
                </g>
              )}
            </svg>
          </motion.div>
        </div>

        {/* Specs Column */}
        <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="font-mono text-xs text-silver font-bold flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              <span>GEOMETRIC SPECIFICATION</span>
            </div>

            <h3 className="font-serif italic font-normal text-2xl sm:text-3xl text-[#FFFFFF] leading-tight">
              {activeData.name}
            </h3>

            <div className="font-mono text-xs text-silver-chrome">
              {activeData.subtitle}
            </div>

            <p className="font-serif text-base text-[#D4D4D8] leading-relaxed pt-2 border-t border-silver/15">
              {activeData.description}
            </p>

            <div className="bg-carbon-900 p-4 border border-silver/20 font-mono text-xs space-y-2">
              <div className="text-[10px] text-silver-muted uppercase font-bold">GRID TOLERANCE:</div>
              <div className="text-silver-chrome font-semibold">{activeData.specs}</div>
              <div className="text-silver-dark text-[11px]">STUDIO NGUYỄN ĐỨC MẠNH · MONOGRAPH III</div>
            </div>
          </div>

          <div className="pt-4 border-t border-silver/20 font-mono text-[11px] text-silver-muted flex items-center justify-between">
            <span>ISO-216 STANDARD</span>
            <span className="text-silver font-bold">DIE-CUT READY ✓</span>
          </div>
        </div>
      </div>
    </section>
  );
}
