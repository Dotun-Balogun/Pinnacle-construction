import { getProductById, getAllProducts } from '@/app/data/ProductData';
import { notFound } from 'next/navigation';
import ProductDetail from '@/app/(pages)/shop/ProductDetail';
import { Metadata } from 'next';





type ProductDetailPageProp ={
  params:Promise<{ productId: string }>
}

const  generatemetadata = async({params}:ProductDetailPageProp):Promise<Metadata>=>{
 const product = (await params).productId
  const productInfo = await getProductById(product);
  if(!productInfo){
    return {
      title: 'Product Not Found | Pinnacle Construction',
      description: 'The requested product could not be found.',
    };
  }



  const imageUrl = typeof productInfo.image === 'string' 
    ? productInfo.image 
    : productInfo.image.src; 

  return{
    title: `${productInfo.name} | Pinnacle Construction`,
    description: productInfo.description,
    keywords: [
      "construction materials",
      "building supplies",
      "pinnacle construction products",
      "construction tools",
      "renovation materials",
      "construction equipment",
    ],
    openGraph: {
      title: `${productInfo.name} | Pinnacle Construction`,
      description: productInfo.description,
      url: `https://pinnacle-construction.vercel.app/shop/${productInfo.id}`,
      siteName: "Pinnacle Construction",
      images: [
        {
          url: imageUrl || '/logo-construction.png',
          width: 800,
          height: 600,
          alt: productInfo.name,
        },
      ],
      locale: "en_US",
      type: "website",
}
  }
};

// Generate static params for static generation 
export async function generateStaticParams(){
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