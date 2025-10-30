import React from 'react'
import { Input } from './ui/input'
import { InputFile } from './ui/InputField'

const ContactForm = () => {
  return (
    <div>
        <div className='flex justify-between gap-4'>
           <InputFile/>
        </div>
    </div>
  )
}

export default ContactForm