export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const hostname = url.hostname.toLowerCase();
    let pathname = url.pathname;

    // Detect target site based on hostname
    const isMhna = hostname === 'mhna.id.vn' || hostname === 'www.mhna.id.vn';
    const sitePrefix = isMhna ? '/mhna' : '/ducmanh';

    // Normalization: if requesting root, SPA routes (/projects/*, /full), or directory, append index.html
    let lookupPath = pathname;
    const isMhnaSpaRoute =
      isMhna &&
      (pathname === '/full' ||
        pathname === '/full/' ||
        pathname.startsWith('/projects/'));

    if (isMhnaSpaRoute) {
      lookupPath = '/index.html';
    } else if (lookupPath.endsWith('/')) {
      lookupPath += 'index.html';
    } else if (!lookupPath.includes('.')) {
      lookupPath += '/index.html';
    }

    const fullPath = sitePrefix + lookupPath;
    const assetRequest = new Request(`https://assets.local${fullPath}`, {
      method: request.method === 'HEAD' ? 'GET' : request.method,
      headers: request.headers,
    });

    let response = await env.ASSETS.fetch(assetRequest);

    // If 404, try exact pathname without trailing index.html (e.g. for files)
    if (response.status === 404) {
      const fallbackRequest = new Request(`https://assets.local${sitePrefix}${pathname}`, {
        method: request.method === 'HEAD' ? 'GET' : request.method,
        headers: request.headers,
      });
      const fallbackResponse = await env.ASSETS.fetch(fallbackRequest);
      if (fallbackResponse.status < 400) {
        response = fallbackResponse;
      }
    }

    // Clone response and attach debug headers
    const newHeaders = new Headers(response.headers);
    newHeaders.set('X-Debug-Host', hostname);
    newHeaders.set('X-Debug-Site', isMhna ? 'mhna' : 'ducmanh');
    newHeaders.set('X-Debug-Lookup', fullPath);
    newHeaders.set('X-Debug-Status', String(response.status));

    // If response is a redirect to /ducmanh/ or /mhna/, strip the prefix to prevent redirect loops
    if (response.status >= 300 && response.status < 400) {
      const loc = response.headers.get('Location');
      if (loc) {
        const cleanLoc = loc.replace(/^\/(ducmanh|mhna)/, '') || '/';
        newHeaders.set('Location', cleanLoc);
      }
    }

    return new Response(request.method === 'HEAD' ? null : response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders,
    });
  }
};
