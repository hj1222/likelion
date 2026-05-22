import React from 'react'
import logo from '../assets/img/logo.png';
import menu1 from '../assets/img/menu1.png';
import menu2 from '../assets/img/menu2.png';
import menu3 from '../assets/img/menu3.png';
import menu4 from '../assets/img/menu4.png';
import '../assets/sass/nav.scss';

const Nav = () => {
  return (
    <div className='nav_wrap'>
      <div id='header'>
        <img className="logo" src={logo} alt="" />
      </div>
      <div id='header'>
        <div className="list">
          <li>WOMEN</li>
          <li>MEN</li>
          <li>KIDS</li>
          <div className="border"></div>
          <li>TENNIS</li>
          <li>BRAND</li>
        </div>
      </div>
      <div id='header'>
        <div className="menu">
          <img id='menu' src={menu1} alt="" />
          <img id='menu' src={menu2} alt="" />
          <img id='menu' src={menu3} alt="" />
          <img id='menu' src={menu4} alt="" />
        </div>
      </div>
      
    </div>

  )
}

export default Nav
