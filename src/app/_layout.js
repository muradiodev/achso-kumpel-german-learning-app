import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AppFrame } from '@/components/app-frame';
import { AuthProvider, hasLearningSetup, isProfileComplete, useAuth } from '@/features/auth/auth-context';
import { ProgressProvider } from '@/features/progress/progress-context';
import { UpdateNotice } from '@/features/updates/update-notice';
import { WhatsNew } from '@/features/updates/whats-new';
import { I18nProvider } from '@/i18n';
import { useTheme } from '@/theme';

function RootNavigator() {
  const { status, user } = useAuth();
  const { colors, scheme } = useTheme();

  if (status === 'loading') return <View style={{ flex: 1, backgroundColor: colors.bg }} />;

  const signedIn = Boolean(user);
  const profileDone = isProfileComplete(user);
  const ready = signedIn && profileDone && hasLearningSetup(user);
  // Where a blocked route should land. Without this the router falls back to
  // an arbitrary sibling (e.g. /login instead of /welcome).
  const entry = !signedIn ? '/welcome' : !profileDone ? '/setup/profile' : !ready ? '/setup/levels' : '/';

  // Registration is mandatory. Each guard opens the next step automatically
  // once the previous one is saved: account → profile + avatar → levels → app.
  return (
    <>
      <StatusBar style={scheme === 'dark' ? 'light' : 'dark'} />
      <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: colors.bg } }}>
        <Stack.Protected guard={!signedIn} redirectTo={entry}>
          <Stack.Screen name="welcome" />
          <Stack.Screen name="login" />
          <Stack.Screen name="register" />
        </Stack.Protected>

        <Stack.Protected guard={signedIn && !profileDone} redirectTo={entry}>
          <Stack.Screen name="setup/profile" />
          <Stack.Screen name="setup/avatar" />
        </Stack.Protected>

        <Stack.Protected guard={signedIn && profileDone && !ready} redirectTo={entry}>
          <Stack.Screen name="setup/levels" />
        </Stack.Protected>

        <Stack.Protected guard={ready} redirectTo={entry}>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="practice/[mode]" options={{ gestureEnabled: false }} />
          <Stack.Screen name="grammar/[id]" />
          <Stack.Screen name="verbs" />
          <Stack.Screen name="writing/[id]" />
          <Stack.Screen name="writing/copy/[id]" options={{ gestureEnabled: false }} />
          <Stack.Screen name="settings/levels" />
          <Stack.Screen name="settings/avatar" />
        </Stack.Protected>
      </Stack>
    </>
  );
}

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <I18nProvider>
        <AuthProvider>
          <ProgressProvider>
            <AppFrame>
              <RootNavigator />
              <WhatsNew />
              <UpdateNotice />
            </AppFrame>
          </ProgressProvider>
        </AuthProvider>
      </I18nProvider>
    </SafeAreaProvider>
  );
}
