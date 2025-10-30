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
<Gap/>
<LatestProject/>
<Gap/>
<Quote/>
<Gap/>

<Testimonial/>
<Gap/>
<Partners/>
    </div>
  )
}

export default LandingPage