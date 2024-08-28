"use client"

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HomeCarousel from './HomeCarousel'
import Image from 'next/image'
import { TypewriterEffectSmooth } from "../component/ui/typewriter-effect";
function Hero() {
  const words = [
    { text: "Welcome" },
    { text: "to" },
    
    {
      text: "APS",
      className: "text-red-500 dark:text-red-500",
    },
    { text: "School" ,
      
      className: "text-red-500 dark:text-red-500",

    },
  ];
  
  return (
    <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 ">
    <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
      <svg
        className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
        viewBox="0 0 100 100"
        fill="currentColor"
        preserveAspectRatio="none slice"
      >
        <path d="M50 0H100L50 100H0L50 0Z" />
      </svg>
      <img
        className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
        src="/hero-img.jpg"
      />
    </div>
    <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
      <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
        <TypewriterEffectSmooth words={words} />
        </p>
        <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
     
         Empowering Minds, Shaping Futures
          <br className="hidden md:block" />
          
            
  
        </h2>
        <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
        At APS, we are dedicated to nurturing the intellectual and personal growth of our students. Our commitment to excellence in education is matched by our focus on fostering a supportive and inclusive environment, where every student is empowered to reach their full potential and become responsible global citizens.
        </p>

        <div className="flex items-center">
          <a
            href="/"
            className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-red-500 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            Get started
          </a>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Hero