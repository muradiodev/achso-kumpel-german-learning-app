import { router } from 'expo-router';
import { useRef, useState } from 'react';
import { View } from 'react-native';

import { AppText } from '@/components/app-text';
import { Button } from '@/components/button';
import { Screen } from '@/components/screen';
import { ScreenHeader } from '@/components/screen-header';
import { TextField } from '@/components/text-field';
import { useAuth } from '@/features/auth/auth-context';
import { API_URL } from '@/lib/api';
import { useI18n } from '@/i18n';
import { useTheme } from '@/theme';
import { isEmail, isPasswordValid } from '@/utils/validation';

// Shared by /register and /login: email + password, nothing else.
export function AuthForm({ mode }) {
  const isRegister = mode === 'register';
  const { t } = useI18n();
  const { space } = useTheme();
  const { register, login } = useAuth();
  const passwordRef = useRef(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  async function submit() {
    const next = {};
    if (!isEmail(email)) next.email = t('auth.errors.emailInvalid');
    if (isRegister && !isPasswordValid(password)) next.password = t('auth.errors.passwordShort');
    if (!isRegister && !password) next.password = t('auth.errors.invalidCredentials');
    setErrors(next);
    if (Object.keys(next).length) return;

    setSubmitting(true);
    try {
      await (isRegister ? register : login)({ email, password });
      // The root layout's guards take over and open the next screen.
    } catch (error) {
      setErrors({ form: t(error.code ?? 'auth.errors.generic') });
      setSubmitting(false);
    }
  }

  return (
    <Screen
      footer={
        <View style={{ gap: space.sm }}>
          <Button label={t(isRegister ? 'auth.registerCta' : 'auth.loginCta')} onPress={submit} loading={submitting} />
          <Button
            label={t(isRegister ? 'auth.toLogin' : 'auth.toRegister')}
            variant="ghost"
            onPress={() => router.replace(isRegister ? '/login' : '/register')}
          />
        </View>
      }
    >
      <ScreenHeader />
      <AppText variant="display">{t(isRegister ? 'auth.registerTitle' : 'auth.loginTitle')}</AppText>
      <AppText tone="muted" style={{ marginTop: space.sm }}>
        {t(isRegister ? 'auth.registerSub' : 'auth.loginSub')}
      </AppText>

      <View style={{ gap: space.lg, marginTop: space.xl }}>
        <TextField
          label={t('auth.email')}
          placeholder={t('auth.emailPlaceholder')}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoComplete="email"
          keyboardType="email-address"
          textContentType="emailAddress"
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current?.focus()}
          error={errors.email}
        />
        <TextField
          ref={passwordRef}
          label={t('auth.password')}
          value={password}
          onChangeText={setPassword}
          secure
          autoCapitalize="none"
          autoComplete={isRegister ? 'new-password' : 'current-password'}
          textContentType={isRegister ? 'newPassword' : 'password'}
          returnKeyType="go"
          onSubmitEditing={submit}
          helper={isRegister ? t('auth.passwordHelper') : undefined}
          error={errors.password}
        />
        {errors.form ? (
          <AppText variant="small" tone="danger">
            {errors.form}
          </AppText>
        ) : null}
        <AppText variant="small" tone="faint">
          {t(API_URL ? 'auth.syncNote' : 'auth.localNote')}
        </AppText>
      </View>
    </Screen>
  );
}
