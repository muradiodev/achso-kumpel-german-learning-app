import { Platform } from 'react-native';

import appConfig from '../../../app.json';

// The version this bundle was built with. Imported from app.json directly:
// expo-constants can serve a stale value from the bundler cache.
export const APP_VERSION = appConfig.expo.version;

// Where the latest release is described (see scripts/write-version.mjs).
// Web reads it from its own origin, so a new deploy is detected automatically.
// Native apps need EXPO_PUBLIC_VERSION_URL, e.g. https://your-domain/version.json.
export function manifestUrl() {
  // The web app lives under a base path (app.json experiments.baseUrl, e.g. /app).
  if (Platform.OS === 'web') return `${process.env.EXPO_BASE_URL ?? ''}/version.json`;
  return process.env.EXPO_PUBLIC_VERSION_URL || null;
}

// Semver-ish compare of "major.minor.patch". Returns -1, 0 or 1.
export function compareVersions(a, b) {
  const pa = String(a)
    .split('.')
    .map((n) => parseInt(n, 10) || 0);
  const pb = String(b)
    .split('.')
    .map((n) => parseInt(n, 10) || 0);
  for (let i = 0; i < 3; i += 1) {
    if ((pa[i] ?? 0) !== (pb[i] ?? 0)) return (pa[i] ?? 0) > (pb[i] ?? 0) ? 1 : -1;
  }
  return 0;
}
