import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components/app-text';
import { Button } from '@/components/button';
import { Screen } from '@/components/screen';
import { useI18n } from '@/i18n';
import { useTheme } from '@/theme';

const REASON_ICONS = ['chatbubbles-outline', 'repeat-outline', 'checkmark-done-outline'];

export default function Welcome() {
  const { t } = useI18n();
  const { colors, space } = useTheme();
  const reasons = t('welcome.reasons');

  return (
    <Screen
      footer={
        <View style={{ gap: space.sm }}>
          <Button label={t('welcome.ctaRegister')} onPress={() => router.push('/register')} />
          <Button label={t('welcome.ctaLogin')} variant="ghost" onPress={() => router.push('/login')} />
        </View>
      }
    >
      <View style={styles.brand}>
        <View style={[styles.mark, { backgroundColor: colors.accent }]}>
          <AppText variant="heading" tone="onAccent" weight="800">
            A
          </AppText>
        </View>
        <View>
          <AppText weight="700">{t('brand.name')}</AppText>
          <AppText variant="small" tone="muted">
            {t('brand.tagline')}
          </AppText>
        </View>
      </View>

      <AppText variant="display" style={{ marginTop: space.xxl }}>
        {t('welcome.headline')}
      </AppText>
      <AppText tone="muted" style={{ marginTop: space.md }}>
        {t('welcome.sub')}
      </AppText>

      <View style={{ marginTop: space.xxl, gap: space.xl }}>
        {reasons.map((reason, index) => (
          <View key={reason.title} style={styles.reason}>
            <View style={[styles.reasonIcon, { backgroundColor: colors.accentSoft }]}>
              <Ionicons name={REASON_ICONS[index]} size={20} color={colors.accent} />
            </View>
            <View style={styles.reasonBody}>
              <AppText weight="600">{reason.title}</AppText>
              <AppText variant="small" tone="muted">
                {reason.body}
              </AppText>
            </View>
          </View>
        ))}
      </View>

      <AppText variant="small" tone="faint" style={{ marginTop: space.xxl }}>
        {t('welcome.footer')}
      </AppText>
    </Screen>
  );
}

const styles = StyleSheet.create({
  brand: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  mark: { width: 44, height: 44, borderRadius: 14, alignItems: 'center', justifyContent: 'center' },
  reason: { flexDirection: 'row', gap: 16 },
  reasonIcon: { width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' },
  reasonBody: { flex: 1, gap: 4 },
});
