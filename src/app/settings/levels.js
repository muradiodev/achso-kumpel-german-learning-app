import { router } from 'expo-router';

import { ScreenHeader } from '@/components/screen-header';
import { useI18n } from '@/i18n';
import { LevelsForm } from '@/screens/levels-form';

export default function LevelsSettings() {
  const { t } = useI18n();
  return <LevelsForm header={<ScreenHeader />} ctaLabel={t('common.save')} onDone={() => router.back()} />;
}
