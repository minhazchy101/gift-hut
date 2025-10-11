"use client";
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import axios from 'axios';
import Title from './Title';
import { useRouter } from 'next/navigation';
import Loading from './Loading';

const Products = () => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // loading state

  useEffect(() => {
    axios
      .get("/api/fetch-products")
      .then((response) => setProducts(response.data.products))
      .finally(() => setIsLoading(false)); // stop loading
  }, []);

  return (
    <div className="flex flex-col items-center p-14 bg-light rounded-xl">
      <Title title="Recent Products" />

      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-6 pb-14 w-full">
            {products.slice(0, 8).map((product) => (
              <ProductCard key={product._id || product.id} product={product} />
            ))}
          </div>

          <button
            onClick={() => {
              router.push('/all-products');
              scrollTo(0, 0);
            }}
            className="mt-8 px-8 py-2 rounded-md cursor-pointer text-md text-primary border border-primary hover:bg-primary hover:text-white transition"
          >
            See more
          </button>
        </>
      )}
    </div>
  );
};

export default Products;
