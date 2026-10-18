import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

import { localAuthProvider } from './local-auth-provider';

// Swap this line for a remote provider when a backend exists.
const authProvider = localAuthProvider;

const AuthContext = createContext(null);

// Profile is complete once the required registration fields and an avatar exist.
export function isProfileComplete(user) {
  const p = user?.profile;
  return Boolean(p?.firstName && p?.lastName && p?.birthDate && p?.avatarId);
}

export function hasLearningSetup(user) {
  return Boolean(user?.profile?.levels?.length);
}

export function AuthProvider({ children }) {
  const [state, setState] = useState({ status: 'loading', user: null });

  useEffect(() => {
    let alive = true;
    authProvider.getSession().then((user) => {
      if (alive) setState({ status: 'ready', user });
    });
    return () => {
      alive = false;
    };
  }, []);

  const register = useCallback(async (credentials) => {
    const user = await authProvider.register(credentials);
    setState({ status: 'ready', user });
  }, []);

  const login = useCallback(async (credentials) => {
    const user = await authProvider.login(credentials);
    setState({ status: 'ready', user });
  }, []);

  const logout = useCallback(async () => {
    await authProvider.logout();
    setState({ status: 'ready', user: null });
  }, []);

  const updateProfile = useCallback(
    async (patch) => {
      const user = await authProvider.updateProfile(state.user.email, patch);
      setState({ status: 'ready', user });
    },
    [state.user],
  );

  const value = useMemo(
    () => ({ ...state, register, login, logout, updateProfile }),
    [state, register, login, logout, updateProfile],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
}
