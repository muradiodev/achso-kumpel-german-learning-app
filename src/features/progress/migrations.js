import { GRAMMAR_TOPICS, SENTENCES, VERBS, WORDS } from '@/data';

// Saved progress carries a `schema` number. When a release changes the shape
// of progress data, bump PROGRESS_SCHEMA and add a step to MIGRATIONS that
// upgrades from the previous schema. Each step may return a note for the
// "What's new" sheet so the learner knows what changed in their data.
export const PROGRESS_SCHEMA = 1;

// MIGRATIONS[n] upgrades schema n to n + 1: (data) => ({ data, note? })
// note = { key: 'i18n.key', params: {} }
const MIGRATIONS = {};

function knownItemKeys() {
  const keys = new Set();
  for (const w of WORDS) keys.add(`word|${w.id}`);
  for (const s of SENTENCES) {
    keys.add(`recall|${s.id}`);
    if (s.cloze) keys.add(`cloze|${s.id}`);
  }
  for (const v of VERBS) {
    keys.add(`aux|${v.id}`);
    keys.add(`forms|${v.id}`);
  }
  return keys;
}

export function migrateProgress(raw) {
  let data = {
    srs: {},
    grammar: {},
    writing: {},
    activity: {},
    myWords: {},
    grammarUse: {},
    gifts: {},
    reading: {},
    knownVerbs: {},
    ...raw,
  };
  let schema = data.schema ?? 1;
  const notes = [];

  if (schema > PROGRESS_SCHEMA) {
    // Saved by a newer app version (e.g. the APK is older than the web app).
    // Keep the data untouched; the update notice asks the learner to update.
    return { data, notes: [{ key: 'updates.newerData' }], readOnly: true };
  }

  while (schema < PROGRESS_SCHEMA) {
    const step = MIGRATIONS[schema];
    if (step) {
      const result = step(data);
      data = result.data;
      if (result.note) notes.push(result.note);
    }
    schema += 1;
  }

  // Content that was removed in a release leaves orphaned review entries.
  const known = knownItemKeys();
  // Personal words have their own review entries.
  for (const id of Object.keys(data.myWords)) known.add(`myword|${id}`);
  const orphaned = Object.keys(data.srs).filter((key) => !known.has(key));
  if (orphaned.length) {
    const srs = { ...data.srs };
    for (const key of orphaned) delete srs[key];
    data = { ...data, srs };
    notes.push({ key: 'updates.retired', params: { count: orphaned.length } });
  }

  // Grammar topics that were merged or renamed in a release.
  const topicIds = new Set(GRAMMAR_TOPICS.map((t) => t.id));
  const staleTopics = Object.keys(data.grammar).filter((id) => !topicIds.has(id));
  if (staleTopics.length) {
    const grammar = { ...data.grammar };
    const grammarUse = { ...data.grammarUse };
    for (const id of staleTopics) {
      delete grammar[id];
      delete grammarUse[id];
    }
    data = { ...data, grammar, grammarUse };
    notes.push({ key: 'updates.grammarRetired', params: { count: staleTopics.length } });
  }

  return { data: { ...data, schema: PROGRESS_SCHEMA }, notes, readOnly: false };
}
