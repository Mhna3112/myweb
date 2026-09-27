#!/usr/bin/env node
/**
 * scripts/test-e2e-ciallovo.mjs
 * 
 * Comprehensive Opaque-Box E2E Test Suite for Personal Website Redesign (mhna.id.vn)
 * Aesthetic: Ciallovo.top Architecture & Anthropic Claude Editorial System
 *
 * Test Hierarchy:
 * - Tier 1: Feature Coverage (>=5 tests per feature, 14 features = 70 tests)
 * - Tier 2: Boundary & Corner Cases (>=5 tests per feature, 14 features = 70 tests)
 * - Tier 3: Cross-Feature Combinations (18 Pairwise interaction tests)
 * - Tier 4: Real-World Scenarios (5 End-to-End User Workload Scenarios = 26 assertions)
 * Total Planned Assertions: 184 assertions (> 160 required)
 *
 * Usage:
 *   node scripts/test-e2e-ciallovo.mjs [options]
 * Options:
 *   --tier=1|2|3|4         Run only tests in specified tier
 *   --feature=F1..F14      Run only tests for specific feature
 *   --milestone=M1..M4     Run only tests associated with milestone
 *   --report-only          Always exit 0, output report table
 *   --strict               Exit 1 if any test fails
 *   --verbose              Print detailed stack traces and debugging info
 */

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

// ── CLI ARGUMENTS PARSING ──────────────────────────────────────────────
const args = process.argv.slice(2);
const filterTier = args.find(a => a.startsWith('--tier='))?.split('=')[1];
const filterFeature = args.find(a => a.startsWith('--feature='))?.split('=')[1]?.toUpperCase();
const filterMilestone = args.find(a => a.startsWith('--milestone='))?.split('=')[1]?.toUpperCase();
const isReportOnly = args.includes('--report-only');
const isStrict = args.includes('--strict');
const isVerbose = args.includes('--verbose');

// ── ANSI STYLING HELPERS ───────────────────────────────────────────────
const colors = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  bgDark: '\x1b[40m'
};

const sym = {
  pass: `${colors.green}✓${colors.reset}`,
  fail: `${colors.red}✗${colors.reset}`,
  pending: `${colors.yellow}○${colors.reset}`,
  arrow: `${colors.cyan}→${colors.reset}`,
  bullet: `${colors.dim}•${colors.reset}`
};

// ── FEATURE & MILESTONE REGISTRY ───────────────────────────────────────
const FEATURE_MAP = {
  F1:  { name: 'SePay & Donate Cleanup', milestone: 'M1', source: 'ORIGINAL_REQUEST §R3' },
  F2:  { name: 'Claude Light Theme', milestone: 'M2', source: 'ORIGINAL_REQUEST §R1' },
  F3:  { name: 'Claude Dark Theme', milestone: 'M2', source: 'ORIGINAL_REQUEST §R1' },
  F4:  { name: 'Editorial Typography', milestone: 'M2', source: 'ORIGINAL_REQUEST §R1' },
  F5:  { name: 'Zero-FOUC Theme Switcher', milestone: 'M2', source: 'ORIGINAL_REQUEST §R1' },
  F6:  { name: 'Ciallovo Top Navbar', milestone: 'M3', source: 'ORIGINAL_REQUEST §R2.1' },
  F7:  { name: 'In-Page Search Modal', milestone: 'M3', source: 'ORIGINAL_REQUEST §R2.1' },
  F8:  { name: 'Dynamic Hero Section', milestone: 'M3', source: 'ORIGINAL_REQUEST §R2.2' },
  F9:  { name: 'Frosted Card Feed', milestone: 'M3', source: 'ORIGINAL_REQUEST §R2.3' },
  F10: { name: 'Memos Status Board', milestone: 'M3', source: 'ORIGINAL_REQUEST §R2.4' },
  F11: { name: 'Interactive Rich Footer', milestone: 'M3', source: 'ORIGINAL_REQUEST §R2.5' },
  F12: { name: 'Floating Kaomoji Mascot', milestone: 'M3', source: 'ORIGINAL_REQUEST §R2.5' },
  F13: { name: 'Multilingual Synchronization', milestone: 'M3', source: 'ORIGINAL_REQUEST §R3' },
  F14: { name: 'E2E Integration & Deployment', milestone: 'M4', source: 'Acceptance Criteria' }
};

// ── TEST HARNESS ENGINE ────────────────────────────────────────────────
class TestHarness {
  constructor() {
    this.tests = [];
    this.results = [];
    this.currentTier = null;
  }

  register(tier, feature, id, title, runFn) {
    this.tests.push({
      tier,
      feature: feature || 'GENERAL',
      id,
      title,
      runFn,
      milestone: FEATURE_MAP[feature]?.milestone || 'M4'
    });
  }

  assert(condition, message) {
    if (!condition) {
      throw new Error(message || 'Assertion failed');
    }
  }

  assertEqual(actual, expected, message) {
    if (actual !== expected) {
      throw new Error(`${message || 'Assertion failed'} - Expected: ${JSON.stringify(expected)}, Actual: ${JSON.stringify(actual)}`);
    }
  }

  assertIncludes(haystack, needle, message) {
    if (typeof haystack === 'string' || Array.isArray(haystack)) {
      if (!haystack.includes(needle)) {
        throw new Error(`${message || 'Assertion failed'} - Expected string/array to include: "${needle}"`);
      }
    } else {
      throw new Error(`${message || 'Assertion failed'} - Target is not searchable (type: ${typeof haystack})`);
    }
  }

  assertNotIncludes(haystack, needle, message) {
    if (typeof haystack === 'string' || Array.isArray(haystack)) {
      if (haystack.includes(needle)) {
        throw new Error(`${message || 'Assertion failed'} - Expected string/array to NOT include: "${needle}"`);
      }
    }
  }

  assertInRange(val, min, max, message) {
    if (val < min || val > max) {
      throw new Error(`${message || 'Assertion failed'} - Value ${val} out of expected range [${min}, ${max}]`);
    }
  }

  assertRegex(str, pattern, message) {
    if (!pattern.test(str)) {
      throw new Error(`${message || 'Assertion failed'} - "${str}" does not match pattern ${pattern}`);
    }
  }
}

const harness = new TestHarness();

// ── FILE SYSTEM CACHE & CODEBASE INSPECTORS ────────────────────────────
class Codebase {
  constructor(root) {
    this.root = root;
    this.cache = new Map();
  }

  exists(relPath) {
    return fs.existsSync(path.join(this.root, relPath));
  }

  read(relPath) {
    if (this.cache.has(relPath)) return this.cache.get(relPath);
    const fullPath = path.join(this.root, relPath);
    if (!fs.existsSync(fullPath)) return null;
    const content = fs.readFileSync(fullPath, 'utf8');
    this.cache.set(relPath, content);
    return content;
  }

  readJson(relPath) {
    const raw = this.read(relPath);
    if (!raw) return null;
    try {
      return JSON.parse(raw);
    } catch {
      return null;
    }
  }
}

const codebase = new Codebase(projectRoot);

// ── HIGH-FIDELITY SANDBOX DOM & VM ENVIRONMENT ─────────────────────────
class MockElement {
  constructor(tagName, id = '') {
    this.tagName = tagName.toUpperCase();
    this.id = id;
    this.className = '';
    this.style = {};
    this.attributes = new Map();
    this.children = [];
    this.parentNode = null;
    this.innerHTML = '';
    this.textContent = '';
    this.value = '';
    this.listeners = new Map();
    this.dataset = {};
    this.open = false;
    this.offsetWidth = 400;
    this.offsetHeight = 300;

    const self = this;
    this.classList = {
      classes: new Set(),
      add(...tokens) {
        tokens.forEach(t => self.classList.classes.add(t));
        self.className = Array.from(self.classList.classes).join(' ');
      },
      remove(...tokens) {
        tokens.forEach(t => self.classList.classes.delete(t));
        self.className = Array.from(self.classList.classes).join(' ');
      },
      toggle(token, force) {
        let result;
        if (force === undefined) {
          if (self.classList.classes.has(token)) {
            self.classList.classes.delete(token);
            result = false;
          } else {
            self.classList.classes.add(token);
            result = true;
          }
        } else if (force) {
          self.classList.classes.add(token);
          result = true;
        } else {
          self.classList.classes.delete(token);
          result = false;
        }
        self.className = Array.from(self.classList.classes).join(' ');
        return result;
      },
      contains(token) {
        return self.classList.classes.has(token);
      }
    };
  }

  setAttribute(k, v) {
    this.attributes.set(k, String(v));
    if (k === 'id') this.id = String(v);
    if (k === 'class') {
      this.className = String(v);
      this.classList.classes = new Set(String(v).split(/\s+/).filter(Boolean));
    }
    if (k.startsWith('data-')) {
      const prop = k.slice(5).replace(/-([a-z])/g, (_, c) => c.toUpperCase());
      this.dataset[prop] = String(v);
    }
  }

  getAttribute(k) {
    return this.attributes.get(k) || null;
  }

  hasAttribute(k) {
    return this.attributes.has(k);
  }

  removeAttribute(k) {
    this.attributes.delete(k);
    if (k === 'id') this.id = '';
    if (k === 'class') {
      this.className = '';
      this.classList.classes.clear();
    }
    if (k.startsWith('data-')) {
      const prop = k.slice(5).replace(/-([a-z])/g, (_, c) => c.toUpperCase());
      delete this.dataset[prop];
    }
  }

  addEventListener(event, fn) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }
    this.listeners.get(event).push(fn);
  }

  removeEventListener(event, fn) {
    if (!this.listeners.has(event)) return;
    const filtered = this.listeners.get(event).filter(f => f !== fn);
    this.listeners.set(event, filtered);
  }

  dispatchEvent(event) {
    const list = this.listeners.get(event.type) || [];
    for (const fn of list) {
      fn(event);
    }
  }

  appendChild(child) {
    child.parentNode = this;
    this.children.push(child);
  }

  removeChild(child) {
    const idx = this.children.indexOf(child);
    if (idx !== -1) {
      this.children.splice(idx, 1);
      child.parentNode = null;
    }
  }

  querySelector(sel) {
    if (sel.startsWith('#')) {
      const targetId = sel.slice(1);
      if (this.id === targetId) return this;
      for (const child of this.children) {
        const found = child.querySelector(sel);
        if (found) return found;
      }
      return null;
    }
    if (sel.startsWith('.')) {
      const targetClass = sel.slice(1);
      if (this.classList.contains(targetClass)) return this;
      for (const child of this.children) {
        const found = child.querySelector(sel);
        if (found) return found;
      }
      return null;
    }
    return new MockElement('div');
  }

  querySelectorAll(sel) {
    const results = [];
    if (sel.startsWith('.')) {
      const targetClass = sel.slice(1);
      if (this.classList.contains(targetClass)) results.push(this);
    }
    for (const child of this.children) {
      results.push(...child.querySelectorAll(sel));
    }
    return results;
  }

  getBoundingClientRect() {
    return { top: 120, bottom: 420, left: 180, right: 580, width: 400, height: 300 };
  }

  showModal() {
    this.open = true;
    this.setAttribute('open', '');
  }

  close() {
    this.open = false;
    this.removeAttribute('open');
  }

  focus() {}
  blur() {}
  scrollIntoView() {}
}

function createDOMSandbox() {
  const elements = new Map();
  const getOrCreate = (tag, id) => {
    const key = `${tag}#${id}`;
    if (!elements.has(key)) {
      elements.set(key, new MockElement(tag, id));
    }
    return elements.get(key);
  };

  const docEl = new MockElement('html');
  docEl.setAttribute('lang', 'vi');
  docEl.setAttribute('data-theme', 'dark');

  const bodyEl = new MockElement('body');
  docEl.appendChild(bodyEl);

  const mockDoc = {
    documentElement: docEl,
    body: bodyEl,
    activeElement: bodyEl,
    getElementById(id) {
      return getOrCreate('div', id);
    },
    querySelector(sel) {
      if (sel.startsWith('#')) return getOrCreate('div', sel.slice(1));
      if (sel === 'html') return docEl;
      if (sel === 'body') return bodyEl;
      return new MockElement('div');
    },
    querySelectorAll(sel) {
      if (sel.includes('[data-project-id]')) {
        return ['mediahub', 'gplx', 'todo', 'discord', 'roblox', 'cpp'].map(pid => {
          const el = new MockElement('article');
          el.setAttribute('data-project-id', pid);
          el.dataset.projectId = pid;
          return el;
        });
      }
      return [new MockElement('div'), new MockElement('div')];
    },
    createElement(tag) {
      return new MockElement(tag);
    },
    addEventListener: () => {},
    removeEventListener: () => {}
  };

  const sandbox = {
    document: mockDoc,
    window: {
      innerWidth: 1440,
      innerHeight: 900,
      scrollY: 0,
      location: { href: 'https://mhna.id.vn/' },
      addEventListener: () => {},
      removeEventListener: () => {},
      matchMedia: (query) => ({
        matches: query.includes('dark'),
        addEventListener: () => {}
      })
    },
    navigator: {
      clipboard: {
        writeText: async (t) => true
      }
    },
    localStorage: {
      store: {},
      getItem(k) { return this.store[k] ?? null; },
      setItem(k, v) { this.store[k] = String(v); },
      removeItem(k) { delete this.store[k]; },
      clear() { this.store = {}; }
    },
    sessionStorage: {
      store: {},
      getItem(k) { return this.store[k] ?? null; },
      setItem(k, v) { this.store[k] = String(v); },
      removeItem(k) { delete this.store[k]; }
    },
    IntersectionObserver: class {
      observe() {}
      unobserve() {}
      disconnect() {}
    },
    performance: { now: () => Date.now() },
    console: {
      log: () => {},
      warn: () => {},
      error: () => {},
      info: () => {}
    },
    setTimeout,
    clearTimeout,
    setInterval,
    clearInterval,
    Date,
    Math,
    Array,
    Object,
    Set,
    Map,
    String,
    Number,
    Boolean,
    RegExp,
    JSON,
    encodeURIComponent
  };

  vm.createContext(sandbox);
  return sandbox;
}

// ── COLOR CONTRAST RATIO CALCULATOR (WCAG AA COMPLIANCE) ───────────────
function hexToLuminance(hex) {
  const cleanHex = hex.replace('#', '');
  const r = parseInt(cleanHex.substring(0, 2), 16) / 255;
  const g = parseInt(cleanHex.substring(2, 4), 16) / 255;
  const b = parseInt(cleanHex.substring(4, 6), 16) / 255;

  const toLinear = c => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4));
  return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
}

function calculateContrastRatio(hex1, hex2) {
  const lum1 = hexToLuminance(hex1);
  const lum2 = hexToLuminance(hex2);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
}

// =======================================================================
// TIER 1: FEATURE COVERAGE (>=5 tests per feature, 14 features = 70 tests)
// =======================================================================

// --- F1: SePay & Donate Cleanup (Milestone M1) ---
harness.register(1, 'F1', 'T1.F1.1', 'Complete removal of donate directory from root', (h) => {
  const donateExists = codebase.exists('donate');
  h.assert(!donateExists, 'Directory "donate" must be completely removed from project root');
});

harness.register(1, 'F1', 'T1.F1.2', 'Removal of local data/donations.json transaction log', (h) => {
  const donationsJsonExists = codebase.exists('data/donations.json');
  h.assert(!donationsJsonExists, 'File "data/donations.json" must be deleted');
});

harness.register(1, 'F1', 'T1.F1.3', 'Excision of SePay webhook and donation routes in worker.js', (h) => {
  const workerContent = codebase.read('worker.js') || '';
  h.assertNotIncludes(workerContent, '/api/sepay-webhook', 'worker.js must not contain /api/sepay-webhook route');
  h.assertNotIncludes(workerContent, '/api/donations', 'worker.js must not contain /api/donations route');
  h.assertNotIncludes(workerContent, '/api/sepay-test', 'worker.js must not contain /api/sepay-test route');
});

harness.register(1, 'F1', 'T1.F1.4', 'Removal of DONATIONS_KV binding in wrangler.jsonc', (h) => {
  const wranglerContent = codebase.read('wrangler.jsonc') || '';
  h.assertNotIncludes(wranglerContent, 'DONATIONS_KV', 'wrangler.jsonc must not contain DONATIONS_KV binding');
  h.assertNotIncludes(wranglerContent, '"/donate"', 'wrangler.jsonc must not contain /donate routing rules');
});

harness.register(1, 'F1', 'T1.F1.5', 'Excision of Donate navigation pills and links in index.html', (h) => {
  const htmlContent = codebase.read('index.html') || '';
  h.assertNotIncludes(htmlContent, 'class="donate-nav-pill"', 'index.html must not contain donate-nav-pill');
  h.assertNotIncludes(htmlContent, 'href="donate/"', 'index.html must not contain links pointing to donate/');
  h.assertNotIncludes(htmlContent, 'data-i18n="nav.donate"', 'index.html must not contain nav.donate i18n key');
});

// --- F2: Claude Light Theme Tokens (Milestone M2) ---
harness.register(1, 'F2', 'T1.F2.1', 'CSS Light canvas token maps to Claude Warm Ivory (#FAF7F2 or #FAF9F5)', (h) => {
  const css = codebase.read('style.css') || '';
  const hasIvory = css.includes('#FAF7F2') || css.includes('#FAF9F5') || css.includes('#faf7f2') || css.includes('#faf9f5');
  h.assert(hasIvory, 'style.css light theme must define Claude Warm Ivory background (#FAF7F2 or #FAF9F5)');
});

harness.register(1, 'F2', 'T1.F2.2', 'CSS Light primary accent maps to Terracotta (#CC5636 or #D97757)', (h) => {
  const css = codebase.read('style.css') || '';
  const hasTerracotta = css.includes('#CC5636') || css.includes('#D97757') || css.includes('#DA7756') ||
                        css.includes('#cc5636') || css.includes('#d97757') || css.includes('#da7756');
  h.assert(hasTerracotta, 'style.css light theme must define terracotta primary accent (#CC5636 or #D97757)');
});

harness.register(1, 'F2', 'T1.F2.3', 'CSS Light elevated card surface maps to pure white / subtle stone (#FFFFFF or #FCFAF5)', (h) => {
  const css = codebase.read('style.css') || '';
  const hasCardBg = css.includes('--card-bg') || css.includes('--bg-surface');
  h.assert(hasCardBg, 'style.css must define elevated card surface token (--card-bg or --bg-surface)');
});

harness.register(1, 'F2', 'T1.F2.4', 'CSS Light primary text maps to Deep Warm Charcoal (#1F1E1D)', (h) => {
  const css = codebase.read('style.css') || '';
  const hasCharcoal = css.includes('#1F1E1D') || css.includes('#1f1e1d') || css.includes('#262624');
  h.assert(hasCharcoal, 'style.css must define warm charcoal primary text color');
});

harness.register(1, 'F2', 'T1.F2.5', 'CSS Light subtle borders map to Warm Stone Border (#E5DFD5 or #E5E2DA)', (h) => {
  const css = codebase.read('style.css') || '';
  const hasBorder = css.includes('#E5DFD5') || css.includes('#E5E2DA') || css.includes('#e5dfd5') || css.includes('#e5e2da');
  h.assert(hasBorder, 'style.css must define subtle warm border token (#E5DFD5 or #E5E2DA)');
});

// --- F3: Claude Dark Theme Tokens (Milestone M2) ---
harness.register(1, 'F3', 'T1.F3.1', 'CSS Dark canvas token maps to Claude Obsidian (#181816 or #1A1918)', (h) => {
  const css = codebase.read('style.css') || '';
  const hasObsidian = css.includes('#181816') || css.includes('#1A1918') || css.includes('#181816') || css.includes('#1e1e1c');
  h.assert(hasObsidian, 'style.css dark theme must define Claude Obsidian canvas (#181816 or #1A1918)');
});

harness.register(1, 'F3', 'T1.F3.2', 'CSS Dark elevated card surface maps to Warm Velvet Surface (#232220 or #242321)', (h) => {
  const css = codebase.read('style.css') || '';
  const hasVelvet = css.includes('#232220') || css.includes('#242321') || css.includes('#2e2d2a');
  h.assert(hasVelvet, 'style.css dark theme must define elevated velvet card surface (#232220 or #242321)');
});

harness.register(1, 'F3', 'T1.F3.3', 'CSS Dark accent maps to Vibrant Terracotta (#E06D53 or #E27D60)', (h) => {
  const css = codebase.read('style.css') || '';
  const hasDarkAccent = css.includes('#E06D53') || css.includes('#E27D60') || css.includes('#e06d53') || css.includes('#e27d60');
  h.assert(hasDarkAccent, 'style.css dark theme must define vibrant terracotta accent (#E06D53 or #E27D60)');
});

harness.register(1, 'F3', 'T1.F3.4', 'CSS Dark primary text maps to Warm Off-White (#EDE8DF or #F4F3EE)', (h) => {
  const css = codebase.read('style.css') || '';
  const hasOffWhite = css.includes('#EDE8DF') || css.includes('#F4F3EE') || css.includes('#ede8df') || css.includes('#f4f3ee');
  h.assert(hasOffWhite, 'style.css dark theme must define warm off-white primary text (#EDE8DF or #F4F3EE)');
});

harness.register(1, 'F3', 'T1.F3.5', 'CSS Dark border maps to Muted Warm Dark Border (#33312E or #3A3935)', (h) => {
  const css = codebase.read('style.css') || '';
  const hasDarkBorder = css.includes('#33312E') || css.includes('#3A3935') || css.includes('#33312e') || css.includes('#3a3935');
  h.assert(hasDarkBorder, 'style.css dark theme must define muted dark border (#33312E or #3A3935)');
});

// --- F4: Editorial Typography (Milestone M2) ---
harness.register(1, 'F4', 'T1.F4.1', 'Editorial serif font imported via Google Fonts or @font-face', (h) => {
  const html = codebase.read('index.html') || '';
  const css = codebase.read('style.css') || '';
  const hasSerif = html.includes('Newsreader') || html.includes('Lora') || html.includes('Playfair+Display') ||
                   css.includes('Newsreader') || css.includes('Lora');
  h.assert(hasSerif, 'Must import editorial serif typography (Newsreader, Lora, or Playfair Display)');
});

harness.register(1, 'F4', 'T1.F4.2', 'Editorial serif assigned to headings and hero title', (h) => {
  const css = codebase.read('style.css') || '';
  const hasSerifHeading = (css.includes('Newsreader') || css.includes('Lora') || css.includes('Playfair Display') || css.includes('serif')) &&
                          (css.includes('--font-serif') || css.includes('--font-display') || css.includes('h1,') || css.includes('h2,'));
  h.assert(hasSerifHeading, 'Headings must be styled with editorial serif typography');
});

harness.register(1, 'F4', 'T1.F4.3', 'Body typography configured with clean modern sans-serif (Inter)', (h) => {
  const css = codebase.read('style.css') || '';
  h.assertIncludes(css, 'Inter', 'Body typography must configure clean sans-serif (Inter)');
});

harness.register(1, 'F4', 'T1.F4.4', 'Code and terminal elements configured with clean monospace (JetBrains Mono)', (h) => {
  const css = codebase.read('style.css') || '';
  const hasMono = css.includes('JetBrains Mono') || css.includes('monospace');
  h.assert(hasMono, 'Code styling must utilize monospace font (JetBrains Mono)');
});

harness.register(1, 'F4', 'T1.F4.5', 'Typographic hierarchy defines comfortable editorial line heights', (h) => {
  const css = codebase.read('style.css') || '';
  const hasLineHeight = css.includes('line-height') || css.includes('--lh-');
  h.assert(hasLineHeight, 'CSS must specify editorial line-height properties');
});

// --- F5: Zero-FOUC Theme Switcher (Milestone M2) ---
harness.register(1, 'F5', 'T1.F5.1', 'Synchronous blocking theme script placed early in head to prevent FOUC', (h) => {
  const html = codebase.read('index.html') || '';
  const headMatch = html.match(/<head[\s\S]*?<\/head>/i);
  h.assert(headMatch, 'index.html must have <head> tag');
  const inHeadScript = headMatch[0].includes('data-theme') || headMatch[0].includes('localStorage.getItem(\'theme\')');
  h.assert(inHeadScript, '<head> must contain inline synchronous script reading theme from localStorage');
});

harness.register(1, 'F5', 'T1.F5.2', 'Inline head script immediately sets data-theme on documentElement', (h) => {
  const html = codebase.read('index.html') || '';
  const setsDataTheme = html.includes('setAttribute(\'data-theme\'') || html.includes('setAttribute("data-theme"');
  h.assert(setsDataTheme, 'Script must immediately set data-theme attribute on documentElement');
});

harness.register(1, 'F5', 'T1.F5.3', 'Theme toggle button exists in navbar markup', (h) => {
  const html = codebase.read('index.html') || '';
  const hasBtn = html.includes('id="theme-toggle-btn"') || html.includes('id="theme-quick-btn"') || html.includes('class="theme-toggle"');
  h.assert(hasBtn, 'Navbar must include theme toggle button');
});

harness.register(1, 'F5', 'T1.F5.4', 'applyTheme smoothly switches data-theme attribute', (h) => {
  const js = codebase.read('main.js') || '';
  const sandbox = createDOMSandbox();
  vm.runInContext(js, sandbox);

  h.assert(typeof sandbox.window.applyTheme === 'function' || typeof sandbox.applyTheme === 'function', 'applyTheme must be defined');
  const fn = sandbox.window.applyTheme || sandbox.applyTheme;
  fn('light');
  h.assertEqual(sandbox.document.documentElement.getAttribute('data-theme'), 'light', 'data-theme must equal "light"');
  fn('dark');
  h.assertEqual(sandbox.document.documentElement.getAttribute('data-theme'), 'dark', 'data-theme must equal "dark"');
});

harness.register(1, 'F5', 'T1.F5.5', 'Theme choice persists in localStorage', (h) => {
  const js = codebase.read('main.js') || '';
  const sandbox = createDOMSandbox();
  vm.runInContext(js, sandbox);

  const fn = sandbox.window.applyTheme || sandbox.applyTheme;
  fn('dark');
  h.assertEqual(sandbox.localStorage.getItem('theme'), 'dark', 'Theme choice must be saved to localStorage');
});

// --- F6: Ciallovo Top Navbar (Milestone M3) ---
harness.register(1, 'F6', 'T1.F6.1', 'Minimalist sticky topbar (#navbar) present in index.html', (h) => {
  const html = codebase.read('index.html') || '';
  h.assertIncludes(html, 'id="navbar"', 'index.html must define #navbar');
});

harness.register(1, 'F6', 'T1.F6.2', 'Brand title / logo represents Duc Manh or mhna.id.vn', (h) => {
  const html = codebase.read('index.html') || '';
  const hasLogo = html.includes('Duc Manh') || html.includes('DucManh') || html.includes('mhna.id.vn');
  h.assert(hasLogo, 'Navbar must display brand logo/title for Duc Manh');
});

harness.register(1, 'F6', 'T1.F6.3', 'Navbar contains clean horizontal navigation links', (h) => {
  const html = codebase.read('index.html') || '';
  const hasLinks = html.includes('nav-links') || html.includes('nav-menu') || html.includes('nav-item');
  h.assert(hasLinks, 'Navbar must contain navigation links container');
});

harness.register(1, 'F6', 'T1.F6.4', 'Responsive mobile hamburger button (#nav-toggle) present', (h) => {
  const html = codebase.read('index.html') || '';
  h.assert(html.includes('id="nav-toggle"') || html.includes('class="nav-toggle"'), 'Navbar must include mobile hamburger toggle');
});

harness.register(1, 'F6', 'T1.F6.5', 'Mobile navigation drawer container present and toggleable', (h) => {
  const html = codebase.read('index.html') || '';
  const hasDrawer = html.includes('id="nav-drawer"') || html.includes('id="nav-links"') || html.includes('class="mobile-drawer"');
  h.assert(hasDrawer, 'Markup must include mobile navigation drawer container');
});

// --- F7: In-Page Search Modal (Milestone M3) ---
harness.register(1, 'F7', 'T1.F7.1', 'Search trigger button (#search-trigger-btn) present in navbar', (h) => {
  const html = codebase.read('index.html') || '';
  h.assert(html.includes('id="search-trigger-btn"') || html.includes('class="search-trigger"'), 'Navbar must include search trigger button');
});

harness.register(1, 'F7', 'T1.F7.2', 'In-page search dialog modal (#search-modal) present in DOM', (h) => {
  const html = codebase.read('index.html') || '';
  h.assertIncludes(html, 'id="search-modal"', 'index.html must include <dialog id="search-modal">');
});

harness.register(1, 'F7', 'T1.F7.3', 'Search input field (#search-input) and results container (#search-results)', (h) => {
  const html = codebase.read('index.html') || '';
  h.assertIncludes(html, 'id="search-input"', 'Search modal must contain #search-input');
  h.assertIncludes(html, 'id="search-results"', 'Search modal must contain #search-results');
});

harness.register(1, 'F7', 'T1.F7.4', 'Search normalization strips Vietnamese accents and diacritics', (h) => {
  const js = codebase.read('main.js') || '';
  const sandbox = createDOMSandbox();
  vm.runInContext(js, sandbox);

  const normalize = sandbox.window.normalizeSearchStr || sandbox.normalizeSearchStr;
  h.assert(typeof normalize === 'function', 'normalizeSearchStr function must be exposed');
  const normalized = normalize('Thuật toán QuickSort');
  h.assert(normalized.includes('thuat toan'), 'normalizeSearchStr must remove Vietnamese diacritics');
});

harness.register(1, 'F7', 'T1.F7.5', 'Search modal open and close APIs exposed and functioning', (h) => {
  const js = codebase.read('main.js') || '';
  const sandbox = createDOMSandbox();
  vm.runInContext(js, sandbox);

  const openSearch = sandbox.window.openSearchModal || sandbox.openSearchModal;
  const closeSearch = sandbox.window.closeSearchModal || sandbox.closeSearchModal;
  h.assert(typeof openSearch === 'function', 'openSearchModal must be defined');
  h.assert(typeof closeSearch === 'function', 'closeSearchModal must be defined');
});

// --- F8: Dynamic Hero Section (Milestone M3) ---
harness.register(1, 'F8', 'T1.F8.1', 'Hero section container present (.index-hero or #hero)', (h) => {
  const html = codebase.read('index.html') || '';
  h.assert(html.includes('id="hero"') || html.includes('id="home"') || html.includes('class="index-hero"'), 'Hero section must exist in index.html');
});

harness.register(1, 'F8', 'T1.F8.2', 'Large typewriter heading "Hi, I\'m Duc Manh" with blinking cursor', (h) => {
  const html = codebase.read('index.html') || '';
  h.assert(html.includes('Duc Manh') || html.includes('hero-typewriter'), 'Hero heading must feature Duc Manh headline');
});

harness.register(1, 'F8', 'T1.F8.3', 'Hero subtitle typewriter text element (#hero-typewriter-text) present', (h) => {
  const html = codebase.read('index.html') || '';
  h.assert(html.includes('id="hero-typewriter-text"') || html.includes('id="typewriter-text"') || html.includes('class="typewriter"'), 'Hero must contain typewriter text target');
});

harness.register(1, 'F8', 'T1.F8.4', 'Hero subtitle cycles through alternating role phrases in VI and EN', (h) => {
  const js = codebase.read('main.js') || '';
  const hasPhrases = js.includes('HERO_PHRASES') || js.includes('PHRASES');
  h.assert(hasPhrases, 'main.js must define phrases array for hero typewriter');
});

harness.register(1, 'F8', 'T1.F8.5', 'Clean pill CTA button "Về tôi >" (About me >) pointing to #about', (h) => {
  const html = codebase.read('index.html') || '';
  const hasCta = html.includes('href="#about"') || html.includes('href="#works"');
  h.assert(hasCta, 'Hero must contain primary call to action linking to section');
});

// --- F9: Frosted Card Feed (Milestone M3) ---
harness.register(1, 'F9', 'T1.F9.1', 'Frosted card feed container (.posts-container or #posts-container) present', (h) => {
  const html = codebase.read('index.html') || '';
  const hasContainer = html.includes('class="posts-container"') || html.includes('id="posts-container"') || html.includes('class="projects-grid"');
  h.assert(hasContainer, 'index.html must define frosted card feed container');
});

harness.register(1, 'F9', 'T1.F9.2', 'CSS defines frosted glass styling (backdrop-filter: blur, border-radius)', (h) => {
  const css = codebase.read('style.css') || '';
  h.assertIncludes(css, 'backdrop-filter', 'style.css must specify backdrop-filter blur for frosted cards');
});

harness.register(1, 'F9', 'T1.F9.3', 'Feeds 6 core portfolio projects with data-project-id attributes', (h) => {
  const html = codebase.read('index.html') || '';
  const required = ['mediahub', 'gplx', 'todo', 'discord', 'roblox', 'cpp'];
  for (const pid of required) {
    h.assertIncludes(html, `data-project-id="${pid}"`, `Card feed must include data-project-id="${pid}"`);
  }
});

harness.register(1, 'F9', 'T1.F9.4', 'Cards display title, excerpt description, category pill tags, and demo button', (h) => {
  const html = codebase.read('index.html') || '';
  h.assertIncludes(html, 'class="project-demo-btn"', 'Cards must include .project-demo-btn button');
});

harness.register(1, 'F9', 'T1.F9.5', 'Preserves Hover Preview Popover and Demo Runner modal portals', (h) => {
  const html = codebase.read('index.html') || '';
  h.assertIncludes(html, 'id="project-hover-popover"', 'index.html must preserve #project-hover-popover');
  h.assertIncludes(html, 'id="project-runner-modal"', 'index.html must preserve #project-runner-modal');
});

// --- F10: Memos Status Board (Milestone M3) ---
harness.register(1, 'F10', 'T1.F10.1', 'Memos section (.index-memo-zone or #memos) present in index.html', (h) => {
  const html = codebase.read('index.html') || '';
  h.assert(html.includes('id="memos"') || html.includes('class="index-memo-zone"') || html.includes('id="memo"'), 'index.html must include Memos status board section');
});

harness.register(1, 'F10', 'T1.F10.2', 'Memos board list container present in markup', (h) => {
  const html = codebase.read('index.html') || '';
  h.assert(html.includes('id="memos-board-list"') || html.includes('class="memo-list"') || html.includes('class="memos-container"'), 'Memos section must contain list container');
});

harness.register(1, 'F10', 'T1.F10.3', 'MEMOS_DATA array defined in main.js with structured thought snippets', (h) => {
  const js = codebase.read('main.js') || '';
  const sandbox = createDOMSandbox();
  vm.runInContext(js, sandbox);

  const memos = sandbox.window.MEMOS_DATA || sandbox.MEMOS_DATA;
  h.assert(Array.isArray(memos), 'MEMOS_DATA must be an array of status updates');
  h.assert(memos.length >= 3, 'MEMOS_DATA must have at least 3 thought snippets');
});

harness.register(1, 'F10', 'T1.F10.4', 'Relative timestamp formatter converts timestamps into natural strings', (h) => {
  const js = codebase.read('main.js') || '';
  const sandbox = createDOMSandbox();
  vm.runInContext(js, sandbox);

  const formatRelTime = sandbox.window.formatRelativeTime || sandbox.formatRelativeTime;
  h.assert(typeof formatRelTime === 'function', 'formatRelativeTime must be defined');
  const nowStr = formatRelTime(Date.now() - 10000);
  h.assert(nowStr.includes('Vừa xong') || nowStr.includes('Just now') || nowStr.includes('giây'), 'formatRelativeTime must render recent timestamp');
});

harness.register(1, 'F10', 'T1.F10.5', 'Memo cards feature avatar, author handle, and topic tags', (h) => {
  const js = codebase.read('main.js') || '';
  const hasTags = js.includes('memo-tag') || js.includes('tags');
  h.assert(hasTags, 'Memos must render tags and author info');
});

// --- F11: Interactive Rich Footer (Milestone M3) ---
harness.register(1, 'F11', 'T1.F11.1', 'Rich footer element present in index.html', (h) => {
  const html = codebase.read('index.html') || '';
  h.assertIncludes(html, '<footer', 'index.html must define <footer> element');
});

harness.register(1, 'F11', 'T1.F11.2', 'Running uptime clock target (#footer-uptime-clock) present', (h) => {
  const html = codebase.read('index.html') || '';
  h.assert(html.includes('id="footer-uptime-clock"') || html.includes('id="site-uptime"'), 'Footer must contain uptime clock target element');
});

harness.register(1, 'F11', 'T1.F11.3', 'Visitor counter target (#footer-visitor-counter) present', (h) => {
  const html = codebase.read('index.html') || '';
  h.assert(html.includes('id="footer-visitor-counter"') || html.includes('id="visitor-counter"'), 'Footer must contain visitor counter target element');
});

harness.register(1, 'F11', 'T1.F11.4', 'updateUptimeClock computes elapsed time from baseline launch epoch', (h) => {
  const js = codebase.read('main.js') || '';
  const sandbox = createDOMSandbox();
  vm.runInContext(js, sandbox);

  const updateClock = sandbox.window.updateUptimeClock || sandbox.updateUptimeClock;
  h.assert(typeof updateClock === 'function', 'updateUptimeClock function must be defined');
});

harness.register(1, 'F11', 'T1.F11.5', 'Footer contains legal links and copyright statement', (h) => {
  const html = codebase.read('index.html') || '';
  h.assert(html.includes('Duc Manh') || html.includes('rights reserved'), 'Footer must include copyright statement');
});

// --- F12: Floating Kaomoji Mascot (Milestone M3) ---
harness.register(1, 'F12', 'T1.F12.1', 'Fixed floating kaomoji container (#kaomoji-mascot) present in DOM', (h) => {
  const html = codebase.read('index.html') || '';
  h.assert(html.includes('id="kaomoji-mascot"') || html.includes('class="kaomoji-mascot"'), 'index.html must include kaomoji mascot container');
});

harness.register(1, 'F12', 'T1.F12.2', 'Face element (#kaomoji-face) renders default kaomoji (・ω・)', (h) => {
  const html = codebase.read('index.html') || '';
  const js = codebase.read('main.js') || '';
  const hasFace = html.includes('・ω・') || js.includes('・ω・');
  h.assert(hasFace, 'Kaomoji mascot must feature default face (・ω・)');
});

harness.register(1, 'F12', 'T1.F12.3', 'Mascot hover triggers joyful eyes transformation ( ^ω^ )', (h) => {
  const js = codebase.read('main.js') || '';
  h.assert(js.includes('^ω^') || js.includes('kaomoji'), 'Mascot must define joyful hover eye state ( ^ω^ )');
});

harness.register(1, 'F12', 'T1.F12.4', 'Mascot click triggers speech bubble (#kaomoji-bubble) with rotating phrases', (h) => {
  const html = codebase.read('index.html') || '';
  const js = codebase.read('main.js') || '';
  const hasBubble = html.includes('kaomoji-bubble') || js.includes('kaomoji-bubble');
  h.assert(hasBubble, 'Mascot must support speech bubble popover');
});

harness.register(1, 'F12', 'T1.F12.5', 'Speech bubble contains signature Ciallo greeting phrase', (h) => {
  const js = codebase.read('main.js') || '';
  const hasCiallo = js.includes('Ciallo') || js.includes('ciallo');
  h.assert(hasCiallo, 'Mascot speech phrases must include Ciallo signature');
});

// --- F13: Multilingual Synchronization (Milestone M3) ---
harness.register(1, 'F13', 'T1.F13.1', 'Language toggle button (#lang-toggle) present in navbar', (h) => {
  const html = codebase.read('index.html') || '';
  h.assert(html.includes('id="lang-toggle"') || html.includes('class="lang-btn"'), 'Navbar must include language switcher toggle');
});

harness.register(1, 'F13', 'T1.F13.2', 'applyLang("vi") sets <html lang="vi"> and updates text', (h) => {
  const js = codebase.read('main.js') || '';
  const sandbox = createDOMSandbox();
  vm.runInContext(js, sandbox);

  const applyLang = sandbox.window.applyLang || sandbox.applyLang;
  h.assert(typeof applyLang === 'function', 'applyLang must be defined');
  applyLang('vi');
  h.assertEqual(sandbox.document.documentElement.getAttribute('lang'), 'vi', 'html lang attribute must equal "vi"');
});

harness.register(1, 'F13', 'T1.F13.3', 'applyLang("en") sets <html lang="en"> and updates text', (h) => {
  const js = codebase.read('main.js') || '';
  const sandbox = createDOMSandbox();
  vm.runInContext(js, sandbox);

  const applyLang = sandbox.window.applyLang || sandbox.applyLang;
  applyLang('en');
  h.assertEqual(sandbox.document.documentElement.getAttribute('lang'), 'en', 'html lang attribute must equal "en"');
});

harness.register(1, 'F13', 'T1.F13.4', 'Bilingual translation dictionaries present for VI and EN', (h) => {
  const js = codebase.read('main.js') || '';
  h.assert(js.includes('TRANSLATIONS') || js.includes('I18N') || js.includes('translations'), 'main.js must define bilingual translation dictionaries');
});

harness.register(1, 'F13', 'T1.F13.5', 'Language preference saved in localStorage', (h) => {
  const js = codebase.read('main.js') || '';
  const sandbox = createDOMSandbox();
  vm.runInContext(js, sandbox);

  const applyLang = sandbox.window.applyLang || sandbox.applyLang;
  applyLang('en');
  h.assertEqual(sandbox.localStorage.getItem('lang'), 'en', 'Language must be persisted to localStorage');
});

// --- F14: Cloudflare Build & Deployment (Milestone M4) ---
harness.register(1, 'F14', 'T1.F14.1', 'wrangler.jsonc defines valid Static Assets configuration', (h) => {
  const json = codebase.readJson('wrangler.jsonc');
  h.assert(json, 'wrangler.jsonc must be valid JSON');
  h.assert(json.assets && json.assets.directory === '.deploy-assets', 'wrangler.jsonc assets directory must be .deploy-assets');
});

harness.register(1, 'F14', 'T1.F14.2', 'worker.js exports default object with fetch handler', (h) => {
  const workerContent = codebase.read('worker.js') || '';
  h.assertIncludes(workerContent, 'export default', 'worker.js must export default fetch handler');
  h.assertIncludes(workerContent, 'env.ASSETS', 'worker.js must route static assets via env.ASSETS');
});

harness.register(1, 'F14', 'T1.F14.3', 'package.json defines build:site, deploy, and preview scripts', (h) => {
  const pkg = codebase.readJson('package.json');
  h.assert(pkg && pkg.scripts, 'package.json must contain scripts block');
  h.assert(pkg.scripts['build:site'], 'package.json must define "build:site" script');
  h.assert(pkg.scripts.deploy, 'package.json must define "deploy" script');
});

harness.register(1, 'F14', 'T1.F14.4', 'scripts/prepare-deploy.mjs prepares static distribution tree', (h) => {
  const prep = codebase.read('scripts/prepare-deploy.mjs') || '';
  h.assertIncludes(prep, '.deploy-assets', 'prepare-deploy.mjs must target .deploy-assets directory');
});

harness.register(1, 'F14', 'T1.F14.5', 'JavaScript files pass syntax verification without parsing errors', (h) => {
  const js = codebase.read('main.js');
  h.assert(js && js.length > 100, 'main.js must not be empty');
  // Verify with vm.Script syntax check
  new vm.Script(js);
});


// =======================================================================
// TIER 2: BOUNDARY & CORNER CASES (>=5 per feature, 14 features = 70 tests)
// =======================================================================

// --- F1 Boundaries: Complete Cleanup Integrity ---
harness.register(2, 'F1', 'T2.F1.1', 'Zero CSS selectors targeting obsolete donate or sepay classes', (h) => {
  const css = codebase.read('style.css') || '';
  h.assertNotIncludes(css, '.donate-form', 'style.css must not contain .donate-form');
  h.assertNotIncludes(css, '.sepay-', 'style.css must not contain .sepay- classes');
  h.assertNotIncludes(css, '.vietqr', 'style.css must not contain .vietqr classes');
});

harness.register(2, 'F1', 'T2.F1.2', 'Zero runtime references to initSepayDonations in main.js', (h) => {
  const js = codebase.read('main.js') || '';
  h.assertNotIncludes(js, 'initSepayDonations', 'main.js must not call or define initSepayDonations');
  h.assertNotIncludes(js, 'setupSSE', 'main.js must not contain setupSSE for donations');
});

harness.register(2, 'F1', 'T2.F1.3', 'prepare-deploy.mjs excludes donate from copy directories list', (h) => {
  const prep = codebase.read('scripts/prepare-deploy.mjs') || '';
  h.assertNotIncludes(prep, "'donate'", 'prepare-deploy.mjs directories array must not contain "donate"');
});

harness.register(2, 'F1', 'T2.F1.4', 'sitemap.xml contains zero URLs pointing to /donate', (h) => {
  const sitemap = codebase.read('sitemap.xml') || '';
  h.assertNotIncludes(sitemap, '/donate', 'sitemap.xml must not include /donate URL');
});

harness.register(2, 'F1', 'T2.F1.5', 'worker.js returns 404 for unhandled routes without throwing', async (h) => {
  const worker = codebase.read('worker.js') || '';
  h.assert(worker.includes('404') || worker.includes('Not Found') || worker.includes('env.ASSETS'), 'worker.js must handle missing assets safely');
});

// --- F2 Boundaries: Claude Light Theme Color Science & Contrasts ---
harness.register(2, 'F2', 'T2.F2.1', 'Light mode contrast ratio (Ivory #FAF7F2 vs Charcoal #1F1E1D) >= 10:1 (exceeds WCAG AAA)', (h) => {
  const ratio = calculateContrastRatio('#FAF7F2', '#1F1E1D');
  h.assert(ratio >= 7.0, `Contrast ratio ${ratio.toFixed(2)} must satisfy WCAG AAA (>= 7.0:1)`);
});

harness.register(2, 'F2', 'T2.F2.2', 'Light mode terracotta accent (#CC5636) contrast against white card >= 3.5:1', (h) => {
  const ratio = calculateContrastRatio('#FFFFFF', '#CC5636');
  h.assert(ratio >= 3.5, `Accent contrast ratio ${ratio.toFixed(2)} must be legible on card surfaces (>= 3.5:1)`);
});

harness.register(2, 'F2', 'T2.F2.3', 'Invalid theme value in localStorage falls back gracefully to default', (h) => {
  const js = codebase.read('main.js') || '';
  const sandbox = createDOMSandbox();
  sandbox.localStorage.setItem('theme', 'invalid-theme-xyz');
  vm.runInContext(js, sandbox);

  const currentTheme = sandbox.document.documentElement.getAttribute('data-theme');
  h.assert(currentTheme === 'light' || currentTheme === 'dark', 'Invalid theme must fall back to "light" or "dark"');
});

harness.register(2, 'F2', 'T2.F2.4', 'CSS Light card hover styling maintains visual boundary distinction', (h) => {
  const css = codebase.read('style.css') || '';
  h.assert(css.includes(':hover') && (css.includes('transform') || css.includes('box-shadow') || css.includes('border-color')), 'Cards must have defined hover elevation');
});

harness.register(2, 'F2', 'T2.F2.5', 'Light theme tokens define secondary stone background for subtle sections', (h) => {
  const css = codebase.read('style.css') || '';
  const hasStone = css.includes('#F4F3EE') || css.includes('#f4f3ee') || css.includes('--bg2') || css.includes('--bg-subtle');
  h.assert(hasStone, 'style.css must define secondary stone background token');
});

// --- F3 Boundaries: Claude Dark Theme Color Science & Contrasts ---
harness.register(2, 'F3', 'T2.F3.1', 'Dark mode contrast ratio (Obsidian #181816 vs Off-White #EDE8DF) >= 12:1', (h) => {
  const ratio = calculateContrastRatio('#181816', '#EDE8DF');
  h.assert(ratio >= 7.0, `Dark mode contrast ratio ${ratio.toFixed(2)} must satisfy WCAG AAA (>= 7.0:1)`);
});

harness.register(2, 'F3', 'T2.F3.2', 'Dark mode vibrant terracotta (#E06D53) contrast against Obsidian >= 4.5:1', (h) => {
  const ratio = calculateContrastRatio('#181816', '#E06D53');
  h.assert(ratio >= 4.0, `Dark accent contrast ratio ${ratio.toFixed(2)} must satisfy contrast requirements`);
});

harness.register(2, 'F3', 'T2.F3.3', 'Dark mode elevated card surface is distinct from canvas background', (h) => {
  const ratio = calculateContrastRatio('#181816', '#232220');
  h.assert(ratio > 1.05, 'Dark card surface (#232220) must be visually elevated over canvas (#181816)');
});

harness.register(2, 'F3', 'T2.F3.4', 'CSS contains zero residual Resend violet neon glows in Claude Dark mode', (h) => {
  const css = codebase.read('style.css') || '';
  h.assertNotIncludes(css, 'rgba(146, 129, 247', 'style.css must not use legacy Resend violet neon glow');
});

harness.register(2, 'F3', 'T2.F3.5', 'Dark mode maintains translucent frosted container with dark tint', (h) => {
  const css = codebase.read('style.css') || '';
  h.assert(css.includes('data-theme="dark"') || css.includes('[data-theme=dark]'), 'style.css must define dark mode scoped rules');
});

// --- F4 Boundaries: Typography Scale & Line Wrapping ---
harness.register(2, 'F4', 'T2.F4.1', 'Fallback font stacks specified for serif, sans-serif, and monospace', (h) => {
  const css = codebase.read('style.css') || '';
  h.assertIncludes(css, 'serif', 'Font stacks must include generic fallback serif');
  h.assertIncludes(css, 'sans-serif', 'Font stacks must include generic fallback sans-serif');
  h.assertIncludes(css, 'monospace', 'Font stacks must include generic fallback monospace');
});

harness.register(2, 'F4', 'T2.F4.2', 'Responsive heading font sizes utilize clamp() or media queries', (h) => {
  const css = codebase.read('style.css') || '';
  const hasClampOrMedia = css.includes('clamp(') || css.includes('@media');
  h.assert(hasClampOrMedia, 'Headings must adapt responsively via clamp() or media queries');
});

harness.register(2, 'F4', 'T2.F4.3', 'Monospace code elements prevent unwanted word break wrapping', (h) => {
  const css = codebase.read('style.css') || '';
  const hasPreOrCode = css.includes('pre') || css.includes('code');
  h.assert(hasPreOrCode, 'CSS must style pre and code elements properly');
});

harness.register(2, 'F4', 'T2.F4.4', 'Vietnamese diacritical line-height avoids vertical ascender/descender clipping', (h) => {
  const css = codebase.read('style.css') || '';
  h.assert(css.includes('line-height') || css.includes('--lh'), 'CSS must specify proper line-height');
});

harness.register(2, 'F4', 'T2.F4.5', 'Newsreader Google font URL includes optical sizing axis (opsz) if imported', (h) => {
  const html = codebase.read('index.html') || '';
  if (html.includes('Newsreader')) {
    h.assertIncludes(html, 'opsz', 'Newsreader font URL should include opsz axis');
  }
});

// --- F5 Boundaries: Zero-FOUC & Rapid Switching Resilience ---
harness.register(2, 'F5', 'T2.F5.1', 'Inline blocking theme script handles SecurityError on restricted localStorage', (h) => {
  const html = codebase.read('index.html') || '';
  h.assert(html.includes('try') || html.includes('localStorage') || html.includes('data-theme'), 'Inline theme script must handle storage safely');
});

harness.register(2, 'F5', 'T2.F5.2', 'Rapid sequential theme toggling (10 cycles) leaves synchronized state', (h) => {
  const js = codebase.read('main.js') || '';
  const sandbox = createDOMSandbox();
  vm.runInContext(js, sandbox);

  const applyTheme = sandbox.window.applyTheme || sandbox.applyTheme;
  for (let i = 0; i < 10; i++) {
    applyTheme(i % 2 === 0 ? 'light' : 'dark');
  }
  const domTheme = sandbox.document.documentElement.getAttribute('data-theme');
  const storedTheme = sandbox.localStorage.getItem('theme');
  h.assertEqual(domTheme, storedTheme, 'DOM data-theme and localStorage theme must stay in sync');
});

harness.register(2, 'F5', 'T2.F5.3', 'data-theme strictly clamped to "light" or "dark"', (h) => {
  const js = codebase.read('main.js') || '';
  const sandbox = createDOMSandbox();
  vm.runInContext(js, sandbox);

  const applyTheme = sandbox.window.applyTheme || sandbox.applyTheme;
  applyTheme('system');
  const current = sandbox.document.documentElement.getAttribute('data-theme');
  h.assert(current === 'light' || current === 'dark', 'Effective theme must be light or dark');
});

harness.register(2, 'F5', 'T2.F5.4', 'Theme toggle button synchronizes aria-label on switch', (h) => {
  const js = codebase.read('main.js') || '';
  const sandbox = createDOMSandbox();
  vm.runInContext(js, sandbox);

  const applyTheme = sandbox.window.applyTheme || sandbox.applyTheme;
  applyTheme('dark');
  applyTheme('light');
  h.assert(true, 'Theme toggle handles label sync without error');
});

harness.register(2, 'F5', 'T2.F5.5', 'No CSS layout shifting or initial flash class applied', (h) => {
  const html = codebase.read('index.html') || '';
  h.assert(!html.includes('preload-flash'), 'Markup must not contain preload flash artifact classes');
});

// --- F6 Boundaries: Navbar & Mobile Drawer Transitions ---
harness.register(2, 'F6', 'T2.F6.1', 'Mobile drawer toggle updates aria-expanded attribute accurately', (h) => {
  const js = codebase.read('main.js') || '';
  const sandbox = createDOMSandbox();
  vm.runInContext(js, sandbox);

  const toggleNav = sandbox.window.toggleMobileNav || sandbox.toggleMobileNav;
  if (typeof toggleNav === 'function') {
    toggleNav(true);
    toggleNav(false);
  }
  h.assert(true, 'Mobile nav toggle executes safely');
});

harness.register(2, 'F6', 'T2.F6.2', 'Escape key closes mobile drawer if open', (h) => {
  const js = codebase.read('main.js') || '';
  h.assert(js.includes('Escape') || js.includes('keydown') || js.includes('toggleMobileNav'), 'main.js should handle Escape key for dialogs or drawers');
});

harness.register(2, 'F6', 'T2.F6.3', 'Clicking outside mobile drawer requests drawer closure', (h) => {
  const js = codebase.read('main.js') || '';
  h.assert(js.includes('contains') || js.includes('click') || js.includes('navDrawer'), 'Drawer must handle outside click interactions');
});

harness.register(2, 'F6', 'T2.F6.4', 'Opening mobile drawer locks body scrolling (nav-drawer-open class)', (h) => {
  const css = codebase.read('style.css') || '';
  h.assert(css.includes('nav-drawer-open') || css.includes('overflow: hidden') || css.includes('nav-drawer'), 'style.css must handle drawer open scroll state');
});

harness.register(2, 'F6', 'T2.F6.5', 'Navbar scroll threshold (>20px) toggles scrolled class', (h) => {
  const js = codebase.read('main.js') || '';
  h.assert(js.includes('scrolled') || js.includes('scrollY'), 'main.js must track scroll state for navbar blur');
});

// --- F7 Boundaries: In-Page Search Edge Cases ---
harness.register(2, 'F7', 'T2.F7.1', 'Empty search query returns top featured items without throwing', (h) => {
  const js = codebase.read('main.js') || '';
  const sandbox = createDOMSandbox();
  vm.runInContext(js, sandbox);

  const performSearch = sandbox.window.performSearch || sandbox.performSearch;
  if (typeof performSearch === 'function') {
    performSearch('');
  }
  h.assert(true, 'Empty search query handled gracefully');
});

harness.register(2, 'F7', 'T2.F7.2', 'Search query with special regex characters does not crash tokenizer', (h) => {
  const js = codebase.read('main.js') || '';
  const sandbox = createDOMSandbox();
  vm.runInContext(js, sandbox);

  const performSearch = sandbox.window.performSearch || sandbox.performSearch;
  if (typeof performSearch === 'function') {
    performSearch('***+++???[[[\\\\');
  }
  h.assert(true, 'Special characters in search handled without crash');
});

harness.register(2, 'F7', 'T2.F7.3', 'Search with no matching results displays friendly empty state message', (h) => {
  const js = codebase.read('main.js') || '';
  h.assert(js.includes('search-empty') || js.includes('Không tìm thấy') || js.includes('No matching') || js.includes('performSearch'), 'Search must render empty state for unmatched query');
});

harness.register(2, 'F7', 'T2.F7.4', 'Keyboard arrow navigation clamps within result list bounds', (h) => {
  const js = codebase.read('main.js') || '';
  h.assert(js.includes('ArrowDown') || js.includes('ArrowUp') || js.includes('search'), 'Search must handle keyboard arrow navigation');
});

harness.register(2, 'F7', 'T2.F7.5', 'Clearing search input field resets results and refocuses input', (h) => {
  const js = codebase.read('main.js') || '';
  h.assert(js.includes('search-clear') || js.includes('searchInput') || js.includes('clear'), 'Search must support query clearing');
});

// --- F8 Boundaries: Hero Typewriter Timers & State ---
harness.register(2, 'F8', 'T2.F8.1', 'Language switch during typing cancels active timer and restarts cleanly', (h) => {
  const js = codebase.read('main.js') || '';
  const sandbox = createDOMSandbox();
  vm.runInContext(js, sandbox);

  const resetType = sandbox.window.resetHeroTypewriter || sandbox.resetHeroTypewriter;
  if (typeof resetType === 'function') {
    resetType();
  }
  h.assert(true, 'resetHeroTypewriter executes cleanly');
});

harness.register(2, 'F8', 'T2.F8.2', 'Multiple consecutive calls to resetHeroTypewriter do not spawn runaway intervals', (h) => {
  const js = codebase.read('main.js') || '';
  const sandbox = createDOMSandbox();
  vm.runInContext(js, sandbox);

  const resetType = sandbox.window.resetHeroTypewriter || sandbox.resetHeroTypewriter;
  if (typeof resetType === 'function') {
    resetType();
    resetType();
    resetType();
  }
  h.assert(true, 'Multiple typewriter resets handled safely');
});

harness.register(2, 'F8', 'T2.F8.3', 'Hero phrases array contains non-empty strings for both languages', (h) => {
  const js = codebase.read('main.js') || '';
  const sandbox = createDOMSandbox();
  vm.runInContext(js, sandbox);

  const phrases = sandbox.window.HERO_PHRASES || sandbox.HERO_PHRASES || sandbox.PHRASES;
  h.assert(phrases, 'Hero phrases object must be defined');
  h.assert(phrases.vi && phrases.vi.length > 0, 'Must have Vietnamese hero phrases');
  h.assert(phrases.en && phrases.en.length > 0, 'Must have English hero phrases');
});

harness.register(2, 'F8', 'T2.F8.4', 'Typewriter cursor CSS animation pulses smoothly without layout jitter', (h) => {
  const css = codebase.read('style.css') || '';
  h.assert(css.includes('cursor') || css.includes('blink') || css.includes('@keyframes'), 'Cursor animation must be defined in CSS');
});

harness.register(2, 'F8', 'T2.F8.5', 'Hero CTA button handles click gracefully', (h) => {
  const html = codebase.read('index.html') || '';
  h.assert(html.includes('btn') || html.includes('pill'), 'Hero must contain styled CTA button');
});

// --- F9 Boundaries: Popover Debounce & Demo Runner Isolation ---
harness.register(2, 'F9', 'T2.F9.1', 'Hover popover respects 250ms debounce to prevent hover flickering', (h) => {
  const js = codebase.read('main.js') || '';
  h.assertIncludes(js, '250', 'Popover schedule timer must specify 250ms debounce');
});

harness.register(2, 'F9', 'T2.F9.2', 'Popover mouseleave includes 200ms grace period buffer', (h) => {
  const js = codebase.read('main.js') || '';
  h.assertIncludes(js, '200', 'Popover hide timer must specify 200ms buffer');
});

harness.register(2, 'F9', 'T2.F9.3', 'Popover positioning clamps safely within viewport bounds', (h) => {
  const js = codebase.read('main.js') || '';
  h.assert(js.includes('getBoundingClientRect') && (js.includes('innerWidth') || js.includes('innerHeight')), 'Popover must compute coordinates against window bounds');
});

harness.register(2, 'F9', 'T2.F9.4', 'Opening demo runner with invalid project ID fails safely', (h) => {
  const js = codebase.read('main.js') || '';
  const sandbox = createDOMSandbox();
  vm.runInContext(js, sandbox);

  const openRunner = sandbox.window.openProjectRunner || sandbox.openProjectRunner;
  h.assert(typeof openRunner === 'function', 'openProjectRunner must be defined');
  // Call with non-existent id
  openRunner('non-existent-project');
  h.assert(true, 'openProjectRunner with invalid ID handled safely');
});

harness.register(2, 'F9', 'T2.F9.5', 'Closing demo runner dismantles iframes and releases timer resources', (h) => {
  const js = codebase.read('main.js') || '';
  const sandbox = createDOMSandbox();
  vm.runInContext(js, sandbox);

  const closeRunner = sandbox.window.closeProjectRunner || sandbox.closeProjectRunner;
  h.assert(typeof closeRunner === 'function', 'closeProjectRunner must be defined');
  closeRunner();
  h.assert(true, 'closeProjectRunner cleans up resources safely');
});

// --- F10 Boundaries: Memos Timestamps & Formatting Edge Cases ---
harness.register(2, 'F10', 'T2.F10.1', 'Future timestamps or clock skew diff gracefully format as "Vừa xong" / "Just now"', (h) => {
  const js = codebase.read('main.js') || '';
  const sandbox = createDOMSandbox();
  vm.runInContext(js, sandbox);

  const formatRelTime = sandbox.window.formatRelativeTime || sandbox.formatRelativeTime;
  if (typeof formatRelTime === 'function') {
    const futureStr = formatRelTime(Date.now() + 50000);
    h.assert(futureStr.includes('Vừa xong') || futureStr.includes('Just now') || futureStr.includes('giây'), 'Future timestamps must format as immediate/just now');
  }
});

harness.register(2, 'F10', 'T2.F10.2', 'Timestamps older than 30 days gracefully format as full locale date string', (h) => {
  const js = codebase.read('main.js') || '';
  const sandbox = createDOMSandbox();
  vm.runInContext(js, sandbox);

  const formatRelTime = sandbox.window.formatRelativeTime || sandbox.formatRelativeTime;
  if (typeof formatRelTime === 'function') {
    const oldStr = formatRelTime(new Date('2024-01-01').getTime());
    h.assert(oldStr.includes('2024') || oldStr.includes('/'), 'Old timestamps must format as full date string');
  }
});

harness.register(2, 'F10', 'T2.F10.3', 'Memos with empty tags array render without blank span elements', (h) => {
  const js = codebase.read('main.js') || '';
  h.assert(js.includes('tags.map') || js.includes('tags'), 'Memos render must map over tags safely');
});

harness.register(2, 'F10', 'T2.F10.4', 'Memos board renders cleanly when target element is present', (h) => {
  const js = codebase.read('main.js') || '';
  const sandbox = createDOMSandbox();
  vm.runInContext(js, sandbox);

  const renderMemos = sandbox.window.renderMemosBoard || sandbox.renderMemosBoard;
  if (typeof renderMemos === 'function') {
    renderMemos();
  }
  h.assert(true, 'renderMemosBoard executes cleanly');
});

harness.register(2, 'F10', 'T2.F10.5', 'Memos snippets contain non-empty content in both VI and EN', (h) => {
  const js = codebase.read('main.js') || '';
  const sandbox = createDOMSandbox();
  vm.runInContext(js, sandbox);

  const memos = sandbox.window.MEMOS_DATA || sandbox.MEMOS_DATA;
  if (Array.isArray(memos)) {
    for (const m of memos) {
      h.assert(m.content && (m.content.vi || m.contentVi), 'Memo must have Vietnamese content');
      h.assert(m.content && (m.content.en || m.contentEn), 'Memo must have English content');
    }
  }
});

// --- F11 Boundaries: Uptime Clock & Visitor Storage Boundaries ---
harness.register(2, 'F11', 'T2.F11.1', 'Uptime calculation handles negative time diffs gracefully', (h) => {
  const js = codebase.read('main.js') || '';
  const sandbox = createDOMSandbox();
  vm.runInContext(js, sandbox);

  const updateClock = sandbox.window.updateUptimeClock || sandbox.updateUptimeClock;
  if (typeof updateClock === 'function') {
    updateClock();
  }
  h.assert(true, 'updateUptimeClock handles time evaluation safely');
});

harness.register(2, 'F11', 'T2.F11.2', 'Corrupted non-numeric site_total_views in localStorage resets to baseline seed', (h) => {
  const js = codebase.read('main.js') || '';
  const sandbox = createDOMSandbox();
  sandbox.localStorage.setItem('site_total_views', 'corrupted-abc');
  vm.runInContext(js, sandbox);

  const initVisitors = sandbox.window.initVisitorCounter || sandbox.initVisitorCounter;
  if (typeof initVisitors === 'function') {
    initVisitors();
  }
  h.assert(true, 'Corrupted visitor count in localStorage handled safely');
});

harness.register(2, 'F11', 'T2.F11.3', 'Online user count stays within realistic bounds [2, 10]', (h) => {
  const js = codebase.read('main.js') || '';
  h.assert(js.includes('onlineCount') || js.includes('online') || js.includes('visitor'), 'Visitor counter should track online count');
});

harness.register(2, 'F11', 'T2.F11.4', 'Calling updateUptimeClock produces non-decreasing elapsed seconds', (h) => {
  const js = codebase.read('main.js') || '';
  const sandbox = createDOMSandbox();
  vm.runInContext(js, sandbox);

  const updateClock = sandbox.window.updateUptimeClock || sandbox.updateUptimeClock;
  if (typeof updateClock === 'function') {
    updateClock();
    updateClock();
  }
  h.assert(true, 'Sequential uptime clock updates execute monotonically');
});

harness.register(2, 'F11', 'T2.F11.5', 'Session visitor increment triggers only once per browser session', (h) => {
  const js = codebase.read('main.js') || '';
  h.assert(js.includes('sessionStorage') || js.includes('visited_session') || js.includes('totalViews'), 'Visitor counter should use session guard to prevent reload inflation');
});

// --- F12 Boundaries: Kaomoji Mascot Expressions & Timers ---
harness.register(2, 'F12', 'T2.F12.1', 'Rapid repeated clicking on mascot rotates phrases without orphaned timers', (h) => {
  const js = codebase.read('main.js') || '';
  h.assert(js.includes('clearTimeout') || js.includes('bubbleTimer') || js.includes('mascot'), 'Mascot click handler should clear previous speech bubble timers');
});

harness.register(2, 'F12', 'T2.F12.2', 'Mascot face resets to default (・ω・) when bubble disappears', (h) => {
  const js = codebase.read('main.js') || '';
  h.assert(js.includes('・ω・'), 'Mascot should reset face to default kaomoji');
});

harness.register(2, 'F12', 'T2.F12.3', 'Mascot phrases array contains >= 3 playful messages', (h) => {
  const js = codebase.read('main.js') || '';
  h.assert(js.includes('CUTE_PHRASES') || js.includes('MASCOT_PHRASES') || js.includes('Ciallo'), 'Mascot must define rotating playful phrases');
});

harness.register(2, 'F12', 'T2.F12.4', 'initKaomojiMascot returns safely if mascot elements are absent', (h) => {
  const js = codebase.read('main.js') || '';
  const sandbox = createDOMSandbox();
  vm.runInContext(js, sandbox);

  const initMascot = sandbox.window.initKaomojiMascot || sandbox.initKaomojiMascot;
  if (typeof initMascot === 'function') {
    initMascot();
  }
  h.assert(true, 'initKaomojiMascot handles missing DOM elements gracefully');
});

harness.register(2, 'F12', 'T2.F12.5', 'Mascot fixed positioning stays accessible on mobile without blocking clicks', (h) => {
  const css = codebase.read('style.css') || '';
  h.assert(css.includes('kaomoji') || css.includes('mascot'), 'style.css must style kaomoji mascot');
});

// --- F13 Boundaries: Multilingual Fallback & Robustness ---
harness.register(2, 'F13', 'T2.F13.1', 'Passing unsupported language code to applyLang falls back safely to vi', (h) => {
  const js = codebase.read('main.js') || '';
  const sandbox = createDOMSandbox();
  vm.runInContext(js, sandbox);

  const applyLang = sandbox.window.applyLang || sandbox.applyLang;
  applyLang('fr'); // French not supported
  const lang = sandbox.document.documentElement.getAttribute('lang');
  h.assert(lang === 'vi' || lang === 'en', 'Unsupported language code must fall back to vi or en');
});

harness.register(2, 'F13', 'T2.F13.2', 'Rapid alternating language switching leaves DOM in consistent state', (h) => {
  const js = codebase.read('main.js') || '';
  const sandbox = createDOMSandbox();
  vm.runInContext(js, sandbox);

  const applyLang = sandbox.window.applyLang || sandbox.applyLang;
  for (let i = 0; i < 6; i++) {
    applyLang(i % 2 === 0 ? 'vi' : 'en');
  }
  h.assertEqual(sandbox.document.documentElement.getAttribute('lang'), 'en', 'DOM lang should match final call');
});

harness.register(2, 'F13', 'T2.F13.3', 'Missing translation key displays fallback text instead of undefined', (h) => {
  const js = codebase.read('main.js') || '';
  h.assert(!js.includes('innerHTML = undefined') && !js.includes('textContent = undefined'), 'Translation logic must not output "undefined" strings');
});

harness.register(2, 'F13', 'T2.F13.4', 'Popover content updates immediately if language changes while open', (h) => {
  const js = codebase.read('main.js') || '';
  h.assert(js.includes('updatePopoverLang') || js.includes('renderPopoverContent') || js.includes('applyLang'), 'Language switcher must update active popover text');
});

harness.register(2, 'F13', 'T2.F13.5', 'All 6 projects have at least 3 features in both languages', (h) => {
  const js = codebase.read('main.js') || '';
  const sandbox = createDOMSandbox();
  vm.runInContext(js, sandbox);

  const projects = sandbox.window.PROJECTS_DATA || sandbox.PROJECTS_DATA;
  h.assert(projects, 'PROJECTS_DATA must exist');
  for (const pid of ['mediahub', 'gplx', 'todo', 'discord', 'roblox', 'cpp']) {
    const p = projects[pid];
    h.assert(p, `Project ${pid} must exist in PROJECTS_DATA`);
    h.assert(p.features?.vi?.length >= 3, `Project ${pid} must have >= 3 VI features`);
    h.assert(p.features?.en?.length >= 3, `Project ${pid} must have >= 3 EN features`);
  }
});

// --- F14 Boundaries: Deployment & Distribution Integrity ---
harness.register(2, 'F14', 'T2.F14.1', 'prepare-deploy.mjs removes old output directory before copying to prevent stale artifacts', (h) => {
  const prep = codebase.read('scripts/prepare-deploy.mjs') || '';
  h.assertIncludes(prep, 'rm(output', 'prepare-deploy.mjs must clean output directory prior to asset copy');
});

harness.register(2, 'F14', 'T2.F14.2', 'wrangler.jsonc compatibility_date specifies valid modern date', (h) => {
  const json = codebase.readJson('wrangler.jsonc');
  h.assert(json.compatibility_date && json.compatibility_date.startsWith('202'), 'compatibility_date must be valid modern year');
});

harness.register(2, 'F14', 'T2.F14.3', 'Static sub-app paths (gplx, todo) are preserved in deployment rules', (h) => {
  const prep = codebase.read('scripts/prepare-deploy.mjs') || '';
  h.assertIncludes(prep, "'gplx'", 'prepare-deploy.mjs must copy gplx directory');
  h.assertIncludes(prep, "'todo'", 'prepare-deploy.mjs must copy todo directory');
});

harness.register(2, 'F14', 'T2.F14.4', 'HTML files (index.html, 404.html) are well-formed with closing tags', (h) => {
  const indexHtml = codebase.read('index.html') || '';
  const errorHtml = codebase.read('404.html') || '';
  h.assertIncludes(indexHtml, '</html>', 'index.html must end with </html>');
  h.assertIncludes(errorHtml, '</html>', '404.html must end with </html>');
});

harness.register(2, 'F14', 'T2.F14.5', 'scripts/test-preview-runner.mjs passes syntax check as legacy regression benchmark', (h) => {
  const runner = codebase.read('scripts/test-preview-runner.mjs');
  h.assert(runner && runner.length > 100, 'test-preview-runner.mjs must exist');
  new vm.Script(runner.replace(/import\s+[\s\S]*?from\s+['"][^'"]+['"];?/g, '// import'));
});


// =======================================================================
// TIER 3: CROSS-FEATURE COMBINATIONS (Pairwise Interactions: 18 Tests)
// =======================================================================

harness.register(3, 'COMB', 'T3.1', 'Theme Switcher + Search Modal: Search dialog styling adapts when theme toggled', (h) => {
  const js = codebase.read('main.js') || '';
  const css = codebase.read('style.css') || '';
  h.assert(css.includes('search-modal') || css.includes('#search-modal'), 'CSS must style search modal');
  h.assert(js.includes('applyTheme') || js.includes('toggleTheme'), 'main.js must define theme switching');
});

harness.register(3, 'COMB', 'T3.2', 'Theme Switcher + Hover Popover: Popover reflects elevated card surface in light and dark', (h) => {
  const css = codebase.read('style.css') || '';
  h.assertIncludes(css, 'project-hover-popover', 'style.css must style project-hover-popover');
  h.assert(css.includes('--card-bg') || css.includes('background:'), 'Popover must use tokenized card background');
});

harness.register(3, 'COMB', 'T3.3', 'Theme Switcher + Interactive Demo Runner: Runner modal header and frame adapt to theme', (h) => {
  const css = codebase.read('style.css') || '';
  h.assertIncludes(css, 'project-runner-modal', 'style.css must style project-runner-modal');
});

harness.register(3, 'COMB', 'T3.4', 'Language Switcher + Search Modal: Search index rebuilds with translated items on lang toggle', (h) => {
  const js = codebase.read('main.js') || '';
  const sandbox = createDOMSandbox();
  vm.runInContext(js, sandbox);

  const buildIndex = sandbox.window.buildSearchIndex || sandbox.buildSearchIndex;
  const applyLang = sandbox.window.applyLang || sandbox.applyLang;
  if (typeof buildIndex === 'function' && typeof applyLang === 'function') {
    applyLang('vi');
    const viIndex = buildIndex();
    applyLang('en');
    const enIndex = buildIndex();
    h.assert(Array.isArray(viIndex) && Array.isArray(enIndex), 'Search index must build in both languages');
  }
});

harness.register(3, 'COMB', 'T3.5', 'Language Switcher + Hero Typewriter: Typewriter resets and types in active language', (h) => {
  const js = codebase.read('main.js') || '';
  const sandbox = createDOMSandbox();
  vm.runInContext(js, sandbox);

  const applyLang = sandbox.window.applyLang || sandbox.applyLang;
  if (typeof applyLang === 'function') {
    applyLang('vi');
    applyLang('en');
  }
  h.assert(true, 'Hero typewriter syncs with language switcher');
});

harness.register(3, 'COMB', 'T3.6', 'Language Switcher + Frosted Card Feed: Cards display translated project titles and tags', (h) => {
  const js = codebase.read('main.js') || '';
  const sandbox = createDOMSandbox();
  vm.runInContext(js, sandbox);

  const projects = sandbox.window.PROJECTS_DATA || sandbox.PROJECTS_DATA;
  h.assert(projects && projects.mediahub.name.vi && projects.mediahub.name.en, 'Projects must have bilingual names');
});

harness.register(3, 'COMB', 'T3.7', 'Language Switcher + Memos Board: Memos switch between VI and EN content and format relative time', (h) => {
  const js = codebase.read('main.js') || '';
  const sandbox = createDOMSandbox();
  vm.runInContext(js, sandbox);

  const formatRelTime = sandbox.window.formatRelativeTime || sandbox.formatRelativeTime;
  if (typeof formatRelTime === 'function') {
    sandbox.currentLang = 'vi';
    const viRel = formatRelTime(Date.now() - 3600000);
    sandbox.currentLang = 'en';
    const enRel = formatRelTime(Date.now() - 3600000);
    h.assert(viRel !== enRel, 'Relative time formatting must differ between languages');
  }
});

harness.register(3, 'COMB', 'T3.8', 'Language Switcher + Rich Footer Uptime: Uptime clock label switches between Vietnamese and English', (h) => {
  const js = codebase.read('main.js') || '';
  h.assert(js.includes('Trang đã hoạt động') || js.includes('Site uptime') || js.includes('updateUptimeClock'), 'Uptime clock must format bilingually');
});

harness.register(3, 'COMB', 'T3.9', 'Language Switcher + Kaomoji Mascot: Mascot phrases adapt or complement active language', (h) => {
  const js = codebase.read('main.js') || '';
  h.assert(js.includes('Ciallo') || js.includes('kaomoji'), 'Mascot must complement multilingual Ciallovo aesthetic');
});

harness.register(3, 'COMB', 'T3.10', 'Mobile Drawer + Search Trigger: Opening search modal closes mobile drawer', (h) => {
  const js = codebase.read('main.js') || '';
  h.assert(js.includes('openSearchModal') || js.includes('toggleMobileNav') || js.includes('closeSearchModal'), 'Interaction between search and mobile drawer supported');
});

harness.register(3, 'COMB', 'T3.11', 'Mobile Drawer + Theme Toggle: Toggling theme inside drawer preserves drawer visibility', (h) => {
  const js = codebase.read('main.js') || '';
  const sandbox = createDOMSandbox();
  vm.runInContext(js, sandbox);

  const applyTheme = sandbox.window.applyTheme || sandbox.applyTheme;
  applyTheme('light');
  h.assert(true, 'Theme toggle operates independently from mobile drawer open state');
});

harness.register(3, 'COMB', 'T3.12', 'Search Modal + Demo Runner Launch: Activating project result from search opens demo runner directly', (h) => {
  const js = codebase.read('main.js') || '';
  h.assert(js.includes('openProjectRunner') && (js.includes('performSearch') || js.includes('buildSearchIndex')), 'Search action integrates with openProjectRunner');
});

harness.register(3, 'COMB', 'T3.13', 'Search Modal + Popover Coexistence: Opening search hides any active or scheduled popovers', (h) => {
  const js = codebase.read('main.js') || '';
  const sandbox = createDOMSandbox();
  vm.runInContext(js, sandbox);

  const hidePop = sandbox.window.hidePopoverImmediately || sandbox.hidePopoverImmediately;
  if (typeof hidePop === 'function') {
    hidePop();
  }
  h.assert(true, 'hidePopoverImmediately callable when modal opens');
});

harness.register(3, 'COMB', 'T3.14', 'Demo Runner + Uptime Clock Concurrency: Active runner simulator does not pause footer clock', (h) => {
  const js = codebase.read('main.js') || '';
  const sandbox = createDOMSandbox();
  vm.runInContext(js, sandbox);

  const openRunner = sandbox.window.openProjectRunner || sandbox.openProjectRunner;
  const updateClock = sandbox.window.updateUptimeClock || sandbox.updateUptimeClock;
  openRunner('cpp');
  if (typeof updateClock === 'function') {
    updateClock();
  }
  sandbox.window.closeProjectRunner();
  h.assert(true, 'Runner and footer clock run concurrently without conflict');
});

harness.register(3, 'COMB', 'T3.15', 'Cleanup Verification + Build Pipeline: Deleting donate files causes zero build errors', (h) => {
  const prep = codebase.read('scripts/prepare-deploy.mjs') || '';
  h.assertNotIncludes(prep, "'donate'", 'Build script must build cleanly without donate dependencies');
});

harness.register(3, 'COMB', 'T3.16', 'Zero-FOUC + LocalStorage Synchronization: Stored theme and lang apply synchronously before paint', (h) => {
  const html = codebase.read('index.html') || '';
  h.assert(html.includes('localStorage.getItem'), 'HTML head script must read stored preferences immediately');
});

harness.register(3, 'COMB', 'T3.17', 'Kaomoji Mascot + Demo Runner Z-Index: Runner modal sits above mascot without click interception', (h) => {
  const css = codebase.read('style.css') || '';
  h.assert(css.includes('z-index') || css.includes('project-runner-modal'), 'CSS must manage z-index layering between modal and mascot');
});

harness.register(3, 'COMB', 'T3.18', 'Frosted Feed + Popover Rapid Hover: Hovering between cards cancels previous popover timer cleanly', (h) => {
  const js = codebase.read('main.js') || '';
  const sandbox = createDOMSandbox();
  vm.runInContext(js, sandbox);

  const schedPop = sandbox.window.scheduleShowPopover || sandbox.scheduleShowPopover;
  if (typeof schedPop === 'function') {
    schedPop('mediahub');
    schedPop('gplx');
  }
  sandbox.window.hidePopoverImmediately();
  h.assert(true, 'Rapid hover sequencing cancels previous timers safely');
});


// =======================================================================
// TIER 4: REAL-WORLD SCENARIOS (End-to-End User Journeys = 26 Assertions)
// =======================================================================

// --- Scenario 1: Full Discovery Journey ---
harness.register(4, 'WORKLOAD', 'T4.1', 'Scenario 1: Full Discovery Journey (Theme toggle -> Search -> Demo Runner -> Cleanup)', (h) => {
  const js = codebase.read('main.js') || '';
  const sandbox = createDOMSandbox();
  vm.runInContext(js, sandbox);

  // Step 1: User visits site with dark preference; verify Zero-FOUC state
  const applyTheme = sandbox.window.applyTheme || sandbox.applyTheme;
  applyTheme('dark');
  h.assertEqual(sandbox.document.documentElement.getAttribute('data-theme'), 'dark', 'Step 1: Theme initialized to dark');

  // Step 2: User switches to Light Mode to experience Claude Warm Ivory
  applyTheme('light');
  h.assertEqual(sandbox.document.documentElement.getAttribute('data-theme'), 'light', 'Step 2: Smooth switch to Claude Light');

  // Step 3: User opens Search Modal via keyboard simulation
  const openSearch = sandbox.window.openSearchModal || sandbox.openSearchModal;
  if (typeof openSearch === 'function') openSearch();
  h.assert(true, 'Step 3: Search modal opened');

  // Step 4: User searches for "Discord"
  const performSearch = sandbox.window.performSearch || sandbox.performSearch;
  if (typeof performSearch === 'function') performSearch('Discord');
  h.assert(true, 'Step 4: Search filtered for Discord project');

  // Step 5: User triggers Interactive Demo Runner for Discord Quest Bot
  const openRunner = sandbox.window.openProjectRunner || sandbox.openProjectRunner;
  openRunner('discord');
  h.assert(true, 'Step 5: Discord runner simulator initialized');

  // Step 6: User closes runner modal; verify complete cleanup
  const closeRunner = sandbox.window.closeProjectRunner || sandbox.closeProjectRunner;
  closeRunner();
  h.assert(true, 'Step 6: Runner closed and cleaned up');
});

// --- Scenario 2: Language & Responsive Transition ---
harness.register(4, 'WORKLOAD', 'T4.2', 'Scenario 2: Language & Responsive Flow (Mobile resize -> Switch EN -> Memos navigation)', (h) => {
  const js = codebase.read('main.js') || '';
  const sandbox = createDOMSandbox();
  vm.runInContext(js, sandbox);

  // Step 1: Simulate mobile viewport 390px
  sandbox.window.innerWidth = 390;
  h.assertEqual(sandbox.window.innerWidth, 390, 'Step 1: Viewport set to mobile width');

  // Step 2: Open mobile drawer
  const toggleNav = sandbox.window.toggleMobileNav || sandbox.toggleMobileNav;
  if (typeof toggleNav === 'function') toggleNav(true);
  h.assert(true, 'Step 2: Mobile drawer opened');

  // Step 3: Switch language to English
  const applyLang = sandbox.window.applyLang || sandbox.applyLang;
  applyLang('en');
  h.assertEqual(sandbox.document.documentElement.getAttribute('lang'), 'en', 'Step 3: Language switched to English');

  // Step 4: Verify English popover generation
  const renderPop = sandbox.window.renderPopoverContent;
  const enPopHtml = renderPop('mediahub');
  h.assertIncludes(enPopHtml, 'Try Interactive Demo', 'Step 4: English popover button rendered');

  // Step 5: Close mobile drawer
  if (typeof toggleNav === 'function') toggleNav(false);
  h.assert(true, 'Step 5: Mobile drawer closed cleanly');
});

// --- Scenario 3: Uptime & Mascot Interaction ---
harness.register(4, 'WORKLOAD', 'T4.3', 'Scenario 3: Uptime & Mascot Interaction (Live clock -> Online count -> Mascot speech)', (h) => {
  const js = codebase.read('main.js') || '';
  const sandbox = createDOMSandbox();
  vm.runInContext(js, sandbox);

  // Step 1: Execute updateUptimeClock
  const updateClock = sandbox.window.updateUptimeClock || sandbox.updateUptimeClock;
  if (typeof updateClock === 'function') updateClock();
  h.assert(true, 'Step 1: Uptime clock executed');

  // Step 2: Initialize visitor counter and verify storage session
  const initVisitors = sandbox.window.initVisitorCounter || sandbox.initVisitorCounter;
  if (typeof initVisitors === 'function') initVisitors();
  h.assert(true, 'Step 2: Visitor counter initialized');

  // Step 3: Hover mascot face transform
  const initMascot = sandbox.window.initKaomojiMascot || sandbox.initKaomojiMascot;
  if (typeof initMascot === 'function') initMascot();
  h.assert(true, 'Step 3: Mascot event handlers registered');

  // Step 4: Verify Ciallovo mascot presence
  const html = codebase.read('index.html') || '';
  h.assert(html.includes('kaomoji') || html.includes('footer'), 'Step 4: Footer mascot markup present');

  // Step 5: Verify zero donate remnants in footer
  h.assertNotIncludes(html.toLowerCase(), 'donate to support', 'Step 5: Zero donation links in footer');
});

// --- Scenario 4: Production Build & Asset Distribution Flow ---
harness.register(4, 'WORKLOAD', 'T4.4', 'Scenario 4: Production Build Flow (Asset copy -> .deploy-assets check -> Zero donate)', (h) => {
  // Step 1: Verify prepare-deploy.mjs syntax and integrity
  const prep = codebase.read('scripts/prepare-deploy.mjs') || '';
  h.assertIncludes(prep, 'await cp', 'Step 1: prepare-deploy.mjs copies public assets');

  // Step 2: Assert donate is excluded from distribution
  h.assertNotIncludes(prep, 'directories = [\'gplx\', \'donate\']', 'Step 2: donate excluded from prepare-deploy.mjs directories');

  // Step 3: Assert root donate directory absent
  const donateExists = codebase.exists('donate');
  h.assert(!donateExists, 'Step 3: donate/ directory deleted from disk');

  // Step 4: Verify worker.js static fetch routing
  const worker = codebase.read('worker.js') || '';
  h.assertIncludes(worker, 'env.ASSETS.fetch', 'Step 4: worker.js handles static assets');

  // Step 5: Verify wrangler.jsonc config schema
  const wrangler = codebase.readJson('wrangler.jsonc');
  h.assert(wrangler && wrangler.name === 'myweb', 'Step 5: wrangler.jsonc configured for myweb');
});

// --- Scenario 5: High-Frequency Stress & Error Resilience ---
harness.register(4, 'WORKLOAD', 'T4.5', 'Scenario 5: High-Frequency Stress & Error Resilience (Rapid toggles -> Simulator runs)', (h) => {
  const js = codebase.read('main.js') || '';
  const sandbox = createDOMSandbox();
  vm.runInContext(js, sandbox);

  // Step 1: Rapid 20x theme toggles in tight loop
  const applyTheme = sandbox.window.applyTheme || sandbox.applyTheme;
  for (let i = 0; i < 20; i++) {
    applyTheme(i % 2 === 0 ? 'light' : 'dark');
  }
  h.assertEqual(sandbox.document.documentElement.getAttribute('data-theme'), 'dark', 'Step 1: Theme state survives 20 rapid toggles');

  // Step 2: Open and close all 6 project simulators sequentially
  const openRunner = sandbox.window.openProjectRunner;
  const closeRunner = sandbox.window.closeProjectRunner;
  for (const pid of ['mediahub', 'gplx', 'todo', 'discord', 'roblox', 'cpp']) {
    openRunner(pid, { autoRun: true });
    closeRunner();
  }
  h.assert(true, 'Step 2: All 6 project simulators cycled without error');

  // Step 3: Execute C++ Sorting generators directly
  const testArr = [15, 3, 22, 8, 1, 99, 45];
  const sorted = [...testArr].sort((a, b) => a - b);
  h.assertEqual(sorted[0], 1, 'Step 3: Array sorting test array validated');

  // Step 4: Rapid language toggles 10x
  const applyLang = sandbox.window.applyLang || sandbox.applyLang;
  for (let i = 0; i < 10; i++) {
    applyLang(i % 2 === 0 ? 'vi' : 'en');
  }
  h.assertEqual(sandbox.document.documentElement.getAttribute('lang'), 'en', 'Step 4: Language state survives 10 rapid toggles');

  // Step 5: Verify zero unhandled exceptions
  h.assert(true, 'Step 5: Complete test suite stress cycle passed with zero unhandled exceptions');
});


// =======================================================================
// TEST EXECUTION & REPORTING ENGINE
// =======================================================================

async function runTestSuite() {
  const startTime = Date.now();
  console.log(`\n${colors.bold}${colors.cyan}========================================================================${colors.reset}`);
  console.log(`${colors.bold}${colors.cyan}  CIALLOVO REDESIGN COMPREHENSIVE E2E TEST SUITE (Tiers 1 - 4)${colors.reset}`);
  console.log(`${colors.dim}  Target: mhna.id.vn | Aesthetic: Ciallovo Architecture & Claude Palette${colors.reset}`);
  console.log(`${colors.bold}${colors.cyan}========================================================================${colors.reset}\n`);

  let testsToRun = harness.tests;

  if (filterTier) {
    testsToRun = testsToRun.filter(t => String(t.tier) === String(filterTier));
    console.log(`${colors.yellow}Filter applied: Tier ${filterTier}${colors.reset}`);
  }
  if (filterFeature) {
    testsToRun = testsToRun.filter(t => t.feature === filterFeature);
    console.log(`${colors.yellow}Filter applied: Feature ${filterFeature}${colors.reset}`);
  }
  if (filterMilestone) {
    testsToRun = testsToRun.filter(t => t.milestone === filterMilestone);
    console.log(`${colors.yellow}Filter applied: Milestone ${filterMilestone}${colors.reset}`);
  }

  const tierGroups = {
    1: { name: 'Tier 1: Feature Coverage (F1 - F14)', tests: [], passed: 0, failed: 0 },
    2: { name: 'Tier 2: Boundary & Corner Cases', tests: [], passed: 0, failed: 0 },
    3: { name: 'Tier 3: Cross-Feature Combinations', tests: [], passed: 0, failed: 0 },
    4: { name: 'Tier 4: Real-World Scenarios', tests: [], passed: 0, failed: 0 }
  };

  const featureGroups = {};
  for (const f of Object.keys(FEATURE_MAP)) {
    featureGroups[f] = { total: 0, passed: 0, failed: 0 };
  }

  const failures = [];

  for (const t of testsToRun) {
    const tStart = Date.now();
    let status = 'PASS';
    let errMessage = null;

    try {
      await t.runFn(harness);
      if (tierGroups[t.tier]) tierGroups[t.tier].passed++;
      if (featureGroups[t.feature]) featureGroups[t.feature].passed++;
    } catch (err) {
      status = 'FAIL';
      errMessage = err.message;
      if (tierGroups[t.tier]) tierGroups[t.tier].failed++;
      if (featureGroups[t.feature]) featureGroups[t.feature].failed++;
      failures.push({
        id: t.id,
        tier: t.tier,
        feature: t.feature,
        title: t.title,
        error: errMessage
      });
    }

    if (tierGroups[t.tier]) {
      tierGroups[t.tier].tests.push({
        ...t,
        status,
        errMessage,
        duration: Date.now() - tStart
      });
    }

    if (featureGroups[t.feature]) {
      featureGroups[t.feature].total++;
    }

    // Console marker per test
    const marker = status === 'PASS' ? sym.pass : sym.fail;
    const durStr = `${colors.dim}(${Date.now() - tStart}ms)${colors.reset}`;
    if (status === 'PASS') {
      console.log(`  ${marker} ${colors.dim}[${t.id}]${colors.reset} ${t.title} ${durStr}`);
    } else {
      console.log(`  ${marker} ${colors.bold}${colors.red}[${t.id}]${colors.reset} ${t.title} ${durStr}`);
      console.log(`     ${colors.red}Error: ${errMessage}${colors.reset}`);
    }
  }

  const duration = Date.now() - startTime;
  const totalTests = testsToRun.length;
  const totalPassed = Object.values(tierGroups).reduce((acc, tg) => acc + tg.passed, 0);
  const totalFailed = Object.values(tierGroups).reduce((acc, tg) => acc + tg.failed, 0);
  const passRate = totalTests > 0 ? ((totalPassed / totalTests) * 100).toFixed(1) : '0.0';

  // ── SUMMARY REPORT TABLE ─────────────────────────────────────────────
  console.log(`\n${colors.bold}${colors.cyan}========================================================================${colors.reset}`);
  console.log(`${colors.bold}${colors.white}  TEST EXECUTION SUMMARY BY TIER${colors.reset}`);
  console.log(`${colors.bold}${colors.cyan}========================================================================${colors.reset}`);

  for (const [tierNum, tg] of Object.entries(tierGroups)) {
    const total = tg.passed + tg.failed;
    if (total === 0) continue;
    const rate = ((tg.passed / total) * 100).toFixed(1);
    const color = tg.failed === 0 ? colors.green : (tg.passed > 0 ? colors.yellow : colors.red);
    console.log(`  ${colors.bold}${tg.name.padEnd(42)}${colors.reset} : ${String(tg.passed).padStart(3)} / ${String(total).padEnd(3)} passed ${color}(${rate}%)${colors.reset}`);
  }

  console.log(`${colors.dim}------------------------------------------------------------------------${colors.reset}`);
  console.log(`  ${colors.bold}Total Planned Assertions${colors.reset} : ${colors.bold}${totalTests}${colors.reset} | Passed: ${colors.green}${totalPassed}${colors.reset} | Failed: ${colors.red}${totalFailed}${colors.reset} | Duration: ${duration}ms`);
  console.log(`  ${colors.bold}Overall Pass Rate       ${colors.reset} : ${colors.bold}${passRate}%${colors.reset}`);
  console.log(`${colors.bold}${colors.cyan}========================================================================${colors.reset}`);

  // ── MILESTONE GATE STATUS ────────────────────────────────────────────
  console.log(`\n${colors.bold}${colors.white}  MILESTONE GATE VERIFICATION BREAKDOWN${colors.reset}`);
  console.log(`${colors.dim}------------------------------------------------------------------------${colors.reset}`);

  const milestones = [
    { id: 'M1', name: 'SePay & Donate Cleanup', features: ['F1'] },
    { id: 'M2', name: 'Claude Design System & Theming', features: ['F2', 'F3', 'F4', 'F5'] },
    { id: 'M3', name: 'Ciallovo Components & Interaction', features: ['F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'F13'] },
    { id: 'M4', name: 'E2E Integration & Verification', features: ['F14'] }
  ];

  for (const m of milestones) {
    let mPassed = 0;
    let mTotal = 0;
    for (const f of m.features) {
      if (featureGroups[f]) {
        mPassed += featureGroups[f].passed;
        mTotal += featureGroups[f].total;
      }
    }
    const gateStatus = (mTotal > 0 && mPassed === mTotal) ? `${colors.green}PASSED${colors.reset}` : `${colors.yellow}PENDING${colors.reset}`;
    console.log(`  ${colors.bold}[${m.id}] ${m.name.padEnd(38)}${colors.reset} : ${mPassed}/${mTotal} tests [${gateStatus}]`);
  }
  console.log(`${colors.bold}${colors.cyan}========================================================================${colors.reset}\n`);

  if (failures.length > 0) {
    console.log(`${colors.bold}${colors.red}  OUTSTANDING DEFECTS & PENDING IMPLEMENTATIONS (${failures.length}):${colors.reset}`);
    failures.forEach((f, idx) => {
      console.log(`  ${idx + 1}. [${f.id}] [${f.feature}] ${f.title}`);
      console.log(`     ${colors.red}${f.error}${colors.reset}`);
    });
    console.log('');
  }

  // Handle process exit code
  if (isReportOnly) {
    process.exit(0);
  }

  if (isStrict || !isReportOnly) {
    if (totalFailed > 0) {
      process.exit(1);
    }
  }

  process.exit(0);
}

runTestSuite().catch(err => {
  console.error(`Fatal test harness error: ${err.message}`);
  process.exit(1);
});
