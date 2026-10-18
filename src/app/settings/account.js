import { router } from 'expo-router';
import { View } from 'react-native';

import { AppText } from '@/components/app-text';
import { ScreenHeader } from '@/components/screen-header';
import { useAuth } from '@/features/auth/auth-context';
import { useI18n } from '@/i18n';
import { ProfileForm } from '@/screens/profile-form';
import { useTheme } from '@/theme';

export default function AccountSettings() {
  const { t } = useI18n();
  const { colors, space, radius } = useTheme();
  const { user } = useAuth();

  return (
    <ProfileForm
      ctaLabel={t('common.save')}
      onDone={() => router.back()}
      header={
        <>
          <ScreenHeader title={t('settings.account')} />
          <View style={{ backgroundColor: colors.surfaceAlt, borderRadius: radius.md, padding: space.lg, gap: 2 }}>
            <AppText variant="caption" tone="faint">
              {t('settings.email')}
            </AppText>
            <AppText weight="600">{user.email}</AppText>
            <AppText variant="small" tone="muted" style={{ marginTop: space.xs }}>
              {t('settings.emailNote')}
            </AppText>
          </View>
        </>
      }
    />
  );
}
