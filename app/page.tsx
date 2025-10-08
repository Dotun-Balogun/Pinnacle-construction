import Image from 'next/image'
import bg from '../assets/images/slide-2.jpg'
const HomePage = () => {
  return (
    <div className="p-4   " >
     hwllo my name is olamjdotyb
     <Image src={bg} alt='background image'/>
    </div>
  )
}

export default HomePage
