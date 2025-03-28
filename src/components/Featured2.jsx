import { ChevronRight } from 'lucide-react'
import React from 'react'
import { BiChevronRight } from 'react-icons/bi'
import {Link} from 'react-router-dom'
import { products } from '../products'
import ProductCard2 from './ProductCard2'

export default function Featured2() {
  return (
    <section className="w-full py-12 md:py-24 bg-[#f9f4ef]">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#8a5a44]">
            Featured Products
          </h2>
          <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Our most popular handcrafted yarn creations
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
        {
          products.map((product)=>{
            return (
              <ProductCard2 product={product}/>
            )
          })
        }



        

        

      </div>
      <div className="flex justify-center mt-12">
        <Link to="/products">
          <button  className="border-[#8a5a44] border-[1.3px] text-[#8a5a44] hover:bg-[#8a5a44] hover:text-white flex items-center p-1  bg-white rounded-md">
            View All Products
            <BiChevronRight className="ml-2 h-4 w-4" />
          </button>
        </Link>
      </div>
    </div>
  </section>

   
  )
}
