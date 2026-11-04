import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useLenis() {
  useEffect(() => {
    // Check prefers-reduced-motion
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    // Cho phép GSAP chạy không giới hạn ở 120Hz / 144Hz / 240Hz theo tần số quét thật của màn hình
    gsap.ticker.fps(-1);
    gsap.ticker.lagSmoothing(0);
    gsap.config({
      force3D: true,
      autoSleep: 60,
    });

    const lenis = new Lenis({
      lerp: 0.11, // Nội suy tuyến tính siêu mượt ở 120fps, phản hồi tức thì không trễ nhịp
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
      syncTouch: false,
    });

    // Đồng bộ trực tiếp Lenis với GSAP ScrollTrigger trong cùng 1 frame
    lenis.on('scroll', ScrollTrigger.update);

    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker, false, true);

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
    };
  }, []);
}

