import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const DarkShiftSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLHeadingElement>(null);
  const line2Ref = useRef<HTMLHeadingElement>(null);
  const line3Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const line1 = line1Ref.current;
    const line2 = line2Ref.current;
    const line3 = line3Ref.current;

    if (!container || !line1 || !line2 || !line3) return;

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

      // 1. Line 1 xuất hiện
      tl.to(line1, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
      });

      // 2. Line 2 xuất hiện (màu accent)
      tl.to(line2, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
      }, '+=0.2');

      // 3. Line 3 xuất hiện
      tl.to(line3, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
      }, '+=0.2');

      // 4. Giữ lại
      tl.to({}, { duration: 0.6 });

      // 5. Mờ dần khi kết thúc phân đoạn
      tl.to([line1, line2, line3], {
        opacity: 0,
        y: -60,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power2.in',
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="dark-pinned-section" aria-label="Nhịp đập mã nguồn">
      <div className="dark-stage">
        <h2 ref={line1Ref} className="dark-line">
          Mọi dòng code
        </h2>
        <h2 ref={line2Ref} className="dark-line dark-line-accent">
          đều mang một nhịp thở.
        </h2>
        <h2 ref={line3Ref} className="dark-line">
          Không ngừng học hỏi · Luôn luôn bứt phá.
        </h2>
      </div>
    </section>
  );
};
