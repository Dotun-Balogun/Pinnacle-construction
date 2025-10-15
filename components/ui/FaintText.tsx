import React from 'react'

type FaintTextProps = {
  text:string,
}
const FaintText = ({text}:FaintTextProps) => {
  return (
    <div className='hidden lg:block relative z-0'>
        <div className='absolute 
      z- flex items-center justify-center'>
   <h1 className='text-[200px] font-bold text-primary/8'>{text}</h1>
    </div>
<div className='absolute inset-0 bg-black/30'> </div>
    </div>
    
  )
}

export default FaintText