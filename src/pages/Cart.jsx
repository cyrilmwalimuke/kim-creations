import { Facebook, Heart, Instagram, Mail, Search, ShoppingBag, Twitter, User } from 'lucide-react'
import React, { useState } from 'react'
import { FiMinus } from 'react-icons/fi'
import { IoIosAdd, IoIosClose } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { removeItem } from '../features/cart/cartSlice'
import SideBar from '../components/sideBar'
import Footer from '../components/Footer'
import Header from '../components/Header'


export default function Cart() {
    const { cartItems, total, amount,isInCart} = useSelector((store) => store.cart);
    console.log(cartItems)
    const [sidebar,setSideBar] = useState(false)
    const {currentUser} = useSelector((state)=>state.user)

    const dispatch = useDispatch()


    if(cartItems<1){
      return(<>
      <Header setSideBar={setSideBar}/>
        < div className='h-screen flex flex-col justify-center items-center gap-16 px-10'>
          <h1 className='font-bold text-3xl sm:text-6xl'>Your Cart Is Empty</h1>
          <Link to='/shop' className='text-blue-400 underline'>continue shopping</Link>
        </div>
        <Footer variant = 'bg-slate-100' />
        </>
      )
    }
  return (
<div>
      <Header setSideBar={setSideBar}/>

      <div className='px-[20px] sm:px-[100px]'>
    <h1 className='text-3xl my-7'>Your Cart</h1>
    <div className='hidden sm:flex justify-between text-sm text-gray-500 py-3 '>
        <p>PRODUCT</p>
        <p>QUANTITY</p>
        <p>TOTAL</p>
    </div>
    <hr className='mb-5'/>
    <div className='flex flex-col gap-7'>
    {cartItems.map((item)=>{
      return(
        <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center w-full text-sm'>
          <div className='flex  flex-1 text-xs text-gray-700 gap-5 items-center'>
            <img src={item.img} alt="" className='h-[100px] w-[100px] rounded-lg' />
            <div>
              <p>{item.name}</p>
              <p>kshs {item.price}</p>
            
            </div>


          </div>
          <div className='flex items-center p-3 flex-1 justify-center gap-5 md:order:last '>
          
          <div className='border-black border-[1.5px] rounded-md'>
          <IoIosAdd 
            // onClick={() => {
            //   dispatch(increase(item));
            // }}

            size={20}/>

          </div>
          <p className='amount text-sm'>{item.amount}</p>

          <div className='border-[1.5px] border-black rounded-md'>
          <FiMinus 
        //   onClick={() => {
        //     if (item.amount === 1) {
        //       dispatch(removeItem(item.id));
        //       return;
        //     }
        //     dispatch(decrease(item));
        //   }}

            size={20}/>

          </div>
          

          <IoIosClose size={25} onClick={()=>{
            dispatch(removeItem(item.id))
          }}/>
            

          </div>
          <div className='flex-1 flex justify-end'>
            <p className=''>kshs {item.price*item.amount}</p>

          </div>

        </div>
      )
    })}

    </div>

    
    
    {/* <div className="flex flex-col md:flex-row">
      <div className="flex-1 bg-blue-500 p-4">Item 1</div>
      <div className="flex-1 bg-red-500 p-4 md:order-last">Item 2</div>
      <div className="flex-1 bg-green-500 p-4">Item 3</div>
    </div> */}

    <div className='flex flex-col items-end gap-3 mb-7 mt-7'>
      <p>Estimated Total ksh 5000</p>
      {/* {total} */}
      <p className='text-xs text-gray-400'>Taxes, discounts and shipping costs calculated at checkout</p>
     
    {
      currentUser?( <Link to='/check-out' className='bg-black py-2 px-10 sm:px-[100px] text-white text-sm'>
        CHECKOUT
        </Link>):(
           <Link to='/check-out' className='bg-black py-2 px-10 sm:px-[100px] text-white text-sm'>
           LOGIN TO CHECKOUT
           </Link>
        )
    }

    </div>
 
    </div>
    <Footer variant = 'bg-slate-100' />









     
      {
        sidebar && <SideBar setSideBar={setSideBar}/>
      }
</div>

  )
}
