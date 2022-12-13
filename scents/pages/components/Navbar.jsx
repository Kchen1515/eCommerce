import React from 'react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false)
  const [listIsActive, setListIsActive] = useState(false)
  const toggleHamburger = (e) => {
    e.preventDefault();
    setIsActive(!isActive)
    setListIsActive(!listIsActive)
  }





  return (
    <div>
      <nav className="navbar">
        <div className="website-name">
          <span>Scents By Maria</span>
        </div>
          <ul className={listIsActive ? "navbar-list list-is-active" : "navbar-list"}>
            <li>
              Home
            </li>
            <li>
              <a>Shop</a>
            </li>
          </ul>
        <button className={ isActive ? "hamburger-menu is-active" : "hamburger-menu"} onClick={toggleHamburger}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </div>
  )
}

export default Navbar;