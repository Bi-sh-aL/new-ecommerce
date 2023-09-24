import React from 'react'
import Hero from '../components/hero/Hero'
import Categories from '../components/categories/Categories'
import Product from '../components/products/Product'
import Countdown from '../components/countdown/Countdown'
import Blog from '../components/blog/Blog'
import Instagram from '../components/instagram/Instagram'
import Subscribe from '../components/subscribe/Subscribe'

function Home() {
  return (
    <>
     <Hero/>
     <Categories/>   
     <Product/>
     <Countdown/>
     <Blog/>
     <Instagram/>
     <Subscribe/>
    </>
  )
}

export default Home