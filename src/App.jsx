import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals } from "./features/cart/cartSlice";
import { useEffect } from "react";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Cart2 from "./pages/Cart2";
import CheckOut2 from "./pages/CheckOut2";
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

        <Route path="/products" element={<Products/>} />
        <Route path="/cart2" element={<Cart2/>} />
        <Route path="/check-out-2" element={<CheckOut2/>} />
    
        <Route path="/products/hats" element={<Hats/>} />
        <Route path="/products/dresses" element={<Dresses/>} />
        <Route path="/products/bikini-sets" element={<BikiniSets/>} />
        
        <Route path = '/contact' element = {<Contact/>}/>
    
      </Routes>
      <Footer2/>
    </BrowserRouter>
  )
}


