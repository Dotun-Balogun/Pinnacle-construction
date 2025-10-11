import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"



export const DynamicHero = () => {
  return (
    <div>
        <Carousel>
            <CarouselContent>
                {Array.from({length:5}).map((_,index)=>(
<CarouselItem key={index}>
<div>
    {index +1}
</div>
                </CarouselItem>
                ))}
                
            </CarouselContent>
            <CarouselPrevious />
      <CarouselNext />
        </Carousel>
    </div>
  )
}
