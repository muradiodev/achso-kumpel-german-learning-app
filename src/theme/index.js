import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useColorScheme } from 'react-native';

import { getJSON, setJSON } from '@/lib/storage';

// AchsoKumpel brand palette. Full rationale and usage: brand/BRAND.md.
// "Kumpel Purple" is the only brand hue; neutrals carry a slight violet tint so
// grays and purple belong to the same family. Status colors are reserved for
// right/wrong/warning and never used as decoration.
// Radius rule: inputs and buttons use `md`, cards use `lg`, chips use `pill`.
export const purple = {
  50: '#F5F2FF',
  100: '#EDE7FF',
  200: '#DCD0FF',
  300: '#C2ADFF',
  400: '#A283FA',
  500: '#8458F0',
  600: '#6E3BE0',
  700: '#5B2DC2',
  800: '#4A269C',
  900: '#3C227B',
  950: '#241250',
};

export const palette = {
  light: {
    backdrop: '#E9E6F0',
    bg: '#FAF9FC',
    surface: '#FFFFFF',
    surfaceAlt: '#F3F1F8',
    border: '#E6E3EE',
    text: '#16131F',
    textMuted: '#57526A',
    textFaint: '#6F6982',
    accent: purple[600],
    accentStrong: purple[700],
    accentSoft: purple[100],
    accentMuted: purple[300],
    onAccent: '#FFFFFF',
    success: '#15803D',
    successSoft: '#DCFCE7',
    danger: '#B91C1C',
    dangerSoft: '#FEE2E2',
    warning: '#A16207',
    warningSoft: '#FEF3C7',
  },
  dark: {
    backdrop: '#07060B',
    bg: '#0E0C14',
    surface: '#17141F',
    surfaceAlt: '#211D2C',
    border: '#2E2939',
    text: '#F3F1F8',
    textMuted: '#ADA7BD',
    textFaint: '#8E879F',
    accent: purple[400],
    accentStrong: purple[300],
    accentSoft: '#2A1F47',
    accentMuted: purple[700],
    onAccent: '#160A33',
    success: '#4ADE80',
    successSoft: '#12301D',
    danger: '#F87171',
    dangerSoft: '#3B1616',
    warning: '#FACC15',
    warningSoft: '#33290A',
  },
};

export const space = { xs: 4, sm: 8, md: 12, lg: 16, xl: 24, xxl: 32, xxxl: 48 };

export const radius = { md: 14, lg: 20, pill: 999 };

// Plus Jakarta Sans, loaded in src/app/_layout.js. Each weight is its own
// family on native, so text picks the family instead of fontWeight.
export const fonts = {
  400: 'PlusJakartaSans_400Regular',
  500: 'PlusJakartaSans_500Medium',
  600: 'PlusJakartaSans_600SemiBold',
  700: 'PlusJakartaSans_700Bold',
  800: 'PlusJakartaSans_800ExtraBold',
};

export const type = {
  display: { fontSize: 32, lineHeight: 40, fontWeight: '800', letterSpacing: -0.8 },
  title: { fontSize: 24, lineHeight: 31, fontWeight: '700', letterSpacing: -0.4 },
  heading: { fontSize: 18, lineHeight: 24, fontWeight: '700', letterSpacing: -0.2 },
  body: { fontSize: 16, lineHeight: 24, fontWeight: '400' },
  small: { fontSize: 14, lineHeight: 20, fontWeight: '400' },
  caption: { fontSize: 12, lineHeight: 16, fontWeight: '600', letterSpacing: 0.2 },
};

export function fontFor(weight = '400') {
  return fonts[String(weight)] ?? fonts[400];
}

// Appearance preference per device: 'auto' follows the system setting.
const THEME_KEY = 'app:themeMode';
const ThemeModeContext = createContext({ mode: 'auto', setMode: () => {} });

export function ThemeModeProvider({ children }) {
  const [mode, setModeState] = useState('auto');

  useEffect(() => {
    getJSON(THEME_KEY).then((saved) => {
      if (saved === 'light' || saved === 'dark') setModeState(saved);
    });
  }, []);

  const setMode = useCallback((next) => {
    setModeState(next);
    setJSON(THEME_KEY, next);
  }, []);

  const value = useMemo(() => ({ mode, setMode }), [mode, setMode]);
  return <ThemeModeContext.Provider value={value}>{children}</ThemeModeContext.Provider>;
}

export const useThemeMode = () => useContext(ThemeModeContext);

export function useTheme() {
  const system = useColorScheme();
  const { mode } = useContext(ThemeModeContext);
  const scheme = mode === 'auto' ? (system === 'dark' ? 'dark' : 'light') : mode;
  return useMemo(() => ({ colors: palette[scheme], scheme, space, radius, type }), [scheme]);
}
