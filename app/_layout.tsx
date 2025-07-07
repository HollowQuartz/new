import { CourseProvider } from '@/contexts/CourseContext'; // ⬅️ import it
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <CourseProvider> {}
      <Stack initialRouteName="splash">
        <Stack.Screen
          name="splash"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="_menu/home"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="_tab"
          options={{ headerShown: false }}
        />
      </Stack>
    </CourseProvider>
  );
}
