import React from 'react'
import { RiStarSLine } from "@react-icons/all-files/ri/RiStarSLine";
import  {  useDispatch  } from "react-redux";
import { addToCart ,  } from '../redux/Slices/CartSlice';
import { useState } from 'react';



// const [productcount, setProductCount] = useState(6);
    
// const visibleproduct = FoodData.slice(0,productcount);
const FoodCard = ({id , name, price, desc, img , rating , handleToast}) => {
 
  const dispatch = useDispatch();
  
   
  return (
    <div className=' font-bold w-[400px]   p-5 flex flex-col rounded-lg  gap-2' id='dishes'>
           <img className='w-auto h-[200px] hover:scale-110  rounded-md cursor-grab transition-all duration-500 ease-in-out '  src={img} alt="" />
      <div className='text-sm flex justify-between text-white'>
         <h2>{name}</h2>
         <span className='text-white '>Rs.{price}/-</span>
      </div>
      <p className='text-sm font-normal text-white'>{String (desc).slice(0 ,50)}...</p>
      <div className='flex justify-between'>
        <span className='flex justify-center items-center'>
          <RiStarSLine className='mr-1 text-xl text-yellow-400' /> {rating}
        </span>
        <button 
           onClick={()=> { 
            debugger
            dispatch(addToCart({ id, name, price, rating, img, qty:1})
          );
          handleToast(name);

           }} 
          className='p-3 text-white  hover:bg-yellow-600 bg-green-950 rounded-lg    '>Add to Cart</button>
      </div>
    </div>

     
  )



}

export default FoodCard