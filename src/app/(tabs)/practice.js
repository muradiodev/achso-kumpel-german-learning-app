import { router } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';

import { AppText } from '@/components/app-text';
import { Icon } from '@/components/icon';
import { IconChip } from '@/components/icon-chip';
import { ListGroup } from '@/components/list-group';
import { ListRow } from '@/components/list-row';
import { Screen } from '@/components/screen';
import { useI18n } from '@/i18n';
import { useTheme } from '@/theme';

const MODES = [
  { key: 'sentences', icon: 'sentences' },
  { key: 'words', icon: 'words' },
  { key: 'cloze', icon: 'cloze' },
  { key: 'work', icon: 'work' },
  { key: 'everyday', icon: 'everyday' },
  { key: 'grammar', icon: 'grammarList' },
  { key: 'weak', icon: 'weak' },
];

export default function Practice() {
  const { t } = useI18n();
  const { colors, space } = useTheme();
  const { radius } = useTheme();
  const icon = (name) => <IconChip name={name} size={36} />;

  return (
    <Screen>
      <AppText variant="display">{t('practice.title')}</AppText>
      <AppText variant="small" tone="muted" style={{ marginTop: space.xs }}>
        {t('practice.sub')}
      </AppText>

      {/* Mixed session is the best default, so it gets the hero spot. */}
      <Pressable
        onPress={() => router.push('/practice/mixed')}
        accessibilityRole="button"
        accessibilityLabel={t('practice.modes.mixed.title')}
        style={({ pressed }) => [
          styles.hero,
          {
            backgroundColor: colors.accent,
            borderRadius: radius.xl,
            marginTop: space.xl,
            transform: [{ scale: pressed ? 0.99 : 1 }],
          },
        ]}
      >
        <View pointerEvents="none" style={[styles.orn, { backgroundColor: colors.giftOrnament }]} />
        <View style={styles.heroTop}>
          <IconChip name="mixed" ground={colors.onBrandFill} color={colors.onAccent} />
          <AppText variant="caption" tone="onAccent" style={styles.soft}>
            {t('home.duration')}
          </AppText>
        </View>
        <View style={{ gap: space.xs }}>
          <AppText variant="title" tone="onAccent">
            {t('practice.modes.mixed.title')}
          </AppText>
          <AppText variant="small" tone="onAccent" style={styles.soft}>
            {t('practice.modes.mixed.body')}
          </AppText>
        </View>
        <View style={[styles.start, { backgroundColor: colors.onAccent, borderRadius: radius.md }]}>
          <Icon name="play" size={18} color={colors.accent} weight="fill" />
          <AppText variant="small" weight="700" tone="accent">
            {t('home.start')}
          </AppText>
        </View>
      </Pressable>

      <ListGroup style={{ marginTop: space.lg }}>
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
          left={icon('writing')}
          title={t('writing.title')}
          subtitle={t('practice.writingBody')}
          onPress={() => router.push('/writing')}
        />
        <ListRow
          left={icon('book')}
          title={t('reading.title')}
          subtitle={t('reading.practiceBody')}
          onPress={() => router.push('/reading')}
        />
        <ListRow
          left={icon('words')}
          title={t('myWords.title')}
          subtitle={t('practice.modes.mine.body')}
          onPress={() => router.push('/my-words')}
        />
        <ListRow
          left={icon('verbs')}
          title={t('practice.verbsTitle')}
          subtitle={t('practice.verbsBody')}
          onPress={() => router.push('/verbs')}
        />
      </ListGroup>
    </Screen>
  );
}

const styles = StyleSheet.create({
  hero: { padding: 24, gap: 16, overflow: 'hidden' },
  orn: { position: 'absolute', width: 120, height: 120, borderRadius: 60, right: -36, top: -40, opacity: 0.55 },
  heroTop: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  soft: { opacity: 0.86 },
  start: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    alignSelf: 'flex-start',
    minHeight: 40,
    paddingHorizontal: 14,
  },
});
