import React from 'react'

const StatCard = () => {
  return (
    <div  className='relative bg-white lg:w-[315px] lg:h-[228px] flex items-center justify-center '>
        <h1 className='text-[80px]'></h1>
        <div className="bg-primary p-2 font-medium absolute text-seocondary top-1/2 -translate-y-1/2 flex items-center justify-center">
   <h1 className='text-[20px]'>Years of Experience</h1>
        </div>
    </div>
  )
}

export default StatCard