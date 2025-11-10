import Image from 'next/image'
import React from 'react'
import workers from '@/assets/images/about-company-768x734.jpg'

const Frame = () => {
    return (

        <div className='relative w-[317px]  h-[284px] '>
            <div className='absolute  right-2 top-8 w-[317px]  h-[284px]'>
                <Image
                    src={workers}
                    alt="construction team"
                    className="object-cover w-full h-full z-6"
                />
            </div>
            <div className='absolute left w-[315px]  z-2 h-[284px] border-r-4  border-dotted  border-b-4 top-10  -dashed  border-dashed t'>
                <div className='absolute left-4 border-r-4 border-dotted  border-b-4 -bottom-4 w-[317px]  h-[284px]'>
                </div>
            </div>
        </div>
    )
}

export default Frame