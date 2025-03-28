import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals } from "./features/cart/cartSlice";
import { useEffect } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ForgotPassword2 from "./pages/ForgotPassword2";
import Wishlist from "./pages/Wishlist";
import Contact from "./pages/Contact";
import AdminOrders from "./pages/AdminOrders";

import PrivateRoute from "./components/PrivateRoute";
import AdminPrivateRoute from "./components/AdminPrivateRoute";
import AddProduct from "./pages/AddProduct";
import OrderStats from "./pages/Stats";
import Products from "./pages/Products";
import Cart2 from "./pages/Cart2";
import CheckOut2 from "./pages/CheckOut2";
import MpesaCharges from "./pages/MpesaCharges";
import Header2 from "./components/Header2";
import Footer2 from "./components/Footer2";
import Header3 from "./components/Header3";
import Hats from "./pages/Hats";
import Dresses from "./pages/Dresses";
import BikiniSets from "./pages/BikiniSets";



export default function App() {
  const {cartItems} = useSelector((store) => store.cart)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);


  // useEffect(()=>{
  //   fetch('https://brasscraft-api.onrender.com/visitor',{
  //     method:'POST',
  //     headers:{
  //       'Content-Type':'Application/json'
  //     },
  //     body:JSON.stringify({pageName:"home"})
  //   })

  // },[])
  return (
    <BrowserRouter>
       <Header3/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/products" element={<Products/>} />
        <Route path="/cart2" element={<Cart2/>} />
        <Route path="/check-out-2" element={<CheckOut2/>} />
        <Route path="/mpesa-charges" element={<MpesaCharges/>} />
        <Route path="/products/hats" element={<Hats/>} />
        <Route path="/products/dresses" element={<Dresses/>} />
        <Route path="/products/bikini-sets" element={<BikiniSets/>} />
        

        




        
        
        
        <Route path = '/login' element = {<Login/>}/>
        <Route path = '/register' element = {<Register/>}/>
        <Route path = '/forgot-password' element = {<ForgotPassword/>}/>
        <Route path = '/forgot-password-2/:token' element = {<ForgotPassword2/>}/>
        <Route path = '/cart' element = {<Cart/>}/>
        <Route path = '/order-stats' element = {<OrderStats/>}/>

       


        
        
        <Route path = '/contact' element = {<Contact/>}/>
        
   


        <Route element={<PrivateRoute />}>
     
        <Route path = 'check-out' element = {<CheckOut/>}/>
        <Route path = '/wishlist' element = {<Wishlist/>}/>
          
        </Route>

        <Route element={<AdminPrivateRoute />}>
        <Route path = '/admin-orders' element = {<AdminOrders/>}/>
        <Route path = '/add-product' element = {<AddProduct/>}/>
        
     
   
          
        </Route>

        
        




        


    
      </Routes>
      <Footer2/>
    </BrowserRouter>
  )
}


