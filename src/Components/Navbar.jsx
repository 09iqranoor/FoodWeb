// import React from 'react'

// const Navbar = () => {
//   return (
//    <nav className='relative px-4 py-2 flex justify-between items-center bg-white dark:bg-gray-800 border-b-2 dark:border-gray-600'>
//     <div>
//         <h1 className='text-2xl font-bold text-violet-600 dark:text-white'>Food<span className='text-yellow-500'>Web</span></h1>
  
//     </div>
//     <div>
//     <input class="border border-gray-300 placeholder-current h-10 px-5 pr-16  rounded-lg text-sm focus:outline-none dark:bg-gray-500 dark:border-gray-50 dark:text-gray-200 " type="search" name="search" placeholder="Search" />
//     </div>
//    </nav>
//   )
// }
 
// export default Navbar
import React, { useState } from 'react';
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

import { LINKS } from "../constants/index";

const Navbar = () => {
  const [isMobileMenuOpen, setISMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setISMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }

    setISMobileMenuOpen(false);    
  };

  return (
    <nav className=' text-white fixed top-4 z-50 flex w-full flex-col items-center justify-center'>
      <div className='flex w-full items-center justify-between overflow-y-hidden p-4 backdrop-blur-lg lg:m-2 lg:w-[50rem] lg:rounded-full lg:shadow-lg'>
        <img src={logo} alt="logo" width={80} height={22} />
        <div className='hidden space-x-6 lg:flex'>
          {LINKS.map((link, index) => (
            <a
              key={index}
              href={`#${link.targetId}`}
              className={`text-sm ${index !== 0 ? "border-1-2 border-neutral-300/20 pl-2" : ""} hover:opacity-50`}
              onClick={(e) => handleScroll(e, link.targetId)}
            >
              {link.text}
            </a>
          ))}
        </div>
        <div className='lg:hidden'>
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className='w-full backdrop-blue-lg lg:hidden'>
          {LINKS.map((link, index) => (
            <a
              key={index}
              href={`#${link.targetId}`}
              className='block p-4 uppercase tracking-tighter'
              onClick={(e) => handleScroll(e, link.targetId)}
            >
              {link.text}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
