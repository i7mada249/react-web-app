import React from 'react'
import './Feature.css';

const Feature = ( {title, text} ) => {
  return (
    <div className='features-cont__feature'>
      <div className='features-cont__feature-title'>
        <div/>
        <h1>{title}</h1>
      </div>
      <div className='features-cont_feature-text'>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Feature