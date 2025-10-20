import Image from 'next/image'
import FaintText from '../ui/FaintText'
import process from '@/assets/images/process.jpg'

const How = () => {
    return (
        <div>
            <div className='flex flex-col lg:flex-row justify-between '>
                <div className='max-w-2xl gap-4  space-y-6 '>
                    <span className='lg:pl-40'>
                        <FaintText backgroundText='How?' mainText='Process of Construction' />
                    </span>
                    <h1 className="text-primary font-mono text-2xl tracking-wide lg:text-2xl text-center md:text-left lg:hidden">
                    w    What we can do for you
                    </h1>
                    <div className='px-4 space-y-8' >
                        <h3 className='text-[28px] text-center lg:text-left font-bold font-mono lg:text-[50px]'>How it works in construction?</h3>
                        <div className='text-center lg:text-left' >
                            <p className="text-[20px] tracking-normal text-[#8b8b8b]">
                                Slogan creation for your construction company is
                                crucial for the overall branding.&nbsp;
                            </p>
                        </div>
                        <div className=''>
                            <div className='relative h-[180px]  w-[317px] lg:w-[588px] lg:h-[334px] bg-primary'>
                                <div className='absolute h-[180px] w-[317px] bottom-5 left-5 lg:w-[588px] lg:h-[334px]  '>
                                    <Image
                                        src={process}
                                        alt='How it works'
                                        fill
                                        sizes='w-[180px] h-[317px] lg:w-[588px] lg:h-[388px] '
                                        className='object-contain'
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full bg-gray-700'>
                    <div className ='bg-secondary h-full w-full lg:w-1/2 mt-10 lg:mt-0 '> 
                    jj                                     
                    </div>
                </div>

            </div>
        </div>
    )
}

export default How