import React from 'react'
import "../Component/CSS/Headder.css"
const Header = () => {
  return (
    <header className='headerContainer'>
        <div className='headerHolder'>
            <div className='glovoLogo'>
                <img src="/logo.svg" alt="logo" />
            </div>

            <div className='loginHolder'>
                <span>
                  <button>
                    <img src="/user.svg" alt="" className='logoImg' /> Login
                  </button>
                </span>
            </div>
 
        </div>
    </header>
  )
}

export default Header
