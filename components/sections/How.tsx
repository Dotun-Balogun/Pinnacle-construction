import Image from 'next/image'
import FaintText from '../ui/FaintText'
import process from '@/assets/images/process.jpg'

const How = () => {
    const projectPhases = [
  {
    id: 1,
    title: "Agency / Bidding",
    description: "Ensure design documents are reviewed and permitted",
  },
  {
    id: 2,
    title: "Construction",
    description: "Helps to coordinate furnishings and move-in process",
  },
  {
    id: 3,
    title: "Project Execution",
    description: "Client directs move in of equipment, operations & staff",
  },
];

    return (
        <div>
            <div className='flex flex-col lg:flex-row justify-between '>
                <div className='max-w-2xl gap-4  space-y-6 '>
                    <p className='lg:pl-40'>
                        <FaintText backgroundText='How?' mainText='Process of Construction' />
                    </p>
                    <h1 className="text-primary font-mono text-2xl tracking-wide lg:text-2xl text-center md:text-left lg:hidden">
                        What we can do for you
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
                <div className='w-full lg:pl-20 '>
                    <div className='bg-secondary relative h-full w-full  p-10   '>
                        <div className='lg:absolute lg:top-1/2 lg:-translate-y-1/2  flex flex-col -left-10 gap-10'>
                            {projectPhases
                            .map((phase)=>(
                                <div key={phase.id} className='h-[136px] flex flex-col md:flex-row  items-center justify-center gap-4'>
                            <div className='w-[136px] text-white flex items-center justify-center bg-primary h-[136px] font-mono text-[56px]'>
                                <h1>{phase.id}</h1>
                            </div>

                            <div className='h-full flex flex-col  justify-center items-center lg:text-left text-center '>

                                <h3 className='text-white lg:text-[36px] font-bold'>{phase.title}</h3>
                                <p className="text-[18px]  text-[#aaaaaa] ">
                                    {phase.description}
                                </p>
                            </div>
                        </div>
 
                            ))}
                        </div>
                       
                    </div>
                </div>

            </div>
        </div>
    )
}

export default How