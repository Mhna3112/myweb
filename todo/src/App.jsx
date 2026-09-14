import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectSpreads from './components/ProjectSpreads';
import ColophonFooter from './components/ColophonFooter';
import RisographCursor from './components/RisographCursor';
import ProfileEditorModal from './components/ProfileEditorModal';
import { initialPortfolioData } from './data/portfolioData';

export default function App() {
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem('portfolio_data_v2');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return initialPortfolioData;
      }
    }
    return initialPortfolioData;
  });

  const [lang, setLang] = useState('vi');
  const [soundMuted, setSoundMuted] = useState(false);
  const [risoCursor, setRisoCursor] = useState(true);
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  const handleSaveData = (newData) => {
    setData(newData);
    localStorage.setItem('portfolio_data_v2', JSON.stringify(newData));
  };

  const handleResetDefaults = () => {
    setData(initialPortfolioData);
    localStorage.removeItem('portfolio_data_v2');
  };

  return (
    <div className="min-h-screen relative font-sans dark-texture-atmosphere bg-[#000000] text-[#F4F4F5]">
      {/* Halftone Risograph Metallic Silver Cursor Trail */}
      <RisographCursor enabled={risoCursor} />

      {/* Top Running-Head & Navigation */}
      <Navbar
        profile={data.profile}
        lang={lang}
        setLang={setLang}
        soundMuted={soundMuted}
        setSoundMuted={setSoundMuted}
        risoCursor={risoCursor}
        setRisoCursor={setRisoCursor}
        onOpenProfileEditor={() => setIsEditorOpen(true)}
      />

      <main className="relative z-10">
        {/* 00 Lời Chào — Hero, Preface & Contents */}
        <Hero
          profile={data.profile}
          lang={lang}
          projects={data.projects}
        />

        {/* 01 Dự Án — Project Spreads */}
        <ProjectSpreads
          projects={data.projects}
          lang={lang}
        />

        {/* 02 Liên Hệ — Colophon & Contact */}
        <ColophonFooter
          profile={data.profile}
          lang={lang}
        />
      </main>

      {/* Profile & Portfolio Editor Modal */}
      <ProfileEditorModal
        isOpen={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
        profileData={data}
        onSave={handleSaveData}
        onResetDefaults={handleResetDefaults}
        lang={lang}
      />
    </div>
  );
}
