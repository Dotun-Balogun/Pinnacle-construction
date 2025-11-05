"use client"

import React from "react"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Hero from "./Hero"
import Hero2 from "./Hero2"

export const DynamicHero = () => {
  return (
    <div className="relative w-full">
      <Carousel
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 10000, 
            stopOnInteraction: false, 
          }),
        ]}
      >
        <CarouselContent>
          <CarouselItem>
            <Hero />
          </CarouselItem>
          <CarouselItem>
            <Hero2 />
          </CarouselItem>
        </CarouselContent>

        {/* Navigation Buttons grouped to the right */}
        <div className="absolute right-4 bottom-4 flex space-x-2 z-10">
          <CarouselPrevious className="static translate-y-0" />
          <CarouselNext className="static translate-y-0" />
        </div>
      </Carousel>
    </div>
  )
}
