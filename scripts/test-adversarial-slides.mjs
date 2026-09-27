#!/usr/bin/env node
/**
 * scripts/test-adversarial-slides.mjs
 * 
 * Empirical Adversarial Test Harness for Full-Page Single Slide Presentation Engine
 * Milestone M1 - Stress Testing & Failure Mode Exploration
 *
 * Verifies:
 * - High-frequency mouse wheel bursts (50 events / 100ms)
 * - Boundary clamping at extremes (slide 0 and slide 5, negative/NaN indices)
 * - Keyboard navigation spam (50 keydown events / 50ms)
 * - Modal dialog isolation under continuous event floods
 * - Form input / editable focus isolation
 * - Dense content scrollable boundaries vs slide snapping
 * - Multi-input interleaving (wheel + keyboard + dot clicks)
 * - DOM & CSS structural invariants
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
  dim: '\x1b[2m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m'
};

const sym = {
  pass: `${colors.green}✓${colors.reset}`,
  fail: `${colors.red}✗${colors.reset}`,
  arrow: `${colors.cyan}→${colors.reset}`
};

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// ── MOCK EVENT MODEL ───────────────────────────────────────────────────
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
  stopPropagation() {}
  stopImmediatePropagation() {}
}

class MockWheelEvent extends MockEvent {
  constructor(type, init = {}) {
    super(type, init);
    this.deltaX = init.deltaX ?? 0;
    this.deltaY = init.deltaY ?? 0;
    this.deltaZ = init.deltaZ ?? 0;
  }
}

class MockKeyboardEvent extends MockEvent {
  constructor(type, init = {}) {
    super(type, init);
    this.key = init.key ?? '';
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
    this.listeners = new Map();
    this.dataset = {};
    this.open = false;
    this.scrollTop = 0;
    this.scrollHeight = 1000;
    this.clientHeight = 600;
    this.isContentEditable = false;

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

  removeAttribute(k) {
    this.attributes.delete(k);
    if (k === 'id') this.id = '';
    if (k === 'class') {
      this.className = '';
      this.classList.classes.clear();
    }
  }

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

// ── ENVIRONMENT FACTORY ────────────────────────────────────────────────
function createHarnessEnvironment() {
  const elements = new Map();
  const getOrCreate = (tag, id) => {
    const key = `${tag}#${id}`;
    if (!elements.has(key)) {
      elements.set(key, new MockElement(tag, id));
    }
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

  // Projects slide scrollable
  const projectsSlide = getOrCreate('section', 'projects');
  const projectsScrollable = new MockElement('div');
  projectsScrollable.classList.add('slide-scrollable');
  projectsScrollable.scrollTop = 0;
  projectsScrollable.clientHeight = 600;
  projectsScrollable.scrollHeight = 1200;
  projectsSlide.appendChild(projectsScrollable);

  // Modals
  const runnerModal = getOrCreate('dialog', 'project-runner-modal');
  bodyEl.appendChild(runnerModal);
  const searchModal = getOrCreate('dialog', 'search-modal');
  bodyEl.appendChild(searchModal);

  // Form elements for input testing
  const textInput = new MockElement('input');
  textInput.setAttribute('type', 'text');
  bodyEl.appendChild(textInput);
  const textArea = new MockElement('textarea');
  bodyEl.appendChild(textArea);

  let activeEl = bodyEl;

  const docListeners = new Map();
  const mockDoc = {
    documentElement: docEl,
    body: bodyEl,
    get activeElement() { return activeEl; },
    set activeElement(el) { activeEl = el; },
    getElementById(id) { return getOrCreate('div', id); },
    querySelector(sel) {
      if (sel === 'html') return docEl;
      if (sel === 'body') return bodyEl;
      if (sel === 'dialog[open]') {
        for (const el of elements.values()) {
          if (el.tagName === 'DIALOG' && el.open) return el;
        }
        return null;
      }
      if (sel.startsWith('#')) return getOrCreate('div', sel.slice(1));
      if (sel === '.slide-indicator') return sideIndicator;
      if (sel === '.slide-scrollable') return projectsScrollable;
      return null;
    },
    querySelectorAll(sel) {
      if (sel === '.slide' || sel === 'section.slide') return slideElements;
      if (sel === '.nav-link') return navLinks;
      if (sel === '.slide-dot') return dotElements;
      if (sel === '.slide-scrollable') return [projectsScrollable];
      if (sel === 'section[id]') return slideElements;
      if (sel === '.reveal') return [];
      if (sel === '.code-tab') return [];
      if (sel === '.code-block-wrapper') return [];
      if (sel.includes('[data-project-id]')) return [];
      return [];
    },
    createElement(tag) { return new MockElement(tag); },
    addEventListener(event, fn) {
      if (!docListeners.has(event)) docListeners.set(event, []);
      docListeners.get(event).push(fn);
    },
    removeEventListener(event, fn) {
      if (!docListeners.has(event)) return;
      docListeners.set(event, docListeners.get(event).filter(f => f !== fn));
    },
    dispatchEvent(event) {
      const list = docListeners.get(event.type) || [];
      for (const fn of list) fn(event);
    }
  };

  const winListeners = new Map();
  const mockWin = {
    innerWidth: 1440,
    innerHeight: 900,
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
    addEventListener(event, fn) {
      if (!winListeners.has(event)) winListeners.set(event, []);
      winListeners.get(event).push(fn);
    },
    removeEventListener(event, fn) {
      if (!winListeners.has(event)) return;
      winListeners.set(event, winListeners.get(event).filter(f => f !== fn));
    },
    dispatchEvent(event) {
      event.target = event.target || mockWin;
      event.currentTarget = mockWin;
      const list = winListeners.get(event.type) || [];
      for (const fn of list) fn(event);
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

  // Load and execute main.js
  const mainJsCode = fs.readFileSync(path.join(projectRoot, 'main.js'), 'utf8');
  vm.runInContext(mainJsCode, sandbox);

  // Initialize engine
  if (typeof sandbox.initSlideEngine === 'function') {
    sandbox.initSlideEngine();
  } else if (typeof sandbox.window.initSlideEngine === 'function') {
    sandbox.window.initSlideEngine();
  }

  return {
    sandbox,
    doc: mockDoc,
    win: mockWin,
    slideElements,
    dotElements,
    navLinks,
    projectsScrollable,
    runnerModal,
    searchModal,
    textInput,
    textArea,
    setActiveElement: (el) => { activeEl = el; }
  };
}

// ── TEST RUNNER ────────────────────────────────────────────────────────
const assertions = [];
let passCount = 0;
let failCount = 0;

function assert(condition, testName, details) {
  if (condition) {
    passCount++;
    console.log(`  ${sym.pass} [PASS] ${testName}`);
  } else {
    failCount++;
    console.error(`  ${sym.fail} [FAIL] ${testName}`);
    if (details) console.error(`         ${colors.red}Details: ${details}${colors.reset}`);
  }
  assertions.push({ testName, passed: Boolean(condition), details });
}

// ── SUITE EXECUTION ────────────────────────────────────────────────────
async function runAdversarialSuites() {
  console.log(`\n${colors.bold}${colors.cyan}========================================================================${colors.reset}`);
  console.log(`${colors.bold}${colors.cyan}  ADVERSARIAL STRESS TEST SUITE — SLIDE PRESENTATION ENGINE  ${colors.reset}`);
  console.log(`${colors.bold}${colors.cyan}========================================================================${colors.reset}\n`);

  // ─────────────────────────────────────────────────────────────────────
  // SUITE 1: RAPID WHEEL BURST FLOODS (50 events in 100ms)
  // ─────────────────────────────────────────────────────────────────────
  console.log(`${colors.bold}SUITE 1: High-Frequency Wheel Bursts & Momentum Floods${colors.reset}`);
  {
    const env = createHarnessEnvironment();
    const { win, sandbox } = env;

    // Start at slide 0
    assert(sandbox.getCurrentSlide() === 0, '1.1 Baseline starts cleanly at slide 0');

    // Fire 50 rapid wheel down events in 100ms
    const burstStart = Date.now();
    for (let i = 0; i < 50; i++) {
      win.dispatchEvent(new MockWheelEvent('wheel', { deltaY: 120, cancelable: true }));
      if (i % 10 === 0) await sleep(2);
    }
    const burstDuration = Date.now() - burstStart;

    // Check immediately: exactly 1 slide transition must have occurred (slide 0 -> 1)
    const slideAfterBurst1 = sandbox.getCurrentSlide();
    assert(slideAfterBurst1 === 1,
      '1.2 50 wheel events fired in ~100ms triggered exactly 1 transition (0 -> 1)',
      `Actual slide: ${slideAfterBurst1} (burst time: ${burstDuration}ms)`
    );

    // Transition lock must be active
    assert(sandbox.isSlideTransitioning() === true, '1.3 Transition lock is active during cooldown');

    // Fire 20 more events during cooldown; must be rejected
    for (let i = 0; i < 20; i++) {
      win.dispatchEvent(new MockWheelEvent('wheel', { deltaY: 150, cancelable: true }));
    }
    assert(sandbox.getCurrentSlide() === 1, '1.4 Additional 20 wheel events during lock are strictly rejected');

    // Wait for cooldown to release (SLIDE_COOLDOWN_MS = 700ms)
    await sleep(750);
    assert(sandbox.isSlideTransitioning() === false, '1.5 Transition lock releases after 700ms cooldown');

    // Fire second burst of 50 wheel events
    for (let i = 0; i < 50; i++) {
      win.dispatchEvent(new MockWheelEvent('wheel', { deltaY: 100, cancelable: true }));
    }
    const slideAfterBurst2 = sandbox.getCurrentSlide();
    assert(slideAfterBurst2 === 2,
      '1.6 Second 50-wheel burst advances cleanly to slide 2 with zero runaway skipping',
      `Actual slide: ${slideAfterBurst2}`
    );

    // Total events fired: 120, exactly 2 transitions occurred!
    assert(sandbox.getCurrentSlide() === 2, '1.7 Total 120 wheel events produced exactly 2 transitions (0 -> 1 -> 2)');
  }

  // ─────────────────────────────────────────────────────────────────────
  // SUITE 2: ALTERNATING WHEEL DIRECTION BURST (RAPID REVERSAL RACE)
  // ─────────────────────────────────────────────────────────────────────
  console.log(`\n${colors.bold}SUITE 2: Rapid Reversal & Alternating Wheel Direction Race${colors.reset}`);
  {
    const env = createHarnessEnvironment();
    const { win, sandbox } = env;

    // From slide 1, fire 25 down events immediately followed by 25 up events in tight synchronous loop
    sandbox.goToSlide(1, { force: true });
    await sleep(750);

    // 25 Down then 25 Up
    for (let i = 0; i < 25; i++) {
      win.dispatchEvent(new MockWheelEvent('wheel', { deltaY: 100, cancelable: true }));
    }
    for (let i = 0; i < 25; i++) {
      win.dispatchEvent(new MockWheelEvent('wheel', { deltaY: -100, cancelable: true }));
    }

    // First event (down) transitions to 2; the up events during the lock are rejected
    assert(sandbox.getCurrentSlide() === 2,
      '2.1 Rapid reversal (25 down + 25 up in 1 tick) cleanly accepts first direction and rejects counter-burst',
      `Actual slide: ${sandbox.getCurrentSlide()}`
    );

    // Wait for lock to clear
    await sleep(750);

    // Now fire single wheel up event: must retreat to 1
    win.dispatchEvent(new MockWheelEvent('wheel', { deltaY: -100, cancelable: true }));
    assert(sandbox.getCurrentSlide() === 1, '2.2 Clean retreat to slide 1 once cooldown has expired');
  }

  // ─────────────────────────────────────────────────────────────────────
  // SUITE 3: BOUNDARY CLAMPING & EXTREME VALUES STRESS
  // ─────────────────────────────────────────────────────────────────────
  console.log(`\n${colors.bold}SUITE 3: Boundary Clamping & Extreme Index Protection${colors.reset}`);
  {
    const env = createHarnessEnvironment();
    const { win, sandbox } = env;

    // At Slide 0:
    assert(sandbox.getCurrentSlide() === 0, '3.1 Positioned at boundary Slide 0');

    // Rapid prevSlide() calls
    for (let i = 0; i < 50; i++) {
      sandbox.prevSlide();
    }
    assert(sandbox.getCurrentSlide() === 0, '3.2 50 synchronous prevSlide() calls from Slide 0 clamp strictly at 0');

    // 50 Wheel up events
    for (let i = 0; i < 50; i++) {
      win.dispatchEvent(new MockWheelEvent('wheel', { deltaY: -120, cancelable: true }));
    }
    assert(sandbox.getCurrentSlide() === 0, '3.3 50 wheel up events at Slide 0 clamp strictly at 0');

    // 50 ArrowUp & 50 PageUp events
    for (let i = 0; i < 50; i++) {
      win.dispatchEvent(new MockKeyboardEvent('keydown', { key: 'ArrowUp' }));
      win.dispatchEvent(new MockKeyboardEvent('keydown', { key: 'PageUp' }));
    }
    assert(sandbox.getCurrentSlide() === 0, '3.4 100 keyboard retreat events at Slide 0 clamp strictly at 0');

    // Extreme negative and non-numeric indices
    sandbox.goToSlide(-1);
    assert(sandbox.getCurrentSlide() === 0, '3.5 goToSlide(-1) clamps strictly to 0');
    sandbox.goToSlide(-9999);
    assert(sandbox.getCurrentSlide() === 0, '3.6 goToSlide(-9999) clamps strictly to 0');
    sandbox.goToSlide(NaN);
    assert(sandbox.getCurrentSlide() === 0, '3.7 goToSlide(NaN) safely coerces/clamps without crashing');
    sandbox.goToSlide(undefined);
    assert(sandbox.getCurrentSlide() === 0, '3.8 goToSlide(undefined) safely coerces/clamps without crashing');

    // Jump to Slide 5
    sandbox.goToSlide(5, { force: true });
    await sleep(750);
    assert(sandbox.getCurrentSlide() === 5, '3.9 Positioned at terminal boundary Slide 5');

    // Rapid nextSlide() calls
    for (let i = 0; i < 50; i++) {
      sandbox.nextSlide();
    }
    assert(sandbox.getCurrentSlide() === 5, '3.10 50 synchronous nextSlide() calls from Slide 5 clamp strictly at 5');

    // 50 Wheel down events
    for (let i = 0; i < 50; i++) {
      win.dispatchEvent(new MockWheelEvent('wheel', { deltaY: 120, cancelable: true }));
    }
    assert(sandbox.getCurrentSlide() === 5, '3.11 50 wheel down events at Slide 5 clamp strictly at 5');

    // 50 ArrowDown, 50 PageDown, 50 Space events
    for (let i = 0; i < 50; i++) {
      win.dispatchEvent(new MockKeyboardEvent('keydown', { key: 'ArrowDown' }));
      win.dispatchEvent(new MockKeyboardEvent('keydown', { key: 'PageDown' }));
      win.dispatchEvent(new MockKeyboardEvent('keydown', { key: ' ' }));
    }
    assert(sandbox.getCurrentSlide() === 5, '3.12 150 keyboard advance events at Slide 5 clamp strictly at 5');

    // Extreme positive indices
    sandbox.goToSlide(6);
    assert(sandbox.getCurrentSlide() === 5, '3.13 goToSlide(6) clamps strictly to 5');
    sandbox.goToSlide(1000);
    assert(sandbox.getCurrentSlide() === 5, '3.14 goToSlide(1000) clamps strictly to 5');
    sandbox.goToSlide(Infinity);
    assert(sandbox.getCurrentSlide() === 5, '3.15 goToSlide(Infinity) clamps strictly to 5');
  }

  // ─────────────────────────────────────────────────────────────────────
  // SUITE 4: KEYBOARD SPAM FLOOD (ArrowDown / PageDown / Space)
  // ─────────────────────────────────────────────────────────────────────
  console.log(`\n${colors.bold}SUITE 4: Keyboard Spam Floods & Transition Lock Integrity${colors.reset}`);
  {
    const env = createHarnessEnvironment();
    const { win, sandbox } = env;

    assert(sandbox.getCurrentSlide() === 0, '4.1 Starting from Slide 0');

    // Fire 50 ArrowDown events in rapid succession (e.g. key repeat)
    for (let i = 0; i < 50; i++) {
      win.dispatchEvent(new MockKeyboardEvent('keydown', { key: 'ArrowDown', cancelable: true }));
    }
    assert(sandbox.getCurrentSlide() === 1,
      '4.2 50 ArrowDown events in rapid spam advances strictly 1 slide to Slide 1',
      `Actual slide: ${sandbox.getCurrentSlide()}`
    );
    assert(sandbox.isSlideTransitioning() === true, '4.3 Transition lock engaged by keyboard navigation');

    await sleep(750);

    // Fire 50 PageDown events in rapid spam
    for (let i = 0; i < 50; i++) {
      win.dispatchEvent(new MockKeyboardEvent('keydown', { key: 'PageDown', cancelable: true }));
    }
    assert(sandbox.getCurrentSlide() === 2,
      '4.4 50 PageDown events in rapid spam advances strictly 1 slide to Slide 2',
      `Actual slide: ${sandbox.getCurrentSlide()}`
    );

    await sleep(750);

    // Fire 50 Space key events in rapid spam
    for (let i = 0; i < 50; i++) {
      win.dispatchEvent(new MockKeyboardEvent('keydown', { key: ' ', cancelable: true }));
    }
    assert(sandbox.getCurrentSlide() === 3,
      '4.5 50 Space events in rapid spam advances strictly 1 slide to Slide 3',
      `Actual slide: ${sandbox.getCurrentSlide()}`
    );

    await sleep(750);

    // Fire 50 Shift+Space events in rapid spam (retreat)
    for (let i = 0; i < 50; i++) {
      win.dispatchEvent(new MockKeyboardEvent('keydown', { key: ' ', shiftKey: true, cancelable: true }));
    }
    assert(sandbox.getCurrentSlide() === 2,
      '4.6 50 Shift+Space events in rapid spam retreats strictly 1 slide to Slide 2',
      `Actual slide: ${sandbox.getCurrentSlide()}`
    );

    await sleep(750);

    // Modifier key flood (Ctrl+ArrowDown, Alt+PageDown, Meta+ArrowDown)
    for (let i = 0; i < 30; i++) {
      win.dispatchEvent(new MockKeyboardEvent('keydown', { key: 'ArrowDown', ctrlKey: true }));
      win.dispatchEvent(new MockKeyboardEvent('keydown', { key: 'PageDown', altKey: true }));
      win.dispatchEvent(new MockKeyboardEvent('keydown', { key: 'ArrowDown', metaKey: true }));
    }
    assert(sandbox.getCurrentSlide() === 2, '4.7 90 modified keystrokes (Ctrl/Alt/Meta) completely ignored');
  }

  // ─────────────────────────────────────────────────────────────────────
  // SUITE 5: MODAL DIALOG & INPUT ISOLATION UNDER HEAVY FLOOD
  // ─────────────────────────────────────────────────────────────────────
  console.log(`\n${colors.bold}SUITE 5: Modal Dialog & Interactive Isolation Under Heavy Floods${colors.reset}`);
  {
    const env = createHarnessEnvironment();
    const { win, sandbox, runnerModal, searchModal, textInput, textArea, setActiveElement } = env;

    sandbox.goToSlide(2, { force: true });
    await sleep(750);
    assert(sandbox.getCurrentSlide() === 2, '5.1 Baseline at Slide 2 (#projects)');

    // 1. Open Demo Runner modal
    runnerModal.open = true;

    // Flood with 50 wheel + 50 keyboard events
    for (let i = 0; i < 50; i++) {
      win.dispatchEvent(new MockWheelEvent('wheel', { deltaY: 100 }));
      win.dispatchEvent(new MockKeyboardEvent('keydown', { key: 'ArrowDown' }));
    }
    assert(sandbox.getCurrentSlide() === 2, '5.2 Runner modal open: 100 wheel+key events completely blocked from navigating slides');

    runnerModal.open = false;
    await sleep(100);

    // 2. Open Search modal
    searchModal.open = true;
    for (let i = 0; i < 50; i++) {
      win.dispatchEvent(new MockWheelEvent('wheel', { deltaY: 100 }));
      win.dispatchEvent(new MockKeyboardEvent('keydown', { key: 'PageDown' }));
    }
    assert(sandbox.getCurrentSlide() === 2, '5.3 Search modal open: 100 wheel+key events completely blocked from navigating slides');

    searchModal.open = false;
    await sleep(100);

    // 3. Focus on input field
    setActiveElement(textInput);
    for (let i = 0; i < 50; i++) {
      win.dispatchEvent(new MockKeyboardEvent('keydown', { key: 'ArrowDown' }));
      win.dispatchEvent(new MockKeyboardEvent('keydown', { key: 'ArrowUp' }));
      win.dispatchEvent(new MockKeyboardEvent('keydown', { key: ' ' }));
    }
    assert(sandbox.getCurrentSlide() === 2, '5.4 Active text input focus: 150 arrow/space keystrokes bypassed without changing slides');

    // 4. Focus on textarea
    setActiveElement(textArea);
    for (let i = 0; i < 50; i++) {
      win.dispatchEvent(new MockKeyboardEvent('keydown', { key: 'PageDown' }));
      win.dispatchEvent(new MockKeyboardEvent('keydown', { key: 'PageUp' }));
    }
    assert(sandbox.getCurrentSlide() === 2, '5.5 Active textarea focus: 100 page keys bypassed without changing slides');

    // Reset active element
    setActiveElement(env.doc.body);
  }

  // ─────────────────────────────────────────────────────────────────────
  // SUITE 6: DENSE SCROLLABLE BOUNDARY DETECTION VS SLIDE TRANSITION
  // ─────────────────────────────────────────────────────────────────────
  console.log(`\n${colors.bold}SUITE 6: Dense Content Internal Scroll vs Slide Snap Boundary${colors.reset}`);
  {
    const env = createHarnessEnvironment();
    const { win, sandbox, projectsScrollable } = env;

    sandbox.goToSlide(2, { force: true });
    await sleep(750);
    assert(sandbox.getCurrentSlide() === 2, '6.1 Baseline on Slide 2 (#projects)');

    // projectsScrollable properties: clientHeight=600, scrollHeight=1200
    // Mid-scroll state: scrollTop = 300
    projectsScrollable.scrollTop = 300;

    // Fire wheel event inside scrollable: target = projectsScrollable
    win.dispatchEvent(new MockWheelEvent('wheel', {
      deltaY: 100,
      target: projectsScrollable,
      cancelable: true
    }));
    assert(sandbox.getCurrentSlide() === 2,
      '6.2 Wheel down when inside scrollable (not at bottom) does NOT advance slide (preserves internal scroll)',
      `Actual slide: ${sandbox.getCurrentSlide()}`
    );

    // Wheel up when inside scrollable (scrollTop=300 > 4): must not retreat slide
    win.dispatchEvent(new MockWheelEvent('wheel', {
      deltaY: -100,
      target: projectsScrollable,
      cancelable: true
    }));
    assert(sandbox.getCurrentSlide() === 2,
      '6.3 Wheel up when inside scrollable (not at top) does NOT retreat slide',
      `Actual slide: ${sandbox.getCurrentSlide()}`
    );

    // Now set scrollable to the absolute bottom: scrollTop = 600 (scrollTop + clientHeight == scrollHeight)
    projectsScrollable.scrollTop = 600;
    await sleep(750);

    win.dispatchEvent(new MockWheelEvent('wheel', {
      deltaY: 100,
      target: projectsScrollable,
      cancelable: true
    }));
    assert(sandbox.getCurrentSlide() === 3,
      '6.4 Wheel down when scrollable is at bottom boundary DOES transition to next slide (Slide 3)',
      `Actual slide: ${sandbox.getCurrentSlide()}`
    );
  }

  // ─────────────────────────────────────────────────────────────────────
  // SUITE 7: SIDE INDICATOR DOT THRASHING & SYNCHRONIZATION
  // ─────────────────────────────────────────────────────────────────────
  console.log(`\n${colors.bold}SUITE 7: Side Indicator Dot Thrashing & Synchronization${colors.reset}`);
  {
    const env = createHarnessEnvironment();
    const { sandbox, dotElements } = env;

    assert(sandbox.getCurrentSlide() === 0, '7.1 Baseline at Slide 0');

    // Click dot 3, then dot 5, then dot 1, then dot 4 within 5ms
    dotElements[3].click();
    dotElements[5].click();
    dotElements[1].click();
    dotElements[4].click();

    // First click transitions to 3; subsequent clicks during cooldown are cleanly rejected
    assert(sandbox.getCurrentSlide() === 3,
      '7.2 Rapid dot clicks (3 -> 5 -> 1 -> 4 in 5ms) cleanly accepts dot 3 and rejects subsequent thrashing',
      `Actual slide: ${sandbox.getCurrentSlide()}`
    );

    // Check dot active classes and aria-current
    assert(dotElements[3].classList.contains('active'), '7.3 Dot 3 has .active class');
    assert(dotElements[3].getAttribute('aria-current') === 'true', '7.4 Dot 3 has aria-current="true"');
    assert(!dotElements[0].classList.contains('active'), '7.5 Dot 0 does not have .active class');
    assert(dotElements[0].getAttribute('aria-current') === 'false', '7.6 Dot 0 has aria-current="false"');

    // Clicking already active dot does nothing and doesn't trigger error
    await sleep(750);
    dotElements[3].click();
    assert(sandbox.getCurrentSlide() === 3, '7.7 Clicking already active dot 3 is a clean no-op');
  }

  // ─────────────────────────────────────────────────────────────────────
  // SUITE 8: CONCURRENT MULTI-MODAL FLOOD (WHEEL + KEY + DOT COMBINED)
  // ─────────────────────────────────────────────────────────────────────
  console.log(`\n${colors.bold}SUITE 8: Concurrent Multi-Modal Flood (Wheel + Key + Dot Simultaneous)${colors.reset}`);
  {
    const env = createHarnessEnvironment();
    const { win, sandbox, dotElements } = env;

    sandbox.goToSlide(0, { force: true });
    await sleep(750);

    // Concurrently fire 20 wheel down + 20 keydown ArrowDown + click dot 4 in same tick
    for (let i = 0; i < 20; i++) {
      win.dispatchEvent(new MockWheelEvent('wheel', { deltaY: 100 }));
      win.dispatchEvent(new MockKeyboardEvent('keydown', { key: 'ArrowDown' }));
    }
    dotElements[4].click();

    // The first event navigates (either to slide 1 or dot target); lock protects the rest
    const slideAfterStorm = sandbox.getCurrentSlide();
    assert(slideAfterStorm === 1,
      '8.1 Concurrent flood of 41 mixed inputs cleanly executed 1 transition without deadlock',
      `Actual slide: ${slideAfterStorm}`
    );
    assert(sandbox.isSlideTransitioning() === true, '8.2 Transition lock successfully captured the storm');

    // Wait for cooldown
    await sleep(750);
    assert(sandbox.isSlideTransitioning() === false, '8.3 Lock successfully recovered after storm');
  }

  // ─────────────────────────────────────────────────────────────────────
  // SUITE 9: STATIC MARKUP & CSS SPECIFICATION INVARIANTS
  // ─────────────────────────────────────────────────────────────────────
  console.log(`\n${colors.bold}SUITE 9: Static Markup & CSS Specification Invariants${colors.reset}`);
  {
    const html = fs.readFileSync(path.join(projectRoot, 'index.html'), 'utf8');
    const css = fs.readFileSync(path.join(projectRoot, 'style.css'), 'utf8');
    const js = fs.readFileSync(path.join(projectRoot, 'main.js'), 'utf8');

    // 1. Exactly 6 slide sections with class "slide"
    const slideMatches = html.match(/<section[^>]+class="[^"]*\bslide\b[^"]*"[^>]*>/g) || [];
    assert(slideMatches.length === 6,
      '9.1 index.html contains exactly 6 sections with class "slide"',
      `Found ${slideMatches.length} slides`
    );

    // 2. All 6 canonical IDs
    const requiredSlideIds = ['home', 'about', 'projects', 'memos', 'friends', 'contact'];
    const allIdsPresent = requiredSlideIds.every(id => html.includes(`id="${id}"`));
    assert(allIdsPresent, '9.2 All 6 canonical slide IDs (#home..#contact) present in index.html');

    // 3. Floating side indicator with 6 dots
    assert(html.includes('id="slide-indicator"'), '9.3 #slide-indicator nav element exists');
    const dotMatches = html.match(/class="[^"]*\bslide-dot\b[^"]*"/g) || [];
    assert(dotMatches.length === 6, '9.4 Exactly 6 .slide-dot buttons present in slide indicator');

    // 4. CSS scroll-snap rules
    assert(/scroll-snap-type:\s*y\s+mandatory/i.test(css), '9.5 style.css defines scroll-snap-type: y mandatory on html/body');
    assert(/scroll-snap-align:\s*start/i.test(css), '9.6 style.css defines scroll-snap-align: start on .slide');
    assert(/height:\s*100vh/i.test(css) && /height:\s*100dvh/i.test(css), '9.7 style.css defines 100vh and 100dvh viewport height for .slide');
    assert(/overscroll-behavior:\s*contain/i.test(css), '9.8 style.css defines overscroll-behavior: contain for .slide-scrollable');

    // 5. JavaScript API exports
    const exportedApis = ['SLIDE_IDS', 'getCurrentSlide', 'goToSlide', 'nextSlide', 'prevSlide', 'isSlideTransitioning'];
    const allApisExported = exportedApis.every(api => js.includes(`window.${api} = ${api}`));
    assert(allApisExported, '9.9 main.js exports all 6 slide APIs to window object');
  }

  // ─────────────────────────────────────────────────────────────────────
  // SUMMARY REPORT
  // ─────────────────────────────────────────────────────────────────────
  console.log(`\n${colors.bold}${colors.cyan}========================================================================${colors.reset}`);
  console.log(`${colors.bold}  ADVERSARIAL STRESS TEST SUMMARY REPORT${colors.reset}`);
  console.log(`${colors.cyan}------------------------------------------------------------------------${colors.reset}`);
  console.log(`  Total Assertions Run : ${assertions.length}`);
  console.log(`  Passed               : ${colors.green}${passCount}${colors.reset}`);
  console.log(`  Failed               : ${failCount > 0 ? colors.red + failCount + colors.reset : '0'}`);
  console.log(`  Overall Status       : ${failCount === 0 ? colors.green + 'ALL TESTS PASSED (100.0%)' + colors.reset : colors.red + 'FAILURES DETECTED' + colors.reset}`);
  console.log(`${colors.bold}${colors.cyan}========================================================================${colors.reset}\n`);

  if (failCount > 0) {
    process.exit(1);
  }
}

runAdversarialSuites().catch(err => {
  console.error('Unhandled test suite error:', err);
  process.exit(1);
});
