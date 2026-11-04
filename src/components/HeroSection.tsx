import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const line3Ref = useRef<HTMLSpanElement>(null);
  const secretTextRef = useRef<HTMLDivElement>(null);
  const footerHintRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const headline = headlineRef.current;
    const line1 = line1Ref.current;
    const line2 = line2Ref.current;
    const line3 = line3Ref.current;
    const secretText = secretTextRef.current;
    const footerHint = footerHintRef.current;

    if (!container || !headline || !line1 || !line2 || !line3) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: '+=200%',
          pin: true,
          scrub: 1,
        },
      });

      // 1. Fade out scroll prompt
      if (footerHint) {
        tl.to(footerHint, { opacity: 0, duration: 0.2 }, 0);
      }

      // 2. Headline scales up dramatically
      tl.to(headline, {
        scale: 2.8,
        duration: 1.5,
        ease: 'power1.inOut',
      }, 0);

      // 3. Lines move in opposite directions beyond the viewport
      tl.to(line1, {
        x: '-65vw',
        opacity: 0.2,
        duration: 1.5,
        ease: 'power1.inOut',
      }, 0.1);

      tl.to(line2, {
        x: '75vw',
        opacity: 0.2,
        duration: 1.5,
        ease: 'power1.inOut',
      }, 0.1);

      tl.to(line3, {
        x: '-50vw',
        y: '25vh',
        opacity: 0.2,
        duration: 1.5,
        ease: 'power1.inOut',
      }, 0.15);

      // 4. Reveal secret layer behind headline
      if (secretText) {
        tl.to(secretText, {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power2.out',
        }, 0.6);
      }

      // 5. Container background shift
      tl.to(container, {
        backgroundColor: '#EAE6DF',
        duration: 1,
      }, 0.8);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="hero-wrapper" aria-label="Hero Section">
      <div className="hero-content">
        <span className="editorial-tag">PORTFOLIO · SCROLL-DRIVEN MOTION</span>

        <h1 ref={headlineRef} className="hero-headline">
          <span ref={line1Ref} className="hero-line">HELLO.</span>
          <span ref={line2Ref} className="hero-line text-stroke-thick">TÔI LÀ</span>
          <span ref={line3Ref} className="hero-line">NGUYỄN ĐỨC MẠNH</span>
        </h1>

        <div ref={secretTextRef} className="hero-secret-layer" aria-hidden="true">
          CREATIVE DEVELOPER ✦ KINETIC MOTION
        </div>
      </div>

      <div ref={footerHintRef} className="hero-footer-hint">
        <span>CUỘN CHUỘT ĐỂ BẮT ĐẦU</span>
        <span>↓</span>
      </div>
    </section>
  );
};
