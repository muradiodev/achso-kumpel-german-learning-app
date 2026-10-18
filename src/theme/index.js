import { useMemo } from 'react';
import { useColorScheme } from 'react-native';

// One accent (burnt orange) on zinc neutrals. Radius rule: inputs and buttons
// use `md`, cards use `lg`, chips and pills use `pill`. Nothing else.
export const palette = {
  light: {
    backdrop: '#E4E4E7',
    bg: '#FAFAFA',
    surface: '#FFFFFF',
    surfaceAlt: '#F4F4F5',
    border: '#E4E4E7',
    text: '#18181B',
    textMuted: '#52525B',
    textFaint: '#71717A',
    accent: '#C2410C',
    accentSoft: '#FFEDD5',
    onAccent: '#FFFFFF',
    success: '#15803D',
    successSoft: '#DCFCE7',
    danger: '#B91C1C',
    dangerSoft: '#FEE2E2',
    warning: '#A16207',
    warningSoft: '#FEF9C3',
  },
  dark: {
    backdrop: '#050506',
    bg: '#0C0C0E',
    surface: '#18181B',
    surfaceAlt: '#232327',
    border: '#2E2E33',
    text: '#F4F4F5',
    textMuted: '#A1A1AA',
    textFaint: '#8B8B94',
    accent: '#FB923C',
    accentSoft: '#3A2412',
    onAccent: '#1A1209',
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

export const type = {
  display: { fontSize: 32, lineHeight: 38, fontWeight: '700', letterSpacing: -0.6 },
  title: { fontSize: 24, lineHeight: 30, fontWeight: '700', letterSpacing: -0.3 },
  heading: { fontSize: 18, lineHeight: 24, fontWeight: '600' },
  body: { fontSize: 16, lineHeight: 24 },
  small: { fontSize: 14, lineHeight: 20 },
  caption: { fontSize: 12, lineHeight: 16, fontWeight: '600', letterSpacing: 0.2 },
};

export function useTheme() {
  const scheme = useColorScheme() === 'dark' ? 'dark' : 'light';
  return useMemo(
    () => ({ colors: palette[scheme], scheme, space, radius, type }),
    [scheme],
  );
}
