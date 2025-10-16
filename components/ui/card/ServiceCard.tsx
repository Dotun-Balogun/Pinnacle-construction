'use client'
import React from "react";
import Image, { StaticImageData } from "next/image";
import { Button } from "../button";
import * as motion from 'motion/react-client';
import { Variants } from "motion";

type ServiceCardProps = {
  id?: number;
  image: StaticImageData;
  title: string;
  description: string;
  buttonText?: string;
  isLarge?: boolean;
};

// bounce animation variant
const BounceVariant: Variants = {
  still: { y: 0 },
  bounce: {
    y: [0, -15, 0],
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
    },
  },
};

const ServiceCard = ({
  id,
  image,
  title,
  description,
  buttonText,
  isLarge,
}: ServiceCardProps) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onTapStart={() => setIsHovered(true)}
      onTapCancel={() => setIsHovered(false)}
      onTap={() => setIsHovered(false)}
      whileHover={{
        backgroundColor: "#fbbf24", // amber background
        transition: { duration: 0.3, ease: "easeInOut" },
      }}
      whileTap={{
        backgroundColor: "#fbbf24",
        transition: { duration: 0.3, ease: "easeInOut" },
      }}
      className={`relative max-w-[335px] max-h-[388px] min-h-[388px] p-8 
        lg:max-w-[315px] bg-white shadow-lg 
        lg:max-h-[553px] lg:min-h-[553px]
        ${isLarge ? "lg:min-w-[500px] lg:max-w-[770px] h-[580px]" : ""}`}
    >
      <div className="w-full h-full flex flex-col items-center space-y-4 justify-center">
        {/* Image bounces only when hovered */}
        <motion.div
          variants={BounceVariant}
          animate={isHovered ? "bounce" : "still"}
          className="w-[180px] h-[125px]"
        >
          <Image src={image} alt="service icon" sizes="h-full w-full" />
        </motion.div>

        {/* Title border changes on hover */}
        <div
          className={`p-4 border-b-4 flex items-center justify-center transition-colors duration-300 ${
            isHovered ? "border-white" : "border-primary"
          }`}
        >
          <h1 className="text-base lg:text-2xl font-bold">{title}</h1>
        </div>

        <div>
          <p className="text-[18px] text-center">{description}</p>
        </div>
      </div>

      {/* Button changes color on hover/tap */}
      <div className="absolute w-full top-full -translate-y-1/2 left-1/2 -translate-x-1/2 lg:px-15 transition-colors duration-300">
        <Button
          className={`w-full h-[62px] rounded-none border border-secondary transition-colors duration-300 ${
            isHovered
              ? "bg-white text-secondary"
              : "bg-secondary text-white"
          }`}
        >
          {buttonText || "Read more..."}
        </Button>
      </div>

      
    </motion.div>
  );
};

export default ServiceCard;
