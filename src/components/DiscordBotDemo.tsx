import React, { useEffect, useRef, useState } from 'react';
import '../styles/discord-demo.css';

/**
 * Demo Discord Bot Auto Quest (github.com/Mhna3112/discord-bot-auto-quest)
 * Mô phỏng giao diện Discord thật: slash command, popup /login, log kênh và embed báo cáo.
 */

type Embed = {
  color: string;
  author?: string;
  title: string;
  lines: string[];
  footer: string;
};

type Msg = {
  id: number;
  author: 'bot' | 'user';
  text?: string;
  command?: string;
  embed?: Embed;
  ephemeral?: boolean;
  time: string;
};

const COMMANDS: { name: string; desc: string }[] = [
  { name: 'help', desc: 'Xem hướng dẫn sử dụng bot.' },
  { name: 'gettoken', desc: 'Lấy đoạn mã JavaScript để tự tìm token tài khoản.' },
  { name: 'login', desc: 'Đăng nhập tài khoản làm nhiệm vụ (popup bảo mật).' },
  { name: 'status', desc: 'Xem danh sách quest, trạng thái và tiến độ.' },
  { name: 'start', desc: 'Bắt đầu vòng quét quest tự động chạy ngầm.' },
  { name: 'stop', desc: 'Dừng quá trình quét quest tự động.' },
  { name: 'check', desc: 'Quét và làm quest lập tức một lần.' },
  { name: 'logout', desc: 'Đăng xuất và xóa token khỏi hệ thống.' },
];

const QUESTS = [
  { name: 'Marvel Rivals — Play 15 min', type: 'PLAY_ON_DESKTOP', target: 900 },
  { name: 'Watch the Overwatch 2 trailer', type: 'WATCH_VIDEO', target: 30 },
  { name: 'Stream Valorant to a friend', type: 'STREAM_ON_DESKTOP', target: 900 },
];

const BOT_NAME = 'Quest Auto-Completer';
const USER_NAME = 'NguyenDucManh';

const now = () => {
  const d = new Date();
  return `Today at ${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`;
};

export const DiscordBotDemo: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const idRef = useRef(0);
  const timers = useRef<number[]>([]);
  const chatRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [input, setInput] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [running, setRunning] = useState(false);
  const [modal, setModal] = useState(false);
  const [token, setToken] = useState('');
  const [selIdx, setSelIdx] = useState(0);
  const [messages, setMessages] = useState<Msg[]>(() => [
    {
      id: -1,
      author: 'bot',
      time: now(),
      embed: {
        color: '#23A55A',
        author: 'manh.dev',
        title: '🎁 Quest Auto-Complete hoàn tất!',
        lines: ['📜 **Kết quả (2/2 thành công)**', '✅ Genshin Impact — Play 15 min', '✅ Watch the Fortnite trailer'],
        footer: `User ID: 7319••••••2048 • ${BOT_NAME}`,
      },
    },
  ]);

  const push = (m: Omit<Msg, 'id' | 'time'>) =>
    setMessages((list) => [...list, { ...m, id: ++idRef.current, time: now() }]);

  const later = (ms: number, fn: () => void) => {
    timers.current.push(window.setTimeout(fn, ms));
  };

  useEffect(() => () => timers.current.forEach(clearTimeout), []);
  useEffect(() => {
    chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages]);
  useEffect(() => {
    const t = setTimeout(() => inputRef.current?.focus(), 350);
    return () => clearTimeout(t);
  }, []);

  const runQuests = () => {
    let delay = 600;
    push({ author: 'bot', text: `🔹 **[INFO]** Tìm thấy ${QUESTS.length} quest khả dụng cho **${USER_NAME}**` });
    QUESTS.forEach((q) => {
      later(delay, () => push({ author: 'bot', text: `🔹 **[INFO]** Đang làm \`${q.type}\` — ${q.name}` }));
      delay += 900;
      later(delay, () => push({ author: 'bot', text: `✅ **[OK]** Hoàn thành ${q.name} (${q.target}/${q.target})` }));
      delay += 700;
    });
    later(delay, () =>
      push({
        author: 'bot',
        embed: {
          color: '#23A55A',
          author: USER_NAME,
          title: '🎁 Quest Auto-Complete hoàn tất!',
          lines: [`📜 **Kết quả (${QUESTS.length}/${QUESTS.length} thành công)**`, ...QUESTS.map((q) => `✅ ${q.name}`)],
          footer: `User ID: 4821••••••7765 • ${BOT_NAME}`,
        },
      })
    );
  };

  const needLogin = (cmd: string) =>
    push({ author: 'bot', command: cmd, ephemeral: true, text: '⚠️ Bạn chưa đăng nhập. Dùng `/login` để nhập token trước.' });

  const execute = (name: string) => {
    if (name === 'login') {
      setModal(true);
      return;
    }
    const reply = (m: Omit<Msg, 'id' | 'time'>) => push({ ...m, command: name });
    later(350, () => {
      switch (name) {
        case 'help':
          reply({
            author: 'bot',
            ephemeral: true,
            embed: {
              color: '#5865F2',
              title: '📖 Hướng dẫn sử dụng',
              lines: COMMANDS.map((c) => `\`/${c.name}\` — ${c.desc}`),
              footer: BOT_NAME,
            },
          });
          break;
        case 'gettoken':
          reply({
            author: 'bot',
            ephemeral: true,
            text: '🔐 Bot gửi riêng cho bạn hướng dẫn lấy token (đã ẩn trong bản demo này để đảm bảo an toàn).',
          });
          break;
        case 'status':
          if (!loggedIn) return needLogin(name);
          reply({
            author: 'bot',
            ephemeral: true,
            embed: {
              color: '#5865F2',
              author: USER_NAME,
              title: '📋 Danh sách Quest',
              lines: QUESTS.map((q, i) => `${i === 0 && running ? '⏳' : '🔸'} ${q.name}\n\`${q.type}\` • ${i === 0 && running ? 420 : 0}/${q.target}`),
              footer: `Auto: ${running ? 'Đang chạy' : 'Đã dừng'} • ${BOT_NAME}`,
            },
          });
          break;
        case 'start':
          if (!loggedIn) return needLogin(name);
          if (running) {
            reply({ author: 'bot', ephemeral: true, text: '⚠️ Vòng quét tự động đã chạy rồi.' });
            return;
          }
          setRunning(true);
          reply({ author: 'bot', ephemeral: true, text: '▶️ Đã bắt đầu vòng quét quest tự động. Tiến trình sẽ gửi về kênh log.' });
          later(500, runQuests);
          break;
        case 'check':
          if (!loggedIn) return needLogin(name);
          reply({ author: 'bot', ephemeral: true, text: '🔍 Đang quét quest thủ công...' });
          later(500, runQuests);
          break;
        case 'stop':
          if (!loggedIn) return needLogin(name);
          setRunning(false);
          reply({ author: 'bot', ephemeral: true, text: '⏹️ Đã dừng vòng quét tự động.' });
          break;
        case 'logout':
          if (!loggedIn) return needLogin(name);
          setLoggedIn(false);
          setRunning(false);
          reply({ author: 'bot', ephemeral: true, text: '👋 Đã đăng xuất, hủy tiến trình và xóa token của bạn.' });
          break;
      }
    });
  };

  const query = input.startsWith('/') ? input.slice(1).toLowerCase() : null;
  const suggestions = query !== null ? COMMANDS.filter((c) => c.name.startsWith(query.split(' ')[0])) : [];

  const submit = (name?: string) => {
    const cmd = name ?? (suggestions[selIdx]?.name || '');
    if (!cmd) return;
    setInput('');
    setSelIdx(0);
    execute(cmd);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (suggestions.length) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelIdx((i) => (i + 1) % suggestions.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelIdx((i) => (i - 1 + suggestions.length) % suggestions.length);
      } else if (e.key === 'Enter' || e.key === 'Tab') {
        e.preventDefault();
        submit();
      }
    }
  };

  const submitLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!token.trim()) return;
    setModal(false);
    setToken('');
    later(600, () => {
      setLoggedIn(true);
      push({ author: 'bot', command: 'login', ephemeral: true, text: `✅ Đăng nhập thành công với tài khoản **${USER_NAME}**! Dùng \`/start\` để bắt đầu.` });
    });
  };

  // Render markdown tối giản kiểu Discord: **bold**, `code`, ```block```
  const md = (s: string) =>
    s.split(/(```[\s\S]*?```)/g).map((part, i) => {
      if (part.startsWith('```')) {
        return (
          <pre key={i} className="dc-codeblock">
            {part.replace(/^```\w*\n?|```$/g, '')}
          </pre>
        );
      }
      return (
        <span key={i}>
          {part.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).map((t, j) =>
            t.startsWith('**') ? (
              <strong key={j}>{t.slice(2, -2)}</strong>
            ) : t.startsWith('`') ? (
              <code key={j} className="dc-inline">{t.slice(1, -1)}</code>
            ) : (
              <React.Fragment key={j}>{t}</React.Fragment>
            )
          )}
        </span>
      );
    });

  return (
    <div className="dc-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Demo Discord Bot Auto Quest">
      <div className="dc-window" onClick={(e) => e.stopPropagation()}>
        {/* Thanh tiêu đề ứng dụng Discord */}
        <div className="dc-titlebar">
          <span className="dc-titlebar-name">Discord</span>
          <div className="dc-winbtns" aria-hidden="true">
            <span>—</span>
            <span>▢</span>
            <span onClick={onClose}>✕</span>
          </div>
        </div>

        <div className="dc-body">
          {/* Cột server */}
          <nav className="dc-guilds" aria-hidden="true">
            <div className="dc-guild dc-home">
              <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
                <path d="M20.317 4.37a19.79 19.79 0 0 0-4.885-1.515.07.07 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.08.08 0 0 0-.079-.037A19.74 19.74 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.08.08 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.08.08 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.08.08 0 0 0-.041-.106 13.1 13.1 0 0 1-1.872-.892.08.08 0 0 1-.008-.128c.126-.094.252-.192.372-.292a.07.07 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.07.07 0 0 1 .078.01c.12.098.246.198.373.292a.08.08 0 0 1-.006.127 12.3 12.3 0 0 1-1.873.892.08.08 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.08.08 0 0 0 .084.028 19.84 19.84 0 0 0 6.002-3.03.08.08 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </div>
            <div className="dc-guild-sep" />
            <div className="dc-guild active">
              <span className="dc-pill" />
              MH
            </div>
            <div className="dc-guild">QA</div>
            <div className="dc-guild">RB</div>
            <div className="dc-guild dc-add">+</div>
          </nav>

          {/* Danh sách kênh */}
          <aside className="dc-channels">
            <div className="dc-server-name">Mhna Community ⌄</div>
            <div className="dc-cat">⌄ TEXT CHANNELS</div>
            <div className="dc-ch"># general</div>
            <div className="dc-ch active"># quest-log</div>
            <div className="dc-ch"># bot-commands</div>
            <div className="dc-cat">⌄ VOICE CHANNELS</div>
            <div className="dc-ch">🔊 Treo Voice 24/7</div>
            <div className="dc-userbar">
              <span className="dc-avatar user">D</span>
              <div className="dc-userbar-name">
                <b>{USER_NAME}</b>
                <small>{loggedIn ? (running ? 'Đang auto quest' : 'Đã đăng nhập') : 'Online'}</small>
              </div>
            </div>
          </aside>

          {/* Khu vực chat */}
          <main className="dc-main">
            <header className="dc-header">
              <span className="dc-hash">#</span> quest-log
              <span className="dc-topic">Báo cáo tiến trình làm Quest tự động</span>
            </header>

            <div className="dc-chat" ref={chatRef}>
              <div className="dc-welcome">
                <div className="dc-welcome-icon">#</div>
                <h3>Welcome to #quest-log!</h3>
                <p>Gõ <code className="dc-inline">/</code> để xem các lệnh của bot.</p>
              </div>
              {messages.map((m) => (
                <div key={m.id} className={`dc-msg${m.ephemeral ? ' ephemeral' : ''}`}>
                  {m.command && (
                    <div className="dc-reply-line">
                      <span className="dc-avatar tiny user">D</span>
                      <b>{USER_NAME}</b> used <span className="dc-cmd-chip">/{m.command}</span>
                    </div>
                  )}
                  <span className={`dc-avatar ${m.author}`}>{m.author === 'bot' ? '🎁' : 'D'}</span>
                  <div className="dc-msg-body">
                    <div className="dc-msg-head">
                      <b className={m.author === 'bot' ? 'bot-name' : ''}>{m.author === 'bot' ? BOT_NAME : USER_NAME}</b>
                      {m.author === 'bot' && <span className="dc-app-tag">✓ APP</span>}
                      <time>{m.time}</time>
                    </div>
                    {m.text && <div className="dc-text">{md(m.text)}</div>}
                    {m.embed && (
                      <div className="dc-embed" style={{ borderLeftColor: m.embed.color }}>
                        {m.embed.author && (
                          <div className="dc-embed-author">
                            <span className="dc-avatar tiny user">D</span>
                            {m.embed.author}
                          </div>
                        )}
                        <div className="dc-embed-title">{m.embed.title}</div>
                        <div className="dc-embed-desc">
                          {m.embed.lines.map((l, i) => (
                            <div key={i}>{md(l)}</div>
                          ))}
                        </div>
                        <div className="dc-embed-footer">
                          <span className="dc-avatar tiny bot">🎁</span>
                          {m.embed.footer} • {m.time}
                        </div>
                      </div>
                    )}
                    {m.ephemeral && (
                      <div className="dc-eph-note">
                        👁 Only you can see this • <u>Dismiss message</u>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Gợi ý slash command */}
            {suggestions.length > 0 && (
              <div className="dc-suggest">
                <div className="dc-suggest-head">COMMANDS MATCHING /{query}</div>
                {suggestions.map((c, i) => (
                  <div
                    key={c.name}
                    className={`dc-suggest-item${i === selIdx ? ' sel' : ''}`}
                    onMouseEnter={() => setSelIdx(i)}
                    onClick={() => submit(c.name)}
                  >
                    <span className="dc-avatar tiny bot">🎁</span>
                    <b>/{c.name}</b>
                    <span className="dc-suggest-desc">{c.desc}</span>
                    <span className="dc-suggest-app">{BOT_NAME}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="dc-composer">
              <span className="dc-plus">+</span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                  setSelIdx(0);
                }}
                onKeyDown={onKeyDown}
                placeholder="Message #quest-log — gõ / để dùng lệnh"
                aria-label="Nhập lệnh"
              />
            </div>
          </main>

          {/* Danh sách thành viên */}
          <aside className="dc-members" aria-hidden="true">
            <div className="dc-cat">APPS — 1</div>
            <div className="dc-member">
              <span className="dc-avatar bot">🎁</span>
              <div>
                <b className="bot-name">{BOT_NAME}</b> <span className="dc-app-tag">✓ APP</span>
                <small>Playing /help | Quest Auto-Completer</small>
              </div>
            </div>
            <div className="dc-cat">ONLINE — 2</div>
            <div className="dc-member">
              <span className="dc-avatar user">D</span>
              <div>
                <b>{USER_NAME}</b>
              </div>
            </div>
            <div className="dc-member">
              <span className="dc-avatar user alt">M</span>
              <div>
                <b>manh.dev</b>
              </div>
            </div>
          </aside>
        </div>

        {/* Popup Modal /login giống Discord */}
        {modal && (
          <div className="dc-modal-backdrop" onClick={() => setModal(false)}>
            <form className="dc-modal" onClick={(e) => e.stopPropagation()} onSubmit={submitLogin}>
              <div className="dc-modal-head">
                <span className="dc-avatar tiny bot">🎁</span>
                <span>{BOT_NAME}</span>
                <button type="button" className="dc-modal-x" onClick={() => setModal(false)}>✕</button>
              </div>
              <h4>Đăng nhập tài khoản làm Quest</h4>
              <label>
                DISCORD USER TOKEN <span className="req">*</span>
                <input
                  autoFocus
                  type="password"
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                  placeholder="Dán token của bạn vào đây..."
                />
              </label>
              <p className="dc-modal-note">Token chỉ gửi tới bot, người khác trong server không nhìn thấy.</p>
              <div className="dc-modal-actions">
                <button type="button" className="ghost" onClick={() => setModal(false)}>Cancel</button>
                <button type="submit" className="primary" disabled={!token.trim()}>Submit</button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
