import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const projectRoot = process.cwd();
console.log('--- RUNNING SINGLE SLIDE & STREAMLINED PORTFOLIO TESTS ---');

// 1. Read index.html and verify required DOM IDs & attributes
const htmlContent = fs.readFileSync(path.join(projectRoot, 'index.html'), 'utf8');

const requiredElements = [
  'id="home"',
  'id="about"',
  'id="friends"',
  'id="contact"',
  'id="hero-typewriter-name"',
  'id="hero-typewriter-cursor"',
  'id="slide-indicator"',
  'id="kaomoji-mascot"',
  'id="kaomoji-face"',
  'id="km-eye-l"',
  'id="km-eye-r"',
  'id="friends-board-grid"',
  '<p class="footer-brand"><span class="logo-bracket">&lt;</span>ducmanh<span class="logo-bracket">/&gt;</span></p>',
];

const forbiddenElements = [
  'id="memos"',
  'id="hero-cv-btn"',
  'footer-uptime-clock',
  'footer-visitor-counter',
  'section-label',
];

console.log('\n[TEST 1] Verifying required elements in index.html:');
let failed = 0;
for (const elem of requiredElements) {
  if (htmlContent.includes(elem)) {
    console.log(`  ✓ Found: ${elem}`);
  } else {
    console.error(`  ✗ MISSING: ${elem}`);
    failed++;
  }
}

console.log('\n[TEST 2] Verifying removed elements are NOT present in index.html:');
for (const elem of forbiddenElements) {
  if (!htmlContent.includes(elem)) {
    console.log(`  ✓ Correctly removed: ${elem}`);
  } else {
    console.error(`  ✗ UNEXPECTEDLY PRESENT: ${elem}`);
    failed++;
  }
}

if (failed > 0) {
  console.error(`\nFAILED: ${failed} element checks failed.`);
  process.exit(1);
}

// 2. Read main.js and verify logic
const jsContent = fs.readFileSync(path.join(projectRoot, 'main.js'), 'utf8');

console.log('\n[TEST 3] Verifying main.js SLIDE_IDS and components:');
if (jsContent.includes("const SLIDE_IDS = ['home', 'about', 'friends', 'contact'];")) {
  console.log("  ✓ SLIDE_IDS correctly configured for 4 slides: ['home', 'about', 'friends', 'contact']");
} else {
  console.error("  ✗ SLIDE_IDS is not configured correctly!");
  process.exit(1);
}

if (jsContent.includes("var FRIENDS_DATA = [];")) {
  console.log("  ✓ FRIENDS_DATA is reset to empty array []");
} else {
  console.error("  ✗ FRIENDS_DATA is not empty!");
  process.exit(1);
}

if (jsContent.includes('km-eye-l') && jsContent.includes('km-eye-r') && jsContent.includes('mousemove')) {
  console.log("  ✓ Kaomoji mascot tracks mouse coordinates across window via mousemove");
} else {
  console.error("  ✗ Kaomoji mascot mouse tracking missing!");
  process.exit(1);
}

if (jsContent.includes("Hi, I'm Duc Manh") && jsContent.includes('hero-typewriter-name')) {
  console.log("  ✓ Hero typewriter configured to type \"Hi, I'm Duc Manh\"");
} else {
  console.error("  ✗ Hero typewriter for name missing!");
  process.exit(1);
}

// 3. Execution Sandbox Test
class MockElement {
  constructor(tag, id = '') {
    this.tagName = tag.toUpperCase();
    this.id = id;
    this.className = '';
    this.innerHTML = '';
    this.textContent = '';
    this.style = {};
    this.children = [];
    this.attributes = new Map();
    this.classList = {
      classes: new Set(),
      add: (...c) => c.forEach(x => this.classList.classes.add(x)),
      remove: (...c) => c.forEach(x => this.classList.classes.delete(x)),
      toggle: (c, force) => {
        if (force === undefined) {
          if (this.classList.classes.has(c)) this.classList.classes.delete(c);
          else this.classList.classes.add(c);
        } else if (force) {
          this.classList.classes.add(c);
        } else {
          this.classList.classes.delete(c);
        }
      },
      contains: (c) => this.classList.classes.has(c)
    };
  }
  querySelector() { return null; }
  querySelectorAll() { return []; }
  setAttribute(k, v) { this.attributes.set(k, String(v)); }
  getAttribute(k) { return this.attributes.get(k) || null; }
  removeAttribute(k) { this.attributes.delete(k); }
  addEventListener() {}
  removeEventListener() {}
  scrollIntoView() {}
  getBoundingClientRect() {
    return { top: 800, left: 1200, width: 80, height: 36, right: 1280, bottom: 836 };
  }
}

const mockDoc = {
  elements: new Map(),
  getElementById(id) {
    if (!this.elements.has(id)) {
      this.elements.set(id, new MockElement('div', id));
    }
    return this.elements.get(id);
  },
  querySelectorAll() { return []; },
  querySelector() { return null; },
  addEventListener() {},
  documentElement: new MockElement('html'),
  body: new MockElement('body'),
  activeElement: { tagName: 'BODY' }
};

const sandbox = {
  console,
  setTimeout: (fn, ms) => {
    const t = setTimeout(fn, ms);
    return { unref: () => clearTimeout(t) };
  },
  clearTimeout,
  document: mockDoc,
  window: {
    addEventListener() {},
    removeEventListener() {},
    location: { hash: '' },
    scrollY: 0,
    dispatchEvent() {},
    matchMedia: () => ({ matches: false, addEventListener() {}, removeEventListener() {} })
  },
  localStorage: {
    store: new Map(),
    getItem(k) { return this.store.get(k) || null; },
    setItem(k, v) { this.store.set(k, String(v)); }
  },
  sessionStorage: {
    store: new Map(),
    getItem(k) { return this.store.get(k) || null; },
    setItem(k, v) { this.store.set(k, String(v)); }
  },
  IntersectionObserver: class {
    observe() {}
    unobserve() {}
    disconnect() {}
  },
  CustomEvent: class {
    constructor(type, params = {}) {
      this.type = type;
      this.detail = params.detail;
    }
  },
  history: { replaceState() {} },
  Math,
  Date,
  Array,
  Object,
  String,
  Number,
  Boolean,
  Set,
  Map,
  parseInt,
  parseFloat,
  isNaN
};

vm.createContext(sandbox);

console.log('\n[TEST 4] Testing main.js runtime initialization in sandbox:');
try {
  vm.runInContext(jsContent, sandbox);
  console.log('  ✓ main.js evaluated without runtime errors');

  // Test friends board rendering empty state
  const friendsGrid = mockDoc.getElementById('friends-board-grid');
  sandbox.renderFriendsBoard();
  if (friendsGrid.innerHTML.includes('friends-empty-card')) {
    console.log('  ✓ renderFriendsBoard() produces friends-empty-card when FRIENDS_DATA is empty');
  } else {
    console.error('  ✗ renderFriendsBoard() did not render empty card!');
    process.exit(1);
  }

  // Test typewriter trigger
  sandbox.resetHeroTypewriter();
  const heroNameEl = mockDoc.getElementById('hero-typewriter-name');
  console.log('  ✓ resetHeroTypewriter() initialized successfully');

} catch (err) {
  console.error('  ✗ Runtime evaluation error in sandbox:', err);
  process.exit(1);
}

console.log('\n======================================================');
console.log('🎉 ALL TESTS PASSED! CLEAN SINGLE SLIDE EXPERIENCE READY');
console.log('======================================================\n');
