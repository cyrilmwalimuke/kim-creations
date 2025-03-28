import { Facebook, Instagram, Mail, Twitter } from 'lucide-react'
import React, { useEffect } from 'react'
import { MdOutlinePhone } from 'react-icons/md'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

export default function Footer({variant}) {
  const {currentUser} = useSelector((state) => state.user);


  

  return (
    <footer className={`${variant} border-t pt-16 pb-8`}>
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
        <div>
          <h3 className="font-serif text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <div>
              <Link to='/' className="hover:text-black">
                Home
              </Link>
            </div>
            <div>
              <Link to='/shop' className="hover:text-black">
                Shop
              </Link>
            </div>
            <div>
              <Link to='/orders' className="hover:text-black">
                My Orders
              </Link>
            </div>
            <div>
              <Link to='/wishlist' className="hover:text-black">
                My Wishlist
              </Link>
            </div>
            <div>
              <Link to='/contact' className="hover:text-black">
                Contact
              </Link>
            </div>
            

            <div>
  {currentUser?.email === "okumsteve21@gmail.com" || 
   currentUser?.email === "lauraomondi23@gmail.com" || 
   currentUser?.email === "cyrilmwalimuke@gmail.com" ? (
    <Link to='/add-product' className='hover:text-black'>
      <p>Add Product</p>
    </Link>
  ) : null}
</div>

<div>
  {currentUser?.email === "okumsteve21@gmail.com" || 
   currentUser?.email === "lauraomondi23@gmail.com" || 
   currentUser?.email === "cyrilmwalimuke@gmail.com" ? (
    <Link to='/admin-orders' className='hover:text-black'>
      <p>Admin Orders</p>
    </Link>
  ) : null}
</div>



           
          
          </ul>
        </div>
        
        <div>
          <h3 className="font-serif text-lg mb-4">Contact Us</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <div className='flex gap-1 hover:text-black items-center'>
            <MdOutlinePhone />
            <p>+254707267531</p>

            </div>
            <div className='flex gap-1 hover:text-black items-center'>
            <Mail />
            <p>lauraomondi23@gmail.com </p>

            </div>



            
          </div>
        </div>
        <div>
          <h3 className="font-serif text-lg mb-4">Connect</h3>
          <p className="text-sm text-gray-600 mb-4">
            Follow us for exclusive content and updates on new collections.
          </p>
          <div className="flex space-x-4 mb-6">
            <Link to='/' className="text-gray-600 hover:text-black">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link to='/' className="text-gray-600 hover:text-black">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link to='/' className="text-gray-600 hover:text-black">
              <Twitter className="h-5 w-5" />

            </Link>
            <Link to='/' className="text-gray-600 hover:text-black">
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t pt-8 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()} BrassCraftStudio. All rights reserved.</p>
        
      </div>
    </div>
  </footer>
  )
  
}
