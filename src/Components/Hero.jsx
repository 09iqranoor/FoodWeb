// import React from 'react'

 

// const Hero = () => {
//   return (
//    <>
//    <section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
//     <div class="mx-auto grid max-w-screen-xl px-4 pb-8 md:grid-cols-12 lg:gap-12 lg:pb-16 xl:gap-0">
//       <div class="content-center justify-self-start md:col-span-7 md:text-start">
//         <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight dark:text-white md:max-w-2xl md:text-5xl xl:text-6xl">  Craving Pizza? 🍕<br />Fresh & Hot, Delivered to Your Doorstep!</h1>
//         <p class="mb-4 max-w-2xl text-gray-500 dark:text-gray-400 md:mb-12 md:text-lg mb-3 lg:mb-5 lg:text-xl"> Delicious flavors, unbeatable prices. Order now and experience pizza perfection!</p>
//         <a href="#" class="inline-block rounded-lg bg-primary-700 px-6 py-3.5 text-center font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">  Order Now</a>
//       </div>
//       <div class="hidden md:col-span-5 md:mt-0 md:flex">
//         <img class="dark:hidden" src="hero.jpg" alt="shopping illustration" />
//         <img class="hidden dark:block" src="hero" alt="shopping illustration" />
//       </div>
//     </div>
  
//   </section>


//    </>
//   )
// }

// export default Hero



import React from 'react'

import video from "../assets/hero.mp4"
import logo from "../assets/logo.png"
import hero from "../assets/hero.jpeg"

 import {motion} from "framer-motion"
 const HeroSection = () => {
  return (
    <section className='relative flex h-screen itmes-center justify-center'>
           
          <div className='absolute inset-0 -z-20 h-full w-full overflow-hidden'>
            <video src={video} className='h-full object-cover w-full' muted autoPlay loop playsInline poster='hero'>

            </video>
          </div>
   <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent from-70% to-black"></div>

           <div className='relative z-20 flex h-screen flex-col justify-end pb-20'>
 <motion.img 
 initial={{opacity:0 , x:-1000}}  
 whileInView={{opacity:1 , x:0}}
 viewport={{once:true}} 
 transition={{duration:0.6,  delay:0.2 }} 

    
 src={logo} alt="resturent"  className='w-full p-4'/>
    {/* <p className='p-4 text-lg text-white tracking-tighter'>Paris</p> */}
           </div>
            </section>
  )
} 

export default HeroSection