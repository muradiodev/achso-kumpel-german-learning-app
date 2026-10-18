import { Pressable, StyleSheet, View } from 'react-native';

import { AppText } from '@/components/app-text';
import { useTheme } from '@/theme';

// A row with a switch-style toggle. Used as a radio group: turning one on
// turns the others off, which the parent controls via `value`.
export function ToggleRow({ label, sublabel, value, onChange, disabled = false }) {
  const { colors } = useTheme();
  return (
    <Pressable
      onPress={() => !disabled && onChange(!value)}
      disabled={disabled}
      accessibilityRole="switch"
      accessibilityState={{ checked: value, disabled }}
      style={({ pressed }) => [styles.row, { opacity: disabled ? 0.5 : pressed ? 0.8 : 1 }]}
    >
      <View style={styles.text}>
        <AppText weight="600">{label}</AppText>
        {sublabel ? (
          <AppText variant="small" tone="muted">
            {sublabel}
          </AppText>
        ) : null}
      </View>
      <View style={[styles.track, { backgroundColor: value ? colors.accent : colors.border }]}>
        <View
          style={[
            styles.thumb,
            { backgroundColor: value ? colors.onAccent : colors.surface, alignSelf: value ? 'flex-end' : 'flex-start' },
          ]}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: 16, paddingVertical: 14, minHeight: 56 },
  text: { flex: 1, gap: 2 },
  track: { width: 50, height: 30, borderRadius: 15, padding: 3, justifyContent: 'center' },
  thumb: { width: 24, height: 24, borderRadius: 12 },
});
