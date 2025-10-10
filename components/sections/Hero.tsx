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

const Hero = () => {
  return (
    <motion.div
      variants={StripParentVariants}
      initial="hidden"
      animate="visible"
      className=" relative  min-h-screen "
    >
      <Navbar />
      <div className="flex flex-col lg:flex-row items-center lg:items-start  lg:gap-x-1   max-w-7xl mx-auto px-4 ">
        <motion.div
          variants={HeroVariants}
          initial="hidden"
          animate="visible"
          className="lg:max-w-lg py-10 flex flex-col items-center  lg:items-start lg:justify-start space-y-4 "
        >
          <h1 className="text-center lg:text-left text-3xl md:text-5xl lg:text-7xl text-secondary font-bold font-Nunito text-wrap ">
            <span>Start</span> <br className="hidden lg:block" />
            <span>New</span> <br className="hidden lg:block" />
            <span className="text-primary">Projects</span>
          </h1>

          <p className="text-center lg:text-left  text-2xl lg:text-2xl text-secondary font-mono ">
            Don&apos;t get framed by the competition, trust our solid Reputation
          </p>

          <div>
            <div></div>
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
          className="relative z-40 h-[400px] lg:h-[800px] lg:w-[900px} lg:max-w-6xl 1 lg:mt-0"
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

          lg:top-68 bottom-0 border-l-200 border-b-200
          lg:border-l-450 z-100 lg:border-b-450 border-b-primary border-l-transparent"
        ></motion.div>
        <motion.div
          variants={StripChildVariants}
          className="absolute right-0
          lg:top-0 bottom-0 border-l-300 border-b-300
          lg:border-l-550 -z-50 lg:border-b-550 border-b-primary/80 border-l-transparent"
        ></motion.div>
        <motion.div
          variants={StripChildVariants}
          className="absolute right-0 
          lg:top-0 bottom-0  border-l-400 border-b-400
          lg:border-l-725  -z-10 lg:border-b-725 border-b-primary/50 border-l-transparent"
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
