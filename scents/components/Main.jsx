import React from 'react';

import { Navbar, Hero, ProductList} from './index.js'

const Main = ({products}) => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <ProductList products={products} />
    </div>
  )
}

export default Main;