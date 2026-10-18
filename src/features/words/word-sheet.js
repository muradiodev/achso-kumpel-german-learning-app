import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AppText } from '@/components/app-text';
import { Button } from '@/components/button';
import { SpeakButton } from '@/components/speak-button';
import { useProgress } from '@/features/progress/progress-context';
import { tr } from '@/i18n/content';
import { useI18n } from '@/i18n';
import { useTheme } from '@/theme';

import { lookupWord, myWordId } from './lookup';

// Bottom sheet for a tapped word. Rendered inside the app frame (not a RN
// Modal) so it stays inside the phone frame on wide screens.
const WordSheetContext = createContext({ openWord: () => {} });

export function WordSheetProvider({ children }) {
  const [current, setCurrent] = useState(null);
  const openWord = useCallback((word, context) => setCurrent({ word, context }), []);
  const value = useMemo(() => ({ openWord }), [openWord]);
  return (
    <WordSheetContext.Provider value={value}>
      {children}
      {current ? <WordSheet {...current} onClose={() => setCurrent(null)} /> : null}
    </WordSheetContext.Provider>
  );
}

export const useWordSheet = () => useContext(WordSheetContext);

function WordSheet({ word, context, onClose }) {
  const { t, lang } = useI18n();
  const { colors, space, radius } = useTheme();
  const insets = useSafeAreaInsets();
  const { myWords, addMyWord, removeMyWord } = useProgress();
  const entry = lookupWord(word);
  const id = myWordId(word);
  const saved = Boolean(myWords[id]);
  const headword = entry ? entry.de : word;

  function toggle() {
    if (saved) {
      removeMyWord(id);
      return;
    }
    addMyWord({
      id,
      de: headword,
      wordId: entry?.id ?? null,
      context: context ? { de: context.de, tr: context.tr ?? null } : null,
    });
  }

  return (
    <View style={StyleSheet.absoluteFill}>
      <Pressable
        style={[StyleSheet.absoluteFill, styles.scrim]}
        onPress={onClose}
        accessibilityLabel={t('common.cancel')}
      />
      <View
        style={[
          styles.sheet,
          {
            backgroundColor: colors.surface,
            borderTopLeftRadius: radius.sheet,
            borderTopRightRadius: radius.sheet,
            padding: space.xl,
            paddingBottom: insets.bottom + space.xl,
          },
        ]}
      >
        <View style={[styles.grabber, { backgroundColor: colors.border }]} />
        <View style={styles.head}>
          <View style={styles.flex}>
            <AppText variant="display">{headword}</AppText>
            {entry ? (
              <AppText variant="title" tone="accent">
                {tr(entry.tr, lang)}
              </AppText>
            ) : null}
            {entry?.plural ? <AppText variant="small" tone="muted">{`Plural: ${entry.plural}`}</AppText> : null}
          </View>
          <SpeakButton text={headword} size={56} />
        </View>

        {!entry ? (
          <AppText variant="small" tone="muted" style={{ marginTop: space.md }}>
            {t('myWords.notInDictionary')}
          </AppText>
        ) : null}

        {context ? (
          <View
            style={[
              styles.context,
              { backgroundColor: colors.surfaceAlt, borderRadius: radius.lg, marginTop: space.lg },
            ]}
          >
            <AppText variant="caption" tone="faint">
              {t('myWords.foundIn')}
            </AppText>
            <View style={styles.head}>
              <AppText weight="600" style={styles.flex}>
                {context.de}
              </AppText>
              <SpeakButton text={context.de} size={36} ground={colors.surface} />
            </View>
            {context.tr ? (
              <AppText variant="small" tone="muted">
                {tr(context.tr, lang)}
              </AppText>
            ) : null}
          </View>
        ) : null}

        <Button
          label={saved ? t('myWords.remove') : t('myWords.add')}
          icon={saved ? 'close' : 'plus'}
          variant={saved ? 'secondary' : 'primary'}
          onPress={toggle}
          style={{ marginTop: space.xl }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  scrim: { backgroundColor: 'rgba(9, 7, 16, 0.6)' },
  sheet: { position: 'absolute', left: 0, right: 0, bottom: 0 },
  grabber: { width: 40, height: 5, borderRadius: 3, alignSelf: 'center', marginBottom: 16 },
  head: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  flex: { flex: 1, gap: 2 },
  context: { padding: 16, gap: 4 },
});
