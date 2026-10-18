import { router } from 'expo-router';
import { memo } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { AppText } from '@/components/app-text';
import { Avatar } from '@/components/avatar';
import { fullName } from '@/features/community/use-community';
import { useI18n } from '@/i18n';
import { useTheme } from '@/theme';

const openMember = (id) => router.push(`/community/${id}`);

// Round rank badge sitting on an avatar's lower edge.
function RankBadge({ rank, size = 24 }) {
  const { colors } = useTheme();
  const first = rank === 1;
  return (
    <View
      style={[
        styles.rankBadge,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: first ? colors.accent : colors.surface,
          borderColor: first ? colors.accent : colors.border,
        },
      ]}
    >
      <AppText variant="caption" weight="800" tone={first ? 'onAccent' : 'default'}>
        {rank}
      </AppText>
    </View>
  );
}

// Top three of a board. First place stands in the middle and higher.
export function Podium({ members, stat, unit, meId }) {
  const { colors, radius } = useTheme();
  const order = [members[1], members[0], members[2]];
  const heights = [64, 88, 48];
  return (
    <View style={styles.podium}>
      {order.map((m, i) => {
        if (!m) return <View key={`empty-${i}`} style={styles.podiumCol} />;
        const rank = i === 1 ? 1 : i === 0 ? 2 : 3;
        const isMe = m.id === meId;
        return (
          <Pressable
            key={m.id}
            onPress={() => openMember(m.id)}
            accessibilityRole="button"
            accessibilityLabel={`${rank}. ${fullName(m)}, ${m.stats[stat]} ${unit}`}
            style={({ pressed }) => [styles.podiumCol, { transform: [{ scale: pressed ? 0.97 : 1 }] }]}
          >
            <View>
              <Avatar id={m.avatarId} size={rank === 1 ? 64 : 52} />
              <View style={styles.badgeSpot}>
                <RankBadge rank={rank} />
              </View>
            </View>
            <AppText
              weight="700"
              tone={isMe ? 'accent' : 'default'}
              numberOfLines={1}
              align="center"
              style={styles.podiumName}
            >
              {m.firstName}
            </AppText>
            <View
              style={[
                styles.step,
                {
                  height: heights[i],
                  backgroundColor: rank === 1 ? colors.accent : colors.accentSoft,
                  borderTopLeftRadius: radius.md,
                  borderTopRightRadius: radius.md,
                },
              ]}
            >
              <AppText variant="heading" tone={rank === 1 ? 'onAccent' : 'accent'}>
                {m.stats[stat]}
              </AppText>
              <AppText variant="caption" tone={rank === 1 ? 'onAccent' : 'accent'} numberOfLines={1}>
                {unit}
              </AppText>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
}

// One member in a list: rank (optional), avatar, name, a detail line and a value.
export const MemberRow = memo(function MemberRow({ member, rank, value, detail, isMe }) {
  const { colors, radius } = useTheme();
  const { t } = useI18n();
  return (
    <Pressable
      onPress={() => openMember(member.id)}
      accessibilityRole="button"
      style={({ pressed }) => [
        styles.row,
        { borderRadius: radius.md, opacity: pressed ? 0.7 : 1 },
        isMe && { backgroundColor: colors.accentSoft },
      ]}
    >
      {rank ? (
        <AppText weight="700" tone="faint" style={styles.rank}>
          {rank}
        </AppText>
      ) : null}
      <Avatar id={member.avatarId} size={40} />
      <View style={styles.flex}>
        <AppText weight="600" numberOfLines={1}>
          {isMe ? `${fullName(member)} (${t('community.you')})` : fullName(member)}
        </AppText>
        {detail ? (
          <AppText variant="small" tone="muted" numberOfLines={1}>
            {detail}
          </AppText>
        ) : null}
      </View>
      {value != null ? (
        <AppText variant="heading" tone={isMe ? 'accent' : 'default'}>
          {value}
        </AppText>
      ) : null}
    </Pressable>
  );
});

const styles = StyleSheet.create({
  podium: { flexDirection: 'row', alignItems: 'flex-end', gap: 10 },
  podiumCol: { flex: 1, alignItems: 'center', gap: 8 },
  podiumName: { alignSelf: 'stretch' },
  badgeSpot: { position: 'absolute', right: -4, bottom: -4 },
  rankBadge: { borderWidth: 1, alignItems: 'center', justifyContent: 'center' },
  step: { alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 4 },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 10,
    paddingHorizontal: 8,
    minHeight: 60,
  },
  rank: { width: 24, textAlign: 'center' },
  flex: { flex: 1, gap: 2 },
});
