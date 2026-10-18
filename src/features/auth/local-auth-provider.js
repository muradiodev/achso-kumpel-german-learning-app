import * as Crypto from 'expo-crypto';

import { getJSON, removeKey, setJSON } from '@/lib/storage';

// Device-only auth. Users live in AsyncStorage with a salted SHA-256 password
// hash. This is a stand-in until a backend exists: it protects nothing against
// someone with the unlocked phone, and it never leaves the device.
// A remote provider (Supabase, Firebase, own API) only needs the same methods.

const USERS_KEY = 'auth:users';
const SESSION_KEY = 'auth:session';

export class AuthError extends Error {
  constructor(code) {
    super(code);
    this.code = code; // i18n key, e.g. 'auth.errors.emailTaken'
  }
}

const normalizeEmail = (email) => email.trim().toLowerCase();

function hashPassword(password, salt) {
  return Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, `${salt}:${password}`);
}

function toPublicUser(record) {
  const { passwordHash, salt, ...user } = record;
  return user;
}

export const localAuthProvider = {
  async getSession() {
    const session = await getJSON(SESSION_KEY);
    if (!session) return null;
    const users = await getJSON(USERS_KEY, {});
    const record = users[session.email];
    return record ? toPublicUser(record) : null;
  },

  async register({ email, password }) {
    const key = normalizeEmail(email);
    const users = await getJSON(USERS_KEY, {});
    if (users[key]) throw new AuthError('auth.errors.emailTaken');
    const salt = Crypto.randomUUID();
    const record = {
      id: Crypto.randomUUID(),
      email: key,
      salt,
      passwordHash: await hashPassword(password, salt),
      createdAt: new Date().toISOString(),
      profile: {},
    };
    users[key] = record;
    await setJSON(USERS_KEY, users);
    await setJSON(SESSION_KEY, { email: key });
    return toPublicUser(record);
  },

  async login({ email, password }) {
    const key = normalizeEmail(email);
    const users = await getJSON(USERS_KEY, {});
    const record = users[key];
    if (!record) throw new AuthError('auth.errors.invalidCredentials');
    const hash = await hashPassword(password, record.salt);
    if (hash !== record.passwordHash) throw new AuthError('auth.errors.invalidCredentials');
    await setJSON(SESSION_KEY, { email: key });
    return toPublicUser(record);
  },

  async logout() {
    await removeKey(SESSION_KEY);
  },

  async updateProfile(email, patch) {
    const users = await getJSON(USERS_KEY, {});
    const record = users[email];
    if (!record) throw new AuthError('auth.errors.generic');
    record.profile = { ...record.profile, ...patch };
    await setJSON(USERS_KEY, users);
    return toPublicUser(record);
  },
};
