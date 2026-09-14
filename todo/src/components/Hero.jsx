import React from 'react';
import { motion } from 'framer-motion';
import { sound } from '../utils/sound';

export default function Hero({ profile, lang, projects }) {
  const fullName = (profile.name || "NGUYỄN ĐỨC MẠNH").toUpperCase();
  
  // Split name for the 2-line layout
  let line1 = "NGUYỄN ĐỨC";
  let line2 = "MẠNH";
  
  if (fullName.includes(' ')) {
    const parts = fullName.split(' ');
    if (parts.length >= 3) {
      line1 = parts.slice(0, -1).join(' ');
      line2 = parts[parts.length - 1];
    } else {
      line1 = parts[0];
      line2 = parts.slice(1).join(' ');
    }
  } else {
    line1 = fullName;
    line2 = "";
  }

  // Motions from todo2.html
  const motions = [
    { y: -120, x: 0, opacity: 0, rotate: -8, scale: 1 },
    { y: 120, x: 0, opacity: 0, rotate: 6, scale: 1 },
    { x: -100, y: 0, opacity: 0, rotate: -4, scale: 1 },
    { x: 100, y: 0, opacity: 0, rotate: 5, scale: 1 },
    { scale: 0, x: 0, y: 0, opacity: 0, rotate: 180 },
    { y: -80, x: 0, opacity: 0, rotate: 12, scale: 1 },
  ];

  const line1Chars = Array.from(line1);
  const line2Chars = Array.from(line2);

  return (
    <div className="relative">
      {/* ========== RUNNING HEAD (Metallic Silver) ========== */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="fixed top-0 left-0 right-0 z-40 px-6 sm:px-10 py-5 flex justify-between items-center font-sans text-[10px] sm:text-[11px] font-medium tracking-[0.25em] uppercase text-silver pointer-events-none mix-blend-difference select-none"
      >
        <span>{profile.name || "NGUYỄN ĐỨC MẠNH"}</span>
        <span className="hidden sm:inline">PORTFOLIO · 2026</span>
        <span>P. 001</span>
      </motion.div>

      {/* ========== HERO SECTION ========== */}
      <section id="hero" className="min-h-screen flex flex-col justify-between pt-16 pb-8 px-6 sm:px-12 max-w-full mx-auto relative z-10 select-none">
        
        {/* Top Meta Row (Metallic Silver) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.6 }}
          className="flex justify-between items-center font-mono text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-silver-dark pt-2"
        >
          <span>{profile.edition || "VOL. I / PORTFOLIO"}</span>
          <span className="text-silver font-normal">{lang === 'vi' ? 'HỌC — XÂY DỰNG — THỬ NGHIỆM' : 'LEARNING · BUILDING · EXPERIMENTING'}</span>
          <span className="hidden sm:inline text-silver-dark">2026</span>
        </motion.div>

        {/* Center Hero Name Treatment with Kinetic Entrance Animation */}
        <div className="my-auto py-12 text-center flex flex-col items-center justify-center">
          <h1 className="flex flex-col items-center justify-center leading-none tracking-[-0.035em]">
            
            {/* Line 1: NGUYỄN ĐỨC (Crisp Silver White #FFFFFF) */}
            <span className="font-serif font-bold text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] text-[#FFFFFF] leading-[0.88] block text-center drop-shadow-sm">
              {line1Chars.map((char, i) => {
                const m = motions[i % motions.length];
                return (
                  <motion.span
                    key={`l1-${i}`}
                    initial={m}
                    animate={{ x: 0, y: 0, opacity: 1, rotate: 0, scale: 1 }}
                    transition={{
                      duration: 1.4,
                      ease: [0.16, 1, 0.3, 1], // expo.out
                      delay: 0.2 + i * 0.06,
                    }}
                    className="inline-block transform-gpu"
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                );
              })}
            </span>

            {/* Line 2: MẠNH (Same Crisp Silver White #FFFFFF, Italic Serif) */}
            {line2 && (
              <span className="font-serif italic font-medium text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] xl:text-[12.5rem] text-[#FFFFFF] leading-[0.85] block text-center mt-1 sm:mt-3 drop-shadow-sm">
                {line2Chars.map((char, i) => {
                  const m = motions[(i + line1Chars.length) % motions.length];
                  return (
                    <motion.span
                      key={`l2-${i}`}
                      initial={m}
                      animate={{ x: 0, y: 0, opacity: 1, rotate: 0, scale: 1 }}
                      transition={{
                        duration: 1.4,
                        ease: [0.16, 1, 0.3, 1],
                        delay: 0.2 + (i + line1Chars.length) * 0.06,
                      }}
                      className="inline-block transform-gpu"
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </motion.span>
                  );
                })}
              </span>
            )}
          </h1>

        </div>

        {/* Bottom Meta Row */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.8 }}
          className="flex justify-between items-center font-mono text-[10px] sm:text-[11px] tracking-[0.18em] uppercase text-silver-dark pb-2"
        >
          <span>{profile.location || "VIỆT NAM"}</span>
          <a 
            href="#projects" 
            onClick={() => sound.playPageTurn()} 
            className="text-silver hover:text-white transition-colors flex items-center gap-1 font-medium"
          >
            <span>↓ {lang === 'vi' ? 'XEM DỰ ÁN' : 'VIEW PROJECTS'}</span>
          </a>
          <span className="hidden sm:inline">PROGRAMMING / WEB / TECHNOLOGY</span>
        </motion.div>
      </section>

      {/* ========== ROMAN DIVIDER I ========== */}
      <div className="roman-divider">
        <span className="roman-numeral">I</span>
        <span>— {lang === 'vi' ? 'Lời Nói Đầu' : 'Preface'} —</span>
      </div>

      {/* ========== MANIFESTO SECTION ========== */}
      <section id="manifesto" className="py-16 px-6 sm:px-10 max-w-4xl mx-auto relative z-10 text-center">
        <div className="font-sans text-[11px] font-medium tracking-[0.3em] uppercase text-silver mb-4">
          A NOTE FROM THE STUDIO
        </div>

        <h2 className="font-serif italic text-3xl sm:text-5xl lg:text-6xl text-[#FFFFFF] font-normal leading-[1.08] mb-12 max-w-3xl mx-auto">
          {lang === 'vi' ? (
            <>Một thập kỷ kiên định từ chối <em className="text-white not-italic border-b border-silver/40">bản brief sáo rỗng</em>.</>
          ) : (
            <>A decade of refusing <em className="text-white not-italic border-b border-silver/40">the brief</em> as written.</>
          )}
        </h2>

        <div className="font-serif text-lg sm:text-xl text-[#E4E4E7]/85 leading-relaxed text-justify space-y-6 max-w-3xl mx-auto">
          {(lang === 'vi' ? profile.manifestoBodyVi : profile.manifestoBody)?.map((paragraph, idx) => (
            <p key={idx}>
              {paragraph}
            </p>
          ))}
        </div>

        {/* Signature */}
        <div className="mt-14 text-right font-serif italic text-white text-xl space-y-1">
          <div>{profile.name || "Nguyễn Đức Mạnh"}</div>
          <div className="font-mono text-[11px] not-italic tracking-[0.2em] uppercase text-silver-dark">
            {profile.location || "Việt Nam"} · 2026
          </div>
        </div>
      </section>

      {/* ========== ROMAN DIVIDER II ========== */}
      <div className="roman-divider">
        <span className="roman-numeral">II</span>
        <span>— {lang === 'vi' ? 'Mục Lục' : 'Contents'} —</span>
      </div>

      {/* ========== CONTENTS / INDEX ========== */}
      <section className="py-12 px-6 sm:px-10 max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <span className="font-sans text-[11px] font-medium tracking-[0.3em] uppercase text-silver">
            {projects.length} {lang === 'vi' ? 'DỰ ÁN · 2026' : 'PROJECTS · 2026'}
          </span>
          <h3 className="font-serif italic text-4xl sm:text-5xl text-[#FFFFFF] font-normal mt-2">
            {lang === 'vi' ? 'Mục Lục' : 'Contents'}
          </h3>
        </div>

        <div className="border-t border-silver/20 divide-y divide-silver/10 font-serif">
          {projects.map((p, idx) => (
            <a
              key={p.id}
              href="#projects"
              onClick={() => sound.playPageTurn()}
              className="py-5 px-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 hover:bg-carbon-800/60 transition-all group cursor-pointer"
            >
              <div className="flex items-baseline gap-4 sm:gap-8">
                <span className="font-mono text-xs text-silver">0{idx + 1} ——</span>
                <span className="text-2xl sm:text-3xl text-[#E4E4E7] group-hover:text-[#FFFFFF] transition-colors">
                  {p.title}
                </span>
              </div>
              <div className="flex items-center justify-between sm:justify-end gap-6">
                <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-silver-muted">
                  {p.category}
                </span>
                <span className="font-mono text-xs text-silver-dark">
                  {p.catalogCode.split('·')[1]?.trim() || `P. 0${(idx + 1) * 25}`}
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ========== ROMAN DIVIDER III ========== */}
      <div className="roman-divider">
        <span className="roman-numeral">III</span>
        <span>— {lang === 'vi' ? 'Dự Án' : 'Projects'} —</span>
      </div>
    </div>
  );
}
