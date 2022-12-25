import React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link'

import { AiOutlineShoppingCart } from "react-icons/ai";
import {Cart} from './index.js'

import {useStateContext} from '../context/StateContext.js'


const Navbar = () => {
  const [isActive, setIsActive] = useState(false)
  const [listIsActive, setListIsActive] = useState(false)
  const toggleHamburger = (e) => {
    e.preventDefault();
    setIsActive(!isActive)
    setListIsActive(!listIsActive)
  }
  const {setShowCart, showCart, totalQty} =  useStateContext();

  return (
    <div className='navbar-container'>
      <nav className="navbar">
        <div className="website-name">
          <Link href="/" className="logo-link">
            <span className="logo-span">SCENTS BY MARIA</span>
          </Link>
        </div>
          <ul className={listIsActive ? "navbar-list list-is-active" : "navbar-list"}>
           <Link href='/'>Home</Link>
           <Link href="#">SHOP</Link>
          </ul>
          <button onClick={() => setShowCart(true)}>
            <AiOutlineShoppingCart />
            <span>{totalQty}</span>
          </button>
        <button className={ isActive ? "hamburger-menu is-active" : "hamburger-menu"} onClick={toggleHamburger}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        { showCart && <Cart /> }
      </nav>
    </div>
  )
}

export default Navbar;