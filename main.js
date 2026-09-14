/* ===== main.js ===== */

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
    const current = html.getAttribute('data-theme') || 'light';
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
// phrases are defined after PHRASES object is created; keep reference lazy
let phraseIdx = 0;
let charIdx   = 0;
let deleting  = false;
const tw      = document.getElementById('typewriter');

function getCurrentPhrases() {
  try {
    if (typeof PHRASES !== 'undefined' && typeof currentLang !== 'undefined' && PHRASES[currentLang]) {
      return PHRASES[currentLang];
    }
  } catch (e) {}
  return ["Hi, I'm Duc Manh.", "I'm learning to code.", "I love building things.", "Aspiring Developer."];
}

function typeWriter() {
  const phrase = getCurrentPhrases()[phraseIdx];
  if (!deleting) {
    tw.textContent = phrase.slice(0, ++charIdx);
    if (charIdx === phrase.length) {
      deleting = true;
      setTimeout(typeWriter, 1800);
      return;
    }
    setTimeout(typeWriter, 80);
  } else {
    tw.textContent = phrase.slice(0, --charIdx);
    if (charIdx === 0) {
      deleting = false;
      phraseIdx = (phraseIdx + 1) % getCurrentPhrases().length;
      setTimeout(typeWriter, 400);
      return;
    }
    setTimeout(typeWriter, 40);
  }
}
typeWriter();

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

// ── GITHUB MODULE ──────────────────────────────────────────────────
const GITHUB_USER = 'Mhna3112';

const LANG_COLORS = {
  'HTML': '#e34c26',
  'CSS': '#563d7c',
  'JavaScript': '#f1e05a',
  'TypeScript': '#3178c6',
  'Python': '#3572A5',
  'C++': '#f34b7d',
  'C': '#555555',
  'Lua': '#000080',
  'Luau': '#00A2FF',
  'Shell': '#89e051'
};

const DEFAULT_GH_USER = {
  login: 'Mhna3112',
  name: 'Nguyễn Đức Mạnh',
  avatar_url: 'https://avatars.githubusercontent.com/u/231286930?v=4',
  bio: 'try get best',
  public_repos: 6,
  followers: 0,
  following: 0,
  html_url: 'https://github.com/Mhna3112'
};

const REPO_DESCRIPTIONS = {
  'myweb': {
    en: 'Personal developer portfolio & blog with modern UI, dark/light mode, and Cloudflare Workers.',
    vi: 'Website portfolio và blog lập trình viên cá nhân hiện đại, hỗ trợ giao diện sáng/tối và Cloudflare Workers.'
  },
  'discord-bot-auto-quest': {
    en: 'Automated Discord quest bot & automation assistant built with Python.',
    vi: 'Bot Discord tự động hoàn thành nhiệm vụ và hỗ trợ tự động hóa viết bằng Python.'
  },
  'Mhnauxui': {
    en: 'Roblox Luau UI/UX components, client-side interactions, and custom script interfaces.',
    vi: 'Thành phần giao diện người dùng Roblox Luau, tương tác phía client và script tùy chỉnh.'
  },
  'Mhnaproject1': {
    en: 'TypeScript project exploring types, interfaces, and modern development tooling.',
    vi: 'Dự án TypeScript khám phá hệ thống kiểu, interface và công cụ phát triển hiện đại.'
  },
  'Learn-C-C-': {
    en: 'C & C++ practice exercises, data structures, and algorithms for system programming.',
    vi: 'Tuyển tập bài tập thực hành C & C++, cấu trúc dữ liệu và giải thuật lập trình hệ thống.'
  },
  'Mhna3112': {
    en: 'Personal GitHub profile README and configuration repository.',
    vi: 'Kho lưu trữ cấu hình hồ sơ và README giới thiệu cá nhân trên GitHub.'
  }
};

const DEFAULT_GH_REPOS = [
  {
    name: 'myweb',
    description: null,
    html_url: 'https://github.com/Mhna3112/myweb',
    language: 'JavaScript',
    stargazers_count: 0,
    forks_count: 0,
    fork: false,
    updated_at: '2026-09-14T06:08:04Z',
    pushed_at: '2026-09-14T06:08:00Z'
  },
  {
    name: 'discord-bot-auto-quest',
    description: null,
    html_url: 'https://github.com/Mhna3112/discord-bot-auto-quest',
    language: 'Python',
    stargazers_count: 4,
    forks_count: 1,
    fork: false,
    updated_at: '2026-08-29T20:45:43Z',
    pushed_at: '2026-06-05T05:59:54Z'
  },
  {
    name: 'Mhnauxui',
    description: null,
    html_url: 'https://github.com/Mhna3112/Mhnauxui',
    language: 'Luau',
    stargazers_count: 0,
    forks_count: 0,
    fork: false,
    updated_at: '2026-09-11T18:50:15Z',
    pushed_at: '2026-09-11T18:50:10Z'
  },
  {
    name: 'Mhnaproject1',
    description: null,
    html_url: 'https://github.com/Mhna3112/Mhnaproject1',
    language: 'TypeScript',
    stargazers_count: 0,
    forks_count: 0,
    fork: false,
    updated_at: '2026-09-05T10:31:02Z',
    pushed_at: '2026-09-05T10:28:04Z'
  },
  {
    name: 'Learn-C-C-',
    description: null,
    html_url: 'https://github.com/Mhna3112/Learn-C-C-',
    language: 'C++',
    stargazers_count: 0,
    forks_count: 0,
    fork: false,
    updated_at: '2026-05-07T04:28:55Z',
    pushed_at: '2026-05-07T04:28:52Z'
  },
  {
    name: 'Mhna3112',
    description: null,
    html_url: 'https://github.com/Mhna3112/Mhna3112',
    language: 'HTML',
    stargazers_count: 0,
    forks_count: 0,
    fork: false,
    updated_at: '2026-06-05T15:38:57Z',
    pushed_at: '2026-06-05T15:38:52Z'
  }
];

let ghUserData = DEFAULT_GH_USER;
let ghReposData = DEFAULT_GH_REPOS;
let currentGhFilter = 'featured';

function getRepoDescription(r) {
  if (REPO_DESCRIPTIONS[r.name]) {
    return (currentLang === 'vi')
      ? REPO_DESCRIPTIONS[r.name].vi
      : REPO_DESCRIPTIONS[r.name].en;
  }
  return r.description || (typeof t === 'function' ? t('github.noDesc') : 'Personal developer project repository.');
}

function renderGitHubProfile() {
  if (!ghUserData) return;
  const nameEl = document.getElementById('github-name');
  if (nameEl) nameEl.textContent = ghUserData.name || 'Nguyễn Đức Mạnh';

  const bioEl = document.getElementById('github-bio');
  if (bioEl) {
    const defaultTag = (currentLang === 'vi')
      ? 'Lập trình viên tương lai · Học code mỗi ngày'
      : 'Aspiring Developer · Learning to code every day';
    bioEl.textContent = ghUserData.bio
      ? `${ghUserData.bio} · ${defaultTag}`
      : defaultTag;
  }

  const avatarWrap = document.getElementById('github-avatar-wrap');
  if (avatarWrap && ghUserData.avatar_url) {
    avatarWrap.innerHTML = `
      <img src="${ghUserData.avatar_url}" alt="${ghUserData.login} avatar" class="github-avatar-img" onerror="this.style.display='none'" />
      <div class="github-avatar-fallback">DM</div>
    `;
  }
}

function renderGitHubStats() {
  const totalStars = ghReposData.reduce((acc, r) => acc + (r.stargazers_count || 0), 0);
  const totalForks = ghReposData.reduce((acc, r) => acc + (r.forks_count || 0), 0);
  const reposCount = (ghUserData && ghUserData.public_repos !== undefined) ? ghUserData.public_repos : ghReposData.length;

  setText('gh-repos', reposCount);
  setText('gh-meta-repos', reposCount);
  setText('gh-stars', totalStars);
  setText('gh-forks', totalForks);
  setText('gh-followers', (ghUserData && ghUserData.followers) ?? 0);

  // Hero section stats
  setText('stat-repos', reposCount);
  setText('stat-stars', totalStars);
  setText('stat-forks', totalForks);
}

function renderGitHubLanguages() {
  const bar = document.getElementById('gh-lang-bar');
  const legend = document.getElementById('gh-lang-legend');
  if (!bar || !legend) return;

  const counts = {};
  let total = 0;
  ghReposData.forEach(r => {
    if (r.language) {
      counts[r.language] = (counts[r.language] || 0) + 1;
      total++;
    }
  });

  if (total === 0) {
    counts['JavaScript'] = 1;
    counts['Python'] = 1;
    counts['Luau'] = 1;
    counts['TypeScript'] = 1;
    counts['C++'] = 1;
    counts['HTML'] = 1;
    total = 6;
  }

  const sortedLangs = Object.entries(counts).sort((a, b) => b[1] - a[1]);

  bar.innerHTML = sortedLangs.map(([lang, count]) => {
    const pct = ((count / total) * 100).toFixed(1);
    const color = LANG_COLORS[lang] || '#8b949e';
    return `<div class="gh-lang-bar-segment" style="width:${pct}%;background-color:${color};" title="${lang}: ${pct}% (${count})"></div>`;
  }).join('');

  legend.innerHTML = sortedLangs.map(([lang, count]) => {
    const pct = ((count / total) * 100).toFixed(1);
    const color = LANG_COLORS[lang] || '#8b949e';
    return `
      <div class="gh-legend-item">
        <span class="gh-lang-dot" style="background-color:${color};"></span>
        <span class="gh-legend-name">${lang}</span>
        <span class="gh-legend-pct">${pct}%</span>
      </div>
    `;
  }).join('');
}

function renderGitHubRepos(filter = 'featured') {
  currentGhFilter = filter;
  const grid = document.getElementById('repos-grid');
  if (!grid) return;

  let list = [...ghReposData];

  if (filter === 'featured') {
    const priority = ['myweb', 'discord-bot-auto-quest', 'Mhnauxui', 'Mhnaproject1', 'Learn-C-C-', 'Mhna3112'];
    list = list.filter(r => priority.includes(r.name) || (r.stargazers_count > 0));
    list.sort((a, b) => {
      const idxA = priority.indexOf(a.name);
      const idxB = priority.indexOf(b.name);
      if (idxA !== -1 && idxB !== -1) return idxA - idxB;
      if (idxA !== -1) return -1;
      if (idxB !== -1) return 1;
      return (b.stargazers_count || 0) - (a.stargazers_count || 0);
    });
    list = list.slice(0, 6);
  } else if (filter === 'recent') {
    list.sort((a, b) => new Date(b.pushed_at || b.updated_at || 0) - new Date(a.pushed_at || a.updated_at || 0));
    list = list.slice(0, 6);
  } else {
    list.sort((a, b) => (b.stargazers_count || 0) - (a.stargazers_count || 0));
  }

  if (list.length === 0) {
    const noReposText = (typeof t === 'function') ? t('github.noRepos') : 'No public repositories found.';
    grid.innerHTML = `<p style="color:var(--fg3);font-size:0.875rem;grid-column:1/-1;">${noReposText}</p>`;
    return;
  }

  const viewRepoText = (typeof t === 'function') ? t('github.viewRepo') : 'View Code';

  grid.innerHTML = list.map(r => {
    const color = LANG_COLORS[r.language] || '#8b949e';
    const desc = getRepoDescription(r);
    const starCount = r.stargazers_count || 0;
    const forkCount = r.forks_count || 0;

    return `
      <div class="repo-card">
        <div class="repo-card-top">
          <div class="repo-name-group">
            <svg class="repo-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <a href="${r.html_url}" target="_blank" rel="noopener" class="repo-name">${r.name}</a>
          </div>
          <a href="${r.html_url}" target="_blank" rel="noopener" class="repo-external-link" title="${viewRepoText}">↗</a>
        </div>
        <p class="repo-desc">${desc}</p>
        <div class="repo-footer">
          <div class="repo-meta">
            ${r.language ? `
              <span class="repo-lang">
                <span class="repo-lang-dot" style="background-color:${color};"></span>
                <span>${r.language}</span>
              </span>
            ` : ''}
            <span class="repo-stat" title="Stars">⭐ ${starCount}</span>
            ${forkCount > 0 ? `<span class="repo-stat" title="Forks">🍴 ${forkCount}</span>` : ''}
          </div>
          <a href="${r.html_url}" target="_blank" rel="noopener" class="repo-view-btn">${viewRepoText} →</a>
        </div>
      </div>
    `;
  }).join('');
}

function initGitHubFilters() {
  document.querySelectorAll('.gh-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.gh-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderGitHubRepos(btn.dataset.filter);
    });
  });
}

async function loadGitHub(forceRefresh = false) {
  const syncBtn = document.getElementById('gh-sync-btn');
  const syncIcon = syncBtn ? syncBtn.querySelector('.gh-sync-icon') : null;
  const syncText = syncBtn ? syncBtn.querySelector('.gh-sync-text') : null;

  if (forceRefresh && syncBtn) {
    syncBtn.disabled = true;
    if (syncIcon) syncIcon.classList.add('spinning');
    if (syncText) syncText.textContent = (typeof t === 'function') ? t('github.syncing') : 'Syncing...';
  }

  // 1. Stale: Load and render from localStorage cache or fallback immediately
  if (!forceRefresh) {
    const cacheData = localStorage.getItem('gh_cache_data');
    if (cacheData) {
      try {
        const parsed = JSON.parse(cacheData);
        if (parsed.user && Array.isArray(parsed.repos) && parsed.repos.length > 0) {
          ghUserData = parsed.user;
          ghReposData = parsed.repos;
        }
      } catch (e) {
        console.warn('Cache parse error:', e);
      }
    }
    renderGitHubProfile();
    renderGitHubStats();
    renderGitHubLanguages();
    renderGitHubRepos(currentGhFilter);
  }

  // 2. Revalidate: Fetch fresh real-time data from GitHub API
  try {
    const ts = Date.now();
    const headers = { 'Accept': 'application/vnd.github.v3+json' };
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USER}?_t=${ts}`, { cache: 'no-cache', headers }),
      fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated&_t=${ts}`, { cache: 'no-cache', headers }),
    ]);

    if (!userRes.ok || !reposRes.ok) {
      throw new Error(`GitHub API HTTP ${userRes.status}/${reposRes.status}`);
    }

    const user  = await userRes.json();
    const repos = await reposRes.json();

    if (user && Array.isArray(repos) && repos.length > 0) {
      ghUserData = user;
      ghReposData = repos;

      try {
        localStorage.setItem('gh_cache_data', JSON.stringify({ user, repos }));
        localStorage.setItem('gh_cache_time', Date.now().toString());
      } catch (e) {}

      renderGitHubProfile();
      renderGitHubStats();
      renderGitHubLanguages();
      renderGitHubRepos(currentGhFilter);

      if (forceRefresh && syncBtn) {
        syncBtn.classList.add('synced');
        if (syncText) syncText.textContent = (typeof t === 'function') ? t('github.synced') : 'Updated!';
        setTimeout(() => {
          syncBtn.classList.remove('synced');
          if (syncText) syncText.textContent = (typeof t === 'function') ? t('github.sync') : 'Sync';
        }, 2000);
      }
    }
  } catch (err) {
    console.warn('GitHub API sync notice:', err.message);
    renderGitHubProfile();
    renderGitHubStats();
    renderGitHubLanguages();
    renderGitHubRepos(currentGhFilter);

    if (forceRefresh && syncBtn) {
      if (syncText) syncText.textContent = (typeof t === 'function') ? t('github.synced') : 'Updated!';
      setTimeout(() => {
        if (syncText) syncText.textContent = (typeof t === 'function') ? t('github.sync') : 'Sync';
      }, 2000);
    }
  } finally {
    if (syncBtn) {
      syncBtn.disabled = false;
      if (syncIcon) syncIcon.classList.remove('spinning');
    }
  }
}

function setText(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}

// ── BLOG POSTS DATA ────────────────────────────────────────────────
const POSTS = {
  'js-variables': {
    title: 'Understanding JavaScript Variables: var, let, and const',
    date: 'Sep 10, 2026', read: '5 min read', tags: ['JavaScript', 'Beginner'],
    body: `
      <p>When I first started learning JavaScript, the three ways to declare a variable were confusing: <code>var</code>, <code>let</code>, and <code>const</code>. Let me break down what I learned.</p>
      <h3>var — The Old Way</h3>
      <p><code>var</code> is function-scoped and can be hoisted, which means it can be used before it's declared (though its value will be <code>undefined</code>). Avoid it in modern code.</p>
      <pre><code>var name = "Duc Manh";
console.log(name); // "Duc Manh"</code></pre>
      <h3>let — Block Scoped</h3>
      <p><code>let</code> is block-scoped, so it only exists within the {} block where it's defined. Use it when you need to reassign a variable.</p>
      <pre><code>let count = 0;
count = 1; // OK — reassignment allowed</code></pre>
      <h3>const — Block Scoped & Immutable Reference</h3>
      <p><code>const</code> also block-scoped but cannot be reassigned. Use it by default — it makes your intent clear.</p>
      <pre><code>const PI = 3.14159;
PI = 3; // ❌ TypeError: Assignment to constant variable</code></pre>
      <h3>My Rule of Thumb</h3>
      <p>Always use <strong>const</strong>. If you need to reassign, use <strong>let</strong>. Never use <strong>var</strong> in new code.</p>
    `
  },
  'git-basics': {
    title: 'Git Basics: My First Week Using Version Control',
    date: 'Aug 28, 2026', read: '7 min read', tags: ['Git', 'Workflow'],
    body: `
      <p>Before Git, I used to save files as "project_v1", "project_v2_final", "project_final_FINAL". Sound familiar? Git changed everything.</p>
      <h3>The Commands I Use Daily</h3>
      <pre><code>git init          # Start a new repository
git add .          # Stage all changes
git commit -m "msg" # Save a snapshot
git push           # Upload to GitHub
git pull           # Download latest changes
git status         # See what changed
git log --oneline  # View history</code></pre>
      <h3>The Concept That Clicked</h3>
      <p>Think of commits as save points in a video game. You can always go back to any save point. That mental model made everything click for me.</p>
      <h3>My Biggest Mistake</h3>
      <p>I committed my passwords to a public repo. Lesson learned: always add <code>.env</code> to your <code>.gitignore</code> file before your first commit!</p>
      <h3>Tip</h3>
      <p>Write commit messages in the present tense: "Add login page" not "Added login page". Your future self will thank you.</p>
    `
  },
  'c-pointers': {
    title: 'Pointers in C: Finally Getting It',
    date: 'Aug 15, 2026', read: '10 min read', tags: ['C', 'Memory'],
    body: `
      <p>Pointers are the reason many beginners give up on C. I almost did too. Here's the mental model that finally made them click.</p>
      <h3>What Is a Pointer?</h3>
      <p>A pointer is a variable that stores a <strong>memory address</strong> instead of a value directly. Think of RAM as a giant apartment building — each room (byte) has a number (address). A pointer stores one of those room numbers.</p>
      <pre><code>int x = 42;
int *ptr = &x;   // ptr stores the ADDRESS of x
printf("%d", *ptr); // *ptr gives us the VALUE at that address → 42</code></pre>
      <h3>The Two Operators</h3>
      <pre><code>&x   // "address of x" — gives you the address
*ptr // "dereference ptr" — gives you the value at the address</code></pre>
      <h3>Why Pointers Matter</h3>
      <p>Pointers let us: pass large data efficiently (no copying), modify variables inside functions, work with arrays and strings, and manage dynamic memory with malloc/free.</p>
      <h3>My Advice</h3>
      <p>Draw memory diagrams on paper. Literally draw boxes for variables and arrows for pointers. It made everything visual and understandable for me.</p>
    `
  },
  'python-lists': {
    title: 'Python List Comprehensions: Writing Cleaner Code',
    date: 'Jul 30, 2026', read: '6 min read', tags: ['Python', 'Tips'],
    body: `
      <p>One of my favourite Python features is list comprehensions. They let you create lists in a single, readable line.</p>
      <h3>Before: Traditional Loop</h3>
      <pre><code>squares = []
for n in range(1, 6):
    squares.append(n ** 2)
print(squares)  # [1, 4, 9, 16, 25]</code></pre>
      <h3>After: List Comprehension</h3>
      <pre><code>squares = [n ** 2 for n in range(1, 6)]
print(squares)  # [1, 4, 9, 16, 25]</code></pre>
      <h3>With a Filter</h3>
      <pre><code># Only even squares
even_squares = [n ** 2 for n in range(1, 11) if n % 2 == 0]
print(even_squares)  # [4, 16, 36, 64, 100]</code></pre>
      <h3>The Formula</h3>
      <p><code>[expression for item in iterable if condition]</code></p>
      <p>The <code>if condition</code> part is optional. Read it left to right as: "give me X for each Y in Z (where condition)."</p>
    `
  },
  'css-flexbox': {
    title: 'CSS Flexbox vs Grid: When to Use Which',
    date: 'Jul 12, 2026', read: '8 min read', tags: ['CSS', 'Layout'],
    body: `
      <p>For weeks I used Flexbox for everything. Then I hit a layout problem it couldn't solve elegantly — and discovered CSS Grid.</p>
      <h3>Flexbox: One Dimension</h3>
      <p>Flexbox is for laying out items in a <strong>single row or column</strong>. Perfect for navigation bars, button groups, and centering things.</p>
      <pre><code>.nav {
  display: flex;
  align-items: center;
  gap: 16px;
}</code></pre>
      <h3>CSS Grid: Two Dimensions</h3>
      <p>Grid is for <strong>2D layouts</strong> — rows AND columns at the same time. Perfect for page layouts, card grids, and complex designs.</p>
      <pre><code>.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}</code></pre>
      <h3>My Rule</h3>
      <p>🟣 <strong>One direction?</strong> → Flexbox<br>🔵 <strong>Two directions?</strong> → Grid</p>
      <p>You can (and should) mix both! Use Grid for the overall page layout and Flexbox inside components.</p>
    `
  },
  'first-week': {
    title: 'My First Week Learning to Code',
    date: 'Jun 1, 2026', read: '4 min read', tags: ['Journey', 'Beginner'],
    body: `
      <p>I had no idea what I was doing. I opened VS Code, stared at a blank screen, and typed: <code>console.log("Hello, World!")</code>. When it printed, I felt like a wizard. 🧙‍♂️</p>
      <h3>Day 1-2: Total Confusion</h3>
      <p>Variables, semicolons, curly braces — it all blurred together. I kept getting syntax errors and couldn't understand why. My frustration was real.</p>
      <h3>Day 3: The Turning Point</h3>
      <p>I built a tiny script that took my name as input and printed "Hello, Duc Manh!". Such a small thing, but it felt like magic. I realised: programming is just giving the computer very precise instructions.</p>
      <h3>Day 5-7: Building Momentum</h3>
      <p>I started a calculator project. It didn't work at first. I googled errors for hours. But when it finally worked, the satisfaction was unlike anything else.</p>
      <h3>What I Learned</h3>
      <p>Being stuck is normal. Being confused is part of learning. Every experienced developer was once exactly where I was. The only way out is through — one line of code at a time.</p>
      <p>If you're just starting out: keep going. It gets better. 🚀</p>
    `
  }
};

// ── OPEN / CLOSE POST MODAL ────────────────────────────────────────
window.openPost = function(slug) {
  const post = POSTS[slug];
  if (!post) return;
  const modal   = document.getElementById('post-modal');
  const content = document.getElementById('modal-content');
  content.innerHTML = `
    <h2>${post.title}</h2>
    <p class="post-meta">${post.date} · ${post.read} · ${post.tags.map(t => '#' + t).join(' ')}</p>
    <hr style="border:none;border-top:1px solid var(--border);margin:20px 0">
    <div class="post-body">${post.body}</div>
  `;
  modal.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';
};

window.closePost = function() {
  const modal = document.getElementById('post-modal');
  if (modal) modal.setAttribute('hidden', '');
  document.body.style.overflow = '';
};

// ── AVATAR MODAL PREVIEW ───────────────────────────────────────────
window.openAvatarModal = function() {
  const avatarImg = document.querySelector('#github-avatar-wrap img');
  const src = (avatarImg && avatarImg.src) || (typeof ghUserData !== 'undefined' && ghUserData && ghUserData.avatar_url) || 'https://avatars.githubusercontent.com/u/231286930?v=4';
  const modal = document.getElementById('avatar-modal');
  const modalImg = document.getElementById('avatar-modal-img');
  const modalName = document.getElementById('avatar-modal-name');
  if (modalImg) modalImg.src = src;
  if (modalName && typeof ghUserData !== 'undefined' && ghUserData) modalName.textContent = ghUserData.name || 'Nguyễn Đức Mạnh';
  if (modal) {
    modal.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
  }
};

window.closeAvatarModal = function() {
  const modal = document.getElementById('avatar-modal');
  if (modal) modal.setAttribute('hidden', '');
  document.body.style.overflow = '';
};

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    window.closePost();
    window.closeAvatarModal();
  }
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


// ── LANGUAGE (VN / EN) ─────────────────────────────────────────────
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
    'about.desc':   'A curious developer-in-progress, passionate about code and learning.',
    'about.card1.title': 'Who I Am',
    'about.card1.desc':  "I'm Duc Manh, a programming learner based in Vietnam. I'm on a journey to become a full-stack developer, building real projects and sharpening my skills every day.",
    'about.card2.title': "What I'm Learning",
    'about.card2.desc':  'Currently diving deep into <strong>JavaScript</strong>, <strong>Python</strong>, and <strong>C</strong>. I\'m also exploring web development fundamentals and version control with Git.',
    'about.card3.title': 'My Interests',
    'about.card3.desc':  'I love solving problems through code, experimenting with new programming languages, building personal projects, and reading about software engineering principles.',
    'about.card4.title': 'My Goals',
    'about.card4.desc':  'Become a proficient full-stack developer, contribute to open-source projects, build useful tools, and document my journey to help others who are also learning.',
    'about.skills.title': 'Technologies &amp; Tools',
    'about.skills.note':  'Currently improving: <strong>JavaScript algorithms</strong>, <strong>Python data structures</strong>, and <strong>C memory management</strong>.',
    // Projects
    'projects.label': '02. Projects',
    'projects.title': "Things I've Built",
    'projects.desc':  "A collection of personal projects I've built while learning to code.",
    'projects.wip':   'In Progress',
    'projects.p1.name': 'Personal Portfolio',
    'projects.p1.desc': 'This very website! A modern developer portfolio &amp; blog built with pure HTML, CSS, and JavaScript. Features dark/light themes, typewriter effect, and GitHub API integration.',
    'projects.p2.name': 'Calculator App',
    'projects.p2.desc': 'A fully functional calculator built with vanilla JavaScript. Supports basic arithmetic, keyboard input, and a clean responsive UI. My first real JavaScript project.',
    'projects.p3.name': 'Todo List App',
    'projects.p3.desc': 'A task management app with local storage persistence. Users can add, complete, and delete tasks. Taught me DOM manipulation and browser storage APIs.',
    'projects.p4.name': 'Number Guessing Game',
    'projects.p4.desc': 'A command-line number guessing game written in C. Practices concepts like loops, conditionals, and random number generation. One of my first C programs.',
    'projects.p5.name': 'Python Data Scraper',
    'projects.p5.desc': 'A simple Python script that scrapes and processes data from public websites using requests and BeautifulSoup. Introduced me to the world of automation.',
    'projects.p6.name': 'Dev Learning Tracker',
    'projects.p6.desc': 'A web app to track my daily coding progress, set learning goals, and visualize my improvement over time. Currently in development!',
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
    'code.label': '04. Code',
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
    'contact.label':  '06. Contact',
    'contact.title':  'Get In Touch',
    'contact.desc':   "I'd love to connect! Questions, collaborations, or just saying hi.",
    'contact.body':   "I'm currently <strong>learning</strong> and always open to new connections, feedback on my projects, or simply chatting about programming. My inbox is always open.",
    'contact.linkedin':    'Connect with me',
    'contact.card.hello':  'Say Hello!',
    'contact.card.respond':'I respond within 24 hours.',
    'contact.card.cta':    'Send me an Email',
    'contact.card.note':   'Or open a discussion on my <a href="https://github.com/Mhna3112" target="_blank" rel="noopener">GitHub</a>.',
    // Footer
    'footer.copy': 'Built with ❤️ · ',
  },

  vi: {
    // Nav
    'nav.home':        'Trang chủ',
    'nav.about':       'Giới thiệu',
    'nav.projects':    'Dự án',
    'nav.blog':        'Blog',
    'nav.github':      'GitHub',
    'nav.contact':     'Liên hệ',
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
    'about.desc':   'Một lập trình viên đang trên đường học hỏi, đam mê code và không ngừng phát triển.',
    'about.card1.title': 'Tôi là ai',
    'about.card1.desc':  'Tôi là Đức Mạnh, một học viên lập trình đang sống tại Việt Nam. Tôi đang trên hành trình trở thành full-stack developer, xây dựng các dự án thực tế và trau dồi kỹ năng mỗi ngày.',
    'about.card2.title': 'Tôi đang học gì',
    'about.card2.desc':  'Hiện đang tập trung học <strong>JavaScript</strong>, <strong>Python</strong> và <strong>C</strong>. Tôi cũng đang khám phá nền tảng lập trình web và quản lý phiên bản với Git.',
    'about.card3.title': 'Sở thích',
    'about.card3.desc':  'Tôi thích giải quyết vấn đề bằng code, thử nghiệm các ngôn ngữ lập trình mới, xây dựng dự án cá nhân và đọc về các nguyên lý kỹ thuật phần mềm.',
    'about.card4.title': 'Mục tiêu',
    'about.card4.desc':  'Trở thành full-stack developer thành thạo, đóng góp cho các dự án mã nguồn mở, xây dựng các công cụ hữu ích và ghi lại hành trình để giúp đỡ những người cùng học.',
    'about.skills.title': 'Công nghệ &amp; Công cụ',
    'about.skills.note':  'Đang cải thiện: <strong>thuật toán JavaScript</strong>, <strong>cấu trúc dữ liệu Python</strong> và <strong>quản lý bộ nhớ C</strong>.',
    // Projects
    'projects.label': '02. Dự án',
    'projects.title': 'Những gì tôi đã xây dựng',
    'projects.desc':  'Tuyển tập các dự án cá nhân tôi đã xây dựng trong quá trình học lập trình.',
    'projects.wip':   'Đang phát triển',
    'projects.p1.name': 'Portfolio cá nhân',
    'projects.p1.desc': 'Chính là website này! Một portfolio &amp; blog lập trình viên hiện đại được xây dựng bằng HTML, CSS và JavaScript thuần. Hỗ trợ chủ đề sáng/tối, hiệu ứng đánh máy và tích hợp GitHub API.',
    'projects.p2.name': 'Ứng dụng máy tính',
    'projects.p2.desc': 'Một máy tính đầy đủ chức năng được xây dựng bằng JavaScript thuần. Hỗ trợ các phép tính cơ bản, nhập liệu bằng bàn phím và giao diện responsive sạch sẽ. Dự án JavaScript thực sự đầu tiên của tôi.',
    'projects.p3.name': 'Ứng dụng Todo',
    'projects.p3.desc': 'Ứng dụng quản lý công việc với lưu trữ local. Người dùng có thể thêm, hoàn thành và xóa task. Dạy tôi về DOM manipulation và Storage API của trình duyệt.',
    'projects.p4.name': 'Trò chơi đoán số',
    'projects.p4.desc': 'Trò chơi đoán số trên dòng lệnh viết bằng C. Thực hành các khái niệm như vòng lặp, điều kiện và tạo số ngẫu nhiên. Một trong những chương trình C đầu tiên của tôi.',
    'projects.p5.name': 'Thu thập dữ liệu Python',
    'projects.p5.desc': 'Một script Python đơn giản để thu thập và xử lý dữ liệu từ các website công khai bằng requests và BeautifulSoup. Giới thiệu tôi với thế giới tự động hóa.',
    'projects.p6.name': 'Theo dõi học lập trình',
    'projects.p6.desc': 'Ứng dụng web theo dõi tiến độ học lập trình hàng ngày, đặt mục tiêu học tập và trực quan hóa sự tiến bộ theo thời gian. Đang trong quá trình phát triển!',
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
    'code.label': '04. Code',
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
    'contact.label':  '06. Liên hệ',
    'contact.title':  'Kết nối với tôi',
    'contact.desc':   'Tôi rất muốn kết nối! Câu hỏi, hợp tác, hoặc chỉ là chào hỏi.',
    'contact.body':   'Tôi đang <strong>học tập</strong> và luôn mở cửa cho các kết nối mới, phản hồi về dự án của tôi, hoặc chỉ là trò chuyện về lập trình. Hộp thư của tôi luôn rộng mở.',
    'contact.linkedin':    'Kết nối với tôi',
    'contact.card.hello':  'Chào bạn!',
    'contact.card.respond':'Tôi phản hồi trong vòng 24 giờ.',
    'contact.card.cta':    'Gửi email cho tôi',
    'contact.card.note':   'Hoặc mở một cuộc thảo luận trên <a href="https://github.com/Mhna3112" target="_blank" rel="noopener">GitHub</a> của tôi.',
    // Footer
    'footer.copy': 'Được xây dựng với ❤️ · ',
  }
};

let currentLang = localStorage.getItem('lang') || 'en';

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

  // Re-render GitHub dynamic contents with updated language
  if (typeof renderGitHubProfile === 'function') renderGitHubProfile();
  if (typeof renderGitHubRepos === 'function') renderGitHubRepos(currentGhFilter);
  if (typeof renderGitHubLanguages === 'function') renderGitHubLanguages();

  // Restart typewriter with new language
  phraseIdx = 0;
  charIdx   = 0;
  deleting  = false;
}

// Wire lang button
document.getElementById('lang-toggle').addEventListener('click', () => {
  applyLang(currentLang === 'en' ? 'vi' : 'en');
});

// Init lang on load
applyLang(currentLang);

// Init GitHub filters & data
initGitHubFilters();
loadGitHub();

// Wire GitHub manual sync button
const ghSyncBtn = document.getElementById('gh-sync-btn');
if (ghSyncBtn) {
  ghSyncBtn.addEventListener('click', () => {
    loadGitHub(true);
  });
}

// Wire avatar preview modal
const avatarWrap = document.getElementById('github-avatar-wrap');
if (avatarWrap) {
  avatarWrap.addEventListener('click', window.openAvatarModal);
  avatarWrap.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      window.openAvatarModal();
    }
  });
}


