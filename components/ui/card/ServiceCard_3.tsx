'use client'
import  * as motion from 'motion/react-client'
import { useState } from 'react';
import { Button } from '../button';


interface ServiceData {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}
export  default function ServiceCard_3({ id,title, description,icon}:ServiceData) {
  const [isActive, setIsActive] = useState(false);

  return (
    <motion.div
      className="relative w-full min-w-[200px] max-w-[350px] h-[540px] border p-10 flex flex-col justify-evenly gap-10"
      initial={{  borderColor: '#1e293b' }}
      whileHover={{
        backgroundColor: '##1e293b',
        borderColor: '',
        transition: { duration: 0.3 }
      }}
      whileTap={{
        backgroundColor: '#1e293b',
        borderColor: '',
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setIsActive(true)}
      onHoverEnd={() => setIsActive(false)}
      onTapStart={() => setIsActive(true)}
      onTap={() => setTimeout(() => setIsActive(false), 2000)}
    >
      {/* Icon */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 h-[128px] w-[128px] text-4xl flex items-center justify-center"
        initial={{ backgroundColor: '#1e293b', color: '#ffffff' }}
        animate={
          isActive
            ? { backgroundColor: '#fbbf24', color: '#ffffff' }
            : { backgroundColor: '#1e293b', color: '#ffffff' }
        }
        transition={{ duration: 0.3 }}
      >
        {icon}
      </motion.div>

      {/* Content */}
      <div className="min-h-[180px] flex flex-col items-center justify-between mt-16">
        <motion.h3
          className="text-2xl text-center font-bold mb-4"
          initial={{ color: '#fbbf24' }}
          animate={isActive ? { color: '#fbbf24' } : { color: '#fbbf24' }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h3>

        <motion.div
          className="text-base text-center mb-6"
          initial={{ color: '#cbd5e1' }}
          animate={isActive ? { color: '#cbd5e1' } : { color: '#cbd5e1' }}
          transition={{ duration: 0.3 }}
        >
          <p>{description}</p>
        </motion.div>

        <Button className='w-full h-[62px] rounded-none border border-secondary transition-colors duration-300' >Contact us</Button>
      </div>
    </motion.div>
  );
};
