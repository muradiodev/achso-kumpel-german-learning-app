import { router } from 'expo-router';
import { useCallback, useMemo } from 'react';
import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AppText } from '@/components/app-text';
import { Button } from '@/components/button';
import { EmptyState } from '@/components/empty-state';
import { Icon } from '@/components/icon';
import { MAX_WIDTH } from '@/components/screen';
import { ScreenHeader } from '@/components/screen-header';
import { SpeakButton } from '@/components/speak-button';
import { useProgress } from '@/features/progress/progress-context';
import { ENTRY_BY_ID } from '@/features/words/lookup';
import { tr } from '@/i18n/content';
import { useI18n } from '@/i18n';
import { useTheme } from '@/theme';

export default function MyWords() {
  const { t, lang } = useI18n();
  const { colors, space } = useTheme();
  const insets = useSafeAreaInsets();
  const { myWords, removeMyWord } = useProgress();
  const words = useMemo(() => Object.values(myWords).sort((a, b) => b.addedAt - a.addedAt), [myWords]);

  const renderItem = useCallback(
    ({ item }) => {
      const entry = item.wordId ? ENTRY_BY_ID.get(item.wordId) : null;
      const meaning = entry ? tr(entry.tr, lang) : item.context?.de;
      return (
        <View style={[styles.row, { borderBottomColor: colors.border }]}>
          <View style={styles.flex}>
            <AppText weight="700">{item.de}</AppText>
            {meaning ? (
              <AppText variant="small" tone="muted" numberOfLines={2}>
                {meaning}
              </AppText>
            ) : null}
          </View>
          <SpeakButton text={item.de} />
          <Pressable
            onPress={() => removeMyWord(item.id)}
            hitSlop={10}
            accessibilityRole="button"
            accessibilityLabel={t('myWords.remove')}
          >
            <Icon name="close" size={20} color={colors.textFaint} />
          </Pressable>
        </View>
      );
    },
    [colors.border, colors.textFaint, lang, removeMyWord, t],
  );

  return (
    <View style={[styles.flex, { backgroundColor: colors.bg }]}>
      <FlatList
        data={words}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{
          width: '100%',
          maxWidth: MAX_WIDTH,
          alignSelf: 'center',
          paddingHorizontal: space.xl,
          paddingTop: insets.top + space.lg,
          paddingBottom: space.xxl,
          flexGrow: 1,
        }}
        ListHeaderComponent={
          <View style={{ marginBottom: space.md }}>
            <ScreenHeader title={t('myWords.title')} />
            <AppText tone="muted">{t('myWords.sub')}</AppText>
          </View>
        }
        ListEmptyComponent={<EmptyState icon="words" title={t('myWords.emptyTitle')} body={t('myWords.emptyBody')} />}
      />
      {words.length ? (
        <View
          style={{
            width: '100%',
            maxWidth: MAX_WIDTH,
            alignSelf: 'center',
            paddingHorizontal: space.xl,
            paddingTop: space.md,
            paddingBottom: insets.bottom + space.lg,
          }}
        >
          <Button label={t('myWords.practise')} icon="play" onPress={() => router.push('/practice/mine')} />
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 14,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
