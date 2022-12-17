import React from 'react';


import {urlFor} from '../lib/client'


const Product = ({product}) => {
  const {name} = product
  return (
    <div>
      <span>{name}</span>
      {
        product.image ?  <img src={urlFor(product.image[0])} /> : <p>no image</p>
      }
      <span>testing</span>
    </div>
  )
}

export default Product;