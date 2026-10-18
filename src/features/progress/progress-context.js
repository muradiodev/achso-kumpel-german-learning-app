import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { AppState } from 'react-native';

import { SENTENCES } from '@/data';
import { useAuth } from '@/features/auth/auth-context';
import { getAuthToken } from '@/features/auth/remote-auth-provider';
import { PROGRESS_SCHEMA, migrateProgress } from '@/features/progress/migrations';
import { RATING, review } from '@/features/srs/scheduler';
import { API_URL, api } from '@/lib/api';
import { getJSON, setJSON } from '@/lib/storage';

// Learning progress, stored per user:
//   srs:      { "<kind>|<id>": schedulerState }
//   grammar:  { topicId: 'new' | 'learning' | 'learned' }
//   writing:  { taskId: { copied: number } }
//   activity: { 'YYYY-MM-DD': reviewsThatDay }
//   myWords:  { id: { de, wordId, context, addedAt } }  words the learner saved
//   grammarUse: { topicId: { practised, right } }      sentences practised per topic
//   gifts:    { 'YYYY-MM-DD': { id, unlockedAt, seen } } daily motivation gifts
//   schema:   see migrations.js
const EMPTY = {
  schema: PROGRESS_SCHEMA,
  srs: {},
  grammar: {},
  writing: {},
  activity: {},
  myWords: {},
  grammarUse: {},
  gifts: {},
};

// "recall|s-b1-04" → grammar topics of that sentence, to count grammar use.
const SENTENCE_TOPICS = new Map(SENTENCES.map((s) => [s.id, s.grammar]));
function topicsForKey(key) {
  const [kind, id] = key.split('|');
  if (kind !== 'recall' && kind !== 'cloze') return [];
  return SENTENCE_TOPICS.get(id) ?? [];
}

const ProgressContext = createContext(null);

const todayKey = () => new Date().toISOString().slice(0, 10);

export function ProgressProvider({ children }) {
  const { user } = useAuth();
  const userId = user?.id;
  const [state, setState] = useState({ loaded: false, data: EMPTY, notes: [], readOnly: false });
  const saveTimer = useRef(null);
  const syncTimer = useRef(null);
  const latest = useRef(state);
  latest.current = state;

  useEffect(() => {
    let alive = true;
    if (!userId) {
      setState({ loaded: false, data: EMPTY, notes: [], readOnly: false });
      return undefined;
    }
    getJSON(`progress:${userId}`, EMPTY).then(async (saved) => {
      if (!alive) return;
      const local = migrateProgress(saved);
      setState({ loaded: true, data: local.data, notes: local.notes, readOnly: local.readOnly });
      if (!API_URL) return;
      // With an account on the server, a newer copy from another device wins.
      try {
        const remote = await api('/v1/progress', { token: await getAuthToken() });
        if (!alive || !remote.data || remote.updatedAt <= (saved?.updatedAt ?? 0)) return;
        const merged = migrateProgress(remote.data);
        setState({
          loaded: true,
          data: { ...merged.data, updatedAt: remote.updatedAt },
          notes: merged.notes,
          readOnly: merged.readOnly,
        });
      } catch {
        // Offline: keep the local copy; it syncs on the next change.
      }
    });
    return () => {
      alive = false;
    };
  }, [userId]);

  // Debounced write so a fast review session does not hammer storage.
  // Data saved by a newer app version is never overwritten by an older one.
  useEffect(() => {
    if (!state.loaded || !userId || state.readOnly) return undefined;
    clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => setJSON(`progress:${userId}`, state.data), 400);
    return () => clearTimeout(saveTimer.current);
  }, [state, userId]);

  // Push changes to the server a few seconds after the last edit. Only copies
  // that changed on this device carry an updatedAt.
  useEffect(() => {
    if (!API_URL || !state.loaded || !userId || state.readOnly || !state.data.updatedAt) return undefined;
    clearTimeout(syncTimer.current);
    syncTimer.current = setTimeout(async () => {
      try {
        const res = await api('/v1/progress', {
          method: 'PUT',
          token: await getAuthToken(),
          body: { data: state.data, updatedAt: state.data.updatedAt },
        });
        if (res.updatedAt > state.data.updatedAt) {
          setState((prev) => ({ ...prev, data: { ...migrateProgress(res.data).data, updatedAt: res.updatedAt } }));
        }
      } catch {
        // Offline or server down: retried after the next change.
      }
    }, 3000);
    return () => clearTimeout(syncTimer.current);
  }, [state, userId]);

  // Coming back to the app (another tab, phone unlocked): take a newer copy
  // from the server, or send ours if a push failed while offline.
  useEffect(() => {
    if (!API_URL || !userId) return undefined;
    const sub = AppState.addEventListener('change', async (next) => {
      const current = latest.current;
      if (next !== 'active' || !current.loaded || current.readOnly) return;
      try {
        const token = await getAuthToken();
        const remote = await api('/v1/progress', { token });
        const localAt = current.data.updatedAt ?? 0;
        if (remote.data && remote.updatedAt > localAt) {
          const merged = migrateProgress(remote.data);
          setState((prev) =>
            (prev.data.updatedAt ?? 0) >= remote.updatedAt
              ? prev
              : { ...prev, data: { ...merged.data, updatedAt: remote.updatedAt } },
          );
        } else if (localAt > remote.updatedAt) {
          await api('/v1/progress', { method: 'PUT', token, body: { data: current.data, updatedAt: localAt } });
        }
      } catch {
        // Offline: try again next time.
      }
    });
    return () => sub.remove();
  }, [userId]);

  const update = useCallback((fn) => {
    setState((prev) => {
      const next = fn(prev.data);
      return next === prev.data ? prev : { ...prev, data: { ...next, updatedAt: Date.now() } };
    });
  }, []);

  const recordReview = useCallback(
    (key, rating) =>
      update((data) => {
        const day = todayKey();
        const grammarUse = { ...data.grammarUse };
        for (const topic of topicsForKey(key)) {
          const prev = grammarUse[topic] ?? { practised: 0, right: 0 };
          grammarUse[topic] = {
            practised: prev.practised + 1,
            right: prev.right + (rating === RATING.AGAIN ? 0 : 1),
          };
        }
        return {
          ...data,
          srs: { ...data.srs, [key]: review(data.srs[key], rating) },
          activity: { ...data.activity, [day]: (data.activity[day] ?? 0) + 1 },
          grammarUse,
        };
      }),
    [update],
  );

  const setGrammarStatus = useCallback(
    (topicId, status) => update((data) => ({ ...data, grammar: { ...data.grammar, [topicId]: status } })),
    [update],
  );

  const addMyWord = useCallback(
    (entry) =>
      update((data) => ({
        ...data,
        myWords: { ...data.myWords, [entry.id]: { ...entry, addedAt: Date.now() } },
      })),
    [update],
  );

  const removeMyWord = useCallback(
    (id) =>
      update((data) => {
        const myWords = { ...data.myWords };
        delete myWords[id];
        return { ...data, myWords };
      }),
    [update],
  );

  const unlockGift = useCallback(
    (dayKey, id) =>
      update((data) =>
        data.gifts[dayKey]
          ? data
          : { ...data, gifts: { ...data.gifts, [dayKey]: { id, unlockedAt: Date.now(), seen: false } } },
      ),
    [update],
  );

  const markGiftSeen = useCallback(
    (dayKey) =>
      update((data) =>
        data.gifts[dayKey]
          ? { ...data, gifts: { ...data.gifts, [dayKey]: { ...data.gifts[dayKey], seen: true } } }
          : data,
      ),
    [update],
  );

  const markWritingCopied = useCallback(
    (taskId) =>
      update((data) => {
        const prev = data.writing[taskId]?.copied ?? 0;
        return { ...data, writing: { ...data.writing, [taskId]: { copied: prev + 1 } } };
      }),
    [update],
  );

  const value = useMemo(
    () => ({
      loaded: state.loaded,
      ...state.data,
      migrationNotes: state.notes,
      readOnly: state.readOnly,
      reviewedToday: state.data.activity[todayKey()] ?? 0,
      recordReview,
      setGrammarStatus,
      markWritingCopied,
      addMyWord,
      removeMyWord,
      unlockGift,
      markGiftSeen,
    }),
    [state, recordReview, setGrammarStatus, markWritingCopied, addMyWord, removeMyWord, unlockGift, markGiftSeen],
  );

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used inside ProgressProvider');
  return ctx;
}
