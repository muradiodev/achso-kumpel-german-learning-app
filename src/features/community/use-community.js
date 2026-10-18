import { useFocusEffect } from 'expo-router';
import { useCallback, useEffect, useState } from 'react';
import { AppState } from 'react-native';

import { getAuthToken } from '@/features/auth/remote-auth-provider';
import { API_URL, api } from '@/lib/api';
import { getJSON, setJSON } from '@/lib/storage';

// Other learners come from the server. A build without one only ranks you.
export const COMMUNITY_ENABLED = Boolean(API_URL);

// Ranking boards. Each one reads a single number from member.stats.
export const BOARDS = [
  { key: 'week', stat: 'weekReviews', icon: 'today' },
  { key: 'streak', stat: 'streak', icon: 'streak' },
  { key: 'mastered', stat: 'mastered', icon: 'trophy' },
];

export const fullName = (m) => [m.firstName, m.lastName].filter(Boolean).join(' ');

// Highest first; ties keep the longer-standing member ahead.
export function rankBy(members, stat) {
  return [...members].sort((a, b) => b.stats[stat] - a.stats[stat] || a.joinedAt - b.joinedAt);
}

// Loads `path`, keeps the last good answer on the device and reloads whenever
// the screen comes into view or the app returns to the foreground. Offline,
// the last saved answer is shown with `stale: true`.
function useApi(path, cacheKey) {
  const [state, setState] = useState({ data: null, error: null, loading: COMMUNITY_ENABLED, stale: false });

  const load = useCallback(async () => {
    if (!COMMUNITY_ENABLED) return;
    setState((prev) => ({ ...prev, loading: true }));
    try {
      const data = await api(path, { token: await getAuthToken() });
      setState({ data, error: null, loading: false, stale: false });
      if (cacheKey) setJSON(cacheKey, data);
    } catch (error) {
      const cached = cacheKey ? await getJSON(cacheKey) : null;
      setState((prev) => {
        const data = prev.data ?? cached;
        return { data, error, loading: false, stale: Boolean(data) };
      });
    }
  }, [path, cacheKey]);

  useFocusEffect(
    useCallback(() => {
      load();
    }, [load]),
  );

  useEffect(() => {
    const sub = AppState.addEventListener('change', (next) => {
      if (next === 'active') load();
    });
    return () => sub.remove();
  }, [load]);

  return { ...state, reload: load };
}

// { data: { members, me }, error, loading, stale, reload }
export const useCommunity = () => useApi('/v1/community', 'community:last');

// { data: { member }, error, loading, stale, reload }
export const useMember = (id) => useApi(`/v1/community/${encodeURIComponent(id)}`, `community:member:${id}`);
