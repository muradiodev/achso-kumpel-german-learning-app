import { useCallback, useEffect, useState } from 'react';

import { getJSON, setJSON } from '@/lib/storage';

// A small device-level preference, e.g. how the learner likes to answer.
export function usePreference(key, fallback) {
  const [value, setValue] = useState(fallback);

  useEffect(() => {
    let alive = true;
    getJSON(`pref:${key}`).then((saved) => {
      if (alive && saved != null) setValue(saved);
    });
    return () => {
      alive = false;
    };
  }, [key]);

  const update = useCallback(
    (next) => {
      setValue(next);
      setJSON(`pref:${key}`, next);
    },
    [key],
  );

  return [value, update];
}
