import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const HeroIntroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineHelloRef = useRef<HTMLSpanElement>(null);
  const lineIntroRef = useRef<HTMLSpanElement>(null);
  const lineNameRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const lineHello = lineHelloRef.current;
    const lineIntro = lineIntroRef.current;
    const lineName = lineNameRef.current;

    if (!container || !lineHello || !lineIntro || !lineName) return;

    const ctx = gsap.context(() => {
      // Đảm bảo ban đầu hoàn toàn ẩn trên phông trắng tinh khôi
      gsap.set([lineHello, lineIntro, lineName], {
        opacity: 0,
        y: 80,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: '+=250%',
          pin: true,
          scrub: 1, // Đồng bộ trực tiếp theo nhịp cuộn chuột
        },
      });

      // 1. Cuộn nhát đầu tiên: "Hello." từ từ xuất hiện mượt mà
      tl.to(lineHello, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
      });

      // 2. Tiếp tục cuộn: "Tôi là" xuất hiện nối tiếp
      tl.to(lineIntro, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
      }, '+=0.2');

      // 3. Tiếp tục cuộn: "Nguyễn Đức Mạnh" xuất hiện nổi bật, vừa vặn khung hình
      tl.to(lineName, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: 'power2.out',
      }, '+=0.2');

      // 4. Giữ lại một đoạn ngắn cho người xem thưởng thức bố cục
      tl.to({}, { duration: 0.8 });

      // 5. Khi cuộn tiếp, toàn bộ cụm chữ cùng nhẹ nhàng trượt lên để chuyển cảnh mượt mà
      tl.to([lineHello, lineIntro, lineName], {
        y: -90,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: 'power2.in',
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="intro-pinned-section" aria-label="Khởi đầu">
      <div className="intro-text-box">
        <div className="reveal-line-wrap">
          <span ref={lineHelloRef} className="reveal-line line-hello">
            Hello.
          </span>
        </div>

        <div className="reveal-line-wrap">
          <span ref={lineIntroRef} className="reveal-line line-intro">
            Tôi là
          </span>
        </div>

        <div className="reveal-line-wrap">
          <span ref={lineNameRef} className="reveal-line line-name">
            Nguyễn Đức Mạnh
          </span>
        </div>
      </div>
    </section>
  );
};
