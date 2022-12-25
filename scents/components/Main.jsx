import React from 'react';

import { Navbar, Hero, ProductList, Footer} from './index.js'
import Form from './Form.jsx'
const Main = ({products}) => {
  return (
    <div>
      <Hero/>
      <ProductList products={products} />
      <Form/>
    </div>
  )
}

export default Main;