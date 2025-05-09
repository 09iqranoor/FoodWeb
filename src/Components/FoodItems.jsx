import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../data/data.js'
import toast, {  Toaster } from 'react-hot-toast'


const FoodItems =() =>{

 const handleToast =  (name)=> toast.success(`Added ${name} `);

return(

  <>

  <Toaster    position='top-center' reverseOrder={false}    />

     <div className='flex flex-wrap  gap-10 justify-center   '>
         {FoodData.map((food)=>{
          return(
            <FoodCard  key={food.id} 
            
                       name={food.name}
                       id={food.id}
                       rating={food.rating}
                       img={food.img}
                       price={food.price}
                       desc={food.desc}
                       handleToast={handleToast}
                     
            
            />
          )
         })}
     </div>

     </>
)


}


export default FoodItems