import { getProductById, getAllProducts } from '@/app/data/ProductData';
import { notFound } from 'next/navigation';
import ProductDetail from '@/app/(pages)/shop/ProductDetail';

type ProductDetailPageProp ={
  params:Promise<{ productId: string }>
}

// Generate static params for static generation 
export async function generateStaticParams() {
  const products = await getAllProducts();
  
  return products.map((product) => ({
    productId: product.id.toString(),
  }));
}


// Page Component
export default async function ProductPage({ 
  params 
}: ProductDetailPageProp) {
  const productId = await params;

  const product = await getProductById((await params).productId);
  
  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <ProductDetail product={product} />
    </div>
);
} 