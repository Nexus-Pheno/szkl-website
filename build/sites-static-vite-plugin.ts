import { access, cp, mkdir, rm } from 'node:fs/promises';
import { resolve } from 'node:path';
import type { Plugin } from 'vite';

async function exists(path: string): Promise<boolean> {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

export function sitesStatic(): Plugin {
  let root = process.cwd();

  return {
    name: 'sites-static',
    apply: 'build',
    enforce: 'post',
    configResolved(config) {
      root = config.root;
    },
    async closeBundle() {
      const dist = resolve(root, 'dist');
      const client = resolve(dist, 'client');
      const worker = resolve(dist, 'szkl_video_hero', 'index.js');

      if (!(await exists(client)) || !(await exists(worker))) {
        return;
      }

      const server = resolve(dist, 'server');
      await rm(server, { recursive: true, force: true });
      await mkdir(server, { recursive: true });
      await cp(worker, resolve(server, 'index.js'));
      await cp(client, dist, { recursive: true });
    },
  };
}
