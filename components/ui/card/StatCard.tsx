'use client'
import React from 'react'
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

type StatCardProps = {
  end: number;
  title: string;
  suffix?: string;
};

const StatCard = ({ end, title, suffix }: StatCardProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <div
      ref={ref}  
      className='relative group hover:bg-primary bg-white w-full w-[150px] h-[150px] lg:w-[315px] lg:h-[228px]  flex items-center justify-center px-4'
    >
      <h1 className='relative text-secondary text-4xl lg:text-[80px]'>
        {inView ? <CountUp end={end} duration={3} /> : 0} {suffix}
      </h1>
<div className='absolute text-secondary p-2  w-full top-full -translate-y-1/2 flex items-center justify-center'>
 <div className=" w-full h-[50px] bg-primary group-hover:bg-white font-medium text-secondary  flex items-center justify-center">
        <h1 className=' text-base lg:text-[20px] text-center'>{title}</h1>
      </div>
</div>
     
    </div>
  );
};

export default StatCard;
