import React from 'react'
import FaintText from '@/components/ui/FaintText'
import ServiceCard from '@/components/ui/card/ServiceCard'
import { serviceData } from '@/app/data/ServiceData'

const Service =() => {
  return (
    <div className='min-h-screen  '>
     <div className='flex flex-col lg:gap-20'>
       <FaintText backgroundText ='Services' mainText= 'What we can do for you'/>
       <h1 className="text-primary font-mono text-2xl tracking-wide lg:text-2xl text-center md:text-left lg:hidden">
         What we can do for you
        </h1>
       <h1 className='lg:text-[50px] text-2xl font-extrabold text-center font-mono'>Our construction Services</h1>
     </div>
     <div className='min-h-screen bg-gray-400'>
      <div className='grid lg:grid-cols-3 place-items-center gap-15 py-10'>
        {
          serviceData.map((service)=>(
            <ServiceCard
            
             key={service.id}
             image={service.image}
             title={service.title}
             description={service.description}
             isLarge={service.isLarge}
            />

          ))
        }
      </div>
     </div>
    </div>
  )
}

export default Service