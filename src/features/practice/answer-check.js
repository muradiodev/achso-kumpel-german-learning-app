// Lenient comparison: case, punctuation and spelling variants (ae/ä, ss/ß)
// are not what this app is about. Word choice and order are.
export function normalize(text) {
  return text
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/[.,!?;:"'„“”‚‘’()\-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export const isSameAnswer = (given, expected) => normalize(given) === normalize(expected);

// Share of expected words that appear in the given answer, 0..1.
export function wordOverlap(given, expected) {
  const target = normalize(expected).split(' ').filter(Boolean);
  if (!target.length) return 0;
  const bag = normalize(given).split(' ');
  return target.filter((word) => bag.includes(word)).length / target.length;
}
