import React from 'react'
import './Card.css'

function Card({emoji, heading, detail}) {
  return (
    <div className='box'>
        <img src={emoji} alt="" />
        <span style={{color:"#09a672"}}>{heading}</span>
        <span>{detail}</span>
    </div>

  )
}

export default Card