import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { products } from '../products'
import ProductCard2 from '../components/ProductCard2'

export default function Products() {

  const [sortBy, setSortBy] = useState("featured");
  const [renderedProducts,setRenderedProducts] = useState(products)


  const handleTypeChange = (event) =>{
    if(event.target.value === "All"){
      setRenderedProducts(products) 
      return

    } 
    const newProducts = products.filter((item) => item.category === event.target.value)
    setRenderedProducts(newProducts)


    useEffect(() => {
      let sortedProducts = [...products];
  
      if (sortBy === "newest") {
        sortedProducts.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
      } else if (sortBy === "price-low") {
        sortedProducts.sort((a, b) => a.price - b.price);
      } else if (sortBy === "price-high") {
        sortedProducts.sort((a, b) => b.price - a.price);
      }
  
      setRenderedProducts(sortedProducts);
    }, [sortBy]);
  




  }
  return (
    <>
  
    <div className="container px-4 md:px-6 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-[#8a5a44]">All Products</h1>
          <p className="text-gray-600 mt-1">Browse our collection of handcrafted yarn products</p>
        </div>
        <div className="flex gap-4">
      <select
        // value={category}
      // onChange={(e) => setCategory(e.target.value)}
        className="border rounded px-3 py-2"
        onChange = {handleTypeChange}
      >
        <option value="All">All Products</option>
        <option value="Hats">Hats</option>
        <option value="Bikini Sets">Bikini Sets</option>
        <option value="Dresses">Dresses</option>
      </select>

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
          renderedProducts.map(
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
    
    </>
    
  )
   
}
