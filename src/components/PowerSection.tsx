import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const PowerSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineBoxRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const line3Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const headlineBox = headlineBoxRef.current;
    const line1 = line1Ref.current;
    const line2 = line2Ref.current;
    const line3 = line3Ref.current;

    if (!container || !headlineBox || !line1 || !line2 || !line3) return;

    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(line2, { clipPath: 'inset(100% 0% 0% 0%)', scaleX: 1 });
      gsap.set(line3, { opacity: 0, y: 140 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: '+=250%',
          pin: true,
          scrub: 1,
        },
      });

      // STAGE 01: Vertical mask reveal of line 2 ("CREATE")
      tl.to(line2, {
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 1,
        ease: 'power2.inOut',
      });

      // STAGE 02: Line 1 moves upward, line 2 scales horizontally, line 3 appears from bottom
      tl.to(line1, {
        y: '-18vh',
        letterSpacing: '0.08em',
        duration: 1,
        ease: 'power2.inOut',
      }, 'stage2');

      tl.to(line2, {
        scaleX: 1.65,
        color: '#0044FF',
        duration: 1,
        ease: 'power2.inOut',
      }, 'stage2');

      tl.to(line3, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
      }, 'stage2');

      // STAGE 03: Background transitions from light (#F5F3EF) to dark (#111111)
      tl.to(container, {
        backgroundColor: '#111111',
        color: '#F5F3EF',
        duration: 1.2,
      }, 'stage3');

      tl.to(line1, {
        color: '#F5F3EF',
        duration: 1,
      }, 'stage3');

      tl.to(line3, {
        color: '#F5F3EF',
        duration: 1,
      }, 'stage3');

      // STAGE 04: All text rearranges and exits outside the viewport
      tl.to(line1, {
        y: '-120vh',
        opacity: 0,
        duration: 1,
        ease: 'power2.in',
      }, 'stage4');

      tl.to(line2, {
        scale: 3,
        opacity: 0,
        duration: 1,
        ease: 'power2.in',
      }, 'stage4');

      tl.to(line3, {
        y: '120vh',
        opacity: 0,
        duration: 1,
        ease: 'power2.in',
      }, 'stage4');

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="power-section-container" aria-label="The Power of Words">
      <div ref={headlineBoxRef} className="power-headline-box">
        <span className="editorial-tag">SECTION 02 — THE DIALECTIC</span>

        <span ref={line1Ref} className="power-line">WORDS</span>
        <span ref={line2Ref} className="power-line power-line-create">CREATE</span>
        <span ref={line3Ref} className="power-line">MOVEMENT.</span>
      </div>
    </section>
  );
};
