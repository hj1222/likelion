import React, {useState} from 'react'
import comment from '../assets/img/comment.png'
import fullheart from '../assets/img/fullheart.png'

const Article = ({title, content}) => {
  
  const [heartCount, setHeartCount]=useState(1);
  const[likeState, setLikeState]=useState(true);

  const heartClick = () =>{
    if(likeState){
      setHeartCount(0);
    }
    else
      setHeartCount(1);

    setLikeState(!likeState);
  }

  return (
    <div>
      <div id="Article_Wrap">
        <div className="article">
            <h1>{title}</h1>
            <p>
                {content}
            </p>
        </div>
        <div className="icon_group">
            <div className="comment">
                <img src={comment} alt="" />
                0
            </div>
            <div className="heart" onClick={() => heartClick()}>
                <img src={fullheart} alt="" />
                {heartCount}
            </div>
        </div>
        <footer>
            <input type="text" placeholder='댓글을 입력해주세요!'/>
            <button>등록</button>
        </footer>

      </div>
    </div>
  )
}

export default Article
