import React from 'react'
import './Header.css'
import brand from "../../assets/logos/brand.png"

const Header = () => {
  return (
    <div className='header_container'>
      <img className='brand' src={brand} alt="logo_image" />
    </div>
  )
}

export default Header
