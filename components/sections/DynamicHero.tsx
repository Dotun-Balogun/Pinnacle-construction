import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Hero from './Hero'
import Hero2 from './Hero2'

export const DynamicHero = () => {
  return (
    <div className="relative w-full">
      <Carousel 
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          <CarouselItem>
            <Hero />
          </CarouselItem>
          <CarouselItem>
            <Hero2 />
          </CarouselItem>
        </CarouselContent>

        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  )
}