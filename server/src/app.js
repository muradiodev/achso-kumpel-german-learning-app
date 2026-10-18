import { readFileSync } from 'node:fs';

import { Hono } from 'hono';
import { bodyLimit } from 'hono/body-limit';
import { cors } from 'hono/cors';
import { secureHeaders } from 'hono/secure-headers';

import { hashPassword, hashToken, newId, newToken, rateLimiter, verifyPassword } from './security.js';

const SESSION_DAYS = 90;
const isEmail = (v) => typeof v === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) && v.length <= 254;
const isPassword = (v) => typeof v === 'string' && v.length >= 8 && v.length <= 200;

// Only these profile fields are stored; anything else in a request is ignored.
const PROFILE_FIELDS = ['firstName', 'lastName', 'birthDate', 'phone', 'profession', 'avatarId', 'levels', 'focus'];
function cleanProfile(input) {
  const out = {};
  for (const key of PROFILE_FIELDS) {
    if (!(key in (input ?? {}))) continue;
    const value = input[key];
    if (Array.isArray(value)) out[key] = value.filter((x) => typeof x === 'string').slice(0, 20);
    else if (typeof value === 'string') out[key] = value.slice(0, 200);
  }
  return out;
}

// BIGINT columns come back as strings (pg) or bigints (PGlite).
const publicUser = (row) => ({
  id: row.id,
  email: row.email,
  profile: row.profile,
  createdAt: Number(row.created_at),
});

export function createApp({ db, allowedOrigins, versionFile }) {
  const app = new Hono();
  const authLimit = rateLimiter({ limit: 20, windowMs: 60_000 });

  const one = async (sql, params) => (await db.query(sql, params)).rows[0] ?? null;
  const userByEmail = (email) => one('SELECT * FROM users WHERE email = $1', [email]);
  const userById = (id) => one('SELECT * FROM users WHERE id = $1', [id]);
  const progressOf = (userId) => one('SELECT data, updated_at FROM progress WHERE user_id = $1', [userId]);

  async function startSession(userId) {
    const token = newToken();
    const now = Date.now();
    await db.query('DELETE FROM sessions WHERE user_id = $1 AND expires_at < $2', [userId, now]);
    await db.query('INSERT INTO sessions (token_hash, user_id, created_at, expires_at) VALUES ($1, $2, $3, $4)', [
      hashToken(token),
      userId,
      now,
      now + SESSION_DAYS * 864e5,
    ]);
    return token;
  }

  app.use('*', secureHeaders());
  app.use(
    '*',
    cors({
      origin: (origin) => (allowedOrigins.includes(origin) ? origin : null),
      allowMethods: ['GET', 'POST', 'PUT', 'PATCH', 'OPTIONS'],
      allowHeaders: ['Content-Type', 'Authorization'],
      maxAge: 86400,
    }),
  );
  app.use('*', bodyLimit({ maxSize: 1024 * 1024 }));

  const limited = async (c, next) => {
    const ip = c.req.header('cf-connecting-ip') ?? c.req.header('x-real-ip') ?? 'local';
    if (!authLimit(`${ip}:${c.req.path}`)) return c.json({ error: 'rate_limited' }, 429);
    return next();
  };

  const requireUser = async (c, next) => {
    const header = c.req.header('authorization') ?? '';
    const token = header.startsWith('Bearer ') ? header.slice(7) : null;
    const session = token
      ? await one('SELECT user_id FROM sessions WHERE token_hash = $1 AND expires_at > $2', [
          hashToken(token),
          Date.now(),
        ])
      : null;
    if (!session) return c.json({ error: 'unauthorized' }, 401);
    c.set('userId', session.user_id);
    c.set('tokenHash', hashToken(token));
    return next();
  };

  app.get('/health', (c) => c.json({ ok: true }));

  app.get('/v1/version', (c) => {
    try {
      return c.json(JSON.parse(readFileSync(versionFile, 'utf8')));
    } catch {
      return c.json({ error: 'no_manifest' }, 404);
    }
  });

  app.post('/v1/auth/register', limited, async (c) => {
    const { email, password } = await c.req.json().catch(() => ({}));
    if (!isEmail(email)) return c.json({ error: 'auth.errors.emailInvalid' }, 400);
    if (!isPassword(password)) return c.json({ error: 'auth.errors.passwordShort' }, 400);
    const key = email.trim().toLowerCase();
    const id = newId();
    try {
      await db.query('INSERT INTO users (id, email, password_hash, profile, created_at) VALUES ($1, $2, $3, $4, $5)', [
        id,
        key,
        await hashPassword(password),
        '{}',
        Date.now(),
      ]);
    } catch (error) {
      if (error.code === '23505') return c.json({ error: 'auth.errors.emailTaken' }, 409); // unique email
      throw error;
    }
    return c.json({ token: await startSession(id), user: publicUser(await userById(id)) }, 201);
  });

  app.post('/v1/auth/login', limited, async (c) => {
    const { email, password } = await c.req.json().catch(() => ({}));
    const row = isEmail(email) ? await userByEmail(email.trim().toLowerCase()) : null;
    // Same answer for "no such user" and "wrong password".
    if (!row || !isPassword(password) || !(await verifyPassword(password, row.password_hash))) {
      return c.json({ error: 'auth.errors.invalidCredentials' }, 401);
    }
    return c.json({ token: await startSession(row.id), user: publicUser(row) });
  });

  app.post('/v1/auth/logout', requireUser, async (c) => {
    await db.query('DELETE FROM sessions WHERE token_hash = $1', [c.get('tokenHash')]);
    return c.json({ ok: true });
  });

  app.get('/v1/me', requireUser, async (c) => c.json({ user: publicUser(await userById(c.get('userId'))) }));

  app.patch('/v1/me/profile', requireUser, async (c) => {
    const body = await c.req.json().catch(() => ({}));
    const row = await one('UPDATE users SET profile = profile || $1::jsonb WHERE id = $2 RETURNING *', [
      JSON.stringify(cleanProfile(body)),
      c.get('userId'),
    ]);
    return c.json({ user: publicUser(row) });
  });

  app.get('/v1/progress', requireUser, async (c) => {
    const row = await progressOf(c.get('userId'));
    return c.json(row ? { data: row.data, updatedAt: Number(row.updated_at) } : { data: null, updatedAt: 0 });
  });

  // Last write wins: the client sends when its copy last changed. An older
  // copy never overwrites a newer one; the response is always the stored copy.
  app.put('/v1/progress', requireUser, async (c) => {
    const { data, updatedAt } = await c.req.json().catch(() => ({}));
    if (typeof data !== 'object' || data === null || !Number.isFinite(updatedAt)) {
      return c.json({ error: 'invalid_progress' }, 400);
    }
    const userId = c.get('userId');
    await db.query(
      `INSERT INTO progress (user_id, data, updated_at) VALUES ($1, $2::jsonb, $3)
       ON CONFLICT (user_id) DO UPDATE SET data = excluded.data, updated_at = excluded.updated_at
       WHERE progress.updated_at < excluded.updated_at`,
      [userId, JSON.stringify(data), Math.round(Math.min(updatedAt, Date.now() + 60_000))],
    );
    const row = await progressOf(userId);
    return c.json({ data: row.data, updatedAt: Number(row.updated_at) });
  });

  app.notFound((c) => c.json({ error: 'not_found' }, 404));
  app.onError((err, c) => {
    console.error(err);
    return c.json({ error: 'server_error' }, 500);
  });

  return app;
}
