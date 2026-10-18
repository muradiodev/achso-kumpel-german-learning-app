import { router, useLocalSearchParams } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components/app-text';
import { Button } from '@/components/button';
import { EmptyState } from '@/components/empty-state';
import { Icon } from '@/components/icon';
import { IconChip } from '@/components/icon-chip';
import { Screen } from '@/components/screen';
import { ScreenHeader } from '@/components/screen-header';
import { Segmented } from '@/components/segmented';
import { SpeakButton } from '@/components/speak-button';
import { Surface } from '@/components/surface';
import { TappableText } from '@/components/tappable-text';
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
            onPress={() => router.push({ pathname: '/practice/[mode]', params: { mode: 'grammar', topics: topic.id } })}
          />
        ) : null
      }
    >
      <ScreenHeader title={topic.level} />
      <AppText variant="display">{topic.title}</AppText>
      <AppText tone="muted" style={{ marginTop: space.xs }}>
        {tr(topic.subtitle, lang)}
      </AppText>

      <View style={{ marginTop: space.xl }}>
        <Segmented
          value={status}
          onChange={(value) => setGrammarStatus(topic.id, value)}
          options={['new', 'learning', 'learned'].map((value) => ({
            value,
            label: t(`grammar.status.${value}`),
            icon: { new: 'circle', learning: 'learning', learned: 'checkCircle' }[value],
          }))}
        />
      </View>

      <Surface tone="accent" style={{ marginTop: space.xl }}>
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
              <TappableText text={example.de} context={example} weight="600" />
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
            {/* Red and green carry their meaning here: wrong and right. Icons repeat it. */}
            <View style={styles.mistake}>
              <Icon name="close" size={18} color={colors.danger} weight="bold" />
              <AppText style={[styles.flex, { color: colors.danger, textDecorationLine: 'line-through' }]}>
                {m.wrong}
              </AppText>
            </View>
            <View style={[styles.mistake, { marginTop: space.xs }]}>
              <Icon name="check" size={18} color={colors.success} weight="bold" />
              <AppText weight="600" style={[styles.flex, { color: colors.success }]}>
                {m.right}
              </AppText>
            </View>
            <AppText variant="small" tone="muted" style={{ marginTop: space.sm }}>
              {tr(m.why, lang)}
            </AppText>
          </Surface>
        ))}
      </View>

      {section(t('grammar.speak'))}
      <View style={{ gap: space.md }}>
        {topic.speak.map((prompt, i) => (
          <Surface key={i} tone="muted" style={styles.speak}>
            <IconChip name="chats" size={36} ground={colors.surface} />
            <AppText style={styles.flex}>{tr(prompt, lang)}</AppText>
          </Surface>
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
  mistake: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  speak: { flexDirection: 'row', alignItems: 'flex-start', gap: 12 },
});
