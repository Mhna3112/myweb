import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { STORY_BLOCKS, SOCIAL_CARDS } from '../data/storyContent';
import { RobloxHubDemo } from './RobloxHubDemo';
import { DiscordBotDemo } from './DiscordBotDemo';

gsap.registerPlugin(ScrollTrigger);

/**
 * Component hiển thị Icon chính thức của các thương hiệu
 */
export const BrandIcon: React.FC<{ id: string }> = ({ id }) => {
  switch (id) {
    case 'roblox':
      return (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
          <path d="M 13.936 15.356 L 1.826 12.112 L 0 18.93 L 18.928 24 L 21.608 14.01 L 14.79 12.18 L 13.936 15.356 Z M 5.072 0 L 2.394 9.992 L 9.21 11.822 L 10.064 8.644 L 22.174 11.89 L 24 5.072 L 5.072 0 Z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      );
    case 'discord':
      return (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
        </svg>
      );
    case 'github':
      return (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
      );
    case 'gmail':
      return (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      );
    case 'tiktok':
      return (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
          <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.068-.102a2.895 2.895 0 0 1 2.373-4.538c.307 0 .605.048.887.139V9.387a6.376 6.376 0 0 0-.887-.062A6.34 6.34 0 0 0 3.14 15.666a6.34 6.34 0 0 0 10.825 4.483 6.29 6.29 0 0 0 1.85-4.477V8.01a8.214 8.214 0 0 0 4.925 1.637V6.202a4.77 4.77 0 0 1-1.151-.516z" />
        </svg>
      );
    default:
      return null;
  }
};

interface SplittedTextProps {
  text: string;
  charClassName?: string;
  className?: string;
}

/**
 * Tách từng ký tự nhưng giữ nguyên từ vựng không bị ngắt dòng giữa chừng (word-wrap)
 */
export const SplittedText: React.FC<SplittedTextProps> = React.memo(({
  text,
  charClassName = 'char',
  className = '',
}) => {
  const words = text.split(' ');

  return (
    <span className={`split-phrase ${className}`}>
      {words.map((word, wIdx) => (
        <React.Fragment key={wIdx}>
          <span className="split-word">
            {Array.from(word).map((ch, cIdx) => (
              <span
                key={cIdx}
                className={`split-char ${charClassName}`}
              >
                {ch}
              </span>
            ))}
          </span>
          {wIdx < words.length - 1 && (
            <span className="split-space">
              &nbsp;
            </span>
          )}
        </React.Fragment>
      ))}
    </span>
  );
});

export const ContinuousTypoFilm: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartPos = useRef<{ x: number; y: number } | null>(null);

  // Điều hướng card đảm bảo 100% hoạt động mượt mà trên cả Mobile & Desktop
  const handleCardNavigate = (url: string) => {
    if (url.startsWith('mailto:')) {
      window.location.href = url;
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const onTouchStartCard = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    touchStartPos.current = { x: touch.clientX, y: touch.clientY };
  };

  const onTouchEndCard = (url: string, e: React.TouchEvent) => {
    if (!touchStartPos.current) return;
    const touch = e.changedTouches[0];
    const deltaX = Math.abs(touch.clientX - touchStartPos.current.x);
    const deltaY = Math.abs(touch.clientY - touchStartPos.current.y);
    touchStartPos.current = null;

    // Nếu dịch chuyển ngón tay dưới 12px -> Đó là một cú chạm (TAP) có chủ đích, không phải cuộn trang
    if (deltaX < 12 && deltaY < 12) {
      e.preventDefault();
      e.stopPropagation();
      handleCardNavigate(url);
    }
  };

  // Trạng thái hiển thị Demo của Dự án Roblox & làm mờ xung quanh
  const [openDemo, setOpenDemo] = useState<null | 'roblox' | 'discord'>(null);

  // Lắng nghe phím Escape để đóng nhanh demo
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenDemo(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    ScrollTrigger.config({
      limitCallbacks: true,
      ignoreMobileResize: true,
    });

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(container);
      const sectionEls = q('.stream-section') as HTMLElement[];

      if (sectionEls.length === 0) return;

      // 1. Khởi tạo: Toàn bộ chữ đều opacity: 0 với GPU 3D transform
      gsap.set(q('.split-char'), {
        opacity: 0,
        y: 20,
        scale: 0.92,
        force3D: true,
      });

      // Phân cảnh đầu: chữ tự cuộn ra từng ký tự ngay khi vào trang (không cần cuộn chuột)
      const introChars = sectionEls[0].querySelectorAll('.split-char');
      gsap.set(introChars, { opacity: 0, y: '0.9em', rotateX: -90, scale: 1, transformOrigin: '50% 100%' });
      gsap.to(introChars, {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.9,
        stagger: 0.06,
        ease: 'back.out(1.6)',
        delay: 0.3,
      });

      // Thiết lập ban đầu cho Thẻ dự án
      const robloxCards = q('.project-card');
      if (robloxCards.length > 0) {
        gsap.set(robloxCards, {
          opacity: 0,
          y: 40,
          scale: 0.75,
          force3D: true,
        });
      }

      // Thiết lập ban đầu cho các card xòe quạt
      const allCards = q('.social-fan-card:not(.project-card)');
      if (allCards.length > 0) {
        gsap.set(allCards, {
          opacity: 0,
          scale: 0.65,
          y: 40,
          rotate: 0,
          force3D: true,
        });
      }

      // Đặt vị trí ban đầu của track
      gsap.set(track, { y: 0, force3D: true });

      // Chiều dài cuộn lý tưởng (15,000px) cho phép cuộn từ từ, ngắm rõ từng chữ và từng thẻ xuất hiện dần dần
      const scrollDistance = Math.max(14000, sectionEls.length * 3000);

      // Cache chiều cao viewport để không gây Forced Reflow (Layout Thrashing) mỗi frame ở 120fps
      let cachedVh = container.clientHeight || window.innerHeight;
      const onRefreshInit = () => {
        cachedVh = container.clientHeight || window.innerHeight;
      };
      ScrollTrigger.addEventListener('refreshInit', onRefreshInit);

      // Master Scrub Timeline: scrub: true vì Lenis đã làm mượt sẵn — tránh bị trễ kép (double-smoothing)
      const tl = gsap.timeline({
        defaults: {
          force3D: true,
        },
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: `+=${scrollDistance}`,
          pin: true,
          scrub: true, // Đồng bộ 1:1 với Lenis ở 120fps, không bị trễ kép
          anticipatePin: 1,
          fastScrollEnd: true,
          invalidateOnRefresh: true,
        },
      });

      // 2. Đồng bộ hóa chuyển động liên tục của trục camera và xuất hiện từng chữ
      sectionEls.forEach((sectionEl, bIdx) => {
        const contentWrap = sectionEl.querySelector('.section-content-wrap');
        const lineEls = sectionEl.querySelectorAll('.line-item');
        const cardEls = sectionEl.querySelectorAll('.social-fan-card:not(.project-card)');

        if (bIdx > 0) {
          const prevSection = sectionEls[bIdx - 1];
          const prevContent = prevSection.querySelector('.section-content-wrap');

          // Chuyển cảnh: Di chuyển trục camera đưa phân cảnh tiếp theo vào chính giữa màn hình
          tl.to(
            track,
            {
              y: () => -bIdx * cachedVh,
              duration: 2.2,
              ease: 'power1.inOut',
            }
          );

          // Đồng thời phân cảnh trước trôi lên trên và mờ dần vào nền một cách êm ái
          if (prevContent) {
            tl.to(
              prevContent,
              {
                opacity: 0,
                y: -35,
                duration: 1.4,
                ease: 'power1.inOut',
              },
              '<' // Bắt đầu cùng lúc với chuyển động di chuyển track
            );
          }
        }

        // Từng dòng chữ xuất hiện TỪ TỪ từng ký tự một (giống hệt hiệu ứng chữ Hello.)
        // QUAN TRỌNG: Khi hết toàn bộ chữ của phần trước xong thì mới bắt đầu hiện chữ đầu tiên của phần sau
        lineEls.forEach((lineEl) => {
          if (bIdx === 0) return; // Phân cảnh đầu đã có hiệu ứng tự chạy khi tải trang
          const chars = lineEl.querySelectorAll('.char');
          if (chars.length === 0) return;

          tl.to(
            chars,
            {
              opacity: 1,
              y: 0,
              scale: 1,
              stagger: 0.055, // Nhịp gõ từng chữ đều đặn, rõ nét
              duration: 0.45,
              ease: 'power1.inOut', // Easing đối xứng: cuộn xuống gõ vào mượt, cuộn lên thu hồi cũng mượt
            },
            '+=0.15' // Tuần tự tuyệt đối: chỉ bắt đầu khi cảnh trước đã kết thúc hoàn toàn
          );
        });

        // Nếu phân cảnh này có Thẻ nền tảng Roblox Studio: Xuất hiện dần dần sau khi chữ "Dự án." đã gõ xong
        const projectCardEls = sectionEl.querySelectorAll('.project-card');
        projectCardEls.forEach((robloxCardEl, pIdx) => {
          tl.to(
            robloxCardEl,
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.85,
              ease: 'power1.inOut',
            },
            pIdx === 0 ? '+=0.2' : '+=0.35'
          );
        });

        // Nếu phân cảnh này có dàn card xòe quạt (Social Cards Scene)
        // Hiện DẦN TỪNG THẺ MỘT khi người dùng cuộn (không bung hết đồng loạt)
        if (cardEls.length > 0) {
          cardEls.forEach((cardEl, cIdx) => {
            tl.to(
              cardEl,
              {
                opacity: 1,
                scale: 1,
                y: () => {
                  const baseY = parseFloat(cardEl.getAttribute('data-y') || '0');
                  return window.innerWidth < 640 ? baseY * 0.5 : baseY;
                },
                rotate: () => {
                  const baseRot = parseFloat(cardEl.getAttribute('data-rot') || '0');
                  return window.innerWidth < 640 ? baseRot * 0.6 : baseRot;
                },
                duration: 0.7,
                ease: 'power1.inOut',
              },
              cIdx === 0 ? '+=0.2' : '+=0.35' // Mỗi thẻ nở ra theo từng nhịp cuộn riêng biệt
            );
          });
        }

        // Điểm dừng ngắn (Hold) ở mỗi phân cảnh để người đọc chiêm ngưỡng trọn vẹn toàn bộ nội dung
        tl.to({}, { duration: 1.8 });
      });
      return () => {
        ScrollTrigger.removeEventListener('refreshInit', onRefreshInit);
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="film-pin-wrapper">
      <div className="stream-viewport">
        <div ref={trackRef} className="stream-track">
          {STORY_BLOCKS.map((block, bIdx) => (
            <div
              key={block.id}
              className={`stream-section stream-section-${bIdx}`}
              data-block-id={block.id}
            >
              <div className="section-content-wrap">
                {/* Các dòng chữ */}
                {block.lines.map((line, lIdx) => {
                  const typeClass = `line-${line.type || 'body'}`;

                  if (line.type === 'link') {
                    return (
                      <div key={lIdx} className="line-item line-link-wrap">
                        <a
                          href={line.href || '#'}
                          target={line.href?.startsWith('http') ? '_blank' : undefined}
                          rel="noopener noreferrer"
                          className="film-link"
                        >
                          <SplittedText text={line.text} charClassName="char" />
                        </a>
                      </div>
                    );
                  }

                  return (
                    <div key={lIdx} className={`line-item ${typeClass}`}>
                      <SplittedText text={line.text} charClassName="char" />
                    </div>
                  );
                })}

                {/* Phân cảnh Dự án: Thẻ nền tảng Roblox Studio (giống hệt các thẻ nền tảng khác) */}
                {block.isProjectScene && (
                  <div className="roblox-scene-container" data-lenis-prevent>
                    <div
                      className="social-fan-card project-card roblox-platform-card"
                      style={{
                        background: 'linear-gradient(150deg, #16171B 0%, #0D0E13 55%, #0A1C2E 100%)',
                        color: '#FFFFFF',
                      }}
                      data-rot="0"
                      data-y="0"
                      title="Mhnahub · Roblox Studio"
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenDemo('roblox');
                      }}
                    >
                      <div className="card-inner">
                        {/* Hàng trên cùng: Icon Roblox Studio chính thức */}
                        <div className="card-top-row">
                          <div className="card-icon-badge roblox-badge-glow">
                            <BrandIcon id="roblox" />
                          </div>
                        </div>

                        {/* Tên thương hiệu lớn */}
                        <div className="card-brand-title">
                          <span className="card-title-line">Roblox</span>
                          <span className="card-title-line">Studio</span>
                        </div>

                        {/* Huy hiệu tên sản phẩm ở chân card */}
                        <div className="card-badge-pill">
                          <span>Mhnahub</span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="social-fan-card project-card discord-platform-card"
                      data-rot="0"
                      data-y="0"
                      title="Discord Bot · Auto Quest"
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenDemo('discord');
                      }}
                    >
                      <div className="card-inner">
                        <div className="card-top-row">
                          <div className="card-icon-badge discord-badge-glow">
                            <BrandIcon id="discord" />
                          </div>
                        </div>
                        <div className="card-brand-title">
                          <span className="card-title-line">Discord</span>
                          <span className="card-title-line">Bot</span>
                        </div>
                        <div className="card-badge-pill">
                          <span>Auto Quest</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Phân cảnh riêng biệt: Dàn card xòe quạt kèm Icon các hãng */}
                {block.isCardsScene && (
                  <div className="cards-fan-deck" data-lenis-prevent aria-label="Danh sách mạng xã hội">
                    {SOCIAL_CARDS.map((card, cIdx) => {
                      const count = SOCIAL_CARDS.length;
                      const mid = (count - 1) / 2; // 2
                      const offsetFromMid = cIdx - mid; // -2, -1, 0, 1, 2

                      // Tính toán độ nghiêng tối ưu
                      const rot = offsetFromMid * 7.5; // -15, -7.5, 0, 7.5, 15
                      const yOffset = Math.abs(offsetFromMid) * Math.abs(offsetFromMid) * 4.5; // 18, 4.5, 0, 4.5, 18

                      return (
                        <a
                          key={card.id}
                          href={card.url}
                          target={card.url.startsWith('http') ? '_blank' : undefined}
                          rel="noopener noreferrer"
                          aria-label={`${card.name}: ${card.badge}`}
                          className={`social-fan-card card-${card.id}`}
                          style={{
                            background: card.bg,
                            color: card.textColor || '#FFFFFF',
                            zIndex: cIdx + 1,
                          }}
                          data-rot={rot}
                          data-y={yOffset}
                          data-lenis-prevent
                          title={`Mở ${card.name}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            if (!('ontouchstart' in window) || navigator.maxTouchPoints === 0) {
                              e.preventDefault();
                              handleCardNavigate(card.url);
                            }
                          }}
                          onTouchStart={onTouchStartCard}
                          onTouchEnd={(e) => onTouchEndCard(card.url, e)}
                        >
                          <div className="card-inner">
                            {/* Hàng trên cùng: Icon hãng */}
                            <div className="card-top-row">
                              <div className="card-icon-badge">
                                <BrandIcon id={card.id} />
                              </div>
                            </div>

                            {/* Tên thương hiệu lớn */}
                            <div className="card-brand-title">
                              <span className="card-title-line">{card.line1}</span>
                              {card.line2 && <span className="card-title-line">{card.line2}</span>}
                            </div>

                            {/* Huy hiệu nhỏ ở chân card */}
                            <div className="card-badge-pill">
                              <span>{card.badge}</span>
                            </div>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Demo Mhnahub: làm mờ xung quanh, chính giữa là màn hình Roblox với giao diện MhnaaUI thật */}
      {openDemo === 'discord' && <DiscordBotDemo onClose={() => setOpenDemo(null)} />}
      {openDemo === 'roblox' && (
        <RobloxHubDemo
          onClose={() => setOpenDemo(null)}
          loadstring={'loadstring(game:HttpGet("https://raw.githubusercontent.com/Mhna3112/Mhnauxui/main/DungeonQuest_Mhnaa.luau"))()'}
        />
      )}
    </div>
  );
};
