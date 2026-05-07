import "../Component/CSS/Header.css"
const Header = () => {
  return (
    <header className='headerContainer'>
        <div className='headerHolder'>
          <div className='glovoLogo'>
            <img src="/logo.svg" alt="logo" />
          </div>
          <button className='loginButton'>
            <img src="/user.svg" alt="" className='logoImg' /> Login
          </button>
        </div>
    </header>
  )
}

export default Header
