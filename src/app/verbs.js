import { router } from 'expo-router';
import { useCallback, useMemo, useState } from 'react';
import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AppText } from '@/components/app-text';
import { MAX_WIDTH } from '@/components/screen';
import { Button } from '@/components/button';
import { Chip } from '@/components/chip';
import { ScreenHeader } from '@/components/screen-header';
import { SpeakButton } from '@/components/speak-button';
import { Surface } from '@/components/surface';
import { PREP_VERBS, VERBS } from '@/data';
import { tr } from '@/i18n/content';
import { useI18n } from '@/i18n';
import { useTheme } from '@/theme';

const SECTIONS = ['irregular', 'sein', 'haben', 'regular', 'prep'];

const FILTERS = {
  irregular: (v) => v.type !== 'regular',
  regular: (v) => v.type === 'regular',
  sein: (v) => v.aux === 'sein',
  haben: (v) => v.aux === 'haben',
};

export default function Verbs() {
  const { t, lang } = useI18n();
  const { colors, space } = useTheme();
  const insets = useSafeAreaInsets();
  const [section, setSection] = useState('irregular');

  const data = useMemo(
    () => (section === 'prep' ? PREP_VERBS : VERBS.filter(FILTERS[section])),
    [section],
  );

  const renderVerb = useCallback(
    ({ item }) => (
      <View style={[styles.row, { borderBottomColor: colors.border }]}>
        <View style={styles.flex}>
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
        </View>
        <SpeakButton text={`${item.inf}, ${item.prat}, ${item.aux === 'sein' ? 'ist' : 'hat'} ${item.p2}`} />
      </View>
    ),
    [colors.border, lang],
  );

  const renderPrep = useCallback(
    ({ item }) => (
      <View style={[styles.row, { borderBottomColor: colors.border }]}>
        <View style={styles.flex}>
          <AppText weight="700">{`${item.verb} ${item.prep}`}</AppText>
          <AppText variant="small" tone="muted">
            {tr(item.tr, lang)}
          </AppText>
          <AppText variant="small" style={{ marginTop: 4 }}>
            {item.example.de}
          </AppText>
        </View>
        <SpeakButton text={item.example.de} />
      </View>
    ),
    [colors.border, lang],
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={section === 'prep' ? renderPrep : renderVerb}
      style={{ backgroundColor: colors.bg }}
      contentContainerStyle={{ width: '100%', maxWidth: MAX_WIDTH, alignSelf: 'center', paddingHorizontal: space.xl, paddingTop: insets.top + space.lg, paddingBottom: insets.bottom + space.xxl }}
      ListHeaderComponent={
        <View style={{ marginBottom: space.md }}>
          <ScreenHeader title={t('verbs.title')} />
          <View style={styles.quizRow}>
            <Button label={t('verbs.quizAux')} size="md" onPress={() => router.push('/practice/aux')} style={styles.flex} />
            <Button
              label={t('verbs.quizForms')}
              size="md"
              variant="secondary"
              onPress={() => router.push('/practice/forms')}
              style={styles.flex}
            />
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chips} style={{ marginTop: space.lg }}>
            {SECTIONS.map((s) => (
              <Chip key={s} label={t(`verbs.sections.${s}`)} selected={section === s} onPress={() => setSection(s)} />
            ))}
          </ScrollView>
          {section === 'sein' ? (
            <Surface tone="muted" style={{ marginTop: space.lg }}>
              <AppText variant="small">{t('verbs.seinRule')}</AppText>
            </Surface>
          ) : null}
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  quizRow: { flexDirection: 'row', gap: 10 },
  chips: { gap: 8 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 14, borderBottomWidth: StyleSheet.hairlineWidth },
});
