'use client'
import React from 'react'
import FaintText from '../ui/FaintText'
import PortfolioCard from '../ui/card/PortfolioCard';
import { portfolioData } from '@/app/data/PortfolioData';

const LatestProject = () => {
  
  return (
    <div className='lg:min-h-screen'>
                <div className="flex flex-col lg:gap-10">
                <FaintText
                  backgroundText="Services"
                  mainText="We are Professional"
                />
                <h1 className="text-primary font-mono text-2xl tracking-wide lg:text-2xl text-center lg:text-left lg:hidden">
                  We are Professional
                </h1>
                <h1 className="lg:text-[50px] text-2xl font-extrabold text-center font-mono">
                  Our Latest Project
                </h1>
              </div>

              <div className='max-w-7xl mx-auto px-4'>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
          {portfolioData.map((project) => (
            <PortfolioCard
              key={project.id}
              id={project.id}
              title={project.title}
              category={project.category}
              image={project.image}
              slug={project.slug}
            />
          ))}
        </div>

              </div>
    </div>
  )
}

export default LatestProject