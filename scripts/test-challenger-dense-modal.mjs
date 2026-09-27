#!/usr/bin/env node
/**
 * scripts/test-challenger-dense-modal.mjs
 *
 * Empirical Adversarial Test Harness by Challenger 2 (Milestone M1)
 * Focus: Dense Content & Modal Isolation
 * 
 * Invariants Verified:
 * 1. <dialog open> (e.g. #project-runner-modal, #search-modal, generic dialog)
 *    strictly isolates slide navigation: neither wheel nor Arrow/Page/Space keys navigate.
 * 2. .slide-scrollable container (#projects, #friends) consumes wheel events internally
 *    and ONLY bubbles to slide transition when reaching boundary.
 * 3. Touch gestures: swipes < 50px deltaY or horizontal dominant do NOT trigger transitions.
 * 4. Deep linking: loading #friends sets slide index 4 and highlights the 5th dot.
 * 5. Full regression check: test-e2e-slides.mjs and test-e2e-ciallovo.mjs pass 100%.
 */

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

// ── COLOR HELPERS ──────────────────────────────────────────────────
const c = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  dim: '\x1b[2m'
};

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

let totalPassed = 0;
let totalFailed = 0;
const failures = [];

function assert(condition, message) {
  if (!condition) {
    throw new Error(message || 'Assertion failed');
  }
}

function stripAnsi(str) {
  return str.replace(/\u001b\[\d+m/g, '');
}

async function test(name, fn) {
  const start = Date.now();
  try {
    await fn();
    const duration = Date.now() - start;
    console.log(`  ${c.green}✓${c.reset} ${name} ${c.dim}(${duration}ms)${c.reset}`);
    totalPassed++;
  } catch (err) {
    const duration = Date.now() - start;
    console.log(`  ${c.red}✗${c.reset} ${c.bold}${name}${c.reset} ${c.dim}(${duration}ms)${c.reset}`);
    console.log(`    ${c.red}Error: ${err.message}${c.reset}`);
    totalFailed++;
    failures.push({ name, error: err });
  }
}

// ── SYNTHETIC DOM SANDBOX CONSTRUCTOR ──────────────────────────────
class MockEvent {
  constructor(type, init = {}) {
    this.type = type;
    this.defaultPrevented = false;
    this.cancelable = init.cancelable ?? true;
    this.bubbles = init.bubbles ?? true;
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
    this.parentElement = null;
    this.textContent = '';
    this.value = '';
    this.listeners = new Map();
    this.dataset = {};
    this._open = false;
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

  get open() {
    return this._open;
  }

  set open(val) {
    this._open = Boolean(val);
    if (this._open) {
      this.attributes.set('open', '');
    } else {
      this.attributes.delete('open');
    }
  }

  setAttribute(k, v) {
    this.attributes.set(k, String(v));
    if (k === 'id') this.id = String(v);
    if (k === 'open') this._open = true;
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
    if (k === 'open') this._open = false;
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
    if (!this.listeners.has(event)) this.listeners.set(event, []);
    this.listeners.get(event).push(fn);
  }

  removeEventListener(event, fn) {
    if (!this.listeners.has(event)) return;
    this.listeners.set(event, this.listeners.get(event).filter(f => f !== fn));
  }

  dispatchEvent(event) {
    event.target = this;
    event.currentTarget = this;
    const list = this.listeners.get(event.type) || [];
    for (const fn of list) fn(event);
  }

  click() {
    this.dispatchEvent(new MockEvent('click', { bubbles: true, cancelable: true }));
  }

  appendChild(child) {
    child.parentNode = this;
    child.parentElement = this;
    this.children.push(child);
  }

  showModal() {
    this.open = true;
  }

  close() {
    this.open = false;
  }

  focus() {}
  blur() {}
  scrollIntoView() {}

  querySelector(sel) {
    if (sel === 'dialog[open]') {
      if (this.tagName === 'DIALOG' && this.open) return this;
      for (const child of this.children) {
        const found = child.querySelector(sel);
        if (found) return found;
      }
      return null;
    }
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
    return null;
  }

  querySelectorAll(sel) {
    const results = [];
    if (sel.startsWith('.')) {
      const cls = sel.slice(1);
      if (this.classList.contains(cls)) results.push(this);
    } else if (sel.startsWith('#')) {
      const id = sel.slice(1);
      if (this.id === id) results.push(this);
    }
    for (const child of this.children) {
      results.push(...child.querySelectorAll(sel));
    }
    return results;
  }
}

function createFreshEnvironment(initialHash = '') {
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
    s.dataset.slideIndex = String(index);
    bodyEl.appendChild(s);
    return s;
  });

  // Top navbar
  const navBar = getOrCreate('nav', 'navbar');
  bodyEl.appendChild(navBar);
  const navLinksContainer = getOrCreate('div', 'nav-links');
  navBar.appendChild(navLinksContainer);
  const navLinks = slideIds.map(id => {
    const a = new MockElement('a');
    a.setAttribute('href', `#${id}`);
    a.classList.add('nav-link');
    navLinksContainer.appendChild(a);
    return a;
  });

  // Side indicator
  const sideIndicator = getOrCreate('nav', 'slide-indicator');
  sideIndicator.classList.add('slide-indicator');
  bodyEl.appendChild(sideIndicator);
  const dotElements = slideIds.map((id, index) => {
    const dot = new MockElement('button');
    dot.classList.add('slide-dot');
    dot.setAttribute('data-slide-index', String(index));
    dot.setAttribute('data-target', `#${id}`);
    if (index === 0) {
      dot.classList.add('active');
      dot.setAttribute('aria-current', 'true');
    }
    sideIndicator.appendChild(dot);
    return dot;
  });

  // Reading progress
  const progressBar = getOrCreate('div', 'reading-progress');
  bodyEl.appendChild(progressBar);

  // Projects scrollable container
  const projectsSlide = slideElements[2];
  const projectsScrollable = new MockElement('div');
  projectsScrollable.classList.add('container', 'slide-scrollable');
  projectsScrollable.scrollHeight = 1200;
  projectsScrollable.clientHeight = 600;
  projectsScrollable.scrollTop = 0;
  projectsSlide.appendChild(projectsScrollable);

  // Projects grid & cards inside projectsScrollable
  const postsContainer = new MockElement('div', 'posts-container');
  postsContainer.classList.add('projects-grid', 'posts-container');
  projectsScrollable.appendChild(postsContainer);

  const projectCard = new MockElement('article');
  projectCard.classList.add('project-card');
  projectCard.setAttribute('data-project-id', 'mediahub');
  postsContainer.appendChild(projectCard);

  const projectDesc = new MockElement('p');
  projectDesc.classList.add('project-desc');
  projectCard.appendChild(projectDesc);

  // Friends scrollable container
  const friendsSlide = slideElements[4];
  const friendsScrollable = new MockElement('div');
  friendsScrollable.classList.add('container', 'slide-scrollable');
  friendsScrollable.scrollHeight = 1000;
  friendsScrollable.clientHeight = 500;
  friendsScrollable.scrollTop = 0;
  friendsSlide.appendChild(friendsScrollable);

  const friendCard = new MockElement('div');
  friendCard.classList.add('friend-card');
  friendsScrollable.appendChild(friendCard);

  // Dialogs
  const runnerModal = getOrCreate('dialog', 'project-runner-modal');
  runnerModal.classList.add('project-runner-modal');
  bodyEl.appendChild(runnerModal);
  const runnerModalBody = new MockElement('div', 'runner-modal-body');
  runnerModal.appendChild(runnerModalBody);

  const searchModal = getOrCreate('dialog', 'search-modal');
  searchModal.classList.add('search-modal');
  bodyEl.appendChild(searchModal);
  const searchInput = new MockElement('input', 'search-input');
  searchModal.appendChild(searchInput);

  const genericDialog = getOrCreate('dialog', 'generic-dialog');
  bodyEl.appendChild(genericDialog);

  const docListeners = new Map();
  const mockDoc = {
    documentElement: docEl,
    body: bodyEl,
    activeElement: bodyEl,
    getElementById: (id) => {
      return elements.get(`dialog#${id}`) ||
             elements.get(`section#${id}`) ||
             elements.get(`nav#${id}`) ||
             elements.get(`div#${id}`) ||
             elements.get(`input#${id}`) ||
             getOrCreate('div', id);
    },
    querySelector: (sel) => {
      if (sel === 'dialog[open]') {
        for (const el of elements.values()) {
          if (el.tagName === 'DIALOG' && el.open) return el;
        }
        return null;
      }
      if (sel === 'html') return docEl;
      if (sel === 'body') return bodyEl;
      if (sel.startsWith('#')) return mockDoc.getElementById(sel.slice(1));
      if (sel.startsWith('.')) {
        const cls = sel.slice(1);
        if (cls === 'slide-indicator') return sideIndicator;
        if (cls === 'slide-scrollable') return projectsScrollable;
        for (const el of elements.values()) {
          if (el.classList.contains(cls)) return el;
        }
      }
      return docEl.querySelector(sel) || new MockElement('div');
    },
    querySelectorAll: (sel) => {
      if (sel === '.slide' || sel === 'section.slide') return slideElements;
      if (sel === '.nav-link') return navLinks;
      if (sel === '.slide-dot' || sel === '#slide-indicator button') return dotElements;
      if (sel === '.slide-scrollable') return [projectsScrollable, friendsScrollable];
      if (sel === 'section[id]') return slideElements;
      if (sel.startsWith('a[href^=')) return navLinks;
      return docEl.querySelectorAll(sel);
    },
    createElement: (tag) => new MockElement(tag),
    addEventListener: (ev, fn) => {
      if (!docListeners.has(ev)) docListeners.set(ev, []);
      docListeners.get(ev).push(fn);
    },
    removeEventListener: (ev, fn) => {
      if (!docListeners.has(ev)) return;
      docListeners.set(ev, docListeners.get(ev).filter(f => f !== fn));
    },
    dispatchEvent: (ev) => {
      ev.target = ev.target || mockDoc.activeElement;
      ev.currentTarget = mockDoc;
      const list = docListeners.get(ev.type) || [];
      for (const fn of list) fn(ev);
    }
  };

  const winListeners = new Map();
  const mockWindow = {
    innerWidth: 1440,
    innerHeight: 900,
    scrollY: 0,
    location: {
      href: `https://mhna.id.vn/${initialHash}`,
      hash: initialHash
    },
    history: {
      replaceState: (st, title, url) => {
        if (url && url.includes('#')) {
          mockWindow.location.hash = url.slice(url.indexOf('#'));
        }
      },
      pushState: (st, title, url) => {
        if (url && url.includes('#')) {
          mockWindow.location.hash = url.slice(url.indexOf('#'));
        }
      }
    },
    matchMedia: (query) => ({
      matches: query.includes('dark'),
      addEventListener: () => {}
    }),
    requestAnimationFrame: (cb) => setTimeout(cb, 16),
    cancelAnimationFrame: (id) => clearTimeout(id),
    addEventListener: (ev, fn) => {
      if (!winListeners.has(ev)) winListeners.set(ev, []);
      winListeners.get(ev).push(fn);
    },
    removeEventListener: (ev, fn) => {
      if (!winListeners.has(ev)) return;
      winListeners.set(ev, winListeners.get(ev).filter(f => f !== fn));
    },
    dispatchEvent: (ev) => {
      ev.target = ev.target || mockWindow;
      ev.currentTarget = mockWindow;
      const list = winListeners.get(ev.type) || [];
      for (const fn of list) fn(ev);
    }
  };

  const sandbox = {
    document: mockDoc,
    window: mockWindow,
    navigator: { clipboard: { writeText: async () => true } },
    localStorage: { store: {}, getItem(k) { return this.store[k] ?? null; }, setItem(k, v) { this.store[k] = String(v); } },
    sessionStorage: { store: {}, getItem(k) { return this.store[k] ?? null; }, setItem(k, v) { this.store[k] = String(v); } },
    IntersectionObserver: class { observe() {} unobserve() {} disconnect() {} },
    performance: { now: () => Date.now() },
    console: { log: () => {}, warn: () => {}, error: () => {} },
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
    JSON
  };

  vm.createContext(sandbox);

  // Load and execute main.js
  const mainJsCode = fs.readFileSync(path.join(projectRoot, 'main.js'), 'utf8');
  vm.runInContext(mainJsCode, sandbox);

  return {
    sandbox,
    mockDoc,
    mockWindow,
    slideElements,
    dotElements,
    navLinks,
    projectsScrollable,
    friendsScrollable,
    projectDesc,
    friendCard,
    runnerModal,
    runnerModalBody,
    searchModal,
    genericDialog
  };
}

async function runAllTests() {
  console.log(`\n${c.bold}=== EMPIRICAL ADVERSARIAL TEST SUITE: DENSE CONTENT & MODAL ISOLATION ===${c.reset}\n`);

  // ──────────────────────────────────────────────────────────────────
  // SECTION 1: MODAL ISOLATION EMPIRICAL STRESS TESTS
  // ──────────────────────────────────────────────────────────────────
  console.log(`${c.cyan}${c.bold}Section 1: Modal Isolation (<dialog open>) Wheel & Keyboard Guarding${c.reset}`);

  await test('[Modal.1.1] #project-runner-modal open blocks mouse wheel transitions on all targets', async () => {
    const env = createFreshEnvironment();
    const { sandbox, runnerModal, runnerModalBody, mockWindow, mockDoc } = env;

    runnerModal.showModal();
    assert(runnerModal.open === true, 'Runner modal must have open=true');
    assert(mockDoc.querySelector('dialog[open]') !== null, 'dialog[open] must match');

    // Attempt wheel down on runnerModal
    mockWindow.dispatchEvent(new MockWheelEvent('wheel', { deltaY: 120, target: runnerModal }));
    assert(sandbox.window.getCurrentSlide() === 0, 'Slide must stay at 0 when wheel fired on modal');

    // Attempt wheel down on runner modal body
    mockWindow.dispatchEvent(new MockWheelEvent('wheel', { deltaY: 120, target: runnerModalBody }));
    assert(sandbox.window.getCurrentSlide() === 0, 'Slide must stay at 0 when wheel fired on modal body');

    // Attempt wheel down on window
    mockWindow.dispatchEvent(new MockWheelEvent('wheel', { deltaY: 150, target: mockDoc.body }));
    assert(sandbox.window.getCurrentSlide() === 0, 'Slide must stay at 0 when wheel fired on body');
  });

  await test('[Modal.1.2] #project-runner-modal open blocks all navigation keyboard keys', async () => {
    const env = createFreshEnvironment();
    const { sandbox, runnerModal, mockWindow } = env;

    runnerModal.showModal();

    const navKeys = ['ArrowDown', 'PageDown', ' ', 'ArrowUp', 'PageUp', 'Home', 'End'];
    for (const key of navKeys) {
      mockWindow.dispatchEvent(new MockKeyboardEvent('keydown', { key }));
      assert(sandbox.window.getCurrentSlide() === 0, `Key "${key}" must NOT navigate slide while modal is open`);
    }
  });

  await test('[Modal.1.3] #search-modal open blocks mouse wheel transitions', async () => {
    const env = createFreshEnvironment();
    const { sandbox, searchModal, mockWindow } = env;

    searchModal.showModal();
    assert(searchModal.open === true, 'Search modal must be open');

    mockWindow.dispatchEvent(new MockWheelEvent('wheel', { deltaY: 100, target: searchModal }));
    assert(sandbox.window.getCurrentSlide() === 0, 'Wheel down must be blocked by search modal');

    mockWindow.dispatchEvent(new MockWheelEvent('wheel', { deltaY: -100, target: searchModal }));
    assert(sandbox.window.getCurrentSlide() === 0, 'Wheel up must be blocked by search modal');
  });

  await test('[Modal.1.4] #search-modal open blocks keyboard slide navigation', async () => {
    const env = createFreshEnvironment();
    const { sandbox, searchModal, mockWindow } = env;

    searchModal.showModal();

    mockWindow.dispatchEvent(new MockKeyboardEvent('keydown', { key: 'ArrowDown' }));
    assert(sandbox.window.getCurrentSlide() === 0, 'ArrowDown must be blocked by search modal');

    mockWindow.dispatchEvent(new MockKeyboardEvent('keydown', { key: 'PageDown' }));
    assert(sandbox.window.getCurrentSlide() === 0, 'PageDown must be blocked by search modal');

    mockWindow.dispatchEvent(new MockKeyboardEvent('keydown', { key: ' ' }));
    assert(sandbox.window.getCurrentSlide() === 0, 'Space must be blocked by search modal');
  });

  await test('[Modal.1.5] Generic <dialog open> blocks wheel and keyboard slide transitions', async () => {
    const env = createFreshEnvironment();
    const { sandbox, genericDialog, mockWindow, mockDoc } = env;

    genericDialog.open = true;
    assert(mockDoc.querySelector('dialog[open]') !== null, 'Generic dialog is open');

    mockWindow.dispatchEvent(new MockWheelEvent('wheel', { deltaY: 100 }));
    assert(sandbox.window.getCurrentSlide() === 0, 'Wheel must be blocked by generic open dialog');

    mockWindow.dispatchEvent(new MockKeyboardEvent('keydown', { key: 'ArrowDown' }));
    assert(sandbox.window.getCurrentSlide() === 0, 'ArrowDown must be blocked by generic open dialog');
  });

  await test('[Modal.1.6] Modal opened while on Slide 3 (#memos) locks position strictly to Slide 3', async () => {
    const env = createFreshEnvironment();
    const { sandbox, runnerModal, mockWindow } = env;

    sandbox.window.goToSlide(3, { force: true });
    await sleep(750);
    assert(sandbox.window.getCurrentSlide() === 3, 'Must be at slide 3');

    runnerModal.showModal();

    mockWindow.dispatchEvent(new MockWheelEvent('wheel', { deltaY: 120 }));
    mockWindow.dispatchEvent(new MockKeyboardEvent('keydown', { key: 'ArrowDown' }));
    mockWindow.dispatchEvent(new MockWheelEvent('wheel', { deltaY: -120 }));
    mockWindow.dispatchEvent(new MockKeyboardEvent('keydown', { key: 'ArrowUp' }));

    assert(sandbox.window.getCurrentSlide() === 3, 'Slide position must remain strictly 3 while modal is open');
  });

  await test('[Modal.1.7] Closing modal restores wheel and keyboard navigation immediately', async () => {
    const env = createFreshEnvironment();
    const { sandbox, runnerModal, mockWindow } = env;

    runnerModal.showModal();
    assert(runnerModal.open === true);

    // Close modal
    runnerModal.close();
    assert(runnerModal.open === false, 'Modal should be closed');

    // Trigger ArrowDown
    mockWindow.dispatchEvent(new MockKeyboardEvent('keydown', { key: 'ArrowDown' }));
    assert(sandbox.window.getCurrentSlide() === 1, 'ArrowDown must advance to Slide 1 after modal is closed');
  });

  // ──────────────────────────────────────────────────────────────────
  // SECTION 2: DENSE CONTENT SCROLLING & BOUNDARY BUBBLING
  // ──────────────────────────────────────────────────────────────────
  console.log(`\n${c.cyan}${c.bold}Section 2: Dense Content (.slide-scrollable) Boundary Bubbling vs Containment${c.reset}`);

  await test('[Dense.2.1] #projects at top boundary (scrollTop=0): scroll DOWN is consumed internally; slide stays 2', async () => {
    const env = createFreshEnvironment();
    const { sandbox, projectsScrollable, projectDesc, mockWindow } = env;

    sandbox.window.goToSlide(2, { force: true });
    await sleep(750);
    assert(sandbox.window.getCurrentSlide() === 2);

    projectsScrollable.scrollTop = 0;
    projectsScrollable.scrollHeight = 1200;
    projectsScrollable.clientHeight = 600;

    // Scroll DOWN inside projects on a child element
    mockWindow.dispatchEvent(new MockWheelEvent('wheel', { deltaY: 80, target: projectDesc }));
    assert(sandbox.window.getCurrentSlide() === 2, 'Wheel down must be consumed by #projects container when not at bottom');
  });

  await test('[Dense.2.2] #projects at top boundary (scrollTop=0): scroll UP reaches boundary and bubbles to prevSlide (2 -> 1)', async () => {
    const env = createFreshEnvironment();
    const { sandbox, projectsScrollable, projectDesc, mockWindow } = env;

    sandbox.window.goToSlide(2, { force: true });
    await sleep(750);
    assert(sandbox.window.getCurrentSlide() === 2);

    projectsScrollable.scrollTop = 0;
    projectsScrollable.scrollHeight = 1200;
    projectsScrollable.clientHeight = 600;

    // Scroll UP inside projects at top boundary
    mockWindow.dispatchEvent(new MockWheelEvent('wheel', { deltaY: -80, target: projectDesc }));
    assert(sandbox.window.getCurrentSlide() === 1, 'Wheel up at top boundary must bubble to prevSlide (transition to #about)');
  });

  await test('[Dense.2.3] #projects in middle (scrollTop=300): both scroll UP and DOWN are consumed internally', async () => {
    const env = createFreshEnvironment();
    const { sandbox, projectsScrollable, projectDesc, mockWindow } = env;

    sandbox.window.goToSlide(2, { force: true });
    await sleep(750);
    projectsScrollable.scrollTop = 300;
    projectsScrollable.scrollHeight = 1200;
    projectsScrollable.clientHeight = 600;

    // Scroll DOWN
    mockWindow.dispatchEvent(new MockWheelEvent('wheel', { deltaY: 60, target: projectDesc }));
    assert(sandbox.window.getCurrentSlide() === 2, 'Scroll down in middle must be consumed');

    // Scroll UP
    mockWindow.dispatchEvent(new MockWheelEvent('wheel', { deltaY: -60, target: projectDesc }));
    assert(sandbox.window.getCurrentSlide() === 2, 'Scroll up in middle must be consumed');
  });

  await test('[Dense.2.4] #projects at bottom boundary (scrollTop=600): scroll DOWN bubbles to nextSlide (2 -> 3)', async () => {
    const env = createFreshEnvironment();
    const { sandbox, projectsScrollable, projectDesc, mockWindow } = env;

    sandbox.window.goToSlide(2, { force: true });
    await sleep(750);
    projectsScrollable.scrollTop = 600; // scrollTop + clientHeight = 1200 == scrollHeight
    projectsScrollable.scrollHeight = 1200;
    projectsScrollable.clientHeight = 600;

    mockWindow.dispatchEvent(new MockWheelEvent('wheel', { deltaY: 80, target: projectDesc }));
    assert(sandbox.window.getCurrentSlide() === 3, 'Scroll down at bottom boundary must bubble to nextSlide (transition to #memos)');
  });

  await test('[Dense.2.5] #friends at top boundary (scrollTop=0): scroll DOWN consumed, scroll UP bubbles to slide 3', async () => {
    const env = createFreshEnvironment();
    const { sandbox, friendsScrollable, friendCard, mockWindow } = env;

    sandbox.window.goToSlide(4, { force: true });
    await sleep(750);
    assert(sandbox.window.getCurrentSlide() === 4);

    friendsScrollable.scrollTop = 0;
    friendsScrollable.scrollHeight = 1000;
    friendsScrollable.clientHeight = 500;

    // Scroll down -> consumed
    mockWindow.dispatchEvent(new MockWheelEvent('wheel', { deltaY: 70, target: friendCard }));
    assert(sandbox.window.getCurrentSlide() === 4, 'Scroll down in #friends at top must be consumed');

    // Scroll up -> bubbles to slide 3
    mockWindow.dispatchEvent(new MockWheelEvent('wheel', { deltaY: -70, target: friendCard }));
    assert(sandbox.window.getCurrentSlide() === 3, 'Scroll up at top boundary of #friends must bubble to slide 3 (#memos)');
  });

  await test('[Dense.2.6] #friends at bottom boundary (scrollTop=500): scroll DOWN bubbles to slide 5 (#contact)', async () => {
    const env = createFreshEnvironment();
    const { sandbox, friendsScrollable, friendCard, mockWindow } = env;

    sandbox.window.goToSlide(4, { force: true });
    await sleep(750);
    friendsScrollable.scrollTop = 500; // 500 + 500 = 1000 == scrollHeight
    friendsScrollable.scrollHeight = 1000;
    friendsScrollable.clientHeight = 500;

    mockWindow.dispatchEvent(new MockWheelEvent('wheel', { deltaY: 70, target: friendCard }));
    assert(sandbox.window.getCurrentSlide() === 5, 'Scroll down at bottom boundary of #friends must bubble to slide 5 (#contact)');
  });

  await test('[Dense.2.7] Non-overflowing container (scrollHeight <= clientHeight) does not block transitions', async () => {
    const env = createFreshEnvironment();
    const { sandbox, projectsScrollable, projectDesc, mockWindow } = env;

    sandbox.window.goToSlide(2, { force: true });
    await sleep(750);
    projectsScrollable.scrollTop = 0;
    projectsScrollable.scrollHeight = 600;
    projectsScrollable.clientHeight = 600; // Not scrollable

    mockWindow.dispatchEvent(new MockWheelEvent('wheel', { deltaY: 80, target: projectDesc }));
    assert(sandbox.window.getCurrentSlide() === 3, 'Non-overflowing container must immediately allow wheel transition');
  });

  // ──────────────────────────────────────────────────────────────────
  // SECTION 3: TOUCH GESTURES (THRESHOLDS & HORIZONTAL DOMINANCE)
  // ──────────────────────────────────────────────────────────────────
  console.log(`\n${c.cyan}${c.bold}Section 3: Touch Gestures (50px Threshold, Horizontal Rejection, Edge Cases)${c.reset}`);

  await test('[Touch.3.1] Vertical swipe below 50px threshold (deltaY = +30, -30, +49, -49) does NOT trigger transition', async () => {
    const env = createFreshEnvironment();
    const { sandbox, mockWindow } = env;

    const testDeltas = [30, -30, 49, -49];
    for (const delta of testDeltas) {
      mockWindow.dispatchEvent(new MockTouchEvent('touchstart', {
        touches: [{ clientX: 200, clientY: 300 }]
      }));
      mockWindow.dispatchEvent(new MockTouchEvent('touchend', {
        changedTouches: [{ clientX: 200, clientY: 300 - delta }]
      }));
      assert(sandbox.window.getCurrentSlide() === 0, `Swipe deltaY=${delta} must NOT trigger slide transition`);
    }
  });

  await test('[Touch.3.2] Pure horizontal swipe (deltaY = 0, deltaX = ±100) does NOT trigger slide transition', async () => {
    const env = createFreshEnvironment();
    const { sandbox, mockWindow } = env;

    // Swipe left
    mockWindow.dispatchEvent(new MockTouchEvent('touchstart', {
      touches: [{ clientX: 300, clientY: 300 }]
    }));
    mockWindow.dispatchEvent(new MockTouchEvent('touchend', {
      changedTouches: [{ clientX: 200, clientY: 300 }]
    }));
    assert(sandbox.window.getCurrentSlide() === 0, 'Pure horizontal swipe left must be ignored');

    // Swipe right
    mockWindow.dispatchEvent(new MockTouchEvent('touchstart', {
      touches: [{ clientX: 200, clientY: 300 }]
    }));
    mockWindow.dispatchEvent(new MockTouchEvent('touchend', {
      changedTouches: [{ clientX: 300, clientY: 300 }]
    }));
    assert(sandbox.window.getCurrentSlide() === 0, 'Pure horizontal swipe right must be ignored');
  });

  await test('[Touch.3.3] Diagonal swipe with horizontal dominance (|deltaY| <= |deltaX| * 1.2) is rejected', async () => {
    const env = createFreshEnvironment();
    const { sandbox, mockWindow } = env;

    // deltaY = 60, deltaX = 80 (|60| <= |80| * 1.2 = 96 -> horizontal dominant)
    mockWindow.dispatchEvent(new MockTouchEvent('touchstart', {
      touches: [{ clientX: 200, clientY: 300 }]
    }));
    mockWindow.dispatchEvent(new MockTouchEvent('touchend', {
      changedTouches: [{ clientX: 120, clientY: 240 }]
    }));
    assert(sandbox.window.getCurrentSlide() === 0, 'Horizontal-dominant diagonal swipe must be rejected');

    // deltaY = 60, deltaX = 55 (|60| <= |55| * 1.2 = 66 -> horizontal dominant)
    mockWindow.dispatchEvent(new MockTouchEvent('touchstart', {
      touches: [{ clientX: 200, clientY: 300 }]
    }));
    mockWindow.dispatchEvent(new MockTouchEvent('touchend', {
      changedTouches: [{ clientX: 145, clientY: 240 }]
    }));
    assert(sandbox.window.getCurrentSlide() === 0, 'Sub-vertical diagonal swipe must be rejected');
  });

  await test('[Touch.3.4] Clean vertical swipe above 50px (deltaY = 80, deltaX = 10) advances slide (0 -> 1)', async () => {
    const env = createFreshEnvironment();
    const { sandbox, mockWindow } = env;

    mockWindow.dispatchEvent(new MockTouchEvent('touchstart', {
      touches: [{ clientX: 200, clientY: 300 }]
    }));
    mockWindow.dispatchEvent(new MockTouchEvent('touchend', {
      changedTouches: [{ clientX: 190, clientY: 220 }] // deltaY = +80 (swipe up)
    }));
    assert(sandbox.window.getCurrentSlide() === 1, 'Valid vertical swipe up must advance to Slide 1');

    // Wait cooldown, then swipe down to retreat back to Slide 0
    await sleep(750);
    mockWindow.dispatchEvent(new MockTouchEvent('touchstart', {
      touches: [{ clientX: 200, clientY: 200 }]
    }));
    mockWindow.dispatchEvent(new MockTouchEvent('touchend', {
      changedTouches: [{ clientX: 190, clientY: 290 }] // deltaY = -90 (swipe down)
    }));
    assert(sandbox.window.getCurrentSlide() === 0, 'Valid vertical swipe down must retreat to Slide 0');
  });

  await test('[Touch.3.5] Multi-touch gesture (touches.length > 1) is rejected', async () => {
    const env = createFreshEnvironment();
    const { sandbox, mockWindow } = env;

    mockWindow.dispatchEvent(new MockTouchEvent('touchstart', {
      touches: [
        { clientX: 200, clientY: 300 },
        { clientX: 220, clientY: 320 }
      ]
    }));
    mockWindow.dispatchEvent(new MockTouchEvent('touchend', {
      changedTouches: [{ clientX: 200, clientY: 200 }]
    }));
    assert(sandbox.window.getCurrentSlide() === 0, 'Multi-touch gesture must not trigger slide transition');
  });

  await test('[Touch.3.6] Touch gesture when <dialog open> is present is strictly blocked', async () => {
    const env = createFreshEnvironment();
    const { sandbox, runnerModal, mockWindow } = env;

    runnerModal.showModal();

    mockWindow.dispatchEvent(new MockTouchEvent('touchstart', {
      touches: [{ clientX: 200, clientY: 300 }]
    }));
    mockWindow.dispatchEvent(new MockTouchEvent('touchend', {
      changedTouches: [{ clientX: 200, clientY: 200 }]
    }));
    assert(sandbox.window.getCurrentSlide() === 0, 'Swipe gesture must be blocked when dialog is open');
  });

  // ──────────────────────────────────────────────────────────────────
  // SECTION 4: DEEP LINKING (#friends -> Slide 4, 5th Dot Active)
  // ──────────────────────────────────────────────────────────────────
  console.log(`\n${c.cyan}${c.bold}Section 4: Deep Linking & Dot Synchronization (#friends, #projects, etc.)${c.reset}`);

  await test('[DeepLink.4.1] Loading URL with #friends sets slide index 4 and highlights 5th dot', async () => {
    const env = createFreshEnvironment('#friends');
    const { sandbox, dotElements, navLinks } = env;

    assert(sandbox.window.getCurrentSlide() === 4, `Active slide must be 4 for #friends, got: ${sandbox.window.getCurrentSlide()}`);

    // Dot 4 (the 5th dot) must be active
    assert(dotElements[4].classList.contains('active'), '5th dot (index 4) must have .active class');
    assert(dotElements[4].getAttribute('aria-current') === 'true', '5th dot must have aria-current="true"');

    // All other dots must NOT be active
    [0, 1, 2, 3, 5].forEach(idx => {
      assert(!dotElements[idx].classList.contains('active'), `Dot ${idx} must not have .active class`);
      assert(dotElements[idx].getAttribute('aria-current') === 'false', `Dot ${idx} must have aria-current="false"`);
    });

    // Top navbar link for #friends must be active
    assert(navLinks[4].classList.contains('active'), 'Nav link for #friends must be .active');
  });

  await test('[DeepLink.4.2] Loading URL with #projects sets slide index 2 and highlights 3rd dot', async () => {
    const env = createFreshEnvironment('#projects');
    const { sandbox, dotElements } = env;

    assert(sandbox.window.getCurrentSlide() === 2, 'Active slide must be 2 for #projects');
    assert(dotElements[2].classList.contains('active'), '3rd dot (index 2) must be active');
    assert(!dotElements[0].classList.contains('active'), '1st dot must not be active');
  });

  await test('[DeepLink.4.3] Loading URL with #contact sets slide index 5 and highlights 6th dot', async () => {
    const env = createFreshEnvironment('#contact');
    const { sandbox, dotElements } = env;

    assert(sandbox.window.getCurrentSlide() === 5, 'Active slide must be 5 for #contact');
    assert(dotElements[5].classList.contains('active'), '6th dot (index 5) must be active');
  });

  await test('[DeepLink.4.4] Unknown hash fallback defaults to Slide 0 with 1st dot active', async () => {
    const env = createFreshEnvironment('#non-existent-section');
    const { sandbox, dotElements } = env;

    assert(sandbox.window.getCurrentSlide() === 0, 'Unknown hash must default to Slide 0');
    assert(dotElements[0].classList.contains('active'), '1st dot must be active');
  });

  await test('[DeepLink.4.5] Popstate event with #friends navigates to Slide 4 and updates indicators', async () => {
    const env = createFreshEnvironment();
    const { sandbox, dotElements, mockWindow } = env;

    assert(sandbox.window.getCurrentSlide() === 0);

    mockWindow.location.hash = '#friends';
    mockWindow.dispatchEvent(new MockEvent('popstate'));

    assert(sandbox.window.getCurrentSlide() === 4, 'Popstate to #friends must update slide to 4');
    assert(dotElements[4].classList.contains('active'), 'Popstate must update 5th dot to active');
  });

  // ──────────────────────────────────────────────────────────────────
  // SECTION 5: REGRESSION & INTEGRATION SUITES VERIFICATION
  // ──────────────────────────────────────────────────────────────────
  console.log(`\n${c.cyan}${c.bold}Section 5: Full Project Regression Suites Verification${c.reset}`);

  await test('[Regression.5.1] scripts/test-e2e-slides.mjs executes with 100% pass (90/90)', async () => {
    const rawOut = execSync('node scripts/test-e2e-slides.mjs', { cwd: projectRoot, encoding: 'utf8' });
    const cleanOut = stripAnsi(rawOut);
    assert(cleanOut.includes('Passed: 90 | Failed: 0'), 'All 90 slide tests must pass');
  });

  await test('[Regression.5.2] scripts/test-e2e-ciallovo.mjs executes with 100% pass (163/163)', async () => {
    const rawOut = execSync('node scripts/test-e2e-ciallovo.mjs', { cwd: projectRoot, encoding: 'utf8' });
    const cleanOut = stripAnsi(rawOut);
    assert(cleanOut.includes('Passed: 163 | Failed: 0'), 'All 163 ciallovo tests must pass');
  });

  await test('[Regression.5.3] npm test passes without errors', async () => {
    const out = execSync('npm test', { cwd: projectRoot, encoding: 'utf8' });
    assert(out.includes('ALL TESTS PASSED SUCCESSFULLY WITH ZERO DEFECTS'), 'npm test must pass completely');
  });

  // ──────────────────────────────────────────────────────────────────
  // SUMMARY
  // ──────────────────────────────────────────────────────────────────
  console.log(`\n${c.bold}========================================================================${c.reset}`);
  console.log(`  CHALLENGER 2 EMPIRICAL TEST HARNESS SUMMARY`);
  console.log(`========================================================================`);
  console.log(`  Total Invariants Tested : ${totalPassed + totalFailed}`);
  console.log(`  Passed                  : ${c.green}${totalPassed}${c.reset}`);
  console.log(`  Failed                  : ${totalFailed > 0 ? c.red + totalFailed + c.reset : c.green + '0' + c.reset}`);
  console.log(`  Success Rate            : ${((totalPassed / (totalPassed + totalFailed)) * 100).toFixed(1)}%`);
  console.log(`========================================================================\n`);

  if (totalFailed > 0) {
    console.error(`${c.red}${c.bold}VERDICT: FAIL — ${totalFailed} invariant assertions failed!${c.reset}`);
    process.exit(1);
  } else {
    console.log(`${c.green}${c.bold}VERDICT: APPROVE — All adversarial challenge tests passed with 100% accuracy.${c.reset}`);
    process.exit(0);
  }
}

runAllTests().catch(err => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});
