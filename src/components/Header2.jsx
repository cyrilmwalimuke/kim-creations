import {Link} from 'react-router-dom'
import { useLocation } from "react-router-dom";

import { useState } from "react"
import { ShoppingBag, Menu, X, Search } from "lucide-react"
import { CiMenuBurger, CiSearch } from 'react-icons/ci';
import { LuShoppingBag } from 'react-icons/lu';
// import { usePathname } from "next/navigation"

export default function Header2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen)

  return (
    <header className="sticky top-0 z-50 w-full border-b-[1.3px] bg-white ">
      <div className="flex px-4 md:px-6 items-center">
        
          <button className='md:hidden' onClick={toggleMenu}>
          
            <CiMenuBurger className='h-6 w-6 ' />
          
          </button>
        
  
        <Link className='mx-auto sm:mx-0'>
        <img className='h-16 w-24 sm:h-24 sm:w-36' src="/470942907_376864415484331_5164325651420135101_n__1_-removebg-preview.png" alt="" />
        </Link>
        <div className="hidden md:flex gap-6 text-sm ml-96">
          <Link
            to="/"
            className={`transition-colors hover:text-[#8a5a44] ${
              location.pathname === "/" ? "text-[#8a5a44] font-medium" : "text-gray-600"
            }`}
          >
            Home
          </Link>
          <Link
            to="/products/hats"
            className={`transition-colors hover:text-[#8a5a44] ${
              location.pathname === "/products/hats" ? "text-[#8a5a44] font-medium" : "text-gray-600"
            }`}
          >
            Hats
          </Link>
          <Link
            to="/products/bikini-sets"
            className={`transition-colors hover:text-[#8a5a44] ${
              location.pathname === "/products/bikini-sets" ? "text-[#8a5a44] font-medium" : "text-gray-600"
            }`}
          >
            Bikini Sets
          </Link>
          <Link
            to="/products/dresses"
            className={`transition-colors hover:text-[#8a5a44] ${
              location.pathname === "/products/dresses" ? "text-[#8a5a44] font-medium" : "text-gray-600"
            }`}
          >
            Dresses
          </Link>
          <Link
            to="/about"
            className={`transition-colors hover:text-[#8a5a44] ${
              location.pathname === "/about" ? "text-[#8a5a44] font-medium" : "text-gray-600"
            }`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`transition-colors hover:text-[#8a5a44] ${
              location.pathname === "/contact" ? "text-[#8a5a44] font-medium" : "text-gray-600"
            }`}
          >
            Contact
          </Link>
        </div>
        <div className="ml-auto flex items-center gap-2  sm:gap-4">
          <button onClick={toggleSearch}>
            <Search />
            <span className="sr-only">Search</span>
          </button>
          <Link to="/cart2">
            <button>
              <ShoppingBag />
              <span className="sr-only">Cart</span>
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white md:hidden">
          <div className="flex h-16 items-center px-4 gap-2">
            <button variant="ghost" size="icon" onClick={toggleMenu}>
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </button>
            <Link to="/" className="ml-4 flex items-center" onClick={toggleMenu}>
              <span className="text-xl font-bold text-[#8a5a44]">KimCreations</span>
            </Link>
          </div>
          <nav className="container grid gap-6 px-4 py-6 text-lg">
            <Link to="/" className="flex items-center border-b border-gray-100 pb-3" onClick={toggleMenu}>
              Home
            </Link>
            <Link
              to="/products/hats"
              className="flex items-center border-b border-gray-100 pb-3"
              onClick={toggleMenu}
            >
              Hats
            </Link>
            <Link
              to="/products/bikini-sets"
              className="flex items-center border-b border-gray-100 pb-3"
              onClick={toggleMenu}
            >
              Bikini Sets
            </Link>
            <Link
              to="/products/dresses"
              className="flex items-center border-b border-gray-100 pb-3"
              onClick={toggleMenu}
            >
              Dresses
            </Link>
            <Link to="/about" className="flex items-center border-b border-gray-100 pb-3" onClick={toggleMenu}>
              About
            </Link>
            <Link to="/contact" className="flex items-center border-b border-gray-100 pb-3" onClick={toggleMenu}>
              Contact
            </Link>
          </nav>
        </div>
      )}

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="absolute inset-x-0 top-16 z-50 bg-white border-b">
          <div className="container py-4 px-4 md:px-6">
            <div className="flex items-center gap-2">
              <input placeholder="Search for products..." className="flex-1 p-2 focus:outline-none border-gray-500 border-[1.2px] rounded-lg" autoFocus />
              <button className="bg-[#8a5a44] hover:bg-[#6d4535] p-2 text-white rounded-lg">Search</button>
              <button variant="ghost" size="icon" onClick={toggleSearch}>
                <X className="h-5 w-5" />
                <span className="sr-only">Close search</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
   
  )
}

