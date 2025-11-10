import React from 'react'
import ProductCard from '@/components/ui/card/ProductCard'
import { productData } from '@/app/data/ProductData'

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shop | Pinnacle Construction',
  description: 'Browse high-quality construction tools, equipment, and materials at Pinnacle Construction.',
  openGraph: {
    title: 'Shop | Pinnacle Construction',
    description: 'Discover premium construction materials and tools.',
    images: ['/logo-construction.png'],
    url: 'https://pinnacle-construction.vercel.app/shop',
    siteName: 'Pinnacle Construction',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shop | Pinnacle Construction',
    description: 'Discover premium construction materials and tools.',
    images: ['/logo-construction.png'],
  },
};


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





