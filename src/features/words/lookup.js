import { VERBS, WORDS } from '@/data';

// Finds a dictionary entry for a word tapped inside a sentence. Matching is
// deliberately simple: exact headword, noun without article, verb infinitive,
// and a few common verb endings (arbeite → arbeiten). Anything else is saved
// as a personal word together with the sentence it came from.

const ARTICLE = /^(der|die|das)\s+/;
const lower = (s) => s.toLowerCase();

// Dictionary entries: vocabulary plus verbs (verbs carry no article or plural).
const ENTRIES = [...WORDS, ...VERBS.map((v) => ({ id: v.id, de: v.inf, tr: v.tr, plural: null }))];
export const ENTRY_BY_ID = new Map(ENTRIES.map((e) => [e.id, e]));

const index = new Map();
for (const v of VERBS) {
  // Past forms point back to the verb: "ging" → gehen, "gefunden" → finden.
  index.set(lower(v.prat.split(' ')[0]), ENTRY_BY_ID.get(v.id));
  index.set(lower(v.p2), ENTRY_BY_ID.get(v.id));
}
for (const w of ENTRIES) {
  const head = lower(w.de);
  const bare = head.replace(ARTICLE, '');
  const add = (key) => {
    if (key && !index.has(key)) index.set(key, w);
  };
  add(head);
  add(bare);
  // "sich kümmern um" → "kümmern", "zuständig für" → "zuständig"
  const parts = bare.split(' ').filter((p) => p !== 'sich');
  if (parts.length > 1) add(parts[0]);
  if (w.plural) add(lower(w.plural).replace(ARTICLE, ''));
}

function candidates(token) {
  const t = lower(token);
  const out = [t];
  if (t.endsWith('st')) out.push(`${t.slice(0, -2)}en`);
  if (t.endsWith('t')) out.push(`${t.slice(0, -1)}en`);
  if (t.endsWith('e')) out.push(`${t}n`, `${t.slice(0, -1)}en`);
  if (!t.endsWith('en')) out.push(`${t}en`);
  return out;
}

export function lookupWord(token) {
  for (const key of candidates(token)) {
    const hit = index.get(key);
    if (hit) return hit;
  }
  return null;
}

const slug = (text) =>
  lower(text)
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

// The id a tapped word is stored under in My words.
export function myWordId(token) {
  const hit = lookupWord(token);
  return hit ? hit.id : `mw-${slug(token)}`;
}

// Splits a sentence into word and non-word pieces, keeping punctuation.
export function tokenize(text) {
  return text
    .split(/([\p{L}][\p{L}\-']*)/u)
    .filter(Boolean)
    .map((piece) => ({
      text: piece,
      isWord: /^[\p{L}]/u.test(piece),
    }));
}
