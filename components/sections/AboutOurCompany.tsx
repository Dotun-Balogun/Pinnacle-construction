import { Check } from "lucide-react";
import React from "react";
import * as motion from 'motion/react-client'
import Image from "next/image";
import aboutCompany from '@/assets/images/about-company-768x734.jpg'
import FaintText from "../ui/FaintText";

const AboutOurCompany = () => {
  const aboutData = [
    { name: "Excellent engineering" },
    { name: "Modern and up to date" },
    { name: "Grade #1 material" },
    { name: "structure with long life" },
  ];
  return (
    <div className=" flex flex-col justify-between  lg:flex-row-reverse  min-h-screen">
      <div className='flex flex-col w-full p-6 lg:gap-y-10 '>
        <FaintText text={'About'}/>
        <h1 className="text-primary font-mono text-[18px] lg:text-2xl text-center lg:text-left">About our company</h1>
        <h3 className="text-[28px] font-bold text-center lg:text-[50px] lg:text-left">Alway dedicated and devoted</h3>
        <div className="p-4">
          <p className="text-[20px] text-[#8b8b8b] text-center lg:text-left">
            Slogan creation for your construction company is crucial for the
            overall branding. And branding in today’s world can’t be ignored, We
            hope that the above Construction Slogans. Don’t forget to share it
            on social media and related building communities.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          {aboutData.map((item, index)=>(
            <div key={index} className=" group flex  items-center  ">
              <motion.span
              whileHover={{
                opacity:1,
                skewX:[4.2],
                y:[2,0]
              }}
              whileTap={{
                backgroundColor:'#ffff00',

                opacity:1,
                scale:0.95,
                skewX:4, 
                y:[2,0]
              }}
              transition={{
                ease:'easeInOut',
                duration:0.3
                
              }}
              key={index}
               className="flex w-14 h-14 ">
                <Check className="w-full h-full text-primary group-hover:text-secondary group-hover:bg-primary" />
              </motion.span>
              <h1 className="text-[20px] font-bold">{item.name}</h1>
            </div>
          ))}
        </div>
      </div>
      <div className="relative bg-primary w-full h-[380px] lg:max-w-[700px] lg:h-[741px] p-4  ">
        <div className="hidden lg:block relative lg:bg-primary w-full h-[380px] lg:max-w-[500px] lg:h-[741px]">

        </div>
        <motion.div
        whileHover={{
          rotateY:20
        }}
         className="lg:h-[600px]  h-[350px] lg:left-0 lg:top-1/2 lg:-translate-y-1/2 w-full relative lg:absolute">
       <Image
       src={aboutCompany}
      fill
      
      sizes="max-h-[741px]  h-[380px] max-w-[700px]"
       alt="about"
       />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutOurCompany;
