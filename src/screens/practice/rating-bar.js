import { Pressable, StyleSheet, View } from 'react-native';

import { AppText } from '@/components/app-text';
import { RATING } from '@/features/srs/scheduler';
import { useI18n } from '@/i18n';
import { useTheme } from '@/theme';

// Shown only after the answer is revealed. Hard / Good / Easy side by side,
// Again on its own row below so "I didn't know it" is one clear red tap.
export function RatingBar({ onRate }) {
  const { t } = useI18n();
  const { colors, radius } = useTheme();
  const knew = [
    {
      rating: RATING.HARD,
      label: t('practice.rate.hard'),
      bg: colors.warningSoft,
      fg: colors.warning,
    },
    {
      rating: RATING.GOOD,
      label: t('practice.rate.good'),
      bg: colors.successSoft,
      fg: colors.success,
    },
    {
      rating: RATING.EASY,
      label: t('practice.rate.easy'),
      bg: colors.accentSoft,
      fg: colors.accent,
    },
  ];
  const button = (o, style) => (
    <Pressable
      key={o.rating}
      onPress={() => onRate(o.rating)}
      accessibilityRole="button"
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: o.bg,
          borderRadius: radius.md,
          transform: [{ scale: pressed ? 0.97 : 1 }],
        },
        style,
      ]}
    >
      <AppText weight="700" style={{ color: o.fg }}>
        {o.label}
      </AppText>
    </Pressable>
  );

  return (
    <View style={styles.wrap}>
      <AppText variant="small" tone="faint" align="center">
        {t('practice.rateHint')}
      </AppText>
      <View style={styles.row}>{knew.map((o) => button(o, styles.flex))}</View>
      {button({
        rating: RATING.AGAIN,
        label: t('practice.rate.again'),
        bg: colors.danger,
        fg: colors.onAccent,
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { gap: 10 },
  row: { flexDirection: 'row', gap: 8 },
  flex: { flex: 1 },
  button: { minHeight: 52, alignItems: 'center', justifyContent: 'center' },
});
