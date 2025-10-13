


"use client";
import Image from "next/image";
import React, { useState } from "react";
import * as  motion  from "motion/react-client";
import { ChevronDown } from "lucide-react";
import { Button } from "../button";
import service1 from "@/assets/images/service-1.jpg";

const FeaturesCard = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative [perspective:1000px] w-[315px] h-[485px]"
      onMouseEnter={() => setFlipped(true)}    // Desktop hover
      onMouseLeave={() => setFlipped(false)}   // Desktop hover end
      onClick={() => setFlipped(!flipped)}     // Mobile tap toggle
    >
      {/* Flip container */}
      <motion.div
        animate={{ rotateX: flipped ? 180 : 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="relative w-full h-full [transform-style:preserve-3d]"
      >
        {/* FRONT SIDE */}
        <div className="absolute inset-0 flex flex-col p-4 justify-end bg-black/30 [backface-visibility:hidden]  overflow-hidden">
          <Image
            src={service1}
            alt="service 1"
            fill
            className="object-cover object-center"
          />
          <div className="relative z-10 w-full bg-black/50 px-4 h-[65px] flex items-center justify-between">
            <h1 className="text-white text-[18px] font-semibold">
              Building Engineering
            </h1>
            <ChevronDown className="text-white" />
          </div>
        </div>

        {/* BACK SIDE */}
        <div className="absolute inset-0 flex flex-col justify-center  bg-primary text-white  p-6 [transform:rotateX(180deg)] [backface-visibility:hidden] ">
          <h1 className="text-2xl font-bold mb-4">Building Engineering</h1>
          <p className="mb-6 text-sm leading-relaxed">
            A Building Engineer is recognised as being expert in the use of
            technology for the design, construction, assessment and maintenance
            of the built environment.
          </p>
          <Button className=" bg-white w-30 px-2 hover:bg-secondary hover:text-primary font-semibold hover:bg-gray-100">
            Read more...
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default FeaturesCard;
