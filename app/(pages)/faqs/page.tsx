import FaintText from '@/components/ui/FaintText'
import React from 'react'
import { FaQuestion } from 'react-icons/fa'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqData } from '@/app/data/FaqData'
import Frame from '@/components/ui/Frame'
import ContactForm_2 from '@/components/ContactForm_2'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "FAQ | Pinnacle Construction",
  description:
    "Find answers to the most common questions about Pinnacle Construction’s services, projects, and company policies. Contact us if you can’t find your answer!",
  keywords: [
    "construction FAQ",
    "pinnacle construction questions",
    "building services",
    "home renovation",
    "construction company",
  ],
  openGraph: {
    title: "FAQ | Pinnacle Construction",
    description:
      "Answers to frequently asked questions about Pinnacle Construction services and projects.",
    url: "https://pinnacle-construction.vercel.app/faq",
    siteName: "Pinnacle Construction",
    images: [
      {
        url: "/logo-construction.png",
        width: 800,
        height: 600,
        alt: "Pinnacle Construction Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | Pinnacle Construction",
    description:
      "Answers to frequently asked questions about Pinnacle Construction.",
    images: ["/logo-construction.png"],
  },
}

const Faq = () => {
  return (
    <div className='max-w-7xl px-4 mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 p-4 '>
        <div className='flex flex-col  space-y-10 '>
          <div className="flex flex-col ml-0  ">
            <FaintText
              backgroundText="FAQ"
              mainText="Feel free to contact us"
            />
            <h1 className="text-primary font-mono text-2xl tracking-wide lg:text-2xl text-center lg:text-left lg:hidden">
              FAQ
            </h1>
            <h1 className="lg:text-[50px] text-2xl font-extrabold  text-center md:text-left font-mono">
              Do you have any Questions?
            </h1>
          </div>
          <p className='text-[18px] text-gray-500 text-center md:text-left'>
            Please read questions below and if you can not find your answer, please send us your question, we will answer you as soon as possible.
          </p>
          <div className='flex items-center gap-4 '>
            <div className='w-[80px] h-[80px] rotate-45 bg-primary text-secondary flex items-center justify-center'>
              <FaQuestion className='-rotate-45 text-secondary text-3xl' />
            </div>
            <div className='flex flex-col'>
              <h1 className='text-2xl font-bold'>F.A.QS</h1>
              <h4>Frequently Asked Questions</h4>
            </div>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-2 ">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border transition-colors data-[state=open]:bg-secondary"
              >
                <AccordionTrigger
                  className="text-gray-700 font-bold data-[state=open]:rounded-none hover:no-underline data-[state=open]:text-white border-b border-b-gray-500 w-full px-2"
                >
                  {item.question}
                </AccordionTrigger>

                <AccordionContent className="text-white px-2">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className='space-y-10'>
          <Frame />
          <ContactForm_2 />
        </div>
      </div>
    </div>
  )
}

export default Faq
