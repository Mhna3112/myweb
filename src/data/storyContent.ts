export type LineType = 'hero-name' | 'heading' | 'subheading' | 'body' | 'quote' | 'link' | 'footer';

export interface StoryLine {
  text: string;
  type?: LineType;
  href?: string;
}

export interface SocialCard {
  id: string;
  name: string;
  line1: string;
  line2?: string;
  badge: string;
  url: string;
  bg: string;
  textColor?: string;
}

export interface StoryBlock {
  id: string;
  isCardsScene?: boolean; // Đánh dấu phân cảnh riêng của dàn card xòe quạt
  isProjectScene?: boolean; // Đánh dấu phân cảnh dự án Roblox
  lines: StoryLine[];
}

export interface RobloxProjectInfo {
  title: string;
  category: string;
  year: string;
  summary: string;
  tags: string[];
  githubUrl: string;
}

export const ROBLOX_PROJECT: RobloxProjectInfo = {
  title: 'Mhnahub',
  category: 'Roblox Studio · Luau',
  year: '2026',
  summary: 'Trọn bộ kịch bản gameplay & thư viện thành phần giao diện tùy biến Mhnahub cao cấp cho Roblox Studio. Tối ưu hóa render RunService & animation TweenService mượt mà.',
  tags: ['Roblox Studio', 'Lua / Luau', 'Mhnahub', 'TweenService', 'Game Automation'],
  githubUrl: 'https://github.com/Mhna3112/Mhnauxui',
};

/**
 * ============================================================================
 * DANH SÁCH CÁC THẺ MẠNG XÃ HỘI (CÓ ICON HÃNG)
 * ============================================================================
 */
export const SOCIAL_CARDS: SocialCard[] = [
  {
    id: 'instagram',
    name: 'Instagram',
    line1: 'Insta',
    line2: 'gram',
    badge: '@31.th12_07',
    url: 'https://www.instagram.com/31.th12_07/',
    bg: 'linear-gradient(145deg, #833AB4 0%, #FD1D1D 50%, #FCB045 100%)',
    textColor: '#FFFFFF',
  },
  {
    id: 'discord',
    name: 'Discord',
    line1: 'Dis',
    line2: 'cord',
    badge: 'Discord',
    url: 'https://discord.com/users/913232692290682920',
    bg: '#5865F2',
    textColor: '#FFFFFF',
  },
  {
    id: 'github',
    name: 'GitHub',
    line1: 'Git',
    line2: 'Hub',
    badge: '@Mhna3112',
    url: 'https://github.com/Mhna3112',
    bg: '#181717',
    textColor: '#FFFFFF',
  },
  {
    id: 'gmail',
    name: 'Gmail',
    line1: 'G',
    line2: 'mail',
    badge: 'manhntp22',
    url: 'mailto:manhntp22@gmail.com',
    bg: '#EA4335',
    textColor: '#FFFFFF',
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    line1: 'Tik',
    line2: 'Tok',
    badge: '@31.th12_07',
    url: 'https://www.tiktok.com/@31.th12_07',
    bg: '#000000',
    textColor: '#FFFFFF',
  },
];

/**
 * ============================================================================
 * CÁC PHÂN CẢNH CUỘN CHỮ
 * ============================================================================
 */
export const STORY_BLOCKS: StoryBlock[] = [
  // --------------------------------------------------------------------------
  // PHÂN CẢNH 1: LỜI CHÀO & TÊN
  // --------------------------------------------------------------------------
  {
    id: 'intro',
    lines: [
      { text: 'Xin chào.', type: 'heading' },
      { text: 'Tôi là', type: 'subheading' },
      { text: 'Nguyễn Đức Mạnh', type: 'hero-name' },
    ],
  },

  // --------------------------------------------------------------------------
  // PHÂN CẢNH 2: VAI TRÒ & KỸ NĂNG
  // --------------------------------------------------------------------------
  {
    id: 'role',
    lines: [
      { text: 'Thích nghịch và học hỏi.', type: 'heading' },
      { text: 'Đây là nơi tôi giới thiệu bản thân và các dự án của mình.', type: 'subheading' },
      {
        text: 'Mục tiêu: trở thành Roblox Developer chuyên nghiệp.',
        type: 'body',
      },
    ],
  },

  // --------------------------------------------------------------------------
  // PHÂN CẢNH 3: DỰ ÁN ROBLOX
  // --------------------------------------------------------------------------
  {
    id: 'roblox-project',
    isProjectScene: true,
    lines: [
      { text: 'Dự án.', type: 'heading' },
    ],
  },

  // --------------------------------------------------------------------------
  // PHÂN CẢNH 4: TRIẾT LÝ & TƯ DUY
  // --------------------------------------------------------------------------
  {
    id: 'philosophy',
    lines: [
      { text: '“Sinh viên & người học không ngừng.”', type: 'quote' },
      { text: 'Tôi tự học lập trình qua từng dự án thực tế — Luau, JavaScript và Discord bot.', type: 'subheading' },
      {
        text: 'Mỗi ngày một chút, để code tốt hơn hôm qua.',
        type: 'body',
      },
    ],
  },

  // --------------------------------------------------------------------------
  // PHÂN CẢNH 4: PHẦN CARD RIÊNG BIỆT (XÒE QUẠT TƯƠNG TÁC + ICON)
  // --------------------------------------------------------------------------
  {
    id: 'social-cards-scene',
    isCardsScene: true, // Kích hoạt phân cảnh độc lập chỉ chứa riêng bộ card xòe quạt
    lines: [],
  },

  // --------------------------------------------------------------------------
  // PHÂN CẢNH 5: PHẦN DMS CŨ (GIỮ NGUYÊN VẸN CÁC LINK & BẢN QUYỀN)
  // --------------------------------------------------------------------------
  {
    id: 'connect',
    lines: [
      { text: 'Liên hệ.', type: 'heading' },
      { text: 'manhntp22@gmail.com', type: 'link', href: 'mailto:manhntp22@gmail.com' },
      { text: 'github.com/Mhna3112', type: 'link', href: 'https://github.com/Mhna3112' },
      { text: 'ducmanh.xyz', type: 'link', href: 'https://ducmanh.xyz' },
      { text: '© 2026 Nguyễn Đức Mạnh. All rights reserved.', type: 'footer' },
    ],
  },
];
