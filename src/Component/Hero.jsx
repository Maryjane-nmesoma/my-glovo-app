import React from 'react'
import "../Component/CSS/Hero.css"

const Hero = () => {
  return (
    <div className='heroContainer'>
      <div className='heroHolder'>
        <div className='heroLogo'>
          <video src="/hero-video.webm" autoPlay loop muted></video>
        </div>
        <div className='inputHolder'>
          <div className='firstinputHolder'>   
            <p className='firstInput'>Food delivery and </p>
            <p>more</p>
            <p className='secondInput'>Goceries, shops, pharmercies, anything</p>
          </div>
          <div className='thirdInput'>
            <input type="text" placeholder="what's your address ? " />
            <span>use current location</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero