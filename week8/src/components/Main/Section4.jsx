import React from 'react'
import '../../assets/sass/section4.scss';
import img1 from '../../assets/img/sc4_img1.png';
import img2 from '../../assets/img/sc4_img2.png';
import img3 from '../../assets/img/sc4_img3.png';
import img4 from '../../assets/img/sc4_img4.png';
import img5 from '../../assets/img/sc4_img5.png';
import img6 from '../../assets/img/sc4_img6.jpg';
import img7 from '../../assets/img/sc4_img7.jpg';
import img8 from '../../assets/img/sc4_img8.jpg';
import img9 from '../../assets/img/sc4_img9.png';
import img10 from '../../assets/img/sc4_img10.png';

const Section4 = () => {
    return (
        <div className='section4_wrap'>
            <p>@fila_korea</p>
            <div className="img">
                <div className="top">
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                    <img src={img5} alt="" />
                </div>
                <div className="bot">
                    <img src={img6} alt="" />
                    <img src={img7} alt="" />
                    <img src={img8} alt="" />
                    <img src={img9} alt="" />
                    <img src={img10} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Section4
