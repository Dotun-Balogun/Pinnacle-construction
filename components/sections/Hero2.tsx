// import React from "react";
// import Image from "next/image";
// import slide2 from "../../assets/images/slide-2.jpg";
// import * as motion from 'motion/react-client'

// const Hero2 = () => {

//   return (
//     <div className=" h-[50vh] lg:min-h-screen flex flex-col items-center justify-center">
//       <Image 
//         src={slide2}
//         alt="Background"
//         fill
//         style={{ objectFit: "cover", zIndex: 0 }}
//         priority
//         className=''
//       />
//       {/* Add your content here */}
//       <div
//         style={{ position: "relative", zIndex: 1 }}
//         className="flex items-center justify-center w-full"
//       >
//         {/* Content over the background */}

//         <div className="relative w-full px-2 lg:px-20">
//           <motion.div
//           initial={{opacity:0, y:10}}
//           animate={{
            
//             opacity:1,
//             y:[4,2,0],
//             transition:{
//                 ease:'easeInOut',
//                 duration:0.8
//             }
//           }}
//            className="relative w-full h-[100px]  lg:h-[200px] bg-secondary   text-primary flex items-center justify-center">
            
//             <h1 className="text-[18px] lg:text-[36px] font-bold">
//               Committed to Superior Quality and Result
//             </h1>


//               <motion.div
//               initial={{
//                 opacity:0 , y:50
//               }}
//               animate={{
                
//               opacity:1,
//                y:[25,0],
//                transition:{
//                 type:'spring',
//                 stiffness:60,
//                 damping:12,
//                 delay:0.3,
                
//                 duration:0.9,
//                 ease:'easeInOut'

//                }
//               }}
              
//                className="absolute  top-1/2 translate-y-1/2  left-1/2 lg:px-20 px-6  -translate-x-1/2 w-full">
//             <div className=" w-full    bg-primary text-secondary h-[70px]  lg:h-[100px] flex items-center justify-center text-[16px] px-6 lg:text-[28px] font-bold">
//             <h1>We'll get it ,like us there are none</h1>
//           </div>
//               </motion.div>
            
//           </motion.div>
                    
          
//         </div> 
//       </div>
//     </div>
//   );
// };

// export default Hero2;



import React from "react";
import Image from "next/image";
import slide2 from "../../assets/images/slide-2.jpg";
import * as motion from 'motion/react-client'

const Hero2 = () => {

  return (
    <div className="relative h-[50vh]  lg:min-h-screen flex flex-col items-center justify-center">
      <Image 
        src={slide2}
        alt="Background"
        fill
        style={{ objectFit: "cover", zIndex: 0 }}
        priority
        className=''
      />
      {/* Add your content here */}
      <div
        style={{ position: "relative", zIndex: 1 }}
        className="flex items-center justify-center w-full"
      >
        {/* Content over the background */}

        <div className="relative w-full px-2 lg:px-20">
          <motion.div
          initial={{opacity:0, y:10}}
          animate={{
            
            opacity:1,
            y:[4,2,0],
            transition:{
                ease:'easeInOut',
                duration:0.8
            }
          }}
           className="relative w-full h-[100px]  lg:h-[200px] bg-secondary   text-primary flex items-center justify-center">
            
            <h1 className="text-[18px] lg:text-[36px] font-bold">
              Committed to Superior Quality and Result
            </h1>


              <motion.div
              initial={{
                opacity:0 , y:50
              }}
              animate={{
                
              opacity:1,
               y:[25,0],
               transition:{
                type:'spring',
                stiffness:60,
                damping:12,
                delay:0.3,
                
                duration:0.9,
                ease:'easeInOut'

               }
              }}
              
               className="absolute  top-1/2 translate-y-1/2  left-1/2 lg:px-20 px-6  -translate-x-1/2 w-full">
            <div className=" w-full    bg-primary text-secondary h-[70px]  lg:h-[100px] flex items-center justify-center text-[16px] px-6 lg:text-[28px] font-bold">
            <h1>We&apos;ll get it ,like us there are none</h1>
          </div>
              </motion.div>
            
          </motion.div>
                    
          
        </div> 
      </div>
    </div>
  );
};

export default Hero2;