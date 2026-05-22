import React from 'react'
import logo from '../../assets/img/likelion_w_logo.svg';
const Nav = () => {
  return (
    <div className='Nav_wrap'>
      <img src={logo} alt="" />
      <ul>
        <li>브랜드 스토리</li>
        <li>서비스 소개</li>
        <li>미디어</li>
        <li>채용</li>
      </ul>
    </div>
  )
}

export default Nav
