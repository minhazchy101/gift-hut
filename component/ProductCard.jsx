"use client"
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


const ProductCard = ({product}) => {
     const router = useRouter();
    console.log(product)
    const {_id , image , name , price , description} = product ;
  return (
     <div className='bg-gray-500/10 '
            onClick={() => { router.push(`product/${_id}`); scrollTo(0, 0) }}
        >
            <div className="cursor-pointer group relative  rounded-lg w-full h-72 flex items-center justify-center">
                <Image
                   src={image} alt="img"
                    className="group-hover:scale-105 transition object-cover w-4/5 h-4/5 md:w-full md:h-full"
                    width={600}
                    height={800}
                />
               
            </div>

            <p className="md:text-base font-medium pt-2 w-full truncate">{name}</p>
            
            <div className="flex items-center gap-2">
                <p className="text-xs">{price}</p>
               
            </div>

            <div className="text-right w-full mt-1">
                <button className=" max-sm:hidden px-4 py-1.5 text-gray-500 border border-gray-500/20 rounded-full text-xs hover:bg-slate-50 transition cursor-pointer">
                 <Link href={`product/${_id}`}>
                 Details
                 </Link>  
                </button>
            </div>
        </div>
  )
}

export default ProductCard