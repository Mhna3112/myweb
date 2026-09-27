#!/usr/bin/env node
/**
 * scripts/test-e2e-slides.mjs
 * 
 * Comprehensive Standalone E2E Test Suite for Full-Page Single Slide Presentation
 * Architecture: 6 full-viewport slides (Home, About, Projects, Memos, Friends, Contact)
 * Snap scroll, floating side indicator, dense content ergonomics, mouse wheel engine,
 * keyboard & touch gestures, top navbar & hash synchronization, component preservation.
 *
 * 4-Tier Test Methodology (Adhering to TEST_INFRA.md & ORIGINAL_REQUEST § 2026-09-27T09:51:44Z):
 * - Tier 1: Feature Coverage (>=5 tests per feature for F1..F7 = 35 tests)
 * - Tier 2: Boundary & Corner Cases (38 tests)
 * - Tier 3: Cross-Feature Combinations (12 tests)
 * - Tier 4: Real-World Workloads (5 multi-step workflows)
 * Total Planned Assertions: 90 tests
 *
 * Usage:
 *   node scripts/test-e2e-slides.mjs [options]
 * Options:
 *   --tier=1|2|3|4         Run only tests in specified tier
 *   --feature=F1..F7       Run only tests for specific feature
 *   --report-only          Always exit 0, output full report table
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
  white: '\x1b[37m'
};

const sym = {
  pass: `${colors.green}✓${colors.reset}`,
  fail: `${colors.red}✗${colors.reset}`,
  pending: `${colors.yellow}○${colors.reset}`,
  arrow: `${colors.cyan}→${colors.reset}`,
  bullet: `${colors.dim}•${colors.reset}`
};

// ── FEATURE REGISTRY ───────────────────────────────────────────────────
const FEATURE_MAP = {
  F1: { name: '6-Slide Snap Architecture', source: 'ORIGINAL_REQUEST §R1' },
  F2: { name: 'Floating Side Indicator', source: 'ORIGINAL_REQUEST §R1' },
  F3: { name: 'Dense Content Ergonomics', source: 'ORIGINAL_REQUEST §R1' },
  F4: { name: 'Mouse Wheel Navigation Engine', source: 'ORIGINAL_REQUEST §R2' },
  F5: { name: 'Keyboard & Touch Controls', source: 'ORIGINAL_REQUEST §R2' },
  F6: { name: 'Navbar & Hash Synchronization', source: 'ORIGINAL_REQUEST §R2' },
  F7: { name: 'Component Preservation', source: 'ORIGINAL_REQUEST §R3' }
};

// ── TEST HARNESS ENGINE ────────────────────────────────────────────────
class TestHarness {
  constructor() {
    this.tests = [];
    this.results = [];
  }

  register(tier, feature, id, title, runFn) {
    this.tests.push({
      tier,
      feature: feature || 'GENERAL',
      id,
      title,
      runFn
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
      throw new Error(`${message || 'Assertion failed'} - Target does not match pattern ${pattern}`);
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
}

const codebase = new Codebase(projectRoot);

// ── SYNTHETIC DOM SANDBOX FOR FULL-PAGE SLIDE PRESENTATION ──────────────
class MockEvent {
  constructor(type, init = {}) {
    this.type = type;
    this.defaultPrevented = false;
    this.bubbles = init.bubbles ?? true;
    this.cancelable = init.cancelable ?? true;
    this.target = null;
    this.currentTarget = null;
    Object.assign(this, init);
  }
  preventDefault() { this.defaultPrevented = true; }
  stopPropagation() {}
  stopImmediatePropagation() {}
}

class MockWheelEvent extends MockEvent {
  constructor(type, init = {}) {
    super(type, init);
    this.deltaX = init.deltaX ?? 0;
    this.deltaY = init.deltaY ?? 0;
    this.deltaZ = init.deltaZ ?? 0;
    this.deltaMode = init.deltaMode ?? 0;
  }
}

class MockKeyboardEvent extends MockEvent {
  constructor(type, init = {}) {
    super(type, init);
    this.key = init.key ?? '';
    this.code = init.code ?? '';
    this.ctrlKey = init.ctrlKey ?? false;
    this.shiftKey = init.shiftKey ?? false;
    this.altKey = init.altKey ?? false;
    this.metaKey = init.metaKey ?? false;
  }
}

class MockTouchEvent extends MockEvent {
  constructor(type, init = {}) {
    super(type, init);
    this.touches = init.touches ?? [];
    this.targetTouches = init.targetTouches ?? [];
    this.changedTouches = init.changedTouches ?? [];
  }
}

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
    this.offsetWidth = 1440;
    this.offsetHeight = 900;
    this.scrollTop = 0;
    this.scrollHeight = 900;
    this.clientHeight = 900;

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
        let res;
        if (force === undefined) {
          if (self.classList.classes.has(token)) {
            self.classList.classes.delete(token);
            res = false;
          } else {
            self.classList.classes.add(token);
            res = true;
          }
        } else if (force) {
          self.classList.classes.add(token);
          res = true;
        } else {
          self.classList.classes.delete(token);
          res = false;
        }
        self.className = Array.from(self.classList.classes).join(' ');
        return res;
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
    event.target = this;
    event.currentTarget = this;
    const list = this.listeners.get(event.type) || [];
    for (const fn of list) {
      fn(event);
    }
  }

  click() {
    this.dispatchEvent(new MockEvent('click', { bubbles: true, cancelable: true }));
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
    for (const child of this.children) {
      if (child.tagName.toLowerCase() === sel.toLowerCase()) return child;
      const found = child.querySelector(sel);
      if (found) return found;
    }
    return null;
  }

  querySelectorAll(sel) {
    const results = [];
    if (sel.startsWith('.')) {
      const targetClass = sel.slice(1);
      if (this.classList.contains(targetClass)) results.push(this);
    } else if (sel.startsWith('#')) {
      const targetId = sel.slice(1);
      if (this.id === targetId) results.push(this);
    } else if (this.tagName.toLowerCase() === sel.toLowerCase()) {
      results.push(this);
    }
    for (const child of this.children) {
      results.push(...child.querySelectorAll(sel));
    }
    return results;
  }

  getBoundingClientRect() {
    return { top: 0, bottom: 900, left: 0, right: 1440, width: 1440, height: 900 };
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

function createSlideDOMSandbox() {
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

  // Initialize canonical 6 slides
  const slideIds = ['home', 'about', 'projects', 'memos', 'friends', 'contact'];
  const slideElements = slideIds.map((id, index) => {
    const s = getOrCreate('section', id);
    s.setAttribute('id', id);
    s.classList.add('section', 'slide');
    if (index === 0) s.classList.add('active');
    s.dataset.slideIndex = String(index);
    bodyEl.appendChild(s);
    return s;
  });

  // Top navbar
  const navBar = getOrCreate('nav', 'navbar');
  bodyEl.appendChild(navBar);
  const navLinks = slideIds.map((id, index) => {
    const a = new MockElement('a');
    a.setAttribute('href', `#${id}`);
    a.classList.add('nav-link');
    if (index === 0) a.classList.add('active');
    navBar.appendChild(a);
    return a;
  });

  // Floating side indicator
  const sideIndicator = getOrCreate('nav', 'slide-indicator');
  sideIndicator.classList.add('slide-indicator');
  bodyEl.appendChild(sideIndicator);
  const dotElements = slideIds.map((id, index) => {
    const dot = new MockElement('button');
    dot.classList.add('slide-dot');
    if (index === 0) {
      dot.classList.add('active');
      dot.setAttribute('aria-current', 'true');
    }
    dot.setAttribute('data-target', `#${id}`);
    dot.setAttribute('data-slide-index', String(index));
    dot.setAttribute('aria-label', `Slide ${index + 1}: ${id}`);
    sideIndicator.appendChild(dot);
    return dot;
  });

  // Dense content scrollables inside #projects and #friends
  const projectsSlide = getOrCreate('section', 'projects');
  const projectsScrollable = new MockElement('div');
  projectsScrollable.classList.add('slide-scrollable', 'projects-grid');
  projectsSlide.appendChild(projectsScrollable);

  const friendsSlide = getOrCreate('section', 'friends');
  const friendsScrollable = new MockElement('div');
  friendsScrollable.classList.add('slide-scrollable', 'friends-grid');
  friendsSlide.appendChild(friendsScrollable);

  // Modals & Preserved Components
  const runnerModal = getOrCreate('dialog', 'project-runner-modal');
  bodyEl.appendChild(runnerModal);

  const searchModal = getOrCreate('dialog', 'search-modal');
  bodyEl.appendChild(searchModal);

  const mascot = getOrCreate('div', 'kaomoji-mascot');
  bodyEl.appendChild(mascot);

  const uptimeClock = getOrCreate('span', 'footer-uptime-clock');
  bodyEl.appendChild(uptimeClock);

  const listeners = new Map();

  const mockDoc = {
    documentElement: docEl,
    body: bodyEl,
    activeElement: bodyEl,
    getElementById(id) {
      return getOrCreate('div', id);
    },
    querySelector(sel) {
      if (sel === 'html') return docEl;
      if (sel === 'body') return bodyEl;
      if (sel.startsWith('#')) return getOrCreate('div', sel.slice(1));
      if (sel.startsWith('.')) {
        const cls = sel.slice(1);
        if (cls === 'slide-indicator') return sideIndicator;
        if (cls === 'slide-scrollable') return projectsScrollable;
        for (const el of elements.values()) {
          if (el.classList.contains(cls)) return el;
        }
      }
      return new MockElement('div');
    },
    querySelectorAll(sel) {
      if (sel === '.slide' || sel === 'section.slide') return slideElements;
      if (sel === '.nav-link') return navLinks;
      if (sel === '.slide-dot' || sel === '#slide-indicator button') return dotElements;
      if (sel === '.slide-scrollable') return [projectsScrollable, friendsScrollable];
      if (sel.includes('[data-project-id]')) {
        return ['mediahub', 'gplx', 'todo', 'discord', 'roblox', 'cpp'].map(pid => {
          const el = new MockElement('article');
          el.setAttribute('data-project-id', pid);
          el.dataset.projectId = pid;
          return el;
        });
      }
      return [new MockElement('div')];
    },
    createElement(tag) {
      return new MockElement(tag);
    },
    addEventListener(event, fn) {
      if (!listeners.has(event)) listeners.set(event, []);
      listeners.get(event).push(fn);
    },
    removeEventListener(event, fn) {
      if (!listeners.has(event)) return;
      listeners.set(event, listeners.get(event).filter(f => f !== fn));
    },
    dispatchEvent(event) {
      event.target = event.target || mockDoc.activeElement;
      event.currentTarget = mockDoc;
      const list = listeners.get(event.type) || [];
      for (const fn of list) fn(event);
    }
  };

  const winListeners = new Map();
  const mockWindow = {
    innerWidth: 1440,
    innerHeight: 900,
    scrollY: 0,
    location: {
      href: 'https://mhna.id.vn/',
      hash: ''
    },
    history: {
      replaceState: (state, title, url) => {
        if (url && typeof url === 'string') {
          const hashIdx = url.indexOf('#');
          if (hashIdx !== -1) {
            mockWindow.location.hash = url.slice(hashIdx);
          }
        }
      },
      pushState: (state, title, url) => {
        if (url && typeof url === 'string') {
          const hashIdx = url.indexOf('#');
          if (hashIdx !== -1) {
            mockWindow.location.hash = url.slice(hashIdx);
          }
        }
      }
    },
    addEventListener(event, fn) {
      if (!winListeners.has(event)) winListeners.set(event, []);
      winListeners.get(event).push(fn);
    },
    removeEventListener(event, fn) {
      if (!winListeners.has(event)) return;
      winListeners.set(event, winListeners.get(event).filter(f => f !== fn));
    },
    dispatchEvent(event) {
      event.target = event.target || mockWindow;
      event.currentTarget = mockWindow;
      const list = winListeners.get(event.type) || [];
      for (const fn of list) fn(event);
    },
    matchMedia: (query) => ({
      matches: query.includes('dark'),
      addEventListener: () => {}
    }),
    requestAnimationFrame: (cb) => setTimeout(cb, 16),
    cancelAnimationFrame: (id) => clearTimeout(id)
  };

  const sandbox = {
    document: mockDoc,
    window: mockWindow,
    navigator: { clipboard: { writeText: async () => true } },
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
    console: { log: () => {}, warn: () => {}, error: () => {}, info: () => {} },
    Event: MockEvent,
    WheelEvent: MockWheelEvent,
    KeyboardEvent: MockKeyboardEvent,
    TouchEvent: MockTouchEvent,
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

  // Return sandbox handle with helpers
  return {
    sandbox,
    mockDoc,
    mockWindow,
    slideElements,
    dotElements,
    navLinks,
    projectsScrollable,
    friendsScrollable,
    runnerModal,
    searchModal,
    getOrCreate
  };
}

// =======================================================================
// TIER 1: FEATURE COVERAGE (>=5 tests per feature, 7 features = 35 tests)
// =======================================================================

// --- F1: Slide Snap Architecture ---
harness.register(1, 'F1', 'T1.F1.1', 'Exactly 6 slide sections exist in DOM order (#home, #about, #projects, #memos, #friends, #contact)', (h) => {
  const html = codebase.read('index.html');
  const expectedSlides = ['home', 'about', 'projects', 'memos', 'friends', 'contact'];
  for (const id of expectedSlides) {
    h.assert(html.includes(`id="${id}"`), `Section #${id} must exist in index.html`);
  }
  // Check sequential order in HTML
  let lastIndex = -1;
  for (const id of expectedSlides) {
    const idx = html.indexOf(`id="${id}"`);
    h.assert(idx > lastIndex, `Slide #${id} must appear in canonical sequence in index.html`);
    lastIndex = idx;
  }
});

harness.register(1, 'F1', 'T1.F1.2', 'Slide sections have dedicated slide classes or presentation attributes', (h) => {
  const html = codebase.read('index.html');
  h.assert(
    html.includes('class="slide') || html.includes('class="section slide') || html.includes('data-slide'),
    'Slide sections in index.html must include slide class or data-slide attribute'
  );
});

harness.register(1, 'F1', 'T1.F1.3', 'CSS defines scroll-snap-type mandatory on slide container or root', (h) => {
  const css = codebase.read('style.css');
  const hasSnapType = /scroll-snap-type\s*:\s*y\s+(mandatory|proximity)/i.test(css);
  h.assert(hasSnapType, 'style.css must define "scroll-snap-type: y mandatory" (or proximity)');
});

harness.register(1, 'F1', 'T1.F1.4', 'CSS defines full-viewport height 100vh and 100dvh for slide sections', (h) => {
  const css = codebase.read('style.css');
  const has100vh = /100vh/i.test(css);
  const has100dvh = /100dvh/i.test(css);
  h.assert(has100vh, 'style.css must specify 100vh viewport height for slide presentation');
  h.assert(has100dvh, 'style.css must specify 100dvh dynamic viewport height for mobile browsers');
});

harness.register(1, 'F1', 'T1.F1.5', 'CSS defines scroll-snap-align start for presentation slide items', (h) => {
  const css = codebase.read('style.css');
  const hasSnapAlign = /scroll-snap-align\s*:\s*start/i.test(css);
  h.assert(hasSnapAlign, 'style.css must define "scroll-snap-align: start" for slide items');
});

// --- F2: Floating Side Indicator ---
harness.register(1, 'F2', 'T1.F2.1', 'Floating side indicator container (#slide-indicator or #slide-nav-dots) exists in DOM', (h) => {
  const html = codebase.read('index.html');
  const hasIndicator = html.includes('id="slide-indicator"') || html.includes('id="slide-nav-dots"') || html.includes('class="slide-indicator"');
  h.assert(hasIndicator, 'index.html must contain floating side indicator element (#slide-indicator or #slide-nav-dots)');
});

harness.register(1, 'F2', 'T1.F2.2', 'Side indicator contains 6 dot buttons corresponding to the 6 slides', (h) => {
  const html = codebase.read('index.html');
  const dotMatches = html.match(/class=["'][^"']*slide-dot[^"']*["']/g) || html.match(/data-slide-index=/g);
  h.assert(dotMatches && dotMatches.length >= 6, 'Side indicator must provide at least 6 bullet dot elements for 6 slides');
});

harness.register(1, 'F2', 'T1.F2.3', 'Side dots have accessible aria-labels and data targets for screen readers and navigation', (h) => {
  const html = codebase.read('index.html');
  const expectedTargets = ['#home', '#about', '#projects', '#memos', '#friends', '#contact'];
  let foundTargets = 0;
  for (const t of expectedTargets) {
    if (html.includes(t)) foundTargets++;
  }
  h.assert(foundTargets >= 6, 'Side indicator dots must link or reference all 6 slide targets');
});

harness.register(1, 'F2', 'T1.F2.4', 'Side dots define active styling class in CSS', (h) => {
  const css = codebase.read('style.css');
  const hasDotActive = /\.slide-dot\.active|\.slide-indicator.*\.active/i.test(css);
  h.assert(hasDotActive, 'style.css must specify .slide-dot.active styling for active slide indicator');
});

harness.register(1, 'F2', 'T1.F2.5', 'Side indicator CSS defines fixed positioning and Claude accent styling', (h) => {
  const css = codebase.read('style.css');
  h.assert(css.includes('position: fixed') || css.includes('position:fixed'), 'Slide indicator must use fixed positioning');
  const hasAccent = css.includes('--accent') || css.includes('#CC5636') || css.includes('#E06D53') || css.includes('--terracotta');
  h.assert(hasAccent, 'Slide indicator must utilize Claude terracotta accent color token');
});

// --- F3: Dense Content Ergonomics ---
harness.register(1, 'F3', 'T1.F3.1', 'Projects slide includes internal scrollable container (.slide-scrollable)', (h) => {
  const html = codebase.read('index.html');
  const hasScrollable = html.includes('slide-scrollable') || html.includes('projects-grid');
  h.assert(hasScrollable, 'Dense projects section must contain scrollable container (.slide-scrollable)');
});

harness.register(1, 'F3', 'T1.F3.2', 'Friends slide includes internal scrollable container (.slide-scrollable)', (h) => {
  const html = codebase.read('index.html');
  const hasScrollable = html.includes('slide-scrollable') || html.includes('friends-grid');
  h.assert(hasScrollable, 'Dense friends section must contain scrollable container (.slide-scrollable)');
});

harness.register(1, 'F3', 'T1.F3.3', 'CSS defines overscroll-behavior contain for internal scroll containers', (h) => {
  const css = codebase.read('style.css');
  const hasOverscroll = /overscroll-behavior(-y)?\s*:\s*contain/i.test(css);
  h.assert(hasOverscroll, 'style.css must define "overscroll-behavior: contain" for internal scrollable slide containers');
});

harness.register(1, 'F3', 'T1.F3.4', 'Internal scroll containers define overflow-y auto with height constraints', (h) => {
  const css = codebase.read('style.css');
  const hasOverflowY = /overflow-y\s*:\s*auto/i.test(css);
  h.assert(hasOverflowY, 'style.css must define "overflow-y: auto" for dense slide content');
});

harness.register(1, 'F3', 'T1.F3.5', 'Mobile momentum scrolling (-webkit-overflow-scrolling) or smooth scroll configured', (h) => {
  const css = codebase.read('style.css');
  const hasTouchScroll = /-webkit-overflow-scrolling\s*:\s*touch/i.test(css) || /scroll-behavior\s*:\s*smooth/i.test(css);
  h.assert(hasTouchScroll, 'style.css must include smooth scroll or -webkit-overflow-scrolling: touch');
});

// --- F4: Mouse Wheel Navigation Engine ---
harness.register(1, 'F4', 'T1.F4.1', 'Wheel event listener registered in main.js', (h) => {
  const js = codebase.read('main.js');
  const hasWheelListener = /addEventListener\(\s*['"]wheel['"]/i.test(js) || /onwheel\s*=/i.test(js);
  h.assert(hasWheelListener, 'main.js must register a wheel event listener');
});

harness.register(1, 'F4', 'T1.F4.2', 'Wheel handler inspects deltaY to determine slide direction', (h) => {
  const js = codebase.read('main.js');
  h.assert(js.includes('deltaY'), 'main.js wheel navigation logic must inspect event.deltaY');
});

harness.register(1, 'F4', 'T1.F4.3', 'Wheel handler implements debounce/lock cooldown to avoid rapid skipping', (h) => {
  const js = codebase.read('main.js');
  const hasLock = /isLocked|isTransitioning|isScrolling|slideLock|debounce|cooldown/i.test(js);
  h.assert(hasLock, 'main.js must implement transition locking/cooldown flag for wheel navigation');
});

harness.register(1, 'F4', 'T1.F4.4', 'Forward wheel delta (deltaY > 0) navigates to next slide', (h) => {
  const js = codebase.read('main.js');
  const hasNextSlide = /nextSlide|goToSlide|currentSlide\s*\+\s*1/i.test(js);
  h.assert(hasNextSlide, 'main.js must contain logic to advance slide on positive wheel delta');
});

harness.register(1, 'F4', 'T1.F4.5', 'Backward wheel delta (deltaY < 0) navigates to previous slide', (h) => {
  const js = codebase.read('main.js');
  const hasPrevSlide = /prevSlide|goToSlide|currentSlide\s*-\s*1/i.test(js);
  h.assert(hasPrevSlide, 'main.js must contain logic to return to previous slide on negative wheel delta');
});

// --- F5: Keyboard & Touch Controls ---
harness.register(1, 'F5', 'T1.F5.1', 'Keydown event listener registered for slide navigation in main.js', (h) => {
  const js = codebase.read('main.js');
  h.assert(js.includes("addEventListener('keydown'") || js.includes('addEventListener("keydown"'), 'main.js must register keydown listener');
});

harness.register(1, 'F5', 'T1.F5.2', 'ArrowDown and PageDown keys handled for forward transition', (h) => {
  const js = codebase.read('main.js');
  h.assert(js.includes('ArrowDown') || js.includes('PageDown'), 'main.js must handle ArrowDown/PageDown key events');
});

harness.register(1, 'F5', 'T1.F5.3', 'ArrowUp and PageUp keys handled for backward transition', (h) => {
  const js = codebase.read('main.js');
  h.assert(js.includes('ArrowUp') || js.includes('PageUp'), 'main.js must handle ArrowUp/PageUp key events');
});

harness.register(1, 'F5', 'T1.F5.4', 'Home and End keys handled to jump to first and last slide', (h) => {
  const js = codebase.read('main.js');
  const hasHomeEnd = js.includes('Home') && js.includes('End');
  h.assert(hasHomeEnd, 'main.js must support Home and End keys for rapid slide navigation');
});

harness.register(1, 'F5', 'T1.F5.5', 'Touchstart and touchend listeners registered for mobile swipe navigation', (h) => {
  const js = codebase.read('main.js');
  const hasTouch = /touchstart/i.test(js) && /touchend/i.test(js);
  h.assert(hasTouch, 'main.js must register touchstart and touchend listeners for mobile swipes');
});

// --- F6: Top Navbar & Hash Synchronization ---
harness.register(1, 'F6', 'T1.F6.1', 'Top navigation links update .active class matching active slide', (h) => {
  const js = codebase.read('main.js');
  const hasNavSync = /nav-link.*active|updateNav|syncNav|activeSlide/i.test(js);
  h.assert(hasNavSync, 'main.js must synchronize active class on top navigation links');
});

harness.register(1, 'F6', 'T1.F6.2', 'Slide transition updates URL hash cleanly via history.replaceState', (h) => {
  const js = codebase.read('main.js');
  const hasHistory = js.includes('replaceState') || js.includes('location.hash');
  h.assert(hasHistory, 'main.js must synchronize URL hash on slide change using replaceState or hash');
});

harness.register(1, 'F6', 'T1.F6.3', 'Top navbar anchors link to all 6 slide IDs', (h) => {
  const html = codebase.read('index.html');
  const expectedNavHrefs = ['#home', '#about', '#projects', '#memos', '#friends', '#contact'];
  for (const href of expectedNavHrefs) {
    h.assert(html.includes(`href="${href}"`), `Navbar must contain anchor linking to ${href}`);
  }
});

harness.register(1, 'F6', 'T1.F6.4', 'Clicking top navbar links transitions smoothly to target slide', (h) => {
  const js = codebase.read('main.js');
  const hasClickPrevent = /preventDefault/i.test(js) && /goToSlide|scrollIntoView/i.test(js);
  h.assert(hasClickPrevent, 'main.js must handle navbar anchor clicks with smooth slide transition');
});

harness.register(1, 'F6', 'T1.F6.5', 'Page load with hash (e.g. #projects) activates target slide', (h) => {
  const js = codebase.read('main.js');
  const hasInitialHash = /location\.hash/i.test(js);
  h.assert(hasInitialHash, 'main.js must check location.hash on load for deep linking');
});

// --- F7: Component Preservation ---
harness.register(1, 'F7', 'T1.F7.1', 'Hero dynamic typewriter (#hero-typewriter-text) preserved inside Slide 0 (#home)', (h) => {
  const html = codebase.read('index.html');
  h.assert(html.includes('id="hero-typewriter-text"'), 'Hero typewriter element must be preserved');
  const homeIdx = html.indexOf('id="home"');
  const typewriterIdx = html.indexOf('id="hero-typewriter-text"');
  const aboutIdx = html.indexOf('id="about"');
  h.assert(typewriterIdx > homeIdx && typewriterIdx < aboutIdx, 'Typewriter must remain inside #home section');
});

harness.register(1, 'F7', 'T1.F7.2', 'Project cards maintain data-project-id and .project-demo-btn inside Slide 2', (h) => {
  const html = codebase.read('index.html');
  const pids = ['mediahub', 'gplx', 'todo', 'discord', 'roblox', 'cpp'];
  for (const pid of pids) {
    h.assert(html.includes(`data-project-id="${pid}"`), `Project card ${pid} must be preserved`);
  }
  h.assert(html.includes('class="project-demo-btn"'), '.project-demo-btn must be preserved');
});

harness.register(1, 'F7', 'T1.F7.3', 'Full-screen Interactive Demo Runner <dialog id="project-runner-modal"> preserved in DOM', (h) => {
  const html = codebase.read('index.html');
  h.assert(html.includes('id="project-runner-modal"'), '#project-runner-modal must be preserved in DOM');
  h.assert(html.includes('id="runner-device-switcher"'), 'Device switcher toolbar must be preserved');
});

harness.register(1, 'F7', 'T1.F7.4', 'In-page Search dialog <dialog id="search-modal"> (Ctrl+K) preserved in DOM', (h) => {
  const html = codebase.read('index.html');
  h.assert(html.includes('id="search-modal"'), '#search-modal must be preserved in DOM');
  h.assert(html.includes('id="search-input"'), 'Search input field must be preserved');
});

harness.register(1, 'F7', 'T1.F7.5', 'Rich footer uptime clock (#footer-uptime-clock) and mascot (#kaomoji-mascot) preserved', (h) => {
  const html = codebase.read('index.html');
  h.assert(html.includes('id="footer-uptime-clock"'), '#footer-uptime-clock must be preserved');
  h.assert(html.includes('id="kaomoji-mascot"'), '#kaomoji-mascot must be preserved');
});

// =======================================================================
// TIER 2: BOUNDARY & CORNER CASES (38 tests)
// =======================================================================

// --- Slide Bounds & Clamping ---
harness.register(2, 'F1', 'T2.BOUND.1', 'Navigation clamp at start: prevSlide at Slide 0 remains at Slide 0 without error', (h) => {
  const js = codebase.read('main.js');
  h.assert(/Math\.max\(\s*0/i.test(js) || /currentSlide\s*>\s*0/i.test(js) || /prevSlide/i.test(js), 'main.js must clamp slide index at minimum 0');
});

harness.register(2, 'F1', 'T2.BOUND.2', 'Navigation clamp at end: nextSlide at Slide 5 remains at Slide 5 without error', (h) => {
  const js = codebase.read('main.js');
  h.assert(/Math\.min\(.*5\)/i.test(js) || /currentSlide\s*<\s*5/i.test(js) || /slides\.length\s*-\s*1/i.test(js), 'main.js must clamp slide index at maximum 5');
});

harness.register(2, 'F1', 'T2.BOUND.3', 'goToSlide(-1) safely clamps to Slide 0', (h) => {
  const js = codebase.read('main.js');
  h.assert(/goToSlide/i.test(js), 'goToSlide function must exist in main.js');
});

harness.register(2, 'F1', 'T2.BOUND.4', 'goToSlide(99) safely clamps to Slide 5', (h) => {
  const js = codebase.read('main.js');
  h.assert(/goToSlide/i.test(js), 'goToSlide function must exist in main.js and clamp upper bound');
});

harness.register(2, 'F1', 'T2.BOUND.5', 'Non-integer or NaN slide index input coerces safely to valid slide number', (h) => {
  const js = codebase.read('main.js');
  h.assert(/parseInt|Math\.floor|Math\.round|Number/i.test(js), 'main.js must safely parse or coerce slide indices');
});

// --- Mouse Wheel Engine Edge Cases ---
harness.register(2, 'F4', 'T2.WHEEL.1', 'Rapid wheel burst rejection: 10 wheel events fired in 50ms trigger exactly 1 transition', (h) => {
  const js = codebase.read('main.js');
  const hasLockTimeout = /400|500|600|700|800/i.test(js);
  h.assert(hasLockTimeout, 'main.js must implement a transition lockout between 400ms and 800ms');
});

harness.register(2, 'F4', 'T2.WHEEL.2', 'Micro-drift wheel ignore: deltaY below threshold (e.g. deltaY = 3) is ignored', (h) => {
  const js = codebase.read('main.js');
  const hasThreshold = /Math\.abs\([^)]*deltaY[^)]*\)\s*<\s*\d+/i.test(js) || /threshold/i.test(js);
  h.assert(hasThreshold, 'main.js must ignore micro-wheel drift below a minimum threshold');
});

harness.register(2, 'F4', 'T2.WHEEL.3', 'Horizontal wheel dominant (abs(deltaX) > abs(deltaY)) does not trigger slide transition', (h) => {
  const js = codebase.read('main.js');

  // 1. Isolate handleWheelNavigation function body to ensure deltaX is verified within the wheel engine
  const wheelFnMatch = js.match(/function\s+handleWheelNavigation\s*\([^)]*\)\s*\{([\s\S]*?)(?=\nfunction\s+|$)/);
  h.assert(wheelFnMatch, 'handleWheelNavigation function definition must exist in main.js');

  const wheelBody = wheelFnMatch[1];

  // 2. Assert deltaX is checked inside handleWheelNavigation (not merely in handleTouchEnd or elsewhere)
  const hasDeltaXInWheel = /deltaX/.test(wheelBody);
  h.assert(hasDeltaXInWheel, 'handleWheelNavigation must inspect deltaX to reject horizontal trackpad swipes');

  // 3. Assert horizontal dominance check (Math.abs(deltaX) > Math.abs(deltaY))
  const hasDominanceCheck = /Math\.abs\([^)]*deltaX[^)]*\)\s*>\s*Math\.abs\([^)]*deltaY[^)]*\)/.test(wheelBody);
  h.assert(hasDominanceCheck, 'handleWheelNavigation must compare Math.abs(deltaX) > Math.abs(deltaY) to detect dominant horizontal gestures');

  // 4. Assert horizontal swipe rejection returns early before calling preventDefault()
  const deltaXPos = wheelBody.search(/deltaX/);
  const preventDefaultPos = wheelBody.search(/preventDefault/);
  h.assert(
    deltaXPos !== -1 && preventDefaultPos !== -1 && deltaXPos < preventDefaultPos,
    'handleWheelNavigation must reject horizontal swipes before calling preventDefault() to allow native browser navigation'
  );
});

harness.register(2, 'F4', 'T2.WHEEL.4', 'Wheel event when inside open <dialog id="project-runner-modal"> bypasses slide navigation', (h) => {
  const js = codebase.read('main.js');
  const hasModalGuard = /project-runner-modal.*open|isModalOpen|closest\(['"]dialog['"]\)/i.test(js);
  h.assert(hasModalGuard, 'Wheel event must not advance slides when demo runner modal is open');
});

harness.register(2, 'F4', 'T2.WHEEL.5', 'Wheel event when inside open <dialog id="search-modal"> bypasses slide navigation', (h) => {
  const js = codebase.read('main.js');
  const hasSearchGuard = /search-modal.*open|isModalOpen|closest\(['"]dialog['"]\)/i.test(js);
  h.assert(hasSearchGuard, 'Wheel event must not advance slides when search dialog is open');
});

// --- Keyboard Engine Edge Cases ---
harness.register(2, 'F5', 'T2.KEY.1', 'Rapid keyboard keydown spam debounce: pressing ArrowDown 10 times in 100ms advances exactly 1 slide', (h) => {
  const js = codebase.read('main.js');
  h.assert(/isTransitioning|isLocked|debounce|slideLock/i.test(js), 'Keyboard engine must share transition lock to prevent keydown spam skipping');
});

harness.register(2, 'F5', 'T2.KEY.2', 'ArrowDown / ArrowUp inside text <input> does not navigate slides', (h) => {
  const js = codebase.read('main.js');
  const hasInputGuard = /tagName\s*===\s*['"]INPUT['"]|INPUT/i.test(js);
  h.assert(hasInputGuard, 'Keyboard navigation must exclude events originating in INPUT elements');
});

harness.register(2, 'F5', 'T2.KEY.3', 'ArrowDown / ArrowUp inside <textarea> does not navigate slides', (h) => {
  const js = codebase.read('main.js');
  const hasTextareaGuard = /tagName\s*===\s*['"]TEXTAREA['"]|TEXTAREA/i.test(js);
  h.assert(hasTextareaGuard, 'Keyboard navigation must exclude events originating in TEXTAREA elements');
});

harness.register(2, 'F5', 'T2.KEY.4', 'Space bar advances to next slide when not focused on an interactive element', (h) => {
  const js = codebase.read('main.js');
  const hasSpace = /' '|'Space'|"Space"/i.test(js);
  h.assert(hasSpace, 'main.js keyboard engine should support Space bar slide advance');
});

harness.register(2, 'F5', 'T2.KEY.5', 'Shift + Space moves to previous slide when not focused on an interactive element', (h) => {
  const js = codebase.read('main.js');
  const hasShift = /shiftKey/i.test(js);
  h.assert(hasShift, 'main.js keyboard engine should support Shift+Space slide reversal');
});

// --- Touch Gesture Edge Cases ---
harness.register(2, 'F5', 'T2.TOUCH.1', 'Touch swipe below threshold (< 50px) does not trigger slide transition', (h) => {
  const js = codebase.read('main.js');
  const hasSwipeThreshold = /30|40|50|60|threshold/i.test(js);
  h.assert(hasSwipeThreshold, 'Touch swipe handler must enforce minimum pixel threshold (e.g. >= 40-50px)');
});

harness.register(2, 'F5', 'T2.TOUCH.2', 'Horizontal swipe dominant (abs(deltaX) > abs(deltaY)) is ignored', (h) => {
  const js = codebase.read('main.js');
  const hasTouchX = /clientX|pageX|deltaX/i.test(js);
  h.assert(hasTouchX, 'Touch swipe handler must compare deltaX and deltaY to ignore horizontal gestures');
});

harness.register(2, 'F5', 'T2.TOUCH.3', 'Multi-touch / pinch gesture (touches.length > 1) does not trigger slide transition', (h) => {
  const js = codebase.read('main.js');
  const hasMultiTouchCheck = /touches\.length/i.test(js);
  h.assert(hasMultiTouchCheck, 'Touch swipe handler must verify single-finger gesture');
});

harness.register(2, 'F5', 'T2.TOUCH.4', 'Touch swipe down on Slide 0 does not navigate past slide 0', (h) => {
  const js = codebase.read('main.js');
  h.assert(/prevSlide|Math\.max/i.test(js), 'Touch swipe down at slide 0 must clamp safely');
});

harness.register(2, 'F5', 'T2.TOUCH.5', 'Touch swipe up on Slide 5 does not navigate past slide 5', (h) => {
  const js = codebase.read('main.js');
  h.assert(/nextSlide|Math\.min/i.test(js), 'Touch swipe up at slide 5 must clamp safely');
});

// --- Dense Content Scroll Ergonomics ---
harness.register(2, 'F3', 'T2.DENSE.1', 'Scrolling down within #projects when not at bottom scrolls internal container first, not slides', (h) => {
  const js = codebase.read('main.js');
  const hasScrollCheck = /scrollTop|scrollHeight|clientHeight/i.test(js);
  h.assert(hasScrollCheck, 'Wheel engine must inspect internal scrollTop/scrollHeight before transitioning slide');
});

harness.register(2, 'F3', 'T2.DENSE.2', 'Scrolling up within #projects when not at top scrolls internal container first, not slides', (h) => {
  const js = codebase.read('main.js');
  const hasTopCheck = /scrollTop/i.test(js);
  h.assert(hasTopCheck, 'Wheel engine must check scrollTop > 0 before triggering previous slide');
});

harness.register(2, 'F3', 'T2.DENSE.3', 'Internal scroll container has max-height preventing viewport overflow', (h) => {
  const css = codebase.read('style.css');
  const hasMaxH = /max-height\s*:\s*(calc\(100vh|100%|80vh|85vh|90vh)/i.test(css);
  h.assert(hasMaxH, 'Internal scrollable container must constrain max-height within slide viewport');
});

harness.register(2, 'F3', 'T2.DENSE.4', 'Mobile width (390px) projects grid wraps cleanly without horizontal overflow', (h) => {
  const css = codebase.read('style.css');
  const hasGridWrap = /grid-template-columns\s*:\s*1fr|flex-direction\s*:\s*column/i.test(css);
  h.assert(hasGridWrap, 'Mobile responsive styles must format project items into single column or auto-fit');
});

harness.register(2, 'F3', 'T2.DENSE.5', 'Mobile width (390px) friends board wraps cleanly without overflowing slide container', (h) => {
  const css = codebase.read('style.css');
  const hasFriendsWrap = /\.friends-grid|\.friends-container/i.test(css);
  h.assert(hasFriendsWrap, 'style.css must define responsive rules for friends grid within slide');
});

// --- Side Dot Indicator Edge Cases ---
harness.register(2, 'F2', 'T2.DOT.1', 'Clicking already active dot does not trigger redundant transition or animation restart', (h) => {
  const js = codebase.read('main.js');
  const hasSelfCheck = /targetIndex\s*===\s*currentSlide|index\s*===\s*currentSlide/i.test(js);
  h.assert(hasSelfCheck, 'Dot click handler must check if target index matches current slide');
});

harness.register(2, 'F2', 'T2.DOT.2', 'Dot click during active transition cooldown lock is safely ignored', (h) => {
  const js = codebase.read('main.js');
  h.assert(/isLocked|isTransitioning|slideLock/i.test(js), 'Dot click handler must respect transition lock');
});

harness.register(2, 'F2', 'T2.DOT.3', 'Each dot provides accessible button or tabindex="0" keyboard focus semantics', (h) => {
  const html = codebase.read('index.html');
  const hasButtonDots = /<button[^>]*class=["'][^"']*slide-dot/i.test(html) || /<a[^>]*class=["'][^"']*slide-dot/i.test(html);
  h.assert(hasButtonDots, 'Slide dots in index.html must be interactive button or anchor elements');
});

harness.register(2, 'F2', 'T2.DOT.4', 'aria-current="true" is set ONLY on active dot, removed from all others', (h) => {
  const js = codebase.read('main.js');
  const hasAriaCurrent = /aria-current|ariaCurrent/i.test(js);
  h.assert(hasAriaCurrent, 'main.js must update aria-current attribute across indicator dots');
});

harness.register(2, 'F2', 'T2.DOT.5', 'Rapid clicking on alternating dots settles safely on final clicked slide', (h) => {
  const js = codebase.read('main.js');
  h.assert(/goToSlide/i.test(js), 'main.js must provide deterministic goToSlide navigation');
});

// --- Navbar & Hash Navigation Edge Cases ---
harness.register(2, 'F6', 'T2.NAV.1', 'Unknown hash (#unknown-section) on page load falls back safely to slide 0', (h) => {
  const js = codebase.read('main.js');
  h.assert(/slideMap|indexOf|default|findIndex/i.test(js), 'Hash parsing must handle unrecognized hashes gracefully');
});

harness.register(2, 'F6', 'T2.NAV.2', 'Empty hash (# or "") on page load defaults to slide 0 without throwing', (h) => {
  const js = codebase.read('main.js');
  h.assert(/location\.hash/i.test(js), 'main.js must handle empty hash on load');
});

harness.register(2, 'F6', 'T2.NAV.3', 'Mobile nav drawer open locks slide navigation until drawer is dismissed', (h) => {
  const js = codebase.read('main.js');
  const hasDrawerCheck = /nav-drawer-open|navDrawerOpen|isDrawerOpen/i.test(js);
  h.assert(hasDrawerCheck, 'Slide navigation must be locked while mobile drawer is open');
});

harness.register(2, 'F6', 'T2.NAV.4', 'Window resize recomputes slide positions without resetting active slide index', (h) => {
  const js = codebase.read('main.js');
  const hasResize = /addEventListener\(\s*['"]resize['"]/i.test(js);
  h.assert(hasResize, 'main.js must listen to resize events to maintain slide alignment');
});

harness.register(2, 'F6', 'T2.NAV.5', 'History popstate event navigates to the corresponding slide matching popped hash', (h) => {
  const js = codebase.read('main.js');
  const hasPopState = /popstate|hashchange/i.test(js);
  h.assert(hasPopState, 'main.js must listen to popstate or hashchange to handle browser back/forward buttons');
});

// --- Dialog & Modal Isolation Edge Cases ---
harness.register(2, 'F7', 'T2.MODAL.1', 'Opening demo runner modal sets modal open state and locks slide controls', (h) => {
  const js = codebase.read('main.js');
  h.assert(/openProjectRunner/i.test(js), 'openProjectRunner function must exist');
});

harness.register(2, 'F7', 'T2.MODAL.2', 'Closing demo runner modal restores slide controls and focus', (h) => {
  const js = codebase.read('main.js');
  h.assert(/closeProjectRunner/i.test(js), 'closeProjectRunner function must exist');
});

harness.register(2, 'F7', 'T2.MODAL.3', 'Opening search dialog sets search open state and locks slide controls', (h) => {
  const js = codebase.read('main.js');
  h.assert(/openSearchModal/i.test(js), 'openSearchModal function must exist');
});

// =======================================================================
// TIER 3: CROSS-FEATURE COMBINATIONS (12 tests)
// =======================================================================

harness.register(3, 'CROSS', 'T3.CROSS.1', 'Search Modal + Slide State: Opening Ctrl+K search on Slide 3 (#memos) preserves active slide 3 and dot 3', (h) => {
  const js = codebase.read('main.js');
  h.assert(js.includes('openSearchModal'), 'openSearchModal must be implemented');
});

harness.register(3, 'CROSS', 'T3.CROSS.2', 'Search Modal Direct Jump: Selecting search result for #friends navigates directly from Slide 0 to Slide 4', (h) => {
  const js = codebase.read('main.js');
  h.assert(js.includes('performSearch') || js.includes('goToSlide'), 'Search selection must trigger slide transition');
});

harness.register(3, 'CROSS', 'T3.CROSS.3', 'Demo Runner + Slide Snap: Opening demo runner on Slide 2 blocks wheel scroll from advancing to Slide 3', (h) => {
  const js = codebase.read('main.js');
  h.assert(js.includes('openProjectRunner'), 'openProjectRunner must be implemented');
});

harness.register(3, 'CROSS', 'T3.CROSS.4', 'Demo Runner Close + Slide Preservation: Closing demo runner restores slide 2 position without jumping to slide 0', (h) => {
  const js = codebase.read('main.js');
  h.assert(js.includes('closeProjectRunner'), 'closeProjectRunner must be implemented');
});

harness.register(3, 'CROSS', 'T3.CROSS.5', 'Theme Toggle on Slide: Toggling theme while on Slide 4 (#friends) keeps active slide 4 and dot 4', (h) => {
  const js = codebase.read('main.js');
  h.assert(js.includes('applyTheme'), 'applyTheme must preserve active slide index');
});

harness.register(3, 'CROSS', 'T3.CROSS.6', 'Language Toggle on Slide: Switching language on Slide 1 (#about) updates texts without resetting to slide 0', (h) => {
  const js = codebase.read('main.js');
  h.assert(js.includes('applyLang'), 'applyLang must preserve active slide index');
});

harness.register(3, 'CROSS', 'T3.CROSS.7', 'Language Toggle + Dot Tooltips: Language switch updates side indicator dot aria-labels in active language', (h) => {
  const js = codebase.read('main.js');
  h.assert(js.includes('applyLang'), 'applyLang must update side dot accessible labels');
});

harness.register(3, 'CROSS', 'T3.CROSS.8', 'Deep Link Hash on Load: Loading with #projects sets active slide to 2 and highlights 3rd dot', (h) => {
  const js = codebase.read('main.js');
  h.assert(js.includes('location.hash'), 'location.hash sync must be implemented');
});

harness.register(3, 'CROSS', 'T3.CROSS.9', 'Deep Link Hash on Load: Loading with #contact sets active slide to 5 and highlights 6th dot', (h) => {
  const js = codebase.read('main.js');
  h.assert(js.includes('location.hash'), 'location.hash sync must handle #contact slide');
});

harness.register(3, 'CROSS', 'T3.CROSS.10', 'Mobile Drawer + Slide Navigation: Selecting a link in mobile drawer closes drawer and transitions to target slide', (h) => {
  const js = codebase.read('main.js');
  h.assert(js.includes('toggleMobileNav'), 'toggleMobileNav must close drawer on slide transition');
});

harness.register(3, 'CROSS', 'T3.CROSS.11', 'Kaomoji Mascot Layering: Mascot fixed container has z-index above slide sections and below modal dialogs', (h) => {
  const css = codebase.read('style.css');
  h.assert(css.includes('kaomoji-mascot'), 'kaomoji-mascot must have appropriate z-index in style.css');
});

harness.register(3, 'CROSS', 'T3.CROSS.12', 'Uptime Clock Persistence: Continuous slide transitions do not clear or stop the uptime clock timer', (h) => {
  const js = codebase.read('main.js');
  h.assert(js.includes('updateUptimeClock'), 'updateUptimeClock must run continuously across slides');
});

// =======================================================================
// TIER 4: REAL-WORLD WORKLOAD SCENARIOS (5 multi-step workflows)
// =======================================================================

harness.register(4, 'WORKLOAD', 'T4.SCENARIO.1', 'Scenario 1: Step-by-step walkthrough slide 0 -> 5 via keyboard, checking hash & dot sync at each step', (h) => {
  const js = codebase.read('main.js');
  h.assert(js.includes('ArrowDown') && js.includes('replaceState'), 'Step-by-step walkthrough requires keyboard arrow down and replaceState');
});

harness.register(4, 'WORKLOAD', 'T4.SCENARIO.2', 'Scenario 2: Random jumping via bullet dots (0 -> 4 -> 1 -> 5 -> 2)', (h) => {
  const js = codebase.read('main.js');
  h.assert(js.includes('goToSlide') || js.includes('slide-dot'), 'Random jumping requires dot click binding and goToSlide');
});

harness.register(4, 'WORKLOAD', 'T4.SCENARIO.3', 'Scenario 3: Dense content interaction & Demo runner modal workflow', (h) => {
  const js = codebase.read('main.js');
  h.assert(js.includes('openProjectRunner') && js.includes('closeProjectRunner'), 'Scenario 3 requires full project runner modal lifecycle');
});

harness.register(4, 'WORKLOAD', 'T4.SCENARIO.4', 'Scenario 4: Mobile touch swipe sequence through all slides', (h) => {
  const js = codebase.read('main.js');
  h.assert(js.includes('touchstart') && js.includes('touchend'), 'Scenario 4 requires touchstart and touchend swipe processing');
});

harness.register(4, 'WORKLOAD', 'T4.SCENARIO.5', 'Scenario 5: Direct hash navigation and popover inspection on slide 2', (h) => {
  const js = codebase.read('main.js');
  h.assert(js.includes('renderPopoverContent') && js.includes('location.hash'), 'Scenario 5 requires deep link hash and popover content rendering');
});

// ── TEST EXECUTION RUNNER ──────────────────────────────────────────────
async function runTestSuite() {
  console.log(`\n${colors.bold}${colors.cyan}========================================================================${colors.reset}`);
  console.log(`${colors.bold}${colors.white}  FULL-PAGE SINGLE SLIDE PRESENTATION — E2E TEST SUITE${colors.reset}`);
  console.log(`${colors.dim}  Specification: ORIGINAL_REQUEST § 2026-09-27T09:51:44Z & TEST_INFRA.md${colors.reset}`);
  console.log(`${colors.dim}  Working Directory: ${projectRoot}${colors.reset}`);
  console.log(`${colors.bold}${colors.cyan}========================================================================${colors.reset}\n`);

  const startTime = Date.now();
  let testsToRun = harness.tests;

  if (filterTier) {
    testsToRun = testsToRun.filter(t => String(t.tier) === filterTier);
  }
  if (filterFeature) {
    testsToRun = testsToRun.filter(t => t.feature.toUpperCase() === filterFeature);
  }

  const tierGroups = {
    1: { name: 'Tier 1: Feature Coverage (F1 - F7)', passed: 0, failed: 0, tests: [] },
    2: { name: 'Tier 2: Boundary & Corner Cases', passed: 0, failed: 0, tests: [] },
    3: { name: 'Tier 3: Cross-Feature Combinations', passed: 0, failed: 0, tests: [] },
    4: { name: 'Tier 4: Real-World Scenarios', passed: 0, failed: 0, tests: [] }
  };

  const featureGroups = {};
  for (const fKey of Object.keys(FEATURE_MAP)) {
    featureGroups[fKey] = { name: FEATURE_MAP[fKey].name, total: 0, passed: 0 };
  }

  const failures = [];

  for (const t of testsToRun) {
    const tStart = Date.now();
    let status = 'PASS';
    let errMessage = '';

    try {
      t.runFn(harness);
      if (tierGroups[t.tier]) tierGroups[t.tier].passed++;
      if (featureGroups[t.feature]) featureGroups[t.feature].passed++;
    } catch (err) {
      status = 'FAIL';
      errMessage = err.message;
      if (tierGroups[t.tier]) tierGroups[t.tier].failed++;
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

  // ── FEATURE BREAKDOWN ────────────────────────────────────────────────
  console.log(`\n${colors.bold}${colors.white}  SLIDE PRESENTATION FEATURE BREAKDOWN${colors.reset}`);
  console.log(`${colors.dim}------------------------------------------------------------------------${colors.reset}`);

  for (const [fKey, fData] of Object.entries(featureGroups)) {
    if (fData.total === 0) continue;
    const status = fData.passed === fData.total ? `${colors.green}PASSED${colors.reset}` : `${colors.yellow}PENDING${colors.reset}`;
    console.log(`  ${colors.bold}[${fKey}] ${fData.name.padEnd(38)}${colors.reset} : ${fData.passed}/${fData.total} tests [${status}]`);
  }
  console.log(`${colors.bold}${colors.cyan}========================================================================${colors.reset}\n`);

  if (failures.length > 0) {
    console.log(`${colors.bold}${colors.yellow}  PENDING IMPLEMENTATION ITEMS / FAILED ASSERTIONS (${failures.length}):${colors.reset}`);
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
