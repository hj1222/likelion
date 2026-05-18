import React from 'react'
import '../../asset/sass/section1.scss';
import image1 from '../../asset/image/image1.png';
import image2 from '../../asset/image/image2.png';
import image3 from '../../asset/image/image3.png';
import image4 from '../../asset/image/image4.png';


const section1 = () => {
  return (
    <div className='section1_wrap'>
        <div className='center'>
        <div className='first'>
            <h2>POSSIBILITY</h2>
            <img src={image1} alt=''/>
        </div>
        <div className='second'>
            <img src={image2} alt='' id='image2'/>
            <h2>TO</h2>
            <img src={image3} alt='' id='image3'/>
        </div>
        <div className='third'>
            <h2>REALITY</h2>
            <img src={image4} alt='' />
        </div>
        </div>
    
    </div>
  )
}

export default section1
