"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Title from '@/component/Title';
import ProductCard from '@/component/ProductCard';


const Products = () => {
    const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/fetch-products")
      .then((response) => setProducts(response.data.products));
  }, []);
  
  return (
     <div className="flex flex-col items-center p-14 bg-light rounded-xl">
      <Title title="All Products"/>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 flex-col items-center gap-16 mt-6 pb-14 w-full">
       
       {products.map((product, index) => (
  <ProductCard key={index} product={product} />
))}
      </div>
      
    </div>




  )
}

export default Products