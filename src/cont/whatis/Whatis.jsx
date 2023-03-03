import React from 'react';
import { Feature } from '../../comp';
import './whatis.css';

const whatis = () => {
  return (
    <div className='whatis section__margin' id='wgpt3'>
      <div className='whatgpt3-feature'>
        <Feature />
      </div>
      <div className='whatgpt3-heading'>
        <h1 className='gradient-text'>The possibilities are beyond your imagination</h1>
        <p>Explore the library</p>
      </div>
    </div>
  )
}

export default whatis