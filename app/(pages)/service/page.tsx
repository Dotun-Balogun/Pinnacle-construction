
import React from "react";
import FaintText from "@/components/ui/FaintText";
import ServiceCard from "@/components/ui/card/ServiceCard";
import { serviceData } from "@/app/data/ServiceData";
import safetyIcon from '@/assets/images/safety-icon.png'
import Gap from "@/components/ui/Gap";
import Image from "next/image";
import * as motion from 'motion/react-client'
import { ZoomInOutVariant } from "@/app/animation/animation";
import { Button } from "@/components/ui/button";
import ServiceCard_3 from "@/components/ui/card/ServiceCard_3";
import { FaHome, FaCar, FaHammer, FaBuilding } from 'react-icons/fa';
import background from "@/assets/images/row-bg.jpg";
import FeaturesCard from "@/components/ui/card/FeaturesCard";
import { featuresData } from "@/app/data/FeaturesDate";




const ServicePage = () => {
const servicesData = [
  {
    id: 1,
    title: 'House Construction',
    description: 'Incisive guidance that creates measurable, sustainable value and profitable business decisions',
    icon: <FaHome />
  },
  {
    id: 2,
    title: 'Road Construction',
    description: 'As a leading provider of credit data and identity management solutions for the businesses construction',
    icon: <FaCar />
  },
  {
    id: 3,
    title: 'Maintenance Mode',
    description: 'Maintenance mode refers to a point in a program\'s life when it has reached all of its goals is considered',
    icon: <FaHammer />
  },
  {
    id: 4,
    title: 'Modern Building',
    description: 'Experian Data Quality is a recognized industry leader of data quality and business healthy construction',
    icon: <FaBuilding />
  }
];

  return (
    <div className="lg:min-h-screen space-y-15 ">
      <div className="flex flex-col  ">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-18 lg:gap-4 max-w-7xl   mx-auto place-items-center">
          {servicesData.map((service) => (
            <ServiceCard_3 
            key={service.id} 
            {...service}
             />
          ))}
        </div>
<div className="min-h-screen lg:pb-40">
      <div className="relative min-h-screen flex flex-col py-10 ">
        <Image
          src={background}
          alt="Background"
          fill
          priority
          className="object-cover object-center z-10"
        />

        <div className=" flex flex-col space-y-8 text-white z-10">
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

export default ServicePage;
