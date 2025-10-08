import Image from 'next/image'
import React from 'react'
import logo from '../../assets/images//logo-construction.png'
import NavList from './NavList'
const Navbar = () => {
  return (
    <div className='container mx-auto py-4 px-10'>
        <div className='flex items-center justify-between'>
            <Image src={logo} alt='company logo' width={250} height={150}/>
            <div>
              <NavList/>
            </div>
        </div>
    </div>
  )
}

export default Navbar