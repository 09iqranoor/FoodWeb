import React from 'react'
import { CUSINES } from '../constants'
import {motion} from "framer-motion"


const containerVarients = {
   hidden: {opacity: 0},
    show: {
      opacity:1,
      transition:{
        stagggerChildren:1,
      }
    }
}
 const Itemvarients = {
  hidden:{opacity:0 , y:20},
  show:{
    opacity:1,
    y:0,
     transition:{ duration:0.8 }
  }

 }

const Expertise = () => {
     
  return (
    <section id='expertise'>
        <motion.h2
          
          initial={{opacity:0 , y:20}}
          whileInView={{opacity:1 , y:0}}
          viewport={{once:true}}
          transition={{duration:0.5, delay:0.5}}
        
        className='my-8 text-center text-3xl tracking-tighter lg:text-4xl  text-white'>Our Expertise</motion.h2>
        <motion.div
        initial="hidden"
        whileInView="show"
        varients= {containerVarients}
        
        className='container mx-auto px-4'>
            {CUSINES.map((cusine,index)=>(
                   <motion.div
                   
                   varients={{Itemvarients}}
                   
                   
                   key={index} className='text-white flex items-center border-b-4 border-doted border-neutral-700/40 py-2'>
                    <div className='flex-shrink-0 pr-8 text-2xl'>{cusine.number}</div>
                    <div className='w-1/3 flex-shrink-0'>
                      <img src={cusine.image} alt={ cusine.title} className='h-auto rounded-3xl   transition-all duration-300 hover:lg:-rotate-3 cursor-pointer hover:shadow-lg hover:shadow-rose-400  ' />

                    </div>
                    <div className='pl-8 '>
                        <h3 className='text-2xl uppercase tracking-tighter text-rose-300'>
                            {cusine.title}
                        </h3>
                        <motion.p    
                        initial={{opacity:0 , y:20}}
                        whileInView={{opacity:1 , y:0}}
                        viewport={{once:true}}
                        transition={{duration:0.5, delay:0.5}}
                        className='mt-4 text-lg tracking-tighter'> {cusine.description}</motion.p>
                    </div>
                   </motion.div>
            )) }
        </motion.div>
    </section>           
     
  )
}

export default Expertise