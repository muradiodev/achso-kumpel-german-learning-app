import { AppText } from '@/components/app-text';
import { ScreenHeader } from '@/components/screen-header';
import { useI18n } from '@/i18n';
import { AvatarPicker } from '@/screens/avatar-picker';

export default function AvatarSetup() {
  const { t } = useI18n();
  // Saving the avatar completes the profile; the root guard then opens /setup/levels.
  return (
    <AvatarPicker
      header={
        <>
          <ScreenHeader />
          <AppText variant="caption" tone="accent" style={{ marginBottom: 8 }}>
            {t('common.stepOf', { step: 2, total: 3 })}
          </AppText>
        </>
      }
    />
  );
}
