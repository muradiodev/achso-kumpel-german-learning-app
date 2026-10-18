import { PlusJakartaSans_400Regular } from '@expo-google-fonts/plus-jakarta-sans/400Regular';
import { PlusJakartaSans_500Medium } from '@expo-google-fonts/plus-jakarta-sans/500Medium';
import { PlusJakartaSans_600SemiBold } from '@expo-google-fonts/plus-jakarta-sans/600SemiBold';
import { PlusJakartaSans_700Bold } from '@expo-google-fonts/plus-jakarta-sans/700Bold';
import { PlusJakartaSans_800ExtraBold } from '@expo-google-fonts/plus-jakarta-sans/800ExtraBold';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AppFrame } from '@/components/app-frame';
import { AuthProvider, hasLearningSetup, isProfileComplete, useAuth } from '@/features/auth/auth-context';
import { ProgressProvider } from '@/features/progress/progress-context';
import { UpdateNotice } from '@/features/updates/update-notice';
import { WhatsNew } from '@/features/updates/whats-new';
import { WordSheetProvider } from '@/features/words/word-sheet';
import { I18nProvider } from '@/i18n';
import { ThemeModeProvider, useTheme } from '@/theme';

function RootNavigator() {
  const { status, user } = useAuth();
  const { colors, scheme } = useTheme();
  const [fontsLoaded, fontError] = useFonts({
    PlusJakartaSans_400Regular,
    PlusJakartaSans_500Medium,
    PlusJakartaSans_600SemiBold,
    PlusJakartaSans_700Bold,
    PlusJakartaSans_800ExtraBold,
  });

  // A font error falls back to the system font instead of blocking the app.
  if (status === 'loading' || (!fontsLoaded && !fontError))
    return <View style={{ flex: 1, backgroundColor: colors.bg }} />;

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
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.bg },
        }}
      >
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
          <Stack.Screen name="progress" />
          <Stack.Screen name="gifts" />
          <Stack.Screen name="writing/index" />
          <Stack.Screen name="writing/[id]" />
          <Stack.Screen name="writing/copy/[id]" options={{ gestureEnabled: false }} />
          <Stack.Screen name="settings/levels" />
          <Stack.Screen name="settings/avatar" />
          <Stack.Screen name="settings/account" />
          <Stack.Screen name="settings/language" />
          <Stack.Screen name="my-words" />
          <Stack.Screen name="reading/index" />
          <Stack.Screen name="reading/[id]" />
          <Stack.Screen name="community/[id]" />
        </Stack.Protected>
      </Stack>
    </>
  );
}

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={styles.root}>
      <SafeAreaProvider>
        <ThemeModeProvider>
          <I18nProvider>
            <AuthProvider>
              <ProgressProvider>
                <AppFrame>
                  <WordSheetProvider>
                    <RootNavigator />
                    <WhatsNew />
                    <UpdateNotice />
                  </WordSheetProvider>
                </AppFrame>
              </ProgressProvider>
            </AuthProvider>
          </I18nProvider>
        </ThemeModeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
});
