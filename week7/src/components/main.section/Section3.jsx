import React from 'react'
import '../../asset/sass/section3.scss';
import part1 from '../../asset/image/section3_1.png';
import part2 from '../../asset/image/section3_2.png';
import part3 from '../../asset/image/section3_3.png';
const section3 = () => {
    return (
        <div className='section3_wrap'>

            <div className="part1">
                <img src={part1} alt='' />
                <div id='content'>
                    <span>VISION</span><br/>
                    <h3>IT 교육 기회를 제공하여 
                        <br/>
                        꿈꾸던 가능성을 열어준다.</h3><br/>
                    <p>Open up the possibility of dreaming by providing 
                        <br/>
                        IT education opportunities.</p>
                </div>
            </div>

            <div className="part2">
                <div id='content'>
                    <span>VISION</span><br/>
                    <h3>IT 기술로 IT 교육의 문제를 
                        <br/>
                        해결한다.
                    </h3>
                    <p>Solve IT education problems using IT 
                        <br/>
                        technology.</p>
                </div>
                <img src={part2} alt='' />
            </div>

            <div className="part3">
                <img src={part3} alt='' />
                <div id='content'>
                    <span>VISION</span><br/>
                    <h3>지속 성장이 가능한 IT 
                        <br/>
                        커뮤니티를 구축한다.</h3>
                    <p>Establish an IT community that can sustain 
                        <br/>
                        growth.</p>
                </div>
            </div>
        </div>
    )
}

export default section3
