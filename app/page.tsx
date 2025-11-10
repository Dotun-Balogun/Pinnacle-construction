import type { Metadata } from "next"
import AboutOurCompany from "@/components/sections/AboutOurCompany"
import { DynamicHero } from "@/components/sections/DynamicHero"
import FeatureAtGlance from "@/components/sections/FeatureAtGlance"
import Gap from '@/components/ui/Gap'
import Service from '@/components/sections/Service'
import How from "@/components/sections/How"
import LatestProject from "@/components/sections/LatestProject"
import Quote from "@/components/sections/Quote"
import Testimonial from "@/components/sections/Testimonial"
import Partners from "@/components/sections/Partners"

const SITE_TITLE = "Pinnacle Construction — Building Excellence"
const SITE_DESCRIPTION =
  "Pinnacle Construction provides professional construction, renovation, and general contracting services. Delivering high-quality residential and commercial projects with safety, reliability, and craftsmanship."

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    "pinnacle construction",
    "construction",
    "general contractor",
    "renovation",
    "commercial construction",
    "residential construction",
    "building contractor",
  ],
  authors: [{ name: "Pinnacle Construction" }],
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "https://pinnacle-construction.vercel.app",
    siteName: "Pinnacle Construction",
    images: [
      {
        url: "/images/logo-construction.png",
        width: 1200,
        height: 630,
        alt: "Pinnacle Construction - Projects and Team",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/images/logo-construction.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://pinnacle-construction.vercel.app",
  },
  
}

const LandingPage = () => {
  return (
    <div className="flex flex-col" >
      <DynamicHero />
      <FeatureAtGlance />
      <Gap />
      <AboutOurCompany />
      <Gap />
      <Service />
      <Gap />
      <How />
      <Gap />
      <LatestProject />
      <Gap />
      <Quote />
      <Gap />
      <Testimonial />
      <Gap />
      <Partners />
    </div>
  )
}

export default LandingPage