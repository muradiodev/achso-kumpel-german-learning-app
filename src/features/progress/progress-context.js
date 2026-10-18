import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';

import { useAuth } from '@/features/auth/auth-context';
import { PROGRESS_SCHEMA, migrateProgress } from '@/features/progress/migrations';
import { review } from '@/features/srs/scheduler';
import { getJSON, setJSON } from '@/lib/storage';

// Learning progress, stored per user:
//   srs:      { "<kind>|<id>": schedulerState }
//   grammar:  { topicId: 'new' | 'learning' | 'learned' }
//   writing:  { taskId: { copied: number } }
//   activity: { 'YYYY-MM-DD': reviewsThatDay }
//   schema:   see migrations.js
const EMPTY = { schema: PROGRESS_SCHEMA, srs: {}, grammar: {}, writing: {}, activity: {} };

const ProgressContext = createContext(null);

const todayKey = () => new Date().toISOString().slice(0, 10);

export function ProgressProvider({ children }) {
  const { user } = useAuth();
  const userId = user?.id;
  const [state, setState] = useState({ loaded: false, data: EMPTY, notes: [], readOnly: false });
  const saveTimer = useRef(null);

  useEffect(() => {
    let alive = true;
    if (!userId) {
      setState({ loaded: false, data: EMPTY, notes: [], readOnly: false });
      return undefined;
    }
    getJSON(`progress:${userId}`, EMPTY).then((saved) => {
      if (!alive) return;
      const { data, notes, readOnly } = migrateProgress(saved);
      setState({ loaded: true, data, notes, readOnly });
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

  const update = useCallback((fn) => {
    setState((prev) => ({ ...prev, data: fn(prev.data) }));
  }, []);

  const recordReview = useCallback(
    (key, rating) =>
      update((data) => {
        const day = todayKey();
        return {
          ...data,
          srs: { ...data.srs, [key]: review(data.srs[key], rating) },
          activity: { ...data.activity, [day]: (data.activity[day] ?? 0) + 1 },
        };
      }),
    [update],
  );

  const setGrammarStatus = useCallback(
    (topicId, status) =>
      update((data) => ({ ...data, grammar: { ...data.grammar, [topicId]: status } })),
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
    }),
    [state, recordReview, setGrammarStatus, markWritingCopied],
  );

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used inside ProgressProvider');
  return ctx;
}
