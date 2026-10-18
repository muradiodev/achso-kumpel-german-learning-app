import { createHash, randomBytes, randomUUID, scrypt, timingSafeEqual } from 'node:crypto';
import { promisify } from 'node:util';

const scryptAsync = promisify(scrypt);
const KEY_LEN = 64;

// Stored as "scrypt$<salt>$<hash>" so the algorithm can change later.
export async function hashPassword(password) {
  const salt = randomBytes(16).toString('base64url');
  const hash = await scryptAsync(password, salt, KEY_LEN);
  return `scrypt$${salt}$${hash.toString('base64url')}`;
}

export async function verifyPassword(password, stored) {
  const [algo, salt, hash] = stored.split('$');
  if (algo !== 'scrypt' || !salt || !hash) return false;
  const expected = Buffer.from(hash, 'base64url');
  const actual = await scryptAsync(password, salt, expected.length);
  return timingSafeEqual(expected, actual);
}

// Session tokens: random, given to the client once, stored only as a hash.
export function newToken() {
  return randomBytes(32).toString('base64url');
}

export function hashToken(token) {
  return createHash('sha256').update(token).digest('hex');
}

export const newId = () => randomUUID();

// Tiny fixed-window rate limiter, per key (IP + route). In memory, which is
// fine for a single API instance.
export function rateLimiter({ limit, windowMs }) {
  const hits = new Map();
  return (key) => {
    const now = Date.now();
    const entry = hits.get(key);
    if (!entry || entry.reset < now) {
      hits.set(key, { count: 1, reset: now + windowMs });
      return true;
    }
    entry.count += 1;
    return entry.count <= limit;
  };
}
