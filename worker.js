// Cloudflare Worker: Static Assets
export default {
  async fetch(request, env, ctx) {
    if (env.ASSETS) {
      return env.ASSETS.fetch(request);
    }
    return new Response('Not Found', { status: 404 });
  }
};
