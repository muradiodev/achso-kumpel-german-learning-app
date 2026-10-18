import { router, useLocalSearchParams } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components/app-text';
import { Button } from '@/components/button';
import { EmptyState } from '@/components/empty-state';
import { Screen } from '@/components/screen';
import { ScreenHeader } from '@/components/screen-header';
import { Segmented } from '@/components/segmented';
import { SpeakButton } from '@/components/speak-button';
import { Surface } from '@/components/surface';
import { SENTENCES, getGrammarTopic } from '@/data';
import { useProgress } from '@/features/progress/progress-context';
import { tr } from '@/i18n/content';
import { useI18n } from '@/i18n';
import { useTheme } from '@/theme';

export default function GrammarTopic() {
  const { id } = useLocalSearchParams();
  const topic = getGrammarTopic(id);
  const { t, lang } = useI18n();
  const { colors, space } = useTheme();
  const { grammar, setGrammarStatus } = useProgress();

  if (!topic) {
    return (
      <Screen>
        <ScreenHeader />
        <EmptyState title={t('practice.emptyTitle')} />
      </Screen>
    );
  }

  const status = grammar[topic.id] ?? 'new';
  const hasSentences = SENTENCES.some((s) => s.grammar.includes(topic.id));
  const section = (title) => (
    <AppText variant="heading" style={{ marginTop: space.xxl, marginBottom: space.md }}>
      {title}
    </AppText>
  );

  return (
    <Screen
      footer={
        hasSentences ? (
          <Button
            label={t('grammar.practise')}
            icon="play"
            onPress={() => router.push({ pathname: '/practice/[mode]', params: { mode: 'grammar', topic: topic.id } })}
          />
        ) : null
      }
    >
      <ScreenHeader title={topic.level} />
      <AppText variant="title">{topic.title}</AppText>
      <AppText tone="muted" style={{ marginTop: space.xs }}>
        {tr(topic.subtitle, lang)}
      </AppText>

      <View style={{ marginTop: space.xl }}>
        <Segmented
          value={status}
          onChange={(value) => setGrammarStatus(topic.id, value)}
          options={['new', 'learning', 'learned'].map((value) => ({ value, label: t(`grammar.status.${value}`) }))}
        />
      </View>

      <Surface tone="muted" style={{ marginTop: space.xl }}>
        <AppText variant="caption" tone="accent">
          {t('grammar.inShort')}
        </AppText>
        <AppText style={{ marginTop: space.xs }}>{tr(topic.summary, lang)}</AppText>
      </Surface>

      {section(t('grammar.rules'))}
      <View style={{ gap: space.md }}>
        {topic.rules.map((rule, i) => (
          <View key={i} style={styles.bullet}>
            <View style={[styles.dot, { backgroundColor: colors.accent }]} />
            <AppText style={styles.flex}>{tr(rule, lang)}</AppText>
          </View>
        ))}
      </View>

      {section(t('grammar.examples'))}
      <View style={{ gap: space.lg }}>
        {topic.examples.map((example) => (
          <View key={example.de} style={styles.example}>
            <View style={styles.flex}>
              <AppText weight="600">{example.de}</AppText>
              <AppText variant="small" tone="muted">
                {tr(example.tr, lang)}
              </AppText>
            </View>
            <SpeakButton text={example.de} />
          </View>
        ))}
      </View>

      {section(t('grammar.mistakes'))}
      <View style={{ gap: space.md }}>
        {topic.mistakes.map((m) => (
          <Surface key={m.wrong}>
            <AppText style={{ color: colors.danger, textDecorationLine: 'line-through' }}>{m.wrong}</AppText>
            <AppText weight="600" style={{ color: colors.success, marginTop: space.xs }}>
              {m.right}
            </AppText>
            <AppText variant="small" tone="muted" style={{ marginTop: space.sm }}>
              {tr(m.why, lang)}
            </AppText>
          </Surface>
        ))}
      </View>

      {section(t('grammar.speak'))}
      <View style={{ gap: space.md }}>
        {topic.speak.map((prompt, i) => (
          <AppText key={i} tone="muted">
            {tr(prompt, lang)}
          </AppText>
        ))}
      </View>

      {!hasSentences ? (
        <AppText variant="small" tone="faint" style={{ marginTop: space.xl }}>
          {t('grammar.noSentences')}
        </AppText>
      ) : null}
    </Screen>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  bullet: { flexDirection: 'row', gap: 12 },
  dot: { width: 6, height: 6, borderRadius: 3, marginTop: 9 },
  example: { flexDirection: 'row', alignItems: 'center', gap: 12 },
});
