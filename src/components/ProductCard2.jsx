import React from 'react'
import { FiShoppingBag } from 'react-icons/fi'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../features/cart/cartSlice'

export default function ProductCard2({ product }) {
    const dispatch = useDispatch()
  return (
    <div className="relative group">
      {/* Shopping Bag Icon */}
      <div className="absolute top-5 right-5 bg-white rounded-full p-2 transition-transform ">
        <FiShoppingBag size={20} className='text-[#8a5a44]' onClick={() =>dispatch(addToCart(product))}/>
      </div>

      {/* Product Link */}
      <div>
        <div className="overflow-hidden rounded-lg">
          <img
            src={product.imgSrcs[0]}
            width={300}
            height={300}
            alt={product.name}
            className="w-full aspect-square object-cover "
            // className="w-full aspect-square object-cover transition-transform group-hover:scale-105"
          />
          
        </div>
        <div className="mt-4">
          <h3 className="font-medium text-lg">{product.name}</h3>
          <p className="text-gray-600 mt-1">{product.Description}</p>
          <p className="font-medium text-[#8a5a44] mt-2">Kshs {product.price}</p>
        </div>
      </div>
    </div>
  )
}
