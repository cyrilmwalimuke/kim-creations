import React from 'react'
import Header2 from '../components/Header2'
import {Link} from 'react-router-dom'
import { ChevronRight, ShoppingBag } from 'lucide-react'
import Banner2 from '../components/Banner2'
import Categories2 from '../components/Categories2'
import Featured2 from '../components/Featured2'
import Testimonials2 from '../components/Testimonials2'
import Newsletter2 from '../components/Newsletter2'
import Footer2 from '../components/Footer2'

export default function Home() {
  return (
    <div>
   
      <Banner2/>
      <Categories2/>
      <Featured2/>
      <Testimonials2/>
      <Newsletter2/>
    
      
      
    </div>
  )
}
