import React from 'react'
import { REVIEW } from '../constants'
import xaviour from "../assets/xaviour.jpeg"
 import customer1 from "../assets/customer1.jpeg"
 import customer2 from "../assets/customer2.jpeg"
 import customer3 from "../assets/customer3.jpeg"
 import customer4 from "../assets/customer4.jpeg"

 import {motion} from "framer-motion"
const Review = () => {
  return (
    <section className='text-white container mx-auto mb-0 mt-12' id='review'>
        <div className='flex flex-col' >
            <motion.p   
           initial={{opacity:0 , y:50}}
           whileInView={{opacity:1 , y:0}}
           viewport={{once:true}}
           transition={{duration:0.6,  delay:0.6 }}
            className='mb-10 text-3xl font-light leading-normal tracking-tighter lg:mx-40 lg:text-[3.5rem]'>
                {REVIEW.content}
            </motion.p>
            <div className='flex items-center justify-center gap-6'>

                  <img src={xaviour} width={80} height={80} alt={REVIEW.name} className='hover:scale-110 transition-all duration-500 ease-in-out  rounded-full border' />
                  <div className='tracking-tighter'>
                    <h6>{REVIEW.name}</h6>
                    <p className='text-sm text-neutral-500'>{REVIEW.profession} </p>
                  </div>
            </div>
        </div>
        <div className='mt-14 flex flex-col items-center justify-center gap-2 md:flex-row'>{[ customer1,customer2, customer3, customer4].map((customer, index) =>(
            <img key={index} src={customer} alt="customer" className='h-[300px] w-[200px] rounded-br-3xl transition-all duration-500 ease-in-out rounded-tl-3xl object-cover hover:scale-110' />
        ))}</div>
    </section>
  )
}

export default Review  