import * as Haptics from 'expo-haptics';
import { memo, useEffect, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { GestureDetector, useCompetingGestures, usePanGesture, useTapGesture } from 'react-native-gesture-handler';
import Animated, {
  FadeIn,
  LinearTransition,
  useAnimatedReaction,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { scheduleOnRN } from 'react-native-worklets';

import { AppText } from '@/components/app-text';
import { useTheme } from '@/theme';

// Word tiles for building a sentence.
//  - Tap a tile in the bank: it moves to the end of the answer.
//  - Tap a tile in the answer: it goes back to the bank.
//  - Drag a tile in the answer: drop it where it belongs.
// Dragging runs on the UI thread; React only hears about the final drop.

const SPRING = { duration: 300, dampingRatio: 0.8 };

function Tile({ text, tone = 'default', ghost = false, lifted }) {
  const { colors, radius } = useTheme();
  const palette = {
    default: { bg: colors.surface, border: colors.border, fg: colors.text },
    wrong: { bg: colors.dangerSoft, border: colors.danger, fg: colors.danger },
    right: {
      bg: colors.successSoft,
      border: colors.success,
      fg: colors.success,
    },
  }[tone];
  return (
    <View
      style={[
        styles.tile,
        {
          borderRadius: radius.md,
          backgroundColor: ghost ? colors.surfaceAlt : palette.bg,
          borderColor: ghost ? colors.surfaceAlt : lifted ? colors.accent : palette.border,
          // A deeper lower edge makes default tiles read as keys you can press.
          borderBottomColor: ghost ? colors.surfaceAlt : lifted ? colors.accent : tone === 'default' ? colors.tileLip : palette.border,
        },
      ]}
    >
      <AppText weight="600" style={{ color: ghost ? 'transparent' : palette.fg }}>
        {text}
      </AppText>
    </View>
  );
}

// The dragged tile gets an accent border while it is lifted.
function LiftedTile({ text, tone, lifted }) {
  const [isLifted, setLifted] = useState(false);
  useAnimatedReaction(
    () => lifted.get(),
    (now, before) => {
      if (now !== before) scheduleOnRN(setLifted, Boolean(now));
    },
  );
  return <Tile text={text} tone={tone} lifted={isLifted} />;
}

const AnswerTile = memo(function AnswerTile({ tile, tone, layouts, order, locked, onRemove, onMove }) {
  const reduced = useReducedMotion();
  const tx = useSharedValue(0);
  const ty = useSharedValue(0);
  const lifted = useSharedValue(0);

  const pan = usePanGesture({
    enabled: !locked,
    minDistance: 6,
    onActivate: () => {
      'worklet';
      lifted.set(1);
      scheduleOnRN(Haptics.selectionAsync);
    },
    onUpdate: (e) => {
      'worklet';
      tx.set(e.translationX);
      ty.set(e.translationY);
    },
    onDeactivate: (e) => {
      'worklet';
      const all = layouts.get();
      const ids = order.get();
      const from = ids.indexOf(tile.id);
      const me = all[tile.id];
      let to = from;
      if (me) {
        const cx = me.x + me.w / 2 + e.translationX;
        const cy = me.y + me.h / 2 + e.translationY;
        let best = Number.MAX_VALUE;
        ids.forEach((id, i) => {
          const l = all[id];
          if (!l) return;
          // Rows matter more than columns: weigh vertical distance double.
          const d = (l.x + l.w / 2 - cx) ** 2 + 2 * (l.y + l.h / 2 - cy) ** 2;
          if (d < best) {
            best = d;
            to = i;
          }
        });
      }
      tx.set(withSpring(0, SPRING));
      ty.set(withSpring(0, SPRING));
      lifted.set(0);
      if (to !== from) scheduleOnRN(onMove, from, to);
    },
  });
  const tap = useTapGesture({
    enabled: !locked,
    onActivate: () => {
      'worklet';
      scheduleOnRN(onRemove, tile.id);
    },
  });
  const gesture = useCompetingGestures(pan, tap);

  const style = useAnimatedStyle(() => ({
    zIndex: lifted.get() ? 10 : 0,
    transform: [
      { translateX: tx.get() },
      { translateY: ty.get() },
      { scale: withSpring(lifted.get() ? 1.06 : 1, SPRING) },
      { rotate: lifted.get() && !reduced ? '-2deg' : '0deg' },
    ],
  }));

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View
        layout={reduced ? undefined : LinearTransition.springify().duration(300).dampingRatio(0.85)}
        entering={reduced ? undefined : FadeIn.duration(150)}
        onLayout={(e) => {
          const { x, y, width, height } = e.nativeEvent.layout;
          layouts.set((prev) => ({
            ...prev,
            [tile.id]: { x, y, w: width, h: height },
          }));
        }}
        style={style}
        accessibilityRole="button"
        accessibilityLabel={tile.text}
      >
        <LiftedTile text={tile.text} tone={tone} lifted={lifted} />
      </Animated.View>
    </GestureDetector>
  );
});

export function TileBoard({ tiles, answer, onChange, wrong, solved, locked }) {
  const { colors, space } = useTheme();
  const layouts = useSharedValue({});
  const order = useSharedValue(answer);

  useEffect(() => {
    order.set(answer);
  }, [answer, order]);

  const byId = Object.fromEntries(tiles.map((t) => [t.id, t]));
  const used = new Set(answer);

  const add = (id) => {
    if (locked) return;
    Haptics.selectionAsync();
    onChange([...answer, id]);
  };
  const remove = (id) => onChange(answer.filter((x) => x !== id));
  const move = (from, to) => {
    const next = [...answer];
    const [id] = next.splice(from, 1);
    next.splice(to, 0, id);
    onChange(next);
  };

  return (
    <View style={{ gap: space.xl }}>
      <View style={[styles.answer, { borderColor: colors.border }]}>
        {/* Ruled lines between tile rows, like a page you write on. */}
        <View style={[styles.rule, { top: 60, backgroundColor: colors.border }]} />
        <View style={[styles.rule, { top: 116, backgroundColor: colors.border }]} />
        {answer.map((id, i) => (
          <AnswerTile
            key={id}
            tile={byId[id]}
            tone={solved ? 'right' : wrong?.has(i) ? 'wrong' : 'default'}
            layouts={layouts}
            order={order}
            locked={locked}
            onRemove={remove}
            onMove={move}
          />
        ))}
      </View>

      <View style={styles.bank}>
        {tiles.map((tile) =>
          used.has(tile.id) ? (
            <Tile key={tile.id} text={tile.text} ghost />
          ) : (
            <Pressable
              key={tile.id}
              onPress={() => add(tile.id)}
              disabled={locked}
              accessibilityRole="button"
              accessibilityLabel={tile.text}
              style={({ pressed }) => ({
                transform: [{ scale: pressed ? 0.96 : 1 }],
              })}
            >
              <Tile text={tile.text} />
            </Pressable>
          ),
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  answer: {
    minHeight: 120,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
    gap: 8,
    paddingTop: 8,
  },
  rule: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: StyleSheet.hairlineWidth,
  },
  bank: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
  },
  tile: {
    minHeight: 48,
    paddingHorizontal: 16,
    justifyContent: 'center',
    borderWidth: 1.5,
    borderBottomWidth: 3.5,
  },
});
