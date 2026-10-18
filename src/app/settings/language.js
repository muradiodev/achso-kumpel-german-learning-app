import { View } from 'react-native';

import { AppText } from '@/components/app-text';
import { Screen } from '@/components/screen';
import { ScreenHeader } from '@/components/screen-header';
import { ToggleRow } from '@/components/toggle-row';
import { CONTENT_LANGUAGES } from '@/i18n/content';
import { UI_LANGUAGES, useI18n } from '@/i18n';
import { useTheme } from '@/theme';

export default function LanguageSettings() {
  const { t, lang, setLang } = useI18n();
  const { space } = useTheme();

  const section = (title, sub) => (
    <View style={{ marginTop: space.xl, gap: 2 }}>
      <AppText variant="heading">{title}</AppText>
      <AppText variant="small" tone="muted">
        {sub}
      </AppText>
    </View>
  );

  return (
    <Screen>
      <ScreenHeader title={t('settings.language')} />

      {section(t('settings.appLanguage'), t('settings.appLanguageSub'))}
      <View style={{ marginTop: space.sm }}>
        {UI_LANGUAGES.map((l) => (
          <ToggleRow
            key={l.code}
            label={t(`languages.${l.code}`)}
            sublabel={l.ready ? null : t('common.comingSoon')}
            value={lang === l.code}
            disabled={!l.ready}
            onChange={(on) => on && setLang(l.code)}
          />
        ))}
      </View>

      {section(t('settings.translationLanguage'), t('settings.translationLanguageSub'))}
      <View style={{ marginTop: space.sm }}>
        {CONTENT_LANGUAGES.map((l) => (
          <ToggleRow
            key={l.code}
            label={t(`languages.${l.code}`)}
            sublabel={l.ready ? null : t('common.comingSoon')}
            value={l.code === 'en'}
            disabled={!l.ready}
            onChange={() => {}}
          />
        ))}
      </View>
    </Screen>
  );
}
