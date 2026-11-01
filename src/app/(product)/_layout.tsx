import { useStyles } from '@/hooks/useStyles'
import { Stack } from 'expo-router'

export default function ProductLayout() {
  const styles = useStyles((colors) => ({
    screen: {
      backgroundColor: colors.background
    },
    headerTitle: {
      color: colors.text
    }
  }))

  return (
    <Stack screenOptions={{
      animation: 'default',
      contentStyle: styles.screen,
      headerStyle: styles.screen,
      headerTintColor: styles.headerTitle.color,
      headerShadowVisible: false
    }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="product/[id]" options={{ title: 'Товар' }} />
    </Stack>
  )
}
