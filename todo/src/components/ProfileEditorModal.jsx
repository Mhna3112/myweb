import React, { useState } from 'react';
import { X, Save, RotateCcw, Sparkles } from 'lucide-react';
import { sound } from '../utils/sound';

export default function ProfileEditorModal({ 
  isOpen, 
  onClose, 
  profileData, 
  onSave, 
  onResetDefaults,
  lang 
}) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: profileData.profile.name || '',
    role: profileData.profile.role || '',
    roleVi: profileData.profile.roleVi || '',
    location: profileData.profile.location || '',
    bio: profileData.profile.bio || '',
    bioVi: profileData.profile.bioVi || '',
    manifesto: profileData.profile.manifesto || '',
    manifestoVi: profileData.profile.manifestoVi || '',
    email: profileData.profile.contact?.email || '',
    phone: profileData.profile.contact?.phone || '',
    instagram: profileData.profile.contact?.instagram || '',
    studioAddress: profileData.profile.contact?.studioAddress || '',
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    sound.playSnip();

    const updated = {
      ...profileData,
      profile: {
        ...profileData.profile,
        name: formData.name,
        role: formData.role,
        roleVi: formData.roleVi,
        location: formData.location,
        bio: formData.bio,
        bioVi: formData.bioVi,
        manifesto: formData.manifesto,
        manifestoVi: formData.manifestoVi,
        contact: {
          ...profileData.profile.contact,
          email: formData.email,
          phone: formData.phone,
          instagram: formData.instagram,
          studioAddress: formData.studioAddress
        }
      }
    };

    onSave(updated);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-carbon-850 border-2 border-silver max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl relative my-auto">
        {/* Modal Header */}
        <div className="bg-black text-silver p-4 flex items-center justify-between border-b border-silver/30">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-silver">
            <Sparkles className="w-4 h-4 text-silver" />
            <span>{lang === 'vi' ? 'CHỈNH SỬA HỒ SƠ TÁC GIẢ (PROFILE EDITOR)' : 'CUSTOMIZE YOUR MONOGRAPH PROFILE'}</span>
          </div>
          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="p-1 text-silver-muted hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form Content */}
        <form onSubmit={handleSave} className="p-6 overflow-y-auto space-y-6 font-mono text-xs text-silver">
          <div className="p-3 bg-carbon-900 border border-silver/20 text-[11px] text-silver-dark leading-relaxed">
            {lang === 'vi' 
              ? '💡 Thông tin tác giả NGUYỄN ĐỨC MẠNH phối màu Pure Black, Dark Gray và Metallic Silver. Mọi thay đổi sẽ cập nhật tức thì.'
              : '💡 Author profile for NGUYỄN ĐỨC MẠNH with Pure Black, Dark Gray, and Metallic Silver palette.'}
          </div>

          {/* Core Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold text-silver mb-1">
                {lang === 'vi' ? 'HỌ & TÊN TÁC GIẢ (NAME)' : 'YOUR NAME'}
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                placeholder="NGUYỄN ĐỨC MẠNH"
                className="w-full bg-carbon-950 border border-silver/30 p-2 text-xs focus:border-silver outline-none font-bold text-white"
              />
            </div>

            <div>
              <label className="block font-bold text-silver mb-1">
                {lang === 'vi' ? 'TỌA ĐỘ / ĐỊA ĐIỂM (LOCATION)' : 'LOCATION / COORDINATES'}
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => handleChange('location', e.target.value)}
                placeholder="Hà Nội — Leipzig — Worldwide"
                className="w-full bg-carbon-950 border border-silver/30 p-2 text-xs focus:border-silver outline-none text-[#F4F4F5]"
              />
            </div>
          </div>

          {/* Roles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold text-silver mb-1">
                {lang === 'vi' ? 'LĨNH VỰC TIẾNG VIỆT' : 'ROLE (VIETNAMESE)'}
              </label>
              <input
                type="text"
                value={formData.roleVi}
                onChange={(e) => handleChange('roleVi', e.target.value)}
                placeholder="Nhận diện Thương hiệu · Xuất bản · Thiết kế Chữ · Bao bì"
                className="w-full bg-carbon-950 border border-silver/30 p-2 text-xs focus:border-silver outline-none text-[#F4F4F5]"
              />
            </div>

            <div>
              <label className="block font-bold text-silver mb-1">
                {lang === 'vi' ? 'LĨNH VỰC TIẾNG ANH' : 'ROLE (ENGLISH)'}
              </label>
              <input
                type="text"
                value={formData.role}
                onChange={(e) => handleChange('role', e.target.value)}
                placeholder="Brand · Editorial · Type · Packaging"
                className="w-full bg-carbon-950 border border-silver/30 p-2 text-xs focus:border-silver outline-none text-[#F4F4F5]"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-4">
            <div>
              <label className="block font-bold text-silver mb-1">
                {lang === 'vi' ? 'GIỚI THIỆU TÁC GIẢ (TIẾNG VIỆT)' : 'BIO (VIETNAMESE)'}
              </label>
              <textarea
                rows={3}
                value={formData.bioVi}
                onChange={(e) => handleChange('bioVi', e.target.value)}
                className="w-full bg-carbon-950 border border-silver/30 p-2 text-xs focus:border-silver outline-none resize-none font-serif text-sm text-[#F4F4F5]"
              />
            </div>

            <div>
              <label className="block font-bold text-silver mb-1">
                {lang === 'vi' ? 'GIỚI THIỆU TÁC GIẢ (TIẾNG ANH)' : 'BIO (ENGLISH)'}
              </label>
              <textarea
                rows={3}
                value={formData.bio}
                onChange={(e) => handleChange('bio', e.target.value)}
                className="w-full bg-carbon-950 border border-silver/30 p-2 text-xs focus:border-silver outline-none resize-none font-serif text-sm text-[#F4F4F5]"
              />
            </div>
          </div>

          {/* Manifesto */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold text-silver mb-1">
                {lang === 'vi' ? 'TUYÊN NGÔN (VI)' : 'MANIFESTO (VI)'}
              </label>
              <input
                type="text"
                value={formData.manifestoVi}
                onChange={(e) => handleChange('manifestoVi', e.target.value)}
                className="w-full bg-carbon-950 border border-silver/30 p-2 text-xs focus:border-silver outline-none font-serif text-[#F4F4F5]"
              />
            </div>
            <div>
              <label className="block font-bold text-silver mb-1">
                {lang === 'vi' ? 'TUYÊN NGÔN (EN)' : 'MANIFESTO (EN)'}
              </label>
              <input
                type="text"
                value={formData.manifesto}
                onChange={(e) => handleChange('manifesto', e.target.value)}
                className="w-full bg-carbon-950 border border-silver/30 p-2 text-xs focus:border-silver outline-none font-serif text-[#F4F4F5]"
              />
            </div>
          </div>

          {/* Contacts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-silver/20">
            <div>
              <label className="block font-bold text-silver mb-1">EMAIL</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="w-full bg-carbon-950 border border-silver/30 p-2 text-xs focus:border-silver outline-none text-[#F4F4F5]"
              />
            </div>
            <div>
              <label className="block font-bold text-silver mb-1">PHONE</label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className="w-full bg-carbon-950 border border-silver/30 p-2 text-xs focus:border-silver outline-none text-[#F4F4F5]"
              />
            </div>
            <div>
              <label className="block font-bold text-silver mb-1">INSTAGRAM</label>
              <input
                type="text"
                value={formData.instagram}
                onChange={(e) => handleChange('instagram', e.target.value)}
                className="w-full bg-carbon-950 border border-silver/30 p-2 text-xs focus:border-silver outline-none text-[#F4F4F5]"
              />
            </div>
            <div>
              <label className="block font-bold text-silver mb-1">STUDIO ADDRESS</label>
              <input
                type="text"
                value={formData.studioAddress}
                onChange={(e) => handleChange('studioAddress', e.target.value)}
                className="w-full bg-carbon-950 border border-silver/30 p-2 text-xs focus:border-silver outline-none text-[#F4F4F5]"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-silver/30 flex flex-wrap items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => {
                sound.playSnip();
                if (window.confirm(lang === 'vi' ? 'Khôi phục về dữ liệu gốc?' : 'Reset to default data?')) {
                  onResetDefaults();
                  onClose();
                }
              }}
              className="px-3 py-2 border border-silver/40 text-silver-muted hover:text-white hover:border-silver transition-colors flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{lang === 'vi' ? 'KHÔI PHỤC DỮ LIỆU' : 'RESET TO DEFAULTS'}</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  onClose();
                }}
                className="px-4 py-2 border border-silver/30 bg-carbon-950 text-silver hover:bg-carbon-900"
              >
                {lang === 'vi' ? 'HỦY' : 'CANCEL'}
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-silver text-black font-serif font-bold hover:bg-silver-chrome transition-colors flex items-center gap-1.5 shadow"
              >
                <Save className="w-4 h-4" />
                <span>{lang === 'vi' ? 'LƯU & CẬP NHẬT TRANG' : 'SAVE & APPLY'}</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
