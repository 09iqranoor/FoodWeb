import React from 'react'

import about from "../assets/about.jpeg"
// import { ABOUT } from '../constants'
import {ABOUT } from "../data/data"
import {motion} from "framer-motion"
const About = () => {
  return (
   <section className='container mx-auto mb-8 mt-11' id='about'>
       <motion.h2 
       initial={{opacity:0 , y:50}}
       whileInView={{opacity:1 , y:0}}
       viewport={{once:true}}
       transition={{duration:0.6,  delay:0.2 }}  
       className='mb-8 text-center text-white text-5xl tracking-tighter lg:text-4xl'>About Us</motion.h2>

       <div className='flex flex-wrap'>
             <div className='w-full p-4 lg:w-1/2'>
             <img src={about} className='rounded-3xl  transition-all duration-300 hover:rotate-1 cursor-pointer hover:shadow-lg hover:shadow-rose-400  lg:-rotate-3' alt="" />
             </div>

             <div className='w-full px-2 lg:w-1/2'>
                <motion.h2 
                  initial={{opacity:0 , y:50}}
                  whileInView={{opacity:1 , y:0}}
                  viewport={{once:true}}
                  transition={{duration:0.6,  delay:0.2 }}
                className='text-4xl tracking-tighter lg:text-6xl text-white'>{ABOUT.header}</motion.h2>
                <motion.div
                
                initial={{opacity:0 , y:50}}
                whileInView={{opacity:1 , y:0}}
                viewport={{once:true}}
                transition={{duration:0.6,  delay:0.4 }}
                className='mb-8 h-2 w-36 bg-rose-300 lg:-rotate-3 '></motion.div>
                 <motion.p 
                 initial={{opacity:0 , y:50}}
                 whileInView={{opacity:1 , y:0}}
                 viewport={{once:true}}
                 transition={{duration:0.6,  delay:0.6 }}
                 className='m-8 text-2xl text-white leading-relaxed tracking-tight lg:max-w-xl'> 
                   {ABOUT.content}
                 </motion.p>
             </div>
       </div>

   </section>
  )
}

export default About