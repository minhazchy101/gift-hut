"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ProductCard = ({ product }) => {
  const router = useRouter();
  const { _id, image, name, price } = product;

  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer p-4"
      onClick={() => {
        router.push(`product/${_id}`);
        scrollTo(0, 0);
      }}
    >
      {/* Image Container */}
      <div className="group relative w-full h-64 mb-4 overflow-hidden rounded-md bg-gray-100">
        {!imgLoaded && (
          <div className=" absolute inset-0 animate-pulse bg-gray-300" />
        )}
        <Image
          src={image}
          alt={name}
          fill
          className={`object-cover group-hover:scale-105 transition-all duration-300${
            imgLoaded ? "scale-100" : "scale-105"
          }`}
          onLoadingComplete={() => setImgLoaded(true)}
        />
      </div>

      {/* Product Info */}
      <h2 className="text-lg font-semibold text-gray-800 truncate">{name}</h2>

      <div className="flex justify-between items-center mt-2">
        <p className="text-secondary font-medium">₹{price}</p>

        <Link
          href={`product/${_id}`}
          onClick={(e) => e.stopPropagation()} // Prevent card click
          className="text-sm text-primary border border-primary px-3 py-1 rounded-full hover:bg-primary hover:text-white transition "
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
