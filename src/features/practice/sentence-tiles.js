import { SENTENCES } from '@/data';

import { normalize } from './answer-check';

// Turns a German sentence into word tiles for the "build the sentence"
// exercise, Duolingo style: the sentence's own words plus a few distractors.

const strip = (word) => word.replace(/^[^\p{L}\d]+|[^\p{L}\d]+$/gu, '');

export function sentenceWords(text) {
  return text.split(/\s+/).map(strip).filter(Boolean);
}

function shuffle(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// Distractors come from sentences of the same level, so they are plausible.
function distractors(sentence, count) {
  const own = new Set(sentenceWords(sentence.de).map((w) => w.toLowerCase()));
  const pool = new Set();
  for (const s of SENTENCES) {
    if (s.level !== sentence.level || s.id === sentence.id) continue;
    for (const w of sentenceWords(s.de)) {
      if (w.length > 2 && !own.has(w.toLowerCase())) pool.add(w);
    }
  }
  return shuffle([...pool]).slice(0, count);
}

// Returns tiles [{ id, text }] in random order. Longer sentences get fewer
// distractors so the bank stays readable on a phone.
export function buildTiles(sentence) {
  const words = sentenceWords(sentence.de);
  const extra = words.length <= 5 ? 3 : words.length <= 9 ? 2 : 0;
  const all = [...words, ...distractors(sentence, extra)];
  return shuffle(all.map((text, i) => ({ id: `t${i}`, text })));
}

// Position-by-position comparison. Returns { correct, wrong: Set(index) }.
export function checkOrder(answerWords, sentence) {
  const expected = sentenceWords(sentence.de).map(normalize);
  const given = answerWords.map(normalize);
  const wrong = new Set();
  given.forEach((w, i) => {
    if (w !== expected[i]) wrong.add(i);
  });
  return { correct: given.length === expected.length && wrong.size === 0, wrong };
}
