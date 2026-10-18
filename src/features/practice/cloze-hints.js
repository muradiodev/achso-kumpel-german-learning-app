import { SENTENCES } from '@/data';

// Three choices for a gap: the right word and two wrong ones that look like
// they could fit (same capitalisation, similar ending), so the hint jogs the
// memory instead of giving the answer away.

const CLOZE_WORDS = [...new Set(SENTENCES.filter((s) => s.cloze).map((s) => s.cloze))];
const lower = (w) => w.toLocaleLowerCase('de');
const isUpper = (w) => w[0] !== lower(w[0]);

// Small seeded random, so a sentence always offers the same two wrong words.
function seeded(text) {
  let h = 2166136261;
  for (const ch of text) h = Math.imul(h ^ ch.charCodeAt(0), 16777619);
  return () => {
    h = Math.imul(h ^ (h >>> 15), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return ((h ^= h >>> 16) >>> 0) / 4294967296;
  };
}

function similarity(word, candidate) {
  let score = 0;
  if (isUpper(word) === isUpper(candidate)) score += 3;
  if (lower(word).slice(-2) === lower(candidate).slice(-2)) score += 2;
  else if (lower(word).slice(-1) === lower(candidate).slice(-1)) score += 1;
  if (Math.abs(word.length - candidate.length) <= 3) score += 1;
  return score;
}

export function clozeOptions(sentence) {
  const answer = sentence.cloze;
  const inSentence = new Set(sentence.de.split(/[^\p{L}]+/u).map(lower));
  const pool = CLOZE_WORDS.filter((w) => lower(w) !== lower(answer) && !inSentence.has(lower(w)))
    .map((w) => ({ w, score: similarity(answer, w) }))
    .sort((a, b) => b.score - a.score || a.w.localeCompare(b.w))
    .slice(0, 12)
    .map((c) => c.w);
  const rnd = seeded(sentence.id);
  const wrong = [];
  while (wrong.length < 2 && pool.length) wrong.push(pool.splice(Math.floor(rnd() * pool.length), 1)[0]);
  // Shuffle so the right word is not always in the same place.
  const options = [answer, ...wrong];
  for (let i = options.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }
  return options;
}
