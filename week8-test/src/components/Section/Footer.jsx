import React from 'react'
import logo from '../../assets/img/likelion_logo.svg';
import insta from '../../assets/img/instar.svg';
import youtube from '../../assets/img/youtube.svg';
import branch from '../../assets/img/branch.svg';
import down from '../../assets/img/download.svg';
import share from '../../assets/img/share.svg';
const Footer = () => {
    return (
        <div className='Footer'>
            <div className="left">
                <img src={logo} alt="" />
                <p>(주)멋쟁이사자처럼 | 대표이사 나성영<br />
                    서울특별시 종로구 종로3길 17 D타워, 16-17층<br />
                    사업자 번호 : 264-88-01106<br />
                    통신판매업 신고번호 : 2022-서울종로-1534<br />
                    문의처 contact@likelion.net</p>
                <div>
                    <div>
                        <img className='instar' src={insta} alt="" />
                    </div>
                    <div>
                        <img className='youtube' src={youtube} alt="" />
                    </div>
                    <div>
                        <img className='branch' src={branch} alt="" />
                    </div>
                </div>
            </div>
            <div className="right">
                <div>
                    <h3>FAMILY BRAND</h3>
                    <div>
                        <p>TECHIT<br/>
                        SYLTARE<br/>
                        MODERN LION<br/>
                       QUADHASH</p>
                    </div>
                </div>
                <div>
                    <h3>POLICY</h3>
                    <div>
                        <p>이용약관<br/>
                        개인정보처리방침<br/>
                       Nonprofit Report
                            <img src={down} alt="" /><br/>
                     
                       국민권익위원회
                            <img src={share} alt="" />
                        </p>
                    </div>
                </div>
                <div>
                    <h3>RESOURCE</h3>
                    <div>
                        <p>로고 가이드라인 
                              <img src={down} alt="" />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
