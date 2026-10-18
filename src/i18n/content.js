// Learning content is German + translations keyed by language code:
//   { de: 'die Wohnung', tr: { en: 'apartment', az: 'mənzil' } }
// Today only English is filled in. Adding Azerbaijani (or any language) means
// adding `az` keys to the data files and flipping `ready` below. No code changes.
export const CONTENT_LANGUAGES = [
  { code: 'en', ready: true },
  { code: 'az', ready: false },
];

export function tr(map, lang = 'en') {
  if (!map) return '';
  if (typeof map === 'string') return map;
  return map[lang] ?? map.en ?? '';
}
