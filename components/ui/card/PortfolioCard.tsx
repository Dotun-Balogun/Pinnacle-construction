'use client';

// types/portfolio.ts
export interface PortfolioItem {
  id?: string | number;
  title: string;
  category: string;
  image: string | StaticImageData;
  slug?: string; // For navigation
}

// components/PortfolioCard.tsx

import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react';
import { LuSquareArrowOutUpRight } from 'react-icons/lu';
import *  as  motion  from 'motion/react-client';
import Link from 'next/link';
import { Variants } from 'motion';


interface PortfolioCardProps {
  title: string;
  category: string;
  image: string | StaticImageData;
  slug?: string;
  id?: string | number;
}

const PortfolioCard = ({ 
  title, 
  category, 
  image, 
  slug,
  id 
}:PortfolioCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isTapped, setIsTapped] = useState(false);

  // Generate slug from title if not provided
  const portfolioSlug = slug || title.toLowerCase().replace(/\s+/g, '-');
  const portfolioUrl = `/portfolio/${id || portfolioSlug}`;

  const handleTap = () => {
    setIsTapped(true);
    // Auto-hide after 3 seconds on mobile
    setTimeout(() => {
      setIsTapped(false);
    }, 3000);
  };

  const containerVariants:Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  const itemVariants:Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut'
      }
    }
  };

  const iconVariants:Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    }
  };

  return (
    <Link href={portfolioUrl}>
      <motion.div 
        className='relative w-full aspect-square sm:p-[10px] lg:p-[25px] flex items-center  p-1 justify-center overflow-hidden cursor-pointer group'
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onTap={handleTap}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Image - fills the entire container */}
        <div className='absolute inset-0 w-full h-full'>
          <Image
            src={image}
            alt={title}
            className='object-cover'
            sizes='w-full h-full'
            fill
          />
        </div>

        {/* Overlay  */}
        <motion.div 
          className='relative z-10 w-full h-full bg-primary/90 flex flex-col justify-center items-center gap-6 md:gap-10 px-4'
          initial="hidden"
          animate={(isHovered || isTapped) ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Icon */}
          <motion.div 
            className='flex items-center justify-center bg-secondary text-primary w-14 h-14 md:w-20 md:h-20 rounded-sm'
            variants={iconVariants}
          >
            <LuSquareArrowOutUpRight className='w-6 h-6 md:w-[30px] md:h-[30px]' />
          </motion.div>

          {/* Text Content */}
          <motion.div 
            className='text-center px-2'
            variants={itemVariants}
          >
            <motion.h3 
              className='text-sm md:text-[18px] text-secondary font-bold mb-2 leading-tight'
              variants={itemVariants}
            >
              {title}
            </motion.h3>
            <motion.span 
              className='text-xs md:text-[12px] text-secondary/80 block'
              variants={itemVariants}
            >
              {category}
            </motion.span>
          </motion.div>
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default PortfolioCard;