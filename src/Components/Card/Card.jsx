import React from 'react'
import './Card.css'

const Card = ({emoji, heading, detail}) => {
  return (
    <div className='card'>
        {/* image via props from Services.jsx */}
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <button className='c-button'>Learn more</button>
    </div>
  )
}

export default Card
