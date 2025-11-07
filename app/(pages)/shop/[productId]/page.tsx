// app/products/[id]/page.tsx
import { getProductById, getAllProducts } from '@/app/data/ProductData';
import { notFound } from 'next/navigation';
import ProductDetail from '@/app/(pages)/shop/ProductDetail';



// Generate static params for static generation (optional but recommended)
export async function generateStaticParams() {
  const products = await getAllProducts();
  
  return products.map((product) => ({
    productId: product.id.toString(),
  }));
}


// Page Component
export default async function ProductPage({ 
  params 
}: { 
  params: { productId: string} 
}) {
  const product = await getProductById(params.productId);
  
  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <ProductDetail product={product} />
    </div>
);
} 