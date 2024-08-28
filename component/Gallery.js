// src/components/Gallery.js
"use client"
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Gallery = () => {
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     async function fetchImages() {
//       try {
//         const response = await fetch('/api/uploads');
//         if (response.ok) {
//           const data = await response.json();
//           setImages(data.images);
//         } else {
//           console.error('Failed to fetch images:', response.statusText);
//         }
//       } catch (error) {
//         console.error('Error fetching images:', error);
//       }
//     }

//     fetchImages();
//   }, []);

//   // const deleteImage = async (public_id) => {
//   //   try {
//   //     await axios.delete(`http://localhost:3000/api/images/${public_id}`);
//   //     setImages(images.filter(image => image.public_id !== public_id));
//   //   } catch (error) {
//   //     console.error('Error deleting image:', error);
//   //   }
//   // };

//   return (
//     <div className="container mx-auto p-8">
//       <h2 className="text-2xl font-bold mb-8 text-center">School Gallery</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {images && images.map((image) => (
//           <div key={image.public_id} className="bg-white rounded-md shadow-md overflow-hidden">
//             <img src={image.secure_url} alt={image.public_id} className="w-full h-48 object-cover" />
//             {/* <button
//               onClick={() => deleteImage(image.public_id)}
//               className="bg-red-500 text-white p-2 mt-2"
//             >
//               Delete
//             </button> */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Gallery;


// MyComponent.js

import React, { useEffect, useState } from 'react';

function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
   

    fetchImages();
  }, []);
 async function fetchImages() {
      try {
        const response = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/resources/image`,{
          method: 'GET',
          headers: {
            'Authorization': `Basic ${ Buffer.from( process.env.CLOUDINARY_API_KEY+ ":" +$process.env.CLOUDINARY_API_SECRET).toString('base64')}`
            
          }
        })
        console.log(response)
        if (response.ok) {
          const data = await response.json();
          setImages(data.images);
        } else {
          console.error('Failed to fetch images:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    }
  return (

    <div className="image-container">
      <h1>Gallery</h1>
      {images.map(image => (
        <img
          key={image.public_id}
          src={image.secure_url}
          alt={image.original_filename}
          style={{ width: '200px', height: 'auto', margin: '10px' }}
        />
      ))}
    </div>
  );
}

export default Gallery;


export async function getStaticProp() {
  const response = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/resources/image`,{
              method: 'GET',
              headers: {
                'Authorization': `Basic ${ Buffer.from( process.env.CLOUDINARY_API_KEY+ ":" +$process.env.CLOUDINARY_API_SECRET).toString('base64')}`
                
              }
            }).then(r=>r.json)
            console.log('response' , response)
            return {
              props:{

              }
            }
}