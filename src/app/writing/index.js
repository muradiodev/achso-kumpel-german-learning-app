import { router } from 'expo-router';
import { useCallback, useMemo, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AppText } from '@/components/app-text';
import { Badge } from '@/components/badge';
import { MAX_WIDTH } from '@/components/screen';
import { ScreenHeader } from '@/components/screen-header';
import { Chip } from '@/components/chip';
import { Surface } from '@/components/surface';
import { WRITING_TASKS, WRITING_TYPES } from '@/data';
import { useProgress } from '@/features/progress/progress-context';
import { tr } from '@/i18n/content';
import { useI18n } from '@/i18n';
import { useTheme } from '@/theme';

export default function Writing() {
  const { t, lang } = useI18n();
  const { colors, space } = useTheme();
  const insets = useSafeAreaInsets();
  const { writing } = useProgress();
  const [filter, setFilter] = useState('all');

  const tasks = useMemo(
    () => (filter === 'all' ? WRITING_TASKS : WRITING_TASKS.filter((task) => task.type === filter)),
    [filter],
  );

  const renderItem = useCallback(
    ({ item }) => {
      const copied = writing[item.id]?.copied ?? 0;
      return (
        <Surface onPress={() => router.push(`/writing/${item.id}`)} style={{ marginBottom: space.md, gap: space.sm }}>
          <View style={styles.badges}>
            <Badge label={`${t(`writing.filters.${item.type}`)} · ${item.level}`} />
            {copied ? <Badge label={t('writing.copiedTimes', { count: copied })} tone="neutral" icon="done" /> : null}
          </View>
          <AppText variant="heading">{tr(item.title, lang)}</AppText>
          <AppText variant="small" tone="muted">
            {[t('writing.minutes', { count: item.minutes }), t('writing.words', { count: item.words })].join('  ·  ')}
          </AppText>
        </Surface>
      );
    },
    [writing, t, lang, space],
  );

  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      style={{ backgroundColor: colors.bg }}
      contentContainerStyle={{
        width: '100%',
        maxWidth: MAX_WIDTH,
        alignSelf: 'center',
        paddingHorizontal: space.xl,
        paddingTop: insets.top + space.lg,
        paddingBottom: space.xxl,
      }}
      ListHeaderComponent={
        <View style={{ marginBottom: space.lg }}>
          <ScreenHeader title={t('writing.title')} />
          <AppText variant="small" tone="muted">
            {t('writing.sub')}
          </AppText>
          <View style={[styles.chips, { marginTop: space.lg }]}>
            <Chip label={t('writing.filters.all')} selected={filter === 'all'} onPress={() => setFilter('all')} />
            {WRITING_TYPES.map((type) => (
              <Chip
                key={type}
                label={t(`writing.filters.${type}`)}
                selected={filter === type}
                onPress={() => setFilter(type)}
              />
            ))}
          </View>
        </View>
      }
      ListFooterComponent={
        <AppText variant="small" tone="faint" style={{ marginTop: space.md }}>
          {t('writing.examNote')}
        </AppText>
      }
    />
  );
}

const styles = StyleSheet.create({
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  badges: { flexDirection: 'row', justifyContent: 'space-between', gap: 8 },
});
