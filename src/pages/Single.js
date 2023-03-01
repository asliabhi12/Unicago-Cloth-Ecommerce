import React from 'react'
import Navbar from '../components/Header'
import ShopHeader from '../components/ShopHeader'
import Product from '../components/Product'
// import Products2 from '../components/Products2'
import Footer from '../components/Footer'
import SingleProduct from '../components/SingleProduct'

import Newsletter from '../components/Newsletter'

function Single() {
    return (
          <>
          <Navbar/>
          <SingleProduct/>
          {/* <ShopHeader/> */}
          <Product/>
          <Newsletter/>
          <Footer/>
          </>
        
  
          
      
    )
  }
  
  export default Single