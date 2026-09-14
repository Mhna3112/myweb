import React, { useState } from 'react';
import { Video, Play, Quote, ChevronRight } from 'lucide-react';
import { sound } from '../utils/sound';

export default function LecturesTalks({ lectures, lang }) {
  const [activeLecture, setActiveLecture] = useState(lectures[0] || {});
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="lectures" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-x border-silver/15 relative z-10">
      {/* Section Header */}
      <div className="border-b border-silver/20 pb-4 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4 font-mono text-xs text-silver-dark">
        <div>
          <div className="flex items-center gap-2 text-silver font-bold">
            <Video className="w-4 h-4 text-silver" />
            <span>06 // PUBLIC LECTURES &amp; SYMPOSIUMS</span>
          </div>
          <h2 className="font-serif italic font-normal text-3xl sm:text-5xl text-[#FFFFFF] mt-1">
            Lectures &amp; <em className="text-silver not-italic">Talks</em>
          </h2>
        </div>

        <div className="font-mono text-xs text-silver">
          THREE RECORDED APPEARANCES (2022–2024)
        </div>
      </div>

      {/* Main Video & Lecture Deck */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-carbon-850 p-6 sm:p-10 border border-silver/25 shadow-2xl">
        {/* Video Box */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
          <div className="relative aspect-video bg-carbon-950 border border-silver/30 overflow-hidden group shadow-lg">
            {isPlaying ? (
              <iframe
                src={`${activeLecture.videoUrl}&autoplay=1`}
                title={activeLecture.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div 
                className="w-full h-full relative cursor-pointer"
                onClick={() => {
                  sound.playClick();
                  setIsPlaying(true);
                }}
              >
                <img
                  src={activeLecture.thumbnail}
                  alt={activeLecture.title}
                  className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-carbon-950/90 via-carbon-950/30 to-transparent flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border border-silver bg-carbon-900/80 backdrop-blur-md text-silver flex items-center justify-center shadow-2xl group-hover:bg-silver group-hover:text-black transition-all duration-300">
                    <Play className="w-6 h-6 fill-current ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-3 left-4 right-4 flex justify-between items-center font-mono text-xs text-silver-chrome">
                  <span className="font-bold text-silver">{activeLecture.event}</span>
                  <span className="bg-carbon-950/80 px-2 py-0.5 border border-silver/30">{activeLecture.duration}</span>
                </div>
              </div>
            )}
          </div>

          {/* Key Quote */}
          <div className="p-4 bg-carbon-900 border-l-2 border-silver space-y-2">
            <div className="flex items-center gap-1.5 font-mono text-[10px] text-silver font-bold">
              <Quote className="w-3 h-3" />
              <span>THEMATIC QUOTE</span>
            </div>
            <blockquote className="font-serif italic text-base sm:text-lg text-[#E4E4E7] leading-snug">
              {activeLecture.keyQuotes}
            </blockquote>
          </div>
        </div>

        {/* Chapters & Selector */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="font-mono text-xs text-silver uppercase">
              {activeLecture.year} // {activeLecture.event}
            </div>

            <h3 className="font-serif italic font-normal text-2xl sm:text-3xl text-[#FFFFFF] leading-tight">
              {lang === 'vi' ? (activeLecture.titleVi || activeLecture.title) : activeLecture.title}
            </h3>

            {/* Chapters list */}
            <div className="pt-2">
              <div className="font-mono text-xs font-bold text-silver pb-2 border-b border-silver/20 mb-2">
                TIMESTAMPS &amp; KEY TOPICS
              </div>
              <div className="space-y-2 font-mono text-xs">
                {activeLecture.chapters?.map((chap, i) => (
                  <div key={i} className="flex items-start gap-3 p-2.5 bg-carbon-900 border border-silver/15 hover:border-silver/40 transition-colors">
                    <span className="text-silver font-bold">{chap.time}</span>
                    <span className="text-silver-chrome/80">{chap.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Other talks */}
          <div className="pt-4 border-t border-silver/20 font-mono text-xs space-y-2">
            <div className="text-[10px] text-silver-muted uppercase font-bold">ALL RECORDED DISCOURSES:</div>
            <div className="grid grid-cols-1 gap-2">
              {lectures.map((lec) => (
                <button
                  key={lec.id}
                  onClick={() => {
                    sound.playClick();
                    setActiveLecture(lec);
                    setIsPlaying(false);
                  }}
                  className={`p-2.5 text-left border flex items-center justify-between transition-all ${
                    activeLecture.id === lec.id
                      ? 'bg-silver text-black font-bold border-silver'
                      : 'bg-carbon-900 hover:bg-carbon-800 text-silver-dark border-silver/20'
                  }`}
                >
                  <span className="font-serif italic text-sm truncate">{lec.title}</span>
                  <ChevronRight className="w-3.5 h-3.5 shrink-0 ml-2" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
