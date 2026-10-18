import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components/app-text';
import { Icon } from '@/components/icon';
import { useTheme } from '@/theme';

// Small pill label: a task type, a duration, "Unlocked today".
// tone: 'accent' (accentSoft) | 'neutral' (surfaceAlt) | 'surface' (on tinted cards)
export function Badge({ label, tone = 'accent', icon }) {
  const { colors, radius } = useTheme();
  const bg = { accent: colors.accentSoft, neutral: colors.surfaceAlt, surface: colors.surface }[tone];
  const fg = tone === 'neutral' ? colors.textMuted : colors.accent;
  return (
    <View style={[styles.badge, { backgroundColor: bg, borderRadius: radius.pill }]}>
      {icon ? <Icon name={icon} size={14} color={fg} weight="bold" /> : null}
      <AppText variant="caption" weight="700" style={{ color: fg }} numberOfLines={1}>
        {label}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    minHeight: 24,
    paddingHorizontal: 9,
    alignSelf: 'flex-start',
  },
});
