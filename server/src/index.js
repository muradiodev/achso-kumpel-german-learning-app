import { serve } from '@hono/node-server';

import { createApp } from './app.js';
import { migrate, openDatabase } from './db.js';

const port = Number(process.env.PORT) || 8787;
const allowedOrigins = (process.env.ALLOWED_ORIGINS ?? 'https://achsokumpel.deviofy.com')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);

if (!process.env.DATABASE_URL) {
  console.error('DATABASE_URL is not set (postgres://user:password@host:5432/db)');
  process.exit(1);
}

const db = openDatabase(process.env.DATABASE_URL);
await migrate(db);
const app = createApp({ db, allowedOrigins, versionFile: process.env.VERSION_FILE ?? './version.json' });

serve({ fetch: app.fetch, port, hostname: '0.0.0.0' }, () => {
  console.log(`AchsoKumpel API on :${port} (origins: ${allowedOrigins.join(', ')})`);
});
