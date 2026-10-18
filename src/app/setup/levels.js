import { View } from 'react-native';

import { Stepper } from '@/components/stepper';
import { useI18n } from '@/i18n';
import { LevelsForm } from '@/screens/levels-form';

export default function LevelsSetup() {
  const { t } = useI18n();
  // Saving levels finishes setup; the root guard opens the app.
  return (
    <LevelsForm
      ctaLabel={t('setup.levelsCta')}
      header={
        <View style={{ marginBottom: 20 }}>
          <Stepper step={3} back />
        </View>
      }
    />
  );
}
