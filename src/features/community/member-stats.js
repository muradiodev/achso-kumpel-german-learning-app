// The numbers the ranking uses, computed from a progress copy. Mirrors
// server/src/community.js so your own row can update the moment you practise,
// before the next sync reaches the server.
import { MASTERED_INTERVAL_DAYS } from '@/features/progress/stats';

const DAY = 864e5;
const dayKey = (ms) => new Date(ms).toISOString().slice(0, 10);

export function rankStats({ srs = {}, activity = {} }, now = Date.now()) {
  const count = (key) => (Number.isFinite(activity[key]) ? activity[key] : 0);
  let weekReviews = 0;
  for (let i = 0; i < 7; i += 1) weekReviews += count(dayKey(now - i * DAY));
  let streak = 0;
  for (let i = count(dayKey(now)) > 0 ? 0 : 1; count(dayKey(now - i * DAY)) > 0; i += 1) streak += 1;
  const states = Object.values(srs);
  return {
    weekReviews,
    streak,
    mastered: states.filter((s) => s?.interval >= MASTERED_INTERVAL_DAYS).length,
  };
}
