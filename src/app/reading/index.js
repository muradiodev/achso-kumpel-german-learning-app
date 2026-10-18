import { router } from 'expo-router';
import { useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components/app-text';
import { Badge } from '@/components/badge';
import { Chip } from '@/components/chip';
import { Icon } from '@/components/icon';
import { IconChip } from '@/components/icon-chip';
import { LevelTag } from '@/components/level-tag';
import { Screen } from '@/components/screen';
import { ScreenHeader } from '@/components/screen-header';
import { Surface } from '@/components/surface';
import { READINGS } from '@/data';
import { useAuth } from '@/features/auth/auth-context';
import { useProgress } from '@/features/progress/progress-context';
import { tr } from '@/i18n/content';
import { useI18n } from '@/i18n';
import { useTheme } from '@/theme';

const READING_LEVELS = [...new Set(READINGS.map((r) => r.level))];

export default function Reading() {
  const { t, lang } = useI18n();
  const { colors, space } = useTheme();
  const { user } = useAuth();
  const { reading = {}, myWords } = useProgress();
  // Start on the learner's own levels when there are texts for them.
  // 30 texts per level: start on the learner's own levels, not on all 180.
  const mine = READING_LEVELS.filter((l) => user.profile.levels.includes(l));
  const [level, setLevel] = useState(mine.length ? 'mine' : 'all');

  const collected = useMemo(() => {
    const counts = {};
    for (const w of Object.values(myWords)) {
      const from = w.context?.from;
      if (from) counts[from] = (counts[from] ?? 0) + 1;
    }
    return counts;
  }, [myWords]);
  const texts = READINGS.filter(
    (r) => level === 'all' || (level === 'mine' ? mine.includes(r.level) : r.level === level),
  );
  const done = texts.filter((r) => reading[r.id]).length;

  return (
    <Screen>
      <ScreenHeader title={t('reading.title')} />

      <Surface tone="accent" style={styles.intro}>
        <IconChip name="book" ground={colors.surface} />
        <View style={styles.flex}>
          <AppText weight="700">{t('reading.introTitle')}</AppText>
          <AppText variant="small" tone="muted">
            {t('reading.introBody')}
          </AppText>
        </View>
      </Surface>

      <View style={[styles.chips, { marginTop: space.lg }]}>
        {[...(mine.length ? ['mine'] : []), 'all', ...READING_LEVELS].map((l) => (
          <Chip
            key={l}
            label={l === 'mine' ? t('reading.myLevels') : l === 'all' ? t('common.all') : l}
            selected={level === l}
            onPress={() => setLevel(l)}
          />
        ))}
      </View>
      <AppText variant="small" tone="faint" style={{ marginTop: space.sm }}>
        {t('reading.doneCount', { done, total: texts.length })}
      </AppText>

      <View style={{ gap: space.md, marginTop: space.lg }}>
        {texts.map((text) => {
          const result = reading[text.id];
          const saved = collected[text.id] ?? 0;
          return (
            <Surface
              key={text.id}
              onPress={() => router.push(`/reading/${text.id}`)}
              accessibilityLabel={text.title.de}
              style={styles.card}
            >
              <IconChip name={text.icon} size={44} />
              <View style={[styles.flex, { gap: space.xs }]}>
                <LevelTag level={text.level} label={t('reading.minutes', { count: text.minutes })} />
                <AppText variant="heading">{text.title.de}</AppText>
                <AppText variant="small" tone="muted">
                  {tr(text.title, lang)}
                </AppText>
                {result || saved ? (
                  <View style={[styles.badges, { marginTop: space.xs }]}>
                    {result ? (
                      <Badge
                        icon="check"
                        label={t('reading.score', { correct: result.correct, total: result.total })}
                      />
                    ) : null}
                    {saved ? (
                      <Badge tone="neutral" icon="words" label={t('reading.savedCount', { count: saved })} />
                    ) : null}
                  </View>
                ) : null}
              </View>
              <Icon name="forward" size={18} color={colors.textFaint} />
            </Surface>
          );
        })}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  intro: { flexDirection: 'row', alignItems: 'center', gap: 14 },
  flex: { flex: 1, gap: 2 },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  card: { flexDirection: 'row', alignItems: 'center', gap: 14 },
  badges: { flexDirection: 'row', flexWrap: 'wrap', gap: 6 },
});
