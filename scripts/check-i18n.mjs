// Lists UI string keys that a locale is missing compared to English.
// Run: npm run check:i18n
import { readdirSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const dir = new URL('../src/i18n/locales/', import.meta.url);

async function load(file) {
  const code = readFileSync(fileURLToPath(new URL(file, dir)), 'utf8');
  return (await import(`data:text/javascript;base64,${Buffer.from(code).toString('base64')}`)).default;
}

function keys(node, prefix = '') {
  if (typeof node !== 'object' || node === null || Array.isArray(node)) return [prefix];
  return Object.entries(node).flatMap(([k, v]) => keys(v, prefix ? `${prefix}.${k}` : k));
}

const en = new Set(keys(await load('en.js')));
let failed = false;
for (const file of readdirSync(dir).filter((f) => f !== 'en.js')) {
  const other = new Set(keys(await load(file)));
  const missing = [...en].filter((k) => !other.has(k));
  const extra = [...other].filter((k) => !en.has(k));
  console.log(`${file}: ${missing.length} missing, ${extra.length} unknown`);
  if (missing.length) console.log(`  missing: ${missing.join(', ')}`);
  if (extra.length) console.log(`  unknown: ${extra.join(', ')}`);
  failed ||= missing.length > 0 || extra.length > 0;
}
process.exit(failed ? 1 : 0);
