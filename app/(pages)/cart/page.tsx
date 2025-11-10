import React from 'react'

const page = () => {
  return (
    <div className='container mx-auto px-4'>
       <div>
        <div className='grid grid-cols-2 lg:grid-cols-12  '>
          <div className="flex flex-col lg:flex-row justify-between items-center mb-4 lg:col-span-12  border    ">
 <div className='lg:col-span-2 border h-full'>1</div>
            <div className='lg:col-span-2 b '>2</div>
            <div className='lg:col-span-2'>Product</div>
            <div className='lg:col-span-2'>Price</div>
            <div className='lg:col-span-2'>Quanitity</div>
        <div className='lg:col-span-2'>SubTotal</div>
          </div>
          <div className="flex flex-col lg:flex-row  justify-between items-center mb-4 lg:col-span-12  border    ">
 <div className='lg:col-span-2 border h-full'>1</div>
            <div className='lg:col-span-2 b '>2</div>
            <div className='lg:col-span-2'>Product</div>
            <div className='lg:col-span-2'>Price</div>
            <div className='lg:col-span-2'>Quanitity</div>
        <div className='lg:col-span-2'>SubTotal</div>
          </div>
          
           
        </div>
       </div>
    </div>
  )
}

export default page