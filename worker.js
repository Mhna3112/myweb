// Cloudflare Worker: Static Assets & Friendly Redirects
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname.toLowerCase();
    if (path === '/links' || path === '/links.html' || path === '/friends' || path === '/friends.html') {
      return Response.redirect(`${url.origin}/#friends`, 302);
    }
    if (path === '/blackboard' || path === '/blackboard.html' || path === '/memos') {
      return Response.redirect(`${url.origin}/#memos`, 302);
    }
    if (env.ASSETS) {
      return env.ASSETS.fetch(request);
    }
    return new Response('Not Found', { status: 404 });
  }
};
