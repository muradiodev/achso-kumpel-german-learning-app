import { SENTENCES, VERBS, WORDS } from '@/data';

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
  let data = { srs: {}, grammar: {}, writing: {}, activity: {}, ...raw };
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
  const orphaned = Object.keys(data.srs).filter((key) => !known.has(key));
  if (orphaned.length) {
    const srs = { ...data.srs };
    for (const key of orphaned) delete srs[key];
    data = { ...data, srs };
    notes.push({ key: 'updates.retired', params: { count: orphaned.length } });
  }

  return { data: { ...data, schema: PROGRESS_SCHEMA }, notes, readOnly: false };
}
