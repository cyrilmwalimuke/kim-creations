import { Heart, Search, ShoppingBag, User } from 'lucide-react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { signOutUser } from '../features/user/userSlice';

export default function Header({setSideBar}) {
    const { cartItems, total, amount,isInCart} = useSelector((store) => store.cart);
    const {currentUser} =useSelector((store)=>store.user)
    console.log(currentUser)
    const dispatch =useDispatch()
    

  return (
    <div>
        <div className="bg-black text-white py-1 text-center text-xs">Free shipping on all orders over KSHS 5000</div>

{/* Header */}
<header className="border-b">
  <div className="container mx-auto px-4 py-4">
    <div className="flex items-center justify-between">
      {/* Mobile Menu (hidden on desktop) */}
      <div className="lg:hidden" onClick={()=>{setSideBar(true)
        
      }}>
        <button className="text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Logo */}
      <div className="text-center lg:text-left">
        <Link to='/' className="text-2xl font-serif tracking-wider">
          BRASSCRAFT
        </Link>
        <p className="text-xs tracking-widest text-gray-500 hidden sm:block">FINE JEWELRY</p>
      </div>

      {/* Navigation (hidden on mobile) */}
      <nav className="hidden lg:flex space-x-8 text-sm">
        <Link to='/' className="hover:text-gray-600 tracking-wide">
          HOME
        </Link>
        <Link to='/shop' className="hover:text-gray-600 tracking-wide">
          SHOP
        </Link>
        <Link to='/orders' className="hover:text-gray-600 tracking-wide">
           MY ORDERS
        </Link>
        <Link to='/wishlist' className="hover:text-gray-600 tracking-wide">
          MY WISHLIST
        </Link>
        <Link to='/contact' className="hover:text-gray-600 tracking-wide">
          CONTACT
        </Link>
        {
            !currentUser?(
              <div className='flex items-center gap-3'>
                <Link to='/login' className="hover:text-gray-600 tracking-wide">
                LOGIN
              </Link>
              <Link to='/register' className="hover:text-gray-600 tracking-wide">
                SIGN-UP
              </Link>
              </div>
            ):(
              <button onClick={()=>dispatch(signOutUser())} className="hover:text-gray-600 tracking-wide">
                LOGOUT
              </button>
  
            )
        }
        
      </nav>

      {/* Icons */}
      <div className="flex items-center space-x-4">
        <Link to='/shop' className="hidden sm:block">
          <Search className="h-5 w-5" />
        </Link>
        <button className="hidden sm:block">
          <User className="h-5 w-5" />
        </button>
        <Link to='/wishlist'>
          <Heart className="h-5 w-5" />
        </Link>
        <Link to='/cart' className="relative">
          <ShoppingBag className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
            {amount}
          </span>
        </Link>
      </div>
    </div>
  </div>
</header>

      
    </div>
  )
}
