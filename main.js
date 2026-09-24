/* ===== main.js ===== */

// ── GLOBAL STATE & PHRASES ──────────────────────────────────────────
let currentLang = localStorage.getItem('lang') || 'en';

const PHRASES = {
  en: [
    "Hi, I'm Duc Manh.",
    "I'm learning to code.",
    "I love building things.",
    "Aspiring Developer.",
  ],
  vi: [
    "Xin chào, tôi là Đức Mạnh.",
    "Tôi đang học lập trình.",
    "Tôi thích xây dựng ứng dụng.",
    "Lập trình viên tương lai.",
  ]
};

// ── THEME ──────────────────────────────────────────────────────────
const THEMES = ['light', 'dark', 'system'];
const html   = document.documentElement;

function applyTheme(theme) {
  let effectiveTheme = theme;
  if (theme === 'system') {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    effectiveTheme = prefersDark ? 'dark' : 'light';
    html.setAttribute('data-theme', effectiveTheme);
  } else {
    html.setAttribute('data-theme', theme);
  }

  // Update active state on all theme buttons (desktop + mobile drawer)
  document.querySelectorAll('[data-theme-val]').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-theme-val') === theme);
  });

  // Update quick toggle button icon
  const quickIcon = document.getElementById('theme-quick-icon');
  const quickBtn  = document.getElementById('theme-quick-btn');
  if (quickIcon && quickBtn) {
    if (effectiveTheme === 'dark') {
      quickIcon.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
      quickBtn.title = (typeof currentLang !== 'undefined' && currentLang === 'vi') ? 'Chuyển sang nền trắng (Light mode)' : 'Switch to Light mode';
      quickBtn.setAttribute('aria-label', (typeof currentLang !== 'undefined' && currentLang === 'vi') ? 'Chuyển sang nền trắng' : 'Switch to Light mode');
    } else {
      quickIcon.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
      quickBtn.title = (typeof currentLang !== 'undefined' && currentLang === 'vi') ? 'Chuyển sang nền đen (Dark mode)' : 'Switch to Dark mode';
      quickBtn.setAttribute('aria-label', (typeof currentLang !== 'undefined' && currentLang === 'vi') ? 'Chuyển sang nền đen' : 'Switch to Dark mode');
    }
  }

  localStorage.setItem('theme', theme);
}

(function initTheme() {
  const saved = localStorage.getItem('theme') || 'light';
  applyTheme(saved);
})();

// Quick 1-tap toggle button
const quickBtn = document.getElementById('theme-quick-btn');
if (quickBtn) {
  quickBtn.addEventListener('click', () => {
    const current = html.getAttribute('data-theme') || 'dark';
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });
}

// All explicit theme buttons (desktop + mobile drawer)
document.querySelectorAll('[data-theme-val]').forEach(btn => {
  btn.addEventListener('click', () => {
    applyTheme(btn.getAttribute('data-theme-val'));
  });
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  if (localStorage.getItem('theme') === 'system') applyTheme('system');
});

// ── READING PROGRESS ───────────────────────────────────────────────
const progressBar = document.getElementById('reading-progress');
window.addEventListener('scroll', () => {
  const docH   = document.documentElement.scrollHeight - window.innerHeight;
  const pct    = docH > 0 ? (window.scrollY / docH) * 100 : 0;
  progressBar.style.width = pct + '%';
}, { passive: true });

// ── NAVBAR SCROLL ──────────────────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// ── MOBILE NAV ─────────────────────────────────────────────────────
const navToggle = document.getElementById('nav-toggle');
const navLinks  = document.getElementById('nav-links');
navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', String(open));
});
navLinks.addEventListener('click', e => {
  if (e.target.classList.contains('nav-link')) {
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});

// ── ACTIVE NAV HIGHLIGHT ──────────────────────────────────────────
const sections  = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-link');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navAnchors.forEach(a => a.classList.remove('active'));
      const active = document.querySelector('.nav-link[href="#' + e.target.id + '"]');
      if (active) active.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });
sections.forEach(s => io.observe(s));

// ── TYPEWRITER ─────────────────────────────────────────────────────
let phraseIdx = 0;
let charIdx   = 0;
let deleting  = false;
let twTimeout = null;
const tw      = document.getElementById('typewriter');

function getCurrentPhrases() {
  return (typeof PHRASES !== 'undefined' && PHRASES[currentLang]) ? PHRASES[currentLang] : PHRASES.en;
}

function typeWriter() {
  if (!tw) return;
  const phrases = getCurrentPhrases();
  const phrase  = phrases[phraseIdx % phrases.length];
  if (!deleting) {
    tw.textContent = phrase.slice(0, ++charIdx);
    if (charIdx >= phrase.length) {
      deleting = true;
      twTimeout = setTimeout(typeWriter, 1800);
      return;
    }
    twTimeout = setTimeout(typeWriter, 80);
  } else {
    tw.textContent = phrase.slice(0, --charIdx);
    if (charIdx <= 0) {
      deleting  = false;
      charIdx   = 0;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      twTimeout = setTimeout(typeWriter, 400);
      return;
    }
    twTimeout = setTimeout(typeWriter, 40);
  }
}

function resetTypewriter() {
  if (twTimeout) clearTimeout(twTimeout);
  phraseIdx = 0;
  charIdx   = 0;
  deleting  = false;
  if (tw) tw.textContent = '';
  typeWriter();
}

resetTypewriter();

// ── REVEAL ON SCROLL ───────────────────────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ── CODE TABS ──────────────────────────────────────────────────────
document.querySelectorAll('.code-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.code-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.code-block-wrapper').forEach(w => w.classList.remove('active'));
    tab.classList.add('active');
    const target = document.getElementById('tab-' + tab.dataset.tab);
    if (target) target.classList.add('active');
  });
});

// ── COPY CODE ──────────────────────────────────────────────────────
document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', async () => {
    const targetId = btn.dataset.target;
    const codeEl   = document.getElementById(targetId);
    if (!codeEl) return;
    try {
      await navigator.clipboard.writeText(codeEl.textContent);
    } catch {
      // fallback
      const range = document.createRange();
      range.selectNode(codeEl);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      document.execCommand('copy');
      window.getSelection().removeAllRanges();
    }
    btn.textContent = 'Copied!';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = 'Copy';
      btn.classList.remove('copied');
    }, 2000);
  });
});


// ── FOOTER YEAR ────────────────────────────────────────────────────
const yearEl = document.getElementById('footer-year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ── SMOOTH SCROLL ──────────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});


// ── LANGUAGE & TRANSLATIONS ─────────────────────────────────────────

// Full translation dictionary keyed by data-i18n attribute value
const TRANSLATIONS = {
  en: {
    // Nav
    'nav.home':        'Home',
    'nav.about':       'About',
    'nav.projects':    'Projects',
    'nav.blog':        'Blog',
    'nav.github':      'GitHub',
    'nav.contact':     'Contact',
    'nav.todo':        'Calendar',
    'nav.todoApp':     'Todo Calendar',
    'nav.theme_title': 'THEME',
    'theme.light':     'White',
    'theme.dark':      'Black',
    'theme.system':    'Auto',
    // Hero
    'hero.badge':   'Open to learning &amp; collaboration',
    'hero.sub':     'I am passionate about <strong>learning programming</strong> and building projects. I enjoy exploring new technologies, improving my coding skills, and documenting my learning journey — one commit at a time.',
    'hero.cta.about':    'About Me',
    'hero.cta.projects': 'My Projects',
    'hero.cta.blog':     'Read My Blog',
    'hero.stats.repos':  'Repos',
    'hero.stats.stars':  'Stars',
    'hero.stats.forks':  'Forks',
    'hero.scroll':  'Scroll to explore',
    // About
    'about.label':  '01. About',
    'about.title':  'Who Am I?',
    'about.desc':   'I build Roblox experiences and tools with Lua and Luau, while continuing to grow as a developer.',
    'about.card1.title': 'Who I Am',
    'about.card1.desc':  "I'm Duc Manh, a developer based in Vietnam. I enjoy building Roblox scripts and interfaces with Luau, and turning ideas into projects people can use.",
    'about.card2.title': "What I'm Learning",
    'about.card2.desc':  'I\'m focused on <strong>Lua</strong> and <strong>Luau</strong> for Roblox Studio: scripting gameplay, designing interfaces, and organizing reusable code. I also work with JavaScript, Python, and C.',
    'about.card3.title': 'My Interests',
    'about.card3.desc':  'I like exploring how Roblox experiences work, prototyping game features, and making clean, practical UI for players and creators.',
    'about.card4.title': 'My Goals',
    'about.card4.desc':  'Keep improving my Luau skills, build more polished Roblox tools and experiences, and share useful projects with other developers.',
    'about.skills.title': 'Technologies &amp; Tools',
    'about.skills.note':  'Currently improving: <strong>Luau scripting</strong>, <strong>Roblox UI</strong>, and reusable systems for game projects.',
    // Projects
    'projects.label': '02. Projects',
    'projects.title': "Things I've Built",
    'projects.desc':  "A collection of verified real-world projects and open-source software I've built.",
    'projects.wip':   'In Progress',
    'projects.mediahub.name': 'MediaHub Downloader',
    'projects.mediahub.desc': 'Multi-platform media analyzer & high-speed downloader (TikTok, YouTube, Facebook, Instagram, Twitter/X, Douyin) without watermarks, featuring clean audio extraction & HD video processing.',
    'projects.gplx.name': 'Driver License 600 Questions & Flashcards (30-Q Mock Exam)',
    'projects.gplx.desc': 'Official 600-question Vietnamese Driver License exam prep app: Interactive 3D flashcards, authentic 30-question mock tests (20-min countdown), instant grading with critical failure question detection, 30-item status palette, and 100% offline LocalStorage support.',
    'projects.todo.name': 'Work Calendar — Todo Calendar',
    'projects.todo.desc': 'Comprehensive personal task & calendar management web app: interactive month grid, 24-hour timeline, realtime Firebase synchronization across devices, custom daily wallpapers, reminders, and Excel/CSV import/export.',
    'projects.discord.name': 'Discord Quest Auto-Completer Bot',
    'projects.discord.desc': 'Asynchronous Python Discord bot designed to track and complete active Discord Quests in the background. Features multi-account concurrency, safe credential handling, and comprehensive activity logging.',
    'projects.roblox.name': 'Mhnaa Hub & MhnaaUI Suite',
    'projects.roblox.desc': 'Roblox automation script suite (Autofarm, Kill Aura, Dungeon Quests) and customizable MhnaaUI interface library for Roblox Luau developers, featuring clean layouts and one-line loadstring execution.',
    'projects.cpp.name': 'C & C++ Algorithms & Data Structures',
    'projects.cpp.desc': 'Curated collection of C and C++ algorithms and core data structures: pointer manipulations, dynamic memory allocation, recursive problems, string algorithms, and low-level system optimizations.',
    'projects.cta': 'View All on GitHub',
    // Blog
    'blog.label': '03. Blog',
    'blog.title': 'Learning Journey',
    'blog.desc':  'Notes, tutorials, and reflections from my programming adventure.',
    'blog.readmore': 'Read More →',
    'blog.b1.date': 'Sep 10, 2026', 'blog.b1.read': '5 min read',
    'blog.b1.title':  'Understanding JavaScript Variables: var, let, and const',
    'blog.b1.excerpt':'When I first started learning JavaScript, variable declarations were confusing. Here\'s what I learned about the differences between var, let, and const.',
    'blog.b2.date': 'Aug 28, 2026', 'blog.b2.read': '7 min read',
    'blog.b2.title':  'Git Basics: My First Week Using Version Control',
    'blog.b2.excerpt':'My experience learning Git from scratch — the commands I use every day, the mistakes I made, and why every developer should know version control from day one.',
    'blog.b3.date': 'Aug 15, 2026', 'blog.b3.read': '10 min read',
    'blog.b3.title':  'Pointers in C: Finally Getting It',
    'blog.b3.excerpt':'Pointers are the most infamous concept in C. After many failed attempts, here\'s the mental model that finally made them click for me.',
    'blog.b4.date': 'Jul 30, 2026', 'blog.b4.read': '6 min read',
    'blog.b4.title':  'Python List Comprehensions: Writing Cleaner Code',
    'blog.b4.excerpt':'List comprehensions blew my mind when I first saw them. Let me show you how I went from verbose loops to elegant one-liners.',
    'blog.b5.date': 'Jul 12, 2026', 'blog.b5.read': '8 min read',
    'blog.b5.title':  'CSS Flexbox vs Grid: When to Use Which',
    'blog.b5.excerpt':'Understanding when to use Flexbox vs CSS Grid changed how I approach web layouts entirely.',
    'blog.b6.date': 'Jun 1, 2026', 'blog.b6.read': '4 min read',
    'blog.b6.title':  'My First Week Learning to Code',
    'blog.b6.excerpt':'Everyone starts somewhere. This is the honest story of my first week writing code — the excitement, the frustration, and why I decided to keep going.',
    // Code
    'code.label': '03. Code',
    'code.title': 'Code Samples',
    'code.desc':  'Some snippets from my learning sessions.',
    'code.copy':  'Copy',
    // GitHub
    'github.label':          '05. GitHub',
    'github.title':          'GitHub Activity',
    'github.desc':           'Live stats from my GitHub profile.',
    'github.status':         'Active',
    'github.location':       'Vietnam',
    'github.joined':         'Joined Sep 2025',
    'github.bio':            'try get best · Aspiring Developer · Learning to code every day',
    'github.viewProfile':    'View Profile',
    'github.stat.repos':     'Public Repos',
    'github.stat.stars':     'Total Stars',
    'github.stat.forks':     'Total Forks',
    'github.stat.followers': 'Followers',
    'github.languages':      'Languages Breakdown',
    'github.languagesNote':  'Top technologies across public repositories',
    'github.recentRepos':    'Repositories',
    'github.filter.featured':'Featured',
    'github.filter.recent':  'Recent',
    'github.filter.all':     'All Repos',
    'github.sync':           'Sync',
    'github.syncing':        'Syncing...',
    'github.synced':         'Updated!',
    'github.noRepos':        'No public repositories found.',
    'github.error':          'Could not load GitHub data.',
    'github.visitProfile':   'Visit profile directly →',
    'github.noDesc':         'Personal developer project repository.',
    'github.viewRepo':       'View Code',
    // Contact
    'contact.label':  '04. Contact',
    'contact.title':  'Get In Touch',
    'contact.desc':   "I'd love to connect! Questions, collaborations, or just saying hi.",
    'contact.body':   "I'm currently <strong>learning</strong> and always open to new connections, feedback on my projects, or simply chatting about programming. My inbox is always open.",
    'contact.linkedin':    'Connect with me',
    'contact.card.hello':  'Say Hello!',
    'contact.card.respond':'I respond within 24 hours.',
    'contact.card.cta':    'Send me an Email',
    'contact.card.note':   'Or open a discussion on my <a href="https://github.com/Mhna3112" target="_blank" rel="noopener">GitHub</a>.',
    'emailDialog.title': 'Write an email',
    'emailDialog.desc': 'Fill this out, then review and send it in your email app.',
    'emailDialog.close': 'Close',
    'emailDialog.name': 'Your name',
    'emailDialog.email': 'Your email',
    'emailDialog.message': 'Message',
    'emailDialog.note': 'Your email app will open with this message ready. It is not sent until you press Send there.',
    'emailDialog.submit': 'Continue in email app',
    // Footer
    'footer.copy': 'Built with ❤️ · ',
    // Popover & Runner
    'popover.demo_btn': 'Try Interactive Demo',
    'popover.github_btn': 'Source Code',
    'runner.badge_live': 'LIVE DEMO',
    'runner.device_desktop': 'Desktop',
    'runner.device_tablet': 'Tablet',
    'runner.device_mobile': 'Mobile',
    'runner.reload': 'Reload demo',
    'runner.open_tab': 'Open in new tab',
    'runner.close': 'Close',
  },

  vi: {
    // Nav
    'nav.home':        'Trang chủ',
    'nav.about':       'Giới thiệu',
    'nav.projects':    'Dự án',
    'nav.blog':        'Blog',
    'nav.github':      'GitHub',
    'nav.contact':     'Liên hệ',
    'nav.todo':        'Lịch',
    'nav.todoApp':     'Lịch Công Việc',
    'nav.theme_title': 'GIAO DIỆN',
    'theme.light':     'Nền trắng',
    'theme.dark':      'Nền đen',
    'theme.system':    'Tự động',
    // Hero
    'hero.badge':   'Sẵn sàng học hỏi &amp; hợp tác',
    'hero.sub':     'Tôi đam mê <strong>học lập trình</strong> và xây dựng các ứng dụng. Tôi thích khám phá công nghệ mới, nâng cao kỹ năng và ghi lại hành trình học tập — từng commit một.',
    'hero.cta.about':    'Về tôi',
    'hero.cta.projects': 'Dự án của tôi',
    'hero.cta.blog':     'Đọc Blog',
    'hero.stats.repos':  'Kho lưu trữ',
    'hero.stats.stars':  'Sao',
    'hero.stats.forks':  'Nhánh',
    'hero.scroll':  'Cuộn để khám phá',
    // About
    'about.label':  '01. Giới thiệu',
    'about.title':  'Tôi là ai?',
    'about.desc':   'Tôi xây dựng trải nghiệm và công cụ Roblox bằng Lua, Luau, đồng thời tiếp tục phát triển kỹ năng lập trình.',
    'about.card1.title': 'Tôi là ai',
    'about.card1.desc':  'Tôi là Đức Mạnh, một lập trình viên ở Việt Nam. Tôi thích tạo script và giao diện Roblox bằng Luau, biến ý tưởng thành những dự án có thể sử dụng.',
    'about.card2.title': 'Tôi đang học gì',
    'about.card2.desc':  'Tôi tập trung vào <strong>Lua</strong> và <strong>Luau</strong> trong Roblox Studio: viết logic trò chơi, thiết kế giao diện và tổ chức mã có thể tái sử dụng. Tôi cũng làm việc với JavaScript, Python và C.',
    'about.card3.title': 'Sở thích',
    'about.card3.desc':  'Tôi thích tìm hiểu cách hoạt động của trải nghiệm Roblox, thử nghiệm tính năng trò chơi và tạo giao diện rõ ràng, hữu ích cho người chơi lẫn nhà phát triển.',
    'about.card4.title': 'Mục tiêu',
    'about.card4.desc':  'Tiếp tục nâng cao kỹ năng Luau, xây dựng các công cụ và trải nghiệm Roblox chỉn chu hơn, đồng thời chia sẻ dự án hữu ích với cộng đồng lập trình.',
    'about.skills.title': 'Công nghệ &amp; Công cụ',
    'about.skills.note':  'Đang cải thiện: <strong>lập trình Luau</strong>, <strong>giao diện Roblox</strong> và hệ thống có thể tái sử dụng cho dự án game.',
    // Projects
    'projects.label': '02. Dự án',
    'projects.title': 'Những gì tôi đã xây dựng',
    'projects.desc':  'Tuyển tập các dự án thật và phần mềm thực tế tôi đã lập trình và triển khai.',
    'projects.wip':   'Đang phát triển',
    'projects.mediahub.name': 'MediaHub Downloader',
    'projects.mediahub.desc': 'Trình phân tích & tải xuống Media đa nền tảng (TikTok, YouTube, Facebook, Instagram, Twitter/X...) không watermark, chuẩn âm thanh & hình ảnh chất lượng cao.',
    'projects.gplx.name': 'Ôn Thi Bằng Lái Ô Tô 600 Câu &amp; Thi Thử 30 Câu',
    'projects.gplx.desc': 'Ứng dụng ôn thi sát hạch lý thuyết lái xe ô tô 600 câu chuẩn Bộ GTVT: Flashcard 3D thông minh, đề thi 30 câu (20 phút), chấm điểm phát hiện câu điểm liệt, ma trận 30 câu tương tác và hoạt động 100% offline.',
    'projects.todo.name': 'Lịch Công Việc — Todo Calendar',
    'projects.todo.desc': 'Ứng dụng quản lý lịch & công việc cá nhân toàn diện: lịch tháng, thời gian biểu 24h, đồng bộ Firebase realtime giữa các thiết bị, đổi màu/ảnh nền từng ngày, thông báo nhắc việc và nhập/xuất dữ liệu Excel/CSV.',
    'projects.discord.name': 'Discord Quest Auto-Completer Bot',
    'projects.discord.desc': 'Bot Discord viết bằng Python quản lý và tự động nhận, hoàn thành các nhiệm vụ (Discord Quests) ở chế độ chạy ngầm bất đồng bộ. Hỗ trợ đa người dùng cùng lúc, quản lý token an toàn và hệ thống logging chi tiết.',
    'projects.roblox.name': 'Mhnaa Hub &amp; MhnaaUI Suite',
    'projects.roblox.desc': 'Trọn bộ script tự động hoá (Autofarm, Kill Aura, Dungeon Quest) và thư viện giao diện tuỳ biến MhnaaUI cho Roblox, tối ưu hoá luồng xử lý game scripting và hỗ trợ loadstring tức thì.',
    'projects.cpp.name': 'Luyện Tập Thuật Toán C &amp; C++',
    'projects.cpp.desc': 'Tuyển tập các bài tập thực hành cấu trúc dữ liệu và giải thuật bằng C & C++: xử lý mảng, con trỏ bộ nhớ, giải thuật đệ quy, xử lý chuỗi và tối ưu hoá hệ thống.',
    'projects.cta': 'Xem tất cả trên GitHub',
    // Blog
    'blog.label': '03. Blog',
    'blog.title': 'Hành trình học lập trình',
    'blog.desc':  'Ghi chú, hướng dẫn và suy nghĩ từ cuộc phiêu lưu lập trình của tôi.',
    'blog.readmore': 'Đọc thêm →',
    'blog.b1.date': '10 tháng 9, 2026', 'blog.b1.read': '5 phút đọc',
    'blog.b1.title':  'Hiểu về biến JavaScript: var, let và const',
    'blog.b1.excerpt':'Khi tôi mới bắt đầu học JavaScript, cách khai báo biến rất khó hiểu. Đây là những gì tôi học được về sự khác biệt giữa var, let và const.',
    'blog.b2.date': '28 tháng 8, 2026', 'blog.b2.read': '7 phút đọc',
    'blog.b2.title':  'Git cơ bản: Tuần đầu tiên dùng kiểm soát phiên bản',
    'blog.b2.excerpt':'Kinh nghiệm học Git từ đầu — các lệnh tôi dùng hàng ngày, những sai lầm tôi mắc phải và lý do tại sao mọi lập trình viên cần biết kiểm soát phiên bản từ sớm.',
    'blog.b3.date': '15 tháng 8, 2026', 'blog.b3.read': '10 phút đọc',
    'blog.b3.title':  'Con trỏ trong C: Cuối cùng tôi đã hiểu',
    'blog.b3.excerpt':'Con trỏ là khái niệm khét tiếng nhất trong C. Sau nhiều lần thất bại, đây là mô hình tư duy cuối cùng giúp tôi hiểu được.',
    'blog.b4.date': '30 tháng 7, 2026', 'blog.b4.read': '6 phút đọc',
    'blog.b4.title':  'List Comprehension Python: Viết code sạch hơn',
    'blog.b4.excerpt':'List comprehension làm tôi kinh ngạc khi lần đầu nhìn thấy. Để tôi chỉ bạn cách tôi đi từ vòng lặp dài dòng đến one-liner thanh lịch.',
    'blog.b5.date': '12 tháng 7, 2026', 'blog.b5.read': '8 phút đọc',
    'blog.b5.title':  'CSS Flexbox vs Grid: Khi nào dùng cái nào',
    'blog.b5.excerpt':'Hiểu khi nào dùng Flexbox thay vì CSS Grid đã thay đổi hoàn toàn cách tôi tiếp cận bố cục web.',
    'blog.b6.date': '1 tháng 6, 2026', 'blog.b6.read': '4 phút đọc',
    'blog.b6.title':  'Tuần đầu tiên học lập trình của tôi',
    'blog.b6.excerpt':'Ai cũng phải bắt đầu từ đâu đó. Đây là câu chuyện thực tế về tuần đầu tiên tôi viết code — sự hào hứng, thất vọng và lý do tôi quyết định tiếp tục.',
    // Code
    'code.label': '03. Code',
    'code.title': 'Mẫu code',
    'code.desc':  'Một số đoạn code từ các buổi học của tôi.',
    'code.copy':  'Sao chép',
    // GitHub
    'github.label':          '05. GitHub',
    'github.title':          'Hoạt động GitHub',
    'github.desc':           'Thống kê trực tiếp từ hồ sơ GitHub của tôi.',
    'github.status':         'Đang hoạt động',
    'github.location':       'Việt Nam',
    'github.joined':         'Tham gia T9/2025',
    'github.bio':            'try get best · Lập trình viên tương lai · Học code mỗi ngày',
    'github.viewProfile':    'Xem hồ sơ',
    'github.stat.repos':     'Kho lưu trữ',
    'github.stat.stars':     'Tổng sao',
    'github.stat.forks':     'Tổng nhánh',
    'github.stat.followers': 'Người theo dõi',
    'github.languages':      'Phân bổ ngôn ngữ',
    'github.languagesNote':  'Các công nghệ hàng đầu trên các repo công khai',
    'github.recentRepos':    'Kho lưu trữ',
    'github.filter.featured':'Nổi bật',
    'github.filter.recent':  'Mới nhất',
    'github.filter.all':     'Tất cả',
    'github.sync':           'Làm mới',
    'github.syncing':        'Đang tải...',
    'github.synced':         'Đã cập nhật!',
    'github.noRepos':        'Chưa có kho lưu trữ công khai.',
    'github.error':          'Không thể tải dữ liệu GitHub.',
    'github.visitProfile':   'Truy cập hồ sơ trực tiếp →',
    'github.noDesc':         'Kho lưu trữ dự án cá nhân của lập trình viên.',
    'github.viewRepo':       'Xem mã nguồn',
    // Contact
    'contact.label':  '04. Liên hệ',
    'contact.title':  'Kết nối với tôi',
    'contact.desc':   'Tôi rất muốn kết nối! Câu hỏi, hợp tác, hoặc chỉ là chào hỏi.',
    'contact.body':   'Tôi đang <strong>học tập</strong> và luôn mở cửa cho các kết nối mới, phản hồi về dự án của tôi, hoặc chỉ là trò chuyện về lập trình. Hộp thư của tôi luôn rộng mở.',
    'contact.linkedin':    'Kết nối với tôi',
    'contact.card.hello':  'Chào bạn!',
    'contact.card.respond':'Tôi phản hồi trong vòng 24 giờ.',
    'contact.card.cta':    'Gửi email cho tôi',
    'contact.card.note':   'Hoặc mở một cuộc thảo luận trên <a href="https://github.com/Mhna3112" target="_blank" rel="noopener">GitHub</a> của tôi.',
    'emailDialog.title': 'Viết email',
    'emailDialog.desc': 'Điền lời nhắn, sau đó kiểm tra và gửi trong ứng dụng email của bạn.',
    'emailDialog.close': 'Đóng',
    'emailDialog.name': 'Tên của bạn',
    'emailDialog.email': 'Email của bạn',
    'emailDialog.message': 'Lời nhắn',
    'emailDialog.note': 'Ứng dụng email sẽ mở với nội dung đã điền sẵn. Thư chỉ được gửi khi bạn bấm Gửi trong ứng dụng đó.',
    'emailDialog.submit': 'Tiếp tục trong ứng dụng email',
    // Footer
    'footer.copy': 'Được xây dựng với ❤️ · ',
    // Popover & Runner
    'popover.demo_btn': 'Chạy thử demo',
    'popover.github_btn': 'Mã nguồn',
    'runner.badge_live': 'LIVE DEMO',
    'runner.device_desktop': 'Desktop',
    'runner.device_tablet': 'Tablet',
    'runner.device_mobile': 'Mobile',
    'runner.reload': 'Tải lại demo',
    'runner.open_tab': 'Mở trong tab mới',
    'runner.close': 'Đóng',
  }
};

function t(key) {
  return (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) ||
         (TRANSLATIONS['en'] && TRANSLATIONS['en'][key]) || key;
}

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);

  // Update button label (preserve vector SVG icon, no emoji flags)
  const langBtn   = document.getElementById('lang-toggle');
  const langLabel = langBtn ? langBtn.querySelector('.lang-label') : null;
  if (langBtn && langLabel) {
    if (lang === 'vi') {
      langLabel.textContent = 'EN';
      langBtn.title = 'Switch to English';
      langBtn.setAttribute('aria-label', 'Switch to English');
    } else {
      langLabel.textContent = 'VN';
      langBtn.title = 'Chuyển sang Tiếng Việt';
      langBtn.setAttribute('aria-label', 'Chuyển sang Tiếng Việt');
    }
  }

  // Translate all [data-i18n] elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    // Use innerHTML to support <strong> and <a> tags
    el.innerHTML = val;
  });
  document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
    el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria-label')));
  });

  // Restart typewriter with new language
  if (typeof resetTypewriter === 'function') {
    resetTypewriter();
  }

  // Update active popover and runner modal language
  if (typeof updatePopoverLang === 'function') {
    updatePopoverLang();
  }
  if (typeof updateRunnerLang === 'function') {
    updateRunnerLang();
  }
}

// Wire lang button
document.getElementById('lang-toggle').addEventListener('click', () => {
  applyLang(currentLang === 'en' ? 'vi' : 'en');
});

const emailDialog = document.getElementById('email-dialog');
const emailForm = document.getElementById('email-form');
document.getElementById('open-email-dialog').addEventListener('click', () => {
  emailDialog.showModal();
  document.getElementById('email-name').focus();
});
document.getElementById('close-email-dialog').addEventListener('click', () => emailDialog.close());
emailDialog.addEventListener('click', event => {
  if (event.target === emailDialog) emailDialog.close();
});
emailForm.addEventListener('submit', event => {
  event.preventDefault();
  if (!emailForm.reportValidity()) return;

  const name = document.getElementById('email-name').value.trim();
  const email = document.getElementById('email-address').value.trim();
  const message = document.getElementById('email-message').value.trim();
  if (!name || !email || !message) return;

  const subject = currentLang === 'vi' ? `Lời nhắn từ ${name} qua ducmanh.xyz` : `Message from ${name} via ducmanh.xyz`;
  const body = currentLang === 'vi'
    ? `Tên: ${name}\nEmail: ${email}\n\nLời nhắn:\n${message}`
    : `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
  window.location.href = `mailto:manhntp22@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});


/* ==========================================================================
   PROJECT HOVER PREVIEW POPOVER & INTERACTIVE DEMO RUNNER ENGINE
   ========================================================================== */

// ── 1. PROJECT METADATA & DATA DICTIONARY ──────────────────────────────────
const PROJECTS_DATA = {
  mediahub: {
    id: 'mediahub',
    type: 'web',
    liveUrl: 'https://media.ducmanh.xyz/',
    githubUrl: 'https://github.com/Mhna3112/Mhnaproject1',
    badge: { vi: 'Cloudflare Worker', en: 'Cloudflare Worker' },
    status: { vi: 'Hoạt động', en: 'Live Production' },
    name: { vi: 'MediaHub Downloader', en: 'MediaHub Downloader' },
    desc: {
      vi: 'Trình phân tích & tải xuống Media đa nền tảng (TikTok, YouTube, Facebook, Instagram, Twitter/X...) không watermark, chuẩn âm thanh & hình ảnh chất lượng cao.',
      en: 'Multi-platform media analyzer & high-speed downloader (TikTok, YouTube, Facebook, Instagram, Twitter/X, Douyin) without watermarks, featuring clean audio extraction & HD video processing.'
    },
    mockupHeader: {
      title: { vi: 'Xem trước giao diện', en: 'UI Preview' },
      tag: 'Serverless API'
    },
    mockupHtml: `
      <div class="popover-mockup-input">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
        <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">https://tiktok.com/@creator/video/7382...</span>
      </div>
      <div class="popover-mockup-pill-group">
        <span class="popover-mockup-pill">⚡ Fast Edge CDN</span>
        <span class="popover-mockup-pill">🎵 320kbps MP3</span>
        <span class="popover-mockup-pill">No Watermark</span>
        <span class="popover-mockup-pill">1080p HD</span>
      </div>
    `,
    features: {
      vi: [
        'Bóc tách video TikTok, Douyin, YouTube, FB không logo gốc',
        'Tách luồng âm thanh MP3 320kbps & chuyển mã video chất lượng cao',
        'Triển khai toàn cầu trên Cloudflare Workers với độ trễ cực thấp'
      ],
      en: [
        'Extracts TikTok, Douyin, YouTube, FB videos without watermarks',
        'High-bitrate 320kbps MP3 audio stream & HD video processing',
        'Serverless global deployment on Cloudflare Workers edge network'
      ]
    }
  },

  gplx: {
    id: 'gplx',
    type: 'web',
    liveUrl: 'gplx/',
    githubUrl: 'https://github.com/Mhna3112/myweb/tree/main/gplx',
    badge: { vi: 'Web App · PWA', en: 'Web App · PWA' },
    status: { vi: 'Sẵn sàng 100%', en: '100% Offline' },
    name: { vi: 'Ôn Thi Bằng Lái Ô Tô 600 Câu', en: 'Driver License 600 Questions' },
    desc: {
      vi: 'Ứng dụng ôn thi sát hạch lý thuyết lái xe ô tô 600 câu chuẩn Bộ GTVT: Flashcard 3D thông minh, đề thi 30 câu (20 phút), chấm điểm phát hiện câu điểm liệt.',
      en: 'Official 600-question Vietnamese Driver License exam prep app: Interactive 3D flashcards, authentic 30-question mock tests, and instant critical failure question detection.'
    },
    mockupHeader: {
      title: { vi: 'Mô phỏng Flashcard 3D', en: '3D Flashcard Preview' },
      tag: 'B1, B2, C, D'
    },
    mockupHtml: `
      <div class="popover-flashcard-preview">
        <div class="popover-flashcard-q">Câu 18 (Điểm liệt): Trên đường cao tốc, người lái xe có được phép quay đầu xe, lùi xe không?</div>
        <div class="popover-flashcard-opt correct">
          <span>✓</span>
          <span>1. Tuyệt đối không được quay đầu xe, lùi xe</span>
        </div>
        <div class="popover-flashcard-opt">
          <span>○</span>
          <span>2. Được quay đầu xe ở nơi có khoảng mở giải phân cách</span>
        </div>
      </div>
    `,
    features: {
      vi: [
        'Flashcard 3D lật 2 mặt kèm mẹo giải nhanh từng câu hỏi',
        'Thi thử đề chuẩn 30 câu tính giờ 20 phút chấm điểm tự động',
        'Phát hiện tức thì 60 câu điểm liệt và ma trận 30 câu tương tác'
      ],
      en: [
        'Interactive 3D flashcards with quick memory tips for each question',
        'Authentic 30-question timed mock exam with automated grading',
        'Instant critical failure alerts & interactive 30-item answer matrix'
      ]
    }
  },

  todo: {
    id: 'todo',
    type: 'web',
    liveUrl: 'todo/',
    githubUrl: 'https://github.com/Mhna3112/todp-cal',
    badge: { vi: 'Realtime Cloud', en: 'Realtime Cloud' },
    status: { vi: 'Đồng bộ Firebase', en: 'Firebase Synced' },
    name: { vi: 'Lịch Công Việc — Todo Calendar', en: 'Todo Calendar' },
    desc: {
      vi: 'Ứng dụng quản lý lịch & công việc cá nhân toàn diện: lịch tháng, thời gian biểu 24h, đồng bộ Firebase realtime giữa các thiết bị, xuất dữ liệu Excel.',
      en: 'Comprehensive personal task & calendar web app: month calendar, 24-hour timeline, realtime Firebase sync across devices, and Excel/CSV export.'
    },
    mockupHeader: {
      title: { vi: 'Lịch trình 24h hôm nay', en: 'Today 24h Timeline' },
      tag: 'Firebase Sync'
    },
    mockupHtml: `
      <div class="popover-flashcard-preview">
        <div class="popover-flashcard-q" style="display:flex;justify-content:space-between;">
          <span>📅 Hôm nay · 3 nhiệm vụ</span>
          <span style="color:var(--green);font-size:0.7rem;">● Đồng bộ</span>
        </div>
        <div class="popover-flashcard-opt correct">
          <span>✓</span>
          <span>08:30 Deploy Cloudflare Workers v3.2</span>
        </div>
        <div class="popover-flashcard-opt" style="color:var(--accent);font-weight:600;">
          <span>⚡</span>
          <span>14:00 Review Luau script Roblox Hub</span>
        </div>
        <div class="popover-flashcard-opt" style="color:var(--fg3);">
          <span>○</span>
          <span>20:00 Thực hành giải thuật C++ QuickSort</span>
        </div>
      </div>
    `,
    features: {
      vi: [
        'Lịch tháng trực quan kết hợp thời gian biểu chi tiết 24h',
        'Đồng bộ dữ liệu Firebase Realtime tức thì trên mọi thiết bị',
        'Tùy biến hình nền, màu sắc từng ngày và xuất file Excel/CSV'
      ],
      en: [
        'Interactive month grid combined with detailed 24-hour daily timeline',
        'Instant multi-device synchronization powered by Firebase Realtime',
        'Custom daily wallpapers, theme palettes, and Excel/CSV data export'
      ]
    }
  },

  discord: {
    id: 'discord',
    type: 'discord',
    liveUrl: null,
    githubUrl: 'https://github.com/Mhna3112/discord-bot-auto-quest',
    badge: { vi: 'Python · Asyncio', en: 'Python · Asyncio' },
    status: { vi: 'Bot Hoạt động', en: 'Bot Online' },
    name: { vi: 'Discord Quest Auto-Completer Bot', en: 'Discord Quest Auto-Completer Bot' },
    desc: {
      vi: 'Bot Discord viết bằng Python quản lý và tự động nhận, hoàn thành các nhiệm vụ (Discord Quests) ở chế độ chạy ngầm bất đồng bộ với hệ thống logging chi tiết.',
      en: 'Asynchronous Python Discord bot designed to track and complete active Discord Quests in background. Features multi-account concurrency & real-time logging.'
    },
    mockupHeader: {
      title: { vi: 'Discord RPC Status', en: 'Discord RPC Status' },
      tag: 'WebSocket v10'
    },
    mockupHtml: `
      <div class="popover-discord-embed">
        <div class="popover-discord-user">
          <span style="color:#5865f2;">●</span>
          <span>Quest Bot</span>
          <span class="popover-discord-bot-tag">BOT</span>
        </div>
        <div style="font-size:0.75rem;color:#dbdee1;margin-bottom:4px;">🎮 Quest: Stream Honkai: Star Rail (15m)</div>
        <div class="popover-progress-bar">
          <div class="popover-progress-fill" style="width:73%;"></div>
        </div>
        <div style="font-size:0.68rem;color:#949ba4;display:flex;justify-content:space-between;">
          <span>Tiến trình: 11 / 15 phút (73%)</span>
          <span style="color:#3fb950;">● Streaming</span>
        </div>
      </div>
    `,
    features: {
      vi: [
        'Tự động quét và hoàn thành tất cả Discord Quests đang mở',
        'Engine chạy ngầm Asyncio đa luồng không tốn tài nguyên máy',
        'Quản lý token bảo mật cao kèm thông báo Webhook thời gian thực'
      ],
      en: [
        'Automatically scans & finishes all available Discord Quests',
        'Ultra-lightweight Asyncio background daemon for multi-accounts',
        'Secure AES token vault & real-time Webhook notifications'
      ]
    }
  },

  roblox: {
    id: 'roblox',
    type: 'roblox',
    liveUrl: null,
    githubUrl: 'https://github.com/Mhna3112/Mhnauxui',
    badge: { vi: 'Lua / Luau', en: 'Lua / Luau' },
    status: { vi: 'Roblox Suite', en: 'Roblox Suite' },
    name: { vi: 'Mhnaa Hub & MhnaaUI Suite', en: 'Mhnaa Hub & MhnaaUI Suite' },
    desc: {
      vi: 'Trọn bộ script tự động hoá (Autofarm, Kill Aura, Dungeon Quest) và thư viện giao diện tuỳ biến MhnaaUI cho Roblox, hỗ trợ loadstring tức thì.',
      en: 'Roblox automation script suite (Autofarm, Kill Aura, Dungeon Quests) and customizable MhnaaUI interface library with instant one-line loadstring execution.'
    },
    mockupHeader: {
      title: { vi: 'Giao diện Game MhnaaUI', en: 'MhnaaUI In-Game' },
      tag: 'Luau v5.1'
    },
    mockupHtml: `
      <div class="popover-roblox-panel">
        <div class="popover-roblox-toggle-row">
          <span>Auto Farm Level (Fast)</span>
          <span class="popover-roblox-toggle-active">[BẬT]</span>
        </div>
        <div class="popover-roblox-toggle-row">
          <span>Kill Aura (Phạm vi 25m)</span>
          <span class="popover-roblox-toggle-active">[BẬT]</span>
        </div>
        <div class="popover-roblox-toggle-row">
          <span>Tốc độ di chuyển</span>
          <span style="color:var(--accent);">x2.5 (32 spd)</span>
        </div>
      </div>
    `,
    features: {
      vi: [
        'Bộ công cụ Autofarm quái, Kill Aura và làm Dungeon mượt mà',
        'Thư viện giao diện MhnaaUI phong cách Resend kéo thả tự do',
        'Tích hợp loadstring 1 chạm chạy ngay trên mọi Roblox Executor'
      ],
      en: [
        'High-performance Autofarm, Kill Aura & Dungeon Quest engine',
        'Modern draggable Resend-style MhnaaUI interface suite',
        'One-click loadstring ready for all popular Roblox executors'
      ]
    }
  },

  cpp: {
    id: 'cpp',
    type: 'cpp',
    liveUrl: null,
    githubUrl: 'https://github.com/Mhna3112/Learn-C-C-',
    badge: { vi: 'C / C++ Core', en: 'C / C++ Core' },
    status: { vi: 'Thuật toán', en: 'Algorithms' },
    name: { vi: 'Luyện Tập Thuật Toán C & C++', en: 'C & C++ Practice & Algorithms' },
    desc: {
      vi: 'Tuyển tập các bài tập thực hành cấu trúc dữ liệu và giải thuật bằng C & C++: xử lý mảng, con trỏ bộ nhớ, giải thuật đệ quy và tối ưu hoá hệ thống.',
      en: 'Curated collection of C and C++ algorithms and core data structures: pointer manipulations, recursive problems, and low-level optimizations.'
    },
    mockupHeader: {
      title: { vi: 'Mô phỏng Hoán đổi Mảng', en: 'Array Swap Visualizer' },
      tag: 'O(N log N)'
    },
    mockupHtml: `
      <div class="popover-algo-bars">
        <div class="popover-algo-bar" style="height:35%;"></div>
        <div class="popover-algo-bar active" style="height:70%;"></div>
        <div class="popover-algo-bar" style="height:45%;"></div>
        <div class="popover-algo-bar active" style="height:25%;"></div>
        <div class="popover-algo-bar" style="height:90%;"></div>
        <div class="popover-algo-bar" style="height:60%;"></div>
        <div class="popover-algo-bar" style="height:80%;"></div>
      </div>
    `,
    features: {
      vi: [
        'Thao tác con trỏ bộ nhớ, mảng động và cấu trúc dữ liệu cơ bản',
        'Bộ trực quan hoá thuật toán QuickSort, BubbleSort, BinarySearch',
        'Đo thời gian thực thi chính xác đến từng microsecond (ms)'
      ],
      en: [
        'Pointer manipulations, dynamic memory allocation & data structures',
        'Interactive visualizer for QuickSort, BubbleSort & BinarySearch',
        'Precise execution time benchmarking measured down to milliseconds'
      ]
    }
  }
};

const ROBLOX_LOADSTRING = 'loadstring(game:HttpGet("https://raw.githubusercontent.com/Mhna3112/Mhnauxui/main/source.lua"))()';

// ── 2. HOVER PREVIEW POPOVER ENGINE ────────────────────────────────────────
const popoverEl = document.getElementById('project-hover-popover');
let popoverShowTimer = null;
let popoverHideTimer = null;
let currentHoverProjectId = null;
let currentHoverCard = null;

function renderPopoverContent(projectId) {
  const project = PROJECTS_DATA[projectId];
  if (!project) return '';

  const lang = (typeof currentLang !== 'undefined') ? currentLang : 'vi';
  const badgeText = project.badge[lang] || project.badge.vi;
  const statusText = project.status[lang] || project.status.vi;
  const nameText = project.name[lang] || project.name.vi;
  const descText = project.desc[lang] || project.desc.vi;
  const headerTitle = project.mockupHeader.title[lang] || project.mockupHeader.title.vi;
  const headerTag = project.mockupHeader.tag;
  const featureList = project.features[lang] || project.features.vi || [];
  const demoBtnText = lang === 'vi' ? 'Chạy thử demo' : 'Try Interactive Demo';
  const codeBtnText = lang === 'vi' ? 'Mã nguồn' : 'Source Code';

  const featuresHtml = featureList.map(feat => `
    <li>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
      <span>${feat}</span>
    </li>
  `).join('');

  return `
    <div class="popover-header">
      <span class="popover-badge">${badgeText}</span>
      <div class="popover-status">
        <span class="popover-status-dot"></span>
        <span>${statusText}</span>
      </div>
    </div>
    <h3 class="popover-title">${nameText}</h3>
    <p class="popover-desc">${descText}</p>
    <div class="popover-example-box">
      <div class="popover-example-header">
        <span>${headerTitle}</span>
        <span class="popover-example-tag">${headerTag}</span>
      </div>
      ${project.mockupHtml}
    </div>
    <ul class="popover-features">
      ${featuresHtml}
    </ul>
    <div class="popover-actions">
      <button type="button" class="popover-btn-demo" data-project-target="${project.id}">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="5 3 19 12 5 21 5 3"/></svg>
        <span>${demoBtnText}</span>
      </button>
      <a href="${project.githubUrl}" target="_blank" rel="noopener" class="popover-btn-gh" title="GitHub">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
        <span>${codeBtnText}</span>
      </a>
    </div>
  `;
}

function positionPopover(card) {
  if (!popoverEl || !card) return;
  const cardRect = card.getBoundingClientRect();
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  const popoverW = popoverEl.offsetWidth || 380;
  const popoverH = popoverEl.offsetHeight || 380;
  const gap = 14;
  const margin = 14;

  let left, top;

  // Try right side
  if (cardRect.right + gap + popoverW <= vw - margin) {
    left = cardRect.right + gap;
    top = cardRect.top;
  }
  // Try left side
  else if (cardRect.left - gap - popoverW >= margin) {
    left = cardRect.left - gap - popoverW;
    top = cardRect.top;
  }
  // Try bottom if horizontal doesn't fit
  else if (cardRect.bottom + gap + popoverH <= vh - margin) {
    left = Math.max(margin, Math.min(vw - popoverW - margin, cardRect.left + (cardRect.width - popoverW) / 2));
    top = cardRect.bottom + gap;
  }
  // Try top
  else if (cardRect.top - gap - popoverH >= margin) {
    left = Math.max(margin, Math.min(vw - popoverW - margin, cardRect.left + (cardRect.width - popoverW) / 2));
    top = cardRect.top - gap - popoverH;
  }
  // Fallback: center in viewport safely
  else {
    left = Math.max(margin, (vw - popoverW) / 2);
    top = Math.max(margin, (vh - popoverH) / 2);
  }

  // Safety viewport clamp
  left = Math.max(margin, Math.min(vw - popoverW - margin, left));
  top = Math.max(margin, Math.min(vh - popoverH - margin, top));

  popoverEl.style.left = `${Math.round(left)}px`;
  popoverEl.style.top = `${Math.round(top)}px`;
}

function showPopover(projectId, card) {
  if (!popoverEl || !PROJECTS_DATA[projectId]) return;
  currentHoverProjectId = projectId;
  currentHoverCard = card;

  popoverEl.innerHTML = renderPopoverContent(projectId);
  positionPopover(card);

  popoverEl.classList.add('visible');
  popoverEl.setAttribute('aria-hidden', 'false');

  // Wire demo button inside popover
  const demoBtn = popoverEl.querySelector('.popover-btn-demo');
  if (demoBtn) {
    demoBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      hidePopoverImmediately();
      openProjectRunner(projectId);
    });
  }
}

function scheduleShowPopover(projectId, card) {
  clearTimeout(popoverShowTimer);
  clearTimeout(popoverHideTimer);
  // Faster switch when popover is already visible from another card
  const delay = (popoverEl && popoverEl.classList.contains('visible')) ? 50 : 250;
  popoverShowTimer = setTimeout(() => {
    showPopover(projectId, card);
  }, delay);
}

function scheduleHidePopover() {
  clearTimeout(popoverShowTimer);
  popoverHideTimer = setTimeout(() => {
    hidePopoverImmediately();
  }, 200);
}

function hidePopoverImmediately() {
  clearTimeout(popoverShowTimer);
  clearTimeout(popoverHideTimer);
  if (popoverEl) {
    popoverEl.classList.remove('visible');
    popoverEl.setAttribute('aria-hidden', 'true');
  }
  currentHoverProjectId = null;
  currentHoverCard = null;
}

function updatePopoverLang() {
  if (popoverEl && popoverEl.classList.contains('visible') && currentHoverProjectId && currentHoverCard) {
    popoverEl.innerHTML = renderPopoverContent(currentHoverProjectId);
    positionPopover(currentHoverCard);
    const demoBtn = popoverEl.querySelector('.popover-btn-demo');
    if (demoBtn) {
      demoBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        hidePopoverImmediately();
        openProjectRunner(currentHoverProjectId);
      });
    }
  }
}

// ── MOUSE TRACKING & RUNNER HOVER ENGINE ────────────────────────────────────
let currentMousePos = { x: 0, y: 0 };
if (typeof window !== 'undefined') {
  window.addEventListener('mousemove', (e) => {
    currentMousePos.x = e.clientX;
    currentMousePos.y = e.clientY;
  }, { passive: true });
}

let runnerOpenTimer = null;
let runnerHoverCloseTimer = null;
let isHoverTriggered = false;

function scheduleOpenRunner(projectId) {
  clearTimeout(runnerHoverCloseTimer);
  clearTimeout(runnerOpenTimer);
  const isAlreadyOpen = runnerModal && (runnerModal.open || runnerModal.hasAttribute('open'));
  const delay = isAlreadyOpen ? 80 : 220;
  runnerOpenTimer = setTimeout(() => {
    openProjectRunner(projectId, { autoRun: true, triggeredByHover: true });
  }, delay);
}

function cancelOpenRunner() {
  clearTimeout(runnerOpenTimer);
}

function scheduleCloseRunner() {
  clearTimeout(runnerOpenTimer);
  if (!isHoverTriggered) return;
  clearTimeout(runnerHoverCloseTimer);
  runnerHoverCloseTimer = setTimeout(() => {
    closeProjectRunner();
  }, 350);
}

function cancelRunnerClose() {
  clearTimeout(runnerHoverCloseTimer);
}

const canHover = () => typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(hover: hover)').matches;

// Wire project cards hover preview & direct click
document.querySelectorAll('.project-card[data-project-id]').forEach(card => {
  const pid = card.dataset.projectId;
  card.addEventListener('mouseenter', () => {
    if (canHover()) {
      scheduleOpenRunner(pid);
    }
  });
  card.addEventListener('mouseleave', () => {
    if (canHover()) {
      cancelOpenRunner();
      if (runnerModal && (runnerModal.open || runnerModal.hasAttribute('open')) && isHoverTriggered) {
        scheduleCloseRunner();
      }
    }
  });
  card.addEventListener('click', (e) => {
    if (e.target.closest('a, button')) return;
    cancelOpenRunner();
    cancelRunnerClose();
    if (pid) openProjectRunner(pid, { autoRun: true, triggeredByHover: false });
  });
});

// Dismiss popover on outside click or Escape if ever opened
if (popoverEl) {
  document.addEventListener('click', (e) => {
    if (popoverEl.classList.contains('visible')) {
      if (!popoverEl.contains(e.target) && !e.target.closest('.project-card')) {
        hidePopoverImmediately();
      }
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && popoverEl.classList.contains('visible')) {
      hidePopoverImmediately();
    }
  });
}

// ── 3. INTERACTIVE DEMO RUNNER MODAL ──────────────────────────────────────
const runnerModal = document.getElementById('project-runner-modal');
const runnerModalBody = document.getElementById('runner-modal-body');
const runnerBadge = document.getElementById('runner-badge');
const runnerTitle = document.getElementById('runner-modal-title');
const runnerExternalLink = document.getElementById('runner-external-link');
const runnerReloadBtn = document.getElementById('runner-reload-btn');
const runnerCloseBtn = document.getElementById('close-runner-modal');
const runnerDotClose = document.getElementById('runner-dot-close');
const runnerDeviceSwitcher = document.getElementById('runner-device-switcher');

let activeRunnerProjectId = null;
let activeDevice = 'desktop';

// Active simulator states & timers
let discordStreamInterval = null;
let discordQuestProgress = 9;
let cppSortInterval = null;
let cppGenerator = null;
let cppArray = [];
let cppIsRunning = false;
let cppStartTime = 0;
let cppElapsed = 0;
let cppComparisons = 0;
let cppSwaps = 0;

function setRunnerDevice(device) {
  activeDevice = device;
  if (runnerDeviceSwitcher) {
    runnerDeviceSwitcher.querySelectorAll('.runner-device-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.device === device);
    });
  }
  const wrapper = document.getElementById('runner-frame-wrapper');
  if (wrapper) {
    wrapper.classList.remove('frame-desktop', 'frame-tablet', 'frame-mobile');
    wrapper.classList.add(`frame-${device}`);
  }
}

function openProjectRunner(projectId, options = {}) {
  if (!runnerModal || !PROJECTS_DATA[projectId]) return;
  if (activeRunnerProjectId) {
    cleanupRunner();
  }
  const { autoRun = true, triggeredByHover = false } = options;
  isHoverTriggered = triggeredByHover;
  activeRunnerProjectId = projectId;
  const project = PROJECTS_DATA[projectId];
  const lang = (typeof currentLang !== 'undefined') ? currentLang : 'vi';

  // Set modal header
  if (runnerTitle) runnerTitle.textContent = project.name[lang] || project.name.vi;
  if (runnerBadge) runnerBadge.textContent = project.badge[lang] || 'LIVE DEMO';

  if (runnerExternalLink) {
    const targetUrl = project.liveUrl || project.githubUrl;
    runnerExternalLink.href = targetUrl;
    runnerExternalLink.title = lang === 'vi' ? 'Mở trong tab mới' : 'Open in new tab';
    runnerExternalLink.setAttribute('aria-label', lang === 'vi' ? 'Mở tab mới' : 'Open in new tab');
  }

  // Reset to desktop frame
  setRunnerDevice('desktop');

  // Render project content with autoRun option
  if (project.type === 'web') {
    renderWebRunner(project, { autoRun });
  } else if (project.type === 'discord') {
    renderDiscordRunner(project, { autoRun });
  } else if (project.type === 'roblox') {
    renderRobloxRunner(project, { autoRun });
  } else if (project.type === 'cpp') {
    renderCppRunner(project, { autoRun });
  }

  // Open native dialog modal
  if (typeof runnerModal.showModal === 'function') {
    if (!runnerModal.open) {
      runnerModal.showModal();
    }
  } else {
    runnerModal.setAttribute('open', '');
  }

  // If opened via hover, verify mouse position and set initial safety timer if outside
  if (triggeredByHover && typeof window !== 'undefined') {
    clearTimeout(runnerHoverCloseTimer);
    if (currentMousePos.x !== 0 || currentMousePos.y !== 0) {
      const rect = runnerModal.getBoundingClientRect();
      const isInside = currentMousePos.x >= rect.left && currentMousePos.x <= rect.right &&
                       currentMousePos.y >= rect.top && currentMousePos.y <= rect.bottom;
      if (!isInside) {
        runnerHoverCloseTimer = setTimeout(() => {
          if (isHoverTriggered && runnerModal && (runnerModal.open || runnerModal.hasAttribute('open'))) {
            closeProjectRunner();
          }
        }, 750);
      }
    }
  }
}

function closeProjectRunner() {
  if (!runnerModal) return;
  isHoverTriggered = false;
  clearTimeout(runnerOpenTimer);
  clearTimeout(runnerHoverCloseTimer);
  cleanupRunner();
  if (typeof runnerModal.close === 'function') {
    if (runnerModal.open) {
      runnerModal.close();
    }
  } else {
    runnerModal.removeAttribute('open');
  }
}

let robloxDragCleanup = null;

function cleanupRunner() {
  clearTimeout(runnerOpenTimer);
  clearTimeout(runnerHoverCloseTimer);

  // Clear Discord streams
  if (discordStreamInterval) {
    clearInterval(discordStreamInterval);
    discordStreamInterval = null;
  }
  // Clear C++ animations
  if (cppSortInterval) {
    clearInterval(cppSortInterval);
    cppSortInterval = null;
  }
  cppIsRunning = false;
  cppGenerator = null;

  // Clean up any active drag listeners
  if (typeof robloxDragCleanup === 'function') {
    robloxDragCleanup();
    robloxDragCleanup = null;
  }

  // Stop & dismantle any active iframe to kill network, audio, and memory immediately
  if (runnerModalBody) {
    const iframes = runnerModalBody.querySelectorAll('iframe');
    iframes.forEach(iframe => {
      iframe.src = 'about:blank';
      if (typeof iframe.remove === 'function') {
        iframe.remove();
      } else if (iframe.parentNode && typeof iframe.parentNode.removeChild === 'function') {
        iframe.parentNode.removeChild(iframe);
      }
    });
    runnerModalBody.innerHTML = '';
  }
  activeRunnerProjectId = null;
}

function reloadCurrentRunner() {
  if (!activeRunnerProjectId || !PROJECTS_DATA[activeRunnerProjectId]) return;
  const project = PROJECTS_DATA[activeRunnerProjectId];
  if (project.type === 'web') {
    renderWebRunner(project);
  } else if (project.type === 'discord') {
    renderDiscordRunner(project);
  } else if (project.type === 'roblox') {
    renderRobloxRunner(project);
  } else if (project.type === 'cpp') {
    renderCppRunner(project);
  }
}

function updateRunnerLang() {
  if (!runnerModal || !activeRunnerProjectId || !PROJECTS_DATA[activeRunnerProjectId]) return;
  const project = PROJECTS_DATA[activeRunnerProjectId];
  const lang = (typeof currentLang !== 'undefined') ? currentLang : 'vi';

  if (runnerTitle) runnerTitle.textContent = project.name[lang] || project.name.vi;
  if (runnerBadge) runnerBadge.textContent = project.badge[lang] || 'LIVE DEMO';
  if (runnerExternalLink) {
    runnerExternalLink.title = lang === 'vi' ? 'Mở trong tab mới' : 'Open in new tab';
    runnerExternalLink.setAttribute('aria-label', lang === 'vi' ? 'Mở tab mới' : 'Open in new tab');
  }
  if (runnerReloadBtn) {
    runnerReloadBtn.title = lang === 'vi' ? 'Tải lại demo' : 'Reload demo';
    runnerReloadBtn.setAttribute('aria-label', lang === 'vi' ? 'Tải lại' : 'Reload');
  }
  if (runnerCloseBtn) {
    runnerCloseBtn.title = lang === 'vi' ? 'Đóng (Esc)' : 'Close (Esc)';
    runnerCloseBtn.setAttribute('aria-label', lang === 'vi' ? 'Đóng' : 'Close');
  }
  if (runnerDeviceSwitcher) {
    const desktopBtn = runnerDeviceSwitcher.querySelector('[data-device="desktop"]');
    const tabletBtn = runnerDeviceSwitcher.querySelector('[data-device="tablet"]');
    const mobileBtn = runnerDeviceSwitcher.querySelector('[data-device="mobile"]');
    if (desktopBtn) desktopBtn.title = lang === 'vi' ? 'Chế độ Desktop (100%)' : 'Desktop view (100%)';
    if (tabletBtn) tabletBtn.title = lang === 'vi' ? 'Chế độ Tablet (768px)' : 'Tablet view (768px)';
    if (mobileBtn) mobileBtn.title = lang === 'vi' ? 'Chế độ Mobile (390px)' : 'Mobile view (390px)';
  }
}

// ── 3.1. WEB IFRAME RUNNER ────────────────────────────────────────────────
function renderWebRunner(project, options = {}) {
  if (!runnerModalBody) return;
  const lang = (typeof currentLang !== 'undefined') ? currentLang : 'vi';
  const loadingText = lang === 'vi' ? 'Đang khởi chạy ứng dụng...' : 'Launching application...';

  runnerModalBody.innerHTML = `
    <div class="runner-frame-wrapper frame-${activeDevice}" id="runner-frame-wrapper">
      <div class="runner-loading-shimmer" id="runner-loading-shimmer">
        <div class="runner-spinner"></div>
        <div class="runner-loading-text">${loadingText}</div>
      </div>
      <iframe class="runner-iframe" id="runner-iframe" src="${project.liveUrl}" title="${project.name[lang] || project.name.vi}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  `;

  const iframe = document.getElementById('runner-iframe');
  const shimmer = document.getElementById('runner-loading-shimmer');
  if (iframe) {
    iframe.onload = () => {
      if (shimmer) {
        shimmer.style.opacity = '0';
        setTimeout(() => { if (shimmer.parentNode) shimmer.remove(); }, 250);
      }
    };
  }
}

// ── 3.2. DISCORD QUEST BOT RUNNER ─────────────────────────────────────────
function renderDiscordRunner(project, options = {}) {
  if (!runnerModalBody) return;
  if (discordStreamInterval) {
    clearInterval(discordStreamInterval);
    discordStreamInterval = null;
  }
  discordQuestProgress = 9;

  runnerModalBody.innerHTML = `
    <div class="runner-frame-wrapper frame-${activeDevice}" id="runner-frame-wrapper">
      <div class="discord-simulator-container">
        <div class="discord-sim-client">
          <div class="discord-server-header">
            <div class="discord-server-icon">D</div>
            <div>
              <div style="font-weight:600;font-size:0.85rem;color:#fff;">Discord Quests Automation Hub</div>
              <div style="font-size:0.7rem;color:#949ba4;">Bot Online · Python Asyncio Gateway v10</div>
            </div>
          </div>
          <div class="discord-msg-card">
            <div class="discord-msg-author">
              <span style="color:#5865f2;">●</span>
              <span>Quest Completer</span>
              <span class="popover-discord-bot-tag">BOT</span>
              <span style="font-size:0.68rem;color:#949ba4;margin-left:auto;">ducmanh#1337</span>
            </div>
            <div style="font-size:0.78rem;color:#dbdee1;line-height:1.45;margin-bottom:8px;">
              🎮 <strong>Honkai: Star Rail — 15 Min Stream Quest</strong>
            </div>
            <div class="popover-progress-bar">
              <div class="popover-progress-fill" id="discord-sim-prog" style="width: 60%;"></div>
            </div>
            <div id="discord-sim-prog-text" style="font-size:0.7rem;color:#949ba4;display:flex;justify-content:space-between;margin-top:4px;">
              <span>Tiến trình: 9 / 15 phút (60%)</span>
              <span style="color:#3fb950;">● Đang trực tuyến</span>
            </div>
          </div>
          <div class="discord-commands-bar">
            <button type="button" class="discord-cmd-btn" id="dcmd-status">
              <span>/quest status</span>
              <span style="color:#80848e;font-size:0.7rem;">Kiểm tra tiến trình</span>
            </button>
            <button type="button" class="discord-cmd-btn" id="dcmd-start">
              <span>/quest start</span>
              <span style="color:#80848e;font-size:0.7rem;">Nhận & chạy nhiệm vụ</span>
            </button>
            <button type="button" class="discord-cmd-btn" id="dcmd-stream">
              <span>/quest stream</span>
              <span style="color:#80848e;font-size:0.7rem;">Tự động Stream (1s = +1p)</span>
            </button>
            <button type="button" class="discord-cmd-btn" id="dcmd-claim">
              <span>/quest claim</span>
              <span style="color:#80848e;font-size:0.7rem;">Nhận thưởng quà tặng</span>
            </button>
            <button type="button" class="discord-cmd-btn" id="dcmd-clear" style="border-style:dashed;">
              <span>/clear</span>
              <span style="color:#80848e;font-size:0.7rem;">Xoá màn hình log</span>
            </button>
          </div>
        </div>
        <div class="discord-sim-terminal">
          <div class="terminal-titlebar">
            <span>bash - python quest_bot.py --account ducmanh#1337</span>
            <span style="color:#3fb950;">● Connected (Session #9812)</span>
          </div>
          <div class="terminal-log-output" id="discord-terminal-log"></div>
        </div>
      </div>
    </div>
  `;

  const logBox = document.getElementById('discord-terminal-log');
  const progFill = document.getElementById('discord-sim-prog');
  const progText = document.getElementById('discord-sim-prog-text');

  function getTimestamp() {
    const d = new Date();
    return d.toTimeString().split(' ')[0];
  }

  function appendLog(typeClass, prefix, msg) {
    if (!logBox) return;
    const line = document.createElement('div');
    line.style.marginBottom = '3px';
    line.innerHTML = `<span style="color:#6e7681;">[${getTimestamp()}]</span> <span class="${typeClass}">[${prefix}]</span> <span>${msg}</span>`;
    logBox.appendChild(line);
    logBox.scrollTop = logBox.scrollHeight;
  }

  function updateQuestUI() {
    const pct = Math.min(100, Math.round((discordQuestProgress / 15) * 100));
    if (progFill) progFill.style.width = `${pct}%`;
    if (progText) {
      const isDone = discordQuestProgress >= 15;
      progText.innerHTML = `<span>Tiến trình: ${discordQuestProgress} / 15 phút (${pct}%)</span> <span style="color:${isDone ? '#3fb950' : '#58a6ff'};">${isDone ? '✓ Hoàn thành' : '● Đang chạy'}</span>`;
    }
  }

  // Initial terminal boot sequence
  appendLog('log-info', 'INIT', 'Initializing Asyncio background event loop...');
  setTimeout(() => appendLog('log-info', 'AUTH', 'Decrypting AES-256 tokens for account ducmanh#1337... OK'), 150);
  setTimeout(() => appendLog('log-succ', 'GATEWAY', 'Connected to Discord Gateway WebSocket v10 (Ping: 22ms)'), 350);
  setTimeout(() => appendLog('log-quest', 'RPC', 'Found active quest: "Honkai: Star Rail — 15 Min Stream"'), 550);
  setTimeout(() => appendLog('log-info', 'READY', 'Bot daemon ready. Automation active.'), 750);

  // Wire command buttons
  const btnStatus = document.getElementById('dcmd-status');
  const btnStart = document.getElementById('dcmd-start');
  const btnStream = document.getElementById('dcmd-stream');
  const btnClaim = document.getElementById('dcmd-claim');
  const btnClear = document.getElementById('dcmd-clear');

  if (btnStatus) {
    btnStatus.addEventListener('click', () => {
      appendLog('log-quest', 'EXEC', '> /quest status');
      appendLog('log-info', 'QUERY', `Account: ducmanh#1337 | Active Session ID: 9812`);
      appendLog('log-quest', 'QUEST', `Honkai: Star Rail | Progress: ${discordQuestProgress}/15 mins (${Math.round((discordQuestProgress/15)*100)}%)`);
      appendLog('log-succ', 'HEARTBEAT', 'WebSocket alive. Rate limit buffer: 0 violations.');
    });
  }

  if (btnStart) {
    btnStart.addEventListener('click', () => {
      appendLog('log-quest', 'EXEC', '> /quest start');
      appendLog('log-info', 'ENROLL', 'Enrolling in quest ID 122948291...');
      appendLog('log-succ', 'HOOK', 'Simulated game process StarRail.exe (PID: 8412) launched.');
      appendLog('log-quest', 'PRESENCE', 'Rich Presence heartbeat broadcasting: "Streaming to Voice Channel"');
    });
  }

  if (btnStream) {
    btnStream.addEventListener('click', () => {
      if (discordStreamInterval) {
        clearInterval(discordStreamInterval);
        discordStreamInterval = null;
        appendLog('log-warn', 'PAUSE', 'Paused stream packet simulation.');
        return;
      }
      if (discordQuestProgress >= 15) {
        appendLog('log-succ', 'COMPLETE', 'Quest is already 15/15 minutes completed! Click /quest claim to redeem.');
        return;
      }
      appendLog('log-quest', 'EXEC', '> /quest stream');
      appendLog('log-info', 'STREAM', 'Beginning automated stream progression (1s = +1 minute)...');
      discordStreamInterval = setInterval(() => {
        if (discordQuestProgress < 15) {
          discordQuestProgress++;
          updateQuestUI();
          appendLog('log-info', 'TICK', `Progress packet accepted (+1 min) -> ${discordQuestProgress}/15 mins`);
          if (discordQuestProgress >= 15) {
            clearInterval(discordStreamInterval);
            discordStreamInterval = null;
            appendLog('log-succ', 'COMPLETE', '🎉 Quest reached 15/15 minutes! Ready for /quest claim.');
          }
        } else {
          clearInterval(discordStreamInterval);
          discordStreamInterval = null;
        }
      }, 1200);
    });
  }

  if (btnClaim) {
    btnClaim.addEventListener('click', () => {
      appendLog('log-quest', 'EXEC', '> /quest claim');
      if (discordQuestProgress >= 15) {
        appendLog('log-succ', 'CLAIMED', '🎁 Code redeemed: DISCORD-QUEST-2026-STARRAIL-X99');
        appendLog('log-quest', 'WEBHOOK', 'Confirmation webhook alert dispatched to your private channel!');
      } else {
        appendLog('log-warn', 'WAIT', `⚠️ Quest progress is ${discordQuestProgress}/15 mins. Please stream until 15 mins.`);
      }
    });
  }

  if (btnClear) {
    btnClear.addEventListener('click', () => {
      if (logBox) logBox.innerHTML = '';
      appendLog('log-info', 'CLEARED', 'Terminal log cleared.');
    });
  }

  // Auto-start streaming progression if autoRun is enabled
  if (options.autoRun !== false) {
    setTimeout(() => {
      if (activeRunnerProjectId === project.id && !discordStreamInterval && btnStream) {
        btnStream.click();
      }
    }, 900);
  }
}

// ── 3.3. ROBLOX MHNAAUI RUNNER ────────────────────────────────────────────
function renderRobloxRunner(project, options = {}) {
  if (!runnerModalBody) return;
  const lang = (typeof currentLang !== 'undefined') ? currentLang : 'vi';

  runnerModalBody.innerHTML = `
    <div class="runner-frame-wrapper frame-${activeDevice}" id="runner-frame-wrapper">
      <div class="roblox-simulator-container" id="roblox-container">
        <div class="roblox-topbar">
          <div style="display:flex;align-items:center;gap:8px;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
            <strong>Mhnaa Hub v2.4</strong>
            <span style="color:#8c9ba5;">[Blox Fruits / RPG Game Mode]</span>
          </div>
          <div class="roblox-healthbar">
            <span>HP 100/100</span>
            <div class="roblox-hp-fill"></div>
            <span style="color:#3fb950;margin-left:6px;">60 FPS</span>
          </div>
        </div>

        <!-- Draggable In-Game GUI Window -->
        <div class="mhnaui-window" id="mhnaui-window">
          <div class="mhnaui-header" id="mhnaui-header">
            <span>⚔️ Mhnaa Hub — Luau UI</span>
            <span style="font-size:0.68rem;color:#8c9ba5;cursor:grab;">⋮⋮ Kéo thả</span>
          </div>
          <div class="mhnaui-tabs">
            <button type="button" class="mhnaui-tab-btn active" data-tab="farm">Autofarm</button>
            <button type="button" class="mhnaui-tab-btn" data-tab="combat">Combat</button>
            <button type="button" class="mhnaui-tab-btn" data-tab="misc">Player</button>
            <button type="button" class="mhnaui-tab-btn" data-tab="script">Loadstring</button>
          </div>
          <div class="mhnaui-body" id="mhnaui-tab-content">
            <!-- Content injected dynamically -->
          </div>
        </div>

        <!-- Toast Feedback -->
        <div class="runner-toast" id="roblox-toast"></div>
      </div>
    </div>
  `;

  const windowEl = document.getElementById('mhnaui-window');
  const headerEl = document.getElementById('mhnaui-header');
  const containerEl = document.getElementById('roblox-container');
  const tabContent = document.getElementById('mhnaui-tab-content');
  const toastEl = document.getElementById('roblox-toast');

  function showToast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    setTimeout(() => {
      toastEl.classList.remove('show');
    }, 2200);
  }

  function renderTab(tabName) {
    if (!tabContent) return;
    if (tabName === 'farm') {
      tabContent.innerHTML = `
        <div class="mhnaui-row">
          <span>Auto Farm Level (Fast Quest)</span>
          <label class="mhnaui-switch">
            <input type="checkbox" checked />
            <span class="mhnaui-slider"></span>
          </label>
        </div>
        <div class="mhnaui-row">
          <span>Auto Collect Chests & Beli</span>
          <label class="mhnaui-switch">
            <input type="checkbox" checked />
            <span class="mhnaui-slider"></span>
          </label>
        </div>
        <div class="mhnaui-range-row">
          <div style="display:flex;justify-content:space-between;">
            <span>Tốc độ đánh (Attack Delay)</span>
            <span id="delay-num" style="color:var(--accent);">0.15s</span>
          </div>
          <input type="range" min="5" max="50" value="15" class="mhnaui-range-slider" id="delay-slider" />
        </div>
      `;
      const slider = document.getElementById('delay-slider');
      const num = document.getElementById('delay-num');
      if (slider && num) {
        slider.addEventListener('input', () => { num.textContent = `${(slider.value / 100).toFixed(2)}s`; });
      }
    } else if (tabName === 'combat') {
      tabContent.innerHTML = `
        <div class="mhnaui-row">
          <span>Kill Aura (360° Hitbox)</span>
          <label class="mhnaui-switch">
            <input type="checkbox" checked />
            <span class="mhnaui-slider"></span>
          </label>
        </div>
        <div class="mhnaui-row">
          <span>Auto Dodge (Ken Haki v2)</span>
          <label class="mhnaui-switch">
            <input type="checkbox" />
            <span class="mhnaui-slider"></span>
          </label>
        </div>
        <div class="mhnaui-range-row">
          <div style="display:flex;justify-content:space-between;">
            <span>Bán kính Aura (Aura Range)</span>
            <span id="range-num" style="color:var(--accent);">25 mét</span>
          </div>
          <input type="range" min="10" max="60" value="25" class="mhnaui-range-slider" id="range-slider" />
        </div>
      `;
      const slider = document.getElementById('range-slider');
      const num = document.getElementById('range-num');
      if (slider && num) {
        slider.addEventListener('input', () => { num.textContent = `${slider.value} mét`; });
      }
    } else if (tabName === 'misc') {
      tabContent.innerHTML = `
        <div class="mhnaui-row">
          <span>Infinite Jump & Fly</span>
          <label class="mhnaui-switch">
            <input type="checkbox" />
            <span class="mhnaui-slider"></span>
          </label>
        </div>
        <div class="mhnaui-row">
          <span>ESP Tên & Khoảng cách người chơi</span>
          <label class="mhnaui-switch">
            <input type="checkbox" checked />
            <span class="mhnaui-slider"></span>
          </label>
        </div>
        <div class="mhnaui-range-row">
          <div style="display:flex;justify-content:space-between;">
            <span>Tốc độ chạy (WalkSpeed)</span>
            <span id="walk-num" style="color:var(--accent);">36 spd</span>
          </div>
          <input type="range" min="16" max="120" value="36" class="mhnaui-range-slider" id="walk-slider" />
        </div>
      `;
      const slider = document.getElementById('walk-slider');
      const num = document.getElementById('walk-num');
      if (slider && num) {
        slider.addEventListener('input', () => { num.textContent = `${slider.value} spd`; });
      }
    } else if (tabName === 'script') {
      tabContent.innerHTML = `
        <div style="font-size:0.75rem;color:#8c9ba5;line-height:1.45;">
          Copy loadstring chạy ngay trong Roblox Executor (Wave, Solara, Delta, Synapse...):
        </div>
        <pre style="background:#090b0e;border:1px solid #29303a;border-radius:6px;padding:8px;font-family:var(--font-mono);font-size:0.68rem;color:#baa7ff;overflow-x:auto;margin:0;"><code>${ROBLOX_LOADSTRING}</code></pre>
        <button type="button" class="mhnaui-copy-btn" id="mhnaui-copy-btn">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
          <span>Sao chép Loadstring thật</span>
        </button>
      `;
      const copyBtn = document.getElementById('mhnaui-copy-btn');
      if (copyBtn) {
        copyBtn.addEventListener('click', async () => {
          try {
            await navigator.clipboard.writeText(ROBLOX_LOADSTRING);
          } catch {
            const ta = document.createElement('textarea');
            ta.value = ROBLOX_LOADSTRING;
            ta.style.position = 'fixed';
            ta.style.opacity = '0';
            ta.style.pointerEvents = 'none';
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            ta.remove();
          }
          showToast(lang === 'vi' ? '✓ Đã sao chép loadstring vào clipboard!' : '✓ Loadstring copied to clipboard!');
        });
      }
    }
  }

  // Initial tab render
  renderTab('farm');

  // Tab button switching
  const tabButtons = windowEl.querySelectorAll('.mhnaui-tab-btn');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderTab(btn.dataset.tab);
    });
  });

  // Draggable logic for Roblox GUI window
  if (headerEl && windowEl && containerEl) {
    let isDragging = false;
    let dragStartX = 0;
    let dragStartY = 0;
    let initialLeft = 0;
    let initialTop = 0;

    function onDragStart(e) {
      if (e.target.closest('button, input, a')) return;
      isDragging = true;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      dragStartX = clientX;
      dragStartY = clientY;
      initialLeft = windowEl.offsetLeft;
      initialTop = windowEl.offsetTop;

      document.addEventListener('mousemove', onDragMove);
      document.addEventListener('mouseup', onDragEnd);
      document.addEventListener('touchmove', onDragMove, { passive: false });
      document.addEventListener('touchend', onDragEnd);
    }

    function onDragMove(e) {
      if (!isDragging) return;
      if (e.cancelable && e.touches) e.preventDefault();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      const dx = clientX - dragStartX;
      const dy = clientY - dragStartY;

      const maxLeft = Math.max(0, containerEl.offsetWidth - windowEl.offsetWidth - 8);
      const maxTop = Math.max(38, containerEl.offsetHeight - windowEl.offsetHeight - 8);

      const newLeft = Math.max(8, Math.min(maxLeft, initialLeft + dx));
      const newTop = Math.max(38, Math.min(maxTop, initialTop + dy));

      windowEl.style.left = `${newLeft}px`;
      windowEl.style.top = `${newTop}px`;
    }

    function onDragEnd() {
      isDragging = false;
      document.removeEventListener('mousemove', onDragMove);
      document.removeEventListener('mouseup', onDragEnd);
      document.removeEventListener('touchmove', onDragMove);
      document.removeEventListener('touchend', onDragEnd);
    }
    robloxDragCleanup = onDragEnd;

    headerEl.addEventListener('mousedown', onDragStart);
    headerEl.addEventListener('touchstart', onDragStart, { passive: true });
  }

  // Auto-feedback toast if autoRun is enabled
  if (options.autoRun !== false) {
    setTimeout(() => {
      if (activeRunnerProjectId === project.id) {
        showToast(lang === 'vi' ? '⚡ MhnaaUI v2.4 đã sẵn sàng • Kéo thả & điều khiển trực tiếp' : '⚡ MhnaaUI v2.4 active • Drag & toggle live controls');
      }
    }, 350);
  }
}

// ── 3.4. C/C++ ALGORITHMS PLAYGROUND RUNNER ────────────────────────────────
function renderCppRunner(project, options = {}) {
  if (!runnerModalBody) return;
  if (cppSortInterval) {
    clearInterval(cppSortInterval);
    cppSortInterval = null;
  }
  cppIsRunning = false;
  cppGenerator = null;
  cppComparisons = 0;
  cppSwaps = 0;
  cppElapsed = 0;

  runnerModalBody.innerHTML = `
    <div class="runner-frame-wrapper frame-${activeDevice}" id="runner-frame-wrapper">
      <div class="cpp-simulator-container">
        <div class="cpp-toolbar">
          <div style="display:flex;align-items:center;gap:10px;">
            <label for="cpp-algo-select" style="font-size:0.75rem;font-family:var(--font-mono);color:var(--fg3);">Thuật toán:</label>
            <select class="cpp-algo-select" id="cpp-algo-select">
              <option value="quicksort">QuickSort (Phân đoạn Lomuto - O(N log N))</option>
              <option value="bubblesort">BubbleSort (Sắp xếp nổi bọt - O(N²))</option>
              <option value="insertionsort">InsertionSort (Sắp xếp chèn - O(N²))</option>
              <option value="binarysearch">Binary Search (Tìm kiếm nhị phân - O(log N))</option>
            </select>
          </div>
          <div class="cpp-controls">
            <button type="button" class="cpp-ctrl-btn btn-run" id="cpp-btn-run">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              <span id="cpp-run-label">Chạy tự động</span>
            </button>
            <button type="button" class="cpp-ctrl-btn" id="cpp-btn-step">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
              <span>Chạy từng bước</span>
            </button>
            <button type="button" class="cpp-ctrl-btn" id="cpp-btn-random">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
              <span>Đổi mảng ngẫu nhiên</span>
            </button>
            <button type="button" class="cpp-ctrl-btn" id="cpp-btn-reset">
              <span>Khôi phục</span>
            </button>
          </div>
        </div>

        <div class="cpp-visualizer-canvas" id="cpp-canvas"></div>

        <div class="cpp-metrics-grid">
          <div class="cpp-metric-box">
            <div class="cpp-metric-label">Số lần so sánh (Comparisons)</div>
            <div class="cpp-metric-val" id="cpp-metric-cmp">0</div>
          </div>
          <div class="cpp-metric-box">
            <div class="cpp-metric-label">Số lần hoán đổi / Bước (Swaps)</div>
            <div class="cpp-metric-val" id="cpp-metric-swaps">0</div>
          </div>
          <div class="cpp-metric-box">
            <div class="cpp-metric-label">Thời gian thực thi</div>
            <div class="cpp-metric-val" id="cpp-metric-time">0.0 ms</div>
          </div>
          <div class="cpp-metric-box">
            <div class="cpp-metric-label">Trạng thái thuật toán</div>
            <div class="cpp-metric-val" id="cpp-metric-status" style="color:var(--accent);">Sẵn sàng</div>
          </div>
        </div>
      </div>
    </div>
  `;

  const canvas = document.getElementById('cpp-canvas');
  const algoSelect = document.getElementById('cpp-algo-select');
  const btnRun = document.getElementById('cpp-btn-run');
  const btnStep = document.getElementById('cpp-btn-step');
  const btnRandom = document.getElementById('cpp-btn-random');
  const btnReset = document.getElementById('cpp-btn-reset');
  const runLabel = document.getElementById('cpp-run-label');
  const cmpVal = document.getElementById('cpp-metric-cmp');
  const swapsVal = document.getElementById('cpp-metric-swaps');
  const timeVal = document.getElementById('cpp-metric-time');
  const statusVal = document.getElementById('cpp-metric-status');

  let initialSnapshot = [];

  function generateArray(isSorted = false) {
    if (isSorted) {
      cppArray = [14, 22, 35, 48, 56, 68, 79, 88, 94, 105];
    } else {
      cppArray = [42, 18, 76, 31, 88, 54, 95, 23, 67, 39];
    }
    initialSnapshot = [...cppArray];
  }

  function renderBars() {
    if (!canvas) return;
    canvas.innerHTML = '';
    const maxVal = Math.max(...cppArray, 100);
    cppArray.forEach((val, idx) => {
      const col = document.createElement('div');
      col.className = 'cpp-array-col';
      col.id = `cpp-col-${idx}`;

      const barHeight = Math.max(24, Math.round((val / maxVal) * 160));
      col.innerHTML = `
        <div class="cpp-array-val">${val}</div>
        <div class="cpp-array-bar" style="height:${barHeight}px;"></div>
        <div class="cpp-array-idx">[${idx}]</div>
      `;
      canvas.appendChild(col);
    });
  }

  function clearHighlightClasses() {
    if (!canvas) return;
    canvas.querySelectorAll('.cpp-array-col').forEach(col => {
      col.classList.remove('comparing', 'swapping');
    });
  }

  function markAllSorted() {
    if (!canvas) return;
    canvas.querySelectorAll('.cpp-array-col').forEach(col => {
      col.classList.remove('comparing', 'swapping');
      col.classList.add('sorted');
    });
  }

  // ── Generators for Step-by-Step execution ──
  function* quickSortGen(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
      const pivot = arr[high];
      let i = low - 1;
      for (let j = low; j < high; j++) {
        yield { type: 'compare', indices: [j, high] };
        if (arr[j] < pivot) {
          i++;
          if (i !== j) {
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            yield { type: 'swap', indices: [i, j], arr: [...arr] };
          }
        }
      }
      const temp = arr[i + 1];
      arr[i + 1] = arr[high];
      arr[high] = temp;
      yield { type: 'swap', indices: [i + 1, high], arr: [...arr] };
      yield { type: 'sorted', indices: [i + 1] };
      const pi = i + 1;
      yield* quickSortGen(arr, low, pi - 1);
      yield* quickSortGen(arr, pi + 1, high);
    } else if (low >= 0 && low < arr.length) {
      yield { type: 'sorted', indices: [low] };
    }
  }

  function* bubbleSortGen(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      let swapped = false;
      for (let j = 0; j < n - i - 1; j++) {
        yield { type: 'compare', indices: [j, j + 1] };
        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          swapped = true;
          yield { type: 'swap', indices: [j, j + 1], arr: [...arr] };
        }
      }
      yield { type: 'sorted', indices: [n - i - 1] };
      if (!swapped) break;
    }
    yield { type: 'sorted', indices: [0] };
  }

  function* insertionSortGen(arr) {
    const n = arr.length;
    yield { type: 'sorted', indices: [0] };
    for (let i = 1; i < n; i++) {
      let j = i;
      while (j > 0) {
        yield { type: 'compare', indices: [j - 1, j] };
        if (arr[j - 1] > arr[j]) {
          const temp = arr[j - 1];
          arr[j - 1] = arr[j];
          arr[j] = temp;
          yield { type: 'swap', indices: [j - 1, j], arr: [...arr] };
          j--;
        } else {
          break;
        }
      }
      yield { type: 'sorted', indices: [j] };
    }
  }

  function* binarySearchGen(arr, target) {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      yield { type: 'search', indices: [mid], low, high, mid };
      if (arr[mid] === target) {
        yield { type: 'found', indices: [mid] };
        return mid;
      }
      if (arr[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    yield { type: 'notfound' };
    return -1;
  }

  function initAlgorithm(regenerate = true) {
    clearHighlightClasses();
    if (cppSortInterval) {
      clearInterval(cppSortInterval);
      cppSortInterval = null;
    }
    cppIsRunning = false;
    if (runLabel) runLabel.textContent = (typeof currentLang !== 'undefined' && currentLang === 'en') ? 'Auto Run' : 'Chạy tự động';

    const algo = algoSelect ? algoSelect.value : 'quicksort';
    if (regenerate) {
      generateArray(algo === 'binarysearch');
    }
    renderBars();

    cppComparisons = 0;
    cppSwaps = 0;
    cppElapsed = 0;
    if (cmpVal) cmpVal.textContent = '0';
    if (swapsVal) swapsVal.textContent = '0';
    if (timeVal) timeVal.textContent = '0.0 ms';
    if (statusVal) statusVal.textContent = (typeof currentLang !== 'undefined' && currentLang === 'en') ? 'Ready' : 'Sẵn sàng';

    if (algo === 'quicksort') {
      cppGenerator = quickSortGen(cppArray);
    } else if (algo === 'bubblesort') {
      cppGenerator = bubbleSortGen(cppArray);
    } else if (algo === 'insertionsort') {
      cppGenerator = insertionSortGen(cppArray);
    } else if (algo === 'binarysearch') {
      // Pick middle element or near middle for demonstration
      const target = cppArray[5];
      if (statusVal) statusVal.textContent = (typeof currentLang !== 'undefined' && currentLang === 'en') ? `Searching for value ${target}...` : `Tìm giá trị ${target}...`;
      cppGenerator = binarySearchGen(cppArray, target);
    }
  }

  function stepAlgorithm() {
    if (!cppGenerator) return false;
    const t0 = performance.now();
    const result = cppGenerator.next();
    const t1 = performance.now();
    cppElapsed += (t1 - t0) * 1.5 + 0.1;
    if (timeVal) timeVal.textContent = `${cppElapsed.toFixed(1)} ms`;

    clearHighlightClasses();

    if (result.done) {
      markAllSorted();
      if (statusVal) statusVal.textContent = (typeof currentLang !== 'undefined' && currentLang === 'en') ? 'Completed ✓' : 'Hoàn thành ✓';
      if (cppSortInterval) {
        clearInterval(cppSortInterval);
        cppSortInterval = null;
      }
      cppIsRunning = false;
      if (runLabel) runLabel.textContent = (typeof currentLang !== 'undefined' && currentLang === 'en') ? 'Auto Run' : 'Chạy tự động';
      return false;
    }

    const step = result.value;
    if (step.type === 'compare') {
      cppComparisons++;
      if (cmpVal) cmpVal.textContent = String(cppComparisons);
      step.indices.forEach(idx => {
        const col = document.getElementById(`cpp-col-${idx}`);
        if (col) col.classList.add('comparing');
      });
      if (statusVal) statusVal.textContent = `So sánh [${step.indices[0]}] với [${step.indices[1]}]`;
    } else if (step.type === 'swap') {
      cppSwaps++;
      if (swapsVal) swapsVal.textContent = String(cppSwaps);
      step.indices.forEach(idx => {
        const col = document.getElementById(`cpp-col-${idx}`);
        if (col) col.classList.add('swapping');
      });
      renderBars();
      // Re-apply swapping highlight after re-rendering bars
      step.indices.forEach(idx => {
        const col = document.getElementById(`cpp-col-${idx}`);
        if (col) col.classList.add('swapping');
      });
      if (statusVal) statusVal.textContent = `Hoán đổi giá trị [${step.indices[0]}] ↔ [${step.indices[1]}]`;
    } else if (step.type === 'sorted') {
      step.indices.forEach(idx => {
        const col = document.getElementById(`cpp-col-${idx}`);
        if (col) col.classList.add('sorted');
      });
    } else if (step.type === 'search') {
      cppComparisons++;
      if (cmpVal) cmpVal.textContent = String(cppComparisons);
      const col = document.getElementById(`cpp-col-${step.indices[0]}`);
      if (col) col.classList.add('comparing');
      if (statusVal) statusVal.textContent = `Kiểm tra vị trí mid = ${step.indices[0]}`;
    } else if (step.type === 'found') {
      const col = document.getElementById(`cpp-col-${step.indices[0]}`);
      if (col) {
        col.classList.remove('comparing');
        col.classList.add('sorted');
      }
      if (statusVal) statusVal.textContent = `Đã tìm thấy tại chỉ mục [${step.indices[0]}] ✓`;
    }
    return true;
  }

  // Wire controls
  if (btnRun) {
    btnRun.addEventListener('click', () => {
      if (cppIsRunning) {
        clearInterval(cppSortInterval);
        cppSortInterval = null;
        cppIsRunning = false;
        if (runLabel) runLabel.textContent = (typeof currentLang !== 'undefined' && currentLang === 'en') ? 'Continue' : 'Tiếp tục';
        if (statusVal) statusVal.textContent = (typeof currentLang !== 'undefined' && currentLang === 'en') ? 'Paused' : 'Tạm dừng';
      } else {
        cppIsRunning = true;
        if (runLabel) runLabel.textContent = (typeof currentLang !== 'undefined' && currentLang === 'en') ? 'Pause' : 'Tạm dừng';
        if (statusVal) statusVal.textContent = (typeof currentLang !== 'undefined' && currentLang === 'en') ? 'Running automatically...' : 'Đang chạy tự động...';
        cppSortInterval = setInterval(() => {
          const hasMore = stepAlgorithm();
          if (!hasMore) {
            clearInterval(cppSortInterval);
            cppSortInterval = null;
          }
        }, 180);
      }
    });
  }

  if (btnStep) {
    btnStep.addEventListener('click', () => {
      if (cppIsRunning) {
        clearInterval(cppSortInterval);
        cppSortInterval = null;
        cppIsRunning = false;
        if (runLabel) runLabel.textContent = (typeof currentLang !== 'undefined' && currentLang === 'en') ? 'Auto Run' : 'Chạy tự động';
      }
      stepAlgorithm();
    });
  }

  if (btnRandom) {
    btnRandom.addEventListener('click', () => {
      const algo = algoSelect ? algoSelect.value : 'quicksort';
      if (algo === 'binarysearch') {
        // Generate new random sorted numbers
        let start = Math.floor(Math.random() * 10) + 10;
        cppArray = Array.from({ length: 10 }, () => {
          start += Math.floor(Math.random() * 12) + 4;
          return start;
        });
      } else {
        const set = new Set();
        while (set.size < 10) {
          set.add(Math.floor(Math.random() * 85) + 15);
        }
        cppArray = Array.from(set);
      }
      initialSnapshot = [...cppArray];
      initAlgorithm(false);
    });
  }

  if (btnReset) {
    btnReset.addEventListener('click', () => {
      cppArray = [...initialSnapshot];
      initAlgorithm(false);
    });
  }

  if (algoSelect) {
    algoSelect.addEventListener('change', () => {
      initAlgorithm(true);
    });
  }

  // Initial algorithm setup
  initAlgorithm(true);

  // Auto-start algorithm sorting if autoRun is enabled
  if (options.autoRun !== false) {
    setTimeout(() => {
      if (activeRunnerProjectId === project.id && !cppIsRunning && btnRun) {
        btnRun.click();
      }
    }, 350);
  }
}

// ── 4. WIRE GLOBAL CONTROLS & DEMO BUTTONS ────────────────────────────────
// Wire all .project-demo-btn (direct click on cards)
document.querySelectorAll('.project-demo-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    cancelOpenRunner();
    cancelRunnerClose();
    hidePopoverImmediately();
    const target = btn.dataset.projectTarget || btn.closest('.project-card')?.dataset.projectId;
    if (target) openProjectRunner(target, { autoRun: true, triggeredByHover: false });
  });
});

// Device Switcher buttons inside runner modal
if (runnerDeviceSwitcher) {
  runnerDeviceSwitcher.querySelectorAll('.runner-device-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setRunnerDevice(btn.dataset.device);
    });
  });
}

// Reload button
if (runnerReloadBtn) {
  runnerReloadBtn.addEventListener('click', () => {
    reloadCurrentRunner();
  });
}

// Close buttons
if (runnerCloseBtn) {
  runnerCloseBtn.addEventListener('click', () => {
    closeProjectRunner();
  });
}
if (runnerDotClose) {
  runnerDotClose.addEventListener('click', () => {
    closeProjectRunner();
  });
}

// Modal event listeners (hover interaction, backdrop, outside click)
if (runnerModal) {
  runnerModal.addEventListener('mouseenter', () => {
    cancelRunnerClose();
  });

  runnerModal.addEventListener('mousemove', () => {
    cancelRunnerClose();
  }, { passive: true });

  runnerModal.addEventListener('mouseleave', (e) => {
    if (!isHoverTriggered) return;
    if (runnerModal.open || runnerModal.hasAttribute('open')) {
      const rect = runnerModal.getBoundingClientRect();
      if (e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom) {
        return;
      }
    }
    scheduleCloseRunner();
  });

  // Backdrop click on modal
  runnerModal.addEventListener('click', (e) => {
    if (e.target === runnerModal) {
      closeProjectRunner();
    }
  });

  runnerModal.addEventListener('close', () => {
    cleanupRunner();
  });
}

// Window scroll closes hover runner so user can read page
window.addEventListener('scroll', () => {
  if (runnerModal && (runnerModal.open || runnerModal.hasAttribute('open')) && isHoverTriggered) {
    closeProjectRunner();
  }
}, { passive: true });

// Escape key support
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && runnerModal && (runnerModal.open || runnerModal.hasAttribute('open'))) {
    closeProjectRunner();
  }
});

// ── 5. INITIALIZE LANGUAGE & ALL PORTFOLIO COMPONENTS ─────────────────────
applyLang(currentLang);

// Expose public API on window for testing & debugging
if (typeof window !== 'undefined') {
  window.PROJECTS_DATA = PROJECTS_DATA;
  window.openProjectRunner = openProjectRunner;
  window.closeProjectRunner = closeProjectRunner;
  window.scheduleOpenRunner = scheduleOpenRunner;
  window.scheduleCloseRunner = scheduleCloseRunner;
  window.renderPopoverContent = renderPopoverContent;
  window.renderWebRunner = renderWebRunner;
  window.renderDiscordRunner = renderDiscordRunner;
  window.renderRobloxRunner = renderRobloxRunner;
  window.renderCppRunner = renderCppRunner;
  window.applyLang = applyLang;
}




