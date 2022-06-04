import React from 'react'
import search_svg from "../Header/headerAssets/search_black_24dp.svg"
import login_svg from '../Header/headerAssets/login_black_24dp.svg'
import apps_svg from '../Header/headerAssets/apps_black_24dp.svg'
import logo from './headerAssets/omega-logo.png'
import '../Header/header.css'

export default function Header() {
  // const toggleButton = document.getElementsByClassName('toggle-button')[0]
  // const navbarLinks = document.getElementsByClassName('navbar-links')[0]

  // toggleButton.addEventListener('click', () => {
  //   navbarLinks.classList.toggle('active')
  // })
  return (
    <nav>
      <div className='navbar'>
        <img className='brand_logo' src={logo} alt="logo" />
        <a href="#" className="toggle-button">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
        <div className='navbar-links'>
          <ul className='navbar_elements'>
            <li>Live</li>
            <li>Ministries</li>
            <li>Digital Services</li>
            <li>Contact</li>
            <img className='navbar-assets' src={search_svg} alt="search_svg" />
            <img className='navbar-assets' src={login_svg} alt="login_svg" />
            <img className='navbar-assets' src={apps_svg} alt="apps_svg" />
          </ul>
        </div>
      </div>
    </nav>
  )
}
