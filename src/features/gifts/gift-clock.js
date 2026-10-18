import { DAILY_GIFTS, MILESTONE_GIFTS } from '@/data/motivation';

// A new gift unlocks every morning at 08:00 local time. Opening the app
// later in the day is fine: the gift is waiting. Before 08:00 the previous
// day's gift is still "today's".
export const UNLOCK_HOUR = 8;

const pad = (n) => String(n).padStart(2, '0');
const localKey = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;

export function giftDayKey(now = new Date()) {
  const d = new Date(now);
  if (d.getHours() < UNLOCK_HOUR) d.setDate(d.getDate() - 1);
  return localKey(d);
}

export function nextUnlockAt(now = new Date()) {
  const next = new Date(now);
  next.setHours(UNLOCK_HOUR, 0, 0, 0);
  if (now.getHours() >= UNLOCK_HOUR) next.setDate(next.getDate() + 1);
  return next;
}

// Journey goals shown as "Day 3 of 14", then 30, 60, 100.
const GOALS = [14, 30, 60, 100];
export function journeyGoal(day) {
  return GOALS.find((goal) => day <= goal) ?? Math.ceil(day / 100) * 100;
}

// Deterministic per-user order, so two learners do not see the same sequence
// but one learner's order never changes between sessions.
function seededOrder(seed, length) {
  let h = 2166136261;
  for (const ch of String(seed)) h = Math.imul(h ^ ch.charCodeAt(0), 16777619);
  const order = Array.from({ length }, (_, i) => i);
  for (let i = length - 1; i > 0; i -= 1) {
    h = Math.imul(h ^ (h >>> 15), 2246822507) >>> 0;
    const j = h % (i + 1);
    [order[i], order[j]] = [order[j], order[i]];
  }
  return order;
}

const ALL_GIFTS = new Map([...DAILY_GIFTS, ...Object.values(MILESTONE_GIFTS)].map((gift) => [gift.id, gift]));
export const getGift = (id) => ALL_GIFTS.get(id);

// Picks the gift for the learner's next journey day.
export function chooseGift(unlocked, seed) {
  const day = Object.keys(unlocked).length + 1;
  if (MILESTONE_GIFTS[day]) return MILESTONE_GIFTS[day];
  const used = new Set(Object.values(unlocked).map((u) => u.id));
  const order = seededOrder(seed, DAILY_GIFTS.length);
  const fresh = order.map((i) => DAILY_GIFTS[i]).find((gift) => !used.has(gift.id));
  // All daily gifts seen: start the cycle again in the same order.
  return fresh ?? DAILY_GIFTS[order[(day - 1) % DAILY_GIFTS.length]];
}
