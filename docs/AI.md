# AI feedback: integration guide

Two planned features share one contract in `src/features/ai/ai-service.js`:

1. **Speech analysis.** The learner says a sentence. The model returns what it heard, corrections and a more natural version.
2. **Writing analysis.** The learner photographs a handwritten letter (or types it). The model reads it, checks it against the task's points, and returns corrections and better word choices.

The UI only calls `ai.analyzeSpeech(...)` and `ai.analyzeWriting(...)`. Until a provider is registered, `ai.isAvailable()` is `false` and the UI shows "coming soon".

## Rules

- **Never ship an API key in the app.** Anything in the bundle can be extracted. Put a small backend in between that holds the key, rate-limits per user and calls the model.
- Return the shapes documented in `ai-service.js` (`SpeechAnalysis`, `WritingAnalysis`, `Correction`). Explanations are keyed by language (`{ en, az }`) so they follow the user's translation language.
- Keep the tone of the app: encouraging, focused on what makes the German more natural, not on every tiny slip.

## Plugging in a provider

```js
// e.g. src/features/ai/providers/backend.js
export const backendProvider = {
  id: 'backend',
  isAvailable: () => true,
  async analyzeWriting({ imageUri, text, taskId, level, feedbackLang }) {
    const body = new FormData();
    if (imageUri) body.append('image', { uri: imageUri, name: 'letter.jpg', type: 'image/jpeg' });
    if (text) body.append('text', text);
    body.append('taskId', taskId ?? '');
    body.append('level', level ?? '');
    body.append('feedbackLang', feedbackLang);
    const res = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/ai/writing`, { method: 'POST', body });
    if (!res.ok) throw new Error('ai/failed');
    return res.json(); // WritingAnalysis
  },
  async analyzeSpeech({ audioUri, expectedText, feedbackLang }) {
    // same pattern, POST the recording to /ai/speech
  },
};

// at startup, e.g. in src/app/_layout.js
import { setAiProvider } from '@/features/ai/ai-service';
import { backendProvider } from '@/features/ai/providers/backend';
setAiProvider(backendProvider);
```

## Extra packages you will need

- Camera / photo picker for handwriting: `npx expo install expo-image-picker`
- Audio recording: `npx expo install expo-audio`

Both need a development build or EAS build, not just Expo Go, if they add native code beyond what Expo Go ships.
