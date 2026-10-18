import { useEffect, useMemo, useState } from 'react';

import { useAuth } from '@/features/auth/auth-context';
import { useProgress } from '@/features/progress/progress-context';

import { chooseGift, getGift, giftDayKey, nextUnlockAt } from './gift-clock';

// Ticks every `interval` ms while mounted. Used for countdowns.
export function useNow(interval = 1000) {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), interval);
    return () => clearInterval(timer);
  }, [interval]);
  return now;
}

// Unlocks today's gift the first time the app is open on a new gift day, and
// returns today's gift plus the full history (newest first).
export function useDailyGift() {
  const { user } = useAuth();
  const { loaded, gifts, unlockGift, markGiftSeen } = useProgress();
  const now = useNow(30 * 1000);
  const dayKey = giftDayKey(now);

  useEffect(() => {
    if (!loaded || !user || gifts[dayKey]) return;
    unlockGift(dayKey, chooseGift(gifts, user.id).id);
  }, [loaded, user, gifts, dayKey, unlockGift]);

  const history = useMemo(
    () =>
      Object.entries(gifts)
        .sort(([a], [b]) => (a < b ? 1 : -1))
        .map(([key, entry], i, all) => ({
          ...getGift(entry.id),
          dayKey: key,
          journeyDay: all.length - i,
          unlockedAt: entry.unlockedAt,
          seen: entry.seen,
        }))
        .filter((g) => g.id),
    [gifts],
  );

  const today = history.find((g) => g.dayKey === dayKey) ?? null;
  return { today, history, nextUnlock: nextUnlockAt(now), markSeen: () => markGiftSeen(dayKey) };
}
