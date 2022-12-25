import React from 'react';

import Link from 'next/link'
import {urlFor} from '../lib/client'


const Product = ({product}) => {
  const {name, id, price, image, slug} = product
  return (
    <div className="product-card">
      <Link href={`/product/${slug.current}`}>
        <div>

          <span>{name}</span>
          <img className="product-image"src={urlFor(image && image[0])} />
        </div>
      </Link>
      <span>${price}</span>
    </div>
  )
}

export default Product;