import React from 'react'
import FaintText from '../ui/FaintText'
import ContactForm from '../ContactForm'

const Quote = () => {
    return (
        <div className='relative w-full lg:min-h-screen '>
            <div className='w-full lg:min-h-screen flex flex-col lg:flex-row'>

                <div className='relative lg:min-h-screen max-w-3xl p-4 lg:p-35  bg-secondary space-y-10 '>
                    <div>
                        <FaintText backgroundText='Quote' mainText='Interested in construction' />
                        <h1 className="text-primary font-mono text-2xl tracking-wide lg:text-2xl text-center lg:text-left lg:hidden">
                            Interested in construction
                        </h1>
                        <h1 className="lg:text-[50px] text-white text-2xl font-extrabold text-center lg:text-left font-mono">
                            Request a Free and Fair Quote
                        </h1>
                    </div>

                    <div>
                        <span className="text-[#8b8b8b] text-[18px] md:text-[20px] text-center md:text-left">
                            Slogan creation for your construction company is crucial
                            for the overall branding. And branding in today’s world can’t
                            be ignored, We hope that the above Construction Slogans. Don’t
                            forget to share it on social media.</span>
                    </div>
                </div>
                <div className='lg:absolute left-1/2 top-1/2 lg:-translate-y-1/2 bg-white  '>
                    <div className='bg-primary lg:w-[580px] h-[600px] flex items-center justify-center '>
                        <ContactForm/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Quote