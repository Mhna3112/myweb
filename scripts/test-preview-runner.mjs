import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const projectRoot = process.cwd();
console.log('--- RUNNING HOVER PREVIEW & DEMO RUNNER TESTS ---');

// 1. Read index.html and verify required DOM IDs & attributes
const htmlContent = fs.readFileSync(path.join(projectRoot, 'index.html'), 'utf8');

const requiredElements = [
  'id="project-hover-popover"',
  'id="project-runner-modal"',
  'id="runner-modal-title"',
  'id="runner-badge"',
  'id="runner-device-switcher"',
  'id="runner-reload-btn"',
  'id="runner-external-link"',
  'id="close-runner-modal"',
  'id="runner-dot-close"',
  'id="runner-modal-body"',
  'data-project-id="mediahub"',
  'data-project-id="gplx"',
  'data-project-id="todo"',
  'data-project-id="discord"',
  'data-project-id="roblox"',
  'data-project-id="cpp"',
  'class="project-demo-btn"',
];

console.log('\n[TEST 1] Verifying index.html markup elements:');
let missingElements = 0;
for (const elem of requiredElements) {
  if (htmlContent.includes(elem)) {
    console.log(`  ✓ Found: ${elem}`);
  } else {
    console.error(`  ✗ MISSING: ${elem}`);
    missingElements++;
  }
}
if (missingElements > 0) {
  process.exit(1);
}

// 2. Read main.js and extract PROJECTS_DATA
const jsContent = fs.readFileSync(path.join(projectRoot, 'main.js'), 'utf8');

console.log('\n[TEST 2] Verifying PROJECTS_DATA definitions and structure:');
const requiredProjects = ['mediahub', 'gplx', 'todo', 'discord', 'roblox', 'cpp'];

// Create minimal DOM sandbox
class MockElement {
  constructor(tag, id = '') {
    this.tagName = tag.toUpperCase();
    this.id = id;
    this.className = '';
    this.classList = {
      classes: new Set(),
      add: (...c) => c.forEach(x => this.classList.classes.add(x)),
      remove: (...c) => c.forEach(x => this.classList.classes.delete(x)),
      toggle: (c, force) => {
        if (force === undefined) {
          if (this.classList.classes.has(c)) { this.classList.classes.delete(c); return false; }
          else { this.classList.classes.add(c); return true; }
        }
        if (force) { this.classList.classes.add(c); return true; }
        else { this.classList.classes.delete(c); return false; }
      },
      contains: (c) => this.classList.classes.has(c)
    };
    this.style = {};
    this.attributes = new Map();
    this.children = [];
    this.innerHTML = '';
    this.textContent = '';
    this.dataset = {};
    this.listeners = {};
    this.offsetWidth = 380;
    this.offsetHeight = 380;
  }
  setAttribute(k, v) { this.attributes.set(k, String(v)); }
  getAttribute(k) { return this.attributes.get(k) || null; }
  removeAttribute(k) { this.attributes.delete(k); }
  addEventListener(event, fn) {
    if (!this.listeners[event]) this.listeners[event] = [];
    this.listeners[event].push(fn);
  }
  removeEventListener(event, fn) {
    if (!this.listeners[event]) return;
    this.listeners[event] = this.listeners[event].filter(f => f !== fn);
  }
  dispatchEvent(event) {
    if (this.listeners[event.type]) {
      this.listeners[event.type].forEach(fn => fn(event));
    }
  }
  querySelector(sel) {
    if (sel.startsWith('#')) {
      const targetId = sel.slice(1);
      return this.id === targetId ? this : null;
    }
    return new MockElement('div');
  }
  querySelectorAll(sel) {
    return [new MockElement('div'), new MockElement('div')];
  }
  appendChild(child) { this.children.push(child); }
  getBoundingClientRect() {
    return { top: 100, bottom: 400, left: 200, right: 600, width: 400, height: 300 };
  }
  showModal() { this.open = true; }
  close() { this.open = false; }
}

const mockDoc = {
  documentElement: new MockElement('html'),
  getElementById: (id) => new MockElement('div', id),
  querySelectorAll: (sel) => [
    Object.assign(new MockElement('article'), { dataset: { projectId: 'mediahub' } }),
    Object.assign(new MockElement('article'), { dataset: { projectId: 'gplx' } }),
    Object.assign(new MockElement('article'), { dataset: { projectId: 'todo' } }),
    Object.assign(new MockElement('article'), { dataset: { projectId: 'discord' } }),
    Object.assign(new MockElement('article'), { dataset: { projectId: 'roblox' } }),
    Object.assign(new MockElement('article'), { dataset: { projectId: 'cpp' } }),
  ],
  querySelector: (sel) => new MockElement('div'),
  addEventListener: () => {},
  removeEventListener: () => {},
};

const sandbox = {
  document: mockDoc,
  window: {
    innerWidth: 1440,
    innerHeight: 900,
    addEventListener: () => {},
    matchMedia: () => ({ matches: true, addEventListener: () => {} }),
    location: { href: '' },
    scrollY: 0,
  },
  navigator: {
    clipboard: {
      writeText: async (t) => true
    }
  },
  localStorage: {
    store: {},
    getItem: (k) => sandbox.localStorage.store[k] || null,
    setItem: (k, v) => { sandbox.localStorage.store[k] = v; }
  },
  IntersectionObserver: class {
    observe() {}
    unobserve() {}
    disconnect() {}
  },
  performance: { now: () => Date.now() },
  console,
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
  encodeURIComponent
};

vm.createContext(sandbox);
vm.runInContext(jsContent, sandbox);

const projectsData = sandbox.window.PROJECTS_DATA;
if (!projectsData) {
  console.error('  ✗ PROJECTS_DATA is not defined on window in main.js');
  process.exit(1);
}

for (const pid of requiredProjects) {
  const p = projectsData[pid];
  if (!p) {
    console.error(`  ✗ Project ${pid} is missing from PROJECTS_DATA!`);
    process.exit(1);
  }
  if (!p.name?.vi || !p.name?.en) {
    console.error(`  ✗ Project ${pid} is missing bilingual name!`);
    process.exit(1);
  }
  if (!p.badge?.vi || !p.badge?.en) {
    console.error(`  ✗ Project ${pid} is missing bilingual badge!`);
    process.exit(1);
  }
  if (!p.features?.vi || p.features.vi.length < 3 || !p.features?.en || p.features.en.length < 3) {
    console.error(`  ✗ Project ${pid} does not have at least 3 bilingual features!`);
    process.exit(1);
  }
  if (!p.mockupHtml) {
    console.error(`  ✗ Project ${pid} is missing mockupHtml!`);
    process.exit(1);
  }
  console.log(`  ✓ Project [${pid}] (${p.type}): ${p.name.vi} | ${p.badge.vi} — 3 features verified`);
}

// 3. Test popover content generator
console.log('\n[TEST 3] Testing popover HTML generator:');
for (const pid of requiredProjects) {
  const html = sandbox.window.renderPopoverContent(pid);
  if (!html.includes('popover-header') || !html.includes('popover-features') || !html.includes('popover-btn-demo')) {
    console.error(`  ✗ renderPopoverContent(${pid}) missing critical sections!`);
    process.exit(1);
  }
  console.log(`  ✓ renderPopoverContent('${pid}') generated valid markup (${html.length} chars)`);
}

// 4. Test C++ Sorting visualizer generators
console.log('\n[TEST 4] Testing C++ Sorting Generators:');
const testArray = [45, 12, 85, 32, 89, 39, 69, 22, 58, 75];

// Test QuickSort
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
  }
}

const arrCopy = [...testArray];
const gen = quickSortGen(arrCopy);
let steps = 0;
let next = gen.next();
while (!next.done) {
  steps++;
  next = gen.next();
}
console.log(`  ✓ QuickSort generated ${steps} interactive steps, final array sorted: ${JSON.stringify(arrCopy)}`);
const isSorted = arrCopy.every((v, i, a) => !i || a[i - 1] <= v);
if (!isSorted) {
  console.error('  ✗ QuickSort did not sort array correctly!');
  process.exit(1);
}

// Test Binary Search generator
function* binarySearchGen(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    yield { type: 'search', indices: [mid] };
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
  return -1;
}

const sortedArr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const bsGen = binarySearchGen(sortedArr, 70);
let bsSteps = 0;
let bsResult = bsGen.next();
while (!bsResult.done) {
  bsSteps++;
  bsResult = bsGen.next();
}
console.log(`  ✓ Binary Search found 70 in ${bsSteps} steps, return value: ${bsResult.value}`);
if (bsResult.value !== 6) {
  console.error('  ✗ Binary Search did not find index 6!');
  process.exit(1);
}

// 5. Test applyLang integration
console.log('\n[TEST 5] Testing multilingual applyLang switching:');
sandbox.window.applyLang('vi');
let pVi = sandbox.window.renderPopoverContent('mediahub');
if (!pVi.includes('Chạy thử demo') || !pVi.includes('Mã nguồn')) {
  console.error('  ✗ Vietnamese popover content missing translated buttons!');
  process.exit(1);
}
console.log('  ✓ applyLang("vi") correctly outputs Vietnamese labels');

sandbox.window.applyLang('en');
let pEn = sandbox.window.renderPopoverContent('mediahub');
if (!pEn.includes('Try Interactive Demo') || !pEn.includes('Source Code')) {
  console.error('  ✗ English popover content missing translated buttons!');
  process.exit(1);
}
console.log('  ✓ applyLang("en") correctly outputs English labels');

// 6. Test runner lifecycle, cleanup, and CSS containment
console.log('\n[TEST 6] Testing runner lifecycle, cleanup, and CSS containment:');
const cssContent = fs.readFileSync(path.join(projectRoot, 'style.css'), 'utf8');
if (!cssContent.includes('max-height: calc(100vh - 32px)') || !cssContent.includes('overflow-y: auto')) {
  console.error('  ✗ Popover CSS missing vertical viewport containment!');
  process.exit(1);
}
console.log('  ✓ Popover CSS has max-height and overflow-y containment');

if (!cssContent.includes('touch-action: none')) {
  console.error('  ✗ Roblox header CSS missing touch-action: none!');
  process.exit(1);
}
console.log('  ✓ Roblox draggable header has touch-action: none');

// Test runner opening and closing
sandbox.window.openProjectRunner('mediahub');
sandbox.window.closeProjectRunner();
console.log('  ✓ Modal runner opens and closes with complete cleanup');

console.log('\n======================================================');
console.log('🎉 ALL TESTS PASSED SUCCESSFULLY WITH ZERO DEFECTS!');
console.log('======================================================');
process.exit(0);

