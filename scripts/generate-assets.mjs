import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const rootDir = process.cwd();
const avatarPath = path.join(rootDir, 'avatar.jpg');

async function generateAssets() {
  console.log('Generating favicon and app icons from avatar.jpg...');

  // 1. Generate favicon-32.png
  await sharp(avatarPath)
    .resize(32, 32)
    .png()
    .toFile(path.join(rootDir, 'favicon.png'));

  // 2. Generate apple-touch-icon.png (180x180)
  await sharp(avatarPath)
    .resize(180, 180)
    .png()
    .toFile(path.join(rootDir, 'apple-touch-icon.png'));

  // 3. Generate high-res circular avatar for OG banner
  const avatarCircBuf = await sharp(avatarPath)
    .resize(220, 220)
    .composite([{
      input: Buffer.from(`
        <svg width="220" height="220">
          <circle cx="110" cy="110" r="110" fill="#fff" />
        </svg>
      `),
      blend: 'dest-in'
    }])
    .png()
    .toBuffer();

  const avatarBase64 = `data:image/png;base64,${avatarCircBuf.toString('base64')}`;

  // 4. Create OpenGraph Banner (1200x630) using SVG overlay with Dark Velvet aesthetic
  const ogSvg = `
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="purpleGlow" cx="70%" cy="40%" r="50%">
          <stop offset="0%" stop-color="#9281f7" stop-opacity="0.25" />
          <stop offset="100%" stop-color="#000000" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="blueGlow" cx="20%" cy="80%" r="45%">
          <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#000000" stop-opacity="0" />
        </radialGradient>
        <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#141419" />
          <stop offset="100%" stop-color="#0a0a0d" />
        </linearGradient>
      </defs>

      <!-- Background -->
      <rect width="1200" height="630" fill="#050507" />
      <rect width="1200" height="630" fill="url(#purpleGlow)" />
      <rect width="1200" height="630" fill="url(#blueGlow)" />

      <!-- Subtle Grid -->
      <g stroke="#ffffff" stroke-opacity="0.04" stroke-width="1">
        <line x1="100" y1="0" x2="100" y2="630" />
        <line x1="250" y1="0" x2="250" y2="630" />
        <line x1="400" y1="0" x2="400" y2="630" />
        <line x1="550" y1="0" x2="550" y2="630" />
        <line x1="700" y1="0" x2="700" y2="630" />
        <line x1="850" y1="0" x2="850" y2="630" />
        <line x1="1000" y1="0" x2="1000" y2="630" />
        <line x1="1150" y1="0" x2="1150" y2="630" />
        <line x1="0" y1="100" x2="1200" y2="100" />
        <line x1="0" y1="250" x2="1200" y2="250" />
        <line x1="0" y1="400" x2="1200" y2="400" />
        <line x1="0" y1="550" x2="1200" y2="550" />
      </g>

      <!-- Main Container Card -->
      <rect x="60" y="60" width="1080" height="510" rx="24" fill="url(#cardGrad)" stroke="#27272a" stroke-width="1.5" />

      <!-- Top Badge -->
      <g transform="translate(110, 115)">
        <rect width="260" height="36" rx="18" fill="#181820" stroke="#9281f7" stroke-opacity="0.5" stroke-width="1" />
        <circle cx="20" cy="18" r="5" fill="#3fb950" />
        <text x="36" y="23" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="600" fill="#dbdee1" letter-spacing="0.5">DEV JOURNEY &amp; PORTFOLIO</text>
      </g>

      <!-- Brand Heading -->
      <text x="110" y="215" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="52" font-weight="800" fill="#ffffff" letter-spacing="-1">
        &lt;<tspan fill="#9281f7">DucManh</tspan>/&gt;
      </text>

      <!-- Subtitle -->
      <text x="110" y="265" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="22" font-weight="500" fill="#a1a1aa">
        Software Developer &amp; Creator from Vietnam
      </text>

      <!-- Feature Tags -->
      <g transform="translate(110, 315)">
        <rect x="0" y="0" width="130" height="34" rx="8" fill="#121217" stroke="#292d30" />
        <text x="65" y="22" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="600" fill="#baa7ff">MediaHub</text>

        <rect x="142" y="0" width="145" height="34" rx="8" fill="#121217" stroke="#292d30" />
        <text x="214" y="22" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="600" fill="#baa7ff">Ôn Thi GPLX</text>

        <rect x="299" y="0" width="140" height="34" rx="8" fill="#121217" stroke="#292d30" />
        <text x="369" y="22" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="600" fill="#baa7ff">Todo Calendar</text>

        <rect x="451" y="0" width="155" height="34" rx="8" fill="#121217" stroke="#292d30" />
        <text x="528" y="22" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="600" fill="#baa7ff">Discord Quest Bot</text>

        <rect x="0" y="44" width="150" height="34" rx="8" fill="#121217" stroke="#292d30" />
        <text x="75" y="66" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="600" fill="#baa7ff">Roblox Luau UI</text>

        <rect x="162" y="44" width="160" height="34" rx="8" fill="#121217" stroke="#292d30" />
        <text x="242" y="66" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="600" fill="#baa7ff">C/C++ Visualizer</text>
      </g>

      <!-- Footer URL -->
      <g transform="translate(110, 500)">
        <text font-family="'JetBrains Mono', monospace" font-size="18" font-weight="600" fill="#9281f7">https://ducmanh.xyz</text>
      </g>

      <!-- Avatar with glowing border on the right -->
      <g transform="translate(830, 160)">
        <!-- Halo Glow -->
        <circle cx="120" cy="120" r="130" fill="#9281f7" fill-opacity="0.18" />
        <circle cx="120" cy="120" r="115" stroke="#9281f7" stroke-width="4" stroke-opacity="0.6" fill="none" />
        <image href="${avatarBase64}" x="10" y="10" width="220" height="220" />
      </g>
    </svg>
  `;

  await sharp(Buffer.from(ogSvg))
    .jpeg({ quality: 92 })
    .toFile(path.join(rootDir, 'og-image.jpg'));

  console.log('✓ Successfully generated: favicon.png, apple-touch-icon.png, og-image.jpg');
}

generateAssets().catch(err => {
  console.error('Error generating assets:', err);
  process.exit(1);
});
