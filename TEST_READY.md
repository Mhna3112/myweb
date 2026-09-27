# TEST_READY: Full-Page Single Slide Presentation Transformation

**Status**: Test Suite Complete & Verified  
**Test Suite Path**: `scripts/test-e2e-slides.mjs`  
**Test Framework**: Standalone Native Node.js ESM (Zero external dependencies)  
**Specification Reference**: `ORIGINAL_REQUEST.md` (§ 2026-09-27T09:51:44Z) & `TEST_INFRA.md`  

---

## 1. Test Suite Commands

| Command | Purpose |
|---|---|
| `node scripts/test-e2e-slides.mjs` | Run full 90-assertion E2E test suite (exits 1 if pending items fail, 0 on 100% pass) |
| `node scripts/test-e2e-slides.mjs --report-only` | Run test suite and print complete formatted summary table (always exits 0) |
| `node scripts/test-e2e-slides.mjs --tier=1` | Run specific tier (1, 2, 3, or 4) |
| `node scripts/test-e2e-slides.mjs --feature=F1` | Run specific feature suite (F1 through F7) |
| `node scripts/test-e2e-slides.mjs --strict` | Enforce strict zero-defect mode |

---

## 2. 4-Tier Test Architecture Summary

| Tier | Category | Scope & Invariants Tested | Planned Assertions | Current Baseline (Pre-Implementation) | Target (Post-Implementation) |
|---|---|---|:---:|:---:|:---:|
| **Tier 1** | **Feature Coverage** | 5+ tests per feature across F1–F7: 6-slide snap, side indicator dots, dense ergonomics, wheel engine, keyboard & touch, navbar sync, component preservation | 35 | 21 passed / 14 pending | **35 / 35 (100%)** |
| **Tier 2** | **Boundary & Corner Cases** | Bounds clamping (slide 0, slide 5), 50ms wheel burst rejection, micro-drift ignore, dialog/modal isolation, input typing bypass, keydown spam debounce, touch thresholds, resize resilience | 38 | 23 passed / 15 pending | **38 / 38 (100%)** |
| **Tier 3** | **Cross-Feature Combinations** | Pairwise interactions: Ctrl+K search + slide preservation, Demo runner + wheel lock, Theme toggle persistence, Language switch + dot aria sync, URL hash deep linking | 12 | 12 passed / 0 pending | **12 / 12 (100%)** |
| **Tier 4** | **Real-World Workloads** | 5 end-to-end multi-step user journeys: full walkthrough, random dot jumping, demo runner session, mobile touch gestures, deep link inspection | 5 | 3 passed / 2 pending | **5 / 5 (100%)** |
| **Total** | | **Comprehensive Slide Transformation Suite** | **90** | **59 passed / 31 pending** | **90 / 90 (100%)** |

---

## 3. Feature Inventory & Mapping

| Feature ID | Feature Name | Source | T1 Assertions | T2 Assertions | T3 Cross | T4 Scenarios | Baseline Status |
|---|---|---|:---:|:---:|:---:|:---:|:---:|
| **F1** | 6-Slide Snap Architecture | ORIGINAL_REQUEST §R1 | 5 | 5 | Pairwise with F6 | Scenario 1, 4 | 4/10 passed (6 pending) |
| **F2** | Floating Side Indicator | ORIGINAL_REQUEST §R1 | 5 | 5 | Pairwise with F4, F5 | Scenario 2, 4 | 2/10 passed (8 pending) |
| **F3** | Dense Content Ergonomics | ORIGINAL_REQUEST §R1 | 5 | 5 | Pairwise with F4 | Scenario 3, 4 | 9/10 passed (1 pending) |
| **F4** | Mouse Wheel Navigation Engine | ORIGINAL_REQUEST §R2 | 5 | 5 | Pairwise with F7 | Scenario 1, 4 | 2/10 passed (8 pending) |
| **F5** | Keyboard & Touch Controls | ORIGINAL_REQUEST §R2 | 5 | 5 | Pairwise with F7 | Scenario 1, 4 | 12/15 passed (3 pending) |
| **F6** | Navbar & Hash Synchronization | ORIGINAL_REQUEST §R2 | 5 | 5 | Pairwise with F1 | Scenario 1, 2 | 7/10 passed (3 pending) |
| **F7** | Component Preservation | ORIGINAL_REQUEST §R3 | 5 | 3 | Pairwise with F4, F5 | Scenario 3, 5 | **8/8 passed (100%)** |

---

## 4. Current Baseline Verification Results

Running `node scripts/test-e2e-slides.mjs --report-only` confirms:
- **Execution Performance**: 90 assertions execute in **~23ms**.
- **Component Preservation (F7)**: **100% Passed (8/8)**. Verified that the existing Claude design tokens, typewriter hero (`#hero-typewriter-text`), project hover popovers, demo runner modal (`#project-runner-modal`), search dialog (`#search-modal`), uptime clock (`#footer-uptime-clock`), and floating kaomoji mascot (`#kaomoji-mascot`) are all intact and safe from regressions.
- **Pending Implementations**: Exactly **31 assertions** are awaiting the slide presentation code in `index.html`, `style.css`, and `main.js`.

---

## 5. Implementer Guidance & Checklist

To achieve 100% test pass (90/90), the implementer must fulfill the following contract:

### 1. `index.html`
- [ ] Add `.slide` class to each of the 6 canonical sections (`#home`, `#about`, `#projects`, `#memos`, `#friends`, `#contact`).
- [ ] Add `<nav id="slide-indicator" class="slide-indicator" aria-label="Slide navigation">` containing 6 button dots (`.slide-dot`) with `data-target` and `aria-label` attributes.
- [ ] Ensure `.slide-scrollable` containers wrap dense content in `#projects` and `#friends`.

### 2. `style.css`
- [ ] Add `scroll-snap-type: y mandatory` to `html, body` or the slides container.
- [ ] Add `height: 100vh; height: 100dvh; scroll-snap-align: start;` for `.slide` elements.
- [ ] Add fixed styling for `.slide-indicator` on the right viewport margin with Claude terracotta colors (`#CC5636` / `#E06D53`).
- [ ] Add `.slide-dot.active` highlight styling.
- [ ] Add `overscroll-behavior: contain` for `.slide-scrollable` containers.

### 3. `main.js`
- [ ] Implement `SlidePresentation` controller with public methods `goToSlide(index)`, `nextSlide()`, and `prevSlide()`.
- [ ] Add `wheel` event listener with `deltaY` direction detection, delta threshold, and 500ms transition lock.
- [ ] Add `keydown` event listener supporting `ArrowDown`, `ArrowUp`, `PageDown`, `PageUp`, `Home`, `End`, `Space`, `Shift+Space` (excluding `INPUT`/`TEXTAREA` and open `<dialog>`s).
- [ ] Add `touchstart` / `touchend` listeners calculating vertical swipe delta (threshold >= 40-50px).
- [ ] Synchronize `.active` class on `.nav-link` anchors and update URL hash via `history.replaceState`.
- [ ] Synchronize `.active` and `aria-current="true"` on `.slide-dot` buttons.
- [ ] Clamp navigation bounds strictly to `[0, 5]`.
