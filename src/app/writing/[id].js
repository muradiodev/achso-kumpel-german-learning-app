import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components/app-text';
import { Button } from '@/components/button';
import { EmptyState } from '@/components/empty-state';
import { Screen } from '@/components/screen';
import { ScreenHeader } from '@/components/screen-header';
import { SpeakButton } from '@/components/speak-button';
import { Surface } from '@/components/surface';
import { getWritingTask } from '@/data';
import { ai } from '@/features/ai/ai-service';
import { tr } from '@/i18n/content';
import { useI18n } from '@/i18n';
import { useTheme } from '@/theme';

export default function WritingTask() {
  const { id } = useLocalSearchParams();
  const task = getWritingTask(id);
  const { t, lang } = useI18n();
  const { colors, space } = useTheme();

  if (!task) {
    return (
      <Screen>
        <ScreenHeader />
        <EmptyState title={t('practice.emptyTitle')} />
      </Screen>
    );
  }

  const aiReady = ai.isAvailable();
  const section = (title) => (
    <AppText variant="heading" style={{ marginTop: space.xxl, marginBottom: space.md }}>
      {title}
    </AppText>
  );

  return (
    <Screen
      footer={<Button label={t('writing.copyMode')} icon="pencil" onPress={() => router.push(`/writing/copy/${task.id}`)} />}
    >
      <ScreenHeader title={`${t(`writing.filters.${task.type}`)} · ${task.level}`} />
      <AppText variant="title">{tr(task.title, lang)}</AppText>
      <AppText variant="small" tone="muted" style={{ marginTop: space.xs }}>
        {`${t('writing.minutes', { count: task.minutes })}  ·  ${t('writing.words', { count: task.words })}`}
      </AppText>

      {section(t('writing.situation'))}
      <AppText>{tr(task.situation, lang)}</AppText>

      {section(t('writing.points'))}
      <View style={{ gap: space.sm }}>
        {task.points.map((point, i) => (
          <View key={i} style={styles.point}>
            <Ionicons name="checkbox-outline" size={20} color={colors.accent} />
            <AppText style={styles.flex}>{tr(point, lang)}</AppText>
          </View>
        ))}
      </View>

      {section(t('writing.sample'))}
      <Surface>
        <View style={{ gap: space.sm }}>
          {task.sample.map((line, i) => (
            <AppText key={i}>{line}</AppText>
          ))}
        </View>
      </Surface>

      {section(t('writing.phrases'))}
      <View style={{ gap: space.lg }}>
        {task.phrases.map((p) => (
          <View key={p.de} style={styles.point}>
            <View style={styles.flex}>
              <AppText weight="600">{p.de}</AppText>
              <AppText variant="small" tone="muted">
                {tr(p.tr, lang)}
              </AppText>
            </View>
            <SpeakButton text={p.de} />
          </View>
        ))}
      </View>

      <Surface tone="muted" style={{ marginTop: space.xxl }}>
        <View style={styles.point}>
          <Ionicons name="camera-outline" size={22} color={colors.textMuted} />
          <View style={styles.flex}>
            <AppText weight="600">{t('writing.aiFeedback')}</AppText>
            <AppText variant="small" tone="muted">
              {aiReady ? '' : `${t('common.comingSoon')}. ${t('writing.aiFeedbackBody')}`}
            </AppText>
          </View>
        </View>
      </Surface>
    </Screen>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  point: { flexDirection: 'row', alignItems: 'center', gap: 12 },
});
