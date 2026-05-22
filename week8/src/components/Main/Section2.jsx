import React from 'react'
import '../../assets/sass/section2.scss';
import img0 from '../../assets/img/img0.png';
import img1 from '../../assets/img/img1 (2).png';
import img2 from '../../assets/img/img2 (2).png';
import img3 from '../../assets/img/img3 (2).png';
import img4 from '../../assets/img/img4 (2).png';
import img5 from '../../assets/img/img5.png';
import img6 from '../../assets/img/img6.png';
import icon from '../../assets/img/hearticon.png';

const Section1 = () => {
  const images = [img0, img1, img2, img3, img4, img5, img6];

  const items={
    categoty : '공용 컴포트핏 라이프스타일',
    title : '<COLD WAVE> 그래픽 프린트 냉감 티셔츠',
    price : '49,000원',
   
  }
  return (
    <div className='Section2_wrap'>
      <div className="top">
        <h2>지금 많이 찾는 상품</h2>
        <div className="list">
          <li className='bold'>#냉감티셔츠</li>
          <li>#에샤페</li>
          <li>#반팔티셔츠</li>
          <li>#페이토&샌들</li>
          <li>#인터런</li>
        </div>
      </div>

      <div className='list2'>
        {images.map((imgSrc, index) => (
          <div className='tbox' key={index}>
            <img src={imgSrc} alt="" />
            <div className="info">
              <p className='category'>{items.categoty}</p>
              <p className='title'>{items.title}</p>
              <div className="pricebox">
                <p className='price'>{items.price}</p>
                <img src={icon} alt="" />
              </div>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  )
}

export default Section1
