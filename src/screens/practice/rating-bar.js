import { Pressable, StyleSheet, View } from 'react-native';

import { AppText } from '@/components/app-text';
import { RATING } from '@/features/srs/scheduler';
import { useI18n } from '@/i18n';
import { useTheme } from '@/theme';

export function RatingBar({ onRate }) {
  const { t } = useI18n();
  const { colors, radius } = useTheme();
  const options = [
    { rating: RATING.AGAIN, label: t('practice.rate.again'), bg: colors.dangerSoft, fg: colors.danger },
    { rating: RATING.HARD, label: t('practice.rate.hard'), bg: colors.warningSoft, fg: colors.warning },
    { rating: RATING.GOOD, label: t('practice.rate.good'), bg: colors.successSoft, fg: colors.success },
    { rating: RATING.EASY, label: t('practice.rate.easy'), bg: colors.surfaceAlt, fg: colors.text },
  ];

  return (
    <View style={styles.wrap}>
      <AppText variant="small" tone="faint" align="center">
        {t('practice.rateHint')}
      </AppText>
      <View style={styles.row}>
        {options.map((o) => (
          <Pressable
            key={o.rating}
            onPress={() => onRate(o.rating)}
            accessibilityRole="button"
            style={({ pressed }) => [
              styles.button,
              { backgroundColor: o.bg, borderRadius: radius.md, transform: [{ scale: pressed ? 0.96 : 1 }] },
            ]}
          >
            <AppText variant="small" weight="700" style={{ color: o.fg }}>
              {o.label}
            </AppText>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { gap: 10 },
  row: { flexDirection: 'row', gap: 8 },
  button: { flex: 1, minHeight: 52, alignItems: 'center', justifyContent: 'center' },
});
