import AsyncStorage from '@react-native-async-storage/async-storage';

// Versioned key prefix so a future data migration can run side by side.
const PREFIX = 'ak:v1:';

export async function getJSON(key, fallback = null) {
  try {
    const raw = await AsyncStorage.getItem(PREFIX + key);
    return raw == null ? fallback : JSON.parse(raw);
  } catch {
    return fallback;
  }
}

export async function setJSON(key, value) {
  try {
    await AsyncStorage.setItem(PREFIX + key, JSON.stringify(value));
  } catch {
    // Storage full or unavailable: the app keeps working in memory.
  }
}

export async function removeKey(key) {
  try {
    await AsyncStorage.removeItem(PREFIX + key);
  } catch {
    // ignore
  }
}
