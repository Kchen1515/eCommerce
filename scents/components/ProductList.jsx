import React from 'react';
import {Product} from './index.js'

const ProductList = ({products}) => {
  return (
    <div className="productlist-ctn">
      <div className="product-ctn">
        <h2>Products</h2>
        {
          products.map((product, i) => {
            return <Product key={i} product={product}/>
          })
        }
      </div>
    </div>
  )
}

export default ProductList;