import React, { useState } from 'react'
import { CiMenuBurger, CiSearch, CiUser } from "react-icons/ci";
import { BsDoorClosed, BsMinecart } from "react-icons/bs";
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import { IoIosClose } from "react-icons/io";
import { signOutUserSuccess } from '../features/user/userSlice';
import { MdOutlineShoppingBag } from "react-icons/md";
import { X } from 'lucide-react';

export default function Header3() {

  const { cartItems, total, amount,isInCart} = useSelector((store) => store.cart);
  const dispatch = useDispatch()
  const {currentUser} = useSelector((state)=>state.user)
    const pathname  = useLocation().pathname
    const [showSidebar,setShowSidebar] = useState(false)
    const [showAccountTab,setShowAccountTab] = useState(false)
    
  return (
    <nav className='flex justify-between items-center px-8  border-b-[1.2px] border-gray-500'>
        <CiMenuBurger size={25} className='sm:hidden' onClick={()=>{
          setShowSidebar(true)
          setShowAccountTab(false)

        }
          }/>
        <Link to ='/'>
        <img src="/470942907_376864415484331_5164325651420135101_n__1_-removebg-preview.png" alt="" className='h-[80px] w-[100px]'/>
        </Link>
        <div className='hidden sm:flex gap-3'>
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
        <div className='flex items-center gap-3 text-xl '>
            
          
            <CiSearch onClick={()=>{
              setShowAccountTab(true)
              setShowSidebar(false)
              
            }} className='text-2xl'/>
            <Link to='/cart2'>
            <div className='nav-container'>
            <MdOutlineShoppingBag className='text-2xl'/>
            <div className='amount-container'>
              <p className='total-amount'>{amount}</p>
            </div>
          </div>
            </Link>
          
            

            
        </div>

        {showSidebar && 
        (
          <div className="fixed inset-0 z-50 bg-white md:hidden">
          <div className="flex h-16 items-center px-4 gap-2">
            <button variant="ghost" size="icon" onClick={()=>setShowSidebar(false)}>
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </button>
            <Link to="/" className="ml-4 flex items-center" onClick={()=>setShowSidebar(!showSidebar)}>
              <span className="text-xl font-bold text-[#8a5a44]">

                <img className='h-16 w-24 sm:h-24 sm:w-36' src="/470942907_376864415484331_5164325651420135101_n__1_-removebg-preview.png" alt="" />
              </span>
            </Link>
          </div>
          <nav className="container grid gap-6 px-4 py-6 text-lg">
            <Link to="/" className="flex items-center border-b border-gray-100 pb-3" onClick={()=>setShowSidebar(false)}>
              Home
            </Link>
            <Link
              to="/products/hats"
              className="flex items-center border-b border-gray-100 pb-3"
              onClick={()=>setShowSidebar(false)}
            >
              Hats
            </Link>
            <Link
              to="/products/bikini-sets"
              className="flex items-center border-b border-gray-100 pb-3"
              onClick={()=>setShowSidebar(false)}
            >
              Bikini Sets
            </Link>
            <Link
              to="/products/dresses"
              className="flex items-center border-b border-gray-100 pb-3"
              onClick={()=>setShowSidebar(false)}
            >
              Dresses
            </Link>
            <Link to="/about" className="flex items-center border-b border-gray-100 pb-3" onClick={()=>setShowSidebar(false)}>
              About
            </Link>
            <Link to="/contact" className="flex items-center border-b border-gray-100 pb-3" onClick={()=>setShowSidebar(false)}>
              Contact
            </Link>
          </nav>
        </div>
        )
        }

          {
            showAccountTab &&  <div className='fixed inset-0 bg-white z-10 '>
              <div className='flex justify-between'>
              <p>{currentUser?currentUser.email:""}</p>
              <IoIosClose size={30} onClick={()=>setShowAccountTab(false)}/>


              </div>
           
           
            <p>page in progress</p>
        
            <button onClick={()=>dispatch(signOutUserSuccess())} className=' p-3 mt-3'>
              sign out
              
              

            </button>
              
          </div>
          }

         

    </nav>
  )
}
