"use client";
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Loading from '@/component/Loading';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      axios.get(`/api/product/${id}`)
        .then((response) => setProduct(response.data.product))
        .catch((error) => console.error("Failed to fetch product:", error));
    }
  }, [id]);

  if (!product) {
    return <Loading/>;
  }

  const { name, description, price, image, createdAt } = product;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row gap-10 items-start bg-white shadow-md rounded-lg p-6">
        
        {/* Product Image */}
        <div className="flex-shrink-0 w-full md:w-1/2">
          <Image
            src={image}
            alt={name}
            width={600}
            height={600}
            className="rounded-lg object-cover w-full h-auto"
          />
        </div>

        {/* Product Info */}
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">{name}</h1>
          <p className="text-gray-600 text-sm">
            Added on: {new Date(createdAt).toLocaleDateString()}
          </p>
          <p className="text-gray-700 leading-relaxed">{description}</p>
          <p className="text-2xl font-semibold text-secondary">₹{price}</p>

          <button className="mt-4 px-6 py-2 rounded-md  text-sm text-primary border border-primary hover:bg-primary hover:text-white transition cursor-pointer ">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
