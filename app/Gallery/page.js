"use client";
import { CldImage } from 'next-cloudinary';

// By default, the CldImage component applies auto-format and auto-quality to all delivery URLs for optimized delivery.
export default function Page() {
  return (
    <CldImage
      src="Adi" // Use this sample image or upload your own via the Media Explorer
      width="350" // Transform the image: auto-crop to square aspect_ratio
      height="350"
      crop={{
        type: 'auto',
        source: true
      }}
    />
  );
}

// import Gallery from '@/component/Gallery'
// import React from 'react'

// function page() {
//   return (
//     <div><Gallery/></div>
//   )
// }

// export default page