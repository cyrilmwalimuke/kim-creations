import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Header2 from '../components/Header2'
import Footer from '../components/Footer'
import Footer2 from '../components/Footer2'
import { ChevronDown } from 'lucide-react'
import { products } from '../products'
import ProductCard2 from '../components/ProductCard2'

export default function BikiniSets() {
    const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const bikiniSets  = products.filter((product) => product.category === "Bikini Sets");
  return (
    <>
  
    <div className="container px-4 md:px-6 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-[#8a5a44]">Bikini Sets</h1>
          <p className="text-gray-600 mt-1">Explore our collection of handcrafted yarn hats.</p>
        </div>
        <div>
     

      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="border rounded px-3 py-2"
      >
        <option value="featured">Featured</option>
        <option value="newest">Newest</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
      </select>
    </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {
          bikiniSets.map(
            (product)=>{
              return (
                <ProductCard2 product={product}/>
        
                
              )
              
            }
          )
        }


       
      </div>

      <div className="flex justify-center mt-12">
        <button variant="outline" className="border-[#8a5a44] text-[#8a5a44] hover:bg-[#8a5a44] hover:text-white p-2 font-semibold bg-white border-[1.3px] rounded-md">
          Load More
        </button>
      </div>
    </div>
    <Footer2/>
    
    </>
    
  )
   
}
