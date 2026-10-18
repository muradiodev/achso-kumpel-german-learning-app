import { router } from 'expo-router';

import { AppText } from '@/components/app-text';
import { Button } from '@/components/button';
import { useAuth } from '@/features/auth/auth-context';
import { useI18n } from '@/i18n';
import { ProfileForm } from '@/screens/profile-form';

export default function ProfileSetup() {
  const { t } = useI18n();
  const { logout } = useAuth();

  return (
    <ProfileForm
      ctaLabel={t('common.continue')}
      onDone={() => router.push('/setup/avatar')}
      secondaryAction={<Button label={t('profile.logout')} variant="ghost" onPress={logout} />}
      header={
        <>
          <AppText variant="caption" tone="accent">
            {t('common.stepOf', { step: 1, total: 3 })}
          </AppText>
          <AppText variant="title" style={{ marginTop: 8 }}>
            {t('setup.profileTitle')}
          </AppText>
          <AppText tone="muted" style={{ marginTop: 8 }}>
            {t('setup.profileSub')}
          </AppText>
        </>
      }
    />
  );
}
