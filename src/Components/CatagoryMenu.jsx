import React, {useState} from 'react'

const CatagoryMenu = () => {

   const [catagory , setCatagory] = useState([]);


   const listUniqueCata = ()=>{
      const   unicatagory = [
         
      ]
   }
  return (
    <div className='mx-6 overflow-x-hidden'>
        <h5 className='text-xl text-white font-semibold text-center mt-10'>Find the Best Food</h5>
        <div className='my-5    flex gap-3 justify-center  '>
             <button className =' px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-950 hover:text-white'>
                All
             </button>
             <button className =' px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-950 hover:text-white'>
                Lunch
             </button>
             <button className =' px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-950 hover:text-white'>
                BreakFast
             </button>
             <button className =' px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-950 hover:text-white'>
                Dinner
             </button>
             
        </div>
    </div>
  )
}

export default CatagoryMenu