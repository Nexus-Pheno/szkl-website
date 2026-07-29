import { access, cp, mkdir, readdir, rm } from 'node:fs/promises';
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

async function findWorkerBundle(dist: string): Promise<string | undefined> {
  const entries = await readdir(dist, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isDirectory() || entry.name === 'client' || entry.name === 'server') {
      continue;
    }

    const candidate = resolve(dist, entry.name, 'index.js');
    if (await exists(candidate)) {
      return candidate;
    }
  }

  return undefined;
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
      const worker = await findWorkerBundle(dist);

      if (!(await exists(client)) || !worker) {
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
