import { useEffect, useState } from 'react';
import { AppState } from 'react-native';

import { APP_VERSION, compareVersions, manifestUrl } from './version';

const INTERVAL = 30 * 60 * 1000;

// Polls the release manifest on start, every 30 minutes, and whenever the app
// comes back to the foreground (on web: when the tab becomes visible again).
//   status 'current'   nothing to do
//   status 'available' a newer version exists
//   status 'required'  this version is older than minSupportedVersion, i.e. it
//                      may no longer work with saved data or content
export function useUpdateCheck() {
  const [state, setState] = useState({ status: 'current', remote: null });

  useEffect(() => {
    const url = manifestUrl();
    if (!url) return undefined;
    let alive = true;

    async function check() {
      try {
        const res = await fetch(`${url}?t=${Date.now()}`, { cache: 'no-store' });
        if (!res.ok) return;
        const remote = await res.json();
        if (!alive || !remote?.version) return;
        const required =
          remote.minSupportedVersion && compareVersions(APP_VERSION, remote.minSupportedVersion) < 0;
        const available = compareVersions(remote.version, APP_VERSION) > 0;
        setState({ status: required ? 'required' : available ? 'available' : 'current', remote });
      } catch {
        // Offline or no manifest yet: stay quiet.
      }
    }

    check();
    const timer = setInterval(check, INTERVAL);
    const sub = AppState.addEventListener('change', (next) => {
      if (next === 'active') check();
    });
    return () => {
      alive = false;
      clearInterval(timer);
      sub.remove();
    };
  }, []);

  return state;
}
