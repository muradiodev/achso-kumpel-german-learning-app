import { router } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';

import { AppText } from '@/components/app-text';
import { Icon } from '@/components/icon';
import { useI18n } from '@/i18n';
import { useTheme } from '@/theme';

// Onboarding progress: a segment per step and "Step 2 of 3" under it.
// `back` shows a round back button before the segments.
export function Stepper({ step, total = 3, back = false }) {
  const { colors } = useTheme();
  const { t } = useI18n();
  return (
    <View style={styles.wrap}>
      <View style={styles.row}>
        {back ? (
          <Pressable
            onPress={() => router.back()}
            hitSlop={8}
            accessibilityRole="button"
            accessibilityLabel={t('common.back')}
            style={[styles.back, { backgroundColor: colors.surfaceAlt }]}
          >
            <Icon name="back" size={18} color={colors.text} />
          </Pressable>
        ) : null}
        <View style={styles.segments} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
          {Array.from({ length: total }, (_, i) => (
            <View key={i} style={[styles.segment, { backgroundColor: i < step ? colors.accent : colors.surfaceAlt }]} />
          ))}
        </View>
      </View>
      <AppText variant="caption" tone="accent">
        {t('common.stepOf', { step, total })}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { gap: 8 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  back: { width: 36, height: 36, borderRadius: 18, alignItems: 'center', justifyContent: 'center' },
  segments: { flex: 1, flexDirection: 'row', gap: 6 },
  segment: { flex: 1, height: 4, borderRadius: 2 },
});
