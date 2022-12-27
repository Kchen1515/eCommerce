import React from 'react';

import {useRef, useEffect} from 'react'
import Link from 'next/link'

import toast from 'react-hot-toast'
import {useStateContext} from '../context/StateContext.js'
import {urlFor} from '../lib/client.js'
import getStripe from '../lib/getStripe.js'

const Cart = () => {
  const cartRef = useRef();
  const {totalPrice, totalQty, setShowCart, cartItems, toogleCartItemQty, remove} = useStateContext();

  const handleCheckOut = async () => {
    const stripe = await getStripe();

    const response = await fetch('/api/stripe', {
      method: "POST",
      headers: {
        "Content-Type": 'application/JSON'
      },
      body: JSON.stringify(cartItems)
    })

    if(response.statusCode === 500 ) return;

    const data = await response.json();
    toast.loading('Redirecting...')
    stripe.redirectToCheckout({sessionId: data.id })
  }


  return (
    <div className='cart-wrapper' ref={cartRef}>
      <div className="cart-ctn">
        <button
          onClick={() => setShowCart(false)}
        >
          <span>Your Cart</span>
          <span>{totalQty} items</span>
        </button>
        {cartItems.length < 1 && (<div>
            <span>Shopping cart empty</span>
            <button  onClick={() => setShowCart(false)}>
              continue shopping
            </button>
          </div>)}
        <div className="cart-product-ctn">
          {cartItems.length >= 1 && cartItems.map((item, i) => {
            return <div className="product" key={i}>
              <img src={urlFor(item?.image[0])}/>
              <p>{item.name}</p>
              <p>${item.price}</p>
              <div>
                <button onClick={() => toogleCartItemQty(item._id, 'dec')} >-</button>
                <span>{item.quantity}</span>
                <button onClick={() => toogleCartItemQty(item._id, 'inc')} >+</button>
              </div>
              <button onClick={() => remove(item)}> Delete item</button>
            </div>
          })}
        </div>
        {cartItems.length >= 1 && (
          <div>
            <h3>Subtotal:</h3>
            <h3>${totalPrice}</h3>
            <button onClick={handleCheckOut}>Pay</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart;