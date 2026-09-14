import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn, X, ExternalLink, Github } from 'lucide-react';
import { sound } from '../utils/sound';

export default function ProjectSpreads({ projects, lang }) {
  const [activeProject, setActiveProject] = useState(null);

  // Khóa cuộn trang và phím Escape khi mở popup
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setActiveProject(null);
    };
    if (activeProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [activeProject]);

  const openProject = (p) => {
    sound.playPageTurn();
    setActiveProject(p);
  };

  return (
    <section id="projects" className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-x border-silver/15 relative z-10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-silver/20 mb-8 font-mono text-xs text-silver-dark">
        <div>
          <div className="flex items-center gap-2 text-silver font-bold">
            <span className="w-2 h-2 bg-silver inline-block" />
            <span>01 // {lang === 'vi' ? 'DỰ ÁN' : 'PROJECTS'}</span>
          </div>
          <h2 className="font-serif italic font-normal text-3xl sm:text-5xl text-[#FFFFFF] mt-1">
            {lang === 'vi' ? 'Những thứ tôi đã xây dựng' : 'Things I have built'}
          </h2>
        </div>

        <div>
          {lang === 'vi' ? 'TỔNG CỘNG' : 'TOTAL'}{' '}
          <span className="font-bold text-silver-chrome text-sm">{projects.length}</span>{' '}
          {lang === 'vi' ? 'DỰ ÁN' : 'PROJECTS'}
        </div>
      </div>

      {/* Lưới thẻ dự án nhỏ — bấm vào mở popup chi tiết */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p, idx) => (
          <motion.button
            key={p.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            onClick={() => openProject(p)}
            className="group text-left border border-silver/25 bg-carbon-900 hover:border-silver/60 transition-all shadow-lg hover:shadow-2xl overflow-hidden"
          >
            {/* Ảnh preview */}
            <div className="relative overflow-hidden aspect-[16/10]">
              <img
                src={p.imageHero}
                alt={p.title}
                loading="lazy"
                className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-carbon-950/30 group-hover:bg-transparent transition-colors duration-500" />
              <span className="absolute top-2 left-2 font-mono text-[9px] font-bold bg-carbon-950/90 text-silver border border-silver/30 px-1.5 py-0.5">
                0{idx + 1}
              </span>
              <span className="absolute bottom-2 right-2 font-mono text-[9px] font-bold bg-silver text-black px-1.5 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                <ZoomIn className="w-3 h-3" />
                {lang === 'vi' ? 'XEM CHI TIẾT' : 'VIEW DETAILS'}
              </span>
            </div>

            {/* Thông tin ngắn */}
            <div className="p-4">
              <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-silver-muted">
                {p.category} · {p.year}
              </div>
              <div className="font-serif text-xl text-[#E4E4E7] group-hover:text-[#FFFFFF] transition-colors mt-1">
                {p.title}
              </div>
              <div className="font-sans text-[11px] text-silver-muted mt-1.5 line-clamp-2 leading-relaxed">
                {lang === 'vi' ? p.overviewVi : p.overview}
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Popup chi tiết dự án — Render trực tiếp vào document.body bằng createPortal để luôn nằm trên cùng mọi phần (kể cả liên hệ) */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {activeProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setActiveProject(null)}
              className="fixed inset-0 z-[9999] bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 cursor-zoom-out"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 12 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-carbon-900 border border-silver/40 shadow-[0_25px_80px_rgba(0,0,0,0.95)] cursor-default"
              >
                {/* Thanh tiêu đề popup */}
                <div className="sticky top-0 z-20 bg-carbon-950/95 backdrop-blur border-b border-silver/25 px-5 sm:px-8 py-3.5 flex items-center justify-between font-mono text-[11px] text-silver">
                  <span className="font-bold">{activeProject.catalogCode}</span>
                  <button
                    onClick={() => { sound.playClick(); setActiveProject(null); }}
                    title={lang === 'vi' ? 'Đóng' : 'Close'}
                    className="p-1.5 border border-silver/40 text-silver hover:bg-silver hover:text-black transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-5 sm:p-8 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
                  {/* Cột trái: hình ảnh */}
                  <div className="space-y-3">
                    <div className="border border-silver/30 overflow-hidden">
                      <img
                        src={activeProject.imageHero}
                        alt={activeProject.title}
                        className="w-full h-64 sm:h-80 object-cover filter grayscale contrast-125"
                      />
                    </div>
                    {activeProject.imageDetails?.length > 0 && (
                      <div className="grid grid-cols-2 gap-3">
                        {activeProject.imageDetails.map((img, i) => (
                          <div key={i} className="relative border border-silver/20 overflow-hidden">
                            <img
                              src={img}
                              alt={`Detail ${i + 1}`}
                              loading="lazy"
                              className="w-full h-24 sm:h-32 object-cover filter grayscale contrast-125"
                            />
                            <div className="absolute bottom-1 left-1.5 font-mono text-[9px] bg-carbon-950/90 text-silver border border-silver/30 px-1 py-0.5 font-bold">
                              DETAIL #{i + 1}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Cột phải: nội dung */}
                  <div className="space-y-5">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-silver-muted">
                        {activeProject.category} · {activeProject.year}
                      </div>
                      <h3 className="font-serif italic text-3xl sm:text-4xl text-[#FFFFFF] font-normal leading-snug mt-1">
                        {activeProject.title}
                      </h3>
                      <p className="font-serif italic text-base text-silver mt-2">
                        {activeProject.subtitle}
                      </p>
                    </div>

                    <p className="font-serif text-base sm:text-lg text-[#D4D4D8] leading-relaxed">
                      {lang === 'vi' ? activeProject.overviewVi : activeProject.overview}
                    </p>

                    {/* Stack công nghệ */}
                    <div className="flex flex-wrap gap-2">
                      {activeProject.cmyk?.map((c, i) => (
                        <span key={i} className="px-2.5 py-1 bg-carbon-950 text-silver border border-silver/30 text-[10px] font-mono font-bold">
                          {c}
                        </span>
                      ))}
                    </div>

                    {/* Thông số */}
                    <div className="font-mono text-xs bg-carbon-950 p-4 border border-silver/20 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <span className="text-silver-muted text-[10px] block uppercase">{lang === 'vi' ? 'DỰ ÁN CHO' : 'CLIENT'}</span>
                        <span className="font-bold text-[#FFFFFF]">{activeProject.client}</span>
                      </div>
                      <div>
                        <span className="text-silver-muted text-[10px] block uppercase">{lang === 'vi' ? 'CÔNG NGHỆ' : 'STACK'}</span>
                        <span className="font-bold text-silver">{activeProject.paperStock}</span>
                      </div>
                      <div>
                        <span className="text-silver-muted text-[10px] block uppercase">{lang === 'vi' ? 'DỮ LIỆU' : 'DATA'}</span>
                        <span className="font-bold text-silver-chrome">{activeProject.pantone}</span>
                      </div>
                      <div>
                        <span className="text-silver-muted text-[10px] block uppercase">{lang === 'vi' ? 'PHẠM VI' : 'SCOPE'}</span>
                        <span className="font-bold text-silver-chrome">{activeProject.scope}</span>
                      </div>
                    </div>

                    {/* Ghi chú */}
                    <div className="p-3.5 bg-carbon-950 border-l-2 border-silver font-serif italic text-silver-chrome text-base">
                      “{activeProject.editorialNotes}”
                    </div>

                    {/* Liên kết */}
                    <div className="flex flex-wrap items-center gap-3 pt-1">
                      {activeProject.liveUrl && (
                        <a
                          href={activeProject.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={() => sound.playClick()}
                          className="inline-flex items-center gap-2 px-5 py-3 bg-silver text-black font-serif font-bold text-sm hover:bg-silver-chrome transition-colors shadow"
                        >
                          <span>⚒</span>
                          <span>{lang === 'vi' ? 'MỞ ỨNG DỤNG' : 'OPEN LIVE APP'}</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      {activeProject.githubUrl && (
                        <a
                          href={activeProject.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={() => sound.playClick()}
                          className="inline-flex items-center gap-2 px-5 py-3 border border-silver/50 text-silver font-serif font-bold text-sm hover:bg-silver hover:text-black transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          <span>GITHUB</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Chân popup */}
                <div className="px-5 sm:px-8 py-3 border-t border-silver/20 font-mono text-[10px] text-silver-muted flex items-center justify-between">
                  <span>{activeProject.tags?.join(' · ')}</span>
                  <span className="text-silver font-bold">{activeProject.vectorKey?.toUpperCase()}</span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
