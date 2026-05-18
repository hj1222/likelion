import React from 'react'
import '../../asset/sass/footer.scss';
import logo from '../../asset/image/footer_logo.png';
import mail from '../../asset/image/email_icon.png';
import insta from '../../asset/image/icon_instagram 1.png';
import youtube from '../../asset/image/icon_youtube 1.png';
import brunch from '../../asset/image/icon_brunch 1.png';
import down from '../../asset/image/downicon.png';
import send from '../../asset/image/sendicon.png';

const footer = () => {
    return (
        <div className='footer_wrap'>
            <div className="top">
                <div className="left">
                    <img src={logo} alt="" />
                    <p>(주)멋쟁이사자처럼 | 대표이사 나성영<br />
                        서울특별시 종로구 종로3길 17 D타워, 16-17층<br />
                        사업자 번호 : 264-88-01106<br />
                        통신판매업 신고번호 : 2022-서울종로-1534<br />
                        <img src={mail} alt="" /> 문의처 contact@likelion.net</p>
                </div>

                <div className="right">

                    <div className="box1">
                        <p id='title'>FAMILY BRAND</p>
                        <li>TECHIT</li>
                        <li>SYLTARE</li>
                        <li>MODERN LION</li>
                        <li>QUADHASH</li>
                    </div>

                    <div className="box2">
                        <p id='title'>POLICY</p>
                        <li>이용약관</li>
                        <li>개인정보처리방침</li>
                        <li>Nonprofit Report <img src={down} alt="" /></li>
                        <li>국민권익위원회 <img src={send} alt="" /></li>
                    </div>

                    <div className="box3">
                        <p id='title'>RESOURCE</p>
                        <li>로고 가이드라인 <img src={down} alt="" /></li>
                    </div>

                </div>
            </div>
            <div className="bottom">
                <div id='icon'>
                    <img src={insta} alt="" />
                </div>
                <div id='icon'>
                    <img src={youtube} alt="" />
                </div>
                <div id='icon'>
                    <img src={brunch} alt="" />
                </div>
            </div>
        </div>
    )
}

export default footer
