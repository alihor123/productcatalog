import { ChevronRight } from '@/assets/icons'
import { useStyles } from '@/hooks/useStyles'
import { type Product } from '@/services/products.api'
import { Image } from 'expo-image'
import { Pressable, Text, View } from 'react-native'

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
    productArrow: {
      width: 20,
      height: 20,
      tintColor: colors.textSecondary
    }
  }))

  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.product, pressed && styles.productPressed]}>
      <Image
        source={{ uri: product.image_url }}
        style={styles.productImage}
        contentFit="contain"
      />
      <View style={styles.productInfo}>
        <Text style={styles.productTitle} numberOfLines={2}>{product.name}</Text>
        <Text style={styles.productCategory}>{product.category}</Text>
        <Text style={styles.productPrice}>
          {(product.price / 100).toLocaleString('ru-RU', { style: 'currency', currency: product.currency })}
        </Text>
      </View>
      <Image
        source={ChevronRight}
        style={styles.productArrow}
        tintColor={styles.productArrow.tintColor}
      />
    </Pressable>
  )
}
