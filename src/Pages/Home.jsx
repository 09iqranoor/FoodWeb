import React from 'react'
import Navbar from '../Components/Navbar'
import CatagoryMenu from '../Components/CatagoryMenu'
import FoodItems from '../Components/FoodItems'
import Cart from '../Components/Cart'
import Hero from '../Components/Hero'
import About from '../Components/About'

import Review from "../Components/Review"
import Mission  from '../Components/Mission'
import ContactSection from "../Components/ContactSection"
import Expertise from "../Components/Expertise"
import Footer from "../Components/Footer"
const Home = () => {
  return (
    <>
    <Navbar />


    
  <Hero />
        <CatagoryMenu />
    <FoodItems />
    <Cart/>
    <About/>
<Mission/>
<Expertise/>
  <Review/>
<ContactSection/>
<Footer/>
     

     
    </>

  )
}

export default Home