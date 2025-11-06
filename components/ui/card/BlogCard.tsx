import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { FaLink } from 'react-icons/fa'



const isPrime=(num:number):boolean=>{
    if(num<2) return false;
    for(let i= 2; i <= Math.sqrt(num);i++){
        if(num % i === 0) return false;
    }
    return true;
}

type BlogCardProps ={
    index:number,
    reverse?:boolean,
    image:StaticImageData|string,
    text:string,
    date:string,
}

const BlogCard = ({image, text,date, index}:BlogCardProps) => {
   const reverse = isPrime(index)
    return (
        <div className={`group md:w-[600px] h-[330px]    lg:h-[270px] flex  flex-col md md:flex-row  ${reverse ? 'md:flex-row-reverse':'md:flex-row'} items-center justify-center`}>
            <div className='w-[300px] h-full relative'>
                <Image 
                    src={image}
                    alt='blog image'
                    sizes='w-full h-full'
                    fill
                />


                <div className='w-full h-full absolute inset-0  group-hover:bg-black/30 flex items-center justify-center '>
                    <div className="invisible group-hover:visible bg-primary flex items-center justify-center text-white text-4xl p-8 transition-all duration-300 ease-in-out  ">
                        <FaLink />
                    </div>
                </div>
            </div>
            <div className='w-[300px] h-[120px] p-2 md:h-full bg-secondary flex flex-col items-center justify-center'>
                <h1 className='text-2xl font-bold text-white bg'>{text}</h1>
                <h3 className='bg-primary py-2 px-4'> {date}</h3>

            </div>

        </div>
    )
}

export default BlogCard