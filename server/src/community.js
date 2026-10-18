// What other learners can see about a member. Built from the profile and the
// synced progress copy. Email, phone and birth date are never part of it.

const DAY = 864e5;
const dayKey = (ms) => new Date(ms).toISOString().slice(0, 10);
// Same rule as the app (src/features/progress/stats.js).
const MASTERED_INTERVAL_DAYS = 7;
const str = (v) => (typeof v === 'string' ? v : '');

export function memberStats(data, now = Date.now()) {
  const srs = Object.values(data?.srs ?? {});
  const activity = data?.activity ?? {};
  const grammar = Object.values(data?.grammar ?? {});
  const count = (key) => (Number.isFinite(activity[key]) ? activity[key] : 0);

  const week = [];
  for (let i = 6; i >= 0; i -= 1) {
    const key = dayKey(now - i * DAY);
    week.push({ key, count: count(key) });
  }
  // Days in a row with practice, ending today or (not yet practised today) yesterday.
  let streak = 0;
  for (let i = count(dayKey(now)) > 0 ? 0 : 1; count(dayKey(now - i * DAY)) > 0; i += 1) streak += 1;
  const days = Object.keys(activity)
    .filter((k) => count(k) > 0)
    .sort();

  return {
    seen: srs.length,
    mastered: srs.filter((s) => s?.interval >= MASTERED_INTERVAL_DAYS).length,
    reviews: days.reduce((sum, k) => sum + count(k), 0),
    weekReviews: week.reduce((sum, d) => sum + d.count, 0),
    activeDays: week.filter((d) => d.count > 0).length,
    streak,
    grammarLearned: grammar.filter((s) => s === 'learned').length,
    grammarLearning: grammar.filter((s) => s === 'learning').length,
    wordsSaved: Object.keys(data?.myWords ?? {}).length,
    lastActiveDay: days.at(-1) ?? null,
    week,
  };
}

export function publicMember(row, now) {
  const p = row.profile ?? {};
  const { week, ...stats } = memberStats(row.data, now);
  return {
    id: row.id,
    firstName: str(p.firstName),
    lastName: str(p.lastName),
    avatarId: str(p.avatarId),
    profession: str(p.profession),
    levels: Array.isArray(p.levels) ? p.levels : [],
    joinedAt: Number(row.created_at),
    stats,
    week,
  };
}
