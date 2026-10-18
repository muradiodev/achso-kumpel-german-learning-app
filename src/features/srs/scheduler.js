// Small SM-2 style scheduler. State per item:
//   { ease, interval (days), reps, lapses, due (ms), last (ms) }
// Lapses drive the "weak spots" queue, so forgotten items surface first.

export const RATING = { AGAIN: 0, HARD: 1, GOOD: 2, EASY: 3 };

const MINUTE = 60 * 1000;
const DAY = 24 * 60 * MINUTE;

export function review(state, rating, now = Date.now()) {
  let { ease = 2.5, interval = 0, reps = 0, lapses = 0 } = state ?? {};

  if (rating === RATING.AGAIN) {
    return {
      ease: Math.max(1.3, ease - 0.2),
      interval: 0,
      reps: 0,
      lapses: lapses + 1,
      due: now + 10 * MINUTE,
      last: now,
    };
  }

  if (reps === 0) {
    interval = [0, 0.5, 1, 3][rating];
  } else if (reps === 1) {
    interval = [0, 2, 3, 5][rating];
  } else {
    const factor = [0, 1.2, ease, ease * 1.3][rating];
    interval = Math.max(1, interval * factor);
  }
  if (rating === RATING.HARD) ease -= 0.15;
  if (rating === RATING.EASY) ease += 0.15;

  return {
    ease: Math.max(1.3, ease),
    interval,
    reps: reps + 1,
    lapses,
    due: now + interval * DAY,
    last: now,
  };
}

export const isDue = (state, now = Date.now()) => Boolean(state) && state.due <= now;

export const isWeak = (state) => Boolean(state) && (state.lapses >= 2 || state.ease < 2.0);

// Higher means "practise this sooner" among due items.
export const weakness = (state) => (state.lapses ?? 0) * 2 + (2.5 - (state.ease ?? 2.5)) * 4;
