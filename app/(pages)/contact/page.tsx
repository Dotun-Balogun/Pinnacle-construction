import ContactForm_2 from '@/components/ContactForm_2';
import FaintText from '@/components/ui/FaintText'
import { Phone, Mail, MapPin } from 'lucide-react';
import * as motion from 'motion/react-client'

const ContactPage = () => {
    const contactItems = [
    {
      icon: Phone,
      label: 'Phone:',
      value: '+234 813 866 2406',
      delay: 0
    },
    {
      icon: Mail,
      label: 'Email:',
      value: 'Support@construction.com',
      delay: 0.1
    },
    {
      icon: MapPin,
      label: 'Address:',
      value: '2346 Johnson St. New York, USA',
      delay: 0.2
    }
  ];

  return (
    <div className='px- py-10'>

  <div className='grid grid-cols-1 lg:grid-cols-2 place-items-center'>
       <div className='px-6'>
         <div className="flex flex-col ml-0  ">
            <FaintText
              backgroundText="Contact"
              mainText="GET IN TOUCH WITH US"
            />
            <h1 className="text-primary font-mono text-2xl tracking-wide lg:text-2xl text-center lg:text-left lg:hidden">
              contact
            </h1>
            <h1 className="lg:text-[50px] text-2xl font-extrabold  text-center md:text-left font-mono">
              Contact us Now
            </h1>
          </div>
          <div className=" space-y-2 ">
      {contactItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: item.delay }}
          className="flex gap-4"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary p-4 flex items-center justify-center min-w-[46px]"
          >
            <item.icon className="w-8 h-8 text-gray-800" />
          </motion.div>
          <div className="flex-1">
            <p className="text-gray-800 font-medium">
              <span className="font-semibold">{item.label}</span> {item.value}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
       </div>
       <div className='bg-secondary w-full'>
<ContactForm_2/>
       </div>
  </div>
    </div>
  )
}
 
export default ContactPage



