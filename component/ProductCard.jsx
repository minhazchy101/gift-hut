import React from 'react'
import Image from 'next/image';
import box from '../assets/box.jpeg';

const ProductCard = () => {
  return (
     <div
            // onClick={() => { router.push('/product/' + product._id); scrollTo(0, 0) }}
            className="flex flex-col items-start gap-0.5 max-w-[200px] w-full cursor-pointer"
        >
            <div className="cursor-pointer group relative bg-gray-500/10 rounded-lg w-full h-52 flex items-center justify-center">
                <Image
                    src={box}
                    alt=''
                    className="group-hover:scale-105 transition object-cover w-4/5 h-4/5 md:w-full md:h-full"
                    width={800}
                    height={800}
                />
               
            </div>

            <p className="md:text-base font-medium pt-2 w-full truncate">Name</p>
            
            <div className="flex items-center gap-2">
                <p className="text-xs">4.5</p>
               
            </div>

            <div className="text-right w-full mt-1">
                <button className=" max-sm:hidden px-4 py-1.5 text-gray-500 border border-gray-500/20 rounded-full text-xs hover:bg-slate-50 transition cursor-pointer">
                   Details
                </button>
            </div>
        </div>
  )
}

export default ProductCard