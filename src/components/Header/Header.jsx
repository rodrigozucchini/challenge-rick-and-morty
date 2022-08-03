import React from 'react'
import './Header.css'
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <div className="container">
        <h1>
        Rick and Morty characters
        </h1>
        <img className="image-logo" src={logo} />
    </div>
  )
}

export default Header
