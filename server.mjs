import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = __dirname;

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
const SEPAY_API_KEY = process.env.SEPAY_API_KEY || ''; // Optional: Điền API Key nếu bạn cấu hình trong SePay

// Thư mục và file lưu trữ dữ liệu ủng hộ
const DATA_DIR = path.join(rootDir, 'data');
const DONATIONS_FILE = path.join(DATA_DIR, 'donations.json');

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Hàm đọc danh sách ủng hộ
function loadDonations() {
  try {
    if (fs.existsSync(DONATIONS_FILE)) {
      const raw = fs.readFileSync(DONATIONS_FILE, 'utf8');
      return JSON.parse(raw);
    }
  } catch (err) {
    console.error('[SePay] Error reading donations.json:', err.message);
  }
  return [];
}

// Hàm lưu danh sách ủng hộ
function saveDonations(donations) {
  try {
    fs.writeFileSync(DONATIONS_FILE, JSON.stringify(donations, null, 2), 'utf8');
  } catch (err) {
    console.error('[SePay] Error writing donations.json:', err.message);
  }
}

// Quản lý kết nối SSE Realtime
const sseClients = new Set();

function broadcastSSE(event, data) {
  const payload = `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`;
  for (const client of sseClients) {
    try {
      client.write(payload);
    } catch {
      sseClients.delete(client);
    }
  }
}

// Làm sạch nội dung chuyển khoản để hiển thị tên hoặc lời nhắn đẹp mắt
function sanitizeDonorName(content) {
  if (!content) return 'Người ủng hộ';
  let cleaned = content.replace(/^(MBVCB|FT|IB|NAPAS|VNPAY|MOMO|SEPAY)\d*\s*/i, '').trim();
  cleaned = cleaned.replace(/^(CT TU|CHUYEN TIEN|UNG HO|DONATE)\s*/i, '').trim();
  cleaned = cleaned.replace(/^MANH\s*(\d+k?)?\s*/i, '').trim();
  if (cleaned.length < 2) return 'Người bạn giấu tên';
  return cleaned.slice(0, 50);
}

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf'
};

function getLocalIpAddresses() {
  const interfaces = os.networkInterfaces();
  const addresses = [];
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name] || []) {
      if (iface.family === 'IPv4' && !iface.internal) {
        addresses.push(iface.address);
      }
    }
  }
  return addresses;
}

// Xử lý đọc request body
function readRequestBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
      if (body.length > 1e6) { // 1MB limit
        req.destroy();
        reject(new Error('Payload too large'));
      }
    });
    req.on('end', () => resolve(body));
    req.on('error', reject);
  });
}

const server = http.createServer(async (req, res) => {
  // CORS & Security headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, HEAD, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('X-Content-Type-Options', 'nosniff');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // Parse requested URL pathname
  let reqUrl;
  try {
    reqUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  } catch {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end('Bad Request');
    return;
  }

  const reqPath = decodeURIComponent(reqUrl.pathname);

  // ==========================================
  // 1. API: NHẬN WEBHOOK TỪ SEPAY
  // ==========================================
  if (reqPath === '/api/sepay-webhook' && req.method === 'POST') {
    try {
      // Xác thực API Key nếu có cấu hình
      if (SEPAY_API_KEY) {
        const auth = req.headers['authorization'] || '';
        if (auth !== `Apikey ${SEPAY_API_KEY}`) {
          console.warn('[SePay Webhook] Unauthorized request received');
          res.writeHead(401, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: false, message: 'Unauthorized API Key' }));
          return;
        }
      }

      const rawBody = await readRequestBody(req);
      const payload = JSON.parse(rawBody || '{}');

      console.log('\n[SePay Webhook] Nhận giao dịch mới:', JSON.stringify(payload));

      // SePay payload chuẩn:
      // { id, gateway, transactionDate, accountNumber, code, content, transferType, transferAmount, referenceCode }
      const transferType = (payload.transferType || 'in').toLowerCase();
      const amount = Number(payload.transferAmount || 0);

      if (transferType === 'in' && amount > 0) {
        const donations = loadDonations();
        const donorName = sanitizeDonorName(payload.content || '');

        const newDonation = {
          id: payload.id || `sp_${Date.now()}`,
          gateway: payload.gateway || 'Bank',
          transactionDate: payload.transactionDate || new Date().toISOString(),
          amount: amount,
          content: (payload.content || '').trim() || 'Ủng hộ cà phê',
          donorName: donorName,
          referenceCode: payload.referenceCode || '',
          timestamp: Date.now()
        };

        // Tránh trùng lặp theo ID hoặc referenceCode
        const exists = donations.some(d => (d.id && d.id === newDonation.id) || (d.referenceCode && d.referenceCode === newDonation.referenceCode));
        if (!exists) {
          donations.unshift(newDonation);
          // Giữ tối đa 100 giao dịch gần nhất
          if (donations.length > 100) donations.length = 100;
          saveDonations(donations);
          broadcastSSE('donation', newDonation);
          console.log(`[SePay] Đã lưu ủng hộ: ${amount.toLocaleString('vi-VN')}đ từ "${donorName}"`);
        } else {
          console.log(`[SePay] Giao dịch ID ${newDonation.id} đã tồn tại, bỏ qua.`);
        }
      }

      // SePay yêu cầu trả về status 200 hoặc 201 kèm JSON
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: true, message: 'Transaction processed successfully' }));
      return;
    } catch (err) {
      console.error('[SePay Webhook] Lỗi xử lý:', err.message);
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: false, error: err.message }));
      return;
    }
  }

  // ==========================================
  // 2. API: LẤY DANH SÁCH ỦNG HỘ & THỐNG KÊ
  // ==========================================
  if (reqPath === '/api/donations' && req.method === 'GET') {
    const donations = loadDonations();
    const totalAmount = donations.reduce((sum, d) => sum + (Number(d.amount) || 0), 0);
    const totalCount = donations.length;

    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify({
      success: true,
      stats: {
        totalCount,
        totalAmount
      },
      donations: donations.slice(0, 50)
    }));
    return;
  }

  // ==========================================
  // 3. API: REALTIME SSE STREAM CHO TRÌNH DUYỆT
  // ==========================================
  if (reqPath === '/api/donations/stream' && req.method === 'GET') {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache, no-transform',
      'Connection': 'keep-alive'
    });

    sseClients.add(res);

    // Gửi thông báo kết nối thành công
    res.write(`event: connected\ndata: ${JSON.stringify({ status: 'connected', time: Date.now() })}\n\n`);

    // Heartbeat định kỳ 25s để giữ kết nối không bị timeout
    const keepAlive = setInterval(() => {
      res.write(': keep-alive\n\n');
    }, 25000);

    req.on('close', () => {
      clearInterval(keepAlive);
      sseClients.delete(res);
    });
    return;
  }

  // ==========================================
  // 4. API: TEST SIMULATE WEBHOOK (DÙNG ĐỂ THỬ NGHIỆM)
  // ==========================================
  if (reqPath === '/api/sepay-test' && req.method === 'POST') {
    try {
      const rawBody = await readRequestBody(req);
      const payload = JSON.parse(rawBody || '{}');
      const amount = Number(payload.amount || payload.transferAmount || 20000);
      const note = payload.content || payload.note || 'Ủng hộ bạn cốc cà phê buổi sáng!';

      const donations = loadDonations();
      const testDonation = {
        id: `test_${Date.now()}`,
        gateway: 'MBBank',
        transactionDate: new Date().toLocaleString('vi-VN'),
        amount: amount,
        content: note,
        donorName: sanitizeDonorName(note),
        referenceCode: `TEST.${Math.floor(100000 + Math.random() * 900000)}`,
        timestamp: Date.now()
      };

      donations.unshift(testDonation);
      if (donations.length > 100) donations.length = 100;
      saveDonations(donations);
      broadcastSSE('donation', testDonation);

      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify({ success: true, message: 'Test donation simulated', donation: testDonation }));
      return;
    } catch (err) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: false, error: err.message }));
      return;
    }
  }

  // ==========================================
  // 5. STATIC FILES SERVING & CUSTOM 404
  // ==========================================
  let filePath = path.join(rootDir, reqPath === '/' ? 'index.html' : reqPath);

  // Security check: prevent directory traversal
  if (!filePath.startsWith(rootDir)) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('403 Forbidden');
    return;
  }

  // If path is a directory, look for index.html inside
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    const dirIndex = path.join(filePath, 'index.html');
    if (fs.existsSync(dirIndex)) {
      filePath = dirIndex;
    }
  }

  // Check if file exists
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': contentType });
    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  } else {
    // Serve custom 404.html
    const notFoundPath = path.join(rootDir, '404.html');
    if (fs.existsSync(notFoundPath)) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      fs.createReadStream(notFoundPath).pipe(res);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 Not Found');
    }
  }
});

server.listen(PORT, '0.0.0.0', () => {
  const localIps = getLocalIpAddresses();
  console.log('\n======================================================');
  console.log('🚀 DUC MANH WEB & SEPAY SERVER ĐANG CHẠY TRÊN MÁY BẠN');
  console.log('======================================================');
  console.log(`  ▶ Local:           http://localhost:${PORT}`);
  console.log(`  ▶ Webhook URL:     http://localhost:${PORT}/api/sepay-webhook`);
  console.log(`  ▶ Donations API:   http://localhost:${PORT}/api/donations`);
  if (localIps.length > 0) {
    localIps.forEach(ip => {
      console.log(`  ▶ Public/LAN:      http://${ip}:${PORT}`);
    });
  }
  console.log('======================================================');
  console.log('Nhấn Ctrl + C để dừng server bất kỳ lúc nào.\n');
});
