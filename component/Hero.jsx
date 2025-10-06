import React from 'react'
import Image from 'next/image';
import box from '../assets/box.jpeg';
import Link from 'next/link';

const Hero = () => {
  return (
     <div className="overflow-hidden relative w-full">
      <div
        className="flex transition-transform duration-700 ease-in-out"
       
      >
        
          <div
           
            className="flex flex-col-reverse md:flex-row items-center justify-between bg-white py-8 md:px-14 px-5 mt-6 rounded-xl min-w-full"
          >
            <div className="md:pl-8 mt-10 md:mt-0 md:w-1/2 px-8 md:px-14 py-8">
    
             <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Find the Perfect Gift for Every Moment
        </h1>
        <p className="mt-4 text-base md:text-lg">
          At Gift Hut, we make it easy to discover thoughtful gifts for your loved ones — beautifully packaged and delivered with care.
        </p>
        
              <div className="flex items-center mt-4 md:mt-6 ">
                <Link href="/products" className="md:px-10 px-7 md:py-2.5 py-2 bg-primary rounded-full text-white font-medium cursor-pointer">
                 Explore Gifts
                </Link>
                
              </div>
            </div>
            <div className="flex items-center flex-1 justify-center">
              <Image
                className="md:w-72 w-48"
                src={box}
               alt='box'
              />
            </div>
          </div>
      </div>

    </div>
  )
}

export default Hero