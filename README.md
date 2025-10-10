This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.





import React from 'react'
import manModel from '../../assets/images/man-model.png'
import Image from 'next/image'
import Navbar from '@/app/shared/Navbar'
import * as  motion from 'motion/react-client'
import { HeroVariants, StripChildVariants, StripParentVariants } from '@/app/animation/animation'

const Hero = () => {
  return (
    <motion.div
    variants={StripParentVariants}
    initial='hidden'
    animate='visible'
     className=' relative min-h-screen'>
      <Navbar/>
        <div className='flex items-center gap-x-20 mt-  max-w-7xl mx-auto px-4 '>
                <motion.div 
                variants={HeroVariants}
                initial='hidden'
                animate='visible'
                className='max-w-lg py-10 space-y-4 z-70'>
                    <h1 className='text-7xl text-secondary font-bold font-Nunito text-wrap w-50'>
                        Start New <span className='text-primary'>Projects</span>
                    </h1>
                    <h2 className='text-2xl text-secondary tracking-wide'>
                        Don't get framed by the competition, trust our solid  Reputation
                    </h2>
                </motion.div>
                <div className='relative max-w-6xl '> 
                  
   <Image src={manModel} alt='male model architect' className='-z-10 w-full h-full bg-contain'/>
                </div>
        </div>
        {/* strips */}
        <div className='' >
         <motion.div
         variants={StripChildVariants}
          className='absolute z-0 top-68  right-0 bottom-0   border-l-450   border-b-450 border-b-primary border-l-transparent    bg-primar'></motion.div>
         <motion.div  variants={StripChildVariants} className='absolute -z-50 - top-0  right-0 bottom-0   border-l-550  border-b-550 border-b-primary/60 border-l-transparent  bg-primar'></motion.div>
         <motion.div   variants={StripChildVariants} className='absolute -z-90 top-0  right-0 bottom-0   border-l-725   border-b-725 border-b-primary/50 border-l-transparent    bg-primar'></motion.div>

        </div>

    </motion.div>
  )
}

export default Hero

