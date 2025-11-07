'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ShoppingCart, Heart, Share2 } from 'lucide-react';
import { Product } from '@/app/data/ProductData';


interface ProductDetailProps {
  product: Product;
}

const ProductDetail = ({ product }:ProductDetailProps) => {
  const [quantity, setQuantity] = useState(1);
  

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Product Image */}
      <div className="border-2 border-gray-200 p-8">
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={500}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Product Info */}
      <div>
        <h1 className="text-3xl font-bold text-secondary mb-4">
          {product.name}
        </h1>
        
        <div className="flex items-center gap-4 mb-6">
          <span className="text-3xl font-bold text-secondary">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="text-xl text-gray-400 line-through">
              ${product.originalPrice}
            </span>
          )}
          {product.discount && (
            <span className="bg-secondary text-primary px-3 py-1 text-sm font-bold">
              -{product.discount}%
            </span>
          )}
        </div>

        <p className="text-gray-600 mb-6">{product.description}</p>

        {/* Product Meta */}
        <div className="space-y-2 mb-6 text-sm">
          <div className="flex">
            <span className="font-semibold w-24">Brand:</span>
            <span>{product.brand}</span>
          </div>
          <div className="flex">
            <span className="font-semibold w-24">SKU:</span>
            <span>{product.sku}</span>
          </div>
          <div className="flex">
            <span className="font-semibold w-24">Category:</span>
            <span>{product.category}</span>
          </div>
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center gap-4 mb-6">
          <label className="font-semibold">Quantity:</label>
          <div className="flex items-center border-2 border-gray-300">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-4 py-2 hover:bg-gray-100"
            >
              -
            </button>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-16 text-center border-x-2 border-gray-300 py-2"
            />
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-4 py-2 hover:bg-gray-100"
            >
              +
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mb-6">
          <button className="flex-1 bg-secondary text-white py-3 px-6 font-semibold hover:bg-opacity-90 transition-colors flex items-center justify-center gap-2">
            <ShoppingCart size={20} />
            Add to cart
          </button>
          <button className="border-2 border-secondary text-secondary p-3 hover:bg-secondary hover:text-white transition-colors">
            <Heart size={20} />
          </button>
          <button className="border-2 border-secondary text-secondary p-3 hover:bg-secondary hover:text-white transition-colors">
            <Share2 size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;