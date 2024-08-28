"use client"
import  { useState,React} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoMenuOutline } from "react-icons/io5";
import { useRef } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaArrowRightToBracket } from "react-icons/fa6";

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
  
    const handleMouseEnter = () => {
      setIsOpen(true);
    };
  
    const handleMouseLeave = () => {
      setIsOpen(false);
    };


   const [isCampus, setIsCampus] = useState(false);
   const handleCampusEnter = () => {
      setIsCampus(true);
    };

    const handleCampusLeave = () => {
      setIsCampus(false);
    };
    
  const toggleButton = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')


    }

    else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')
    }
  }
  const ref = useRef()
  
  return (
    <>
      <header className="w-full p-2">
        <nav className='nav flex justify-between'>
          <Link href="/" className='flex items-center gap-1'>
            <Image
              src="/Logo.png"
              width={67}
              height={27}
              alt='logo'
            />
            <p className="nav-logo font-bold text-lg">Aps
              <span className="text-primary">School</span>
            </p>
          </Link>

          <div className=" md:flex sm:flex gap-8 hidden font-extrabold text-lg text-primary  ">
         

     
            <Link href="/About"><button  className='flex   ' >
              
               About
               
               </button>
               
               </Link>
            <Link href="/Toppers" ><button className='flex  hover:text-red-700 ' >Academics
               </button></Link>
            <Link href="/Contact" ><button className='flex  hover:text-red-700 ' >Contact us </button></Link>
            
            
            <div className="relative " onMouseEnter={handleCampusEnter} onMouseLeave={handleCampusLeave}>
 <Link href="/Contact" ><button className='flex  hover:text-red-900  '>Campus { < RiArrowDropDownLine className='w-7 h-7'  />}  </button></Link>

      {isCampus && (
        <div id="dropdownHover" className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
            </li>
          </ul>
        </div>
      )}
    </div>
            
 <div className="relative " onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
 <Link href="/Contact" ><button className='flex  hover:text-red-900 '>Hostel { < RiArrowDropDownLine  className=' w-7 h-7'/>}  </button></Link>

      {isOpen && (
        <div id="dropdownHover" className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
            </li>
          </ul>
        </div>
      )}
    </div>

          
          </div>
          
            <div className=' p-1 flex gap-3 '>
           <Link href='https://forms.gle/hga3Xg85MYkt3p3a8' >   <button  className='bg-primary flex py-2 justify-center items-center space-x-1 px-1 rounded text-white font-bold hover:bg-red-700'>Addmission  <FaArrowRightToBracket className='text-white ml-1 animate-bounce' /></button>
           </Link> 

             <button onClick={toggleButton} className='sm:hidden'><IoMenuOutline className='text-2xl font-bold mr-3 text-primary' />
                 
            
             
          
             
             </button>
             </div> 

         </nav>
         <div ref={ref} className=' sm:hidden  transform transition-transform translate-x-full absolute right-1 p-1 bg-transparent border-2 border-gray-200 bg-slate-600 text-[10px] font-bold text-gray-600'>
          <ul>
          <li>About</li>
          <li>Contact us</li>
          <li>Campus</li>
          <li>Hostel</li>
          <li>Academics </li>
          <li>Addmission <FaArrowRightToBracket className='text-white ml-1 animate-bounce' /> </li>
          </ul>
         </div>
        
      </header>
      <section className="border-2 border-slate-200" ></section>
    </>
  )
}

export default Navbar
   

