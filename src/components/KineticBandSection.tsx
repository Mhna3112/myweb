import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const KineticBandSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const track1Ref = useRef<HTMLDivElement>(null);
  const track2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const track1 = track1Ref.current;
    const track2 = track2Ref.current;

    if (!container || !track1 || !track2) return;

    const ctx = gsap.context(() => {
      // Dải 1 trôi sang trái khi cuộn
      gsap.to(track1, {
        x: '-25%',
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      // Dải 2 trôi sang phải khi cuộn
      gsap.to(track2, {
        x: '15%',
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="kinetic-section" aria-label="Dải chữ động">
      <div className="kinetic-band">
        <div ref={track1Ref} className="kinetic-inner band-primary">
          <span>NGUYỄN ĐỨC MẠNH</span><span>✦</span>
          <span>NGUYỄN ĐỨC MẠNH</span><span>✦</span>
          <span>NGUYỄN ĐỨC MẠNH</span><span>✦</span>
          <span>NGUYỄN ĐỨC MẠNH</span>
        </div>
      </div>

      <div className="kinetic-band">
        <div ref={track2Ref} className="kinetic-inner band-secondary">
          <span>LẬP TRÌNH WEB</span><span>✦</span>
          <span>ROBLOX LUAU</span><span>✦</span>
          <span>PYTHON AUTOMATION</span><span>✦</span>
          <span>THUẬT TOÁN C/C++</span>
        </div>
      </div>
    </section>
  );
};
