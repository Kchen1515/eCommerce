import React from 'react'
// import heroVideo from "/assets/videos/hero.mp4"

const Hero2 = () => {
  return (
    <div className="hero2">
      <div className="overlay"></div>
      <video autoPlay loop src={"/hero.mp4"}/>
      <div className="hero-slogan hero-words">
        <h2 className="buy-now">SCENTS BY MARIA BUY NOW</h2>
      </div>
    </div>
  )
}

export default Hero2