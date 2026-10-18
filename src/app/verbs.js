import { router } from 'expo-router';
import { useCallback, useMemo, useState } from 'react';
import { FlatList, Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AppText } from '@/components/app-text';
import { MAX_WIDTH } from '@/components/screen';
import { Button } from '@/components/button';
import { Chip } from '@/components/chip';
import { Icon } from '@/components/icon';
import { SegmentBar } from '@/components/progress-charts';
import { ScreenHeader } from '@/components/screen-header';
import { SpeakButton } from '@/components/speak-button';
import { Surface } from '@/components/surface';
import { ToggleRow } from '@/components/toggle-row';
import { PREP_VERBS, VERBS } from '@/data';
import { useProgress } from '@/features/progress/progress-context';
import { useWordSheet } from '@/features/words/word-sheet';
import { tr } from '@/i18n/content';
import { useI18n } from '@/i18n';
import { usePreference } from '@/lib/use-preference';
import { useTheme } from '@/theme';

const SECTIONS = ['irregular', 'sein', 'haben', 'regular', 'prep'];

const FILTERS = {
  irregular: (v) => v.type !== 'regular',
  regular: (v) => v.type === 'regular',
  sein: (v) => v.aux === 'sein',
  haben: (v) => v.aux === 'haben',
};

// Round check on the left of a row: tap to mark a verb as known.
function KnownToggle({ known, label, onPress }) {
  const { colors } = useTheme();
  return (
    <Pressable
      onPress={onPress}
      hitSlop={8}
      accessibilityRole="checkbox"
      accessibilityState={{ checked: known }}
      accessibilityLabel={label}
      style={styles.check}
    >
      <Icon
        name={known ? 'checkCircle' : 'circle'}
        size={28}
        color={known ? colors.accent : colors.textFaint}
        weight={known ? 'fill' : 'regular'}
      />
    </Pressable>
  );
}

export default function Verbs() {
  const { t, lang } = useI18n();
  const { colors, space } = useTheme();
  const insets = useSafeAreaInsets();
  const [section, setSection] = useState('irregular');
  const { knownVerbs = {}, toggleKnownVerb } = useProgress();
  // Known verbs stay out of the way unless the learner asks to see them.
  const [showKnown, setShowKnown] = usePreference('verbs:showKnown', false);
  const { openWord } = useWordSheet();

  const all = useMemo(() => (section === 'prep' ? PREP_VERBS : VERBS.filter(FILTERS[section])), [section]);
  const knownCount = all.filter((v) => knownVerbs[v.id]).length;
  // Verbs still to learn come first, so the list starts where the work is.
  const data = useMemo(() => {
    const fresh = all.filter((v) => !knownVerbs[v.id]);
    return showKnown ? [...fresh, ...all.filter((v) => knownVerbs[v.id])] : fresh;
  }, [all, knownVerbs, showKnown]);
  const knownLabel = useCallback(
    (item, name) => t(knownVerbs[item.id] ? 'verbs.unmarkKnown' : 'verbs.markKnown', { verb: name }),
    [knownVerbs, t],
  );

  const renderVerb = useCallback(
    ({ item }) => (
      <View style={[styles.row, { borderBottomColor: colors.border }]}>
        <KnownToggle
          known={Boolean(knownVerbs[item.id])}
          label={knownLabel(item, item.inf)}
          onPress={() => toggleKnownVerb(item.id)}
        />
        <Pressable
          onPress={() => openWord(item.inf, null)}
          accessibilityRole="button"
          accessibilityHint={t('myWords.add')}
          style={({ pressed }) => [styles.flex, knownVerbs[item.id] && styles.known, pressed && styles.pressed]}
        >
          <AppText weight="700">{item.inf}</AppText>
          <AppText variant="small" tone="muted">
            {tr(item.tr, lang)}
          </AppText>
          <AppText variant="small" style={{ marginTop: 4 }}>
            {`${item.prat}  ·  ${item.aux === 'sein' ? 'ist' : 'hat'} ${item.p2}`}
          </AppText>
          {item.note ? (
            <AppText variant="small" tone="faint" style={{ marginTop: 2 }}>
              {tr(item.note, lang)}
            </AppText>
          ) : null}
        </Pressable>
        <SpeakButton text={`${item.inf}, ${item.prat}, ${item.aux === 'sein' ? 'ist' : 'hat'} ${item.p2}`} />
      </View>
    ),
    [colors.border, lang, knownVerbs, knownLabel, toggleKnownVerb, openWord, t],
  );

  const renderPrep = useCallback(
    ({ item }) => (
      <View style={[styles.row, { borderBottomColor: colors.border }]}>
        <KnownToggle
          known={Boolean(knownVerbs[item.id])}
          label={knownLabel(item, `${item.verb} ${item.prep}`)}
          onPress={() => toggleKnownVerb(item.id)}
        />
        <Pressable
          onPress={() => openWord(`${item.verb} ${item.prep}`, item.example)}
          accessibilityRole="button"
          accessibilityHint={t('myWords.add')}
          style={({ pressed }) => [styles.flex, knownVerbs[item.id] && styles.known, pressed && styles.pressed]}
        >
          <AppText weight="700">{`${item.verb} ${item.prep}`}</AppText>
          <AppText variant="small" tone="muted">
            {tr(item.tr, lang)}
          </AppText>
          <AppText variant="small" style={{ marginTop: 4 }}>
            {item.example.de}
          </AppText>
        </Pressable>
        <SpeakButton text={item.example.de} />
      </View>
    ),
    [colors.border, lang, knownVerbs, knownLabel, toggleKnownVerb, openWord, t],
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={section === 'prep' ? renderPrep : renderVerb}
      style={{ backgroundColor: colors.bg }}
      contentContainerStyle={{
        width: '100%',
        maxWidth: MAX_WIDTH,
        alignSelf: 'center',
        paddingHorizontal: space.xl,
        paddingTop: insets.top + space.lg,
        paddingBottom: insets.bottom + space.xxl,
      }}
      ListHeaderComponent={
        <View style={{ marginBottom: space.md }}>
          <ScreenHeader title={t('verbs.title')} />
          <View style={styles.quizRow}>
            <Button
              label={t('verbs.quizAux')}
              size="md"
              onPress={() => router.push('/practice/aux')}
              style={styles.flex}
            />
            <Button
              label={t('verbs.quizForms')}
              size="md"
              variant="secondary"
              onPress={() => router.push('/practice/forms')}
              style={styles.flex}
            />
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.chips}
            style={{ marginTop: space.lg }}
          >
            {SECTIONS.map((s) => (
              <Chip key={s} label={t(`verbs.sections.${s}`)} selected={section === s} onPress={() => setSection(s)} />
            ))}
          </ScrollView>
          <View style={{ marginTop: space.lg, gap: space.sm }}>
            <SegmentBar total={all.length} strong={knownCount} />
            <ToggleRow
              label={t('verbs.showKnown')}
              sublabel={t('verbs.knownCount', { known: knownCount, total: all.length })}
              value={showKnown}
              onChange={setShowKnown}
            />
          </View>
          {section === 'sein' ? (
            <Surface tone="muted" style={{ marginTop: space.lg }}>
              <AppText variant="small">{t('verbs.seinRule')}</AppText>
            </Surface>
          ) : null}
        </View>
      }
      ListEmptyComponent={
        <AppText tone="muted" align="center" style={{ marginTop: space.xl }}>
          {t('verbs.allKnown')}
        </AppText>
      }
    />
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  known: { opacity: 0.55 },
  pressed: { opacity: 0.6 },
  check: { width: 32, alignItems: 'center' },
  quizRow: { flexDirection: 'row', gap: 10 },
  chips: { gap: 8 },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 14,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
