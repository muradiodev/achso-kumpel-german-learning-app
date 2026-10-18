import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useTheme } from '@/theme';

// Readable column on tablets and web; phones use the full width.
export const MAX_WIDTH = 600;

// Page container: background, safe areas, side gutter, optional scroll and a
// footer pinned above the keyboard (for primary actions on forms).
export function Screen({ children, scroll = true, footer, contentStyle, padTop = true }) {
  const { colors, space } = useTheme();
  const insets = useSafeAreaInsets();
  const padding = {
    width: '100%',
    maxWidth: MAX_WIDTH,
    alignSelf: 'center',
    paddingHorizontal: space.xl,
    paddingTop: padTop ? insets.top + space.lg : space.lg,
    paddingBottom: footer ? space.lg : insets.bottom + space.xl,
  };

  return (
    <KeyboardAvoidingView
      style={[styles.flex, { backgroundColor: colors.bg }]}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      {scroll ? (
        <ScrollView
          style={styles.flex}
          contentContainerStyle={[padding, styles.grow, contentStyle]}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {children}
        </ScrollView>
      ) : (
        <View style={[styles.flex, padding, contentStyle]}>{children}</View>
      )}
      {footer ? (
        <View
          style={{
            width: '100%',
            maxWidth: MAX_WIDTH,
            alignSelf: 'center',
            paddingHorizontal: space.xl,
            paddingTop: space.md,
            paddingBottom: insets.bottom + space.lg,
            backgroundColor: colors.bg,
          }}
        >
          {footer}
        </View>
      ) : null}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  grow: { flexGrow: 1 },
});
