import { Pressable, View } from 'react-native';

import { useTheme } from '@/theme';

// Bordered card. Use only when the grouping carries meaning; otherwise rely on spacing.
export function Surface({ children, onPress, tone = 'default', style, accessibilityLabel }) {
  const { colors, radius, space } = useTheme();
  const bg = { default: colors.surface, accent: colors.accentSoft, muted: colors.surfaceAlt }[tone];
  const base = {
    backgroundColor: bg,
    borderColor: tone === 'default' ? colors.border : bg,
    borderWidth: 1,
    borderRadius: radius.lg,
    padding: space.lg,
  };

  if (!onPress) return <View style={[base, style]}>{children}</View>;
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      style={({ pressed }) => [base, { transform: [{ scale: pressed ? 0.99 : 1 }] }, style]}
    >
      {children}
    </Pressable>
  );
}
