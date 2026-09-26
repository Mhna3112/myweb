// Cloudflare Worker: Static Assets + SePay Webhook + KV Storage

function sanitizeDonorName(content) {
  if (!content) return 'Người bạn giấu tên';
  let cleaned = content.replace(/^(MBVCB|FT|IB|NAPAS|VNPAY|MOMO|SEPAY)\d*\s*/i, '').trim();
  cleaned = cleaned.replace(/^(CT TU|CHUYEN TIEN|UNG HO|DONATE)\s*/i, '').trim();
  cleaned = cleaned.replace(/^MANH\s*(\d+k?)?\s*/i, '').trim();
  if (cleaned.length < 2) return 'Người bạn giấu tên';
  return cleaned.slice(0, 50);
}

const DEFAULT_DONATIONS = [
  {
    id: 1,
    gateway: 'VietQR',
    transactionDate: '2026-09-27 00:00:00',
    amount: 50000,
    content: 'Chuc Duc Manh luon giu vung dam me lap trinh!',
    donorName: 'Người bạn giấu tên',
    referenceCode: 'MB.WELCOME',
    timestamp: 1790448000000
  }
];

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    };

    // Preflight CORS request
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: corsHeaders,
      });
    }

    // ==========================================
    // 1. API: NHẬN WEBHOOK TỪ SEPAY
    // ==========================================
    if (url.pathname === '/api/sepay-webhook' && request.method === 'POST') {
      try {
        // Kiểm tra API Key nếu bạn cấu hình biến môi trường SEPAY_API_KEY
        if (env.SEPAY_API_KEY) {
          const auth = request.headers.get('Authorization') || '';
          if (auth !== `Apikey ${env.SEPAY_API_KEY}`) {
            return Response.json(
              { success: false, message: 'Unauthorized API Key' },
              { status: 401, headers: corsHeaders }
            );
          }
        }

        const payload = await request.json();
        const transferType = (payload.transferType || 'in').toLowerCase();
        const amount = Number(payload.transferAmount || 0);

        if (transferType === 'in' && amount > 0) {
          let donations = [];
          if (env.DONATIONS_KV) {
            const raw = await env.DONATIONS_KV.get('donations_list');
            if (raw) {
              try { donations = JSON.parse(raw); } catch {}
            }
          }
          if (!donations || donations.length === 0) {
            donations = [...DEFAULT_DONATIONS];
          }

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

          const exists = donations.some(d => (d.id && d.id === newDonation.id) || (d.referenceCode && d.referenceCode === newDonation.referenceCode));
          if (!exists) {
            donations.unshift(newDonation);
            if (donations.length > 100) donations.length = 100;
            if (env.DONATIONS_KV) {
              await env.DONATIONS_KV.put('donations_list', JSON.stringify(donations));
            }
          }
        }

        return Response.json(
          { success: true, message: 'Transaction processed successfully' },
          { status: 200, headers: corsHeaders }
        );
      } catch (err) {
        return Response.json(
          { success: false, error: err.message },
          { status: 400, headers: corsHeaders }
        );
      }
    }

    // ==========================================
    // 2. API: LẤY DANH SÁCH ỦNG HỘ & THỐNG KÊ
    // ==========================================
    if (url.pathname === '/api/donations' && request.method === 'GET') {
      let donations = [...DEFAULT_DONATIONS];

      if (env.DONATIONS_KV) {
        const raw = await env.DONATIONS_KV.get('donations_list');
        if (raw) {
          try {
            const parsed = JSON.parse(raw);
            if (Array.isArray(parsed) && parsed.length > 0) {
              donations = parsed;
            }
          } catch {}
        }
      }

      const totalAmount = donations.reduce((sum, d) => sum + (Number(d.amount) || 0), 0);
      const totalCount = donations.length;

      return Response.json({
        success: true,
        stats: {
          totalCount,
          totalAmount
        },
        donations: donations.slice(0, 50)
      }, {
        status: 200,
        headers: {
          ...corsHeaders,
          'Cache-Control': 'no-cache',
          'Content-Type': 'application/json; charset=utf-8'
        }
      });
    }

    // ==========================================
    // 3. API: TEST SIMULATE WEBHOOK
    // ==========================================
    if (url.pathname === '/api/sepay-test' && request.method === 'POST') {
      try {
        const payload = await request.json();
        const amount = Number(payload.amount || payload.transferAmount || 20000);
        const note = payload.content || payload.note || 'Ủng hộ bạn cốc cà phê buổi sáng!';

        let donations = [...DEFAULT_DONATIONS];
        if (env.DONATIONS_KV) {
          const raw = await env.DONATIONS_KV.get('donations_list');
          if (raw) {
            try {
              const parsed = JSON.parse(raw);
              if (Array.isArray(parsed)) donations = parsed;
            } catch {}
          }
        }

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

        if (env.DONATIONS_KV) {
          await env.DONATIONS_KV.put('donations_list', JSON.stringify(donations));
        }

        return Response.json({
          success: true,
          message: 'Test donation simulated',
          donation: testDonation
        }, {
          status: 200,
          headers: corsHeaders
        });
      } catch (err) {
        return Response.json(
          { success: false, error: err.message },
          { status: 400, headers: corsHeaders }
        );
      }
    }

    // ==========================================
    // 4. MẶC ĐỊNH: PHỤC VỤ STATIC ASSETS
    // ==========================================
    if (env.ASSETS) {
      return env.ASSETS.fetch(request);
    }

    return new Response('Not Found', { status: 404 });
  }
};
