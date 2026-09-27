#!/usr/bin/env node
/**
 * scripts/test-challenger-r2-edgecases.mjs
 *
 * Empirical Adversarial Edge-Case Stress Harness for Challenger 1 (Iteration 2)
 *
 * Targets:
 * - goToSlide('invalid')
 * - goToSlide(-Infinity)
 * - goToSlide(Infinity)
 * - goToSlide(2.7)
 * - Additional boundary edge cases: null, undefined, NaN, objects, arrays, numeric strings, floats
 */

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const colors = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  cyan: '\x1b[36m',
  yellow: '\x1b[33m'
};

const sym = {
  pass: `${colors.green}✓${colors.reset}`,
  fail: `${colors.red}✗${colors.reset}`
};

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

class MockEvent {
  constructor(type, init = {}) {
    this.type = type;
    this.defaultPrevented = false;
    this.bubbles = init.bubbles ?? true;
    this.cancelable = init.cancelable ?? true;
    this.target = init.target || null;
    this.currentTarget = null;
    Object.assign(this, init);
  }
  preventDefault() { this.defaultPrevented = true; }
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
    this.listeners = new Map();
    this.dataset = {};
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
  setAttribute(k, v) { this.attributes.set(k, String(v)); }
  getAttribute(k) { return this.attributes.get(k) ?? null; }
  hasAttribute(k) { return this.attributes.has(k); }
  removeAttribute(k) { this.attributes.delete(k); }
  addEventListener(event, fn) {
    if (!this.listeners.has(event)) this.listeners.set(event, []);
    this.listeners.get(event).push(fn);
  }
  dispatchEvent(event) {
    event.target = this;
    event.currentTarget = this;
    const list = this.listeners.get(event.type) || [];
    for (const fn of list) fn(event);
  }
  click() {
    this.dispatchEvent(new MockEvent('click', { target: this }));
  }
  appendChild(child) {
    child.parentNode = this;
    this.children.push(child);
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
  showModal() { this.open = true; }
  close() { this.open = false; }
  focus() {}
  blur() {}
  scrollIntoView() {}
}

function createEnv() {
  const elements = new Map();
  const getOrCreate = (tag, id) => {
    const key = `${tag}#${id}`;
    if (!elements.has(key)) elements.set(key, new MockElement(tag, id));
    return elements.get(key);
  };

  const docEl = new MockElement('html');
  const bodyEl = new MockElement('body');
  docEl.appendChild(bodyEl);

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

  const mockDoc = {
    documentElement: docEl,
    body: bodyEl,
    activeElement: bodyEl,
    getElementById(id) { return getOrCreate('div', id); },
    querySelector(sel) {
      if (sel === 'html') return docEl;
      if (sel === 'body') return bodyEl;
      if (sel.startsWith('#')) return getOrCreate('div', sel.slice(1));
      if (sel === '.slide-indicator') return sideIndicator;
      return null;
    },
    querySelectorAll(sel) {
      if (sel === '.slide' || sel === 'section.slide') return slideElements;
      if (sel === '.slide-dot') return dotElements;
      if (sel === '.nav-link') return navLinks;
      return [];
    },
    createElement(tag) { return new MockElement(tag); },
    addEventListener() {},
    removeEventListener() {}
  };

  const winListeners = new Map();
  const mockWin = {
    innerWidth: 1200,
    innerHeight: 800,
    scrollY: 0,
    location: { href: 'https://mhna.id.vn/', hash: '' },
    history: {
      replaceState: (state, title, url) => {
        if (url && typeof url === 'string') {
          const idx = url.indexOf('#');
          if (idx !== -1) mockWin.location.hash = url.slice(idx);
        }
      }
    },
    addEventListener(ev, fn) {
      if (!winListeners.has(ev)) winListeners.set(ev, []);
      winListeners.get(ev).push(fn);
    },
    removeEventListener(ev, fn) {
      if (!winListeners.has(ev)) return;
      winListeners.set(ev, winListeners.get(ev).filter(f => f !== fn));
    },
    dispatchEvent(ev) {
      const list = winListeners.get(ev.type) || [];
      for (const fn of list) fn(ev);
    },
    matchMedia: () => ({ matches: false, addEventListener: () => {} }),
    requestAnimationFrame: (cb) => setTimeout(cb, 16),
    cancelAnimationFrame: (id) => clearTimeout(id)
  };

  const sandbox = {
    document: mockDoc,
    window: mockWin,
    navigator: { clipboard: { writeText: async () => true } },
    localStorage: {
      store: {},
      getItem(k) { return this.store[k] ?? null; },
      setItem(k, v) { this.store[k] = String(v); },
      removeItem(k) { delete this.store[k]; }
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
    CustomEvent: class extends MockEvent {
      constructor(type, init = {}) {
        super(type, init);
        this.detail = init.detail || {};
      }
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
  const mainJsCode = fs.readFileSync(path.join(projectRoot, 'main.js'), 'utf8');
  vm.runInContext(mainJsCode, sandbox);

  if (typeof sandbox.initSlideEngine === 'function') {
    sandbox.initSlideEngine();
  }

  return { sandbox, win: mockWin, dotElements };
}

let passes = 0;
let fails = 0;

function assert(condition, name, details = '') {
  if (condition) {
    passes++;
    console.log(`  ${sym.pass} [PASS] ${name}`);
  } else {
    fails++;
    console.error(`  ${sym.fail} [FAIL] ${name}`);
    if (details) console.error(`         ${colors.red}Details: ${details}${colors.reset}`);
  }
}

async function run() {
  console.log(`\n${colors.bold}${colors.cyan}========================================================================${colors.reset}`);
  console.log(`${colors.bold}${colors.cyan}  EMPIRICAL ADVERSARIAL EDGE CASE TEST HARNESS — CHALLENGER 1 (R2)  ${colors.reset}`);
  console.log(`${colors.bold}${colors.cyan}========================================================================${colors.reset}\n`);

  const { sandbox, win, dotElements } = createEnv();

  // Test 1: Baseline at slide 0
  assert(sandbox.getCurrentSlide() === 0, '1. Initial state starts at slide 0');

  // Test 2: goToSlide('invalid')
  // String that cannot be parsed as a number must be safely rejected
  sandbox.goToSlide('invalid');
  assert(sandbox.getCurrentSlide() === 0, '2.1 goToSlide("invalid") leaves currentSlide at 0 (no corruption)');
  assert(win.location.hash !== '#undefined', '2.2 URL hash is not polluted with "#undefined"');
  assert(!Number.isNaN(sandbox.getCurrentSlide()), '2.3 currentSlide is not NaN');

  // Test 3: goToSlide(NaN) and goToSlide(undefined)
  sandbox.goToSlide(NaN);
  assert(sandbox.getCurrentSlide() === 0, '3.1 goToSlide(NaN) cleanly rejected, currentSlide remains 0');
  sandbox.goToSlide(undefined);
  assert(sandbox.getCurrentSlide() === 0, '3.2 goToSlide(undefined) cleanly rejected, currentSlide remains 0');

  // Test 4: Additional invalid types (null, {}, [], boolean)
  sandbox.goToSlide(null);
  assert(sandbox.getCurrentSlide() === 0, '4.1 goToSlide(null) cleanly rejected');
  sandbox.goToSlide({});
  assert(sandbox.getCurrentSlide() === 0, '4.2 goToSlide({}) cleanly rejected');
  sandbox.goToSlide([]);
  assert(sandbox.getCurrentSlide() === 0, '4.3 goToSlide([]) cleanly rejected');
  sandbox.goToSlide(true);
  assert(sandbox.getCurrentSlide() === 0, '4.4 goToSlide(true) cleanly rejected');
  sandbox.goToSlide(false);
  assert(sandbox.getCurrentSlide() === 0, '4.5 goToSlide(false) cleanly rejected');

  // Test 5: goToSlide(Infinity)
  // Should clamp to max index (5)
  sandbox.goToSlide(Infinity, { force: true });
  await sleep(750);
  assert(sandbox.getCurrentSlide() === 5, '5.1 goToSlide(Infinity) clamps safely to terminal slide 5');
  assert(win.location.hash === '#contact', '5.2 URL hash updated to "#contact"');
  assert(dotElements[5].classList.contains('active'), '5.3 Dot 5 is active');

  // Test 6: goToSlide(-Infinity)
  // Should clamp to min index (0)
  sandbox.goToSlide(-Infinity, { force: true });
  await sleep(750);
  assert(sandbox.getCurrentSlide() === 0, '6.1 goToSlide(-Infinity) clamps safely to boundary slide 0');
  assert(win.location.hash === '#home', '6.2 URL hash updated to "#home"');
  assert(dotElements[0].classList.contains('active'), '6.3 Dot 0 is active');

  // Test 7: goToSlide(2.7)
  // Floating point value should be safely rounded (2.7 -> 3)
  sandbox.goToSlide(2.7, { force: true });
  await sleep(750);
  assert(sandbox.getCurrentSlide() === 3, '7.1 goToSlide(2.7) rounds and clamps to slide 3 (#memos)');
  assert(win.location.hash === '#memos', '7.2 URL hash updated to "#memos"');
  assert(dotElements[3].classList.contains('active'), '7.3 Dot 3 is active');

  // Test 8: Other float values (0.2 -> 0, 4.4 -> 4, -0.6 -> clamped to 0)
  sandbox.goToSlide(0.2, { force: true });
  await sleep(750);
  assert(sandbox.getCurrentSlide() === 0, '8.1 goToSlide(0.2) rounds to slide 0 (#home)');

  sandbox.goToSlide(4.4, { force: true });
  await sleep(750);
  assert(sandbox.getCurrentSlide() === 4, '8.2 goToSlide(4.4) rounds to slide 4 (#friends)');

  sandbox.goToSlide(-0.6, { force: true });
  await sleep(750);
  assert(sandbox.getCurrentSlide() === 0, '8.3 goToSlide(-0.6) rounds to -1 and clamps to 0 (#home)');

  // Test 9: Valid numeric strings ("2", "5", "0")
  sandbox.goToSlide('2', { force: true });
  await sleep(750);
  assert(sandbox.getCurrentSlide() === 2, '9.1 goToSlide("2") parses string to slide 2 (#projects)');

  sandbox.goToSlide('5', { force: true });
  await sleep(750);
  assert(sandbox.getCurrentSlide() === 5, '9.2 goToSlide("5") parses string to slide 5 (#contact)');

  sandbox.goToSlide('0', { force: true });
  await sleep(750);
  assert(sandbox.getCurrentSlide() === 0, '9.3 goToSlide("0") parses string to slide 0 (#home)');

  // Test 10: State recovery after invalid calls
  // Calling invalid methods in succession does not break subsequent valid navigation
  sandbox.goToSlide(NaN);
  sandbox.goToSlide(undefined);
  sandbox.goToSlide('foobar');
  assert(sandbox.getCurrentSlide() === 0, '10.1 Multiple invalid calls preserved slide 0');

  sandbox.nextSlide();
  await sleep(750);
  assert(sandbox.getCurrentSlide() === 1, '10.2 nextSlide() operates normally after invalid calls (advances to 1)');

  sandbox.prevSlide();
  await sleep(750);
  assert(sandbox.getCurrentSlide() === 0, '10.3 prevSlide() operates normally after invalid calls (retreats to 0)');

  console.log(`\n------------------------------------------------------------------------`);
  console.log(`Results: ${passes} passed, ${fails} failed`);
  console.log(`------------------------------------------------------------------------\n`);

  process.exit(fails > 0 ? 1 : 0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
