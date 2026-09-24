import { cp, mkdir, rm, stat } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const output = join(root, '.deploy-assets');

if (output !== join(root, '.deploy-assets')) {
  throw new Error('Unexpected deploy output path');
}

const files = ['index.html', 'main.js', 'style.css'];
const directories = ['gplx'];
const todoFiles = ['index.html', 'style.css', 'script.js', 'todo-calendar.html', 'todo2.html', 'vietnam-flag.jpg'];

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

for (const name of files) {
  await cp(join(root, name), join(output, name));
}

for (const name of directories) {
  await cp(join(root, name), join(output, name), { recursive: true });
}

await mkdir(join(output, 'todo'), { recursive: true });
for (const name of todoFiles) {
  await cp(join(root, 'todo', name), join(output, 'todo', name));
}
await cp(join(root, 'todo', 'dist'), join(output, 'todo', 'dist'), { recursive: true });

const count = async (dir) => {
  const { readdir } = await import('node:fs/promises');
  const entries = await readdir(dir, { withFileTypes: true });
  return (await Promise.all(entries.map(async (entry) => {
    const path = join(dir, entry.name);
    return entry.isDirectory() ? count(path) : (await stat(path)).isFile() ? 1 : 0;
  }))).reduce((total, value) => total + value, 0);
};

console.log(`Prepared ${await count(output)} public files in ${output}`);
