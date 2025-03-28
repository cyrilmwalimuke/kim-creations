import { Facebook, Instagram, Mail, Twitter } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer2() {
  return (
    <footer className="bg-[#f9f4ef] border-t">
    <div className="container px-4 md:px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-[#8a5a44]">KimCreations</span>
          </Link>
          <p className="text-gray-600 text-sm">Handcrafted yarn products made with love and attention to detail.</p>
          <div className="flex space-x-4">
            <Link to="#" className="text-gray-600 hover:text-[#8a5a44]">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link to="https://www.instagram.com/kimcr.eations?igsh=dXl1NHQ1bG13eThl" className="text-gray-600 hover:text-[#8a5a44]">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link to="#" className="text-gray-600 hover:text-[#8a5a44]">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
        <div>
          <h3 className="font-medium text-lg mb-4">Shop</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/products/hats" className="text-gray-600 hover:text-[#8a5a44]">
                Hats
              </Link>
            </li>
            <li>
              <Link to="/products/bikini-sets" className="text-gray-600 hover:text-[#8a5a44]">
                Bikini Sets
              </Link>
            </li>
            <li>
              <Link to="/products/dresses" className="text-gray-600 hover:text-[#8a5a44]">
                Dresses
              </Link>
            </li>
            <li>
              <Link to="/products" className="text-gray-600 hover:text-[#8a5a44]">
                All Products
              </Link>
            </li>
          </ul>
        </div>


        <div>
          <h3 className="font-medium text-lg mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className='flex gap-2 text-gray-600 hover:text-[#8a5a44]'>
              <Mail/>
              <p>gracekimathi@gmail.com</p>
            
            </li>
           
          </ul>
        </div>
        <div>
          <h3 className="font-medium text-lg mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="text-gray-600 hover:text-[#8a5a44]">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-600 hover:text-[#8a5a44]">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/blog" className="text-gray-600 hover:text-[#8a5a44]">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/careers" className="text-gray-600 hover:text-[#8a5a44]">
                Careers
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium text-lg mb-4">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/shipping" className="text-gray-600 hover:text-[#8a5a44]">
                Shipping & Returns
              </Link>
            </li>
            <li>
              <Link to="/faq" className="text-gray-600 hover:text-[#8a5a44]">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/terms" className="text-gray-600 hover:text-[#8a5a44]">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="text-gray-600 hover:text-[#8a5a44]">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200 mt-12 pt-6 text-center text-sm text-gray-600">
        <p>&copy; {new Date().getFullYear()} KimCreations. All rights reserved.</p>
      </div>
    </div>
  </footer>
  )
}
