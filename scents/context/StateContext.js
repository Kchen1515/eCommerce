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

  let desiredProduct;
  let index;

  const getLocal = () => {
    let cartLocal = JSON.parse(localStorage.getItem('cart')) || '[]'
    setCartItems(cartLocal)
  }


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
      localStorage.setItem("cart", JSON.stringify(updatedCartItems))
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, {...product}])
      localStorage.setItem("cart", JSON.stringify([...cartItems, {...product}]))

    }
    toast.success(`${qty} ${product.name} added to the cart`)
  }

  const remove = (product) => {
    desiredProduct = cartItems.find((item) => {return item._id === product._id});
    let cartSpliced = cartItems.filter((item) => {
      return item._id !== product._id;
    })
    setTotalPrice((prev) => prev - desiredProduct.price * desiredProduct.quantity)
    setTotalQty((prev) =>  prev - desiredProduct.quantity)
    setCartItems(cartSpliced)
  }

  const toogleCartItemQty = (id, value) => {
    desiredProduct = cartItems.find((item) => {
      return item._id === id;
    });
    index = cartItems.findIndex((product) => {
      return product._id === id;
      });
    let cartSpliced = cartItems.filter((item) => {
      return item._id !== id;
    })

    if(value === 'inc'){
      let newCartItems = [...cartSpliced, {...desiredProduct, quantity: desiredProduct.quantity + 1}]
      setCartItems(newCartItems)
      setTotalPrice((prev) => prev + desiredProduct.price)
      setTotalQty((prev) => prev + desiredProduct.quantity)
    } else if (value === 'dec'){
      if(desiredProduct.quantity > 1){
        let newCartItems = [...cartSpliced, {...desiredProduct, quantity: desiredProduct.quantity - 1}]
        setCartItems(newCartItems)
        setTotalPrice((prev) => prev - desiredProduct.price)
        setTotalQty((prev) => prev - desiredProduct.quantity)
      }
    }
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
    value={{showCart, cartItems, totalPrice, totalQty, qty, increaseQty, decreaseQty,onAdd, setShowCart, toogleCartItemQty, remove, getLocal}}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context)