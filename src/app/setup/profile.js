import { router } from 'expo-router';
import { useState } from 'react';
import { View } from 'react-native';

import { AppText } from '@/components/app-text';
import { Button } from '@/components/button';
import { Screen } from '@/components/screen';
import { TextField } from '@/components/text-field';
import { useAuth } from '@/features/auth/auth-context';
import { useI18n } from '@/i18n';
import { useTheme } from '@/theme';
import { ageFrom, formatBirthDateInput, isPhone, parseBirthDate } from '@/utils/validation';

export default function ProfileSetup() {
  const { t } = useI18n();
  const { space } = useTheme();
  const { user, updateProfile, logout } = useAuth();
  const p = user.profile ?? {};
  const [form, setForm] = useState({
    firstName: p.firstName ?? '',
    lastName: p.lastName ?? '',
    birthDate: p.birthDate ?? '',
    phone: p.phone ?? '',
    profession: p.profession ?? '',
  });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);
  const set = (key) => (value) => setForm((f) => ({ ...f, [key]: value }));

  function validate() {
    const next = {};
    if (!form.firstName.trim()) next.firstName = t('setup.errors.required');
    if (!form.lastName.trim()) next.lastName = t('setup.errors.required');
    const date = parseBirthDate(form.birthDate);
    if (!date) next.birthDate = t('setup.errors.birthDate');
    else if (ageFrom(date) < 10 || ageFrom(date) > 110) next.birthDate = t('setup.errors.age');
    if (form.phone.trim() && !isPhone(form.phone)) next.phone = t('setup.errors.phone');
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function submit() {
    if (!validate()) return;
    setSaving(true);
    await updateProfile({
      firstName: form.firstName.trim(),
      lastName: form.lastName.trim(),
      birthDate: form.birthDate,
      phone: form.phone.trim(),
      profession: form.profession.trim(),
    });
    setSaving(false);
    router.push('/setup/avatar');
  }

  return (
    <Screen
      footer={
        <View style={{ gap: space.sm }}>
          <Button label={t('common.continue')} onPress={submit} loading={saving} />
          <Button label={t('profile.logout')} variant="ghost" onPress={logout} />
        </View>
      }
    >
      <AppText variant="caption" tone="accent">
        {t('common.stepOf', { step: 1, total: 3 })}
      </AppText>
      <AppText variant="title" style={{ marginTop: space.sm }}>
        {t('setup.profileTitle')}
      </AppText>
      <AppText tone="muted" style={{ marginTop: space.sm }}>
        {t('setup.profileSub')}
      </AppText>

      <View style={{ gap: space.lg, marginTop: space.xl }}>
        <TextField
          label={t('setup.firstName')}
          value={form.firstName}
          onChangeText={set('firstName')}
          autoComplete="given-name"
          textContentType="givenName"
          error={errors.firstName}
        />
        <TextField
          label={t('setup.lastName')}
          value={form.lastName}
          onChangeText={set('lastName')}
          autoComplete="family-name"
          textContentType="familyName"
          error={errors.lastName}
        />
        <TextField
          label={t('setup.birthDate')}
          placeholder={t('setup.birthDatePlaceholder')}
          value={form.birthDate}
          onChangeText={(v) => set('birthDate')(formatBirthDateInput(v))}
          keyboardType="number-pad"
          maxLength={10}
          error={errors.birthDate}
        />
        <TextField
          label={t('setup.phone')}
          optional
          placeholder={t('setup.phonePlaceholder')}
          value={form.phone}
          onChangeText={set('phone')}
          keyboardType="phone-pad"
          autoComplete="tel"
          textContentType="telephoneNumber"
          error={errors.phone}
        />
        <TextField
          label={t('setup.profession')}
          optional
          placeholder={t('setup.professionPlaceholder')}
          value={form.profession}
          onChangeText={set('profession')}
          autoCapitalize="sentences"
        />
      </View>
    </Screen>
  );
}
