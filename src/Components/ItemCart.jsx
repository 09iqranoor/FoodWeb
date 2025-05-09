import React from 'react'

import { FaPlus } from '@react-icons/all-files/fa/FaPlus'
import { FaMinus} from '@react-icons/all-files/fa/FaMinus'
import { MdDelete} from '@react-icons/all-files/md/MdDelete'

import { useDispatch } from 'react-redux'

import { removeFromCart  , IncrementQty , decrementQty } from '../redux/Slices/CartSlice'
import toast from 'react-hot-toast'
const ItemCart = ({id , price, img, qty, name} ) => {

  const dispatch = useDispatch();
  return (
    <div className='flex gap-4 shadow-md rounded-lg p-7 mb-11'>
                 <MdDelete   
                
                 onClick = {()=> {
                  dispatch(removeFromCart({id, img, name, price , qty})
                )
                toast(`${name} Removed!..`, {
                  icon: "😪"
                });
                
                 }}
                
                  className='absolute right-3 text-red-600  cursor-pointer'/>
     <img src={img} alt=""  className='w-[50px] h-[50px] ' />

     <div className='leading-5'>
    <h2  className='font-bold text-gray-800' >{name}</h2>
    <div   className='flex justify-between items-center  w-full '> 
    <span className='text-yellow-600 font-bold'> Rs.{price}</span>
        <div className='flex justify-center items-center gap-2 absolute right-4'>
             <FaPlus onClick={()=> qty >= 1 ?  dispatch(IncrementQty({id})): (qty = 0)}  className='border-2 border-gray-600 text-white hover:bg-yellow-600 hover:border-none bg-green-950 p-1 text-xl transition-all  ease-linear cursor-pointer' />
              <span > {qty}</span>
             <FaMinus onClick={()=> qty > 1 ? dispatch(decrementQty({id}))  : (qty = 0)}  className='border-2 border-gray-600 text-white hover:bg-yellow-600 hover:border-none p-1  bg-green-950 text-xl transition-all  ease-linear cursor-pointer'  />
    
             </div>
    </div>
     </div>

    </div>
  )
}

export default ItemCart