import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Edit3 } from 'lucide-react';
import { sound } from '../utils/sound';

export default function Navbar({ 
  profile, 
  lang, 
  setLang, 
  soundMuted, 
  setSoundMuted, 
  onOpenProfileEditor 
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const isMuted = sound.toggleMute();
    setSoundMuted(isMuted);
    if (!isMuted) sound.playClick();
  };

  const navLinks = [
    { href: "#hero", label: "00 GREETING", labelVi: "00 LỜI CHÀO" },
    { href: "#projects", label: "01 PROJECTS", labelVi: "01 DỰ ÁN" },
    { href: "#colophon", label: "02 CONTACT", labelVi: "02 LIÊN HỆ" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-[#050507]/95 backdrop-blur-md border-b border-silver/20 py-2.5 shadow-2xl opacity-100' 
        : 'opacity-0 pointer-events-none py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between font-mono text-xs text-silver">
        {/* Left branding */}
        <a 
          href="#hero" 
          onClick={() => sound.playClick()}
          className="pointer-events-auto flex items-center gap-3 text-silver hover:text-white transition-colors"
        >
          <div className="w-6 h-6 bg-silver text-black flex items-center justify-center font-serif font-bold text-sm">
            M
          </div>
          <span className="font-serif font-bold text-base tracking-normal text-[#FFFFFF]">
            {profile.name || "NGUYỄN ĐỨC MẠNH"}
          </span>
        </a>

        {/* Center Links */}
        <nav className="hidden lg:flex items-center gap-6 pointer-events-auto">
          {navLinks.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              onClick={() => sound.playClick()}
              className="text-silver-muted hover:text-silver-chrome hover:underline underline-offset-4 decoration-silver decoration-1 transition-colors text-[11px] uppercase tracking-wider"
            >
              {lang === 'vi' ? item.labelVi : item.label}
            </a>
          ))}
        </nav>

        {/* Right Tools */}
        <div className="flex items-center gap-3 pointer-events-auto">
          <button 
            onClick={handleSoundToggle}
            title="Audio feedback"
            className="p-1 text-silver-dark hover:text-silver transition-colors"
          >
            {soundMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-silver" />}
          </button>

          <button 
            onClick={() => {
              sound.playClick();
              setLang(lang === 'vi' ? 'en' : 'vi');
            }}
            className="px-2 py-0.5 border border-silver/40 text-silver hover:bg-silver hover:text-black rounded transition-colors text-[10px] font-bold"
          >
            {lang === 'vi' ? 'VI ⇄ EN' : 'EN ⇄ VI'}
          </button>

          <button
            onClick={() => {
              sound.playClick();
              onOpenProfileEditor();
            }}
            className="px-2.5 py-1 bg-silver text-black font-serif font-bold hover:bg-silver-chrome transition-colors text-xs shadow"
          >
            {lang === 'vi' ? 'SỬA THÔNG TIN' : 'EDIT'}
          </button>
        </div>
      </div>
    </header>
  );
}
