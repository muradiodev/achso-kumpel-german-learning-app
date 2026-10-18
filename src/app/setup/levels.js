import { AppText } from '@/components/app-text';
import { useI18n } from '@/i18n';
import { LevelsForm } from '@/screens/levels-form';

export default function LevelsSetup() {
  const { t } = useI18n();
  // Saving levels finishes setup; the root guard opens the app.
  return (
    <LevelsForm
      ctaLabel={t('setup.levelsCta')}
      header={
        <AppText variant="caption" tone="accent" style={{ marginBottom: 8 }}>
          {t('common.stepOf', { step: 3, total: 3 })}
        </AppText>
      }
    />
  );
}
