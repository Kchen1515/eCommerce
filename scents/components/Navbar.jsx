import React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link'
import Image from 'next/image'

import { AiOutlineShoppingCart } from "react-icons/ai";
import {TbCandle} from 'react-icons/tb'
import {Cart} from './index.js'
import Logo6 from '../assets/imgs/logo6.png'
import Logo7 from '../assets/imgs/logo7.png'

import {useStateContext} from '../context/StateContext.js'


const Navbar = () => {
  const [navBar, setNavbar] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [listIsActive, setListIsActive] = useState(false)
  const toggleHamburger = (e) => {
    e.preventDefault();
    setIsActive(!isActive)
    setListIsActive(!listIsActive)
  }
  const {setShowCart, showCart, totalQty} =  useStateContext();
  const changeBackground = () => {
    console.log(window.scrollY)
    if(window.scrollY >= 10) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  useEffect(() => {
    changeBackground();
    window.addEventListener('scroll', changeBackground)
  })
  return (
    <div className={navBar? "navbar-container nav-bg" : "navbar-container" }>
      <nav className="navbar">
        <div className="website-name">
          <Link href="/" className="logo-link">
            <div className="image-wrapper">

              <Image src={navBar? Logo7 : Logo6} alt="logo for website" className="logo-image"/>
            </div>
          </Link>
        </div>
          <ul className={listIsActive ? "navbar-list list-is-active" : "navbar-list"}>
           <Link className={navBar? "logo-link-bg" : "logo-link" } href='/'>HOME</Link>
           <Link className={navBar? "logo-link-bg" : "logo-link" } href="#">SHOP</Link>
          </ul>
          <button onClick={() => setShowCart(true)} className="shoppingCart">
            {/* <AiOutlineShoppingCart size={30} color={navBar ? "black" : "white"} /> */}
            <TbCandle size={80} color={navBar ? "black" : "white"} />
            <span className="qty-span">{totalQty}</span>
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