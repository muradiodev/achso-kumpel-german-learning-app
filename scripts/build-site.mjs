// Assembles the deployable website in site/:
//   site/            landing page (landing/)
//   site/app/        the Expo web app (dist/, built with experiments.baseUrl = /app)
// Run through `npm run build:site`, which builds the web app first.
import { cpSync, existsSync, rmSync } from 'node:fs';

const root = new URL('../', import.meta.url);
const site = new URL('site/', root);
const dist = new URL('dist/', root);

if (!existsSync(dist)) {
  console.error('dist/ is missing. Run npm run build:web first.');
  process.exit(1);
}

rmSync(site, { recursive: true, force: true });
cpSync(new URL('landing/', root), site, { recursive: true });
cpSync(dist, new URL('app/', site), { recursive: true });
console.log('site/ ready: landing at /, app at /app/');
