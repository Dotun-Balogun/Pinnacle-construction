'use client'

import Image from "next/image"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { constructionLogos } from "@/app/data/PartnerData"

export default function Partners() {
  return (
    <TooltipProvider>
      <div className="flex flex-wrap md:flex-row gap-6 justify-center items-center p-10 bg-primary">
        {constructionLogos.map((logo) => (
          <Tooltip key={logo.id}>
            <TooltipTrigger asChild>
              <div className="relative group cursor-pointer">
                <Image
                  src={logo.image}
                  alt={logo.name}
                  width={150}
                  height={150}
                  className="rounded-xl transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{logo.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  )
}
