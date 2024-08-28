// components/PopupImage.js
"use client"
import { useEffect, useState } from 'react';

export default function PopupImage({ imageUrl, delay = 1000 }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Delay the popup appearance
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    isOpen && (
      <div
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-500 ease-in-out"
        aria-modal="true"
        role="dialog"
      >
        <div
          className="relative animate-fadeInScale max-w-xs md:max-w-md lg:max-w-lg w-full"
        >
          <img
            src={imageUrl || "/default-image.jpg"}
            alt="Popup"
            className="rounded-lg shadow-lg w-full h-auto"
            width={500}
            height={500}
          />
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-0 right-0 m-2 text-white bg-purple-300 bg-opacity-50 rounded-full p-1 hover:bg-opacity-75 transition duration-300 ease-in-out"
            aria-label="Close popup"
          >
            ✖️
          </button>
        </div>
      </div>
    )
  );
}
