import React, { useEffect, useRef, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {Search,User,Heart,ShoppingBag, ShoppingBagIcon, Filter, Mail, Instagram, Facebook, Twitter } from 'lucide-react'
import { IoIosClose, IoIosList, IoIosSearch, IoMdGrid } from 'react-icons/io'
import { ProductCard } from '../components/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import { signOutUser } from '../features/user/userSlice';
import SideBar from '../components/sideBar';
import Footer from '../components/Footer';

const products  = [
  {
      name:"adjustable spike ring",
      img:"/adjustable spike ring.jpg",
      price:450,
      category:"rings",
      amount:1,
      id:1

  },

  {
      name:"africa inspired adjustable ring",
      img:"/africa inspired adjustable ring.jpg",
      price:450,
      category:"rings",
      amount:1,
      id:2

  },
  {
      name:"half-moon shaped earrings",
      img:"/half-moon shaped earrings.jpg",
      price:399,
      category:"earrings",
      amount:1,
      id:3

  },
  {
      name:"luna ring",
      img:"/luna ring.jpg",
      price:499,
      category:"rings",
      amount:1,
      id:4

  },
  {
      name:"spring adjustable ring",
      img:"/spring adjustable ring.jpg",
      price:450,
      category:"rings",
      amount:1,
      id:5

  },
  {
      name:"hammered brass triangle earrings",
      img:"/hammered brass triangle earrings.jpg",
      price:399,
      category:"earrings",
      amount:1,
      id:6

  },


]

export default function Shop() {
    const [selectedValue, setSelectedValue] = useState("featured");
    const { cartItems, total, amount,isInCart} = useSelector((store) => store.cart);
    const [sidebar,setSideBar] = useState(false)
    const sectionRef = useRef()
    const dispatch  = useDispatch()
    const navigate = useNavigate()
    const [searchTerm,setSearchTerm] = useState('')
    const [data,setData] = useState([])

    const handleSubmit = (e)=>{
      e.preventDefault()
      const filteredData = data.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setData(filteredData)
    }

    const scrollToSection = () => {
      sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };


  useEffect(() => {
    const fetchUsers = async () => {
        try {
            const response = await fetch('https://brasscraft-api.onrender.com/get-products'); // Your API endpoint
        
            const dataJson = await response.json();
            setData(dataJson);
        } catch (err) {
            console.log(err.message);
        }
    };
  
    fetchUsers();
  }, []);
  return (
    <div>
      <div className="bg-black text-white py-1 text-center text-xs">Free shipping on all orders over KSHS 5000</div>
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Mobile Menu (hidden on desktop) */}
            <div className="lg:hidden" onClick={()=>setSideBar(true)}>
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
            <div className="text-center lg:text-left hidden sm:block">
              <Link to="/" className="text-2xl font-serif tracking-wider">
                BRASSCRAFTKE
              </Link>
              <p className="text-xs tracking-widest text-gray-500 hidden sm:block">FINE JEWELRY</p>
            </div>

            {/* Navigation (hidden on mobile) */}
            <form onSubmit={handleSubmit}>
              {/* <input type="text" placeholder='What are you looking for?' className='border-[1.2px] border-gary-500 px-1 py-2 rounded-lg w-64 focus:outline-none' /> */}
              <div className='flex items-center border-[1.2px] border-gray-500 p-2 rounded-lg'>
                <input onChange={(e)=>{
                  setSearchTerm(e.target.value)
                }} value={searchTerm} type="text" placeholder='search' className='focus:outline-none'/>
                <button>
                <IoIosSearch size={25}/>

                </button>
                
              </div>
            </form>

            {/* Icons */}
            <div className="flex items-center space-x-4">
             
              <button className="hidden sm:block">
                <User className="h-5 w-5" />
              </button>
              <Link to='/wishlist'>
                <Heart className="h-5 w-5" />
              </Link>
              <Link to = '/cart' className="relative">
                <ShoppingBagIcon className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {amount}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </header>




      <section className="relative h-300px sm:h-[400px] w-full overflow-hidden bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center">
          {/* <div className="absolute inset-0 bg-black/30" /> */}
          <img src="/bracelets2.jpeg" className='absolute inset-0 w-full'  alt="" />

          <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center">
            <h1 className="font-serif text-4xl font-medium tracking-tight text-white sm:text-5xl md:text-6xl">
              Exquisite Jewelry Collection
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/90">
              Discover our handcrafted pieces that blend timeless elegance with contemporary design
            </p>
            <button onClick={()=>scrollToSection()} className="mt-8 bg-white p-1 " size="lg">
              Explore Collection
            </button>
          </div>
        </section>


        <section className="container py-12 md:py-16 px-8">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="font-serif text-3xl font-medium">Shop All Jewelry</h2>
                <p className="text-muted-foreground">Discover our unique collection of handcrafted pieces</p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="flex items-center gap-2">
                  <button variant="outline" size="icon" className="h-8 w-8 border-gray-500 border-[1.2px] flex items-center justify-center rounded-sm">
                    <IoMdGrid className="h-4 w-4" />
                    <span className="sr-only">Grid view</span>
                  </button>
                  <button variant="outline" size="icon" className="h-8 w-8 border-gray-500 border-[1.2px] flex items-center justify-center rounded-sm">
                    <IoIosList className="h-4 w-4" />
                    <span className="sr-only">List view</span>
                  </button>
                  <button variant="outline" size="sm" className="ml-2 flex border-[1.2px] border-gray-500 rounded-sm justify-center items-center py-1 px-2">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter
                  </button>
                </div>
                <select
      value={selectedValue}
      onChange={(e) => setSelectedValue(e.target.value)}
      className="w-full sm:w-[180px] p-1 border rounded"
    >
      <option value="featured">Featured</option>
      <option value="newest">Newest</option>
      <option value="price-asc">Price: Low to High</option>
      <option value="price-desc">Price: High to Low</option>
    </select>
              </div>
            </div>
            <hr className='text-black' ref={sectionRef}/>
            {data.length<1?(<div className='h-[100px] flex items-center justify-center'>
              <p className='text-md'>
              ❌ No products found. Try searching for "Ring" or "Necklace".
              </p>
            </div>):(
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {
                data.map((product)=>{
                  return <ProductCard
                  key={product.name} 
                  imageUrls={product.imageUrls}
                  name={product.name}
                  product = {product}
                  price={product.price}
                  category={product.category}
                  onClick={
                    ()=>dispatch(addToCart(product))
                  }
                  />
                })
              }



              
            </div>
            )}

            {
              data.length<1?null:( <div className="mt-8 flex justify-center">
                <button variant="outline" className="mx-auto border-gray-500 border-[1.2px] p-1 rounded-lg">
                  Load More
                </button>
              </div>)
            }
           
          </div>
        </section>

        <Footer variant = 'bg-slate-100' />

      {
       sidebar && <SideBar SideBar={sidebar} setSideBar={setSideBar}/>
      }





    </div>
  )
}
