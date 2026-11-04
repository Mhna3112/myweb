import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import '../styles/mhnaa-demo.css';

/**
 * ============================================================================
 * MHNAHUB DEMO — Bản sao giao diện MhnaaUI (Mhnauxui/MhnaaUI.luau) trên web
 * Màu sắc, kích thước, bố cục lấy trực tiếp từ MhnaaUI.CurrentTheme:
 *   Background 26,26,28 · Sidebar 21,21,23 · Topbar 30,30,34 · Card 33,33,37
 *   CardBorder 44,44,50 · Accent 104,157,248 · Tag 245,166,35
 * Window 680x420 · Topbar 46px · Sidebar 180px · Font Gotham (≈ Montserrat)
 * ============================================================================
 */

type TabId = 'main' | 'combat' | 'teleport' | 'player' | 'setting';

interface Toast {
  id: number;
  title: string;
  content: string;
}

interface Props {
  onClose: () => void;
  loadstring: string;
}

const TABS: { id: TabId; name: string; icon: string }[] = [
  { id: 'main', name: 'Main', icon: '🏠' },
  { id: 'combat', name: 'Combat', icon: '⚔️' },
  { id: 'teleport', name: 'Teleport', icon: '🌀' },
  { id: 'player', name: 'Local Player', icon: '👤' },
];

const DROPDOWN_OPTIONS: Record<string, string[]> = {
  dungeon: ['Desert Temple', 'Winter Outpost', 'Pirate Island', 'King\u2019s Castle', 'Underworld', 'Samurai Palace'],
  difficulty: ['Easy', 'Medium', 'Hard', 'Insane', 'Nightmare'],
  island: ['Starter Island', 'Jungle', 'Marine Fort', 'Sky Island', 'Desert', 'Snow Village', 'Volcano'],
};

interface DemoCtx {
  q: string;
  match: (...texts: string[]) => boolean;
  toggles: Record<string, boolean>;
  flip: (key: string, label: string) => void;
  sliders: Record<string, number>;
  setSlider: (key: string, val: number) => void;
  dropdowns: Record<string, string>;
  setDropdown: (key: string, val: string) => void;
  openDropdown: string | null;
  setOpenDropdown: (id: string | null) => void;
}

const Ctx = React.createContext<DemoCtx>(null as unknown as DemoCtx);

/* ------------------------- MHNAA UI COMPONENTS ------------------------- */

const Section: React.FC<{ title: string }> = ({ title }) => {
  const { q } = useContext(Ctx);
  return q ? null : <div className="mh-section">{title}</div>;
};

const ToggleCard: React.FC<{ id: string; title: string; desc?: string }> = ({ id, title, desc }) => {
  const { match, toggles, flip } = useContext(Ctx);
  if (!match(title, desc || '')) return null;
  return (
    <div className={`mh-card ${desc ? 'has-desc' : ''}`}>
      <div className="mh-card-text">
        <span className="mh-card-title">{title}</span>
        {desc && <span className="mh-card-desc">{desc}</span>}
      </div>
      <button
        type="button"
        className={`mh-check ${toggles[id] ? 'on' : ''}`}
        onClick={() => flip(id, title)}
        aria-pressed={toggles[id]}
        aria-label={title}
      >
        <span>✓</span>
      </button>
    </div>
  );
};

const SliderCard: React.FC<{ id: string; title: string; min: number; max: number; suffix?: string }> = ({
  id,
  title,
  min,
  max,
  suffix = '',
}) => {
  const { match, sliders, setSlider } = useContext(Ctx);
  if (!match(title)) return null;
  const pct = ((sliders[id] - min) / (max - min)) * 100;
  return (
    <div className="mh-card mh-slider-card">
      <div className="mh-slider-head">
        <span className="mh-card-title">{title}</span>
        <span className="mh-slider-val">
          {sliders[id]}
          {suffix}
        </span>
      </div>
      <div className="mh-track" style={{ ['--pct' as string]: `${pct}%` }}>
        <div className="mh-fill">
          <span className="mh-knob" />
        </div>
        <input
          type="range"
          min={min}
          max={max}
          value={sliders[id]}
          onChange={(e) => setSlider(id, Number(e.target.value))}
          aria-label={title}
        />
      </div>
    </div>
  );
};

const DropdownCard: React.FC<{ id: string; title: string }> = ({ id, title }) => {
  const { match, dropdowns, setDropdown, openDropdown, setOpenDropdown } = useContext(Ctx);
  if (!match(title)) return null;
  const isOpen = openDropdown === id;
  return (
    <div className={`mh-card mh-dropdown-card ${isOpen ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
      <div className="mh-dropdown-row">
        <span className="mh-card-title">{title}</span>
        <button type="button" className="mh-combo" onClick={() => setOpenDropdown(isOpen ? null : id)}>
          <span>{dropdowns[id]}</span>
          <span className={`mh-chevron ${isOpen ? 'up' : ''}`}>▾</span>
        </button>
      </div>
      {isOpen && (
        <div className="mh-options">
          {DROPDOWN_OPTIONS[id].map((opt) => (
            <button
              type="button"
              key={opt}
              className={`mh-option ${dropdowns[id] === opt ? 'selected' : ''}`}
              onClick={() => {
                setDropdown(id, opt);
                setOpenDropdown(null);
              }}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const ButtonCard: React.FC<{ title: string; desc?: string; label: string; onClick: () => void }> = ({
  title,
  desc,
  label,
  onClick,
}) => {
  const { match } = useContext(Ctx);
  if (!match(title, desc || '')) return null;
  return (
    <div className={`mh-card ${desc ? 'has-desc' : ''}`}>
      <div className="mh-card-text">
        <span className="mh-card-title">{title}</span>
        {desc && <span className="mh-card-desc">{desc}</span>}
      </div>
      <button type="button" className="mh-action" onClick={onClick}>
        {label}
      </button>
    </div>
  );
};

const KeybindCard: React.FC<{ title: string; keyName: string }> = ({ title, keyName }) => {
  const { match } = useContext(Ctx);
  if (!match(title)) return null;
  return (
    <div className="mh-card">
      <div className="mh-card-text">
        <span className="mh-card-title">{title}</span>
      </div>
      <span className="mh-keybind">{keyName}</span>
    </div>
  );
};

export const RobloxHubDemo: React.FC<Props> = ({ onClose, loadstring }) => {
  const [activeTab, setActiveTab] = useState<TabId>('main');
  const [search, setSearch] = useState('');
  const [visible, setVisible] = useState(true);
  const [minimized, setMinimized] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const toastId = useRef(0);
  const searchRef = useRef<HTMLInputElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);
  const [fit, setFit] = useState(1);

  // Tự co giãn cửa sổ 680x420 theo kích thước màn hình game (giống UIScale)
  useEffect(() => {
    const el = screenRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setFit(Math.min(1, (width - 440) / 680, (height - 96) / 420) > 0.6 ? Math.min(1, (width - 440) / 680, (height - 96) / 420) : Math.min(1, (width - 24) / 680, (height - 56) / 420));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const [toggles, setToggles] = useState<Record<string, boolean>>({
    autoFarm: true,
    autoStart: true,
    autoRetry: false,
    killAura: true,
    autoSkills: true,
    instaKill: false,
    infJump: false,
    noclip: false,
    antiAfk: true,
  });
  const [sliders, setSliders] = useState<Record<string, number>>({
    farmDistance: 12,
    auraRange: 25,
    walkSpeed: 32,
    jumpPower: 75,
    uiScale: 100,
  });
  const [dropdowns, setDropdowns] = useState<Record<string, string>>({
    dungeon: 'Desert Temple',
    difficulty: 'Insane',
    island: 'Sky Island',
  });

  const notify = (title: string, content: string) => {
    const id = ++toastId.current;
    setToasts((t) => [...t, { id, title, content }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 3200);
  };

  // Thông báo khi script vừa được "execute"
  useEffect(() => {
    const t = setTimeout(() => notify('Mhnahub', 'Loaded successfully! Press RightControl to toggle UI.'), 250);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Phím tắt giống trong game: RightControl ẩn/hiện UI, Ctrl+K focus ô tìm kiếm
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.code === 'ControlRight') {
        setVisible((v) => !v);
      } else if (e.ctrlKey && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setVisible(true);
        setMinimized(false);
        setTimeout(() => searchRef.current?.focus(), 0);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const flip = (key: string, label: string) => {
    const next = !toggles[key];
    setToggles((s) => ({ ...s, [key]: next }));
    notify('Mhnahub', `${label}: ${next ? 'Enabled' : 'Disabled'}`);
  };

  const q = search.trim().toLowerCase();
  const match = (...texts: string[]) => !q || texts.some((t) => t.toLowerCase().includes(q));

  const ctxValue: DemoCtx = {
    q,
    match,
    toggles,
    flip,
    sliders,
    setSlider: (key, val) => setSliders((s) => ({ ...s, [key]: val })),
    dropdowns,
    setDropdown: (key, val) => setDropdowns((d) => ({ ...d, [key]: val })),
    openDropdown,
    setOpenDropdown,
  };

  const pageTitle = useMemo(
    () => (activeTab === 'setting' ? 'UI Setting' : TABS.find((t) => t.id === activeTab)?.name || ''),
    [activeTab],
  );

  const renderPage = () => {
    switch (activeTab) {
      case 'main':
        return (
          <>
            <Section title="Auto Farm" />
            <ToggleCard id="autoFarm" title="Auto Farm Dungeon" desc="Automatically clears mobs & bosses in the current dungeon" />
            <ToggleCard id="autoStart" title="Auto Start Dungeon" desc="Creates and starts the selected dungeon from the lobby" />
            <ToggleCard id="autoRetry" title="Auto Retry" desc="Replays the dungeon instantly after completion" />
            <Section title="Dungeon Settings" />
            <DropdownCard id="dungeon" title="Select Dungeon" />
            <DropdownCard id="difficulty" title="Difficulty" />
            <SliderCard id="farmDistance" title="Farm Distance" min={4} max={30} suffix=" studs" />
          </>
        );
      case 'combat':
        return (
          <>
            <Section title="Combat" />
            <ToggleCard id="killAura" title="Kill Aura" desc="Attacks every enemy inside the aura range via remote" />
            <SliderCard id="auraRange" title="Aura Range" min={5} max={60} suffix=" studs" />
            <ToggleCard id="autoSkills" title="Auto Use Skills" desc="Spams Z, X, C, V, E skills on cooldown" />
            <ToggleCard id="instaKill" title="InstaKill Multi-Burst" desc="Sends 3x – 6x hit bursts to finish targets" />
            <Section title="Keybinds" />
            <KeybindCard title="Toggle Kill Aura" keyName="F" />
          </>
        );
      case 'teleport':
        return (
          <>
            <Section title="Islands" />
            <DropdownCard id="island" title="Select Island" />
            <ButtonCard
              title="Teleport To Island"
              desc="Uses the official portal — no rubberband"
              label="TELEPORT"
              onClick={() => notify('Teleport', `Teleporting to ${dropdowns.island}...`)}
            />
            <Section title="Server" />
            <ButtonCard title="Rejoin Server" label="REJOIN" onClick={() => notify('Server', 'Rejoining current server...')} />
            <ButtonCard title="Server Hop" desc="Finds a low-player public server" label="HOP" onClick={() => notify('Server', 'Searching for a new server...')} />
          </>
        );
      case 'player':
        return (
          <>
            <Section title="Movement" />
            <SliderCard id="walkSpeed" title="WalkSpeed" min={16} max={120} />
            <SliderCard id="jumpPower" title="JumpPower" min={50} max={200} />
            <ToggleCard id="infJump" title="Infinite Jump" />
            <ToggleCard id="noclip" title="Noclip" desc="Disables collision on your character" />
            <Section title="Misc" />
            <ToggleCard id="antiAfk" title="Anti AFK" desc="Prevents the 20-minute idle kick" />
          </>
        );
      case 'setting':
        return (
          <>
            <Section title="Interface" />
            <KeybindCard title="Toggle UI Keybind" keyName="RightControl" />
            <SliderCard id="uiScale" title="UI Scale" min={70} max={130} suffix="%" />
            <ButtonCard
              title="Copy Loadstring"
              desc="Copy the script to paste into your executor"
              label="COPY"
              onClick={() => {
                navigator.clipboard?.writeText(loadstring);
                notify('Mhnahub', 'Loadstring copied to clipboard!');
              }}
            />
            <ButtonCard title="Destroy UI" label="DESTROY" onClick={onClose} />
          </>
        );
    }
  };

  return (
    <div className="rbx-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Demo Mhnahub trong Roblox">
      <div ref={screenRef} className="rbx-screen" onClick={(e) => { e.stopPropagation(); setOpenDropdown(null); }}>
        {/* ---------- Roblox game world (mô phỏng màn hình trong game) ---------- */}
        <div className="rbx-world" aria-hidden="true">
          <div className="rbx-sun" />
          <div className="rbx-floor" />
          <div className="rbx-block b1" />
          <div className="rbx-block b2" />
          <div className="rbx-block b3" />
          <div className="rbx-avatar">
            <span className="av-head" />
            <span className="av-torso" />
            <span className="av-leg l" />
            <span className="av-leg r" />
          </div>
        </div>

        {/* Roblox CoreGui topbar */}
        <div className="rbx-topbar" aria-hidden="true">
          <span className="rbx-tb-btn">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M5.2 0 0 19.2 18.8 24 24 4.8 5.2 0Zm8.6 15.4-5.2-1.4 1.4-5.2 5.2 1.4-1.4 5.2Z" />
            </svg>
          </span>
          <span className="rbx-tb-btn">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M4 4h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-5 4v-4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
            </svg>
          </span>
        </div>

        {/* Leaderboard */}
        <div className="rbx-leaderboard" aria-hidden="true">
          <div className="lb-head">
            <span>People</span>
            <span>Level</span>
          </div>
          <div className="lb-row me">
            <span>NguyenDucManh</span>
            <span>87</span>
          </div>
          <div className="lb-row">
            <span>Builderman</span>
            <span>64</span>
          </div>
          <div className="lb-row">
            <span>xX_Noob_Xx</span>
            <span>12</span>
          </div>
        </div>

        {/* ---------------------------- MHNAA UI WINDOW ---------------------------- */}
        {visible && (
          <div
            className={`mh-window ${minimized ? 'minimized' : ''}`}
            style={{ ['--mh-scale' as string]: sliders.uiScale / 100, ['--fit' as string]: fit }}
          >
            {/* Topbar */}
            <div className="mh-topbar">
              <div className="mh-brand">
                <span className="mh-brand-icon">M</span>
                <span className="mh-title">
                  Mhnahub <span className="mh-tag">[PRO]</span>
                </span>
              </div>
              <button type="button" className="mh-back" onClick={() => setMinimized((m) => !m)} aria-label="Collapse">
                ‹
              </button>
              <span className="mh-pipe" />
              <div className="mh-search">
                <span className="mh-search-icon">🔍</span>
                <input
                  ref={searchRef}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Enter keywords to search features...."
                  aria-label="Search features"
                />
                <span className="mh-ctrlk">Ctrl K</span>
              </div>
              <div className="mh-controls">
                <button type="button" className="mh-min" onClick={() => setMinimized((m) => !m)} aria-label="Minimize">
                  —
                </button>
                <button
                  type="button"
                  className="mh-close"
                  aria-label="Close"
                  onClick={() => {
                    setVisible(false);
                    notify('Mhnahub', 'UI Hidden. Press RightControl or click the floating widget to open.');
                  }}
                >
                  ×
                </button>
              </div>
            </div>

            {!minimized && (
              <div className="mh-body">
                {/* Sidebar */}
                <aside className="mh-sidebar">
                  <div className="mh-game-header">DUNGEON QUEST</div>
                  <nav className="mh-tabs">
                    {TABS.map((t) => (
                      <button
                        type="button"
                        key={t.id}
                        className={`mh-tab ${activeTab === t.id ? 'active' : ''}`}
                        onClick={() => {
                          setActiveTab(t.id);
                          setOpenDropdown(null);
                        }}
                      >
                        <span className="mh-tab-icon">{t.icon}</span>
                        {t.name}
                      </button>
                    ))}
                  </nav>
                  <div className="mh-sidebar-bottom">
                    <button
                      type="button"
                      className={`mh-tab ${activeTab === 'setting' ? 'active' : ''}`}
                      onClick={() => setActiveTab('setting')}
                    >
                      <span className="mh-tab-icon">⚙</span>
                      UI Setting
                    </button>
                  </div>
                </aside>

                {/* Content */}
                <main className="mh-content">
                  <div className="mh-page">
                    <h4 className="mh-page-title">{q ? `Search: “${search}”` : pageTitle}</h4>
                    <Ctx.Provider value={ctxValue}>{renderPage()}</Ctx.Provider>
                  </div>
                  <span className="mh-resize" aria-hidden="true">◢</span>
                </main>
              </div>
            )}
          </div>
        )}

        {/* Floating widget khi UI bị ẩn */}
        {!visible && (
          <button type="button" className="mh-widget" onClick={() => setVisible(true)}>
            <span className="mh-brand-icon">M</span>
            <span>Mhnahub</span>
          </button>
        )}

        {/* Toast Notifications (góc phải dưới như MhnaaUI:Notify) */}
        <div className="mh-toasts">
          {toasts.map((t) => (
            <div key={t.id} className="mh-toast">
              <span className="mh-toast-title">{t.title}</span>
              <span className="mh-toast-desc">{t.content}</span>
              <span className="mh-toast-bar" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RobloxHubDemo;
