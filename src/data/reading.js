// Reading texts about work and daily life in Germany, 30 per level from A1 to C2.
// The texts live in src/data/reading/<level>.js. Every sentence carries its own
// translation, so a word tapped while reading is saved together with the
// sentence it came from.
//
// Text: { id, level, tags, icon, title: { de, en }, paragraphs, questions }
//   paragraphs  [[ [de, en], [de, en] ], ...]  one array of sentences per paragraph
//   questions   [{ q, options, answer }]       German, answer = index in options
// IDs are stored in progress (progress.reading): never rename them, append new
// texts at the end of a level.
import { A1 } from './reading/a1';
import { A2 } from './reading/a2';
import { B1 } from './reading/b1';
import { B2 } from './reading/b2';
import { C1 } from './reading/c1';
import { C2 } from './reading/c2';

const toTr = ([de, en]) => ({ de, tr: { en } });

export const READINGS = [...A1, ...A2, ...B1, ...B2, ...C1, ...C2].map((text) => {
  const paragraphs = text.paragraphs.map((p) => p.map(toTr));
  const words = paragraphs.flat().reduce((n, s) => n + s.de.split(/\s+/).length, 0);
  return {
    ...text,
    paragraphs,
    words,
    // About 100 words a minute for a careful read in a foreign language.
    minutes: Math.max(1, Math.ceil(words / 100)),
  };
});

const BY_ID = new Map(READINGS.map((r) => [r.id, r]));
export const getReading = (id) => BY_ID.get(id) ?? null;
