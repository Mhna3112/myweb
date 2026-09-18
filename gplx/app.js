/**
 * Ôn Thi Giấy Phép Lái Xe - Web Application Logic
 * Standard Vietnamese Driver's License 600 Questions & 30-Question Exam Simulator
 */

import {
  GPLX_QUESTIONS,
  GPLX_CHAPTERS,
  GPLX_PRESET_EXAMS,
  generateRandomExam30
} from './questions.js';

// ==========================================================================
// STATE MANAGEMENT & LOCAL STORAGE
// ==========================================================================
const STORAGE_KEYS = {
  THEME: 'theme',
  BOOKMARKS: 'gplx_bookmarks',
  MISTAKES: 'gplx_mistakes',
  MASTERED: 'gplx_mastered'
};

function getStorage(key, defaultVal) {
  try {
    const val = localStorage.getItem(key);
    return val ? JSON.parse(val) : defaultVal;
  } catch (e) {
    console.error(`Error reading ${key} from localStorage`, e);
    return defaultVal;
  }
}

function setStorage(key, val) {
  try {
    localStorage.setItem(key, JSON.stringify(val));
  } catch (e) {
    console.error(`Error saving ${key} to localStorage`, e);
  }
}

const state = {
  currentView: 'flashcard',
  bookmarks: new Set(getStorage(STORAGE_KEYS.BOOKMARKS, [])),
  mistakes: new Set(getStorage(STORAGE_KEYS.MISTAKES, [])),
  mastered: new Set(getStorage(STORAGE_KEYS.MASTERED, [])),

  // Flashcard State
  fcQuestions: [...GPLX_QUESTIONS],
  fcIndex: 0,
  fcFlipped: false,

  // Exam State (30 Questions, 20 Minutes)
  examQuestions: [],
  examAnswers: {}, // { questionIndex: selectedOption1to4 }
  examFlags: new Set(),
  examIndex: 0,
  examTimer: null,
  examSecondsRemaining: 20 * 60,
  examSubmitted: false,
  examStarted: false,
  isReviewMode: false,
  examTotalTimeTaken: 0
};

// Helper: loại bỏ số thứ tự thừa ở đầu phương án (ví dụ "1. Hạng B1" -> "Hạng B1")
function cleanOptionText(text) {
  return (text || '').replace(/^\d+\.\s*/, '');
}

// ==========================================================================
// TOAST NOTIFICATION HELPER
// ==========================================================================
function showToast(message, icon = 'ℹ️') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// ==========================================================================
// THEME MANAGEMENT (Light / Dark)
// ==========================================================================
function initTheme() {
  const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME) || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  applyTheme(savedTheme);

  const btnTheme = document.getElementById('btn-theme');
  if (btnTheme) {
    btnTheme.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      localStorage.setItem(STORAGE_KEYS.THEME, next);
      showToast(`Đã đổi giao diện: ${next === 'dark' ? 'Ban đêm (Dark)' : 'Dịu mắt (Light)'}`, '🎨');
    });
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const iconSun = document.getElementById('icon-sun');
  const iconMoon = document.getElementById('icon-moon');
  if (iconSun && iconMoon) {
    if (theme === 'dark') {
      iconSun.style.display = 'none';
      iconMoon.style.display = 'block';
    } else {
      iconSun.style.display = 'block';
      iconMoon.style.display = 'none';
    }
  }
}

// ==========================================================================
// MODE NAVIGATION & VIEW SWITCHING
// ==========================================================================
function initNavigation() {
  const btnBack = document.getElementById('btn-back');
  if (btnBack) {
    btnBack.addEventListener('click', () => {
      if (window.history.length > 1) {
        window.history.back();
      } else {
        window.location.href = '../';
      }
    });
  }

  const tabs = document.querySelectorAll('.mode-tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const view = tab.getAttribute('data-view');
      switchView(view);
    });
  });

  updateBadges();
}

function switchView(viewName) {
  state.currentView = viewName;

  // Update tabs active state
  document.querySelectorAll('.mode-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-view') === viewName);
  });

  // Hide all panels
  document.querySelectorAll('.view-panel').forEach(p => p.classList.remove('active'));

  const viewFlashcard = document.getElementById('view-flashcard');
  const viewExam = document.getElementById('view-exam');
  const viewCustomList = document.getElementById('view-custom-list');

  if (viewName === 'flashcard') {
    viewFlashcard.classList.add('active');
    filterFlashcards('all');
    document.getElementById('select-chapter').value = 'all';
  } else if (viewName === 'critical') {
    viewFlashcard.classList.add('active');
    filterFlashcards('critical');
    document.getElementById('select-chapter').value = 'critical';
    showToast('Đang ôn tập 60 Câu Điểm Liệt (bắt buộc đúng 100%)', '⚠️');
  } else if (viewName === 'exam') {
    viewExam.classList.add('active');
    if (state.examQuestions.length === 0) {
      startExam('random');
    }
  } else if (viewName === 'mistakes') {
    viewCustomList.classList.add('active');
    renderCustomListView('mistakes');
  } else if (viewName === 'bookmarks') {
    viewCustomList.classList.add('active');
    renderCustomListView('bookmarks');
  }
}

function updateBadges() {
  const badgeMistakes = document.getElementById('badge-mistakes-count');
  const badgeBookmarks = document.getElementById('badge-bookmarks-count');
  if (badgeMistakes) badgeMistakes.textContent = state.mistakes.size;
  if (badgeBookmarks) badgeBookmarks.textContent = state.bookmarks.size;
}

// ==========================================================================
// CHẾ ĐỘ 1: FLASHCARD ÔN TẬP
// ==========================================================================
function initFlashcard() {
  const selectChapter = document.getElementById('select-chapter');
  if (selectChapter) {
    selectChapter.addEventListener('change', (e) => {
      filterFlashcards(e.target.value);
    });
  }

  // Flip triggers
  const btnFlip = document.getElementById('fc-btn-flip');
  const btnFlipBack = document.getElementById('fc-btn-flip-back');
  const fcCard = document.getElementById('fc-card');

  if (btnFlip) btnFlip.addEventListener('click', (e) => { e.stopPropagation(); toggleFlip(); });
  if (btnFlipBack) btnFlipBack.addEventListener('click', (e) => { e.stopPropagation(); toggleFlip(); });

  // Navigation
  document.getElementById('fc-btn-prev').addEventListener('click', () => prevFlashcard());
  document.getElementById('fc-btn-next').addEventListener('click', () => nextFlashcard());
  document.getElementById('fc-btn-shuffle').addEventListener('click', () => shuffleFlashcards());
  
  const btnBm = document.getElementById('fc-btn-bookmark');
  const btnBmBack = document.getElementById('fc-back-btn-bookmark');
  if (btnBm) btnBm.addEventListener('click', () => toggleBookmarkCurrentFc());
  if (btnBmBack) btnBmBack.addEventListener('click', () => toggleBookmarkCurrentFc());

  // Touch Swipe for Mobile
  let touchStartX = 0;
  let touchEndX = 0;
  const fcCard = document.getElementById('fc-card');
  if (fcCard) {
    fcCard.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    fcCard.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });
  }

  function handleSwipe() {
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > 50) {
      if (diff < 0) {
        // Swipe left -> Next
        nextFlashcard();
      } else {
        // Swipe right -> Prev
        prevFlashcard();
      }
    }
  }

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (state.currentView !== 'flashcard' && state.currentView !== 'critical') return;
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'TEXTAREA') return;

    if (e.code === 'Space') {
      e.preventDefault();
      toggleFlip();
    } else if (e.code === 'ArrowLeft') {
      e.preventDefault();
      prevFlashcard();
    } else if (e.code === 'ArrowRight') {
      e.preventDefault();
      nextFlashcard();
    } else if (['Digit1', 'Digit2', 'Digit3', 'Digit4'].includes(e.code)) {
      const optIdx = parseInt(e.code.replace('Digit', ''), 10);
      selectFcOption(optIdx);
    } else if (e.key.toLowerCase() === 'b') {
      toggleBookmarkCurrentFc();
    }
  });

  filterFlashcards('all');
}

function filterFlashcards(filterVal) {
  if (filterVal === 'all') {
    state.fcQuestions = [...GPLX_QUESTIONS];
  } else if (filterVal === 'critical') {
    state.fcQuestions = GPLX_QUESTIONS.filter(q => q.isCritical);
  } else {
    const chapId = parseInt(filterVal, 10);
    state.fcQuestions = GPLX_QUESTIONS.filter(q => q.chapter === chapId);
  }

  state.fcIndex = 0;
  state.fcFlipped = false;
  renderCurrentFlashcard();
}

function renderCurrentFlashcard() {
  const q = state.fcQuestions[state.fcIndex];
  if (!q) return;

  state.fcFlipped = false;
  const fcFront = document.getElementById('fc-front');
  const fcBack = document.getElementById('fc-back');
  if (fcFront) fcFront.style.display = 'flex';
  if (fcBack) fcBack.style.display = 'none';

  // Stats and counters
  document.getElementById('fc-total-count').textContent = state.fcQuestions.length;
  document.getElementById('fc-counter-label').textContent = `${state.fcIndex + 1} / ${state.fcQuestions.length}`;
  
  const progressPercent = Math.round(((state.fcIndex + 1) / state.fcQuestions.length) * 100);
  document.getElementById('fc-progress-fill').style.width = `${progressPercent}%`;

  // Front face elements
  document.getElementById('fc-q-num').textContent = `Câu ${q.id}`;
  document.getElementById('fc-chapter-name').textContent = `Chương ${q.chapter}`;
  
  const criticalTag = document.getElementById('fc-critical-tag');
  const backCriticalTag = document.getElementById('fc-back-critical-tag');
  if (q.isCritical) {
    criticalTag.style.display = 'inline-flex';
    backCriticalTag.style.display = 'inline-flex';
  } else {
    criticalTag.style.display = 'none';
    backCriticalTag.style.display = 'none';
  }

  // Bookmark status on both front and back
  const isBm = state.bookmarks.has(q.id);
  const btnBm = document.getElementById('fc-btn-bookmark');
  const btnBmBack = document.getElementById('fc-back-btn-bookmark');
  if (btnBm) btnBm.classList.toggle('active', isBm);
  if (btnBmBack) btnBmBack.classList.toggle('active', isBm);

  document.getElementById('fc-q-text').textContent = q.question;

  // Media box (SVG sign or sa hình)
  const mediaBox = document.getElementById('fc-media-box');
  if (q.imageSvg) {
    mediaBox.style.display = 'flex';
    mediaBox.innerHTML = q.imageSvg;
  } else {
    mediaBox.style.display = 'none';
    mediaBox.innerHTML = '';
  }

  // Options on front (Loại bỏ số thứ tự trùng lặp)
  const optionsList = document.getElementById('fc-options-list');
  optionsList.innerHTML = '';
  q.options.forEach((optText, idx) => {
    const optNum = idx + 1;
    const item = document.createElement('button');
    item.className = 'option-item';
    item.type = 'button';
    item.innerHTML = `
      <span class="option-index">${optNum}</span>
      <span class="option-text">${cleanOptionText(optText)}</span>
    `;
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      selectFcOption(optNum);
    });
    optionsList.appendChild(item);
  });

  // Back face elements
  document.getElementById('fc-back-q-num').textContent = `Câu ${q.id}`;
  const backChap = document.getElementById('fc-back-chapter-name');
  if (backChap) backChap.textContent = `Chương ${q.chapter}`;
  document.getElementById('fc-answer-text').textContent = cleanOptionText(q.options[q.answer - 1]) || `Đáp án ${q.answer}`;
  document.getElementById('fc-explanation-text').textContent = q.explanation || 'Không có giải thích chi tiết.';

  const tipBox = document.getElementById('fc-tip-box');
  const tipText = document.getElementById('fc-tip-text');
  if (q.tip) {
    tipBox.style.display = 'block';
    tipText.textContent = q.tip;
  } else {
    tipBox.style.display = 'none';
  }

  // Update prev / next disabled states
  document.getElementById('fc-btn-prev').disabled = (state.fcIndex === 0);
  document.getElementById('fc-btn-next').disabled = (state.fcIndex === state.fcQuestions.length - 1);
}

function selectFcOption(optIndex) {
  const q = state.fcQuestions[state.fcIndex];
  if (!q) return;

  const items = document.querySelectorAll('#fc-options-list .option-item');
  items.forEach((item, idx) => {
    const num = idx + 1;
    item.classList.remove('selected', 'correct', 'incorrect');
    if (num === optIndex) {
      if (num === q.answer) {
        item.classList.add('correct');
        showToast('Chính xác! 🎉', '✅');
        state.mastered.add(q.id);
        setStorage(STORAGE_KEYS.MASTERED, Array.from(state.mastered));
      } else {
        item.classList.add('incorrect');
        showToast('Sai rồi! Bấm [Space] để xem giải thích.', '❌');
        state.mistakes.add(q.id);
        setStorage(STORAGE_KEYS.MISTAKES, Array.from(state.mistakes));
        updateBadges();
      }
    }
    if (num === q.answer && num !== optIndex) {
      item.classList.add('correct');
    }
  });
}

function toggleFlip() {
  state.fcFlipped = !state.fcFlipped;
  const fcFront = document.getElementById('fc-front');
  const fcBack = document.getElementById('fc-back');
  if (state.fcFlipped) {
    if (fcFront) fcFront.style.display = 'none';
    if (fcBack) fcBack.style.display = 'flex';
  } else {
    if (fcFront) fcFront.style.display = 'flex';
    if (fcBack) fcBack.style.display = 'none';
  }
}

function nextFlashcard() {
  if (state.fcIndex < state.fcQuestions.length - 1) {
    state.fcIndex++;
    renderCurrentFlashcard();
  }
}

function prevFlashcard() {
  if (state.fcIndex > 0) {
    state.fcIndex--;
    renderCurrentFlashcard();
  }
}

function shuffleFlashcards() {
  state.fcQuestions.sort(() => 0.5 - Math.random());
  state.fcIndex = 0;
  renderCurrentFlashcard();
  showToast('Đã xáo trộn ngẫu nhiên thứ tự câu hỏi!', '🔀');
}

function toggleBookmarkCurrentFc() {
  const q = state.fcQuestions[state.fcIndex];
  if (!q) return;

  if (state.bookmarks.has(q.id)) {
    state.bookmarks.delete(q.id);
    showToast(`Đã bỏ lưu Câu ${q.id}`, '🗑️');
  } else {
    state.bookmarks.add(q.id);
    showToast(`Đã lưu Câu ${q.id} vào danh sách ôn tập`, '🔖');
  }

  setStorage(STORAGE_KEYS.BOOKMARKS, Array.from(state.bookmarks));
  updateBadges();
  const isBm = state.bookmarks.has(q.id);
  const btnBm = document.getElementById('fc-btn-bookmark');
  const btnBmBack = document.getElementById('fc-back-btn-bookmark');
  if (btnBm) btnBm.classList.toggle('active', isBm);
  if (btnBmBack) btnBmBack.classList.toggle('active', isBm);
}

// ==========================================================================
// CHẾ ĐỘ 2: THI THỬ 30 CÂU (EXAM MODE)
// ==========================================================================
function initExam() {
  const selectExam = document.getElementById('select-exam');
  if (selectExam) {
    // Populate 20 preset exams
    GPLX_PRESET_EXAMS.forEach(ex => {
      const opt = document.createElement('option');
      opt.value = ex.id;
      opt.textContent = `📋 ${ex.title} (30 Câu)`;
      selectExam.appendChild(opt);
    });

    selectExam.addEventListener('change', (e) => {
      startExam(e.target.value);
    });
  }

  const btnStartTop = document.getElementById('btn-start-exam');
  const btnStartHero = document.getElementById('btn-start-exam-hero');
  if (btnStartTop) btnStartTop.addEventListener('click', () => beginExamCountdown());
  if (btnStartHero) btnStartHero.addEventListener('click', () => beginExamCountdown());

  document.getElementById('btn-start-new-exam').addEventListener('click', () => {
    const val = document.getElementById('select-exam').value;
    startExam(val);
  });

  document.getElementById('btn-submit-exam').addEventListener('click', () => {
    confirmAndSubmitExam();
  });

  document.getElementById('exam-btn-prev').addEventListener('click', () => prevExamQuestion());
  document.getElementById('exam-btn-next').addEventListener('click', () => nextExamQuestion());

  // Flag for review checkbox
  const flagCheckbox = document.getElementById('exam-flag-checkbox');
  if (flagCheckbox) {
    flagCheckbox.addEventListener('change', (e) => {
      if (e.target.checked) {
        state.examFlags.add(state.examIndex);
      } else {
        state.examFlags.delete(state.examIndex);
      }
      updatePaletteTile(state.examIndex);
    });
  }

  // Result modal buttons
  document.getElementById('modal-btn-review').addEventListener('click', () => {
    closeResultModal();
    enterExamReviewMode();
  });

  document.getElementById('modal-btn-retry').addEventListener('click', () => {
    closeResultModal();
    const val = document.getElementById('select-exam').value;
    startExam(val);
  });

  document.getElementById('modal-btn-new-exam').addEventListener('click', () => {
    closeResultModal();
    document.getElementById('select-exam').value = 'random';
    startExam('random');
  });

  // Keyboard navigation during exam
  window.addEventListener('keydown', (e) => {
    if (state.currentView !== 'exam') return;
    if (document.getElementById('modal-result').classList.contains('active')) return;
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;

    if (e.code === 'ArrowLeft') {
      e.preventDefault();
      prevExamQuestion();
    } else if (e.code === 'ArrowRight') {
      e.preventDefault();
      nextExamQuestion();
    } else if (['Digit1', 'Digit2', 'Digit3', 'Digit4'].includes(e.code)) {
      const optIdx = parseInt(e.code.replace('Digit', ''), 10);
      selectExamOption(optIdx);
    }
  });
}

function startExam(presetOrRandom) {
  // Clear any existing timer
  if (state.examTimer) {
    clearInterval(state.examTimer);
    state.examTimer = null;
  }

  let selectedQuestions = [];

  if (presetOrRandom === 'random') {
    selectedQuestions = generateRandomExam30();
  } else {
    const examId = parseInt(presetOrRandom, 10);
    const preset = GPLX_PRESET_EXAMS.find(p => p.id === examId);
    if (preset) {
      selectedQuestions = preset.questionIds.map(id => GPLX_QUESTIONS.find(q => q.id === id)).filter(Boolean);
    } else {
      selectedQuestions = generateRandomExam30();
    }
  }

  // Enforce exactly 30 questions
  state.examQuestions = selectedQuestions.slice(0, 30);
  state.examAnswers = {};
  state.examFlags.clear();
  state.examIndex = 0;
  state.examSubmitted = false;
  state.examStarted = false;
  state.isReviewMode = false;
  state.examSecondsRemaining = 20 * 60; // 20 minutes countdown
  state.examTotalTimeTaken = 0;

  // Render 30-palette grid
  buildExamPalette();

  // Reset timer UI to static 20:00 (chỉ tính giờ khi bấm Bắt đầu)
  updateTimerUI();

  // Update briefing card text
  const readyTitle = document.getElementById('ready-exam-title');
  const readySub = document.getElementById('ready-exam-subtitle');
  if (presetOrRandom === 'random') {
    if (readyTitle) readyTitle.textContent = 'Đề Thi Sát Hạch Ngẫu Nhiên (30 Câu)';
    if (readySub) readySub.textContent = '30 câu hỏi chuẩn sát hạch Tổng cục Đường bộ Việt Nam';
  } else {
    const examId = parseInt(presetOrRandom, 10);
    const preset = GPLX_PRESET_EXAMS.find(p => p.id === examId);
    if (readyTitle) readyTitle.textContent = preset ? `${preset.title} (30 Câu)` : `Đề Số ${examId}`;
    if (readySub) readySub.textContent = 'Đề thi 30 câu hỏi theo quy chuẩn Quốc gia';
  }

  // Show ready screen & hide active question card
  const readyCard = document.getElementById('exam-ready-card');
  const activeCard = document.getElementById('exam-active-card');
  const btnStartExam = document.getElementById('btn-start-exam');
  const btnSubmitExam = document.getElementById('btn-submit-exam');

  if (readyCard) readyCard.style.display = 'block';
  if (activeCard) activeCard.style.display = 'none';
  if (btnStartExam) btnStartExam.style.display = 'inline-flex';
  if (btnSubmitExam) btnSubmitExam.style.display = 'none';
}

function beginExamCountdown() {
  if (state.examStarted) return;
  state.examStarted = true;

  const readyCard = document.getElementById('exam-ready-card');
  const activeCard = document.getElementById('exam-active-card');
  const btnStartExam = document.getElementById('btn-start-exam');
  const btnSubmitExam = document.getElementById('btn-submit-exam');

  if (readyCard) readyCard.style.display = 'none';
  if (activeCard) activeCard.style.display = 'block';
  if (btnStartExam) btnStartExam.style.display = 'none';
  if (btnSubmitExam) btnSubmitExam.style.display = 'inline-flex';

  renderExamQuestion(0);

  if (state.examTimer) clearInterval(state.examTimer);
  state.examTimer = setInterval(() => {
    state.examSecondsRemaining--;
    state.examTotalTimeTaken++;
    updateTimerUI();

    if (state.examSecondsRemaining <= 0) {
      clearInterval(state.examTimer);
      state.examTimer = null;
      showToast('Đã hết thời gian làm bài! Đang tự động nộp bài...', '⏰');
      submitExam(true);
    }
  }, 1000);

  showToast('⏱️ Bắt đầu tính giờ làm bài: 20:00 phút. Chúc bạn thi tốt!', '🚀');
}

function updateTimerUI() {
  const timerBox = document.getElementById('exam-timer-box');
  const timerText = document.getElementById('exam-timer-text');
  if (!timerText || !timerBox) return;

  const mins = Math.floor(state.examSecondsRemaining / 60);
  const secs = state.examSecondsRemaining % 60;
  timerText.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

  if (state.examSecondsRemaining <= 3 * 60) {
    timerBox.classList.add('warning');
  } else {
    timerBox.classList.remove('warning');
  }
}

function buildExamPalette() {
  const grid = document.getElementById('exam-palette-grid');
  if (!grid) return;
  grid.innerHTML = '';

  for (let i = 0; i < 30; i++) {
    const tile = document.createElement('button');
    tile.className = 'palette-tile';
    tile.type = 'button';
    tile.textContent = (i + 1).toString();
    tile.id = `palette-tile-${i}`;

    tile.addEventListener('click', () => {
      if (!state.examStarted && !state.isReviewMode) {
        beginExamCountdown();
      }
      renderExamQuestion(i);
    });

    grid.appendChild(tile);
  }
}

function updatePaletteTile(index) {
  const tile = document.getElementById(`palette-tile-${index}`);
  if (!tile) return;

  tile.className = 'palette-tile';

  if (index === state.examIndex) {
    tile.classList.add('current');
  }

  if (state.isReviewMode) {
    const q = state.examQuestions[index];
    const userAns = state.examAnswers[index];
    if (userAns === q.answer) {
      tile.classList.add('correct-result');
    } else {
      tile.classList.add('incorrect-result');
    }
  } else {
    if (state.examAnswers[index] !== undefined) {
      tile.classList.add('answered');
    }
  }

  if (state.examFlags.has(index)) {
    tile.classList.add('flagged');
  }

  // Update progress counter
  const answeredCount = Object.keys(state.examAnswers).length;
  document.getElementById('exam-progress-counter').textContent = `${answeredCount}/30`;
}

function renderExamQuestion(index) {
  if (index < 0 || index >= state.examQuestions.length) return;

  // Update previous tile and current tile
  const prevIdx = state.examIndex;
  state.examIndex = index;
  updatePaletteTile(prevIdx);
  updatePaletteTile(state.examIndex);

  const q = state.examQuestions[index];
  if (!q) return;

  document.getElementById('exam-q-counter').textContent = `Câu ${index + 1} / 30`;
  document.getElementById('exam-q-chapter').textContent = `Chương ${q.chapter}`;

  const critTag = document.getElementById('exam-critical-tag');
  if (q.isCritical) {
    critTag.style.display = 'inline-flex';
  } else {
    critTag.style.display = 'none';
  }

  // Flag status
  const flagCheckbox = document.getElementById('exam-flag-checkbox');
  const flagLabel = document.getElementById('exam-flag-label');
  if (flagCheckbox && flagLabel) {
    const isFlagged = state.examFlags.has(index);
    flagCheckbox.checked = isFlagged;
    flagLabel.classList.toggle('active', isFlagged);
  }

  document.getElementById('exam-q-text').textContent = q.question;

  // Media box
  const mediaBox = document.getElementById('exam-media-box');
  if (q.imageSvg) {
    mediaBox.style.display = 'flex';
    mediaBox.innerHTML = q.imageSvg;
  } else {
    mediaBox.style.display = 'none';
    mediaBox.innerHTML = '';
  }

  // Render 4 options
  const optionsList = document.getElementById('exam-options-list');
  optionsList.innerHTML = '';

  const selectedOpt = state.examAnswers[index];

  q.options.forEach((optText, optIdx) => {
    const optNum = optIdx + 1;
    const btn = document.createElement('button');
    btn.className = 'option-item';
    btn.type = 'button';

    if (state.isReviewMode) {
      if (optNum === q.answer) {
        btn.classList.add('correct');
      }
      if (selectedOpt === optNum && selectedOpt !== q.answer) {
        btn.classList.add('incorrect');
      }
      if (selectedOpt === optNum && selectedOpt === q.answer) {
        btn.classList.add('correct');
      }
      btn.disabled = true;
    } else {
      if (selectedOpt === optNum) {
        btn.classList.add('selected');
      }
      btn.addEventListener('click', () => {
        selectExamOption(optNum);
      });
    }

    btn.innerHTML = `
      <span class="option-index">${optNum}</span>
      <span class="option-text">${cleanOptionText(optText)}</span>
    `;

    optionsList.appendChild(btn);
  });

  // Review mode box
  const reviewBox = document.getElementById('exam-review-box');
  if (state.isReviewMode) {
    reviewBox.style.display = 'block';
    document.getElementById('exam-review-answer').textContent = cleanOptionText(q.options[q.answer - 1]) || `Đáp án ${q.answer}`;
    document.getElementById('exam-review-explanation').textContent = q.explanation || 'Không có giải thích chi tiết.';
  } else {
    reviewBox.style.display = 'none';
  }

  // Navigation button states
  document.getElementById('exam-btn-prev').disabled = (index === 0);
  document.getElementById('exam-btn-next').disabled = (index === state.examQuestions.length - 1);
}

function selectExamOption(optNumber) {
  if (state.examSubmitted) return;

  state.examAnswers[state.examIndex] = optNumber;
  updatePaletteTile(state.examIndex);

  // Update UI selection on current question
  const items = document.querySelectorAll('#exam-options-list .option-item');
  items.forEach((item, idx) => {
    item.classList.toggle('selected', (idx + 1) === optNumber);
  });
}

function prevExamQuestion() {
  if (state.examIndex > 0) {
    renderExamQuestion(state.examIndex - 1);
  }
}

function nextExamQuestion() {
  if (state.examIndex < state.examQuestions.length - 1) {
    renderExamQuestion(state.examIndex + 1);
  }
}

function confirmAndSubmitExam() {
  const answeredCount = Object.keys(state.examAnswers).length;
  const unansweredCount = 30 - answeredCount;

  let confirmMsg = `Bạn đã hoàn thành ${answeredCount}/30 câu hỏi.`;
  if (unansweredCount > 0) {
    confirmMsg += `\nVẫn còn ${unansweredCount} câu chưa làm!`;
  }
  confirmMsg += `\nBạn có chắc chắn muốn nộp bài ngay bây giờ?`;

  if (window.confirm(confirmMsg)) {
    submitExam(false);
  }
}

function submitExam(isAuto = false) {
  if (state.examSubmitted) return;
  state.examSubmitted = true;

  if (state.examTimer) {
    clearInterval(state.examTimer);
    state.examTimer = null;
  }

  let correctCount = 0;
  let wrongCount = 0;
  let failedCriticalQuestions = [];

  state.examQuestions.forEach((q, idx) => {
    const userAns = state.examAnswers[idx];
    if (userAns === q.answer) {
      correctCount++;
    } else {
      wrongCount++;
      // Record to mistakes bank in LocalStorage
      state.mistakes.add(q.id);

      if (q.isCritical) {
        failedCriticalQuestions.push({
          examNumber: idx + 1,
          questionId: q.id,
          questionText: q.question
        });
      }
    }
  });

  setStorage(STORAGE_KEYS.MISTAKES, Array.from(state.mistakes));
  updateBadges();

  // Passing criteria according to Vietnam Directorate for Roads:
  // Must achieve >= 27/30 AND have ZERO mistakes on critical questions
  const hasCriticalFailure = failedCriticalQuestions.length > 0;
  const isPass = (correctCount >= 27) && !hasCriticalFailure;

  // Show Result Modal
  showResultModal({
    isPass,
    score: correctCount,
    total: 30,
    wrongCount,
    hasCriticalFailure,
    failedCriticalQuestions,
    timeTakenSeconds: state.examTotalTimeTaken
  });
}

function showResultModal(result) {
  const modal = document.getElementById('modal-result');
  const icon = document.getElementById('modal-result-icon');
  const verdict = document.getElementById('modal-result-verdict');
  const score = document.getElementById('modal-result-score');
  const critAlert = document.getElementById('modal-critical-alert');
  const critDetails = document.getElementById('modal-critical-details');
  const statCorrect = document.getElementById('modal-stat-correct');
  const statWrong = document.getElementById('modal-stat-wrong');
  const statTime = document.getElementById('modal-stat-time');
  const msg = document.getElementById('modal-result-message');

  score.innerHTML = `${result.score}<span> / ${result.total}</span>`;
  statCorrect.textContent = result.score;
  statWrong.textContent = result.wrongCount;

  const mins = Math.floor(result.timeTakenSeconds / 60);
  const secs = result.timeTakenSeconds % 60;
  statTime.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

  if (result.isPass) {
    icon.className = 'result-badge-icon pass';
    icon.textContent = '✓';
    verdict.className = 'result-verdict pass';
    verdict.textContent = 'ĐẠT YÊU CẦU';
    critAlert.style.display = 'none';
    msg.textContent = 'Chúc mừng bạn! Bạn đã vượt qua kỳ thi sát hạch lý thuyết bằng lái ô tô xuất sắc.';
  } else {
    icon.className = 'result-badge-icon fail';
    icon.textContent = '✕';
    verdict.className = 'result-verdict fail';
    verdict.textContent = 'KHÔNG ĐẠT';

    if (result.hasCriticalFailure) {
      critAlert.style.display = 'block';
      const critNums = result.failedCriticalQuestions.map(f => `Câu số ${f.examNumber} (GPLX ID ${f.questionId})`).join(', ');
      critDetails.innerHTML = `Bạn đã làm sai câu điểm liệt: <strong>${critNums}</strong>.<br />Theo quy chế sát hạch của Bộ GTVT, thí sinh bị <strong>TRƯỢT TRỰC TIẾP</strong> nếu làm sai câu điểm liệt.`;
      msg.textContent = 'Lưu ý: Mọi câu điểm liệt đều bắt buộc phải trả lời đúng 100%.';
    } else {
      critAlert.style.display = 'none';
      msg.textContent = `Bạn đạt ${result.score}/30 câu. Cần tối thiểu 27/30 câu để thi đỗ bằng lái ô tô.`;
    }
  }

  modal.classList.add('active');
}

function closeResultModal() {
  const modal = document.getElementById('modal-result');
  modal.classList.remove('active');
}

function enterExamReviewMode() {
  state.isReviewMode = true;

  // Refresh all 30 palette tiles with green/red
  for (let i = 0; i < 30; i++) {
    updatePaletteTile(i);
  }

  // Re-render current question with explanation
  renderExamQuestion(state.examIndex);
  showToast('Đang ở chế độ Xem lại chi tiết bài thi!', '🔍');
}

// ==========================================================================
// CHẾ ĐỘ 3: ÔN TẬP CÂU SAI & ĐÃ LƯU (CUSTOM LIST)
// ==========================================================================
function renderCustomListView(type) {
  const title = document.getElementById('custom-list-title');
  const subtitle = document.getElementById('custom-list-subtitle');
  const container = document.getElementById('custom-list-container');
  const btnClear = document.getElementById('btn-clear-custom-list');

  const questionIds = type === 'mistakes' ? Array.from(state.mistakes) : Array.from(state.bookmarks);

  if (type === 'mistakes') {
    title.textContent = 'Bộ Câu Hỏi Hay Làm Sai';
    subtitle.textContent = 'Tự động lưu lại mỗi khi bạn trả lời sai trong bài thi hoặc flashcard để ôn luyện triệt để';
    btnClear.textContent = 'Xóa toàn bộ câu sai';
  } else {
    title.textContent = 'Danh Sách Câu Hỏi Đã Lưu';
    subtitle.textContent = 'Các câu hỏi bạn đã đánh dấu bookmark để xem lại khi cần';
    btnClear.textContent = 'Xóa toàn bộ đã lưu';
  }

  btnClear.onclick = () => {
    if (confirm(`Bạn có chắc chắn muốn xóa danh sách ${type === 'mistakes' ? 'câu sai' : 'đã lưu'}?`)) {
      if (type === 'mistakes') {
        state.mistakes.clear();
        setStorage(STORAGE_KEYS.MISTAKES, []);
      } else {
        state.bookmarks.clear();
        setStorage(STORAGE_KEYS.BOOKMARKS, []);
      }
      updateBadges();
      renderCustomListView(type);
      showToast('Đã dọn sạch danh sách!', '🗑️');
    }
  };

  if (questionIds.length === 0) {
    container.innerHTML = `
      <div class="empty-state-box">
        <div class="empty-state-icon">${type === 'mistakes' ? '🎉' : '🔖'}</div>
        <div class="empty-state-title">${type === 'mistakes' ? 'Không có câu sai nào!' : 'Chưa có câu hỏi nào được lưu'}</div>
        <p class="empty-state-desc">${type === 'mistakes' ? 'Thật tuyệt vời! Hãy tiếp tục duy trì phong độ làm bài chính xác nhé.' : 'Bạn có thể bấm vào biểu tượng dấu trang (🔖) ở bất kỳ câu hỏi nào để lưu vào đây.'}</p>
        <button class="btn-ctrl btn-primary" id="btn-empty-go-study">Ôn luyện Flashcard ngay</button>
      </div>
    `;
    document.getElementById('btn-empty-go-study').addEventListener('click', () => {
      switchView('flashcard');
    });
    return;
  }

  container.innerHTML = '';
  const listWrapper = document.createElement('div');
  listWrapper.style.display = 'flex';
  listWrapper.style.flexDirection = 'column';
  listWrapper.style.gap = '1.25rem';

  questionIds.forEach(id => {
    const q = GPLX_QUESTIONS.find(item => item.id === id);
    if (!q) return;

    const card = document.createElement('div');
    card.className = 'exam-main-card';
    card.style.padding = '1.5rem';

    let optionsHtml = '';
    q.options.forEach((optText, idx) => {
      const isCorrect = (idx + 1) === q.answer;
      optionsHtml += `
        <div class="option-item ${isCorrect ? 'correct' : ''}" style="cursor: default;">
          <span class="option-index">${idx + 1}</span>
          <span class="option-text">${cleanOptionText(optText)} ${isCorrect ? '<strong>(Đáp án đúng)</strong>' : ''}</span>
        </div>
      `;
    });

    card.innerHTML = `
      <div class="exam-q-header">
        <div class="tag-cluster">
          <span class="badge-q-number">Câu ${q.id}</span>
          <span class="badge-chapter">Chương ${q.chapter}</span>
          ${q.isCritical ? '<span class="badge-critical">⚠️ CÂU ĐIỂM LIỆT</span>' : ''}
        </div>
      </div>
      <div class="card-question-text" style="font-size: 1.1rem;">${q.question}</div>
      ${q.imageSvg ? `<div class="card-media-box">${q.imageSvg}</div>` : ''}
      <div class="options-list" style="margin-bottom: 1rem;">
        ${optionsHtml}
      </div>
      <div class="explanation-section" style="margin-bottom: 0;">
        <div class="section-title-sm">CĂN CỨ LUẬT &amp; MẸO NHỚ:</div>
        <div class="explanation-text">${q.explanation || ''} ${q.tip ? `<br /><em>${q.tip}</em>` : ''}</div>
      </div>
    `;

    listWrapper.appendChild(card);
  });

  container.appendChild(listWrapper);
}

// ==========================================================================
// INITIALIZATION ON DOM READY
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initFlashcard();
  initExam();
  console.log('GPLX App initialized successfully.');
});
