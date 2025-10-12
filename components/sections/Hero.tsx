'use client'
import React from "react";
import manModel from "../../assets/images/man-model.png";
import Image from "next/image";
import Navbar from "@/app/shared/Navbar";
import * as motion from "motion/react-client";
import {
  HeroVariants,
  StripChildVariants,
  StripParentVariants,
} from "@/app/animation/animation";
import { FaPlay } from "react-icons/fa";

const Hero = () => {
  return (
    <motion.div
      variants={StripParentVariants}
      initial="hidden"
      animate="visible"
      className=" relative  h-[50dvh] py-4  lg:min-h-screen "
    >
      <Navbar />
      <div className="flex lflex-col  flex-row items-center lg:items-start  lg:gap-x-20   max-w-7xl mx-auto px-4 ">
        <motion.div
          variants={HeroVariants}
          initial="hidden"
          animate="visible"
          className="   lg:max-w-md lg:py-10 sm:py-2  flex flex-col  items-start justify-start space-y-6 lg:space-y-10 "
        >
          <h1 className=" lg:text-left md:text-5xl lg:text-7xl text-secondary font-bold font-Nunito text-wra ">
            <span>Start</span> <br className="hidden lg:block" />
            <span>New</span> <br className="hidden lg:block" />
            <span className="text-primary">Projects</span>
          </h1>

          <p className="text-left text-[12px]  lg:text-2xl text-secondary font-mono  ">
            Don&apos;t get framed by the competition, trust our solid Reputation
          </p>
                  <div className='flex gap-2 w-full'>
                  <div className='lg:w-25 lg:min-w-20 lg:min-h-20  max-w-20 max-h-10 lg:h-25 rounded-full bg-gray-200 shadow-neutral-500  shadow-[ 0px_0px_0px_10px_rgb(233 234 236)]  justify-center items-center p-2 flex'>
            <div className="h-full flex items-center text-secondary justify-center w-full bg-primary rounded-full p-2 lg:p-4">
              <FaPlay size={10}/>
            </div>
          </div>      
          <div className='flex justify-center flex-col lg:gap-2'>
           <h1 className='text-[10px] lg:text-[18px] text-gray-400'>Watch Video </h1>
           <h1 className ='text-[8px] lg:text-[20px] text-secondary'>Why choose us?</h1>
            </div>                                                                                                                                                                                                                                                                                           
                  </div>
          
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.9,
              ease: "easeIn",
              delay: 0.4,
            },
          }}
          className="relative z-40  h-50 w-150    lg:h-150 lg:mt-0"
        >
          <Image
            src={manModel}
            alt="male model architect"
            className="-z-90 w-full h-full bg-contain"
            priority
          />
        </motion.div>
      </div>
      {/* strips */}
      
<div className="absolute bottom-0 top-0 right-0">
        <motion.div
          variants={StripChildVariants}
          className="absolute  right-0 

          lg:top-68 bottom-0 border-l-100 border-b-100
          lg:border-l-450 z-100 lg:border-b-450 border-b-primary border-l-transparent"
        ></motion.div>
        <motion.div
          variants={StripChildVariants}
          className="absolute right-0
          lg:top-0 bottom-0 border-l-200 border-b-200
          lg:border-l-550 -z-50 lg:border-b-550 border-b-primary/80 border-l-transparent"
        ></motion.div>
        <motion.div
          variants={StripChildVariants}
          className="absolute right-0 
          lg:top-0 bottom-0  border-l-250 border-b-250
          lg:border-l-1000  -z-10 lg:border-b-1000 border-b-primary/50 border-l-transparent"
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
