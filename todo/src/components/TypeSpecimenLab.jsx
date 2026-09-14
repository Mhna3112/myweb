import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Move, Type, FileDown, CheckCircle2 } from 'lucide-react';
import { sound } from '../utils/sound';

export default function TypeSpecimenLab({ specimens, lang }) {
  const [activeSpecimenId, setActiveSpecimenId] = useState(specimens[0]?.id || 'spec-01');
  const [customText, setCustomText] = useState("A DECADE OF REFUSING THE BRIEF 2024");
  const [fontSize, setFontSize] = useState(38);
  const [fontWeight, setFontWeight] = useState(700);
  const [letterSpacing, setLetterSpacing] = useState(0);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const activeSpec = specimens.find(s => s.id === activeSpecimenId) || specimens[0];

  const handleDownloadPDF = () => {
    sound.playSnip();
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);

    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>${activeSpec.name} — Specimen Sheet · Studio Nguyễn Đức Mạnh</title>
          <style>
            @page { size: A4 landscape; margin: 20mm; }
            body {
              font-family: ${activeSpec.fontFamily};
              background: #000000;
              color: #F4F4F5;
              padding: 24px;
              margin: 0;
            }
            .header {
              border-bottom: 2px solid #D4D4D8;
              padding-bottom: 12px;
              display: flex;
              justify-content: space-between;
              font-family: monospace;
              font-size: 11px;
            }
            .title {
              font-size: 64px;
              font-weight: ${fontWeight};
              letter-spacing: ${letterSpacing}px;
              margin: 28px 0 12px 0;
              line-height: 0.95;
            }
            .sample {
              font-size: ${fontSize}px;
              font-weight: ${fontWeight};
              letter-spacing: ${letterSpacing}px;
              margin: 24px 0;
              line-height: 1.2;
            }
            .character-set {
              font-size: 18px;
              line-height: 1.8;
              letter-spacing: 3px;
              margin-top: 32px;
              padding-top: 24px;
              border-top: 1px dashed #D4D4D8;
            }
            .footer {
              margin-top: 40px;
              font-family: monospace;
              font-size: 10px;
              border-top: 1px solid #71717A;
              padding-top: 8px;
              display: flex;
              justify-content: space-between;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <div><strong>STUDIO NGUYỄN ĐỨC MẠNH</strong> // ${activeSpec.name}</div>
            <div>STYLE: ${activeSpec.style}</div>
            <div>YEAR: ${activeSpec.year}</div>
          </div>
          <div class="title">${activeSpec.name}</div>
          <div style="font-family: sans-serif; font-size: 14px; color: #A1A1AA;">${activeSpec.tagline}</div>
          
          <div class="sample">${customText || activeSpec.sampleText}</div>
          
          <div class="character-set">
            <strong>GLYPH CATALOG (BASIC LATIN & EXTENDED):</strong><br/>
            ${activeSpec.characterSet}
          </div>

          <div class="footer">
            <div>MONOGRAPH III · MMXXIV · PRINTED ON TAKEAU SATOGAMI CHARCOAL 160GSM</div>
            <div>METALLIC SILVER FOIL · STUDIO NGUYỄN ĐỨC MẠNH</div>
          </div>
          <script>
            window.onload = function() {
              window.print();
            };
          </script>
        </body>
        </html>
      `);
      printWindow.document.close();
    }
  };

  return (
    <section id="specimens" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-x border-silver/15 relative z-10">
      {/* Section Header */}
      <div className="border-b border-silver/20 pb-4 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4 font-mono text-xs text-silver-dark">
        <div>
          <div className="flex items-center gap-2 text-silver font-bold">
            <Type className="w-4 h-4 text-silver" />
            <span>04 // DRAGGABLE TYPE SPECIMENS ON DESK</span>
          </div>
          <h2 className="font-serif italic font-normal text-3xl sm:text-5xl text-[#FFFFFF] mt-1">
            Specimens, <em className="text-silver not-italic">loose on the desk</em>
          </h2>
        </div>

        {/* Specimen Sheet Export */}
        <button
          onClick={handleDownloadPDF}
          className="px-4 py-2.5 bg-silver text-black font-bold hover:bg-silver-chrome transition-all duration-200 flex items-center gap-2 shadow font-mono text-xs"
        >
          {downloadSuccess ? (
            <>
              <CheckCircle2 className="w-4 h-4 text-black" />
              <span>{lang === 'vi' ? 'ĐANG TẢI BẢNG IN...' : 'OPENING SPECIMEN SHEET...'}</span>
            </>
          ) : (
            <>
              <FileDown className="w-4 h-4" />
              <span>{lang === 'vi' ? 'TẢI SPECIMEN (PDF / IN)' : 'DOWNLOAD SPEC.PDF'}</span>
            </>
          )}
        </button>
      </div>

      {/* Interactive Controls Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 bg-carbon-850 p-4 border border-silver/25 font-mono text-xs shadow-md">
        {/* Custom Text Input */}
        <div>
          <label className="text-silver text-[10px] block uppercase mb-1 font-bold">
            {lang === 'vi' ? 'NHẬP CHỮ THỬ NGHIỆM:' : 'TYPE TEST STRING / PANGRAM:'}
          </label>
          <input
            type="text"
            value={customText}
            onChange={(e) => setCustomText(e.target.value)}
            placeholder="Type anything to test glyphs..."
            className="w-full bg-carbon-950 border border-silver/30 px-3 py-1.5 text-xs text-silver focus:outline-none focus:border-silver"
          />
        </div>

        {/* Font Size & Weight */}
        <div>
          <div className="flex justify-between text-[10px] text-silver-muted uppercase font-bold mb-1">
            <span>FONT SIZE: {fontSize}PX</span>
            <span>WEIGHT: {fontWeight}</span>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="range"
              min="20"
              max="96"
              value={fontSize}
              onChange={(e) => setFontSize(Number(e.target.value))}
              className="w-full accent-silver cursor-pointer"
            />
            <input
              type="range"
              min="300"
              max="900"
              step="100"
              value={fontWeight}
              onChange={(e) => setFontWeight(Number(e.target.value))}
              className="w-full accent-silver-chrome cursor-pointer"
            />
          </div>
        </div>

        {/* Tracking */}
        <div>
          <div className="flex justify-between text-[10px] text-silver-muted uppercase font-bold mb-1">
            <span>TRACKING: {letterSpacing}PX</span>
            <span className="text-silver">DRAG CARDS FREELY</span>
          </div>
          <input
            type="range"
            min="-4"
            max="18"
            value={letterSpacing}
            onChange={(e) => setLetterSpacing(Number(e.target.value))}
            className="w-full accent-silver cursor-pointer"
          />
        </div>
      </div>

      {/* Draggable Specimen Cards Matrix */}
      <div className="relative min-h-[500px] bg-carbon-950 border border-dashed border-silver/30 p-4 sm:p-6 overflow-hidden">
        <div className="absolute top-3 left-4 font-mono text-[10px] text-silver/70 flex items-center gap-1">
          <Move className="w-3 h-3 text-silver" />
          <span>↑ DRAG SPECIMEN CARDS · PINCH OR USE SLIDER TO SCALE · ↓</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
          {specimens.map((spec, idx) => (
            <motion.div
              key={spec.id}
              drag
              dragConstraints={{ left: -80, right: 80, top: -50, bottom: 50 }}
              whileDrag={{ scale: 1.03, zIndex: 30, boxShadow: "0 25px 50px rgba(0,0,0,0.7)" }}
              onClick={() => {
                sound.playClick();
                setActiveSpecimenId(spec.id);
              }}
              className={`p-6 border cursor-grab active:cursor-grabbing transition-all duration-200 relative ${spec.colorTheme} ${
                activeSpecimenId === spec.id ? 'ring-2 ring-silver shadow-2xl scale-[1.01]' : 'shadow-lg opacity-90 hover:opacity-100'
              }`}
            >
              {/* Header */}
              <div className="flex items-center justify-between font-mono text-[10px] uppercase text-silver-dark pb-3 border-b border-silver/30 mb-4">
                <span>NO. 0{idx + 1} / {spec.name}</span>
                <span>{spec.year}</span>
              </div>

              {/* Monogram / Big Aa */}
              <div className="font-serif font-bold text-6xl text-silver-chrome text-center py-2 select-none">
                {spec.name.slice(0, 1)}<em className="font-normal italic text-silver-dark">{spec.name.slice(1, 2).toLowerCase()}</em>
              </div>

              {/* Sample String */}
              <div
                style={{
                  fontFamily: spec.fontFamily,
                  fontSize: `${Math.min(fontSize, 32)}px`,
                  fontWeight: fontWeight,
                  letterSpacing: `${letterSpacing}px`,
                  lineHeight: 1.15,
                }}
                className="my-3 text-center break-words min-h-[50px] flex items-center justify-center select-none text-[#F4F4F5]"
              >
                {customText || spec.sampleText}
              </div>

              {/* Tagline */}
              <div className="font-serif italic text-xs text-silver-dark text-center pt-3 border-t border-silver/20">
                — {spec.tagline} —
              </div>

              {/* Glyph Row */}
              <div 
                style={{ fontFamily: spec.fontFamily }} 
                className="text-[11px] text-silver-muted tracking-widest pt-2 truncate text-center select-none"
              >
                {spec.characterSet}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
