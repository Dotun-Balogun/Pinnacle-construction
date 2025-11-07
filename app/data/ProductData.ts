import helmet from '@/assets/images/helmet.png'
import cutter from '@/assets/images/cutter.png'
import toolbox_empty from '@/assets/images/package_1.png'
import toolbox_full from '@/assets/images/package_2.png'
import ammeter from '@/assets/images/ammeter.png'
import lens from '@/assets/images/eye-glass.png'
import tape from '@/assets/images/tape.png'
import lshape_metal from '@/assets/images/lshape-metal.png'
import { StaticImageData } from 'next/image'

export interface Product {
  id: string,
  name: string
  price: number
  originalPrice?: number
  discount?: number
  badge?: string
  category: string
  image: StaticImageData|string
  description: string
  sku: string
  brand: string
  size?: string
}

export const productData: Product[] = [
  {
    id: '1',
    name: 'Safety Helmet',
    category: 'Gadget',
    price: 35,
    originalPrice: 45,
    discount: 22,
    badge: 'Hot',
    image: helmet,
    description:
      'A durable safety helmet designed for maximum head protection on construction sites. Lightweight, comfortable, and impact-resistant.',
    sku: 'CT-001',
    brand: 'BuildPro',
    size: 'Universal'
  },
  {
    id: '2',
    name: 'Heavy-Duty Cutter',
    category: 'Tool',
    price: 25,
    originalPrice: 30,
    discount: 17,
    badge: 'Best Seller',
    image: cutter,
    description:
      'Precision-engineered cutter ideal for construction materials. Ergonomic handle ensures firm grip and safe cutting operations.',
    sku: 'CT-002',
    brand: 'ProEdge',
    size: 'Medium'
  },
  {
    id: '3',
    name: 'Empty Tool Box',
    category: 'Storage',
    price: 40,
    image: toolbox_empty,
    description:
      'Strong and portable empty toolbox for storing essential construction tools. Built with reinforced handles for durability.',
    sku: 'CT-003',
    brand: 'ToolMate',
    size: 'Large'
  },
  {
    id: '4',
    name: 'Loaded Tool Box',
    category: 'Kit',
    price: 85,
    originalPrice: 95,
    discount: 10,
    badge: 'Value Pack',
    image: toolbox_full,
    description:
      'A fully loaded toolbox containing all necessary tools for quick on-site repairs and installations.',
    sku: 'CT-004',
    brand: 'ToolMate',
    size: 'Large'
  },
  {
    id: '5',
    name: 'Ammeter',
    category: 'Electrical',
    price: 50,
    image: ammeter,
    description:
      'High-accuracy ammeter for measuring electrical current in construction equipment and systems. Compact and easy to read.',
    sku: 'CT-005',
    brand: 'ElectraMax',
    size: 'Standard'
  },
  {
    id: '6',
    name: 'Protective Eye Lens',
    category: 'Safety Gear',
    price: 20,
    originalPrice: 25,
    discount: 20,
    badge: 'Sale',
    image: lens,
    description:
      'Anti-fog protective lens designed to shield eyes from dust, debris, and sparks during construction work.',
    sku: 'CT-006',
    brand: 'SafeVision',
    size: 'One Size'
  },
  {
    id: '7',
    name: 'Measuring Tape',
    category: 'Tool',
    price: 15,
    image: tape,
    description:
      'Durable measuring tape ideal for accurate measurements. Features a strong metal tape with smooth retraction mechanism.',
    sku: 'CT-007',
    brand: 'MeasurePro',
    size: '5m'
  },
  {
    id: '8',
    name: 'L-Shape Metal Wrench',
    category: 'Tool',
    price: 30,
    originalPrice: 38,
    discount: 21,
    badge: 'Limited Offer',
    image: lshape_metal,
    description:
      'Sturdy L-shaped metal wrench for tightening and loosening bolts. Designed for heavy construction machinery maintenance.',
    sku: 'CT-008',
    brand: 'TorqueMax',
    size: 'Standard'
  }
]



export async function getProductById(id: string): Promise<Product | undefined> {
  // In real app, this would be an API call or database query
  return productData.find(p => p.id === id);
}

export async function getAllProducts(): Promise<Product[]> {
  // In real app, this would be an API call or database query
  return productData;
}