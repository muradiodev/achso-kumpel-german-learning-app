import { forwardRef, useState } from 'react';
import { Platform, Pressable, StyleSheet, TextInput, View } from 'react-native';

import { AppText } from '@/components/app-text';
import { useI18n } from '@/i18n';
import { fontFor, useTheme } from '@/theme';

// Label above, helper or error below. Never placeholder-as-label.
export const TextField = forwardRef(function TextField(
  { label, optional, helper, error, secure, style, inputStyle, ...props },
  ref,
) {
  const { colors, radius, type } = useTheme();
  const { t } = useI18n();
  const [focused, setFocused] = useState(false);
  const [hidden, setHidden] = useState(true);
  const borderColor = error ? colors.danger : focused ? colors.accent : colors.border;

  return (
    <View style={[styles.wrap, style]}>
      <AppText variant="small" weight="600">
        {label}
        {optional ? <AppText variant="small" tone="faint">{`  ${t('common.optional')}`}</AppText> : null}
      </AppText>
      <View style={[styles.field, { borderColor, borderRadius: radius.md, backgroundColor: colors.surface }]}>
        <TextInput
          ref={ref}
          accessibilityLabel={label}
          placeholderTextColor={colors.textFaint}
          selectionColor={colors.accent}
          secureTextEntry={secure && hidden}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={[
            type.body,
            styles.input,
            { color: colors.text, fontFamily: fontFor('400'), fontWeight: undefined },
            inputStyle,
          ]}
          {...props}
        />
        {secure ? (
          <Pressable onPress={() => setHidden((h) => !h)} hitSlop={8} accessibilityRole="button">
            <AppText variant="small" tone="accent" weight="600">
              {hidden ? t('auth.showPassword') : t('auth.hidePassword')}
            </AppText>
          </Pressable>
        ) : null}
      </View>
      {error ? (
        <AppText variant="small" tone="danger">
          {error}
        </AppText>
      ) : helper ? (
        <AppText variant="small" tone="faint">
          {helper}
        </AppText>
      ) : null}
    </View>
  );
});

const styles = StyleSheet.create({
  wrap: { gap: 8 },
  field: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, paddingHorizontal: 14, minHeight: 52 },
  // The field border already shows focus; drop the browser's extra outline on web.
  input: { flex: 1, paddingVertical: 12, ...(Platform.OS === 'web' ? { outlineStyle: 'none' } : null) },
});
