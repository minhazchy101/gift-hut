"use client"
import { useParams } from 'next/navigation'
import React from 'react'

const ProductDetails = () => {
    const {id} = useParams()
  return (
    <div>ProductDetails</div>
  )
}

export default ProductDetails