'use client'
import React from 'react'
import { FaCheck } from 'react-icons/fa'
import * as  motion from 'motion/react-client'
import FaintText from '@/components/ui/FaintText'
import ServiceCard_2 from '@/components/ui/card/ServiceCard_2'
import { servicesData } from '@/app/data/ServiceData_2'
import Image from 'next/image'
import background from '@/assets/images/row-bg.jpg'
import StatCard from '@/components/ui/card/StatCard'

const features = [
  { id: 1, text: 'Limited liability for shareholders.' },
  { id: 2, text: 'Able to raise significant capital.' },
  { id: 3, text: 'Easy to sell and pass ownership.' },
  { id: 4, text: 'Well understood and accepted.' },
  { id: 5, text: 'Offset against future profits.' },
  { id: 6, text: 'Profits can be reinvested & paid' },
]

const AboutSection = () => {
  return (
    <section className="relative w-full bg-white py-20 ">


      <div className="w-full flex flex-col lg:flex-row gap-10 relative z-10">
        {/* Left text area */}
        <div className="lg:w-lg flex flex-col justify- justify-between p-6">
          <div className="flex w-full flex-col lg:gap-10 space-y-4 ">
            <FaintText
              backgroundText="About"
              mainText="About our company"
            />
            <h1 className="text-primary font-mono text-2xl tracking-wide lg:text-2xl text-center lg:text-left lg:hidden">
              About our company
            </h1>
            <h1 className="lg:text-[50px] text-2xl font-extrabold text-center lg:text-left font-mono">
              It's all about our construction company
            </h1>
          </div>

        </div>

        {/* Right text + checklist */}
        <div className="lg:w-1/2 text-[#333] p-4 space-y-10">
          <p className="text-[18px] leading-10 text-center lg:text-left">
            A company is a separate legal entity and can incur debt, sue and be
            sued. The company’s shareholders the owners can limit their personal
            liability and are generally not responsible for company debts. A
            company is a complex business structure and has high set-up and
            reporting costs. You can form a company as either a private also
            known as proprietary or public entity. A registered company must
            have at least one director and a company secretary unless it is a
            private construction company.
          </p>

          \          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
            {features.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{
                  skewX: -5,
                  backgroundColor: 'rgb(251 191 36)',
                  color: '#fff',
                }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-3 bg-[#0F172A] text-white py-3 px-4 rounded-md cursor-pointer group shadow-md"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary text-white group-hover:bg-white group-hover:text-primary transition-all duration-300">
                  <FaCheck size={14} />
                </div>
                <p className="text-[0.95rem] font-medium group-hover:text-white transition-colors duration-300">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <section className="flex flex-wrap justify-center gap-6 p-6">
          {servicesData.map((service) => (
            <ServiceCard_2
              key={service.id}
              title={service.title}
              image={service.image}
              href={service.href}
            />
          ))}
        </section>

        <div className="relative min-h-screen flex flex-col py-10 ">
          <Image
            src={background}
            alt="Background"
            fill
            priority
            className="object-cover object-center "
          />

          <div className='max-w-7xl  w-full mx-auto px-4 flex flex-col space-y-8 text-white z-10 '>
 <div>
        <FaintText backgroundText='Numbers' mainText='WE ARE PROFESSIONAL' />
        <h1 className="text-primary font-mono text-2xl tracking-wide lg:text-2xl text-center lg:text-left lg:hidden">
          
        </h1>
        <h1 className="lg:text-[50px] text-white text-2xl font-extrabold text-center font-mono">
          Why you should choose us?
        </h1>
      </div>



      <div className="grid grid-cols-2lg:grid-cols-4 place-items-cente">
        <StatCard/>
      </div>
    


          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
