import * as Speech from 'expo-speech';

// Text-to-speech with the device's German voice. Works offline when the
// voice is installed (Android: Settings > Text-to-speech > German).
export function speakGerman(text, { rate = 0.95 } = {}) {
  Speech.stop();
  Speech.speak(text, { language: 'de-DE', rate });
}

export function stopSpeaking() {
  Speech.stop();
}
