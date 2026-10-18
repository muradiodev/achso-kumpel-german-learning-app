// Validates the learning content: unique ids, cloze words present in their
// sentence, grammar references pointing at real topics, no em dashes.
// Run: npm run check:content
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const dataDir = new URL('../src/data/', import.meta.url);

async function load(file) {
  const code = readFileSync(fileURLToPath(new URL(file, dataDir)), 'utf8');
  return import(`data:text/javascript;base64,${Buffer.from(code).toString('base64')}`);
}

const { WORDS } = await load('vocabulary.js');
const { SENTENCES } = await load('sentences.js');
const { GRAMMAR_TOPICS } = await load('grammar.js');
const { VERBS, PREP_VERBS } = await load('verbs.js');
const { WRITING_TASKS } = await load('writing.js');

const errors = [];

function unique(list, label) {
  const seen = new Set();
  for (const item of list) {
    if (seen.has(item.id)) errors.push(`${label}: duplicate id ${item.id}`);
    seen.add(item.id);
  }
}

unique(WORDS, 'words');
unique(SENTENCES, 'sentences');
unique(GRAMMAR_TOPICS, 'grammar');
unique(VERBS, 'verbs');
unique(PREP_VERBS, 'prep verbs');
unique(WRITING_TASKS, 'writing');

const topicIds = new Set(GRAMMAR_TOPICS.map((t) => t.id));
const used = new Set();
const boundary = (word) => new RegExp(`(^|[^\\p{L}])${word}([^\\p{L}]|$)`, 'u');

for (const s of SENTENCES) {
  if (s.cloze && !boundary(s.cloze).test(s.de)) errors.push(`${s.id}: cloze "${s.cloze}" not found in "${s.de}"`);
  for (const g of s.grammar) {
    if (!topicIds.has(g)) errors.push(`${s.id}: unknown grammar topic "${g}"`);
    used.add(g);
  }
}

const all = JSON.stringify({ WORDS, SENTENCES, GRAMMAR_TOPICS, VERBS, PREP_VERBS, WRITING_TASKS });
if (/[–—]/.test(all)) errors.push('content contains an en or em dash; use a hyphen');

const perTopic = Object.fromEntries(GRAMMAR_TOPICS.map((t) => [t.id, 0]));
for (const s of SENTENCES) for (const g of s.grammar) if (g in perTopic) perTopic[g] += 1;
const thin = Object.entries(perTopic)
  .filter(([, n]) => n < 3)
  .map(([id, n]) => `${id} (${n})`);
const withoutSentences = GRAMMAR_TOPICS.filter((t) => !used.has(t.id)).map((t) => t.id);

console.log(
  `words ${WORDS.length}, sentences ${SENTENCES.length}, grammar ${GRAMMAR_TOPICS.length}, verbs ${VERBS.length}, prep verbs ${PREP_VERBS.length}, writing ${WRITING_TASKS.length}`,
);
if (withoutSentences.length) errors.push(`topics without practice sentences: ${withoutSentences.join(', ')}`);
if (thin.length) console.log(`topics with fewer than 3 sentences: ${thin.join(', ')}`);
if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log('content ok');
