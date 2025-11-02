"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import * as motion from "motion/react-client";
import { ChevronDown } from "lucide-react";
import { Button } from "../button";




type FeaturesCardProps = {
  title: string;
  description: string;
  image: StaticImageData;
  buttonText?: string;
};

const FeaturesCard = ({title, description, image,buttonText='Read more....'}:FeaturesCardProps) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative [perspective:1000px] min-w-[315px] lg:min-w-[390px] lg:max-w-[390px] xl:min-w-[390px] xl:max-w-[390px] h-[485px] flex justify-between"
      onMouseEnter={() => setFlipped(true)} // Desktop hover
      onMouseLeave={() => setFlipped(false)} // Desktop hover end
      onClick={() => setFlipped(!flipped)} // Mobile tap toggle
    >
      {/* Flip container */}
      <motion.div
        animate={{ rotateX: flipped ? 180 : 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="relative w-full h-full [transform-style:preserve-3d]"
      >
        {/* FRONT SIDE */}
        <div className="absolute inset-0 flex flex-col p-4 justify-end bg-black/30 [backface-visibility:hidden] overflow-hidden">
          <Image
            src={image}
            alt={` ${title} service 1`}
            fill
            sizes="h-full w-full"
            className="object-cover object-center"
          />
          <div className="relative z-10 w-full bg-black/50 px-4 h-[65px] flex items-center justify-between">
            <h1 className="text-white text-[18px] font-semibold">
             {title}
            </h1>
            <ChevronDown className="text-white" />
          </div>
        </div>

        {/* BACK SIDE */}
        <div className="absolute inset-0 flex flex-col text-secondary [transform:rotateX(180deg)] [backface-visibility:hidden] overflow-hidden">
          {/* Only content area has background image */}
          <div className="relative bg-primary h-[90%]  overflow-hidden bg">
            <Image
              src={image}
              alt={` ${title} service 1`}
              fill
               sizes="h-full w-full"
              className="object-cover z-10 object-center"
            />

            <div className="relative z-10 bg-primary/90 h-full w-full p-6">
              <h1 className="text-2xl font-bold mb-4 text-secondary">
                {title}
              </h1>
              <p className="mb-6 text-[18px] leading-relaxed text-secondary">
               {description}
              </p>
              <Button className="bg-white w-30 mt-8 px-2 hover:bg-secondary hover:text-primary font-semibold">
                {buttonText}
              </Button>
            </div>
          </div>

          <div className="h-25 w-full bg-white/10"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default FeaturesCard;
