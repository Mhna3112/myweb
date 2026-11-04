import { cp, mkdir, rm, stat } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const output = join(root, '.deploy-assets');

console.log('--- PREPARING DUAL-DOMAIN DEPLOYMENT ---');

// 1. Clean output directory
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

// 2. Build Vite React Typography project into .deploy-assets/ducmanh
console.log('Building ducmanh.xyz (React + Vite Typography)...');
execSync('npx vite build', { cwd: root, stdio: 'inherit' });

// 3. Prepare mhna.id.vn (Original Portfolio) in .deploy-assets/mhna
console.log('Preparing mhna.id.vn (Original Project)...');
const mhnaOutput = join(output, 'mhna');
await mkdir(mhnaOutput, { recursive: true });
await cp(join(root, 'mhna-site'), mhnaOutput, { recursive: true });



const count = async (dir) => {
  const { readdir } = await import('node:fs/promises');
  const entries = await readdir(dir, { withFileTypes: true });
  return (await Promise.all(entries.map(async (entry) => {
    const path = join(dir, entry.name);
    return entry.isDirectory() ? count(path) : (await stat(path)).isFile() ? 1 : 0;
  }))).reduce((total, value) => total + value, 0);
};

console.log(`\n🎉 Dual-domain assets prepared: ${await count(output)} files in ${output}`);
