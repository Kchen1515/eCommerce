import React from 'react';
import {createContext, useContext, useState, useEffect} from 'react'
import {toast} from 'react-hot-toast'

const Context = createContext();

export const StateContext = ({children}) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQty, setTotalQty] = useState(0);
  const [qty, setQty] = useState(1);

  const onAdd = (product, quantity) => {
    const productInCart = cartItems.find((item) => {
      return item._id === product._id;
    });

    setTotalPrice((prev) => prev + product.price * quantity);
    setTotalQty((prev) => prev + quantity);

    if(productInCart){
      const updatedCartItems = cartItems.map((item) => {
        if (item._id === product._id){
          return {
            ...item,
            quantity: item.quantity + quantity
          }
        }
      })
      setCartItems(updatedCartItems)
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, {...product}])
    }
    toast.success(`${qty} ${product.name} added to the cart`)
  }

  const increaseQty = () => {
    setQty((prev) => prev + 1)
  }
  const decreaseQty = () => {

    setQty((prev) => {
      if(prev - 1 < 1) return 1;
      return prev - 1})
  }


  return (
    <Context.Provider
    value={{showCart, cartItems, totalPrice, totalQty, qty, increaseQty, decreaseQty,onAdd, setShowCart}}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context)