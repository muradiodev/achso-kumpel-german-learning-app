import { router } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';

import { AppText } from '@/components/app-text';
import { Icon } from '@/components/icon';
import { useI18n } from '@/i18n';
import { useTheme } from '@/theme';

// Back button + optional title and right slot, for pushed screens.
export function ScreenHeader({ title, right, onBack }) {
  const { colors } = useTheme();
  const { t } = useI18n();
  const goBack = onBack ?? (() => (router.canGoBack() ? router.back() : router.replace('/')));

  return (
    <View style={styles.row}>
      <Pressable
        onPress={goBack}
        hitSlop={12}
        accessibilityRole="button"
        accessibilityLabel={t('common.back')}
        style={[styles.back, { backgroundColor: colors.surfaceAlt }]}
      >
        <Icon name="back" size={20} color={colors.text} />
      </Pressable>
      <AppText variant="heading" numberOfLines={1} style={styles.title}>
        {title}
      </AppText>
      <View style={styles.right}>{right}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 20 },
  back: { width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' },
  title: { flex: 1 },
  right: { minWidth: 40, alignItems: 'flex-end' },
});
