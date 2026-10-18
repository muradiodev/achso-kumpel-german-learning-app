// HTTP client for the AchsoKumpel API (server/). Enabled when
// EXPO_PUBLIC_API_URL is set at build time; otherwise the app stays local-only.
export const API_URL = process.env.EXPO_PUBLIC_API_URL || null;

export class ApiError extends Error {
  constructor(code, status) {
    super(code);
    this.code = code; // i18n key when the server sends one, e.g. 'auth.errors.emailTaken'
    this.status = status; // 0 = network error
  }
}

export async function api(path, { method = 'GET', body, token } = {}) {
  let res;
  try {
    res = await fetch(`${API_URL}${path}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: body ? JSON.stringify(body) : undefined,
    });
  } catch {
    throw new ApiError('auth.errors.network', 0);
  }
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new ApiError(data.error ?? 'auth.errors.generic', res.status);
  return data;
}
