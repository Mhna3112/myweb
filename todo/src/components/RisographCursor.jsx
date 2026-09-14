import React, { useEffect, useRef } from 'react';

export default function RisographCursor({ enabled = true }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!enabled) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let mouse = { x: -100, y: -100, lastX: -100, lastY: -100, speed: 0 };

    const silverColors = [
      'rgba(212, 212, 216, 0.7)',  // Metallic Silver
      'rgba(244, 244, 245, 0.65)', // Chrome Light
      'rgba(161, 161, 170, 0.5)',  // Steel Dark Silver
      'rgba(255, 255, 255, 0.45)'  // Pure Platinum
    ];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    const handleMouseMove = (e) => {
      const dx = e.clientX - mouse.lastX;
      const dy = e.clientY - mouse.lastY;
      mouse.speed = Math.sqrt(dx * dx + dy * dy);
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.lastX = e.clientX;
      mouse.lastY = e.clientY;

      const dotCount = Math.min(Math.floor(mouse.speed * 0.35) + 2, 6);
      for (let i = 0; i < dotCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const spread = Math.random() * 16 + 2;
        const color = silverColors[Math.floor(Math.random() * silverColors.length)];
        
        particles.push({
          x: e.clientX + Math.cos(angle) * spread,
          y: e.clientY + Math.sin(angle) * spread,
          vx: (Math.random() - 0.5) * 0.7,
          vy: (Math.random() - 0.5) * 0.7,
          radius: Math.random() * 2.4 + 1.1,
          alpha: 0.85,
          color: color,
          life: 1.0,
          decay: Math.random() * 0.025 + 0.015,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;

        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.life * p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50 opacity-90"
    />
  );
}
