import { SENTENCES, VERBS, WORDS } from '@/data';
import { isDue, isWeak, weakness } from '@/features/srs/scheduler';

// A practice item is { key, kind, ref }. `key` is the SRS key, "<kind>|<id>",
// so the same sentence can be scheduled separately as recall and as cloze.
const makeItem = (kind, ref) => ({ key: `${kind}|${ref.id}`, kind, ref });

function shuffle(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// Round-robin across levels so a B1 + C1 mix does not end up all B1.
function interleaveByLevel(items) {
  const buckets = new Map();
  for (const item of shuffle(items)) {
    const level = item.ref.level ?? 'any';
    if (!buckets.has(level)) buckets.set(level, []);
    buckets.get(level).push(item);
  }
  const queues = [...buckets.values()];
  const out = [];
  while (queues.some((q) => q.length)) {
    for (const q of queues) if (q.length) out.push(q.shift());
  }
  return out;
}

const inLevels = (levels) => (entry) => levels.includes(entry.level);

function activeTopics(grammarStatus, topics) {
  if (topics?.length) return new Set(topics);
  return new Set(
    Object.entries(grammarStatus)
      .filter(([, status]) => status === 'learning' || status === 'learned')
      .map(([id]) => id),
  );
}

const WORD_BY_ID = new Map(WORDS.map((w) => [w.id, w]));

// topics: explicit grammar topic ids chosen by the learner (overrides levels)
export function buildPool({ mode, levels, grammarStatus = {}, topics, myWords = {} }) {
  const words = WORDS.filter(inLevels(levels));
  const sentences = SENTENCES.filter(inLevels(levels));
  const recall = (list) => list.map((s) => makeItem('recall', s));
  const cloze = (list) => list.filter((s) => s.cloze).map((s) => makeItem('cloze', s));

  switch (mode) {
    case 'words':
      return words.map((w) => makeItem('word', w));
    case 'sentences':
      return recall(sentences);
    case 'cloze':
      return cloze(sentences);
    case 'work':
    case 'everyday': {
      const tagged = sentences.filter((s) => s.tags.includes(mode));
      return [...recall(tagged), ...cloze(tagged)];
    }
    case 'grammar': {
      const chosen = activeTopics(grammarStatus, topics);
      // Explicitly chosen topics ignore the level filter: the learner asked for them.
      const source = topics?.length ? SENTENCES : sentences;
      const matching = source.filter((s) => s.grammar?.some((g) => chosen.has(g)));
      return [...recall(matching), ...cloze(matching)];
    }
    case 'mine':
      return Object.values(myWords).map((w) =>
        w.wordId && WORD_BY_ID.has(w.wordId)
          ? makeItem('word', WORD_BY_ID.get(w.wordId))
          : makeItem('myword', { id: w.id, de: w.de, level: 'mine', context: w.context }),
      );
    case 'aux':
      return VERBS.filter((v) => v.p2).map((v) => makeItem('aux', v));
    case 'forms':
      return VERBS.filter((v) => v.type !== 'regular' && v.p2).map((v) => makeItem('forms', v));
    case 'weak':
    case 'mixed':
    default:
      return [...words.map((w) => makeItem('word', w)), ...recall(sentences), ...cloze(sentences)];
  }
}

export function buildSession({
  mode,
  levels,
  srs,
  grammarStatus,
  topics,
  myWords,
  size = 15,
  newLimit = 8,
  now = Date.now(),
}) {
  const pool = buildPool({ mode, levels, grammarStatus, topics, myWords });

  if (mode === 'weak') {
    return pool
      .filter((item) => isWeak(srs[item.key]))
      .sort((a, b) => weakness(srs[b.key]) - weakness(srs[a.key]))
      .slice(0, size);
  }

  const due = pool
    .filter((item) => isDue(srs[item.key], now))
    .sort((a, b) => weakness(srs[b.key]) - weakness(srs[a.key]));
  const fresh = interleaveByLevel(pool.filter((item) => !srs[item.key]));
  const seenNotDue = pool
    .filter((item) => srs[item.key] && !isDue(srs[item.key], now))
    .sort((a, b) => srs[a.key].last - srs[b.key].last);

  const session = due.slice(0, size);
  session.push(...fresh.slice(0, Math.min(newLimit, size - session.length)));
  // Never leave the learner with an empty session: top up with the oldest reviews.
  if (session.length < size) session.push(...seenNotDue.slice(0, size - session.length));
  return shuffle(session);
}

export function countDue({ levels, srs, now = Date.now() }) {
  const pool = buildPool({ mode: 'mixed', levels });
  let due = 0;
  let fresh = 0;
  for (const item of pool) {
    const state = srs[item.key];
    if (!state) fresh += 1;
    else if (isDue(state, now)) due += 1;
  }
  return { due, fresh };
}

export function countWeak(srs) {
  return Object.values(srs).filter(isWeak).length;
}
