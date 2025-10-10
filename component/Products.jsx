"use client"
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import axios from 'axios';

const Products = () => {
    const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/fetch-products")
      .then((response) => setProducts(response.data.products));
  }, []);
  console.log(products)
  return (
     <div className="flex flex-col items-center pt-14">
      <p className="text-2xl font-medium text-left w-full">Popular products</p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 flex-col items-center gap-16 mt-6 pb-14 w-full">
        {/* <ProductCard/> */}
        {products.map((product, index) => <ProductCard key={index} product={product} />)}
      </div>
      <button
      //  onClick={() => { router.push('/all-products') }}
        className="px-12 py-2.5 border rounded text-gray-500/70 hover:bg-slate-50/90 transition">
        See more
      </button>
    </div>




  )
}

export default Products