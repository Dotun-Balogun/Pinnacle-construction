import portfolio_1 from "@/assets/images/portfolio10-1.jpg";
import portfolio_2 from "@/assets/images/portfolio2-1.jpg";
import portfolio_3 from "@/assets/images/portfolio3-1.jpg";
import { StaticImageData } from "next/image";

export interface Service {
  id: number;
  title: string;
  image: string | StaticImageData;
  href: string;
}

export const servicesData: Service[] = [
  {
    id: 1,
    title: "Modern Structures",
    image: portfolio_1,
    href: "/portfolio/modern-structures",
  },
  {
    id: 2,
    title: "Construction",
    image: portfolio_2,
    href: "/portfolio/construction",
  },
  {
    id: 3,
    title: "Maintenance",
    image: portfolio_3,
    href: "/portfolio/maintenance",
  },
];
