import { Search } from '@/assets/icons'
import { useStyles } from '@/hooks/useStyles'
import { Image } from 'expo-image'
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const categories = [
  { name: 'Все', value: null },
  { name: 'Смартфоны', value: 'smartphones' },
  { name: 'Ноутбуки', value: 'laptops' },
  { name: 'Мебель', value: 'furniture' },
  { name: 'Косметика', value: 'beauty' },
  { name: 'Парфюмерия', value: 'fragrances' }
]

export default function Index() {
  const styles = useStyles((colors) => ({
    container: {
      flex: 1,
      backgroundColor: colors.background
    },
    content: {
      flex: 1,
      width: '100%',
      maxWidth: 600,
      alignSelf: 'center',
      paddingVertical: 24,
      gap: 20
    },
    title: {
      paddingHorizontal: 24,
      fontSize: 26,
      fontWeight: '700',
      color: colors.text
    },
    search: {
      marginHorizontal: 24,
      position: 'relative'
    },
    searchInput: {
      height: 52,
      paddingLeft: 48,
      paddingRight: 20,
      borderRadius: 999,
      backgroundColor: colors.surfaceSoft,
      fontSize: 16,
      color: colors.text
    },
    searchIcon: {
      position: 'absolute',
      left: 16,
      top: 16,
      width: 20,
      height: 20,
      tintColor: colors.textSecondary
    },
    placeholder: {
      color: colors.textSecondary
    },
    categories: {
      flexGrow: 0
    },
    categoriesContent: {
      paddingHorizontal: 24,
      gap: 8
    },
    category: {
      height: 38,
      paddingHorizontal: 16,
      borderRadius: 999,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.surfaceSoft
    },
    categorySelected: {
      backgroundColor: colors.primary
    },
    categoryText: {
      fontSize: 14,
      fontWeight: '600',
      color: colors.text
    },
    categorySelectedText: {
      color: colors.onPrimary
    },
    buttonPressed: {
      opacity: 0.6
    }
  }))

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Продукты</Text>

        <View style={styles.search}>
          <TextInput
            style={styles.searchInput}
            placeholder="Поиск товаров"
            placeholderTextColor={styles.placeholder.color}
          />
          <Image
            source={Search}
            style={styles.searchIcon}
            tintColor={styles.searchIcon.tintColor}
            pointerEvents="none"
          />
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categories}
          contentContainerStyle={styles.categoriesContent}
        >
          {categories.map(category => (
            <Pressable
              key={category.value ?? 'all'}
              style={({ pressed }) => [
                styles.category,
                category.value === null && styles.categorySelected,
                pressed && styles.buttonPressed
              ]}
            >
              <Text style={[
                styles.categoryText,
                category.value === null && styles.categorySelectedText
              ]}>
                {category.name}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}
