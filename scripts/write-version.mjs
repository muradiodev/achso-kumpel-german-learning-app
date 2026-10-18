// Writes public/version.json, the release manifest the app polls to detect
// new versions. Single source of truth is app.json:
//   expo.version                  latest version
//   expo.extra.minSupportedVersion older versions must update (data changed)
//   expo.extra.apkUrl             where Android users download the new APK
// Runs automatically before build:web and build:apk.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';

const root = new URL('../', import.meta.url);
const { expo } = JSON.parse(readFileSync(new URL('app.json', root), 'utf8'));

const manifest = {
  version: expo.version,
  minSupportedVersion: expo.extra?.minSupportedVersion ?? expo.version,
  releasedAt: new Date().toISOString(),
  android: { apkUrl: expo.extra?.apkUrl || null },
};

mkdirSync(new URL('public/', root), { recursive: true });
writeFileSync(new URL('public/version.json', root), `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`public/version.json → ${manifest.version} (min ${manifest.minSupportedVersion})`);
