import { Pressable, StyleSheet } from 'react-native';

import { AppText } from '@/components/app-text';
import { useTheme } from '@/theme';

// tone 'soft' is a read-only tag on accentSoft (e.g. the level mix on Today).
export function Chip({ label, selected = false, onPress, accessibilityLabel, tone }) {
  const { colors, radius } = useTheme();
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole={onPress ? 'button' : 'text'}
      accessibilityState={{ selected }}
      accessibilityLabel={accessibilityLabel ?? label}
      style={({ pressed }) => [
        styles.chip,
        {
          borderRadius: radius.pill,
          backgroundColor: tone === 'soft' ? colors.accentSoft : selected ? colors.accent : colors.surface,
          borderColor: tone === 'soft' ? colors.accentSoft : selected ? colors.accent : colors.border,
          transform: [{ scale: pressed ? 0.97 : 1 }],
        },
      ]}
    >
      <AppText variant="small" weight="600" tone={tone === 'soft' ? 'accent' : selected ? 'onAccent' : 'default'}>
        {label}
      </AppText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: { borderWidth: 1, paddingHorizontal: 14, paddingVertical: 8, minHeight: 36, justifyContent: 'center' },
});
