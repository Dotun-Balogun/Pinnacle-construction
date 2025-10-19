import AboutOurCompany from "@/components/sections/AboutOurCompany"
import { DynamicHero } from "@/components/sections/DynamicHero"
import FeatureAtGlance from "@/components/sections/FeatureAtGlance"
import Gap from '@/components/ui/Gap'
import Service from '@/components/sections/Service'
import How from "@/components/sections/How"
const LandingPage = () => {
  return (
    <div className="flex flex-col" >
        <DynamicHero/>
        <FeatureAtGlance/>
        <Gap/>
        <AboutOurCompany/>
                <Gap/>
                <Service/>
                                <Gap/>

<How/>
    </div>
  )
}

export default LandingPage