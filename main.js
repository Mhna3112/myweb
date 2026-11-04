/**
 * DUCMANH.XYZ — PURE SCROLLYTELLING ENGINE
 * Replicating the exact rhythm & text flow of lab.ximitech.vn (No 3D)
 */

// --- 00. GLOBAL DATA & COMPATIBILITY ---
var FRIENDS_DATA = [];
const SLIDE_IDS = ['home', 'about', 'friends', 'contact'];
const SECTIONS = ['hero', 'manifesto', 'parcours', 'toolkit', 'projects', 'contact'];

const safeRaf = typeof requestAnimationFrame !== 'undefined'
  ? requestAnimationFrame
  : (fn) => setTimeout(() => fn(Date.now()), 16);

// --- 01. SMOOTH SCROLL (LENIS) ---
let lenis = null;
if (typeof window !== 'undefined' && typeof window.Lenis !== 'undefined') {
  lenis = new window.Lenis({
    duration: 1.25,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  function raf(time) {
    if (lenis) lenis.raf(time);
    safeRaf(raf);
  }
  safeRaf(raf);

  if (typeof window.ScrollTrigger !== 'undefined') {
    lenis.on('scroll', window.ScrollTrigger.update);
    if (window.gsap && window.gsap.ticker) {
      window.gsap.ticker.add((time) => {
        if (lenis) lenis.raf(time * 1000);
      });
      window.gsap.ticker.lagSmoothing(0);
    }
  }
}

// --- 02. INTRO LOADER (000 -> 100) ---
function initIntroLoader() {
  const introEl = document.getElementById('site-intro');
  const countEl = document.getElementById('intro-count');
  if (!introEl || !countEl) return;

  let hasSeen = false;
  try {
    hasSeen = sessionStorage.getItem('dm_scrolly_intro') === 'true';
  } catch (e) {}

  if (hasSeen) {
    if (typeof introEl.remove === 'function') introEl.remove();
    else introEl.style.display = 'none';
    initHeroTypewriter();
    return;
  }

  const duration = 1800; // ms
  const getTime = () => (typeof performance !== 'undefined' && performance.now ? performance.now() : Date.now());
  const startTime = getTime();
  const lineSpan = introEl.querySelector ? introEl.querySelector('.ximi-intro__line span') : null;

  function tick(now) {
    const current = typeof now === 'number' ? now : getTime();
    const t = Math.min((current - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    const val = Math.round(eased * 100);

    countEl.textContent = String(val).padStart(3, '0');
    if (lineSpan) lineSpan.style.width = val + '%';

    if (t < 1) {
      safeRaf(tick);
    } else {
      try {
        sessionStorage.setItem('dm_scrolly_intro', 'true');
      } catch (e) {}

      introEl.classList.add('is-leaving');
      setTimeout(() => {
        if (typeof introEl.remove === 'function') introEl.remove();
        else introEl.style.display = 'none';
        initHeroTypewriter();
      }, 700);
    }
  }

  safeRaf(tick);
}

// --- 03. HERO TYPEWRITER ---
function initHeroTypewriter() {
  const nameEl = document.getElementById('hero-typewriter-name');
  if (!nameEl) return;

  const fullText = "Hi, I'm Duc Manh";
  let idx = 0;
  nameEl.textContent = '';

  function type() {
    if (idx <= fullText.length) {
      nameEl.textContent = fullText.slice(0, idx);
      idx++;
      setTimeout(type, 70 + Math.random() * 30);
    }
  }

  setTimeout(type, 150);
}

// --- 04. GSAP PINNING & SCROLLYTELLING ANIMATIONS ---
function initScrollEngine() {
  if (typeof window.gsap === 'undefined' || typeof window.ScrollTrigger === 'undefined') {
    return;
  }

  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  gsap.registerPlugin(ScrollTrigger);

  // A. MANIFESTO SCRUBBING
  const manifesto = document.getElementById('manifesto-text');
  if (manifesto) {
    const words = manifesto.innerText.trim().split(/\s+/);
    manifesto.innerHTML = words.map((w) => `<span>${w} </span>`).join('');

    gsap.to('#manifesto-text span', {
      color: '#f4eedb',
      stagger: 0.1,
      scrollTrigger: {
        trigger: '#manifesto',
        start: 'top 70%',
        end: 'bottom 40%',
        scrub: 1,
      },
    });
  }

  // B. TRAJECTORY PINNED SENTENCES (The exact iconic effect)
  const trajectorySec = document.getElementById('parcours');
  const trajectoryPin = document.getElementById('trajectory-pin');
  const sentenceIds = ['#s-1', '#s-2', '#s-3', '#s-4', '#s-5', '#s-6', '#s-7'];
  const sentenceEls = sentenceIds.map((id) => document.querySelector(id)).filter(Boolean);

  if (trajectorySec && trajectoryPin && sentenceEls.length > 0) {
    const pinTl = gsap.timeline({
      scrollTrigger: {
        trigger: trajectorySec,
        start: 'top top',
        end: '+=3500', // Pinned for 3500px of scroll
        pin: trajectoryPin,
        scrub: 1,
      },
    });

    sentenceEls.forEach((el, i) => {
      // 1. Fade in & scale into view
      pinTl.to(el, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: 'power2.out',
      });

      // 2. If not the last sentence, transition out
      if (i < sentenceEls.length - 1) {
        pinTl.to(el, {
          opacity: 0,
          y: -50,
          scale: 0.95,
          duration: 0.8,
          ease: 'power2.in',
        }, '+=0.6'); // Short pause before moving to next
      }
    });
  }

  // C. NEXT SECTION CURVED SVG TEXTPATH & ORB
  const textPath = document.getElementById('nextTextPath');
  const orb = document.getElementById('nextOrb');
  const curveSec = document.querySelector('.next-section');

  if (textPath && curveSec) {
    gsap.to(textPath, {
      attr: { startOffset: '42%' },
      scrollTrigger: {
        trigger: curveSec,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.5,
      },
    });

    if (orb) {
      gsap.to(orb, {
        cx: 2400,
        cy: 580,
        scrollTrigger: {
          trigger: curveSec,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        },
      });
    }
  }

  // D. VERTICAL SCROLL INDICATOR SYNC
  SECTIONS.forEach((secId) => {
    ScrollTrigger.create({
      trigger: '#' + secId,
      start: 'top 50%',
      end: 'bottom 50%',
      onEnter: () => setIndicator(secId),
      onEnterBack: () => setIndicator(secId),
    });
  });
}

// --- 05. SCROLL INDICATOR HELPER ---
function setIndicator(secId) {
  const items = document.querySelectorAll('.scroll-indicator__item');
  items.forEach((item) => {
    const href = item.getAttribute('href');
    if (href === '#' + secId) {
      item.classList.add('is-active');
    } else {
      item.classList.remove('is-active');
    }
  });
}

// --- 06. SOUND TOGGLE SYNTH (Web Audio API) ---
function initSoundToggle() {
  const btn = document.getElementById('sound-btn');
  const hint = document.getElementById('sound-hint');
  if (!btn) return;

  let audioCtx = null;
  let isPlaying = false;
  let osc = null;
  let gain = null;

  btn.addEventListener('click', () => {
    if (!isPlaying) {
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;

        if (!audioCtx) audioCtx = new AudioCtx();
        if (audioCtx.state === 'suspended') audioCtx.resume();

        gain = audioCtx.createGain();
        gain.gain.setValueAtTime(0.01, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.05, audioCtx.currentTime + 1.2);
        gain.connect(audioCtx.destination);

        osc = audioCtx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(220, audioCtx.currentTime); // A3 calm drone
        osc.connect(gain);
        osc.start();

        isPlaying = true;
        btn.classList.add('is-playing');
        if (hint) hint.textContent = 'Tắt âm thanh';
      } catch (e) {
        console.warn('Audio not available:', e);
      }
    } else {
      if (gain && audioCtx) {
        gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.4);
        setTimeout(() => {
          if (osc) osc.stop();
          isPlaying = false;
          btn.classList.remove('is-playing');
          if (hint) hint.textContent = 'Bật âm thanh';
        }, 450);
      }
    }
  });
}

// --- 07. COMPATIBILITY HANDLERS ---
if (typeof window !== 'undefined') {
  window.addEventListener('mousemove', function(e) {
    const eyeL = document.getElementById('km-eye-l');
    const eyeR = document.getElementById('km-eye-r');
    if (eyeL && eyeR) {
      eyeL.style.transform = `translate(${e.clientX * 0.01}px, ${e.clientY * 0.01}px)`;
      eyeR.style.transform = `translate(${e.clientX * 0.01}px, ${e.clientY * 0.01}px)`;
    }
  });
}

var renderFriendsBoard = function() {
  const grid = document.getElementById('friends-board-grid');
  if (grid) {
    grid.innerHTML = '<div class="friends-empty-card">Kết nối cùng Mạnh nhé!</div>';
  }
};

var resetHeroTypewriter = function() {
  initHeroTypewriter();
};

// --- INITIALIZE ---
function init() {
  initIntroLoader();
  initScrollEngine();
  initSoundToggle();
  renderFriendsBoard();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Exports for Node testing sandbox
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    FRIENDS_DATA,
    SLIDE_IDS,
    renderFriendsBoard,
    resetHeroTypewriter,
    initHeroTypewriter,
  };
}
