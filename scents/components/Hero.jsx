import React from 'react';
import Image from 'next/image'
import heroCandle from '../assets/imgs/heroCandle.png'
import candle from '../assets/imgs/candle.png'


import Link from 'next/link'


const Hero = () => {
  return (
    <div className='hero-section'>
     <div className='hero-container'>
      <div className="hero-container-details">
        <div className="hero-slogan-container">
          <span className="hero-slogan"> Specialty candles made just for you! Bubble candle starter kit.</span>
        </div>
        <Link href='#'>
          <button className="hero-shop-btn"> Shop Now</button>
        </Link>
      </div>
      <Image src={candle} alt="white candle" className="hero-image"></Image>
     </div>
    </div>
  )
}

export default Hero;