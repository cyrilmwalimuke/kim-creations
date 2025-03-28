import { ChevronRight } from 'lucide-react'
import React from 'react'
import {Link} from 'react-router-dom'

export default function Categories2() {
  return (
    <section className="w-full py-12 md:py-24 bg-white">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#8a5a44]">
            Our Collections
          </h2>
          <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Browse our handcrafted yarn products by category
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {/* Hats Category */}
        <Link to="/products/hats" className="group relative overflow-hidden rounded-lg">
          <video
            src="/Ruffle Hat-2.mp4"
            width={400}
            height={400}
            alt="Yarn Hats"
            className="w-full h-[300px] object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
            <div>
              <h3 className="text-xl font-bold text-white">Yarn Hats</h3>
              <p className="text-white/80 mt-1">Cozy and stylish handmade hats</p>
              <span className="flex items-center text-white mt-2">
                Shop Now <ChevronRight className="h-4 w-4 ml-1" />
              </span>
            </div>
          </div>
        </Link>

        {/* Bikini Sets Category */}
        <Link to="/products/bikini-sets" className="group relative overflow-hidden rounded-lg">
          <img
            src="/Orange Bikini Set (4).jpg"
            width={400}
            height={400}
            alt="Yarn Bikini Sets"
            className="w-full h-[300px] object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
            <div>
              <h3 className="text-xl font-bold text-white">Yarn Bikini Sets</h3>
              <p className="text-white/80 mt-1">Unique and beautiful handcrafted bikinis</p>
              <span className="flex items-center text-white mt-2">
                Shop Now <ChevronRight className="h-4 w-4 ml-1" />
              </span>
            </div>
          </div>
        </Link>

        {/* Dresses Category */}
        <Link to="/products/dresses" className="group relative overflow-hidden rounded-lg">
          <img
            src="/Ruffle Dress (6).jpg"
            width={400}
            height={400}
            alt="Yarn Dresses"
            className="w-full h-[300px] object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
            <div>
              <h3 className="text-xl font-bold text-white">Yarn Dresses</h3>
              <p className="text-white/80 mt-1">Elegant and comfortable yarn dresses</p>
              <span className="flex items-center text-white mt-2">
                Shop Now <ChevronRight className="h-4 w-4 ml-1" />
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  </section>
  )
}
