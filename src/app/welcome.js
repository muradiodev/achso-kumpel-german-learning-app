import { router } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components/app-text';
import { BrandMark } from '@/components/brand-mark';
import { Button } from '@/components/button';
import { Icon } from '@/components/icon';
import { Screen } from '@/components/screen';
import { useI18n } from '@/i18n';
import { useTheme } from '@/theme';

const REASON_ICONS = ['chats', 'repeat', 'sparkle'];

export default function Welcome() {
  const { t } = useI18n();
  const { colors, space } = useTheme();
  const reasons = t('welcome.reasons');
  const headline = t('welcome.headline').split('\n');

  return (
    <Screen
      footer={
        <View style={{ gap: space.sm }}>
          <Button label={t('welcome.ctaRegister')} onPress={() => router.push('/register')} />
          <Button label={t('welcome.ctaLogin')} variant="ghost" onPress={() => router.push('/login')} />
          <AppText variant="caption" tone="faint" align="center">
            {t('welcome.footer')}
          </AppText>
        </View>
      }
    >
      <View style={styles.brand}>
        <BrandMark size={48} tile />
        <View>
          <AppText weight="700">{t('brand.name')}</AppText>
          <AppText variant="small" tone="muted">
            {t('brand.tagline')}
          </AppText>
        </View>
      </View>

      {/* Second line of the headline in purple: the promise of the app. */}
      <AppText variant="display" style={{ marginTop: space.xxl }}>
        {headline[0]}
        {headline.length > 1 ? <AppText variant="display" tone="accent">{`\n${headline.slice(1).join('\n')}`}</AppText> : null}
      </AppText>
      <AppText tone="muted" style={{ marginTop: space.md }}>
        {t('welcome.sub')}
      </AppText>

      <View style={{ marginTop: space.xxl, gap: space.xl }}>
        {reasons.map((reason, index) => (
          <View key={reason.title} style={styles.reason}>
            <View style={[styles.reasonIcon, { backgroundColor: colors.accentSoft }]}>
              <Icon name={REASON_ICONS[index]} size={22} color={colors.accent} weight="duotone" />
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

    </Screen>
  );
}

const styles = StyleSheet.create({
  brand: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  reason: { flexDirection: 'row', gap: 16 },
  reasonIcon: { width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' },
  reasonBody: { flex: 1, gap: 4 },
});
