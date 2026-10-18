import assert from 'node:assert/strict';
import { test } from 'node:test';

import { PGlite } from '@electric-sql/pglite';

import { createApp } from '../src/app.js';
import { migrate } from '../src/db.js';

const ORIGIN = 'https://achsokumpel.deviofy.com';

// An in-process Postgres, so the tests need no database server.
async function setup() {
  const db = new PGlite();
  await migrate(db);
  const app = createApp({ db, allowedOrigins: [ORIGIN], versionFile: '/nope.json' });
  const call = (method, path, body, token) =>
    app.request(path, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Origin: ORIGIN,
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: body ? JSON.stringify(body) : undefined,
    });
  return { app, call };
}

test('register, login, profile, progress', async () => {
  const { call } = await setup();

  const reg = await call('POST', '/v1/auth/register', { email: 'Leyla@Example.com', password: 'kumpel-test-1' });
  assert.equal(reg.status, 201);
  const { token, user } = await reg.json();
  assert.ok(token);
  assert.equal(user.email, 'leyla@example.com');

  assert.equal(
    (await call('POST', '/v1/auth/register', { email: 'leyla@example.com', password: 'kumpel-test-1' })).status,
    409,
  );
  assert.equal(
    (await call('POST', '/v1/auth/login', { email: 'leyla@example.com', password: 'wrong-password' })).status,
    401,
  );
  const login = await call('POST', '/v1/auth/login', { email: 'leyla@example.com', password: 'kumpel-test-1' });
  assert.equal(login.status, 200);

  const patched = await call(
    'PATCH',
    '/v1/me/profile',
    { firstName: 'Leyla', isAdmin: true, levels: ['B1', 'C1'] },
    token,
  );
  const { user: updated } = await patched.json();
  assert.equal(updated.profile.firstName, 'Leyla');
  assert.equal(updated.profile.isAdmin, undefined);
  assert.deepEqual(updated.profile.levels, ['B1', 'C1']);

  assert.deepEqual(await (await call('GET', '/v1/progress', null, token)).json(), { data: null, updatedAt: 0 });
  await call('PUT', '/v1/progress', { data: { srs: { a: 1 } }, updatedAt: 1000 }, token);
  // an older copy must not overwrite a newer one
  const stale = await (await call('PUT', '/v1/progress', { data: { srs: {} }, updatedAt: 500 }, token)).json();
  assert.deepEqual(stale.data, { srs: { a: 1 } });

  assert.equal((await call('POST', '/v1/auth/logout', null, token)).status, 200);
  assert.equal((await call('GET', '/v1/me', null, token)).status, 401);
});

test('rejects bad input and unknown origins', async () => {
  const { app, call } = await setup();
  assert.equal((await call('POST', '/v1/auth/register', { email: 'nope', password: 'kumpel-test-1' })).status, 400);
  assert.equal((await call('POST', '/v1/auth/register', { email: 'a@b.de', password: 'short' })).status, 400);
  assert.equal((await call('GET', '/v1/me')).status, 401);

  const res = await app.request('/health', { headers: { Origin: 'https://evil.example' } });
  assert.equal(res.headers.get('access-control-allow-origin'), null);
  const ok = await app.request('/health', { headers: { Origin: ORIGIN } });
  assert.equal(ok.headers.get('access-control-allow-origin'), ORIGIN);
});

test('community shows members and stats, never emails', async () => {
  const { call } = await setup();
  const join = async (email, firstName) => {
    const { token } = await (await call('POST', '/v1/auth/register', { email, password: 'kumpel-test-1' })).json();
    if (firstName) await call('PATCH', '/v1/me/profile', { firstName, lastName: 'K', phone: '+4917012345' }, token);
    return token;
  };
  const leyla = await join('leyla@example.com', 'Leyla');
  await join('tural@example.com', 'Tural');
  await join('halfway@example.com'); // registered but setup not finished

  const today = new Date().toISOString().slice(0, 10);
  const srs = { 'word|w1': { interval: 9 }, 'word|w2': { interval: 1 } };
  await call('PUT', '/v1/progress', { data: { srs, activity: { [today]: 12 } }, updatedAt: Date.now() }, leyla);

  assert.equal((await call('GET', '/v1/community')).status, 401);
  const list = await call('GET', '/v1/community', null, leyla);
  const body = await list.text();
  assert.ok(!body.includes('@example.com'));
  assert.ok(!body.includes('+4917012345'));
  const { members, me } = JSON.parse(body);
  assert.deepEqual(members.map((m) => m.firstName).sort(), ['Leyla', 'Tural']);
  const mine = members.find((m) => m.id === me);
  assert.equal(mine.stats.mastered, 1);
  assert.equal(mine.stats.weekReviews, 12);
  assert.equal(mine.stats.streak, 1);

  const detail = await (await call('GET', `/v1/community/${me}`, null, leyla)).json();
  assert.equal(detail.member.week.length, 7);
  assert.equal(detail.member.email, undefined);
  assert.equal((await call('GET', '/v1/community/nobody', null, leyla)).status, 404);
});
