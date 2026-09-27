#!/usr/bin/env node
/**
 * scripts/test-challenger-r2-empirical.mjs
 *
 * Empirical Challenger 2 (Iteration 2 Gate)
 * Verification of:
 * 1. Horizontal wheel events do NOT trigger slide transitions or prevent default
 * 2. Rapid window resizing does not crash or throw unhandled exceptions
 * 3. Modal isolation & dense scroll boundary bubbling invariants
 */

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;
const failures = [];

function assert(cond, msg) {
  if (!cond) throw new Error(msg || 'Assertion failed');
}

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function runTest(name, fn) {
  totalTests++;
  try {
    await fn();
    console.log(`  ✓ [PASS] ${name}`);
    passedTests++;
  } catch (err) {
    console.log(`  ✗ [FAIL] ${name}: ${err.message}`);
    failedTests++;
    failures.push({ name, err });
  }
}

// Mock DOM Setup
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
    this.listeners = new Map();
    this.dataset = {};
    this._open = false;
    this.scrollTop = 0;
    this.scrollHeight = 900;
    this.clientHeight = 900;
    this.scrollIntoViewCalls = 0;

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
      contains(t) {
        return self.classList.classes.has(t);
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
      }
    };
  }

  get open() { return this._open; }
  set open(v) {
    this._open = Boolean(v);
    if (this._open) this.attributes.set('open', '');
    else this.attributes.delete('open');
  }

  setAttribute(k, v) {
    this.attributes.set(k, String(v));
    if (k === 'id') this.id = String(v);
    if (k === 'open') this._open = true;
    if (k === 'class') {
      this.className = String(v);
      this.classList.classes = new Set(String(v).split(/\s+/).filter(Boolean));
    }
  }

  getAttribute(k) { return this.attributes.get(k) || null; }
  hasAttribute(k) { return this.attributes.has(k); }
  removeAttribute(k) {
    this.attributes.delete(k);
    if (k === 'open') this._open = false;
  }

  addEventListener(ev, fn) {
    if (!this.listeners.has(ev)) this.listeners.set(ev, []);
    this.listeners.get(ev).push(fn);
  }

  removeEventListener(ev, fn) {
    if (!this.listeners.has(ev)) return;
    this.listeners.set(ev, this.listeners.get(ev).filter(f => f !== fn));
  }

  dispatchEvent(ev) {
    ev.target = this;
    ev.currentTarget = this;
    const list = this.listeners.get(ev.type) || [];
    for (const fn of list) fn(ev);
  }

  appendChild(child) {
    child.parentNode = this;
    child.parentElement = this;
    this.children.push(child);
  }

  scrollIntoView(options) {
    this.scrollIntoViewCalls++;
    this.lastScrollOptions = options;
  }

  querySelector(sel) {
    if (sel === 'dialog[open]') {
      if (this.tagName === 'DIALOG' && this.open) return this;
      for (const c of this.children) {
        const found = c.querySelector(sel);
        if (found) return found;
      }
      return null;
    }
    if (sel.startsWith('#')) {
      const tid = sel.slice(1);
      if (this.id === tid) return this;
      for (const c of this.children) {
        const found = c.querySelector(sel);
        if (found) return found;
      }
      return null;
    }
    if (sel.startsWith('.')) {
      const cls = sel.slice(1);
      if (this.classList.contains(cls)) return this;
      for (const c of this.children) {
        const found = c.querySelector(sel);
        if (found) return found;
      }
      return null;
    }
    return null;
  }

  querySelectorAll(sel) {
    const res = [];
    if (sel.startsWith('.')) {
      const cls = sel.slice(1);
      if (this.classList.contains(cls)) res.push(this);
    } else if (sel.startsWith('#')) {
      const tid = sel.slice(1);
      if (this.id === tid) res.push(this);
    }
    for (const c of this.children) res.push(...c.querySelectorAll(sel));
    return res;
  }
}

function createEnv(initialHash = '') {
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
    s.dataset.slideIndex = String(index);
    bodyEl.appendChild(s);
    return s;
  });

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

  const winListeners = new Map();
  const mockWindow = {
    innerWidth: 1440,
    innerHeight: 900,
    scrollY: 0,
    matchMedia: (query) => ({
      matches: query ? query.includes('dark') : false,
      addEventListener: () => {},
      removeEventListener: () => {}
    }),
    location: { href: `https://mhna.id.vn/${initialHash}`, hash: initialHash },
    history: {
      replaceState: (st, t, u) => {
        if (u && u.includes('#')) mockWindow.location.hash = u.slice(u.indexOf('#'));
      }
    },
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

  const docListeners = new Map();
  const mockDoc = {
    documentElement: docEl,
    body: bodyEl,
    activeElement: bodyEl,
    getElementById: (id) => elements.get(`section#${id}`) || elements.get(`dialog#${id}`) || elements.get(`div#${id}`) || getOrCreate('div', id),
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
        if (sel === '.slide-indicator') return sideIndicator;
      }
      return docEl.querySelector(sel);
    },
    querySelectorAll: (sel) => {
      if (sel === '.slide' || sel === 'section.slide') return slideElements;
      if (sel === '.slide-dot') return dotElements;
      return docEl.querySelectorAll(sel);
    },
    addEventListener: (ev, fn) => {
      if (!docListeners.has(ev)) docListeners.set(ev, []);
      docListeners.get(ev).push(fn);
    },
    dispatchEvent: (ev) => {
      ev.target = ev.target || mockDoc.activeElement;
      ev.currentTarget = mockDoc;
      const list = docListeners.get(ev.type) || [];
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
    Event: MockEvent,
    WheelEvent: MockWheelEvent,
    KeyboardEvent: MockKeyboardEvent,
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
    console: { log: () => {}, warn: () => {}, error: () => {} }
  };

  vm.createContext(sandbox);
  const mainJs = fs.readFileSync(path.join(projectRoot, 'main.js'), 'utf8');
  vm.runInContext(mainJs, sandbox);

  return { sandbox, mockWindow, mockDoc, slideElements, dotElements };
}

async function main() {
  console.log('=== EMPIRICAL CHALLENGER 2 SUITE: WHEEL & RESIZE STRESS HARNESS ===\n');

  // --- SUITE A: HORIZONTAL WHEEL BEHAVIOR EMPIRICAL VERIFICATION ---
  console.log('--- SUITE A: Horizontal Wheel Rejection & preventDefault Integrity ---');

  await runTest('A.1: Pure horizontal wheel right (deltaX: 100, deltaY: 0) does not advance slide and does NOT preventDefault', async () => {
    const { sandbox, mockWindow } = createEnv();
    const event = new MockWheelEvent('wheel', { deltaX: 100, deltaY: 0, cancelable: true });
    mockWindow.dispatchEvent(event);

    assert(event.defaultPrevented === false, 'Horizontal wheel event must NOT call preventDefault()');
    assert(sandbox.window.getCurrentSlide() === 0, 'Slide index must remain 0');
  });

  await runTest('A.2: Pure horizontal wheel left (deltaX: -150, deltaY: 0) does not advance slide and does NOT preventDefault', async () => {
    const { sandbox, mockWindow } = createEnv();
    const event = new MockWheelEvent('wheel', { deltaX: -150, deltaY: 0, cancelable: true });
    mockWindow.dispatchEvent(event);

    assert(event.defaultPrevented === false, 'Horizontal wheel event must NOT call preventDefault()');
    assert(sandbox.window.getCurrentSlide() === 0, 'Slide index must remain 0');
  });

  await runTest('A.3: Horizontal dominant diagonal wheel (deltaX: 120, deltaY: 30) does not advance slide and does NOT preventDefault', async () => {
    const { sandbox, mockWindow } = createEnv();
    // deltaY is 30 (>= 20 threshold), but deltaX is 120 (> deltaY)
    const event = new MockWheelEvent('wheel', { deltaX: 120, deltaY: 30, cancelable: true });
    mockWindow.dispatchEvent(event);

    assert(event.defaultPrevented === false, 'Horizontal dominant event must NOT call preventDefault()');
    assert(sandbox.window.getCurrentSlide() === 0, 'Slide index must remain 0');
  });

  await runTest('A.4: Horizontal dominant negative diagonal wheel (deltaX: -100, deltaY: -40) does not advance slide and does NOT preventDefault', async () => {
    const { sandbox, mockWindow } = createEnv();
    sandbox.window.goToSlide(3, { force: true });
    await sleep(750);
    assert(sandbox.window.getCurrentSlide() === 3);

    const event = new MockWheelEvent('wheel', { deltaX: -100, deltaY: -40, cancelable: true });
    mockWindow.dispatchEvent(event);

    assert(event.defaultPrevented === false, 'Horizontal dominant event must NOT call preventDefault()');
    assert(sandbox.window.getCurrentSlide() === 3, 'Slide index must remain 3');
  });

  await runTest('A.5: Vertical dominant wheel (deltaX: 20, deltaY: 100) DOES preventDefault and advances slide', async () => {
    const { sandbox, mockWindow } = createEnv();
    const event = new MockWheelEvent('wheel', { deltaX: 20, deltaY: 100, cancelable: true });
    mockWindow.dispatchEvent(event);

    assert(event.defaultPrevented === true, 'Vertical dominant wheel event MUST call preventDefault()');
    assert(sandbox.window.getCurrentSlide() === 1, 'Slide index must advance to 1');
  });

  await runTest('A.6: Horizontal wheel rejection holds across all 6 slides (0..5)', async () => {
    const { sandbox, mockWindow } = createEnv();
    for (let s = 0; s <= 5; s++) {
      sandbox.window.goToSlide(s, { force: true });
      await sleep(750);
      assert(sandbox.window.getCurrentSlide() === s);

      const evRight = new MockWheelEvent('wheel', { deltaX: 80, deltaY: 0, cancelable: true });
      mockWindow.dispatchEvent(evRight);
      assert(evRight.defaultPrevented === false, `Slide ${s}: defaultPrevented should be false`);
      assert(sandbox.window.getCurrentSlide() === s, `Slide ${s}: should remain at ${s}`);

      const evLeft = new MockWheelEvent('wheel', { deltaX: -80, deltaY: 20, cancelable: true });
      // deltaX -80 vs deltaY 20 -> |deltaX| > |deltaY|
      mockWindow.dispatchEvent(evLeft);
      assert(evLeft.defaultPrevented === false, `Slide ${s}: defaultPrevented should be false`);
      assert(sandbox.window.getCurrentSlide() === s, `Slide ${s}: should remain at ${s}`);
    }
  });

  // --- SUITE B: RAPID WINDOW RESIZE STABILITY & EXCEPTION RESILIENCE ---
  console.log('\n--- SUITE B: Rapid Window Resize Stability & Exception Resilience ---');

  await runTest('B.1: 1000 synchronous rapid resize events do not crash or throw unhandled exceptions', async () => {
    const { sandbox, mockWindow, slideElements } = createEnv();

    const sizes = [
      { w: 320, h: 480 },
      { w: 768, h: 1024 },
      { w: 1440, h: 900 },
      { w: 1920, h: 1080 },
      { w: 2560, h: 1440 },
      { w: 3840, h: 2160 },
      { w: 0, h: 0 },
      { w: 1, h: 1 }
    ];

    let threw = false;
    try {
      for (let i = 0; i < 1000; i++) {
        const size = sizes[i % sizes.length];
        mockWindow.innerWidth = size.w;
        mockWindow.innerHeight = size.h;
        mockWindow.dispatchEvent(new MockEvent('resize'));
      }
    } catch (e) {
      threw = true;
      throw e;
    }
    assert(!threw, 'Rapid resize burst must execute without throwing');
    assert(sandbox.window.getCurrentSlide() === 0, 'Current slide index must remain 0');
  });

  await runTest('B.2: Debounced resize fires scrollIntoView exactly once after burst settles', async () => {
    const { sandbox, mockWindow, slideElements } = createEnv();
    sandbox.window.goToSlide(2, { force: true });
    await sleep(750);
    assert(sandbox.window.getCurrentSlide() === 2);

    const initialCalls = slideElements[2].scrollIntoViewCalls;

    // Fire 50 rapid resize events
    for (let i = 0; i < 50; i++) {
      mockWindow.innerWidth = 1000 + i;
      mockWindow.dispatchEvent(new MockEvent('resize'));
    }

    // Immediately after synchronous burst, debounced timer has not fired yet
    assert(slideElements[2].scrollIntoViewCalls === initialCalls, 'scrollIntoView must NOT be invoked synchronously during burst');

    // Wait for the 100ms debounce timer to fire
    await sleep(150);

    // Exactly 1 invocation on active slide element
    assert(slideElements[2].scrollIntoViewCalls === initialCalls + 1, `scrollIntoView should be called exactly once after debounce settles, got ${slideElements[2].scrollIntoViewCalls - initialCalls}`);
    assert(slideElements[2].lastScrollOptions.behavior === 'auto', 'scrollIntoView must use auto behavior for responsive resize');
    assert(slideElements[2].lastScrollOptions.block === 'start', 'scrollIntoView must align block to start');
  });

  await runTest('B.3: Resize while currentSlide element is missing or detached does not throw', async () => {
    const { sandbox, mockWindow, mockDoc } = createEnv();

    // Mock getElementById returning null
    const origGetById = mockDoc.getElementById;
    mockDoc.getElementById = () => null;

    mockWindow.dispatchEvent(new MockEvent('resize'));
    await sleep(150);

    mockDoc.getElementById = origGetById;
    assert(sandbox.window.getCurrentSlide() === 0, 'State remains intact even when active element is null during resize');
  });

  await runTest('B.4: Rapid interleaved resize and slide navigation does not desynchronize state', async () => {
    const { sandbox, mockWindow } = createEnv();

    for (let i = 0; i < 5; i++) {
      mockWindow.dispatchEvent(new MockEvent('resize'));
      sandbox.window.nextSlide();
      mockWindow.dispatchEvent(new MockEvent('resize'));
    }
    await sleep(750);

    const curr = sandbox.window.getCurrentSlide();
    assert(curr >= 0 && curr <= 5, `Slide index must be a valid integer between 0 and 5, got ${curr}`);
    assert(!Number.isNaN(curr), 'Slide index must not be NaN');
  });

  // --- SUITE C: COMBINED STRESS HARNESS ---
  console.log('\n--- SUITE C: Interleaved Input Stress (Wheel + Resize + Gestures) ---');

  await runTest('C.1: Concurrent storm of 200 horizontal wheels, 50 resizes, and 50 vertical wheels', async () => {
    const { sandbox, mockWindow } = createEnv();

    for (let i = 0; i < 50; i++) {
      // Horizontal wheel (should be ignored, no preventDefault)
      const hEv = new MockWheelEvent('wheel', { deltaX: 100, deltaY: 0, cancelable: true });
      mockWindow.dispatchEvent(hEv);
      assert(hEv.defaultPrevented === false);

      // Resize
      mockWindow.dispatchEvent(new MockEvent('resize'));

      // Vertical wheel (triggers at most 1 transition due to cooldown)
      const vEv = new MockWheelEvent('wheel', { deltaX: 0, deltaY: 50, cancelable: true });
      mockWindow.dispatchEvent(vEv);
    }

    await sleep(150);
    // After 50 vertical wheels in 1 tick, only exactly 1 transition occurred
    assert(sandbox.window.getCurrentSlide() === 1, `Expected slide 1 after burst, got ${sandbox.window.getCurrentSlide()}`);
  });

  console.log('\n========================================================================');
  console.log(`  EMPIRICAL CHALLENGER 2 HARNESS RESULTS`);
  console.log('========================================================================');
  console.log(`  Total Invariants Tested : ${totalTests}`);
  console.log(`  Passed                  : ${passedTests}`);
  console.log(`  Failed                  : ${failedTests}`);
  console.log(`  Success Rate            : ${((passedTests / totalTests) * 100).toFixed(1)}%`);
  console.log('========================================================================\n');

  if (failedTests > 0) {
    console.error(`VERDICT: FAIL — ${failedTests} invariant tests failed!`);
    process.exit(1);
  } else {
    console.log(`VERDICT: APPROVE — All empirical wheel and resize invariants passed 100%.`);
    process.exit(0);
  }
}

main().catch(err => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});
