import React from 'react'
import { Link } from 'react-router-dom'

const Button = () => {
  return (
    <div>
        <div id="Button_Wrap">
            <Link to='/write'>
            <div className="title">글쓰기 Start!</div>
            </Link>
        </div>
    </div>
  )
}

export default Button
