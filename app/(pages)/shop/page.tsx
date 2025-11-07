import React from 'react'
import ProductCard from '@/components/ui/card/ProductCard'
import { productData } from '@/app/data/ProductData'

const ShopPage = () => {
  return (
    <section className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center gap-6">
      {productData.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </section>
  )
}

export default ShopPage





