import { type Product } from '@/services/products.api'
import { createContext, useState, type Dispatch, type ReactNode, type SetStateAction } from 'react'

type ProductContextType = {
  products: Product[]
  setProducts: Dispatch<SetStateAction<Product[]>>
}

type ProductProviderProps = {
  children: ReactNode
}

export const ProductContext = createContext<ProductContextType | null>(null)

export function ProductProvider({ children }: ProductProviderProps) {
  const [products, setProducts] = useState<Product[]>([])

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  )
}
