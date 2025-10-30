// import Image from 'next/image'
// import React from 'react'
// import client_1 from '@/assets/images/client_1.png'
// const TestimonialCard = () => {
//     return (
//         <div className='relative md:w-[260px] md:h-[400px] lg:w-[870px]  lg:h-[560px] bg-white p-10 lg:p-20 shadow-2xl  flex items-center justify-center '>
//             <div className='lg:absolute mt-10 lg:left-15 lg:top-5 lg:p-20 text-justify '>
//                 <p className=' text-base lg:text-2xl'>"Great Experience!! Michael has made 
//                     the whole process easy from the planning stage
//                      to the  plant going in. Steve &amp; his
//                       crew did a great job. I felt like Lavish Gardens
//                        really listened to what I wanted, gave me ideas,
//                         and helped me decide how to make my backyard a place to relax and enjoy the view.
//                         </p>
//             </div>
//             <div className='absolute left-1/2 -top-1/2 translate-y-1/2 -translate-x-1/2  lg:-top-20 lg:-left-30  lg:translate-y-0 lg:-translate-x-0'>
//                 <div className='relative w-[135px] h-[135px] lg:w-[200px] lg:h-[200px] bg-primary '>
//                     <div className='absolute left-4 top-4 lg:left-3 top-3 relative w-[135px] h-[135px] lg:w-[200px] lg:h-[200px] shadow-lg'>
//                         <Image
//                             src={client_1}
//                             alt='client Image'
//                             fill
//                         />
//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default TestimonialCard

import Image from 'next/image'
import React from 'react'
import { StaticImageData } from 'next/image'
import { FaQuoteRight } from "react-icons/fa";

interface TestimonialCardProps {
  clientImage: StaticImageData | string;
  testimonialText: string;
  name?:string
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ clientImage,name, testimonialText }) => {
  return (
    <div className='relative md:w-[260px] md:h-[400px] lg:w-[870px] lg:h-[560px] bg-white p-10 lg:p-20 shadow-2xl flex items-center justify-center'>
      <div className='lg:absolute mt-10 lg:left-15 lg:top-5 lg:p-20 text-justify space-y-6 '>
        <p className='text-base lg:text-2xl text-center lg:text-left'>{testimonialText}</p>
          <h1 className='text-center'>-{name}-</h1>

      </div>
      <div className='absolute left-1/2 -top-1/2 translate-y-1/2 -translate-x-1/2 lg:-top-20 lg:-left-30 lg:translate-y-0 lg:-translate-x-0'>
        <div className='relative w-[135px] h-[135px] lg:w-[200px] lg:h-[200px] bg-primary'>
          <div className='absolute left-4 top-4 lg:left-3 lg:top-3 w-[135px] h-[135px] lg:w-[200px] lg:h-[200px] shadow-lg'>
            <Image
              src={clientImage}
              alt='client Image'
              sizes='w-full h-full'
              fill
            />
          </div>
        </div>
      </div>
      <div className='absolute text-8xl text-primary/30'>
<FaQuoteRight />
      </div>
    </div>
  )
}

export default TestimonialCard