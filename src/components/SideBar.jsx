import React from 'react'
import { IoIosClose } from 'react-icons/io'
import { signOutUser } from '../features/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function SideBar({SideBar,setSideBar}) {
  const {currentUser} = useSelector((state)=>state.user)
    const dispatch =useDispatch()
    const navigate = useNavigate()
  return (

<div className='fixed top-0 left-0 z-10 bg-gray-50 h-screen w-full p-5'>
    <div>
      <div className='flex justify-between items-center'>
        <p className='text-2xl font-bold'>Menu</p>
        <button><IoIosClose onClick={()=>setSideBar(false)} size={35} /></button>

      </div>
      <hr className='mb-5'/>
      <div className='flex gap-4 flex-col text-lg '>
        

        <Link to = '/' className='flex justify-between'>
            <p>Home</p>
            <ChevronRight/>
        </Link>
        <hr />

        <Link to='/shop' className='flex justify-between'>
            <p >Shop</p>
            <ChevronRight/>
        </Link>
        <hr />
        <Link to='/wishlist' className='flex justify-between'>
            <p>My Wishlist</p>
            <ChevronRight/>
        </Link>
        <hr />
        <Link to='/orders' className='flex justify-between'>
            <p>My Orders</p>
            <ChevronRight/>
        </Link>
        <hr />
        <Link to='/contact' className='flex justify-between'>
            <p>Contact</p>
            <ChevronRight/>
        </Link>
     {
      !currentUser && (
        <div className='flex gap-4 flex-col text-lg'>
           <hr />
        <Link to='/login' className='flex justify-between'>
            <p>Login</p>
            <ChevronRight/>
        </Link>
        <hr />
        <Link to='/register' className='flex justify-between'>
            <p>Sign Up</p>
            <ChevronRight/>
        </Link>

        </div>
      )
     }
      
       
        

        
      </div>


      <hr className='my-5' />
      {/* <p className='text-center w-full text-lg text-gray-500'>log out</p> */}
    {
      currentUser && (
        <div className='flex justify-center mt-30'>
        <button onClick={()=>{
           dispatch(signOutUser())
           navigate('/')
           setSideBar(false)

        }
         
          
        } className='text-gray-500'>log out</button>

      </div>
      )
    }
      <p className='text-center w-full '>@2025 Brasscraft.com || Allr rights received</p>
    </div>


</div>

  )
}
