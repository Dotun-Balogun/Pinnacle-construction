import Image from "next/image";
import background from "@/assets/images/row-bg.jpg";
import safetyIcon from "@/assets/images/safety-icon.png";
import * as motion from 'motion/react-client'
import FeaturesCard from "../ui/card/FeaturesCard";

const FeatureAtGlance = () => {
  return (
    <div className="relative min-h-screen flex flex-col py-10 overflow-hidden">
      {/* Optimized Background */}
      <Image
        src={background}
        alt="Background"
        fill
        priority
        className="object-cover object-center -z-10"
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col space-y-8 text-white z-10">
        <motion.div
        
         className="flex flex-col items-center justify-center">
          <Image
            src={safetyIcon}
            alt="safety icon"
            width={80}
            height={80}
            className="h-20 w-20"
          />
          <h1 className="text-[18px] md:text-2xl text-primary">
            Feature at Glance
          </h1>
          <h1 className="text-[28px] md:text-[50px] text-center text-white font-medium">
            We know what your needs are
          </h1>
        </motion.div>


        <div className="grid place-items-center">
   <FeaturesCard/>
      </div>
      </div>

      
    </div>
  );
};

export default FeatureAtGlance;
