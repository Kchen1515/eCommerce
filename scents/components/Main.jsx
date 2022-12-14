import React from 'react';
import {useEffect} from 'react'
import { Navbar, Hero, ProductList, Footer, Hero2, Products} from './index.js'
import Form from './Form.jsx'
import {useStateContext} from '../context/StateContext.js'

const Main = ({products}) => {
  const {setCartItems, getLocal, cartItems} = useStateContext();
  return (
    <div>
      <Hero2/>
      {/* <Hero/> */}
      <Products/>
      <ProductList products={products} />
      {/* <Form/> */}
    </div>
  )
}

export default Main;