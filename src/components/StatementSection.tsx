import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const StatementSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLParagraphElement>(null);
  const line2Ref = useRef<HTMLParagraphElement>(null);
  const line3Ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const lines = [line1Ref.current, line2Ref.current, line3Ref.current].filter(Boolean);

    if (!container || lines.length === 0) return;

    const ctx = gsap.context(() => {
      lines.forEach((line) => {
        gsap.to(line, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: line,
            start: 'top 75%',
            end: 'top 45%',
            scrub: 1,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="statement-section" aria-label="Tuyên ngôn">
      <div className="statement-box">
        <p ref={line1Ref} className="statement-line">
          Lập trình viên &amp; Sáng tạo số.
        </p>

        <p ref={line2Ref} className="statement-line" style={{ color: '#0055FF' }}>
          Biến ý tưởng thành sản phẩm thực tế.
        </p>

        <p ref={line3Ref} className="statement-line">
          Tối ưu hiệu năng, thẩm mỹ và trải nghiệm.
        </p>
      </div>
    </section>
  );
};
