"use client"

import React from 'react';
import Image from 'next/image';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function HomeCarousel() {
  const heroImages = [
    { imgUrl: '/assets/slider3.jpg', alt: 'smartWatch' },
    { imgUrl: '/assets/slider2.jpg', alt: 'child' },
    { imgUrl: '/assets/Frame 79 (2).png', alt: 'child' },
    { imgUrl: '/assets/Frame 83.png', alt: 'child' },
    { imgUrl: '/assets/slider2.jpg', alt: 'child' },
  ];

  return (
    <div className="hero-carousel p-3 border-2 border-red-600">
      <Carousel  
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={3000}
        showArrows={false}
        showStatus={false}
        transitionTime={1000}  // Smooth transition
        swipeable={true}       // Allow swiping on mobile
        emulateTouch={true}    // Better touch interaction
        dynamicHeight={true}   // Adjust height dynamically
      >
        {heroImages.map((image, index) => (
          <div key={index}>
            <Image
              src={image.imgUrl}
              alt={image.alt}
              width={1920}  // Use a larger width for responsiveness
              height={1080} // Adjust height proportionally
              className="object-cover w-full h-56 md:h-96 lg:h-[500px] rounded shadow-lg lg:rounded-none lg:shadow-none"
              priority 
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default HomeCarousel;
