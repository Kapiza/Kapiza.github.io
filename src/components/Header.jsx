import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <header>
        <Link to='/home'> Home </Link>
        <Link to='/about'> About</Link>
        <Link to='/works'> Works</Link>
    </header>
  )
}

export default Header