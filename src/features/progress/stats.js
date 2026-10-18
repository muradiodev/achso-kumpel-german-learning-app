import { GRAMMAR_TOPICS, SENTENCES, WORDS } from '@/data';
import { isWeak } from '@/features/srs/scheduler';

// An item counts as "mastered" once its next review is a week or more away.
export const MASTERED_INTERVAL_DAYS = 7;

const DAY = 24 * 3600 * 1000;
const dayKey = (ms) => new Date(ms).toISOString().slice(0, 10);

function keysForLevel(level) {
  const keys = WORDS.filter((w) => w.level === level).map((w) => `word|${w.id}`);
  for (const s of SENTENCES) {
    if (s.level !== level) continue;
    keys.push(`recall|${s.id}`);
    if (s.cloze) keys.push(`cloze|${s.id}`);
  }
  return keys;
}

export function computeStats({ levels, srs, activity, grammar, now = Date.now() }) {
  const perLevel = levels.map((level) => {
    const keys = keysForLevel(level);
    let seen = 0;
    let mastered = 0;
    for (const key of keys) {
      const state = srs[key];
      if (!state) continue;
      seen += 1;
      if (state.interval >= MASTERED_INTERVAL_DAYS) mastered += 1;
    }
    return { level, total: keys.length, seen, mastered, practising: seen - mastered };
  });

  const totals = perLevel.reduce(
    (acc, l) => ({
      total: acc.total + l.total,
      seen: acc.seen + l.seen,
      mastered: acc.mastered + l.mastered,
    }),
    { total: 0, seen: 0, mastered: 0 },
  );

  const week = [];
  for (let i = 6; i >= 0; i -= 1) {
    const ms = now - i * DAY;
    week.push({ key: dayKey(ms), date: new Date(ms), count: activity[dayKey(ms)] ?? 0 });
  }

  const statuses = GRAMMAR_TOPICS.map((topic) => grammar[topic.id]).filter(Boolean);
  const learned = statuses.filter((s) => s === 'learned').length;
  const learning = statuses.filter((s) => s === 'learning').length;

  return {
    perLevel,
    totals,
    week,
    activeDays: week.filter((d) => d.count > 0).length,
    weekTotal: week.reduce((sum, d) => sum + d.count, 0),
    weak: Object.values(srs).filter(isWeak).length,
    grammar: {
      total: GRAMMAR_TOPICS.length,
      learned,
      learning,
      notYet: GRAMMAR_TOPICS.length - learned - learning,
    },
  };
}
