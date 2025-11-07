import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const NotFoundPage = () => {
  return (
    <div className='container mx-auto px-4 flex items-center justify-center '>
        <div className='w-[500px] text-center h-[300px] flex  flex-col items-center justify-center bg-secondary'>
            <h1 className='text-4xl text-primary font-bold'>The page you are looking for is not available</h1>
        <Link href={'/'}>
         <Button>
                    Home
            </Button>
        </Link>
            
        </div>

    </div>
  )
}

export default NotFoundPage