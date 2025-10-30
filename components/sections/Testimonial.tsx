// import React from 'react'
// import FaintText from '../ui/FaintText'
// import TestimonialCard from '../ui/card/TestimonialCard'
// import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel'

// const Testimonial = () => {
//   return (
//     <div>
//          <div>
//                         <FaintText backgroundText='Testimonials' mainText='See what says our Happy Clients' />
//                         <h1 className="text-primary font-mono text-2xl tracking-wide lg:text-2xl text-center lg:text-left lg:hidden">
//                            See what says our Happy Clients
//                         </h1>
//                         <h1 className="lg:text-[50px] text-secondary text-2xl font-extrabold text-center text-center font-mono">
//                             Our Happy Customers
//                         </h1>
//                     </div>



//                   <div className=' mt-40 container px-4 mx-auto '>
//                     <Carousel>
//                       <CarouselContent>
//                         <CarouselItem>

//                         </CarouselItem>
//                       </CarouselContent>
//                     </Carousel>
// <TestimonialCard/>
//                   </div>

//     </div>
//   )
// }

// export default Testimonial




'use client'

import React from 'react'
import FaintText from '../ui/FaintText'
import TestimonialCard from '../ui/card/TestimonialCard'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '../ui/carousel'
import { testimonials } from '@/app/data/TestimonialData'

const Testimonial = () => {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <div className='min-h-screen '>
      <div>
        <FaintText backgroundText='Testimonials' mainText='See what says our Happy Clients' />
        <h1 className="text-primary font-mono text-2xl tracking-wide lg:text-2xl text-center lg:text-left lg:hidden">
          See what says our Happy Clients
        </h1>
        <h1 className="lg:text-[50px] text-secondary text-2xl font-extrabold text-center font-mono">
          Our Happy Customers
        </h1>
      </div>
      <div className='mt-40 container px-4  shadow-2xl'>
        <Carousel setApi={setApi}>
          <CarouselContent className='pt-40 lg:p-26'>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id}>
                <TestimonialCard
                  clientImage={testimonial.clientImage}
                  testimonialText={testimonial.testimonialText}
                  name={testimonial.name}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
        <CarouselNext />
        </Carousel>
        
        <div className="flex justify-center gap-2 mt-8 pb-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                index === current 
                  ? 'bg-primary w-8' 
                  : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonial