import { router } from 'expo-router';
import { useCallback, useMemo, useState } from 'react';
import { Pressable, SectionList, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AppText } from '@/components/app-text';
import { Button } from '@/components/button';
import { Chip } from '@/components/chip';
import { Icon } from '@/components/icon';
import { SegmentBar } from '@/components/progress-charts';
import { MAX_WIDTH } from '@/components/screen';
import { GRAMMAR_GROUPS, GRAMMAR_TOPICS, SENTENCES } from '@/data';
import { useProgress } from '@/features/progress/progress-context';
import { tr } from '@/i18n/content';
import { useI18n } from '@/i18n';
import { useTheme } from '@/theme';

const STATUS_ICON = { new: 'circle', learning: 'learning', learned: 'checkCircle' };

const SENTENCE_COUNT = SENTENCES.reduce((acc, s) => {
  for (const g of s.grammar) acc[g] = (acc[g] ?? 0) + 1;
  return acc;
}, {});

export default function Grammar() {
  const { t, lang } = useI18n();
  const { colors, space, radius } = useTheme();
  const insets = useSafeAreaInsets();
  const { grammar } = useProgress();
  const [group, setGroup] = useState('all');
  const [selecting, setSelecting] = useState(false);
  const [selected, setSelected] = useState([]);

  const sections = useMemo(
    () =>
      GRAMMAR_GROUPS.filter((g) => group === 'all' || g === group).map((g) => {
        const data = GRAMMAR_TOPICS.filter((topic) => topic.group === g);
        return { key: g, data, learned: data.filter((topic) => grammar[topic.id] === 'learned').length };
      }),
    [group, grammar],
  );
  const learnedTotal = GRAMMAR_TOPICS.filter((topic) => grammar[topic.id] === 'learned').length;

  const toggle = useCallback(
    (id) => setSelected((list) => (list.includes(id) ? list.filter((x) => x !== id) : [...list, id])),
    [],
  );

  const renderItem = useCallback(
    ({ item }) => {
      const status = grammar[item.id] ?? 'new';
      const color = status === 'learned' ? colors.success : status === 'learning' ? colors.warning : colors.textFaint;
      const isSelected = selected.includes(item.id);
      return (
        <Pressable
          onPress={() => (selecting ? toggle(item.id) : router.push(`/grammar/${item.id}`))}
          accessibilityRole={selecting ? 'checkbox' : 'button'}
          accessibilityState={selecting ? { checked: isSelected } : undefined}
          style={({ pressed }) => [styles.row, { opacity: pressed ? 0.7 : 1 }]}
        >
          {selecting ? (
            <Icon
              name={isSelected ? 'checkbox' : 'circle'}
              size={24}
              color={isSelected ? colors.accent : colors.textFaint}
              weight={isSelected ? 'fill' : 'regular'}
            />
          ) : (
            <Icon name={STATUS_ICON[status]} size={24} color={color} weight={status === 'new' ? 'regular' : 'fill'} />
          )}
          <View style={styles.rowBody}>
            <AppText weight="600">{item.title}</AppText>
            <AppText variant="small" tone="muted">
              {`${item.level} · ${tr(item.subtitle, lang)}`}
            </AppText>
          </View>
          {selecting ? (
            <AppText variant="caption" tone="faint">
              {t('grammar.sentencesAvailable', { count: SENTENCE_COUNT[item.id] ?? 0 })}
            </AppText>
          ) : (
            <Icon name="forward" size={18} color={colors.textFaint} />
          )}
        </Pressable>
      );
    },
    [grammar, colors, lang, selecting, selected, toggle, t],
  );

  const renderSectionHeader = useCallback(
    ({ section }) => (
      <View style={[styles.sectionHeader, { backgroundColor: colors.bg, paddingTop: space.xl }]}>
        <View style={styles.sectionTitle}>
          <View style={[styles.levelBadge, { backgroundColor: colors.accent, borderRadius: radius.pill }]}>
            <AppText variant="caption" tone="onAccent">
              {t(`grammar.groupLevel.${section.key}`)}
            </AppText>
          </View>
          <AppText variant="heading" style={styles.flex}>
            {t(`grammar.groups.${section.key}`)}
          </AppText>
          <AppText variant="small" tone="muted">
            {t('grammar.sectionCount', { learned: section.learned, total: section.data.length })}
          </AppText>
        </View>
        <View style={{ marginTop: space.sm }}>
          <SegmentBar total={section.data.length} strong={section.learned} height={6} />
        </View>
      </View>
    ),
    [colors, radius, space, t],
  );

  return (
    <View style={[styles.flex, { backgroundColor: colors.bg }]}>
      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        stickySectionHeadersEnabled
        contentContainerStyle={{
          width: '100%',
          maxWidth: MAX_WIDTH,
          alignSelf: 'center',
          paddingHorizontal: space.xl,
          paddingTop: insets.top + space.lg,
          paddingBottom: space.xxl,
        }}
        ListHeaderComponent={
          <View>
            <AppText variant="title">{t('grammar.title')}</AppText>
            <AppText tone="muted" style={{ marginTop: space.sm }}>
              {selecting ? t('grammar.selectHint') : t('grammar.sub')}
            </AppText>
            <AppText variant="small" weight="600" tone="accent" style={{ marginTop: space.md }}>
              {t('grammar.learnedCount', { learned: learnedTotal, total: GRAMMAR_TOPICS.length })}
            </AppText>
            <View style={[styles.chips, { marginTop: space.lg }]}>
              <Chip label={t('common.all')} selected={group === 'all'} onPress={() => setGroup('all')} />
              {GRAMMAR_GROUPS.map((g) => (
                <Chip key={g} label={t(`grammar.groupLevel.${g}`)} selected={group === g} onPress={() => setGroup(g)} />
              ))}
            </View>
            {!selecting ? (
              <Button
                label={t('grammar.selectMode')}
                icon="grammarList"
                variant="secondary"
                size="md"
                onPress={() => setSelecting(true)}
                style={{ marginTop: space.lg, alignSelf: 'flex-start' }}
              />
            ) : null}
          </View>
        }
      />
      {selecting ? (
        <View
          style={[
            styles.footer,
            {
              borderTopColor: colors.border,
              backgroundColor: colors.bg,
              paddingHorizontal: space.xl,
              paddingVertical: space.md,
            },
          ]}
        >
          <Button
            label={t('grammar.cancelSelect')}
            variant="secondary"
            onPress={() => {
              setSelecting(false);
              setSelected([]);
            }}
            style={styles.flex}
          />
          <Button
            label={t('grammar.practiseSelected', { count: selected.length })}
            icon="play"
            disabled={!selected.length}
            onPress={() =>
              router.push({ pathname: '/practice/[mode]', params: { mode: 'grammar', topics: selected.join(',') } })
            }
            style={styles.flexWide}
          />
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  flexWide: { flex: 2 },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 12, minHeight: 56 },
  rowBody: { flex: 1, gap: 2 },
  sectionHeader: { paddingBottom: 8 },
  sectionTitle: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  levelBadge: { paddingHorizontal: 10, paddingVertical: 4 },
  footer: {
    flexDirection: 'row',
    gap: 10,
    borderTopWidth: StyleSheet.hairlineWidth,
    width: '100%',
    maxWidth: MAX_WIDTH,
    alignSelf: 'center',
  },
});
