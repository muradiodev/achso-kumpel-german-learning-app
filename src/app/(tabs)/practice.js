import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { View } from 'react-native';

import { AppText } from '@/components/app-text';
import { ListRow } from '@/components/list-row';
import { Screen } from '@/components/screen';
import { Surface } from '@/components/surface';
import { useI18n } from '@/i18n';
import { useTheme } from '@/theme';

const MODES = [
  { key: 'sentences', icon: 'chatbubble-ellipses-outline' },
  { key: 'words', icon: 'albums-outline' },
  { key: 'cloze', icon: 'remove-outline' },
  { key: 'work', icon: 'briefcase-outline' },
  { key: 'everyday', icon: 'cafe-outline' },
  { key: 'grammar', icon: 'checkbox-outline' },
  { key: 'weak', icon: 'pulse-outline' },
];

export default function Practice() {
  const { t } = useI18n();
  const { colors, space } = useTheme();
  const icon = (name) => <Ionicons name={name} size={22} color={colors.accent} />;

  return (
    <Screen>
      <AppText variant="title">{t('practice.title')}</AppText>
      <AppText tone="muted" style={{ marginTop: space.sm }}>
        {t('practice.sub')}
      </AppText>

      <Surface tone="accent" style={{ marginTop: space.xl }} onPress={() => router.push('/practice/mixed')}>
        <ListRow
          left={icon('shuffle')}
          title={t('practice.modes.mixed.title')}
          subtitle={t('practice.modes.mixed.body')}
          chevron={false}
        />
      </Surface>

      <View style={{ marginTop: space.lg }}>
        {MODES.map((mode) => (
          <ListRow
            key={mode.key}
            left={icon(mode.icon)}
            title={t(`practice.modes.${mode.key}.title`)}
            subtitle={t(`practice.modes.${mode.key}.body`)}
            onPress={() => router.push(`/practice/${mode.key}`)}
          />
        ))}
        <ListRow
          left={icon('git-branch-outline')}
          title={t('practice.verbsTitle')}
          subtitle={t('practice.verbsBody')}
          onPress={() => router.push('/verbs')}
        />
      </View>
    </Screen>
  );
}
