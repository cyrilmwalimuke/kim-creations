import { ShoppingBag } from 'lucide-react'

import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";
import { images } from '../products';



export default function Banner2({ autoPlay = true, interval = 5000 }) {

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Auto-play effect
  useEffect(() => {
    if (!autoPlay) return;

    const slideInterval = setInterval(nextSlide, interval);
    return () => clearInterval(slideInterval);
  }, [currentIndex, autoPlay, interval]);


  return (

  <div className="py-12 md:py-24 lg:py-32 bg-[#f9f4ef]">
  <div className="container px-4 md:px-6">
    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-[#8a5a44]">
          Handcrafted Yarn Creations
        </h1>
        <p className="max-w-[600px] text-gray-600 md:text-xl">
          Discover our beautiful collection of handmade yarn hats, dresses, and bikini sets. Each piece is crafted
          with love and attention to detail.
        </p>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <Link to = "/products">
            <button className="bg-[#8a5a44] hover:bg-[#6d4535] text-white flex gap-1 items-center p-1 sm:p-2 rounde-md sm:rounded-lg">
              Shop Collection
              <ShoppingBag className="ml-2 h-4 w-4" />
            </button>
          </Link>
        </div>
      </div>
      <img
        src={images[currentIndex]}
    
        width={600}
        height={900}
        alt="Handcrafted yarn products"
        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
      />
    </div>
  </div>
</div>


  )
}
