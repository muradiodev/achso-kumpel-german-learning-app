// AI feedback contract. The UI only talks to this module, so plugging in a
// real provider later means writing one object with the methods below and
// passing it to `setAiProvider` at startup. See docs/AI.md.
//
// Never put an API key in the app bundle. A provider should call your own
// backend, which holds the key and talks to the model.

/**
 * @typedef {Object} Correction
 * @property {string} original     Text the learner wrote or said.
 * @property {string} suggestion   Better German for it.
 * @property {'grammar'|'word-choice'|'word-order'|'spelling'|'style'|'pronunciation'} type
 * @property {Object<string,string>} explanation  Keyed by language code: { en, az }.
 */

/**
 * @typedef {Object} SpeechAnalysis
 * @property {string} transcript       What the model heard.
 * @property {number} score            0..100, how close to natural German.
 * @property {Correction[]} corrections
 * @property {string} [improvedSentence]
 */

/**
 * @typedef {Object} WritingAnalysis
 * @property {string} text             Typed text, or text read from a photo.
 * @property {number} score            0..100.
 * @property {string} [estimatedLevel] 'B1', 'B2', ...
 * @property {Correction[]} corrections
 * @property {{ point: string, covered: boolean }[]} [taskPoints] telc Leitpunkte coverage.
 * @property {string} [improvedText]
 */

/**
 * @typedef {Object} AiProvider
 * @property {string} id
 * @property {() => boolean} isAvailable
 * @property {(input: { audioUri: string, expectedText?: string, feedbackLang: string }) => Promise<SpeechAnalysis>} analyzeSpeech
 * @property {(input: { text?: string, imageUri?: string, taskId?: string, level?: string, feedbackLang: string }) => Promise<WritingAnalysis>} analyzeWriting
 */

class AiUnavailableError extends Error {
  constructor() {
    super('AI feedback is not configured yet.');
    this.code = 'ai/unavailable';
  }
}

/** @type {AiProvider} */
const unavailableProvider = {
  id: 'none',
  isAvailable: () => false,
  analyzeSpeech: async () => {
    throw new AiUnavailableError();
  },
  analyzeWriting: async () => {
    throw new AiUnavailableError();
  },
};

let provider = unavailableProvider;

/** @param {AiProvider} next */
export function setAiProvider(next) {
  provider = next ?? unavailableProvider;
}

export const ai = {
  isAvailable: () => provider.isAvailable(),
  analyzeSpeech: (input) => provider.analyzeSpeech(input),
  analyzeWriting: (input) => provider.analyzeWriting(input),
};
