import React from 'react'
import { FaTimes } from 'react-icons/fa';

export default ({ image, removeImage }) => (
  
    <div className='fadein'>
      <div 
        onClick={() => removeImage()} 
        className='delete'
      >
        <FaTimes />
      </div>
      <img src={image} alt='' />
    </div>
  )