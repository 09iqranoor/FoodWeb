 import React, { useState } from 'react'
 import {IoCloseSharp} from '@react-icons/all-files/io5/IoCloseSharp'
 import { FaShoppingCart} from '@react-icons/all-files/fa/FaShoppingCart'
import ItemCart from './ItemCart'

import  toast , {Toaster} from "react-hot-toast";

import {useSelector} from 'react-redux';



 const Cart = () => {

  const [activeCart , setActiveCart] = useState(false)



  const cartItems = useSelector((state)=> state.cart.cart);
  
  const  totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
   

  const totalPrice = cartItems.reduce((totalPrice , ProductPrice ) => totalPrice + ProductPrice.price * ProductPrice.qty , 0);

   return (
   <>

  
      
   <div className={`z-10 fixed right-0  h-full w-full top-0 lg:w-[20vw] bg-white  ${ activeCart ? "translate-x-0" : "translate-x-full"} transition-all ease-linear  `}>
        <div className='flex justify-between items-center p-5'> 
            <span className='text-xl text-gray-800 '>My Order</span>
              <IoCloseSharp    onClick={()=> setActiveCart(!activeCart)} className='border-2 border-gray-600 text-600 font-bold p-1 text-2xl rounded-md hover:text-white hover:bg-red-600  cursor-pointer hover:border-red-700 '/>
        </div>



{   cartItems.length > 0 ?
      cartItems.map((food)=>{
        return (
        
        <ItemCart key={food.id} id={food.id} name={food.name} img={food.img}  price={food.price}  qty={food.qty}  />

        )
      }): <h2 className='text-center font-bold  text-gray-400 text-2xl mt-24'>Your Cart is empty</h2>
}
    
     
        <div  className='absolute bottom-0 p-5 font-semibold '>
     <h3 >Items :  {totalQty} </h3>
    <h3>Total Amount : {totalPrice}</h3>
    <hr/>
    <button className='bg-violet-600 px-3 text-white  rounded w-full  mb-5 hover:bg-yellow-600  font-bold p-3 py-2'>Check Out</button>
   </div>

   </div>
 
  

   <FaShoppingCart   className={`rounded-full  bg-white p-2  cursor-pointer text-5xl  fixed bottom-10 right-4     ${totalQty > 0  && "animate-bounce  "} `}  onClick={()=> setActiveCart(!activeCart)} />
   </>
   )
 }
  
 export default Cart    

  
  
