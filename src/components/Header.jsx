import React, { useRef } from 'react'
import { Link } from 'react-router'

const Header = () => {

  const navNativeRef = useRef(null)
  
  const showMenu = () => {
    navNativeRef.current.classList.toggle("show")
  }

  return (
    <header>
        <div className="header_container">
            <a className="header_title" href="index.html">Дмитрий Сергеев | Портфолио</a>
            <nav id="nav" className="nav">
                <Link to='/home'> Home </Link>
                <Link to='/about'> About</Link>
                <Link to='/works'> Works</Link>
            </nav>
            <svg onClick={showMenu} className="menu" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>            
        </div>
        <nav id="navNative" className="nav_native" ref={navNativeRef} >
            <Link to='/home'> Home </Link>
            <Link to='/about'> About</Link>
            <Link to='/works'> Works</Link>
        </nav>
    </header>
  )
}

export default Header


// <header>
    // <Link to='/home'> Home </Link>
    // <Link to='/about'> About</Link>
    // <Link to='/works'> Works</Link>
// </header>