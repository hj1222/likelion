import React from 'react'
import '../../assets/sass/section3.scss';
import img1 from '../../assets/img/section3_1.png';
import img2 from '../../assets/img/section3_2.png';
const Section3 = () => {
  return (
    <div className='section3_wrap'>
        <h2>기획전</h2>
        <div>
            <div className="left">
                <img src={img1} alt="" />
                <h3>FILA CUSTOM STUDIO</h3>
                <div id="border">
                    <p>자세히 보기</p>
                </div>
            </div>

             <div className="right">
                <img src={img2} alt="" />
                <h3>Pertex LIfe</h3>
                <div id="border">
                    <p>자세히 보기</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section3
