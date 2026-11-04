import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const EndingSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const title = titleRef.current;
    const links = linksRef.current;

    if (!container || !title || !links) return;

    const ctx = gsap.context(() => {
      gsap.to(title, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: title,
          start: 'top 80%',
          end: 'top 50%',
          scrub: 1,
        },
      });

      gsap.to(links, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: links,
          start: 'top 85%',
          end: 'top 55%',
          scrub: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section ref={containerRef} className="ending-section" aria-label="Kết nối">
      <div className="ending-headline-box">
        <h2 ref={titleRef} className="ending-line">
          Sẵn sàng hiện thực hóa<br />
          mọi ý tưởng số.
        </h2>

        <div ref={linksRef} className="contact-links-row" style={{ opacity: 0, transform: 'translateY(40px)' }}>
          <a href="mailto:manhntp22@gmail.com" class="contact-link-item">
            manhntp22@gmail.com ↗
          </a>
          <a href="https://github.com/Mhna3112" target="_blank" rel="noopener" class="contact-link-item">
            github.com/Mhna3112 ↗
          </a>
          <a href="https://ducmanh.xyz" target="_blank" rel="noopener" class="contact-link-item">
            ducmanh.xyz ↗
          </a>
        </div>
      </div>

      <footer className="ending-footer-meta">
        <span>© 2026 Nguyễn Đức Mạnh</span>
        <button
          type="button"
          onClick={scrollToTop}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'inherit',
            fontSize: 'inherit',
            fontWeight: 700,
            color: '#111111',
            padding: 0,
          }}
        >
          Cuộn lên đầu trang ↑
        </button>
      </footer>
    </section>
  );
};
