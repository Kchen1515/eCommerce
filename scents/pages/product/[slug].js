import React from 'react';
import {useState} from 'react';

import { client, urlFor } from '../../lib/client';
import {Product} from '../../components/index.js'
import {useStateContext} from '../../context/StateContext.js'

const ProductDetails = ({product, simProducts}) => {

  const {image, name, details, price} = product;
  const [index, setIndex] = useState(0)

  const {increaseQty, decreaseQty, qty, onAdd} = useStateContext();

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src={urlFor(image && image[index])}/>
          </div>
          <div className="extra-imgs-ctn">
            {
              image?.map((img,i) => {
                return <img src={urlFor(img)} key={i} onMouseEnter={() => setIndex(i)}/>
              })
            }
          </div>
          <div>
            {name}
            <h4>Details:</h4>
            <p>{details}</p>
            <p>${price}</p>
          </div>
          <div>
            <button onClick={decreaseQty}>-</button>
            <span>{qty}</span>
            <button onClick={increaseQty}>+</button>
          </div>
          <div>
            <button onClick={() => onAdd(product,qty)}> Add to Cart</button>
            <button> Buy now</button>
          </div>
        </div>
      </div>
      <div className="similar-ctn">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="may-also-like track">
            {
              simProducts?.map((product, i) => {
                return <Product key={i} product={product} />
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}
export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }`
  const products = await client.fetch(query);
  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current
    }
  }));
  return {
      paths, //indicates that no page needs be created at build time
      fallback: 'blocking' //indicates the type of fallback
  }
}

export const getStaticProps = async ({params: {slug}}) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`
  const simQuery = `*[_type == "product"]`

  const product = await client.fetch(query)
  const simProducts = await client.fetch(simQuery)

  return {
    props: {product, simProducts}
  }
}

export default ProductDetails