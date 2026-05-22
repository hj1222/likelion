import React from 'react'
import '../assets/sass/footer.scss';
import logo from '../assets/img/footer_logo.png';
import footerimg from '../assets/img/footerimg.png';

const Footer = () => {
  return (
    <div className='footer_wrap'>
      <img className='logo' src={logo} alt="" />
      <img className='img' src={footerimg} alt="" />
    </div>
  )
}

export default Footer
