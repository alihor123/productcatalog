import { ChevronRight, StarFilled } from '@/assets/icons'
import { useStyles } from '@/hooks/useStyles'
import { Image } from 'expo-image'
import { Pressable, Text, View } from 'react-native'

export type Product = {
  id: number
  title: string
  description: string
  category: string
  price: number
  rating: number
  img: string | null
}

type ProductCardProps = {
  product: Product
  onPress: () => void
}

export function ProductCard({ product, onPress }: ProductCardProps) {
  const styles = useStyles((colors) => ({
    product: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 8,
      gap: 12
    },
    productPressed: {
      transform: [{ scale: 0.98 }]
    },
    productImage: {
      width: 72,
      height: 72,
      borderRadius: 12,
      backgroundColor: colors.imagePlaceholder
    },
    productInfo: {
      flex: 1,
      minWidth: 0,
      gap: 6
    },
    productTitle: {
      fontSize: 16,
      lineHeight: 22,
      fontWeight: '600',
      color: colors.text
    },
    productCategory: {
      fontSize: 14,
      color: colors.textSecondary
    },
    productPrice: {
      fontSize: 14,
      fontWeight: '600',
      color: colors.text
    },
    productActions: {
      alignSelf: 'stretch',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      paddingVertical: 2,
      gap: 12
    },
    productArrow: {
      width: 20,
      height: 20,
      tintColor: colors.textSecondary
    },
    productRating: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4
    },
    productStar: {
      width: 16,
      height: 16,
      tintColor: colors.rating
    },
    productRatingText: {
      fontSize: 14,
      color: colors.text
    }
  }))

  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.product, pressed && styles.productPressed]}>
      {product.img === null && <View style={styles.productImage} />}
      {product.img !== null && (
        <Image
          source={{ uri: product.img }}
          style={styles.productImage}
          contentFit="contain"
        />
      )}
      <View style={styles.productInfo}>
        <Text style={styles.productTitle} numberOfLines={2}>{product.title}</Text>
        <Text style={styles.productCategory}>{product.category}</Text>
        <Text style={styles.productPrice}>
          {product.price.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} $
        </Text>
      </View>
      <View style={styles.productActions}>
        <Image
          source={ChevronRight}
          style={styles.productArrow}
          tintColor={styles.productArrow.tintColor}
        />
        <View style={styles.productRating}>
          <Image
            source={StarFilled}
            style={styles.productStar}
            tintColor={styles.productStar.tintColor}
          />
          <Text style={styles.productRatingText}>{product.rating.toLocaleString('ru-RU')}</Text>
        </View>
      </View>
    </Pressable>
  )
}
