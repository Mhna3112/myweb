import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const KineticSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const track1Ref = useRef<HTMLDivElement>(null);
  const track2Ref = useRef<HTMLDivElement>(null);
  const track3Ref = useRef<HTMLDivElement>(null);
  const track4Ref = useRef<HTMLDivElement>(null);
  const centerPieceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const track1 = track1Ref.current;
    const track2 = track2Ref.current;
    const track3 = track3Ref.current;
    const track4 = track4Ref.current;
    const centerPiece = centerPieceRef.current;

    if (!container || !track1 || !track2 || !track3 || !track4 || !centerPiece) return;

    const ctx = gsap.context(() => {
      // Row 1: Moves left
      gsap.to(track1, {
        x: '-35%',
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      // Row 2: Moves right
      gsap.to(track2, {
        x: '25%',
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2,
        },
      });

      // Row 3: Moves left with text-stroke
      gsap.to(track3, {
        x: '-45%',
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.8,
        },
      });

      // Row 4: Moves vertically & slightly horizontally
      gsap.to(track4, {
        y: '-40px',
        x: '15%',
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.4,
        },
      });

      // Centerpiece: Scales on scroll
      gsap.fromTo(
        centerPiece,
        { scale: 0.8, rotate: -2 },
        {
          scale: 1.3,
          rotate: 0,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 70%',
            end: 'bottom 30%',
            scrub: 1,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="kinetic-section-wrapper" aria-label="Kinetic Typography Rows">
      {/* Row 1: Heavy Bold - User Name */}
      <div className="kinetic-row row-1">
        <div ref={track1Ref} className="kinetic-track">
          <span>NGUYỄN ĐỨC MẠNH</span><span>✦</span>
          <span>NGUYỄN ĐỨC MẠNH</span><span>✦</span>
          <span>NGUYỄN ĐỨC MẠNH</span><span>✦</span>
          <span>NGUYỄN ĐỨC MẠNH</span>
        </div>
      </div>

      {/* Row 2: Orange Pop */}
      <div className="kinetic-row row-2">
        <div ref={track2Ref} className="kinetic-track">
          <span>CREATIVE DEVELOPER</span><span>✦</span>
          <span>WEB APPS</span><span>✦</span>
          <span>ROBLOX LUAU</span><span>✦</span>
          <span>PYTHON AUTOMATION</span><span>✦</span>
          <span>C/C++ ALGORITHMS</span>
        </div>
      </div>

      {/* Centerpiece Floating Tag */}
      <div ref={centerPieceRef} className="kinetic-centerpiece">
        NGUYỄN ĐỨC MẠNH
      </div>

      {/* Row 3: Outlined Giant Text */}
      <div className="kinetic-row row-3">
        <div ref={track3Ref} className="kinetic-track text-stroke">
          <span>SCROLL</span><span>MOTION</span><span>SCROLL</span><span>MOTION</span><span>SCROLL</span><span>MOTION</span>
        </div>
      </div>

      {/* Row 4: Monospace Sub-track */}
      <div className="kinetic-row row-4">
        <div ref={track4Ref} className="kinetic-track">
          <span>01.THIẾT KẾ</span>
          <span>✦</span>
          <span>02.LẬP TRÌNH</span>
          <span>✦</span>
          <span>03.TỐI ƯU HÓA</span>
          <span>✦</span>
          <span>04.TRẢI NGHIỆM</span>
          <span>✦</span>
          <span>05.BỨT PHÁ</span>
        </div>
      </div>
    </section>
  );
};
