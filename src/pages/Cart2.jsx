import {Link} from 'react-router-dom'

import { Trash2, ShoppingBag } from "lucide-react"
import { products } from '../products'
import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase, removeItem } from '../features/cart/cartSlice'
import { BiChevronRight } from 'react-icons/bi'

export default function Cart2() {
  const {cartItems,total,amount} = useSelector((store) => store.cart)
  const dispatch = useDispatch()
  
  console.log(total)
  

  
  const shipping = 500
  const finalTotal = total + shipping
  if (cartItems.length === 0) {
    return (
      <div className="container px-4 md:px-6 py-12">
        <h1 className="text-3xl font-bold tracking-tight text-[#8a5a44] mb-8">Your Cart</h1>
        <p className="text-center text-gray-600">Your cart is currently empty.</p>
        <div className="flex justify-center mt-12">
        <Link to="/products">
          <button  className="border-[#8a5a44] border-[1.3px] text-[#8a5a44] hover:bg-[#8a5a44] hover:text-white flex items-center p-1  bg-white rounded-md">
            Continue Shopping
            <BiChevronRight className="ml-2 h-4 w-4" />
          </button>
        </Link>
      </div>
      </div>
    )
  }


  return (
    <div className="container px-4 md:px-6 py-12">
      <h1 className="text-3xl font-bold tracking-tight text-[#8a5a44] mb-8">Your Cart</h1>

      {products.length > 0 ? (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="border rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-4">Product</th>
                    <th className="text-center p-4 hidden sm:table-cell">Quantity</th>
                    <th className="text-right p-4">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.name} className="border-t">
                      <td className="p-4">
                        <div className="flex gap-4">
                          <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                            <img
                              src={item.imgSrcs[0]}
                              width={80}
                              height={80}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-medium">{item.name}</h3>
                            <p className="text-sm text-gray-600">Color: {item.color}</p>
                            <p className="text-sm text-gray-600">Size: {item.size}</p>
                            <p className="text-sm font-medium mt-1">{item.price}</p>
                            <div className="flex items-center gap-2 mt-2 sm:hidden">
                              <button onClick={()=>dispatch(decrease(item))} variant="outline" size="icon" className="h-8 w-8">
                                <span className="sr-only">Decrease</span>
                                <span>-</span>
                              </button>
                              
                              <span className="w-8 text-center">{item.amount}</span>
                              <button onClick={()=>dispatch(increase(item))} variant="outline" size="icon" className="h-8 w-8">
                                <span  className="sr-only">Increase</span>
                                <span>+</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-center hidden sm:table-cell">
                        <div className="flex items-center justify-center gap-2">
                          <button onClick={()=>dispatch(decrease(item))} variant="outline" size="icon" className="h-8 w-8">
                            <span className="sr-only">Decrease</span>
                            <span>-</span>
                          </button>
                          <span className="w-8 text-center">{item.amount}</span>
                          <button  onClick={()=>dispatch(increase(item))}  variant="outline" size="icon" className="h-8 w-8">
                            <span className="sr-only">Increase</span>
                            <span>+</span>
                          </button>
                        </div>
                      </td>
                      <td className="p-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <span>{item.price}</span>
                          <button variant="ghost" size="icon" className="h-8 w-8 text-gray-500">
                            <Trash2 onClick={()=>dispatch(removeItem(item.id))} className="h-4 w-4" />
                            <span className="sr-only">Remove</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-between mt-6">
              <Link to="/products">
                <button className='p-2 border-[1.3px] border-[#8a5a44] rounded-md'>Continue Shopping</button>
              </Link>
              
            </div>
          </div>
          <div>
            <div className="border rounded-lg p-6">
              <h2 className="text-lg font-bold mb-4">Order Summary</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>kshs {total}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span>{shipping}</span>
                </div>
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>kshs {finalTotal}</span>
                  </div>
                </div>
              </div>
              <Link to='/check-out-2'>
              <button className="w-full mt-6 text-white rounded-md py-1 bg-[#8a5a44] hover:bg-[#6d4535]">Proceed to Checkout</button>
              </Link>
             
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <ShoppingBag className="h-12 w-12 mx-auto text-gray-400" />
          <h2 className="text-xl font-medium mt-4">Your cart is empty</h2>
          <p className="text-gray-600 mt-2">Looks like you haven't added any items to your cart yet.</p>
          <Link href="/products">
            <button className="mt-6 bg-[#8a5a44] hover:bg-[#6d4535]">Start Shopping</button>
          </Link>
        </div>
      )}
    </div>
  )
}

