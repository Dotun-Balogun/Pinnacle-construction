import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "./shared/Footer";
import BackToTop from "./shared/BackToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", 
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pinnacle-construction.vercel.app'),
  
  title: {
    default: "Pinnacle Construction | Expert Building & Renovation Services",
    template: "%s | Pinnacle Construction"
  },
  
  description:
    "Pinnacle Construction — experts in modern building and renovation projects. Quality craftsmanship, timely delivery, and exceptional service for residential and commercial projects.",
   other:{
      "google-site-verification":"npmsgqRyMC0zaQeAUzTwbHgoLiebrL120sUQNJaEwj6Chg",
    }
  ,
  keywords: [
    "construction",
    "building services",
    "renovation",
    "home renovation",
    "commercial construction",
    "residential construction",
    "contractors",
    "remodeling",
    "construction company"
  ],
  
  authors: [{ name: "Pinnacle Construction" }],
  
  creator: "Pinnacle Construction",
  
  openGraph: {
    title: 'Pinnacle Construction | Expert Building & Renovation Services',
    description: 'Pinnacle Construction - experts in modern building and renovation projects. Quality craftsmanship for residential and commercial projects.',
    siteName: 'Pinnacle Construction',
    images: [
      {
        url: '/logo-construction.png',
        width: 1200,
        height: 630,
        alt: 'Pinnacle Construction Logo',
      }
    ],
    locale: 'en_US',
    type: 'website',
    url: 'https://pinnacle-construction.vercel.app',
   
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Pinnacle Construction | Expert Building & Renovation Services',
    description: 'Pinnacle Construction - experts in modern building and renovation projects.',
    images: ['/logo-construction.png'],
    creator: '@pinnacleconst', // Add your actual Twitter handle
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  verification: {
    // google: 'your-google-verification-code', // Add when you set up Google Search Console
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  
  alternates: {
    canonical: 'https://pinnacle-construction.vercel.app',
  },
  
  category: 'construction',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} relative min-h-screen flex flex-col antialiased`}
      >
        <main className='flex-1'>
            {children}
        </main>
        <Footer/>
        <BackToTop/>
      </body>
    </html>
  );
}