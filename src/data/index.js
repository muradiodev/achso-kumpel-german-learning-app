// Single entry point for learning content. Screens import from here, never
// from the individual files, so the source can later move to a remote API or
// a downloaded content pack without touching the UI.
import { WORDS as OWN_WORDS, slug, toWords } from './vocabulary';
import { WF_DECK, WF_DICTIONARY } from './wordfeather';

export { LEVELS } from './levels';
export { SENTENCES } from './sentences';
export { GRAMMAR_GROUPS, GRAMMAR_TOPICS, getGrammarTopic } from './grammar';
export { VERBS, PREP_VERBS } from './verbs';
export { WRITING_TASKS, WRITING_TYPES, getWritingTask } from './writing';
export { READINGS, getReading } from './reading';
export { CHANGELOG } from './changelog';

// Our own words first, then the Wordfeather deck (CC BY-NC, see wordfeather.js).
export const WORDS = [...OWN_WORDS, ...toWords(WF_DECK, 'wordfeather')];

// Words that are only looked up when tapped in a text, never practised.
export const DICTIONARY = WF_DICTIONARY.map(([de, en, plural]) => ({
  id: `d-${slug(de)}`,
  de,
  tr: { en },
  plural: plural ?? null,
}));
