import { useMemo, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

import { AppText } from '@/components/app-text';
import { useI18n } from '@/i18n';
import { useTheme } from '@/theme';

// Charts are single-hue purple (magnitude), never categorical. Every value is
// also printed as text, so nothing depends on telling two purples apart.

export function ProgressRing({ value, size = 120, stroke = 12, children }) {
  const { colors } = useTheme();
  const r = (size - stroke) / 2;
  const circumference = 2 * Math.PI * r;
  const clamped = Math.max(0, Math.min(1, value || 0));
  return (
    <View style={{ width: size, height: size }}>
      <Svg width={size} height={size} style={StyleSheet.absoluteFill}>
        <Circle cx={size / 2} cy={size / 2} r={r} stroke={colors.surfaceAlt} strokeWidth={stroke} fill="none" />
        {clamped > 0 ? (
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            stroke={colors.accent}
            strokeWidth={stroke}
            strokeLinecap="round"
            fill="none"
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={circumference * (1 - clamped)}
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
          />
        ) : null}
      </Svg>
      <View style={[StyleSheet.absoluteFill, styles.center]}>{children}</View>
    </View>
  );
}

// Horizontal bar: strong segment, soft segment, remaining track. 2px gaps.
export function SegmentBar({ total, strong, soft = 0, height = 10 }) {
  const { colors, radius } = useTheme();
  const pct = (n) => (total > 0 ? (n / total) * 100 : 0);
  return (
    <View style={[styles.segmentRow, { height, borderRadius: radius.pill, backgroundColor: colors.surfaceAlt }]}>
      {strong > 0 ? (
        <View style={{ width: `${pct(strong)}%`, backgroundColor: colors.accent, borderRadius: radius.pill }} />
      ) : null}
      {soft > 0 ? (
        <View
          style={{
            width: `${pct(soft)}%`,
            backgroundColor: colors.accentMuted,
            borderRadius: radius.pill,
            marginLeft: strong > 0 ? 2 : 0,
          }}
        />
      ) : null}
    </View>
  );
}

export function LegendDot({ tone = 'strong', label }) {
  const { colors } = useTheme();
  const color = { strong: colors.accent, soft: colors.accentMuted, track: colors.surfaceAlt }[tone];
  return (
    <View style={styles.legendItem}>
      <View style={[styles.legendSwatch, { backgroundColor: color, borderColor: colors.border }]} />
      <AppText variant="small" tone="muted">
        {label}
      </AppText>
    </View>
  );
}

// Last 7 days of reviews. Tap a bar to read its value; today is labelled.
export function WeekBars({ days, height = 96 }) {
  const { colors } = useTheme();
  const { lang } = useI18n();
  const weekday = useMemo(() => new Intl.DateTimeFormat(lang, { weekday: 'narrow' }), [lang]);
  const [selected, setSelected] = useState(days.length - 1);
  const max = Math.max(1, ...days.map((d) => d.count));

  return (
    <View style={styles.weekRow}>
      {days.map((d, i) => {
        const active = i === selected;
        const barHeight = d.count > 0 ? Math.max(6, (d.count / max) * height) : 3;
        return (
          <Pressable
            key={d.key}
            onPress={() => setSelected(i)}
            accessibilityRole="button"
            accessibilityLabel={`${d.key}: ${d.count}`}
            style={styles.weekCol}
          >
            <AppText variant="caption" tone={active ? 'accent' : 'faint'} style={{ opacity: active ? 1 : 0 }}>
              {d.count}
            </AppText>
            <View style={{ height, justifyContent: 'flex-end' }}>
              <View
                style={{
                  width: 20,
                  height: barHeight,
                  backgroundColor: d.count > 0 ? colors.accent : colors.border,
                  opacity: active || d.count === 0 ? 1 : 0.55,
                  // Rounded data end, square baseline.
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4,
                }}
              />
            </View>
            <AppText variant="caption" tone={active ? 'default' : 'faint'}>
              {weekday.format(d.date)}
            </AppText>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  center: { alignItems: 'center', justifyContent: 'center' },
  segmentRow: { flexDirection: 'row', overflow: 'hidden' },
  legendItem: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  legendSwatch: { width: 10, height: 10, borderRadius: 3, borderWidth: StyleSheet.hairlineWidth },
  weekRow: { flexDirection: 'row', justifyContent: 'space-between' },
  weekCol: { alignItems: 'center', gap: 6, flex: 1 },
});
