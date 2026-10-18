import { ActivityIndicator, Pressable, StyleSheet, View } from 'react-native';

import { AppText } from '@/components/app-text';
import { Icon } from '@/components/icon';
import { useTheme } from '@/theme';

export function Button({
  label,
  onPress,
  variant = 'primary',
  size = 'lg',
  icon,
  loading = false,
  disabled = false,
  style,
  accessibilityHint,
}) {
  const { colors, radius } = useTheme();
  const palette = {
    primary: { bg: colors.accent, fg: colors.onAccent, border: colors.accent },
    secondary: { bg: colors.surface, fg: colors.text, border: colors.border },
    ghost: { bg: 'transparent', fg: colors.accent, border: 'transparent' },
    // For buttons placed on a brand-purple surface.
    inverse: { bg: colors.onAccent, fg: colors.accent, border: colors.onAccent },
    danger: { bg: colors.dangerSoft, fg: colors.danger, border: colors.dangerSoft },
  }[variant];
  const inactive = disabled || loading;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled: inactive, busy: loading }}
      accessibilityHint={accessibilityHint}
      onPress={onPress}
      disabled={inactive}
      style={({ pressed }) => [
        styles.base,
        size === 'lg' ? styles.lg : styles.md,
        {
          backgroundColor: palette.bg,
          borderColor: palette.border,
          borderRadius: radius.md,
          opacity: inactive ? 0.5 : 1,
          transform: [{ scale: pressed && !inactive ? 0.98 : 1 }],
        },
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={palette.fg} />
      ) : (
        <View style={styles.row}>
          {icon ? <Icon name={icon} size={18} color={palette.fg} weight={icon === 'play' ? 'fill' : 'bold'} /> : null}
          <AppText
            variant={size === 'lg' ? 'body' : 'small'}
            weight="600"
            style={{ color: palette.fg }}
            numberOfLines={1}
          >
            {label}
          </AppText>
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: { borderWidth: 1, alignItems: 'center', justifyContent: 'center' },
  lg: { minHeight: 52, paddingHorizontal: 20 },
  md: { minHeight: 40, paddingHorizontal: 14 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 8 },
});
