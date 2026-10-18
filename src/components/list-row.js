import { Ionicons } from '@expo/vector-icons';
import { memo } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { AppText } from '@/components/app-text';
import { useTheme } from '@/theme';

export const ListRow = memo(function ListRow({ title, subtitle, left, right, onPress, chevron = true }) {
  const { colors } = useTheme();
  return (
    <Pressable
      onPress={onPress}
      disabled={!onPress}
      accessibilityRole={onPress ? 'button' : undefined}
      style={({ pressed }) => [styles.row, { opacity: pressed ? 0.7 : 1 }]}
    >
      {left ? <View style={styles.left}>{left}</View> : null}
      <View style={styles.body}>
        <AppText weight="600" numberOfLines={2}>
          {title}
        </AppText>
        {subtitle ? (
          <AppText variant="small" tone="muted" numberOfLines={2}>
            {subtitle}
          </AppText>
        ) : null}
      </View>
      {right}
      {onPress && chevron ? <Ionicons name="chevron-forward" size={18} color={colors.textFaint} /> : null}
    </Pressable>
  );
});

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 14, minHeight: 56 },
  left: { width: 36, alignItems: 'center' },
  body: { flex: 1, gap: 2 },
});
