import { memo, useMemo } from 'react';

import { AppText } from '@/components/app-text';
import { useProgress } from '@/features/progress/progress-context';
import { myWordId, tokenize } from '@/features/words/lookup';
import { useWordSheet } from '@/features/words/word-sheet';
import { useTheme } from '@/theme';

// German text where every word can be tapped to open the word sheet.
// Words already in My words are underlined in the accent colour.
// `context` is the whole sentence ({ de, tr }) saved alongside the word.
export const TappableText = memo(function TappableText({ text, context, ...textProps }) {
  const { openWord } = useWordSheet();
  const { myWords } = useProgress();
  const { colors } = useTheme();
  const tokens = useMemo(() => tokenize(text), [text]);
  const ctx = context ?? { de: text, tr: null };

  return (
    <AppText {...textProps}>
      {tokens.map((token, i) =>
        token.isWord ? (
          <AppText
            key={i}
            {...textProps}
            style={[
              textProps.style,
              myWords[myWordId(token.text)] && {
                textDecorationLine: 'underline',
                textDecorationColor: colors.accent,
                color: colors.accent,
              },
            ]}
            onPress={() => openWord(token.text, ctx)}
            suppressHighlighting={false}
          >
            {token.text}
          </AppText>
        ) : (
          token.text
        ),
      )}
    </AppText>
  );
});
