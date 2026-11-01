import { ArrowDown, Search } from '@/assets/icons'
import { ProductCard } from '@/components/ProductCard'
import { useStyles } from '@/hooks/useStyles'
import { Image } from 'expo-image'
import { useState } from 'react'
import { FlatList, Pressable, ScrollView, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const categories = [
  { name: 'Все', value: null },
  { name: 'Смартфоны', value: 'smartphones' },
  { name: 'Ноутбуки', value: 'laptops' },
  { name: 'Мебель', value: 'furniture' },
  { name: 'Косметика', value: 'beauty' },
  { name: 'Парфюмерия', value: 'fragrances' }
]

const products = [
  {
    id: 1,
    title: 'Samsung Galaxy S24',
    category: 'smartphones',
    price: 799.99,
    rating: 4.8,
    img: null
  },
  {
    id: 2,
    title: 'Apple iPhone 15',
    category: 'smartphones',
    price: 699.99,
    rating: 4.7,
    img: null
  },
  {
    id: 3,
    title: 'Asus Zenbook 14',
    category: 'laptops',
    price: 999.99,
    rating: 4.6,
    img: null
  },
  {
    id: 4,
    title: 'Lenovo IdeaPad Slim 5',
    category: 'laptops',
    price: 749.99,
    rating: 4.4,
    img: null
  },
  {
    id: 5,
    title: 'Обеденный стол',
    category: 'furniture',
    price: 249.99,
    rating: 4.5,
    img: null
  },
  {
    id: 6,
    title: 'Увлажняющий крем',
    category: 'beauty',
    price: 19.99,
    rating: 4.3,
    img: null
  },
  {
    id: 7,
    title: 'Парфюмерная вода',
    category: 'fragrances',
    price: 59.99,
    rating: 4.6,
    img: null
  },
  {
    id: 8,
    title: 'Офисное кресло',
    category: 'furniture',
    price: 129.99,
    rating: 4.2,
    img: null
  }
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
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 24,
      gap: 12
    },
    title: {
      fontSize: 26,
      fontWeight: '700',
      color: colors.text
    },
    sortButton: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 8,
      gap: 6
    },
    sortText: {
      fontSize: 14,
      fontWeight: '600',
      color: colors.primary
    },
    sortIcon: {
      width: 18,
      height: 18,
      tintColor: colors.primary
    },
    sortIconReversed: {
      transform: [{ rotate: '180deg' }]
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
    productList: {
      flex: 1
    },
    productListContent: {
      paddingHorizontal: 24,
      gap: 12
    },
    buttonPressed: {
      opacity: 0.6
    }
  }))

  const [sort, setSort] = useState<'Дешевле' | 'Дороже'>('Дешевле')
  const [filter, setFilter] = useState<string | null>(null)

  function changeSort() {
    if (sort === 'Дешевле') {
      setSort('Дороже')
    }
    else {
      setSort('Дешевле')
    }
  }

  const filteredProducts = products.filter(product => filter === null || product.category === filter)

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === 'Дешевле') return a.price - b.price

    return b.price - a.price
  })

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Продукты</Text>
          <Pressable
            onPress={changeSort}
            style={({ pressed }) => [styles.sortButton, pressed && styles.buttonPressed]}
          >
            <Text style={styles.sortText}>{sort}</Text>
            <Image
              source={ArrowDown}
              style={[styles.sortIcon, sort === 'Дороже' && styles.sortIconReversed]}
              tintColor={styles.sortIcon.tintColor}
            />
          </Pressable>
        </View>

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
              onPress={() => setFilter(category.value)}
              style={({ pressed }) => [
                styles.category,
                filter === category.value && styles.categorySelected,
                pressed && styles.buttonPressed
              ]}
            >
              <Text style={[
                styles.categoryText,
                filter === category.value && styles.categorySelectedText
              ]}>
                {category.name}
              </Text>
            </Pressable>
          ))}
        </ScrollView>

        <FlatList
          data={sortedProducts}
          keyExtractor={item => String(item.id)}
          style={styles.productList}
          contentContainerStyle={styles.productListContent}
          renderItem={({ item }) => (
            <ProductCard
              product={item}
              categoryName={categories.find(category => category.value === item.category)?.name ?? item.category}
            />
          )}
        />
      </View>
    </SafeAreaView>
  )
}
