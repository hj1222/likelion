import React from 'react'
import '../../asset/sass/section5.scss';
import box1 from '../../asset/image/box1.png';
import box2 from '../../asset/image/box2.png';
import box3 from '../../asset/image/box3.png';
import box4 from '../../asset/image/box4.png';

const section5 = () => {
  return (
    <div className='section5_wrap'>
      <p className='likelion'>LIKELION MEDIA</p>
      <p className='maintitle'>언론 속의 LIKELION</p>
      <div className="box">
        
        <div className="box1">
          <img src={box1} alt='' />
          <div id='content'>
            <p id='title'>“비즈니스 문제 해커톤으로 해<br />결”…멋쟁이사자처럼, 기업 해커톤<br />출시</p>
            <p id='detail'>정보기술(IT) 교육 기업 멋쟁이사자처<br />럼(멋사)은 31일부터 해커톤 참가자들<br />을 통해 기업이 가진 비즈니스 문제를...</p>
            <p id='border'></p>
            <p id='date'>머니S | 2023.10.31</p>
          </div>
        </div>

        <div className="box2">
          <img src={box2} alt="" />
          <div id='content'>
            <p id='title'>P2E ‘실타래‘, 편의성 강화해 진입<br />장벽 낮춘다</p>
            <p id='detail'>멋쟁이사자처럼은 메타콩즈뿐 아니라<br />여러 갈래의 대체불가토큰(NFT) 사업<br />을 펼쳤다. 멋쟁이사자처럼 산하 블록...</p>
            <p id='border'></p>
            <p id='date'>더별 | 2023.01.27</p>
          </div>
        </div>

        <div className="box3">
          <img src={box3} alt="" />
          <div id='content'>
            <p id='title'>콘크릿, 글로벌 아티스트 톰 삭스와<br />이태원 전역에서 보물찾기 진행</p>
            <p id='detail'>현대카드와 멋쟁이사자처럼의 합작법<br />인 모던라이언이 운영하는 NFT 마켓플<br />레이스 ‘KONKRIT(이하 콘크릿)’이...</p>
            <p id='border'></p>
            <p id='date'>경향게임스 | 2023.09.13</p>
          </div>
        </div>

        <div className="box4">
          <img src={box4} alt="" />
          <div id='content'>
            <p id='title'>멋쟁이사자처럼, 아트 NFT·실물<br />연계 ‘쿼드해시‘ 프로젝트 띄운다</p>
            <p id='detail'>멋쟁이사자처럼이 아트NFT와 실물을<br />연계한 대체불가토큰(NFT) 프로젝트<br />쿼드해시를 추진한다.</p>
            <p id='border'></p>
            <p id='date'>디지털투데이 | 2023.09.27</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default section5
