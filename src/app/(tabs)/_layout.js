import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router/js-tabs';
import { Platform } from 'react-native';

import { useIsFramed } from '@/components/app-frame';
import { useI18n } from '@/i18n';
import { useTheme } from '@/theme';

const ICONS = {
  index: 'today',
  practice: 'flash',
  grammar: 'checkbox',
  writing: 'create',
  profile: 'person-circle',
};

export default function TabsLayout() {
  const { t } = useI18n();
  const { colors } = useTheme();
  // Inside the rounded frame the bar needs room above the curved corners.
  const framed = useIsFramed();

  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        // Keep the phone-style bar (icon above label) even on wide screens.
        tabBarLabelPosition: 'below-icon',
        tabBarActiveTintColor: colors.accent,
        tabBarInactiveTintColor: colors.textFaint,
        tabBarStyle: [
          { backgroundColor: colors.surface, borderTopColor: colors.border },
          // Web has no safe-area inset, and the default height clips the labels.
          Platform.OS === 'web' && { height: 64, paddingBottom: 8 },
          framed && { height: 68, paddingBottom: 12 },
        ],
        sceneStyle: { backgroundColor: colors.bg },
        tabBarIcon: ({ color, focused, size }) => (
          <Ionicons name={focused ? ICONS[route.name] : `${ICONS[route.name]}-outline`} size={size} color={color} />
        ),
      })}
    >
      <Tabs.Screen name="index" options={{ title: t('tabs.today') }} />
      <Tabs.Screen name="practice" options={{ title: t('tabs.practice') }} />
      <Tabs.Screen name="grammar" options={{ title: t('tabs.grammar') }} />
      <Tabs.Screen name="writing" options={{ title: t('tabs.writing') }} />
      <Tabs.Screen name="profile" options={{ title: t('tabs.profile') }} />
    </Tabs>
  );
}
