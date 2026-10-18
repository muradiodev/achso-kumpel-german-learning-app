import { useEffect } from 'react';
import { Platform, StyleSheet, View, useWindowDimensions } from 'react-native';

import { useTheme } from '@/theme';

// On wide screens (desktop browser, tablet) the whole app renders inside one
// large phone-shaped frame, centered, with the tab bar at the frame's bottom.
// Phones and narrow windows get the normal full-screen layout.
export const FRAME_WIDTH = 560;
const BREAKPOINT = 720;

export function useIsFramed() {
  const { width } = useWindowDimensions();
  return width >= BREAKPOINT;
}

export function AppFrame({ children }) {
  const { height } = useWindowDimensions();
  const framed = useIsFramed();
  const { colors, scheme } = useTheme();

  // The page around the app (web only): background, color scheme, theme-color.
  useEffect(() => {
    if (Platform.OS !== 'web' || typeof document === 'undefined') return;
    const outside = framed ? colors.backdrop : colors.bg;
    document.body.style.backgroundColor = outside;
    document.documentElement.style.colorScheme = scheme;
    let meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'theme-color');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', outside);
  }, [framed, colors, scheme]);

  if (!framed) {
    return <View style={[styles.fill, { backgroundColor: colors.bg }]}>{children}</View>;
  }

  const gap = height > 900 ? 24 : 12;
  return (
    <View style={[styles.backdrop, { backgroundColor: colors.backdrop, paddingVertical: gap }]}>
      <View
        style={[
          styles.frame,
          {
            width: FRAME_WIDTH,
            height: height - gap * 2,
            backgroundColor: colors.bg,
            borderColor: colors.border,
          },
          scheme === 'light' ? styles.shadowLight : styles.shadowDark,
        ]}
      >
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fill: { flex: 1 },
  backdrop: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  frame: { borderRadius: 32, borderWidth: 1, overflow: 'hidden' },
  shadowLight: {
    shadowColor: '#3F3F46',
    shadowOpacity: 0.18,
    shadowRadius: 40,
    shadowOffset: { width: 0, height: 16 },
    elevation: 12,
  },
  shadowDark: {
    shadowColor: '#000000',
    shadowOpacity: 0.6,
    shadowRadius: 40,
    shadowOffset: { width: 0, height: 16 },
    elevation: 12,
  },
});
