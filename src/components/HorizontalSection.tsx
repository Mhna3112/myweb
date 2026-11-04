import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const HorizontalSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;

    if (!container || !track) return;

    const ctx = gsap.context(() => {
      const getScrollAmount = () => {
        const trackWidth = track.scrollWidth;
        return -(trackWidth - window.innerWidth + 120);
      };

      gsap.to(track, {
        x: getScrollAmount,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: () => `+=${Math.max(track.scrollWidth - window.innerWidth, 1800)}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="horizontal-outer" aria-label="Horizontal Typography Stream">
      <div ref={trackRef} className="horizontal-track">
        
        <div className="horizontal-item">
          <span className="horizontal-word">THIẾT KẾ</span>
          <span className="horizontal-arrow">→</span>
        </div>

        <div className="horizontal-item">
          <span className="horizontal-word text-stroke-thick">LẬP TRÌNH</span>
          <span className="horizontal-arrow">→</span>
        </div>

        <div className="horizontal-item">
          <span className="horizontal-word">TRẢI NGHIỆM</span>
          <span className="horizontal-arrow">→</span>
        </div>

        <div className="horizontal-item">
          <span className="horizontal-word" style={{ color: '#0044FF' }}>ĐỨC MẠNH</span>
          <span className="horizontal-arrow" style={{ color: '#FF4400' }}>✦</span>
        </div>

      </div>
    </section>
  );
};
