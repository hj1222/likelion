import React, {useState} from 'react'
import '../../assets/sass/section1.scss';
import bgi1 from '../../assets/img/background1.png';
import bgi2 from '../../assets/img/background2.png';
import bgi3 from '../../assets/img/background3.png';
import bgi4 from '../../assets/img/background4.png';
import bgi5 from '../../assets/img/background5.png';
import left from '../../assets/img/left_icon.png';
import right from '../../assets/img/right_icon.png';

const Section1 = () => {
    const backgrounds=[bgi1, bgi2, bgi3, bgi4, bgi5];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === backgrounds.length - 1 ? 0 : prev+1));
    };
    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? backgrounds.length-1 : prev-1));
    };
   
  return (
    <div className='Section1_wrap'> 
        <div className="background" style={{backgroundImage: `url(${backgrounds[currentIndex]})`}}></div>
        <div className='font'>
            <h2>24 NEW 인터런</h2>
            <div className="border">
                <p>자세히 보기</p>
            </div>
        </div>
        <div className="slide">
            <div className="slidebar">
            {backgrounds.map((_,index) =>(
                <div key={index} className={`bar ${currentIndex === index ? 'active' : ''}`}
                />
            ))}
            
            </div>
            <button className='prev' onClick={prevSlide}><img src={left} alt="" /></button>
            <button className='next' onClick={nextSlide}><img src={right} alt="" /></button>
        </div>
        

       
        
    </div>
  );
}


export default Section1
