import React from 'react'
import '../../asset/sass/section4.scss';

const section4 = () => {
  return (
    <div className='section4_wrap'>
        <p id='core'>CORE-VALUES</p>
        <p id='ground'>GROUND-RULES</p>
        <div className="circle">
            <div className="circle1">
                <p id='title'>Commitiment</p>
                <p id='content'>정직 : Honesty<br/>존중 : Respect<br/>신뢰 : Trust</p>
            </div>
            <div className="circle2">
                <p id='title'>Challenge</p>
                <div className="content">
                <p id='content_orange'>개척 : Pioneer<br/>집착 : Obsession</p>
                <p id='content'>탁월 : Excellence</p>
                </div>
            </div>
            <div className="circle3">
                <p id='title'>Companionship</p>
                <p id='content'>다양성 : Diversity<br/>배려 : Consideration<br/>소통 : Communication</p>
            </div>
        </div>
    </div>
  )
}

export default section4
