import Image from "next/image";
import background from "@/assets/images/row-bg.jpg";
import safetyIcon from "@/assets/images/safety-icon.png";
import * as motion from "motion/react-client";
import FeaturesCard from "../ui/card/FeaturesCard";
import { featuresData } from "@/app/data/FeaturesDate";
import { ZoomInOutVariant } from "@/app/animation/animation";                        


const FeatureAtGlance = () => {
  return (
    <div className="min-h-screen lg:pb-40">
      <div className="relative min-h-screen flex flex-col py-10 ">
        <Image
          src={background}
          alt="Background"
          fill
          priority
          className="object-cover object-center -z-10"
        />

        <div className="max-w-7xl mx-auto px-4 flex flex-col space-y-8 text-white z-10">
          <motion.div className="flex flex-col items-center justify-center">
            <motion.div
            variants={ZoomInOutVariant}
            initial='initial'
            animate='animate'>
              
              <Image
              src={safetyIcon}
              alt="safety icon"
              width={80}
              height={80}
              className="h-20 w-20"
            />
            </motion.div>
            
            <h1 className="text-[18px] md:text-2xl text-primary">
              Features at Glance
            </h1>
            <h1 className="text-[28px] md:text-[50px] text-center text-white font-medium">
              We know what your needs are
            </h1>
          </motion.div>

          <div className=" lg:absolute lg:left-4 lg:right-4 lg:top-60 sm:grid-cols-1 md:flex flex-wrap items-center justify-center gap-8 lg:grid lg:grid-cols-3  place-items-center">
            {featuresData.map((item, index) => (
              <FeaturesCard
                key={index}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureAtGlance;
