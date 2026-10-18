import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useCallback, useMemo, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AppText } from '@/components/app-text';
import { MAX_WIDTH } from '@/components/screen';
import { Chip } from '@/components/chip';
import { ListRow } from '@/components/list-row';
import { GRAMMAR_TOPICS, LEVELS } from '@/data';
import { useProgress } from '@/features/progress/progress-context';
import { tr } from '@/i18n/content';
import { useI18n } from '@/i18n';
import { useTheme } from '@/theme';

const STATUS_ICON = { new: 'ellipse-outline', learning: 'time-outline', learned: 'checkmark-circle' };

export default function Grammar() {
  const { t, lang } = useI18n();
  const { colors, space } = useTheme();
  const insets = useSafeAreaInsets();
  const { grammar } = useProgress();
  const [level, setLevel] = useState('all');

  const topics = useMemo(
    () => (level === 'all' ? GRAMMAR_TOPICS : GRAMMAR_TOPICS.filter((topic) => topic.level === level)),
    [level],
  );
  const learned = Object.values(grammar).filter((s) => s === 'learned').length;

  const renderItem = useCallback(
    ({ item }) => {
      const status = grammar[item.id] ?? 'new';
      const color = status === 'learned' ? colors.success : status === 'learning' ? colors.warning : colors.textFaint;
      return (
        <ListRow
          left={<Ionicons name={STATUS_ICON[status]} size={24} color={color} />}
          title={item.title}
          subtitle={`${item.level} · ${tr(item.subtitle, lang)}`}
          onPress={() => router.push(`/grammar/${item.id}`)}
        />
      );
    },
    [grammar, colors, lang],
  );

  return (
    <FlatList
      data={topics}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      style={{ backgroundColor: colors.bg }}
      contentContainerStyle={{ width: '100%', maxWidth: MAX_WIDTH, alignSelf: 'center', paddingHorizontal: space.xl, paddingTop: insets.top + space.lg, paddingBottom: space.xxl }}
      ListHeaderComponent={
        <View style={{ marginBottom: space.md }}>
          <AppText variant="title">{t('grammar.title')}</AppText>
          <AppText tone="muted" style={{ marginTop: space.sm }}>
            {t('grammar.sub')}
          </AppText>
          <AppText variant="small" weight="600" tone="accent" style={{ marginTop: space.md }}>
            {t('grammar.learnedCount', { learned, total: GRAMMAR_TOPICS.length })}
          </AppText>
          <View style={[styles.chips, { marginTop: space.lg }]}>
            <Chip label={t('common.all')} selected={level === 'all'} onPress={() => setLevel('all')} />
            {LEVELS.map((l) => (
              <Chip key={l} label={l} selected={level === l} onPress={() => setLevel(l)} />
            ))}
          </View>
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
});
