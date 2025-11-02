"use client";

import * as motion from "motion/react-client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ServiceCardProps {
  title: string;
  image: string | StaticImageData;
  href: string;
}

export default function ServiceCard({ title, image, href }: ServiceCardProps) {
  const [isActive, setIsActive] = useState(false);

  // Handle tap on mobile
  const handleTap = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isActive) {
      e.preventDefault(); // prevent link navigation on first tap
      setIsActive(true);
    } else {
      // second tap navigates
      setIsActive(false);
    }
  };

  return (
    <Link
      href={href}
      onClick={(e) => handleTap(e)}
      className="block group"
    >
      <motion.div
        className="relative w-[317px] h-[317px] lg:w-[412px] lg:h-[412px] overflow-hidden  cursor-pointer select-none"
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
        animate={isActive ? "hover" : "rest"}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {/* Background Image */}
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 408px"
        />

        {/* Amber Overlay (Default) */}
        <motion.div
          variants={{
            rest: { opacity: 1 },
            hover: { opacity: 0 },
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 bg-primary/70 flex items-center justify-center"
        >
          <motion.h2
            variants={{
              rest: { y: 0, opacity: 1 },
              hover: { y: -20, opacity: 0 },
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="text-2xl font-bold text-gray-900"
          >
            {title}
          </motion.h2>
        </motion.div>

        {/* Diamond Shape with “More details” */}
        <motion.div
          variants={{
            rest: { scale: 0.7, opacity: 0 },
            hover: { scale: 1, opacity: 1 },
          }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <motion.div
            className="border-2 border-white p-10 rotate-45"
            style={{ width: "160px", height: "160px" }}
          >
            <div className="-rotate-45 text-center text-white text-xl font-semibold">
              More details
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </Link>
  );
}
