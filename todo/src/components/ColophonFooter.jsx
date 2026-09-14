import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { sound } from '../utils/sound';

export default function ColophonFooter({ profile, lang }) {
  const [formState, setFormState] = useState({ name: '', email: '', discipline: 'Web Development', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    sound.playSnip();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', discipline: 'Web Development', message: '' });
    }, 4000);
  };

  const contact = profile.contact || {};
  const emailIsReal = (contact.email || '').includes('@');

  return (
    <footer id="colophon" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-x border-b border-silver/15 relative z-10 bg-carbon-950 text-center">
      {/* Top Pre */}
      <p className="font-serif italic text-xl text-silver mb-2">
        — {lang === 'vi' ? 'Sẵn sàng trò chuyện về lập trình và dự án từ' : 'Open to conversations about code & projects from'} —
      </p>

      {/* Big Name */}
      <h2 className="font-serif font-bold text-5xl sm:text-7xl lg:text-8xl text-[#FFFFFF] tracking-tight mb-6">
        {profile.name || "Nguyễn Đức Mạnh"}
      </h2>

      {/* Big Email */}
      <div className="mb-12">
        {emailIsReal ? (
          <a
            href={`mailto:${contact.email}`}
            className="font-serif italic text-2xl sm:text-4xl text-silver hover:text-silver-chrome inline-block py-2.5 px-6 border-y border-silver/40 transition-colors"
          >
            {contact.email}
          </a>
        ) : (
          <span className="font-serif italic text-2xl sm:text-4xl text-silver-muted inline-block py-2.5 px-6 border-y border-silver/40">
            {contact.email || "[THÊM EMAIL CỦA BẠN]"}
          </span>
        )}
      </div>

      {/* 3-Column Contact Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16 text-left font-sans text-xs">
        {/* Col 1: Email & Phone */}
        <div className="p-4 bg-carbon-900 border border-silver/20">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-silver block mb-2 font-bold">
            {lang === 'vi' ? 'EMAIL & ĐIỆN THOẠI' : 'EMAIL & PHONE'}
          </span>
          <div className="font-serif text-base text-[#D4D4D8] leading-relaxed">
            {contact.email || "[THÊM EMAIL]"}
            <br />
            {contact.phone || "[THÊM SỐ ĐIỆN THOẠI]"}
            <br />
            {contact.pressContact || "[THÊM EMAIL PHỤ]"}
          </div>
        </div>

        {/* Col 2: Social */}
        <div className="p-4 bg-carbon-900 border border-silver/20">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-silver block mb-2 font-bold">
            {lang === 'vi' ? 'MẠNG XÃ HỘI' : 'SOCIAL'}
          </span>
          <div className="font-serif text-base text-[#D4D4D8] leading-relaxed">
            {contact.instagram || "[THÊM INSTAGRAM]"}
            <br />
            [THÊM GITHUB]
            <br />
            [THÊM FACEBOOK]
          </div>
        </div>

        {/* Col 3: Location & Note */}
        <div className="p-4 bg-carbon-900 border border-silver/20">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-silver block mb-2 font-bold">
            {lang === 'vi' ? 'VỊ TRÍ & GHI CHÚ' : 'LOCATION & NOTE'}
          </span>
          <div className="font-serif text-base text-[#D4D4D8] leading-relaxed">
            {contact.studioAddress || "[THÊM ĐỊA CHỈ]"}
            <br />
            {contact.newWorkNote || ""}
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-2xl mx-auto bg-carbon-850 p-6 sm:p-8 border border-silver/25 text-left mb-16 shadow-xl">
        <h3 className="font-serif italic text-2xl text-silver-chrome mb-4 text-center">
          {lang === 'vi' ? 'Gửi Lời Nhắn' : 'Send a Message'}
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] text-silver uppercase font-bold mb-1">
                {lang === 'vi' ? 'HỌ & TÊN *' : 'YOUR NAME *'}
              </label>
              <input
                type="text"
                required
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                placeholder={lang === 'vi' ? 'Tên của bạn' : 'Your name'}
                className="w-full bg-carbon-950 border border-silver/30 p-2.5 text-xs text-[#FFFFFF] focus:outline-none focus:border-silver"
              />
            </div>
            <div>
              <label className="block text-[10px] text-silver uppercase font-bold mb-1">
                {lang === 'vi' ? 'ĐỊA CHỈ EMAIL *' : 'EMAIL ADDRESS *'}
              </label>
              <input
                type="email"
                required
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                placeholder="name@example.com"
                className="w-full bg-carbon-950 border border-silver/30 p-2.5 text-xs text-[#FFFFFF] focus:outline-none focus:border-silver"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] text-silver uppercase font-bold mb-1">
              {lang === 'vi' ? 'CHỦ ĐỀ' : 'TOPIC'}
            </label>
            <select
              value={formState.discipline}
              onChange={(e) => setFormState({ ...formState, discipline: e.target.value })}
              className="w-full bg-carbon-950 border border-silver/30 p-2.5 text-xs text-silver focus:outline-none focus:border-silver"
            >
              <option value="Web Development">{lang === 'vi' ? 'Phát triển Web' : 'Web Development'}</option>
              <option value="Project Collab">{lang === 'vi' ? 'Hợp tác dự án' : 'Project Collaboration'}</option>
              <option value="Learning">{lang === 'vi' ? 'Học tập & Trao đổi' : 'Learning & Exchange'}</option>
              <option value="Other">{lang === 'vi' ? 'Khác' : 'Other'}</option>
            </select>
          </div>

          <div>
            <label className="block text-[10px] text-silver uppercase font-bold mb-1">
              {lang === 'vi' ? 'LỜI NHẮN *' : 'MESSAGE *'}
            </label>
            <textarea
              rows={3}
              required
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              placeholder={lang === 'vi' ? 'Bạn muốn trò chuyện về điều gì?' : 'What would you like to talk about?'}
              className="w-full bg-carbon-950 border border-silver/30 p-2.5 text-xs text-silver focus:outline-none focus:border-silver resize-none font-serif text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-silver text-black font-serif font-bold text-base hover:bg-silver-chrome transition-all flex items-center justify-center gap-2 shadow"
          >
            {submitted ? (
              <>
                <CheckCircle2 className="w-5 h-5 text-black" />
                <span>{lang === 'vi' ? 'ĐÃ GỬI THÀNH CÔNG!' : 'MESSAGE SENT!'}</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>{lang === 'vi' ? 'GỬI LỜI NHẮN' : 'SEND MESSAGE'}</span>
              </>
            )}
          </button>
        </form>
      </div>

      {/* Colophon Text */}
      <div className="max-w-2xl mx-auto pt-10 border-t border-silver/15 font-serif italic text-sm text-silver-dark leading-relaxed text-center space-y-3">
        <p>
          {lang === 'vi' ? 'Trang này được dựng bằng' : 'This site was set in'} <em>Cormorant Garamond</em>, <em>Inter</em>{' '}
          {lang === 'vi' ? 'và' : 'and'} <em>JetBrains Mono</em>, {lang === 'vi' ? 'xây dựng bằng React + Tailwind CSS. Ảnh dự án là ảnh minh họa tạm thời.' : 'built with React + Tailwind CSS. Project images are temporary placeholders.'}
        </p>
        <p className="text-silver-muted text-xs">
          {lang === 'vi'
            ? 'Mọi thông tin cá nhân và liên hệ đều có thể chỉnh sửa qua nút “SỬA THÔNG TIN”.'
            : 'All personal information and contacts can be edited via the “EDIT” button.'}
        </p>
        <div className="font-mono text-[10px] not-italic tracking-[0.25em] uppercase text-silver pt-4">
          — {lang === 'vi' ? 'HẾT · PORTFOLIO 2026' : 'END · PORTFOLIO 2026'} · {(profile.name || "NGUYỄN ĐỨC MẠNH").toUpperCase()} —
        </div>
      </div>
    </footer>
  );
}
