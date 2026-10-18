import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components/app-text';
import { useTheme } from '@/theme';

// Small level badge (B1, C1-C2) with an optional label after it, used above
// prompts and on list headers. `strong` fills it with the accent.
export function LevelTag({ level, label, strong = false }) {
  const { colors } = useTheme();
  return (
    <View style={styles.row}>
      {level ? (
        <View style={[styles.badge, { backgroundColor: strong ? colors.accent : colors.accentSoft }]}>
          <AppText variant="caption" weight="800" style={{ color: strong ? colors.onAccent : colors.accent }}>
            {level}
          </AppText>
        </View>
      ) : null}
      {label ? (
        <AppText variant="caption" tone="accent" style={styles.flex} numberOfLines={1}>
          {label}
        </AppText>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  badge: { minWidth: 30, height: 24, paddingHorizontal: 7, borderRadius: 8, alignItems: 'center', justifyContent: 'center' },
  flex: { flexShrink: 1 },
});
