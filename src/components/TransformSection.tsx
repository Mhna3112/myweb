import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const TransformSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const wordNothingRef = useRef<HTMLDivElement>(null);
  const wordStaysRef = useRef<HTMLDivElement>(null);
  const wordStillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const stage = stageRef.current;
    const wordNothing = wordNothingRef.current;
    const wordStays = wordStaysRef.current;
    const wordStill = wordStillRef.current;

    if (!container || !stage || !wordNothing || !wordStays || !wordStill) return;

    const ctx = gsap.context(() => {
      // Set initial compact centered composition
      gsap.set([wordNothing, wordStays, wordStill], {
        scale: 0.7,
        letterSpacing: '0.02em',
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: '+=250%',
          pin: true,
          scrub: 1,
        },
      });

      // 1. Expand letter spacing and scale up dramatically
      tl.to([wordNothing, wordStays, wordStill], {
        scale: 1.4,
        letterSpacing: '0.22em',
        duration: 1.5,
        ease: 'power2.inOut',
      }, 0);

      // 2. Displace vertically and change composition to extreme edge-alignment
      tl.to(wordNothing, {
        x: '-6vw',
        y: '-8vh',
        color: '#F5F3EF',
        duration: 1.5,
        ease: 'power2.inOut',
      }, 0);

      tl.to(wordStays, {
        scale: 1.8,
        letterSpacing: '0.04em',
        color: '#FF4400',
        duration: 1.5,
        ease: 'power2.inOut',
      }, 0.2);

      tl.to(wordStill, {
        x: '8vw',
        y: '8vh',
        letterSpacing: '0.28em',
        duration: 1.5,
        ease: 'power2.inOut',
      }, 0.4);

      // 3. Contract letter spacing back to ultra-tight editorial compression
      tl.to([wordNothing, wordStill], {
        letterSpacing: '-0.04em',
        scale: 1.6,
        duration: 1.2,
        ease: 'power3.out',
      }, 1.5);

      tl.to(wordStays, {
        letterSpacing: '-0.02em',
        scale: 2.1,
        duration: 1.2,
        ease: 'power3.out',
      }, 1.5);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="transform-section-container" aria-label="Typography Transformation">
      <div ref={stageRef} className="transform-stage">
        <div ref={wordNothingRef} className="transform-word word-nothing">
          NOTHING
        </div>
        <div ref={wordStaysRef} className="transform-word word-stays">
          STAYS
        </div>
        <div ref={wordStillRef} className="transform-word word-still">
          STILL.
        </div>
      </div>
    </section>
  );
};
