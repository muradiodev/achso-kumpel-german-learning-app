import { Pressable, StyleSheet, View } from 'react-native';

import { AppText } from '@/components/app-text';
import { useTheme } from '@/theme';

export function Segmented({ options, value, onChange }) {
  const { colors, radius } = useTheme();
  return (
    <View
      accessibilityRole="radiogroup"
      style={[styles.track, { backgroundColor: colors.surfaceAlt, borderRadius: radius.md }]}
    >
      {options.map((option) => {
        const active = option.value === value;
        return (
          <Pressable
            key={option.value}
            accessibilityRole="radio"
            accessibilityState={{ checked: active }}
            onPress={() => onChange(option.value)}
            style={[
              styles.item,
              { borderRadius: radius.md - 3 },
              active && { backgroundColor: colors.surface, borderColor: colors.border, borderWidth: 1 },
            ]}
          >
            <AppText variant="small" weight="600" tone={active ? 'default' : 'muted'} numberOfLines={1}>
              {option.label}
            </AppText>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  track: { flexDirection: 'row', padding: 3 },
  item: { flex: 1, minHeight: 38, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 6 },
});
