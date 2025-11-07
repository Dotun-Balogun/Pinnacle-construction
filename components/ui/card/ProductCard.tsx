'use client'
import { Heart, Shuffle, ShoppingCart } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from '../button'

interface ProductCardProps {
  id: string
  image: string | StaticImageData
  name: string
  category: string
  price: number
  originalPrice?: number
  discount?: number
  badge?: string
}

export default function ProductCard({
  id,
  image,
  name,
  category,
  price,
  originalPrice,
  discount,
  badge,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative w-full max-w-[268px] bg-white border-2 border-gray-200 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Wrap Image Section with Link */}
      <Link href={`/shop/${id}`} className="block">
        <div className="relative p-4 pt-8 pb-6 flex items-center justify-center h-[240px]">
          <Image
            src={image}
            alt={name}
            className="max-w-full max-h-full object-contain"
          />

          {/* Price Badge - Top Right */}
          <div className="absolute top-4 right-4 bg-primary text-secondary font-bold px-3 py-1 text-sm">
            ${price}
          </div>

          {/* Sale/Discount Badge */}
          {badge && (
            <div className="absolute top-4 right-4 bg-secondary text-white font-bold px-4 py-2 text-sm">
              {badge}
            </div>
          )}

          {/* Discount Badge */}
          {discount && (
            <div className="absolute top-16 right-4 bg-secondary text-primary font-bold px-4 py-2 text-lg">
              {discount}%
            </div>
          )}

          {/* Original Price */}
          {originalPrice && (
            <div className="absolute top-4 right-14 text-gray-400 line-through text-sm font-semibold">
              ${originalPrice}
            </div>
          )}

          {/* Action Icons - Left Side */}
          <div
            className={`absolute left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0 md:opacity-0'
            } sm:opacity-100`}
          >
            <button className="bg-primary text-secondary p-2 hover:bg-opacity-90 transition-colors">
              <Heart size={20} />
            </button>
            <button className="bg-primary text-secondary p-2 hover:bg-opacity-90 transition-colors">
              <Shuffle size={20} />
            </button>
          </div>
        </div>
      </Link>

      {/* Content Section */}
      <div className="bg-primary p-4">
        <h3 className="text-secondary font-bold text-xl mb-1">{name}</h3>
        <p className="text-secondary text-sm mb-4 opacity-80">{category}</p>

        {/* Add to Cart Button */}
        <Button className="w-full bg-secondary text-white font-semibold py-3 px-4 hover:bg-opacity-90 transition-colors flex items-center justify-center gap-2">
          <ShoppingCart size={18} />
          Add to cart
        </Button>
      </div>
    </div>
  )
}
