import React from "react";
import FaintText from "@/components/ui/FaintText";
import ServiceCard from "@/components/ui/card/ServiceCard";
import { serviceData } from "@/app/data/ServiceData";
import safetyIcon from '@/assets/images/safety-icon.png'
import Gap from "../ui/Gap";
import Image from "next/image";
import * as motion from 'motion/react-client'
import { Variants } from "motion";
import { ZoomInOutVariant } from "@/app/animation/animation";
import { Button } from "../ui/button";



const Service = () => {
  return (
    <div className="lg:min-h-screen  ">
      <div className="flex flex-col lg:gap-20">
        <FaintText
          backgroundText="Services"
          mainText="What we can do for you"
        />
        <h1 className="text-primary font-mono text-2xl tracking-wide lg:text-2xl text-center lg:text-left lg:hidden">
          What we can do for you
        </h1>
        <h1 className="lg:text-[50px] text-2xl font-extrabold text-center font-mono">
          Our construction Services
        </h1>
      </div>
      <div className="lg:min-h-screen bg-gray-200">
        <div className="grid md:grid-cols-3 lg:grid-cols-3 place-items-center gap-20 md:gap-10 lg:gap-15 py-10 px-4">
          {serviceData.map((service) => (
            <ServiceCard
              key={service.id}
              image={service.image}
              title={service.title}
              description={service.description}
              isLarge={service.isLarge}
            />
          ))}
        </div>
        <Gap />
        <div className="max-w-7xl mx-auto  px-4">
         

         <div className='flex flex-col lg:flex-row items-center justify-between space-y-4'>
         <div className='flex  flex-col lg:flex-row items-center justify-center gap-4 '>
         <motion.div
         variants={ZoomInOutVariant}
         initial='initial'
         animate='animate'
         >
           <Image
                        src={safetyIcon}
                        alt="safety icon"
                        width={80}
                        height={80}
                        className="h-20 w-20"
                      />
         </motion.div>
         <div className="">
            <h3 className="text-[32px] font-bold text-center whitespace-normal">
              <span className=" text-[#f4c03b]">Building a dream</span>
              <span className="text-[#243344]">shouldnt be a nightmare!</span>
            </h3>
             <span className="text-[20px] text-[#888] text-center">
            We have transforming the ideas and visions into winning projects.
          </span>
          </div>
         </div>
          <Button className="px-6 text-secondary bg-white text-base py-6 rounded-none hover:bg-secondary transition-colors">
            Free Consultations
          </Button>
         </div>
        </div>
        ;
      </div>
    </div>
  );
};

export default Service;
