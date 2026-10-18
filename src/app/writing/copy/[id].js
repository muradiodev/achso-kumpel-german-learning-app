import { useKeepAwake } from 'expo-keep-awake';
import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { AppText } from '@/components/app-text';
import { Button } from '@/components/button';
import { Icon } from '@/components/icon';
import { Screen } from '@/components/screen';
import { ScreenHeader } from '@/components/screen-header';
import { Segmented } from '@/components/segmented';
import { getWritingTask } from '@/data';
import { useProgress } from '@/features/progress/progress-context';
import { speakGerman, stopSpeaking } from '@/features/speech/tts';
import { useI18n } from '@/i18n';
import { useTheme } from '@/theme';

const SIZES = [22, 26, 32, 38];

// Handwriting mode: the screen never sleeps while this is open, text is large,
// and you walk through the sample one sentence at a time.
export default function CopyMode() {
  useKeepAwake();
  const { id } = useLocalSearchParams();
  const task = getWritingTask(id);
  const { t } = useI18n();
  const { colors, space, radius } = useTheme();
  const { markWritingCopied } = useProgress();
  const [view, setView] = useState('sentence');
  const [index, setIndex] = useState(0);
  const [sizeIndex, setSizeIndex] = useState(1);

  if (!task) return null;
  const lines = task.sample;
  const fontSize = SIZES[sizeIndex];
  const isLast = index === lines.length - 1;

  function finish() {
    stopSpeaking();
    markWritingCopied(task.id);
    router.back();
  }

  const sizeButton = (delta, icon) => (
    <Pressable
      onPress={() => setSizeIndex((i) => Math.min(SIZES.length - 1, Math.max(0, i + delta)))}
      accessibilityRole="button"
      accessibilityLabel={t('writing.textSize')}
      hitSlop={6}
      style={[styles.sizeButton, { backgroundColor: colors.surfaceAlt }]}
    >
      <Icon name={icon} size={18} color={colors.text} />
    </Pressable>
  );

  return (
    <Screen
      footer={
        view === 'sentence' && !isLast ? (
          <View style={styles.navRow}>
            <Button
              label={t('writing.prev')}
              variant="secondary"
              onPress={() => setIndex((i) => Math.max(0, i - 1))}
              disabled={index === 0}
              style={styles.flex}
            />
            <Button label={t('writing.nextSentence')} onPress={() => setIndex((i) => i + 1)} style={styles.flex} />
          </View>
        ) : (
          <Button label={t('writing.finished')} icon="check" onPress={finish} />
        )
      }
    >
      <ScreenHeader
        title={t('writing.copyTitle')}
        right={
          <View style={styles.sizeRow}>
            {sizeButton(-1, 'minus')}
            {sizeButton(1, 'plus')}
          </View>
        }
      />
      <View style={[styles.awake, { backgroundColor: colors.accentSoft, borderRadius: radius.pill }]}>
        <Icon name="sun" size={14} color={colors.accent} />
        <AppText variant="caption" tone="accent">
          {t('writing.screenOn')}
        </AppText>
      </View>

      <View style={{ marginTop: space.lg }}>
        <Segmented
          value={view}
          onChange={setView}
          options={[
            { value: 'sentence', label: t('writing.sentenceView') },
            { value: 'full', label: t('writing.fullView') },
          ]}
        />
      </View>

      {view === 'sentence' ? (
        <View style={{ marginTop: space.xxl, gap: space.xl }}>
          <AppText variant="small" tone="muted">
            {t('practice.progress', { current: index + 1, total: lines.length })}
          </AppText>
          <AppText weight="500" style={{ fontSize, lineHeight: fontSize * 1.45 }}>
            {lines[index]}
          </AppText>
          <Button
            label={t('common.listen')}
            icon="listen"
            variant="ghost"
            onPress={() => speakGerman(lines[index], { rate: 0.85 })}
          />
        </View>
      ) : (
        <View style={{ marginTop: space.xl, gap: space.md }}>
          {lines.map((line, i) => (
            <AppText key={i} style={{ fontSize: fontSize * 0.8, lineHeight: fontSize * 0.8 * 1.5 }}>
              {line}
            </AppText>
          ))}
        </View>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  navRow: { flexDirection: 'row', gap: 12 },
  sizeRow: { flexDirection: 'row', gap: 8 },
  sizeButton: { width: 36, height: 36, borderRadius: 18, alignItems: 'center', justifyContent: 'center' },
  awake: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
});
