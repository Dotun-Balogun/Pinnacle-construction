import AboutOurCompany from "@/components/sections/AboutOurCompany"
import { DynamicHero } from "@/components/sections/DynamicHero"
import FeatureAtGlance from "@/components/sections/FeatureAtGlance"

const LandingPage = () => {
  return (
    <div className="flex flex-col" >
        <DynamicHero/>
        <FeatureAtGlance/>
        <AboutOurCompany/>
    </div>
  )
}

export default LandingPage