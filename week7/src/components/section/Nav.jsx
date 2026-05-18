import React from 'react'
import logo from '../../asset/image/logo.png';
import '../../asset/sass/nav.scss';

const nav = () => {
  return (
    <div className='nav_wrap'>
      
        <div className='logo'>
          <img src={logo} alt=''/>
        </div>
        <div className='menu'>
          <p>브랜드 스토리</p>
          <p>서비스 소개</p>
          <p>미디어</p>
          <p>채용</p>
        </div>
  
    </div>
  )
}

export default nav
