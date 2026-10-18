import { api } from '@/lib/api';
import { getJSON, removeKey, setJSON } from '@/lib/storage';

// Accounts on the AchsoKumpel API. Same methods as the local provider, so
// auth-context can use either. The session (token + last known user) is
// cached on the device, which keeps the app usable offline.
const SESSION_KEY = 'auth:remote';

export async function getAuthToken() {
  return (await getJSON(SESSION_KEY))?.token ?? null;
}

async function save(token, user) {
  await setJSON(SESSION_KEY, { token, user });
  return user;
}

export const remoteAuthProvider = {
  async getSession() {
    const session = await getJSON(SESSION_KEY);
    if (!session?.token) return null;
    try {
      const { user } = await api('/v1/me', { token: session.token });
      return save(session.token, user);
    } catch (error) {
      if (error.status === 401) {
        await removeKey(SESSION_KEY);
        return null;
      }
      return session.user; // offline: keep going with the cached user
    }
  },

  async register({ email, password }) {
    const { token, user } = await api('/v1/auth/register', { method: 'POST', body: { email, password } });
    return save(token, user);
  },

  async login({ email, password }) {
    const { token, user } = await api('/v1/auth/login', { method: 'POST', body: { email, password } });
    return save(token, user);
  },

  async logout() {
    const token = await getAuthToken();
    if (token) await api('/v1/auth/logout', { method: 'POST', token }).catch(() => {});
    await removeKey(SESSION_KEY);
  },

  async updateProfile(_email, patch) {
    const token = await getAuthToken();
    const { user } = await api('/v1/me/profile', { method: 'PATCH', body: patch, token });
    return save(token, user);
  },
};
